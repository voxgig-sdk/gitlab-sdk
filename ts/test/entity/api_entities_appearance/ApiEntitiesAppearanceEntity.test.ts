

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


describe('ApiEntitiesAppearanceEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesAppearance()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_appearance.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"description":{"a":true,"h":"Description","n":"description","r":false,"t":"`$STRING`","key$":"description","index$":0},"email_header_and_footer_enabled":{"a":true,"h":"Email Header And Footer Enabled","n":"email_header_and_footer_enabled","r":false,"t":"`$STRING`","key$":"email_header_and_footer_enabled","index$":1},"favicon":{"a":true,"h":"Favicon","n":"favicon","r":false,"t":"`$STRING`","key$":"favicon","index$":2},"footer_message":{"a":true,"h":"Footer Message","n":"footer_message","r":false,"t":"`$STRING`","key$":"footer_message","index$":3},"header_logo":{"a":true,"h":"Header Logo","n":"header_logo","r":false,"t":"`$STRING`","key$":"header_logo","index$":4},"header_message":{"a":true,"h":"Header Message","n":"header_message","r":false,"t":"`$STRING`","key$":"header_message","index$":5},"logo":{"a":true,"h":"Logo","n":"logo","r":false,"t":"`$STRING`","key$":"logo","index$":6},"member_guidelines":{"a":true,"h":"Member Guidelines","n":"member_guidelines","r":false,"t":"`$STRING`","key$":"member_guidelines","index$":7},"message_background_color":{"a":true,"h":"Message Background Color","n":"message_background_color","r":false,"t":"`$STRING`","key$":"message_background_color","index$":8},"message_font_color":{"a":true,"h":"Message Font Color","n":"message_font_color","r":false,"t":"`$STRING`","key$":"message_font_color","index$":9},"new_project_guidelines":{"a":true,"h":"New Project Guidelines","n":"new_project_guidelines","r":false,"t":"`$STRING`","key$":"new_project_guidelines","index$":10},"profile_image_guidelines":{"a":true,"h":"Profile Image Guidelines","n":"profile_image_guidelines","r":false,"t":"`$STRING`","key$":"profile_image_guidelines","index$":11},"pwa_description":{"a":true,"h":"Pwa Description","n":"pwa_description","r":false,"t":"`$STRING`","key$":"pwa_description","index$":12},"pwa_icon":{"a":true,"h":"Pwa Icon","n":"pwa_icon","r":false,"t":"`$STRING`","key$":"pwa_icon","index$":13},"pwa_name":{"a":true,"h":"Pwa Name","n":"pwa_name","r":false,"t":"`$STRING`","key$":"pwa_name","index$":14},"pwa_short_name":{"a":true,"h":"Pwa Short Name","n":"pwa_short_name","r":false,"t":"`$STRING`","key$":"pwa_short_name","index$":15},"title":{"a":true,"h":"Title","n":"title","r":false,"t":"`$STRING`","key$":"title","index$":16}},"name":"api_entities_appearance","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v4/application/appearance","source":"swagger2","version":2},"g":{},"k":"http","m":"GET","o":"/api/v4/application/appearance","q":{},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"application"},{"lit":"appearance"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /api/v4/application/appearance","source":"swagger2","version":2},"g":{"query":[{"a":true,"k":"query","n":"description","or":"description","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"email_header_and_footer_enabled","or":"email_header_and_footer_enabled","r":false,"t":"`$ANY`","index$":1},{"a":true,"k":"query","n":"favicon","or":"favicon","r":false,"t":"`$ANY`","index$":2},{"a":true,"k":"query","n":"footer_message","or":"footer_message","r":false,"t":"`$ANY`","index$":3},{"a":true,"k":"query","n":"header_logo","or":"header_logo","r":false,"t":"`$ANY`","index$":4},{"a":true,"k":"query","n":"header_message","or":"header_message","r":false,"t":"`$ANY`","index$":5},{"a":true,"k":"query","n":"logo","or":"logo","r":false,"t":"`$ANY`","index$":6},{"a":true,"k":"query","n":"member_guideline","or":"member_guideline","r":false,"t":"`$ANY`","index$":7},{"a":true,"k":"query","n":"message_background_color","or":"message_background_color","r":false,"t":"`$ANY`","index$":8},{"a":true,"k":"query","n":"message_font_color","or":"message_font_color","r":false,"t":"`$ANY`","index$":9},{"a":true,"k":"query","n":"new_project_guideline","or":"new_project_guideline","r":false,"t":"`$ANY`","index$":10},{"a":true,"k":"query","n":"profile_image_guideline","or":"profile_image_guideline","r":false,"t":"`$ANY`","index$":11},{"a":true,"k":"query","n":"pwa_description","or":"pwa_description","r":false,"t":"`$ANY`","index$":12},{"a":true,"k":"query","n":"pwa_icon","or":"pwa_icon","r":false,"t":"`$ANY`","index$":13},{"a":true,"k":"query","n":"pwa_name","or":"pwa_name","r":false,"t":"`$ANY`","index$":14},{"a":true,"k":"query","n":"pwa_short_name","or":"pwa_short_name","r":false,"t":"`$ANY`","index$":15},{"a":true,"k":"query","n":"title","or":"title","r":false,"t":"`$STRING`","index$":16}]},"k":"http","m":"PUT","o":"/api/v4/application/appearance","q":{"exist":["description","email_header_and_footer_enabled","favicon","footer_message","header_logo","header_message","logo","member_guideline","message_background_color","message_font_color","new_project_guideline","profile_image_guideline","pwa_description","pwa_icon","pwa_name","pwa_short_name","title"]},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"application"},{"lit":"appearance"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"api_entities_appearance","name__orig":"api_entities_appearance","Name":"ApiEntitiesAppearance","name_":"api_entities_appearance","name-":"api-entities-appearance","NAME":"API_ENTITIES_APPEARANCE","index$":3}, {"active":true,"entity":"api_entities_appearance","key$":"BasicApiEntitiesAppearanceFlow","kind":"basic","name":"BasicApiEntitiesAppearanceFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"api_entities_appearance_ref01","srcdatavar":"api_entities_appearance_ref01_data","suffix":"_up0","textfield":"description"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_appearance_ref01"}}],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"api_entities_appearance_ref01","srcdatavar":"api_entities_appearance_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_appearance_ref01"}}],"index$":1}]}, 'ApiEntitiesAppearance', {"GET /api/v4/application/appearance":{"protocol":"http","parameters":[]},"PUT /api/v4/application/appearance":{"protocol":"http","parameters":[{"in":"formData","name":"title","description":"Instance title on the sign in / sign up page","type":"string","required":false,"index$":0},{"in":"formData","name":"description","description":"Markdown text shown on the sign in / sign up page","type":"string","required":false,"index$":1},{"in":"formData","name":"pwa_name","description":"Name of the Progressive Web App","type":"string","required":false,"index$":2},{"in":"formData","name":"pwa_short_name","description":"Optional, short name for Progressive Web App","type":"string","required":false,"index$":3},{"in":"formData","name":"pwa_description","description":"An explanation of what the Progressive Web App does","type":"string","required":false,"index$":4},{"in":"formData","name":"logo","description":"Instance image used on the sign in / sign up page","type":"file","required":false,"index$":5},{"in":"formData","name":"pwa_icon","description":"Icon used for Progressive Web App","type":"file","required":false,"index$":6},{"in":"formData","name":"header_logo","description":"Instance image used for the main navigation bar","type":"file","required":false,"index$":7},{"in":"formData","name":"favicon","description":"Instance favicon in .ico/.png format","type":"file","required":false,"index$":8},{"in":"formData","name":"member_guidelines","description":"Markdown text shown on the members page of a group or project","type":"string","required":false,"index$":9},{"in":"formData","name":"new_project_guidelines","description":"Markdown text shown on the new project page","type":"string","required":false,"index$":10},{"in":"formData","name":"profile_image_guidelines","description":"Markdown text shown on the profile page below Public Avatar","type":"string","required":false,"index$":11},{"in":"formData","name":"header_message","description":"Message within the system header bar","type":"string","required":false,"index$":12},{"in":"formData","name":"footer_message","description":"Message within the system footer bar","type":"string","required":false,"index$":13},{"in":"formData","name":"message_background_color","description":"Background color for the system header / footer bar","type":"string","required":false,"index$":14},{"in":"formData","name":"message_font_color","description":"Font color for the system header / footer bar","type":"string","required":false,"index$":15},{"in":"formData","name":"email_header_and_footer_enabled","description":"Add header and footer to all outgoing emails if enabled","type":"boolean","required":false,"index$":16}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let api_entities_appearance_ref01_data = Object.values(setup.data.existing.api_entities_appearance)[0] as any

    // UPDATE
    const api_entities_appearance_ref01_ent = client.ApiEntitiesAppearance()
    const api_entities_appearance_ref01_data_up0: any = {}

    const api_entities_appearance_ref01_markdef_up0 = { name: 'description', value: 'Mark01-api_entities_appearance_ref01_' + setup.now }
    ;(api_entities_appearance_ref01_data_up0 as any)[api_entities_appearance_ref01_markdef_up0.name] = api_entities_appearance_ref01_markdef_up0.value

    const api_entities_appearance_ref01_resdata_up0 = (await api_entities_appearance_ref01_ent.update(api_entities_appearance_ref01_data_up0)).data()
    assert(null != api_entities_appearance_ref01_resdata_up0)

    assert((api_entities_appearance_ref01_resdata_up0 as any)[api_entities_appearance_ref01_markdef_up0.name] === api_entities_appearance_ref01_markdef_up0.value)


    // LOAD
    const api_entities_appearance_ref01_match_dt0: any = {}
    const api_entities_appearance_ref01_data_dt0 = (await api_entities_appearance_ref01_ent.load(api_entities_appearance_ref01_match_dt0)).data()
    assert(null != api_entities_appearance_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_appearance/ApiEntitiesAppearanceTestData.json')

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
    ['api_entities_appearance01','api_entities_appearance02','api_entities_appearance03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_APPEARANCE_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_APPEARANCE_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_APPEARANCE_ENTID']
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
  
