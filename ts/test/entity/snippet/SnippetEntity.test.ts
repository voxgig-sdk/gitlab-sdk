

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


describe('SnippetEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.Snippet()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'snippet.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0}},"id":{"field":"id","name":"id"},"name":"snippet","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v4/snippets/{id}/files/{ref}/{file_path}/raw","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"file_id","or":"ref","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"file_path","or":"file_path","r":true,"t":"`$ANY`","index$":1},{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/api/v4/snippets/{id}/files/{ref}/{file_path}/raw","q":{"exist":["file_id","file_path","id"]},"r":{"param":{"ref":"file_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"snippets"},{"var":"id"},{"lit":"files"},{"var":"file_id"},{"var":"file_path"},{"lit":"raw"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /api/v4/snippets/{id}/raw","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/v4/snippets/{id}/raw","q":{"$action":"raw","exist":["id"]},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"snippets"},{"var":"id"},{"lit":"raw"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /api/v4/snippets/{id}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/api/v4/snippets/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"snippets"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[]},"key$":"snippet","name__orig":"snippet","Name":"Snippet","name_":"snippet","name-":"snippet","NAME":"SNIPPET","index$":262}, {"active":true,"entity":"snippet","key$":"BasicSnippetFlow","kind":"basic","name":"BasicSnippetFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"snippet_ref01","srcdatavar":"snippet_ref01_data","suffix":"_dt0"},"m":{"id":"snippet01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-snippet_ref01"}}],"index$":0}]}, 'Snippet', {"GET /api/v4/snippets/{id}/files/{ref}/{file_path}/raw":{"protocol":"http","parameters":[{"in":"path","name":"file_path","description":"The URL-encoded path to the file, like lib%2Fclass%2Erb","type":"string","required":true,"index$":0},{"in":"path","name":"ref","description":"The name of branch, tag or commit","type":"string","required":true,"index$":1},{"in":"path","name":"id","type":"integer","format":"int32","required":true,"index$":2}]},"GET /api/v4/snippets/{id}/raw":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID of a snippet","type":"integer","format":"int32","required":true,"index$":0}]},"DELETE /api/v4/snippets/{id}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID of a snippet","type":"integer","format":"int32","required":true,"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let snippet_ref01_data = Object.values(setup.data.existing.snippet)[0] as any

    // LOAD
    const snippet_ref01_ent = client.Snippet()
    const snippet_ref01_match_dt0: any = {}
    snippet_ref01_match_dt0.id = snippet_ref01_data.id
    const snippet_ref01_data_dt0 = (await snippet_ref01_ent.load(snippet_ref01_match_dt0)).data()
    assert(snippet_ref01_data_dt0.id === snippet_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/snippet/SnippetTestData.json')

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
    ['snippet01','snippet02','snippet03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_SNIPPET_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_SNIPPET_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_SNIPPET_ENTID']
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
  
