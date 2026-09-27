

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


describe('ApiEntitiesLicenseEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesLicense()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_license.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"conditions":{"a":true,"h":"Conditions","n":"conditions","r":false,"t":"`$ARRAY`","key$":"conditions","index$":0},"content":{"a":true,"h":"Content","n":"content","r":false,"t":"`$STRING`","key$":"content","index$":1},"description":{"a":true,"h":"Description","n":"description","r":false,"t":"`$STRING`","key$":"description","index$":2},"html_url":{"a":true,"h":"Html Url","n":"html_url","r":false,"t":"`$STRING`","key$":"html_url","index$":3},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":4},"key":{"a":true,"h":"Key","n":"key","r":false,"t":"`$STRING`","key$":"key","index$":5},"limitations":{"a":true,"h":"Limitations","n":"limitations","r":false,"t":"`$ARRAY`","key$":"limitations","index$":6},"name":{"a":true,"h":"Name","n":"name","r":false,"t":"`$STRING`","key$":"name","index$":7},"nickname":{"a":true,"h":"Nickname","n":"nickname","r":false,"t":"`$STRING`","key$":"nickname","index$":8},"permissions":{"a":true,"h":"Permissions","n":"permissions","r":false,"t":"`$ARRAY`","key$":"permissions","index$":9},"popular":{"a":true,"h":"Popular","n":"popular","r":false,"t":"`$BOOLEAN`","key$":"popular","index$":10},"source_url":{"a":true,"h":"Source Url","n":"source_url","r":false,"t":"`$STRING`","key$":"source_url","index$":11}},"id":{"field":"id","from":{"name":"name"},"name":"id","parts":["type","name"],"sep":"/"},"name":"api_entities_license","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v4/projects/{id}/templates/{type}/{name}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"MIT","k":"param","n":"name","or":"name","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"type","or":"type","r":true,"t":"`$ANY`","index$":2}],"query":[{"a":true,"ex":"GitLab B.V.","k":"query","n":"fullname","or":"fullname","r":false,"t":"`$ANY`","index$":0},{"a":true,"ex":"GitLab","k":"query","n":"project","or":"project","r":false,"t":"`$ANY`","index$":1},{"a":true,"ex":1,"k":"query","n":"source_template_project_id","or":"source_template_project_id","r":false,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/templates/{type}/{name}","q":{"exist":["fullname","id","name","project","source_template_project_id","type"]},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"id"},{"lit":"templates"},{"var":"type"},{"var":"name"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"api_entities_license","name__orig":"api_entities_license","Name":"ApiEntitiesLicense","name_":"api_entities_license","name-":"api-entities-license","NAME":"API_ENTITIES_LICENSE","index$":88}, {"active":true,"entity":"api_entities_license","key$":"BasicApiEntitiesLicenseFlow","kind":"basic","name":"BasicApiEntitiesLicenseFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"api_entities_license_ref01","srcdatavar":"api_entities_license_ref01_data","suffix":"_dt0"},"m":{"id":"api_entities_license01","type":"type01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_license_ref01"}}],"index$":0}]}, 'ApiEntitiesLicense', {"GET /api/v4/projects/{id}/templates/{type}/{name}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"in":"path","name":"type","description":"The type (dockerfiles|gitignores|gitlab_ci_ymls|licenses|issues|merge_requests) of the template","type":"string","enum":["dockerfiles","gitignores","gitlab_ci_ymls","licenses","issues","merge_requests"],"required":true,"index$":1},{"in":"path","name":"name","description":"The key of the template, as obtained from the collection endpoint.","type":"string","required":true,"example":"MIT","index$":2},{"in":"query","name":"source_template_project_id","description":"The project id where a given template is being stored. This is useful when multiple templates from different projects have the same name","type":"integer","format":"int32","required":false,"example":1,"index$":3},{"in":"query","name":"project","description":"The project name to use when expanding placeholders in the template. Only affects licenses","type":"string","required":false,"example":"GitLab","index$":4},{"in":"query","name":"fullname","description":"The full name of the copyright holder to use when expanding placeholders in the template. Only affects licenses","type":"string","required":false,"example":"GitLab B.V.","index$":5}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let api_entities_license_ref01_data = Object.values(setup.data.existing.api_entities_license)[0] as any

    // LOAD
    const api_entities_license_ref01_ent = client.ApiEntitiesLicense()
    const api_entities_license_ref01_match_dt0: any = {}
    api_entities_license_ref01_match_dt0.id = api_entities_license_ref01_data.id
    const api_entities_license_ref01_data_dt0 = (await api_entities_license_ref01_ent.load(api_entities_license_ref01_match_dt0)).data()
    assert(api_entities_license_ref01_data_dt0.id === api_entities_license_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_license/ApiEntitiesLicenseTestData.json')

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
    ['api_entities_license01','api_entities_license02','api_entities_license03','type01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_LICENSE_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_LICENSE_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_LICENSE_ENTID']
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
  
