

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


describe('ApiEntitiesAvatarEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesAvatar()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_avatar.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"avatar_url","req":false,"type":"`$STRING`","index$":0}],"name":"api_entities_avatar","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"email","orig":"email","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"size","orig":"size","reqd":false,"type":"`$INTEGER`","index$":1}]},"contract":{"id":"GET /api/v4/avatar","json":"{\"operationId\":\"getApiV4Avatar\",\"parameters\":[{\"description\":\"Public email address of the user\",\"in\":\"query\",\"name\":\"email\",\"required\":true,\"type\":\"string\"},{\"description\":\"Single pixel dimension for Gravatar images\",\"format\":\"int32\",\"in\":\"query\",\"name\":\"size\",\"required\":false,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Return avatar url for a user\",\"schema\":{\"description\":\"API_Entities_Avatar model\",\"properties\":{\"avatar_url\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/avatar","segments":[{"lit":"api"},{"lit":"v4"},{"lit":"avatar"}],"select":{"exist":["email","size"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"api_entities_avatar","name__orig":"api_entities_avatar","Name":"ApiEntitiesAvatar","name_":"api_entities_avatar","name-":"api-entities-avatar","NAME":"API_ENTITIES_AVATAR","index$":7}, {"active":true,"entity":"api_entities_avatar","key$":"BasicApiEntitiesAvatarFlow","kind":"basic","name":"BasicApiEntitiesAvatarFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"api_entities_avatar_ref01","srcdatavar":"api_entities_avatar_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_avatar_ref01"}}],"index$":0}]}, 'ApiEntitiesAvatar')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let api_entities_avatar_ref01_data = Object.values(setup.data.existing.api_entities_avatar)[0] as any

    // LOAD
    const api_entities_avatar_ref01_ent = client.ApiEntitiesAvatar()
    const api_entities_avatar_ref01_match_dt0: any = {}
    const api_entities_avatar_ref01_data_dt0 = (await api_entities_avatar_ref01_ent.load(api_entities_avatar_ref01_match_dt0)).data()
    assert(null != api_entities_avatar_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_avatar/ApiEntitiesAvatarTestData.json')

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
    ['api_entities_avatar01','api_entities_avatar02','api_entities_avatar03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_AVATAR_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_AVATAR_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_AVATAR_ENTID']
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
  
