
const envlocal = __dirname + '/../../../.env.local'
require('dotenv').config({ quiet: true, path: [envlocal] })

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'


import { GitlabSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveDelay,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


describe('ConanPackageEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ConanPackage()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['update', 'load']) {
      if (maybeSkipControl(t, 'entityOp', 'conan_package.' + op, live)) return
    }

    const setup = basicSetup()
    // The basic flow consumes synthetic IDs and field values from the
    // fixture (entity TestData.json). Those don't exist on the live API.
    // Skip live runs unless the user provided a real ENTID env override.
    if (setup.syntheticOnly) {
      t.skip('live entity test uses synthetic IDs from fixture — set GITLAB_TEST_CONAN_PACKAGE_ENTID JSON to run live')
      return
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let conan_package_ref01_data = Object.values(setup.data.existing.conan_package)[0] as any

    // UPDATE
    const conan_package_ref01_ent = client.ConanPackage()
    const conan_package_ref01_data_up0: any = {}
    conan_package_ref01_data_up0 ['file_id'] = setup.idmap['file_id']
    conan_package_ref01_data_up0 ['package_channel'] = setup.idmap['package_channel']
    conan_package_ref01_data_up0 ['package_username'] = setup.idmap['package_username']
    conan_package_ref01_data_up0 ['package_version'] = setup.idmap['package_version']
    conan_package_ref01_data_up0 ['recipe_revision'] = setup.idmap['recipe_revision']

    const conan_package_ref01_resdata_up0 = await conan_package_ref01_ent.update(conan_package_ref01_data_up0)
    assert(null != conan_package_ref01_resdata_up0)



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/conan_package/ConanPackageTestData.json')

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
    ['conan_package01','conan_package02','conan_package03','project01','project02','project03','project01','project02','project03','conan01','conan02','conan03','project01','project02','project03','file01','file02','file03','export01','export02','export03','project01','project02','project03','file01','file02','file03','package01','package02','package03','project01','project02','project03','conan01','conan02','conan03','revision01','revision02','revision03','project01','project02','project03','conan01','conan02','conan03','revision01','revision02','revision03','file01','file02','file03','project01','project02','project03','conan01','conan02','conan03','revision01','revision02','revision03','package01','package02','package03','revision01','revision02','revision03','project01','project02','project03','conan01','conan02','conan03','revision01','revision02','revision03','package01','package02','package03','revision01','revision02','revision03','file01','file02','file03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  // Detect whether the user provided a real ENTID JSON via env var. The
  // basic flow consumes synthetic IDs from the fixture file; without an
  // override those synthetic IDs reach the live API and 4xx. Surface this
  // to the test so it can skip rather than fail.
  const idmapEnvVal = process.env['GITLAB_TEST_CONAN_PACKAGE_ENTID']
  const idmapOverridden = null != idmapEnvVal && idmapEnvVal.trim().startsWith('{')

  const env = envOverride({
    'GITLAB_TEST_CONAN_PACKAGE_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': 'NONE',
  })

  idmap = env['GITLAB_TEST_CONAN_PACKAGE_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  if (live) {
    client = new GitlabSDK(merge([
      {
        apikey: env.GITLAB_APIKEY,
      },
      extra
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
    syntheticOnly: live && !idmapOverridden,
    now: Date.now(),
  }

  return setup
}
  
