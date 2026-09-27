

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


describe('ApiEntitiesBasicBadgeDetailEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesBasicBadgeDetail()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_basic_badge_detail.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"image_url":{"a":true,"h":"Image Url","n":"image_url","r":false,"t":"`$STRING`","key$":"image_url","index$":0},"link_url":{"a":true,"h":"Link Url","n":"link_url","r":false,"t":"`$STRING`","key$":"link_url","index$":1},"name":{"a":true,"h":"Name","n":"name","r":false,"t":"`$STRING`","key$":"name","index$":2},"rendered_image_url":{"a":true,"h":"Rendered Image Url","n":"rendered_image_url","r":false,"t":"`$STRING`","key$":"rendered_image_url","index$":3},"rendered_link_url":{"a":true,"h":"Rendered Link Url","n":"rendered_link_url","r":false,"t":"`$STRING`","key$":"rendered_link_url","index$":4}},"name":"api_entities_basic_badge_detail","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v4/groups/{id}/badges/render","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"group_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"image_url","or":"image_url","r":true,"t":"`$ANY`","index$":0},{"a":true,"k":"query","n":"link_url","or":"link_url","r":true,"t":"`$ANY`","index$":1}]},"k":"http","m":"GET","o":"/api/v4/groups/{id}/badges/render","q":{"exist":["group_id","image_url","link_url"]},"r":{"param":{"id":"group_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"badges"},{"lit":"render"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /api/v4/projects/{id}/badges/render","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"image_url","or":"image_url","r":true,"t":"`$ANY`","index$":0},{"a":true,"k":"query","n":"link_url","or":"link_url","r":true,"t":"`$ANY`","index$":1}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/badges/render","q":{"exist":["image_url","link_url","project_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"badges"},{"lit":"render"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.group"],["$.main.kit.entity.project"]]},"key$":"api_entities_basic_badge_detail","name__orig":"api_entities_basic_badge_detail","Name":"ApiEntitiesBasicBadgeDetail","name_":"api_entities_basic_badge_detail","name-":"api-entities-basic-badge-detail","NAME":"API_ENTITIES_BASIC_BADGE_DETAIL","index$":10}, {"active":true,"entity":"api_entities_basic_badge_detail","key$":"BasicApiEntitiesBasicBadgeDetailFlow","kind":"basic","name":"BasicApiEntitiesBasicBadgeDetailFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"api_entities_basic_badge_detail_ref01","srcdatavar":"api_entities_basic_badge_detail_ref01_data","suffix":"_dt0"},"m":{"id":"api_entities_basic_badge_detail01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_basic_badge_detail_ref01"}}],"index$":0}]}, 'ApiEntitiesBasicBadgeDetail', {"GET /api/v4/groups/{id}/badges/render":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the group owned by the authenticated user.","type":"string","required":true,"index$":0},{"in":"query","name":"link_url","description":"URL of the badge link","type":"string","required":true,"index$":1},{"in":"query","name":"image_url","description":"URL of the badge image","type":"string","required":true,"index$":2}]},"GET /api/v4/projects/{id}/badges/render":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project owned by the authenticated user.","type":"string","required":true,"index$":0},{"in":"query","name":"link_url","description":"URL of the badge link","type":"string","required":true,"index$":1},{"in":"query","name":"image_url","description":"URL of the badge image","type":"string","required":true,"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let api_entities_basic_badge_detail_ref01_data = Object.values(setup.data.existing.api_entities_basic_badge_detail)[0] as any

    // LOAD: skipped — no entity id field and load requires path params.
    // Entity-var is declared here so later flow steps still compile.
    const api_entities_basic_badge_detail_ref01_ent = client.ApiEntitiesBasicBadgeDetail()


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_basic_badge_detail/ApiEntitiesBasicBadgeDetailTestData.json')

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
    ['api_entities_basic_badge_detail01','api_entities_basic_badge_detail02','api_entities_basic_badge_detail03','group01','group02','group03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_BASIC_BADGE_DETAIL_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_BASIC_BADGE_DETAIL_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_BASIC_BADGE_DETAIL_ENTID']
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
  
