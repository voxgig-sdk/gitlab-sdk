

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


describe('AwardEmojiEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.AwardEmoji()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of []) {
      if (!live && maybeSkipControl(t, 'entityOp', 'award_emoji.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0}},"id":{"field":"id","name":"id"},"name":"award_emoji","op":{"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /api/v4/groups/{id}/epics/{epic_iid}/notes/{note_id}/award_emoji/{award_id}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"epic_id","or":"epic_iid","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"group_id","or":"id","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"id","or":"award_id","r":true,"t":"`$STRING`","index$":2},{"a":true,"k":"param","n":"note_id","or":"note_id","r":true,"t":"`$STRING`","index$":3}]},"k":"http","m":"DELETE","o":"/api/v4/groups/{id}/epics/{epic_iid}/notes/{note_id}/award_emoji/{award_id}","q":{"exist":["epic_id","group_id","id","note_id"]},"r":{"param":{"award_id":"id","epic_iid":"epic_id","id":"group_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"epics"},{"var":"epic_id"},{"lit":"notes"},{"var":"note_id"},{"lit":"award_emoji"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"DELETE /api/v4/projects/{id}/issues/{issue_iid}/notes/{note_id}/award_emoji/{award_id}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"award_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"issue_id","or":"issue_iid","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"note_id","or":"note_id","r":true,"t":"`$STRING`","index$":2},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":3}]},"k":"http","m":"DELETE","o":"/api/v4/projects/{id}/issues/{issue_iid}/notes/{note_id}/award_emoji/{award_id}","q":{"exist":["id","issue_id","note_id","project_id"]},"r":{"param":{"award_id":"id","id":"project_id","issue_iid":"issue_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"issues"},{"var":"issue_id"},{"lit":"notes"},{"var":"note_id"},{"lit":"award_emoji"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"DELETE /api/v4/projects/{id}/merge_requests/{merge_request_iid}/notes/{note_id}/award_emoji/{award_id}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"award_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"merge_request_id","or":"merge_request_iid","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"note_id","or":"note_id","r":true,"t":"`$STRING`","index$":2},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":3}]},"k":"http","m":"DELETE","o":"/api/v4/projects/{id}/merge_requests/{merge_request_iid}/notes/{note_id}/award_emoji/{award_id}","q":{"exist":["id","merge_request_id","note_id","project_id"]},"r":{"param":{"award_id":"id","id":"project_id","merge_request_iid":"merge_request_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"merge_requests"},{"var":"merge_request_id"},{"lit":"notes"},{"var":"note_id"},{"lit":"award_emoji"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"DELETE /api/v4/projects/{id}/snippets/{snippet_id}/notes/{note_id}/award_emoji/{award_id}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"award_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"note_id","or":"note_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":2},{"a":true,"k":"param","n":"snippet_id","or":"snippet_id","r":true,"t":"`$STRING`","index$":3}]},"k":"http","m":"DELETE","o":"/api/v4/projects/{id}/snippets/{snippet_id}/notes/{note_id}/award_emoji/{award_id}","q":{"exist":["id","note_id","project_id","snippet_id"]},"r":{"param":{"award_id":"id","id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"snippets"},{"var":"snippet_id"},{"lit":"notes"},{"var":"note_id"},{"lit":"award_emoji"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3},{"a":true,"co":{"id":"DELETE /api/v4/groups/{id}/epics/{epic_iid}/award_emoji/{award_id}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"epic_id","or":"epic_iid","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"group_id","or":"id","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"id","or":"award_id","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"DELETE","o":"/api/v4/groups/{id}/epics/{epic_iid}/award_emoji/{award_id}","q":{"exist":["epic_id","group_id","id"]},"r":{"param":{"award_id":"id","epic_iid":"epic_id","id":"group_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"epics"},{"var":"epic_id"},{"lit":"award_emoji"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":4},{"a":true,"co":{"id":"DELETE /api/v4/projects/{id}/issues/{issue_iid}/award_emoji/{award_id}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"award_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"issue_id","or":"issue_iid","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"DELETE","o":"/api/v4/projects/{id}/issues/{issue_iid}/award_emoji/{award_id}","q":{"exist":["id","issue_id","project_id"]},"r":{"param":{"award_id":"id","id":"project_id","issue_iid":"issue_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"issues"},{"var":"issue_id"},{"lit":"award_emoji"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":5},{"a":true,"co":{"id":"DELETE /api/v4/projects/{id}/merge_requests/{merge_request_iid}/award_emoji/{award_id}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"award_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"merge_request_id","or":"merge_request_iid","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"DELETE","o":"/api/v4/projects/{id}/merge_requests/{merge_request_iid}/award_emoji/{award_id}","q":{"exist":["id","merge_request_id","project_id"]},"r":{"param":{"award_id":"id","id":"project_id","merge_request_iid":"merge_request_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"merge_requests"},{"var":"merge_request_id"},{"lit":"award_emoji"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":6},{"a":true,"co":{"id":"DELETE /api/v4/projects/{id}/snippets/{snippet_id}/award_emoji/{award_id}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"award_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"snippet_id","or":"snippet_id","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"DELETE","o":"/api/v4/projects/{id}/snippets/{snippet_id}/award_emoji/{award_id}","q":{"exist":["id","project_id","snippet_id"]},"r":{"param":{"award_id":"id","id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"snippets"},{"var":"snippet_id"},{"lit":"award_emoji"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":7}],"key$":"remove"}},"relations":{"ancestors":[["$.main.kit.entity.group"],["$.main.kit.entity.project"],["$.main.kit.entity.project","$.main.kit.entity.merge_request"],["$.main.kit.entity.project","$.main.kit.entity.snippet"],["$.main.kit.entity.group"],["$.main.kit.entity.project"],["$.main.kit.entity.project","$.main.kit.entity.merge_request"],["$.main.kit.entity.project","$.main.kit.entity.snippet"]]},"key$":"award_emoji","name__orig":"award_emoji","Name":"AwardEmoji","name_":"award_emoji","name-":"award-emoji","NAME":"AWARD_EMOJI","index$":173}, {"active":true,"entity":"award_emoji","key$":"BasicAwardEmojiFlow","kind":"basic","name":"BasicAwardEmojiFlow","param":{},"step":[]}, 'AwardEmoji', {"DELETE /api/v4/groups/{id}/epics/{epic_iid}/notes/{note_id}/award_emoji/{award_id}":{"protocol":"http","parameters":[{"in":"path","name":"award_id","description":"ID of an emoji reaction.","type":"integer","format":"int32","required":true,"index$":0},{"in":"path","name":"id","type":"integer","format":"int32","required":true,"index$":1},{"in":"path","name":"epic_iid","type":"integer","format":"int32","required":true,"index$":2},{"in":"path","name":"note_id","type":"integer","format":"int32","required":true,"index$":3}]},"DELETE /api/v4/projects/{id}/issues/{issue_iid}/notes/{note_id}/award_emoji/{award_id}":{"protocol":"http","parameters":[{"in":"path","name":"award_id","description":"ID of an emoji reaction.","type":"integer","format":"int32","required":true,"index$":0},{"in":"path","name":"id","type":"integer","format":"int32","required":true,"index$":1},{"in":"path","name":"issue_iid","type":"integer","format":"int32","required":true,"index$":2},{"in":"path","name":"note_id","type":"integer","format":"int32","required":true,"index$":3}]},"DELETE /api/v4/projects/{id}/merge_requests/{merge_request_iid}/notes/{note_id}/award_emoji/{award_id}":{"protocol":"http","parameters":[{"in":"path","name":"award_id","description":"ID of an emoji reaction.","type":"integer","format":"int32","required":true,"index$":0},{"in":"path","name":"id","type":"integer","format":"int32","required":true,"index$":1},{"in":"path","name":"merge_request_iid","type":"integer","format":"int32","required":true,"index$":2},{"in":"path","name":"note_id","type":"integer","format":"int32","required":true,"index$":3}]},"DELETE /api/v4/projects/{id}/snippets/{snippet_id}/notes/{note_id}/award_emoji/{award_id}":{"protocol":"http","parameters":[{"in":"path","name":"award_id","description":"ID of an emoji reaction.","type":"integer","format":"int32","required":true,"index$":0},{"in":"path","name":"id","type":"integer","format":"int32","required":true,"index$":1},{"in":"path","name":"snippet_id","type":"integer","format":"int32","required":true,"index$":2},{"in":"path","name":"note_id","type":"integer","format":"int32","required":true,"index$":3}]},"DELETE /api/v4/groups/{id}/epics/{epic_iid}/award_emoji/{award_id}":{"protocol":"http","parameters":[{"in":"path","name":"award_id","description":"ID of an emoji reaction.","type":"integer","format":"int32","required":true,"index$":0},{"in":"path","name":"id","type":"integer","format":"int32","required":true,"index$":1},{"in":"path","name":"epic_iid","type":"integer","format":"int32","required":true,"index$":2}]},"DELETE /api/v4/projects/{id}/issues/{issue_iid}/award_emoji/{award_id}":{"protocol":"http","parameters":[{"in":"path","name":"award_id","description":"ID of an emoji reaction.","type":"integer","format":"int32","required":true,"index$":0},{"in":"path","name":"id","type":"integer","format":"int32","required":true,"index$":1},{"in":"path","name":"issue_iid","type":"integer","format":"int32","required":true,"index$":2}]},"DELETE /api/v4/projects/{id}/merge_requests/{merge_request_iid}/award_emoji/{award_id}":{"protocol":"http","parameters":[{"in":"path","name":"award_id","description":"ID of an emoji reaction.","type":"integer","format":"int32","required":true,"index$":0},{"in":"path","name":"id","type":"integer","format":"int32","required":true,"index$":1},{"in":"path","name":"merge_request_iid","type":"integer","format":"int32","required":true,"index$":2}]},"DELETE /api/v4/projects/{id}/snippets/{snippet_id}/award_emoji/{award_id}":{"protocol":"http","parameters":[{"in":"path","name":"award_id","description":"ID of an emoji reaction.","type":"integer","format":"int32","required":true,"index$":0},{"in":"path","name":"id","type":"integer","format":"int32","required":true,"index$":1},{"in":"path","name":"snippet_id","type":"integer","format":"int32","required":true,"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let award_emoji_ref01_data = Object.values(setup.data.existing.award_emoji)[0] as any

  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/award_emoji/AwardEmojiTestData.json')

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
    ['award_emoji01','award_emoji02','award_emoji03','group01','group02','group03','project01','project02','project03','merge_request01','merge_request02','merge_request03','snippet01','snippet02','snippet03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_AWARD_EMOJI_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_AWARD_EMOJI_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_AWARD_EMOJI_ENTID']
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
  
