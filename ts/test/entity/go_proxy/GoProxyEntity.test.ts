

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


describe('GoProxyEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.GoProxy()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'go_proxy.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"go_proxy","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v4/projects/{id}/packages/go/*module_name/@v/{module_version}.mod","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"module_version","or":"module_version","r":true,"t":"`$ANY`","index$":0},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"module_name","or":"module_name","r":true,"t":"`$ANY`","index$":0}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/packages/go/*module_name/@v/{module_version}.mod","q":{"exist":["module_name","module_version","project_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"packages"},{"lit":"go"},{"lit":"*module_name"},{"lit":"@v"},{"lit":"{module_version}.mod"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /api/v4/projects/{id}/packages/go/*module_name/@v/{module_version}.zip","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"module_version","or":"module_version","r":true,"t":"`$ANY`","index$":0},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"module_name","or":"module_name","r":true,"t":"`$ANY`","index$":0}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/packages/go/*module_name/@v/{module_version}.zip","q":{"exist":["module_name","module_version","project_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"packages"},{"lit":"go"},{"lit":"*module_name"},{"lit":"@v"},{"lit":"{module_version}.zip"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"GET /api/v4/projects/{id}/packages/go/*module_name/@v/list","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"module_name","or":"module_name","r":true,"t":"`$ANY`","index$":0}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/packages/go/*module_name/@v/list","q":{"exist":["module_name","project_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"packages"},{"lit":"go"},{"lit":"*module_name"},{"lit":"@v"},{"lit":"list"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.project"]]},"key$":"go_proxy","name__orig":"go_proxy","Name":"GoProxy","name_":"go_proxy","name-":"go-proxy","NAME":"GO_PROXY","index$":210}, {"active":true,"entity":"go_proxy","key$":"BasicGoProxyFlow","kind":"basic","name":"BasicGoProxyFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"go_proxy_ref01","srcdatavar":"go_proxy_ref01_data","suffix":"_dt0"},"m":{"id":"go_proxy01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-go_proxy_ref01"}}],"index$":0}]}, 'GoProxy', {"GET /api/v4/projects/{id}/packages/go/*module_name/@v/{module_version}.mod":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The project ID or full path of a project","type":"string","required":true,"index$":0},{"in":"query","name":"module_name","description":"The name of the Go module","type":"string","required":true,"index$":1},{"in":"path","name":"module_version","description":"The version of the Go module","type":"string","required":true,"index$":2}]},"GET /api/v4/projects/{id}/packages/go/*module_name/@v/{module_version}.zip":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The project ID or full path of a project","type":"string","required":true,"index$":0},{"in":"query","name":"module_name","description":"The name of the Go module","type":"string","required":true,"index$":1},{"in":"path","name":"module_version","description":"The version of the Go module","type":"string","required":true,"index$":2}]},"GET /api/v4/projects/{id}/packages/go/*module_name/@v/list":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The project ID or full path of a project","type":"string","required":true,"index$":0},{"in":"query","name":"module_name","description":"The name of the Go module","type":"string","required":true,"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let go_proxy_ref01_data = Object.values(setup.data.existing.go_proxy)[0] as any

    // LOAD: skipped — no entity id field and load requires path params.
    // Entity-var is declared here so later flow steps still compile.
    const go_proxy_ref01_ent = client.GoProxy()


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/go_proxy/GoProxyTestData.json')

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
    ['go_proxy01','go_proxy02','go_proxy03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_GO_PROXY_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_GO_PROXY_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_GO_PROXY_ENTID']
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
  
