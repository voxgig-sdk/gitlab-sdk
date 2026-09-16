

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


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":0}],"id":{"field":"id","name":"id","parts":["package_name","package_version","package_username","package_channel"],"sep":"/"},"name":"conan","op":{"remove":{"input":"data","name":"remove","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":"stable","kind":"param","name":"package_channel","orig":"package_channel","reqd":true,"type":"`$ANY`","index$":1},{"active":true,"example":"my-package","kind":"param","name":"package_name","orig":"package_name","reqd":true,"type":"`$ANY`","index$":2},{"active":true,"example":"my-group+my-project","kind":"param","name":"package_username","orig":"package_username","reqd":true,"type":"`$ANY`","index$":3},{"active":true,"example":"1.0","kind":"param","name":"package_version","orig":"package_version","reqd":true,"type":"`$ANY`","index$":4}]},"contract":{"id":"DELETE /api/v4/projects/{id}/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}","json":"{\"operationId\":\"deleteApiV4ProjectsIdPackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannel\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package name\",\"example\":\"my-package\",\"in\":\"path\",\"name\":\"package_name\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package version\",\"example\":\"1.0\",\"in\":\"path\",\"name\":\"package_version\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package username\",\"example\":\"my-group+my-project\",\"in\":\"path\",\"name\":\"package_username\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package channel\",\"example\":\"stable\",\"in\":\"path\",\"name\":\"package_channel\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"204\":{\"description\":\"Delete Package\"},\"400\":{\"description\":\"Bad Request\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"DELETE","orig":"/api/v4/projects/{id}/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}","segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"id"},{"lit":"packages"},{"lit":"conan"},{"lit":"v1"},{"lit":"conans"},{"var":"package_name"},{"var":"package_version"},{"var":"package_username"},{"var":"package_channel"}],"select":{"exist":["id","package_channel","package_name","package_username","package_version"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"example":"stable","kind":"param","name":"package_channel","orig":"package_channel","reqd":true,"type":"`$ANY`","index$":0},{"active":true,"example":"my-package","kind":"param","name":"package_name","orig":"package_name","reqd":true,"type":"`$ANY`","index$":1},{"active":true,"example":"my-group+my-project","kind":"param","name":"package_username","orig":"package_username","reqd":true,"type":"`$ANY`","index$":2},{"active":true,"example":"1.0","kind":"param","name":"package_version","orig":"package_version","reqd":true,"type":"`$ANY`","index$":3}]},"contract":{"id":"DELETE /api/v4/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}","json":"{\"operationId\":\"deleteApiV4PackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannel\",\"parameters\":[{\"description\":\"Package name\",\"example\":\"my-package\",\"in\":\"path\",\"name\":\"package_name\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package version\",\"example\":\"1.0\",\"in\":\"path\",\"name\":\"package_version\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package username\",\"example\":\"my-group+my-project\",\"in\":\"path\",\"name\":\"package_username\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package channel\",\"example\":\"stable\",\"in\":\"path\",\"name\":\"package_channel\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"204\":{\"description\":\"Delete Package\"},\"400\":{\"description\":\"Bad Request\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"DELETE","orig":"/api/v4/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}","segments":[{"lit":"api"},{"lit":"v4"},{"lit":"packages"},{"lit":"conan"},{"lit":"v1"},{"lit":"conans"},{"var":"package_name"},{"var":"package_version"},{"var":"package_username"},{"var":"package_channel"}],"select":{"exist":["package_channel","package_name","package_username","package_version"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"remove"}},"relations":{"ancestors":[["conan"]]},"key$":"conan","name__orig":"conan","Name":"Conan","name_":"conan","name-":"conan","NAME":"CONAN","index$":182}, {"active":true,"entity":"conan","key$":"BasicConanFlow","kind":"basic","name":"BasicConanFlow","param":{},"step":[]}, 'Conan')
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
    ['conan01','conan02','conan03','conan01','conan02','conan03'],
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
  
