
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


describe('ApiEntitiesPackagesConanPackageRevisionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesPackagesConanPackageRevision()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['list']) {
      if (maybeSkipControl(t, 'entityOp', 'api_entities_packages_conan_package_revision.' + op, live)) return
    }

    const setup = basicSetup()
    // The basic flow consumes synthetic IDs and field values from the
    // fixture (entity TestData.json). Those don't exist on the live API.
    // Skip live runs unless the user provided a real ENTID env override.
    if (setup.syntheticOnly) {
      t.skip('live entity test uses synthetic IDs from fixture — set GITLAB_TEST_API_ENTITIES_PACKAGES_CONAN_PACKAGE_REVISION_ENTID JSON to run live')
      return
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let api_entities_packages_conan_package_revision_ref01_data = Object.values(setup.data.existing.api_entities_packages_conan_package_revision)[0] as any

    // LIST
    const api_entities_packages_conan_package_revision_ref01_ent = client.ApiEntitiesPackagesConanPackageRevision()
    const api_entities_packages_conan_package_revision_ref01_match: any = {}
    api_entities_packages_conan_package_revision_ref01_match['conan_id'] = setup.idmap['conan01']
    api_entities_packages_conan_package_revision_ref01_match['conan_package_reference'] = setup.idmap['conan_package_reference01']
    api_entities_packages_conan_package_revision_ref01_match['package_channel'] = setup.idmap['package_channel01']
    api_entities_packages_conan_package_revision_ref01_match['package_username'] = setup.idmap['package_username01']
    api_entities_packages_conan_package_revision_ref01_match['package_version'] = setup.idmap['package_version01']
    api_entities_packages_conan_package_revision_ref01_match['project_id'] = setup.idmap['project01']
    api_entities_packages_conan_package_revision_ref01_match['revision_id'] = setup.idmap['revision01']

    const api_entities_packages_conan_package_revision_ref01_list = await api_entities_packages_conan_package_revision_ref01_ent.list(api_entities_packages_conan_package_revision_ref01_match)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_packages_conan_package_revision/ApiEntitiesPackagesConanPackageRevisionTestData.json')

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
    ['api_entities_packages_conan_package_revision01','api_entities_packages_conan_package_revision02','api_entities_packages_conan_package_revision03','project01','project02','project03','conan01','conan02','conan03','revision01','revision02','revision03','package01','package02','package03'],
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
  const idmapEnvVal = process.env['GITLAB_TEST_API_ENTITIES_PACKAGES_CONAN_PACKAGE_REVISION_ENTID']
  const idmapOverridden = null != idmapEnvVal && idmapEnvVal.trim().startsWith('{')

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_PACKAGES_CONAN_PACKAGE_REVISION_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': 'NONE',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_PACKAGES_CONAN_PACKAGE_REVISION_ENTID']

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
  
