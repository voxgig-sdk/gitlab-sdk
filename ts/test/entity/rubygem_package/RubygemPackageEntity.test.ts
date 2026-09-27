

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


describe('RubygemPackageEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.RubygemPackage()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'rubygem_package.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"rubygem_package","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/v4/projects/{id}/packages/rubygems/api/v1/gems","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"post_api_v4_projects_id_packages_rubygems_api_v1_gem","or":"post_api_v4_projects_id_packages_rubygems_api_v1_gem","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/api/v4/projects/{id}/packages/rubygems/api/v1/gems","q":{"exist":["post_api_v4_projects_id_packages_rubygems_api_v1_gem","project_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"packages"},{"lit":"rubygems"},{"lit":"api"},{"lit":"v1"},{"lit":"gems"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /api/v4/projects/{id}/packages/rubygems/api/v1/gems/authorize","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/api/v4/projects/{id}/packages/rubygems/api/v1/gems/authorize","q":{"exist":["project_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"packages"},{"lit":"rubygems"},{"lit":"api"},{"lit":"v1"},{"lit":"gems"},{"lit":"authorize"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v4/projects/{id}/packages/rubygems/gems/{file_name}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"file_name","or":"file_name","r":true,"t":"`$ANY`","index$":0},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/packages/rubygems/gems/{file_name}","q":{"exist":["file_name","project_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"packages"},{"lit":"rubygems"},{"lit":"gems"},{"var":"file_name"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /api/v4/projects/{id}/packages/rubygems/quick/Marshal.4.8/{file_name}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"file_name","or":"file_name","r":true,"t":"`$ANY`","index$":0},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/packages/rubygems/quick/Marshal.4.8/{file_name}","q":{"exist":["file_name","project_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"packages"},{"lit":"rubygems"},{"lit":"quick"},{"lit":"Marshal.4.8"},{"var":"file_name"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"GET /api/v4/projects/{id}/packages/rubygems/api/v1/dependencies","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"gem","or":"gem","r":false,"t":"`$ANY`","index$":0}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/packages/rubygems/api/v1/dependencies","q":{"exist":["gem","project_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"packages"},{"lit":"rubygems"},{"lit":"api"},{"lit":"v1"},{"lit":"dependencies"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.project"],["$.main.kit.entity.project"],["$.main.kit.entity.project"]]},"key$":"rubygem_package","name__orig":"rubygem_package","Name":"RubygemPackage","name_":"rubygem_package","name-":"rubygem-package","NAME":"RUBYGEM_PACKAGE","index$":257}, {"active":true,"entity":"rubygem_package","key$":"BasicRubygemPackageFlow","kind":"basic","name":"BasicRubygemPackageFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"rubygem_package_ref01"},"m":{"project_id":"project01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"rubygem_package_ref01","srcdatavar":"rubygem_package_ref01_data","suffix":"_dt0"},"m":{"id":"rubygem_package01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-rubygem_package_ref01"}}],"index$":1}]}, 'RubygemPackage', {"POST /api/v4/projects/{id}/packages/rubygems/api/v1/gems":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"integer","format":"int32","required":true,"index$":0},{"name":"postApiV4ProjectsIdPackagesRubygemsApiV1Gems","in":"body","required":true,"schema":{"type":"object","properties":{"file":{"type":"file","description":"The package file to be published (generated by Multipart middleware)"}},"required":["file"],"description":"Upload a gem","x-ref":"#/definitions/postApiV4ProjectsIdPackagesRubygemsApiV1Gems"},"index$":1}]},"POST /api/v4/projects/{id}/packages/rubygems/api/v1/gems/authorize":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"integer","format":"int32","required":true,"index$":0}]},"GET /api/v4/projects/{id}/packages/rubygems/gems/{file_name}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"integer","format":"int32","required":true,"index$":0},{"in":"path","name":"file_name","description":"Package file name","type":"file","required":true,"index$":1}]},"GET /api/v4/projects/{id}/packages/rubygems/quick/Marshal.4.8/{file_name}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"integer","format":"int32","required":true,"index$":0},{"in":"path","name":"file_name","description":"Gemspec file name","type":"file","required":true,"index$":1}]},"GET /api/v4/projects/{id}/packages/rubygems/api/v1/dependencies":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"integer","format":"int32","required":true,"index$":0},{"in":"query","name":"gems","description":"Comma delimited gem names","type":"array","items":{"type":"string"},"required":false,"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const rubygem_package_ref01_ent = client.RubygemPackage()
    let rubygem_package_ref01_data = setup.data.new.rubygem_package['rubygem_package_ref01']
    rubygem_package_ref01_data['project_id'] = setup.idmap['project01']

    rubygem_package_ref01_data = (await rubygem_package_ref01_ent.create(rubygem_package_ref01_data)).data()
    assert(null != rubygem_package_ref01_data)



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/rubygem_package/RubygemPackageTestData.json')

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
    ['rubygem_package01','rubygem_package02','rubygem_package03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_RUBYGEM_PACKAGE_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_RUBYGEM_PACKAGE_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_RUBYGEM_PACKAGE_ENTID']
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
  
