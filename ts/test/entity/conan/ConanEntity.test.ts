

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


describe('ConanEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.Conan()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of []) {
      if (!live && maybeSkipControl(t, 'entityOp', 'conan.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0}},"id":{"field":"id","name":"id","parts":["package_name","package_version","package_username","package_channel"],"sep":"/"},"name":"conan","op":{"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /api/v4/projects/{id}/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"stable","k":"param","n":"package_channel","or":"package_channel","r":true,"t":"`$ANY`","index$":1},{"a":true,"ex":"my-package","k":"param","n":"package_name","or":"package_name","r":true,"t":"`$ANY`","index$":2},{"a":true,"ex":"my-group+my-project","k":"param","n":"package_username","or":"package_username","r":true,"t":"`$ANY`","index$":3},{"a":true,"ex":"1.0","k":"param","n":"package_version","or":"package_version","r":true,"t":"`$ANY`","index$":4}]},"k":"http","m":"DELETE","o":"/api/v4/projects/{id}/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}","q":{"exist":["id","package_channel","package_name","package_username","package_version"]},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"id"},{"lit":"packages"},{"lit":"conan"},{"lit":"v1"},{"lit":"conans"},{"var":"package_name"},{"var":"package_version"},{"var":"package_username"},{"var":"package_channel"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"DELETE /api/v4/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}","source":"swagger2","version":2},"g":{"params":[{"a":true,"ex":"stable","k":"param","n":"package_channel","or":"package_channel","r":true,"t":"`$ANY`","index$":0},{"a":true,"ex":"my-package","k":"param","n":"package_name","or":"package_name","r":true,"t":"`$ANY`","index$":1},{"a":true,"ex":"my-group+my-project","k":"param","n":"package_username","or":"package_username","r":true,"t":"`$ANY`","index$":2},{"a":true,"ex":"1.0","k":"param","n":"package_version","or":"package_version","r":true,"t":"`$ANY`","index$":3}]},"k":"http","m":"DELETE","o":"/api/v4/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}","q":{"exist":["package_channel","package_name","package_username","package_version"]},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"packages"},{"lit":"conan"},{"lit":"v1"},{"lit":"conans"},{"var":"package_name"},{"var":"package_version"},{"var":"package_username"},{"var":"package_channel"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"remove"}},"relations":{"ancestors":[]},"key$":"conan","name__orig":"conan","Name":"Conan","name_":"conan","name-":"conan","NAME":"CONAN","index$":182}, {"active":true,"entity":"conan","key$":"BasicConanFlow","kind":"basic","name":"BasicConanFlow","param":{},"step":[]}, 'Conan', {"DELETE /api/v4/projects/{id}/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"in":"path","name":"package_name","description":"Package name","type":"string","required":true,"example":"my-package","index$":1},{"in":"path","name":"package_version","description":"Package version","type":"string","required":true,"example":"1.0","index$":2},{"in":"path","name":"package_username","description":"Package username","type":"string","required":true,"example":"my-group+my-project","index$":3},{"in":"path","name":"package_channel","description":"Package channel","type":"string","required":true,"example":"stable","index$":4}]},"DELETE /api/v4/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}":{"protocol":"http","parameters":[{"in":"path","name":"package_name","description":"Package name","type":"string","required":true,"example":"my-package","index$":0},{"in":"path","name":"package_version","description":"Package version","type":"string","required":true,"example":"1.0","index$":1},{"in":"path","name":"package_username","description":"Package username","type":"string","required":true,"example":"my-group+my-project","index$":2},{"in":"path","name":"package_channel","description":"Package channel","type":"string","required":true,"example":"stable","index$":3}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let conan_ref01_data = Object.values(setup.data.existing.conan)[0] as any

  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/conan/ConanTestData.json')

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
    ['conan01','conan02','conan03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_CONAN_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_CONAN_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_CONAN_ENTID']
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
  
