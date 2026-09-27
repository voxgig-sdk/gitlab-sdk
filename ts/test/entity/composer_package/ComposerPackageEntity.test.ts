

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


describe('ComposerPackageEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ComposerPackage()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'composer_package.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"composer_package","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v4/projects/{id}/packages/composer/archives/*package_name","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"my-composer-package","k":"query","n":"package_name","or":"package_name","r":true,"t":"`$ANY`","index$":0},{"a":true,"ex":"673594f85a55fe3c0eb45df7bd2fa9d95a1601ab","k":"query","n":"sha","or":"sha","r":true,"t":"`$ANY`","index$":1}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/packages/composer/archives/*package_name","q":{"exist":["package_name","project_id","sha"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"packages"},{"lit":"composer"},{"lit":"archives"},{"lit":"*package_name"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /api/v4/group/{id}/-/packages/composer/*package_name","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"group_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"my-composer-package","k":"query","n":"package_name","or":"package_name","r":true,"t":"`$ANY`","index$":0}]},"k":"http","m":"GET","o":"/api/v4/group/{id}/-/packages/composer/*package_name","q":{"exist":["group_id","package_name"]},"r":{"param":{"id":"group_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"group"},{"var":"group_id"},{"lit":"-"},{"lit":"packages"},{"lit":"composer"},{"lit":"*package_name"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"GET /api/v4/group/{id}/-/packages/composer/p2/*package_name","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"group_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"my-composer-package","k":"query","n":"package_name","or":"package_name","r":true,"t":"`$ANY`","index$":0}]},"k":"http","m":"GET","o":"/api/v4/group/{id}/-/packages/composer/p2/*package_name","q":{"exist":["group_id","package_name"]},"r":{"param":{"id":"group_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"group"},{"var":"group_id"},{"lit":"-"},{"lit":"packages"},{"lit":"composer"},{"lit":"p2"},{"lit":"*package_name"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"GET /api/v4/group/{id}/-/packages/composer/p/{sha}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"group_id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"673594f85a55fe3c0eb45df7bd2fa9d95a1601ab","k":"param","n":"sha","or":"sha","r":true,"t":"`$ANY`","index$":1}]},"k":"http","m":"GET","o":"/api/v4/group/{id}/-/packages/composer/p/{sha}","q":{"exist":["group_id","sha"]},"r":{"param":{"id":"group_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"group"},{"var":"group_id"},{"lit":"-"},{"lit":"packages"},{"lit":"composer"},{"lit":"p"},{"var":"sha"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /api/v4/group/{id}/-/packages/composer/packages","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"group_id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/v4/group/{id}/-/packages/composer/packages","q":{"exist":["group_id"]},"r":{"param":{"id":"group_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"group"},{"var":"group_id"},{"lit":"-"},{"lit":"packages"},{"lit":"composer"},{"lit":"packages"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":4}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.group"],["$.main.kit.entity.project"],["$.main.kit.entity.group"]]},"key$":"composer_package","name__orig":"composer_package","Name":"ComposerPackage","name_":"composer_package","name-":"composer-package","NAME":"COMPOSER_PACKAGE","index$":181}, {"active":true,"entity":"composer_package","key$":"BasicComposerPackageFlow","kind":"basic","name":"BasicComposerPackageFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"composer_package_ref01","srcdatavar":"composer_package_ref01_data","suffix":"_dt0"},"m":{"id":"composer_package01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-composer_package_ref01"}}],"index$":0}]}, 'ComposerPackage', {"GET /api/v4/projects/{id}/packages/composer/archives/*package_name":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of a project","type":"string","required":true,"index$":0},{"in":"query","name":"sha","description":"Shasum of current json","type":"string","required":true,"example":"673594f85a55fe3c0eb45df7bd2fa9d95a1601ab","index$":1},{"in":"query","name":"package_name","description":"The Composer package name","type":"string","required":true,"example":"my-composer-package","index$":2}]},"GET /api/v4/group/{id}/-/packages/composer/*package_name":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of a group","type":"string","required":true,"index$":0},{"in":"query","name":"package_name","description":"The Composer package name","type":"string","required":true,"example":"my-composer-package","index$":1}]},"GET /api/v4/group/{id}/-/packages/composer/p2/*package_name":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of a group","type":"string","required":true,"index$":0},{"in":"query","name":"package_name","description":"The Composer package name","type":"string","required":true,"example":"my-composer-package","index$":1}]},"GET /api/v4/group/{id}/-/packages/composer/p/{sha}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of a group","type":"string","required":true,"index$":0},{"in":"path","name":"sha","description":"Shasum of current json","type":"string","required":true,"example":"673594f85a55fe3c0eb45df7bd2fa9d95a1601ab","index$":1}]},"GET /api/v4/group/{id}/-/packages/composer/packages":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of a group","type":"string","required":true,"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let composer_package_ref01_data = Object.values(setup.data.existing.composer_package)[0] as any

    // LOAD: skipped — no entity id field and load requires path params.
    // Entity-var is declared here so later flow steps still compile.
    const composer_package_ref01_ent = client.ComposerPackage()


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/composer_package/ComposerPackageTestData.json')

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
    ['composer_package01','composer_package02','composer_package03','group01','group02','group03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_COMPOSER_PACKAGE_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_COMPOSER_PACKAGE_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_COMPOSER_PACKAGE_ENTID']
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
  
