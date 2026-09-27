

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


describe('CiVariableEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.CiVariable()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of []) {
      if (!live && maybeSkipControl(t, 'entityOp', 'ci_variable.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0}},"id":{"field":"id","name":"id"},"name":"ci_variable","op":{"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /api/v4/projects/{id}/variables/{key}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"key","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"filter_environment_scope","or":"filter_environment_scope","r":false,"t":"`$ANY`","index$":0}]},"k":"http","m":"DELETE","o":"/api/v4/projects/{id}/variables/{key}","q":{"exist":["filter_environment_scope","id","project_id"]},"r":{"param":{"id":"project_id","key":"id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"variables"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"DELETE /api/v4/groups/{id}/variables/{key}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"group_id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"key","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/api/v4/groups/{id}/variables/{key}","q":{"exist":["group_id","id"]},"r":{"param":{"id":"group_id","key":"id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"variables"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"DELETE /api/v4/admin/ci/variables/{key}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"key","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/api/v4/admin/ci/variables/{key}","q":{"exist":["id"]},"r":{"param":{"key":"id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"admin"},{"lit":"ci"},{"lit":"variables"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"remove"}},"relations":{"ancestors":[["$.main.kit.entity.group"],["$.main.kit.entity.project"]]},"key$":"ci_variable","name__orig":"ci_variable","Name":"CiVariable","name_":"ci_variable","name-":"ci-variable","NAME":"CI_VARIABLE","index$":177}, {"active":true,"entity":"ci_variable","key$":"BasicCiVariableFlow","kind":"basic","name":"BasicCiVariableFlow","param":{},"step":[]}, 'CiVariable', {"DELETE /api/v4/projects/{id}/variables/{key}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID of a project or URL-encoded NAMESPACE/PROJECT_NAME of the project owned by the authenticated user","type":"string","required":true,"index$":0},{"in":"path","name":"key","description":"The key of a variable","type":"string","required":true,"index$":1},{"in":"query","name":"filter[environment_scope]","description":"The environment scope of the variable","type":"string","required":false,"index$":2}]},"DELETE /api/v4/groups/{id}/variables/{key}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID of a group or URL-encoded path of the group owned by the authenticated\n      user","type":"string","required":true,"index$":0},{"in":"path","name":"key","description":"The key of a variable","type":"string","required":true,"index$":1}]},"DELETE /api/v4/admin/ci/variables/{key}":{"protocol":"http","parameters":[{"in":"path","name":"key","description":"The key of a variable","type":"string","required":true,"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let ci_variable_ref01_data = Object.values(setup.data.existing.ci_variable)[0] as any

  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/ci_variable/CiVariableTestData.json')

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
    ['ci_variable01','ci_variable02','ci_variable03','group01','group02','group03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_CI_VARIABLE_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_CI_VARIABLE_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_CI_VARIABLE_ENTID']
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
  
