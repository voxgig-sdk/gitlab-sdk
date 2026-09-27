

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


describe('ReleaseEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.Release()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'release.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0}},"id":{"field":"id","name":"id"},"name":"release","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v4/projects/{id}/releases/{tag_name}/downloads/*direct_asset_path","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"release_id","or":"tag_name","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"direct_asset_path","or":"direct_asset_path","r":true,"t":"`$ANY`","index$":0}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/releases/{tag_name}/downloads/*direct_asset_path","q":{"$action":"download_direct_asset_path","exist":["direct_asset_path","project_id","release_id"]},"r":{"param":{"id":"project_id","tag_name":"release_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"releases"},{"var":"release_id"},{"lit":"downloads"},{"lit":"*direct_asset_path"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /api/v4/projects/{id}/releases/permalink/latest(/)(*suffix_path)","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"suffix_path","or":"suffix_path","r":true,"t":"`$ANY`","index$":0}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/releases/permalink/latest(/)(*suffix_path)","q":{"exist":["project_id","suffix_path"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"releases"},{"lit":"permalink"},{"lit":"latest("},{"lit":")(*suffix_path)"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /api/v4/projects/{id}/releases/{tag_name}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"tag_name","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/api/v4/projects/{id}/releases/{tag_name}","q":{"exist":["id","project_id"]},"r":{"param":{"id":"project_id","tag_name":"id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"releases"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[["$.main.kit.entity.project"],["$.main.kit.entity.project"]]},"key$":"release","name__orig":"release","Name":"Release","name_":"release","name-":"release","NAME":"RELEASE","index$":251}, {"active":true,"entity":"release","key$":"BasicReleaseFlow","kind":"basic","name":"BasicReleaseFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"release_ref01","srcdatavar":"release_ref01_data","suffix":"_dt0"},"m":{"id":"release01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-release_ref01"}}],"index$":0}]}, 'Release', {"GET /api/v4/projects/{id}/releases/{tag_name}/downloads/*direct_asset_path":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"in":"path","name":"tag_name","description":"The Git tag the release is associated with","type":"string","required":true,"index$":1},{"in":"query","name":"direct_asset_path","description":"The path to the file to download, as specified when creating the release asset","type":"string","required":true,"index$":2}]},"GET /api/v4/projects/{id}/releases/permalink/latest(/)(*suffix_path)":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"in":"query","name":"suffix_path","description":"The path to be suffixed to the latest release","type":"string","required":true,"index$":1}]},"DELETE /api/v4/projects/{id}/releases/{tag_name}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"in":"path","name":"tag_name","description":"The Git tag the release is associated with","type":"string","required":true,"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let release_ref01_data = Object.values(setup.data.existing.release)[0] as any

    // LOAD
    const release_ref01_ent = client.Release()
    const release_ref01_match_dt0: any = {}
    release_ref01_match_dt0.id = release_ref01_data.id
    const release_ref01_data_dt0 = (await release_ref01_ent.load(release_ref01_match_dt0)).data()
    assert(release_ref01_data_dt0.id === release_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/release/ReleaseTestData.json')

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
    ['release01','release02','release03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_RELEASE_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_RELEASE_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_RELEASE_ENTID']
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
  
