

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


describe('ApiEntitiesSuggestionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesSuggestion()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_suggestion.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"appliable","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"applied","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"from_content","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"from_line","req":false,"type":"`$STRING`","index$":3},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":4},{"active":true,"name":"to_content","req":false,"type":"`$STRING`","index$":5},{"active":true,"name":"to_line","req":false,"type":"`$STRING`","index$":6}],"id":{"field":"id","name":"id"},"name":"api_entities_suggestion","op":{"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"suggestion_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"put_api_v4_suggestions_id_apply","orig":"put_api_v4_suggestions_id_apply","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"PUT /api/v4/suggestions/{id}/apply","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"putApiV4SuggestionsIdApply\",\"parameters\":[{\"description\":\"The ID of the suggestion\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"integer\"},{\"in\":\"body\",\"name\":\"putApiV4SuggestionsIdApply\",\"required\":true,\"schema\":{\"description\":\"Apply suggestion patch in the Merge Request it was created\",\"properties\":{\"commit_message\":{\"description\":\"A custom commit message to use instead of the default generated message or the project's default message\",\"type\":\"string\"}},\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Apply suggestion patch in the Merge Request it was created\",\"schema\":{\"description\":\"API_Entities_Suggestion model\",\"properties\":{\"appliable\":{\"type\":\"string\"},\"applied\":{\"type\":\"string\"},\"from_content\":{\"type\":\"string\"},\"from_line\":{\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"to_content\":{\"type\":\"string\"},\"to_line\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"PUT","orig":"/api/v4/suggestions/{id}/apply","rename":{"param":{"id":"suggestion_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"suggestions"},{"var":"suggestion_id"},{"lit":"apply"}],"select":{"exist":["put_api_v4_suggestions_id_apply","suggestion_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"put_api_v4_suggestions_batch_apply","orig":"put_api_v4_suggestions_batch_apply","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"PUT /api/v4/suggestions/batch_apply","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"putApiV4SuggestionsBatchApply\",\"parameters\":[{\"in\":\"body\",\"name\":\"putApiV4SuggestionsBatchApply\",\"required\":true,\"schema\":{\"description\":\"Apply multiple suggestion patches in the Merge Request where they were created\",\"properties\":{\"commit_message\":{\"description\":\"A custom commit message to use instead of the default generated message or the project's default message\",\"type\":\"string\"},\"ids\":{\"description\":\"An array of the suggestion IDs\",\"items\":{\"format\":\"int32\",\"type\":\"integer\"},\"type\":\"array\"}},\"required\":[\"ids\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Apply multiple suggestion patches in the Merge Request where they were created\",\"schema\":{\"description\":\"API_Entities_Suggestion model\",\"properties\":{\"appliable\":{\"type\":\"string\"},\"applied\":{\"type\":\"string\"},\"from_content\":{\"type\":\"string\"},\"from_line\":{\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"to_content\":{\"type\":\"string\"},\"to_line\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"PUT","orig":"/api/v4/suggestions/batch_apply","segments":[{"lit":"api"},{"lit":"v4"},{"lit":"suggestions"},{"lit":"batch_apply"}],"select":{"exist":["put_api_v4_suggestions_batch_apply"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["suggestion"]]},"key$":"api_entities_suggestion","name__orig":"api_entities_suggestion","Name":"ApiEntitiesSuggestion","name_":"api_entities_suggestion","name-":"api-entities-suggestion","NAME":"API_ENTITIES_SUGGESTION","index$":157}, {"active":true,"entity":"api_entities_suggestion","key$":"BasicApiEntitiesSuggestionFlow","kind":"basic","name":"BasicApiEntitiesSuggestionFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"api_entities_suggestion_ref01","srcdatavar":"api_entities_suggestion_ref01_data","suffix":"_up0","textfield":"appliable"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_suggestion_ref01"}}],"valid":[],"index$":0}]}, 'ApiEntitiesSuggestion')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let api_entities_suggestion_ref01_data = Object.values(setup.data.existing.api_entities_suggestion)[0] as any

    // UPDATE
    const api_entities_suggestion_ref01_ent = client.ApiEntitiesSuggestion()
    const api_entities_suggestion_ref01_data_up0: any = {}
    api_entities_suggestion_ref01_data_up0.id = api_entities_suggestion_ref01_data.id

    const api_entities_suggestion_ref01_markdef_up0 = { name: 'appliable', value: 'Mark01-api_entities_suggestion_ref01_' + setup.now }
    ;(api_entities_suggestion_ref01_data_up0 as any)[api_entities_suggestion_ref01_markdef_up0.name] = api_entities_suggestion_ref01_markdef_up0.value

    const api_entities_suggestion_ref01_resdata_up0 = (await api_entities_suggestion_ref01_ent.update(api_entities_suggestion_ref01_data_up0)).data()
    assert(api_entities_suggestion_ref01_resdata_up0.id === api_entities_suggestion_ref01_data_up0.id)

    assert((api_entities_suggestion_ref01_resdata_up0 as any)[api_entities_suggestion_ref01_markdef_up0.name] === api_entities_suggestion_ref01_markdef_up0.value)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_suggestion/ApiEntitiesSuggestionTestData.json')

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
    ['api_entities_suggestion01','api_entities_suggestion02','api_entities_suggestion03','suggestion01','suggestion02','suggestion03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_SUGGESTION_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_SUGGESTION_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_SUGGESTION_ENTID']
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
  
