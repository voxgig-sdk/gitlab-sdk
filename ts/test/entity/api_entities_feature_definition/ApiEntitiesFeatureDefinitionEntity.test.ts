

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


describe('ApiEntitiesFeatureDefinitionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesFeatureDefinition()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_feature_definition.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"default_enabled","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"feature_issue_url","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"group","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"intended_to_rollout_by","req":false,"type":"`$STRING`","index$":3},{"active":true,"name":"introduced_by_url","req":false,"type":"`$STRING`","index$":4},{"active":true,"name":"log_state_changes","req":false,"type":"`$STRING`","index$":5},{"active":true,"name":"milestone","req":false,"type":"`$STRING`","index$":6},{"active":true,"name":"name","req":false,"type":"`$STRING`","index$":7},{"active":true,"name":"rollout_issue_url","req":false,"type":"`$STRING`","index$":8},{"active":true,"name":"type","req":false,"type":"`$STRING`","index$":9}],"name":"api_entities_feature_definition","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{},"contract":{"id":"GET /api/v4/features/definitions","json":"{\"operationId\":\"getApiV4FeaturesDefinitions\",\"parameters\":[],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"List all feature definitions\",\"schema\":{\"items\":{\"description\":\"API_Entities_Feature_Definition model\",\"properties\":{\"default_enabled\":{\"type\":\"string\"},\"feature_issue_url\":{\"type\":\"string\"},\"group\":{\"type\":\"string\"},\"intended_to_rollout_by\":{\"type\":\"string\"},\"introduced_by_url\":{\"type\":\"string\"},\"log_state_changes\":{\"type\":\"string\"},\"milestone\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"rollout_issue_url\":{\"type\":\"string\"},\"type\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/features/definitions","segments":[{"lit":"api"},{"lit":"v4"},{"lit":"features"},{"lit":"definitions"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"api_entities_feature_definition","name__orig":"api_entities_feature_definition","Name":"ApiEntitiesFeatureDefinition","name_":"api_entities_feature_definition","name-":"api-entities-feature-definition","NAME":"API_ENTITIES_FEATURE_DEFINITION","index$":73}, {"active":true,"entity":"api_entities_feature_definition","key$":"BasicApiEntitiesFeatureDefinitionFlow","kind":"basic","name":"BasicApiEntitiesFeatureDefinitionFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"api_entities_feature_definition_ref01"}}],"index$":0}]}, 'ApiEntitiesFeatureDefinition')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let api_entities_feature_definition_ref01_data = Object.values(setup.data.existing.api_entities_feature_definition)[0] as any

    // LIST
    const api_entities_feature_definition_ref01_ent = client.ApiEntitiesFeatureDefinition()
    const api_entities_feature_definition_ref01_match: any = {}

    const api_entities_feature_definition_ref01_list = (await api_entities_feature_definition_ref01_ent.list(api_entities_feature_definition_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_feature_definition/ApiEntitiesFeatureDefinitionTestData.json')

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
    ['api_entities_feature_definition01','api_entities_feature_definition02','api_entities_feature_definition03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_FEATURE_DEFINITION_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_FEATURE_DEFINITION_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_FEATURE_DEFINITION_ENTID']
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
  
