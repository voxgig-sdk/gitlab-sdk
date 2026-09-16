

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


describe('ApiEntitiesApplicationWithSecretEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesApplicationWithSecret()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_application_with_secret.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"application_id","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"application_name","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"callback_url","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"confidential","req":false,"type":"`$BOOLEAN`","index$":3},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":4},{"active":true,"name":"secret","req":false,"type":"`$STRING`","index$":5}],"id":{"field":"id","name":"id"},"name":"api_entities_application_with_secret","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"application_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST /api/v4/applications/{id}/renew-secret","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4ApplicationsIdRenewSecret\",\"parameters\":[{\"description\":\"The ID of the application (not the application_id)\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Renew an application secret\",\"schema\":{\"description\":\"API_Entities_ApplicationWithSecret model\",\"properties\":{\"application_id\":{\"example\":\"5832fc6e14300a0d962240a8144466eef4ee93ef0d218477e55f11cf12fc3737\",\"type\":\"string\"},\"application_name\":{\"example\":\"MyApplication\",\"type\":\"string\"},\"callback_url\":{\"example\":\"https://redirect.uri\",\"type\":\"string\"},\"confidential\":{\"example\":true,\"type\":\"boolean\"},\"id\":{\"type\":\"string\"},\"secret\":{\"example\":\"ee1dd64b6adc89cf7e2c23099301ccc2c61b441064e9324d963c46902a85ec34\",\"type\":\"string\"}},\"type\":\"object\"}}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/applications/{id}/renew-secret","rename":{"param":{"id":"application_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"applications"},{"var":"application_id"},{"lit":"renew-secret"}],"select":{"exist":["application_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"post_api_v4_application","orig":"post_api_v4_application","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"POST /api/v4/applications","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4Applications\",\"parameters\":[{\"in\":\"body\",\"name\":\"postApiV4Applications\",\"required\":true,\"schema\":{\"description\":\"Create a new application\",\"properties\":{\"confidential\":{\"default\":true,\"description\":\"The application is used where the client secret can be kept confidential. Native mobile apps \\\\\\n                        and Single Page Apps are considered non-confidential. Defaults to true if not supplied\",\"type\":\"boolean\"},\"name\":{\"description\":\"Name of the application.\",\"example\":\"MyApplication\",\"type\":\"string\"},\"redirect_uri\":{\"description\":\"Redirect URI of the application.\",\"example\":\"https://redirect.uri\",\"type\":\"string\"},\"scopes\":{\"description\":\"Scopes of the application. You can specify multiple scopes by separating\\\\\\n                                 each scope using a space\",\"type\":\"string\"}},\"required\":[\"name\",\"redirect_uri\",\"scopes\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Create a new application\",\"schema\":{\"description\":\"API_Entities_ApplicationWithSecret model\",\"properties\":{\"application_id\":{\"example\":\"5832fc6e14300a0d962240a8144466eef4ee93ef0d218477e55f11cf12fc3737\",\"type\":\"string\"},\"application_name\":{\"example\":\"MyApplication\",\"type\":\"string\"},\"callback_url\":{\"example\":\"https://redirect.uri\",\"type\":\"string\"},\"confidential\":{\"example\":true,\"type\":\"boolean\"},\"id\":{\"type\":\"string\"},\"secret\":{\"example\":\"ee1dd64b6adc89cf7e2c23099301ccc2c61b441064e9324d963c46902a85ec34\",\"type\":\"string\"}},\"type\":\"object\"}}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/applications","segments":[{"lit":"api"},{"lit":"v4"},{"lit":"applications"}],"select":{"exist":["post_api_v4_application"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[["application"]]},"key$":"api_entities_application_with_secret","name__orig":"api_entities_application_with_secret","Name":"ApiEntitiesApplicationWithSecret","name_":"api_entities_application_with_secret","name-":"api-entities-application-with-secret","NAME":"API_ENTITIES_APPLICATION_WITH_SECRET","index$":6}, {"active":true,"entity":"api_entities_application_with_secret","key$":"BasicApiEntitiesApplicationWithSecretFlow","kind":"basic","name":"BasicApiEntitiesApplicationWithSecretFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"api_entities_application_with_secret_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0}]}, 'ApiEntitiesApplicationWithSecret')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const api_entities_application_with_secret_ref01_ent = client.ApiEntitiesApplicationWithSecret()
    let api_entities_application_with_secret_ref01_data = setup.data.new.api_entities_application_with_secret['api_entities_application_with_secret_ref01']

    api_entities_application_with_secret_ref01_data = (await api_entities_application_with_secret_ref01_ent.create(api_entities_application_with_secret_ref01_data)).data()
    assert(null != api_entities_application_with_secret_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_application_with_secret/ApiEntitiesApplicationWithSecretTestData.json')

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
    ['api_entities_application_with_secret01','api_entities_application_with_secret02','api_entities_application_with_secret03','application01','application02','application03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_APPLICATION_WITH_SECRET_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_APPLICATION_WITH_SECRET_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_APPLICATION_WITH_SECRET_ENTID']
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
  
