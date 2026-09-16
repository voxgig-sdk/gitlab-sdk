

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


describe('UnleashApiEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.UnleashApi()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'unleash_api.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":0}],"id":{"field":"id","name":"id"},"name":"unleash_api","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"project_id","reqd":true,"type":"`$STRING`"}],"query":[{"active":true,"kind":"query","name":"app_name","orig":"app_name","reqd":false,"type":"`$ANY`"},{"active":true,"kind":"query","name":"instance_id","orig":"instance_id","reqd":false,"type":"`$STRING`"}]},"contract":{"id":"GET /api/v4/feature_flags/unleash/{project_id}/features","json":"{\"operationId\":\"getApiV4FeatureFlagsUnleashProjectIdFeatures\",\"parameters\":[{\"description\":\"The ID of a project\",\"in\":\"path\",\"name\":\"project_id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The instance ID of Unleash Client\",\"in\":\"query\",\"name\":\"instance_id\",\"required\":false,\"type\":\"string\"},{\"description\":\"The application name of Unleash Client\",\"in\":\"query\",\"name\":\"app_name\",\"required\":false,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get a list of features (deprecated, v2 client support)\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/feature_flags/unleash/{project_id}/features","rename":{"param":{"project_id":"id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"feature_flags"},{"lit":"unleash"},{"var":"id"},{"lit":"features"}],"select":{"$action":"features","exist":["app_name","id","instance_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"unleash_id","orig":"project_id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"app_name","orig":"app_name","reqd":false,"type":"`$ANY`","index$":0},{"active":true,"kind":"query","name":"instance_id","orig":"instance_id","reqd":false,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /api/v4/feature_flags/unleash/{project_id}/client/features","json":"{\"operationId\":\"getApiV4FeatureFlagsUnleashProjectIdClientFeatures\",\"parameters\":[{\"description\":\"The ID of a project\",\"in\":\"path\",\"name\":\"project_id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The instance ID of Unleash Client\",\"in\":\"query\",\"name\":\"instance_id\",\"required\":false,\"type\":\"string\"},{\"description\":\"The application name of Unleash Client\",\"in\":\"query\",\"name\":\"app_name\",\"required\":false,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get a list of features\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/feature_flags/unleash/{project_id}/client/features","rename":{"param":{"project_id":"unleash_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"feature_flags"},{"lit":"unleash"},{"var":"unleash_id"},{"lit":"client"},{"lit":"features"}],"select":{"exist":["app_name","instance_id","unleash_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"}},"relations":{"ancestors":[["unleash"]]},"key$":"unleash_api","name__orig":"unleash_api","Name":"UnleashApi","name_":"unleash_api","name-":"unleash-api","NAME":"UNLEASH_API","index$":271}, {"active":true,"entity":"unleash_api","key$":"BasicUnleashApiFlow","kind":"basic","name":"BasicUnleashApiFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"unleash_api_ref01","srcdatavar":"unleash_api_ref01_data","suffix":"_dt0"},"match":{"id":"unleash_api01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-unleash_api_ref01"}}],"index$":0}]}, 'UnleashApi')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let unleash_api_ref01_data = Object.values(setup.data.existing.unleash_api)[0] as any

    // LOAD
    const unleash_api_ref01_ent = client.UnleashApi()
    const unleash_api_ref01_match_dt0: any = {}
    unleash_api_ref01_match_dt0.id = unleash_api_ref01_data.id
    const unleash_api_ref01_data_dt0 = (await unleash_api_ref01_ent.load(unleash_api_ref01_match_dt0)).data()
    assert(unleash_api_ref01_data_dt0.id === unleash_api_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/unleash_api/UnleashApiTestData.json')

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
    ['unleash_api01','unleash_api02','unleash_api03','unleash01','unleash02','unleash03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_UNLEASH_API_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_UNLEASH_API_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_UNLEASH_API_ENTID']
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
  
