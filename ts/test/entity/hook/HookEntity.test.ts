

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


describe('HookEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.Hook()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create', 'update', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'hook.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0}},"id":{"field":"id","name":"id"},"name":"hook","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/v4/hooks/{hook_id}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"hook_id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/api/v4/hooks/{hook_id}","q":{"exist":["id"]},"r":{"param":{"hook_id":"id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"hooks"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /api/v4/hooks/{hook_id}/custom_headers/{key}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"hook_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"key","or":"key","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/api/v4/hooks/{hook_id}/custom_headers/{key}","q":{"exist":["id","key"]},"r":{"param":{"hook_id":"id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"hooks"},{"var":"id"},{"lit":"custom_headers"},{"var":"key"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"DELETE /api/v4/hooks/{hook_id}/url_variables/{key}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"hook_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"key","or":"key","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/api/v4/hooks/{hook_id}/url_variables/{key}","q":{"exist":["id","key"]},"r":{"param":{"hook_id":"id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"hooks"},{"var":"id"},{"lit":"url_variables"},{"var":"key"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /api/v4/hooks/{hook_id}/custom_headers/{key}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"hook_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"key","or":"key","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"put_api_v4_hooks_hook_id_custom_headers_key","or":"put_api_v4_hooks_hook_id_custom_headers_key","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"PUT","o":"/api/v4/hooks/{hook_id}/custom_headers/{key}","q":{"exist":["id","key","put_api_v4_hooks_hook_id_custom_headers_key"]},"r":{"param":{"hook_id":"id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"hooks"},{"var":"id"},{"lit":"custom_headers"},{"var":"key"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"PUT /api/v4/hooks/{hook_id}/url_variables/{key}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"hook_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"key","or":"key","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"put_api_v4_hooks_hook_id_url_variables_key","or":"put_api_v4_hooks_hook_id_url_variables_key","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"PUT","o":"/api/v4/hooks/{hook_id}/url_variables/{key}","q":{"exist":["id","key","put_api_v4_hooks_hook_id_url_variables_key"]},"r":{"param":{"hook_id":"id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"hooks"},{"var":"id"},{"lit":"url_variables"},{"var":"key"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"hook","name__orig":"hook","Name":"Hook","name_":"hook","name-":"hook","NAME":"HOOK","index$":216}, {"active":true,"entity":"hook","key$":"BasicHookFlow","kind":"basic","name":"BasicHookFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"hook_ref01"},"m":{"hook_id":"hook01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"hook_ref01","srcdatavar":"hook_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-hook_ref01"}}],"v":[],"index$":1},{"a":true,"d":{},"i":{"ref":"hook_ref01","suffix":"_rm0"},"m":{"id":"hook01"},"o":"remove","s":[],"v":[],"index$":2}]}, 'Hook', {"POST /api/v4/hooks/{hook_id}":{"protocol":"http","parameters":[{"in":"path","name":"hook_id","description":"The ID of the hook","type":"integer","format":"int32","required":true,"index$":0}]},"DELETE /api/v4/hooks/{hook_id}/custom_headers/{key}":{"protocol":"http","parameters":[{"in":"path","name":"hook_id","description":"The ID of the hook","type":"integer","format":"int32","required":true,"index$":0},{"in":"path","name":"key","description":"The key of the custom header","type":"string","required":true,"index$":1}]},"DELETE /api/v4/hooks/{hook_id}/url_variables/{key}":{"protocol":"http","parameters":[{"in":"path","name":"hook_id","description":"The ID of the hook","type":"integer","format":"int32","required":true,"index$":0},{"in":"path","name":"key","description":"The key of the variable","type":"string","required":true,"index$":1}]},"PUT /api/v4/hooks/{hook_id}/custom_headers/{key}":{"protocol":"http","parameters":[{"in":"path","name":"hook_id","description":"The ID of the hook","type":"integer","format":"int32","required":true,"index$":0},{"in":"path","name":"key","description":"The key of the custom header","type":"string","required":true,"index$":1},{"name":"putApiV4HooksHookIdCustomHeadersKey","in":"body","required":true,"schema":{"type":"object","properties":{"value":{"type":"string","description":"The value of the custom header"}},"required":["value"],"description":"Set a custom header","x-ref":"#/definitions/putApiV4HooksHookIdCustomHeadersKey"},"index$":2}]},"PUT /api/v4/hooks/{hook_id}/url_variables/{key}":{"protocol":"http","parameters":[{"in":"path","name":"hook_id","description":"The ID of the hook","type":"integer","format":"int32","required":true,"index$":0},{"in":"path","name":"key","description":"The key of the variable","type":"string","required":true,"index$":1},{"name":"putApiV4HooksHookIdUrlVariablesKey","in":"body","required":true,"schema":{"type":"object","properties":{"value":{"type":"string","description":"The value of the variable"}},"required":["value"],"description":"Set a url variable","x-ref":"#/definitions/putApiV4HooksHookIdUrlVariablesKey"},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const hook_ref01_ent = client.Hook()
    let hook_ref01_data = setup.data.new.hook['hook_ref01']
    hook_ref01_data['hook_id'] = setup.idmap['hook01']

    hook_ref01_data = (await hook_ref01_ent.create(hook_ref01_data)).data()
    assert(null != hook_ref01_data.id)


    // UPDATE
    const hook_ref01_data_up0: any = {}
    hook_ref01_data_up0.id = hook_ref01_data.id

    const hook_ref01_resdata_up0 = (await hook_ref01_ent.update(hook_ref01_data_up0)).data()
    assert(hook_ref01_resdata_up0.id === hook_ref01_data_up0.id)


    // REMOVE
    const hook_ref01_match_rm0: any = { id: hook_ref01_data.id }
    await hook_ref01_ent.remove(hook_ref01_match_rm0)
  

  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/hook/HookTestData.json')

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
    ['hook01','hook02','hook03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_HOOK_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_HOOK_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_HOOK_ENTID']
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
  
