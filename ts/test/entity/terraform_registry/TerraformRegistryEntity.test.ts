
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


describe('TerraformRegistryEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.TerraformRegistry()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['update', 'load']) {
      if (maybeSkipControl(t, 'entityOp', 'terraform_registry.' + op, live)) return
    }

    const setup = basicSetup()
    // The basic flow consumes synthetic IDs and field values from the
    // fixture (entity TestData.json). Those don't exist on the live API.
    // Skip live runs unless the user provided a real ENTID env override.
    if (setup.syntheticOnly) {
      t.skip('live entity test uses synthetic IDs from fixture — set GITLAB_TEST_TERRAFORM_REGISTRY_ENTID JSON to run live')
      return
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let terraform_registry_ref01_data = Object.values(setup.data.existing.terraform_registry)[0] as any

    // UPDATE
    const terraform_registry_ref01_ent = client.TerraformRegistry()
    const terraform_registry_ref01_data_up0: any = {}
    terraform_registry_ref01_data_up0 ['module_id'] = setup.idmap['module_id']
    terraform_registry_ref01_data_up0 ['project_id'] = setup.idmap['project_id']

    const terraform_registry_ref01_resdata_up0 = await terraform_registry_ref01_ent.update(terraform_registry_ref01_data_up0)
    assert(null != terraform_registry_ref01_resdata_up0)



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/terraform_registry/TerraformRegistryTestData.json')

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
    ['terraform_registry01','terraform_registry02','terraform_registry03','v101','v102','v103','project01','project02','project03','module01','module02','module03'],
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
  const idmapEnvVal = process.env['GITLAB_TEST_TERRAFORM_REGISTRY_ENTID']
  const idmapOverridden = null != idmapEnvVal && idmapEnvVal.trim().startsWith('{')

  const env = envOverride({
    'GITLAB_TEST_TERRAFORM_REGISTRY_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': 'NONE',
  })

  idmap = env['GITLAB_TEST_TERRAFORM_REGISTRY_ENTID']

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
  
