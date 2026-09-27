

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"default_enabled":{"a":true,"h":"Default Enabled","n":"default_enabled","r":false,"t":"`$STRING`","key$":"default_enabled","index$":0},"feature_issue_url":{"a":true,"h":"Feature Issue Url","n":"feature_issue_url","r":false,"t":"`$STRING`","key$":"feature_issue_url","index$":1},"group":{"a":true,"h":"Group","n":"group","r":false,"t":"`$STRING`","key$":"group","index$":2},"intended_to_rollout_by":{"a":true,"h":"Intended To Rollout By","n":"intended_to_rollout_by","r":false,"t":"`$STRING`","key$":"intended_to_rollout_by","index$":3},"introduced_by_url":{"a":true,"h":"Introduced By Url","n":"introduced_by_url","r":false,"t":"`$STRING`","key$":"introduced_by_url","index$":4},"log_state_changes":{"a":true,"h":"Log State Changes","n":"log_state_changes","r":false,"t":"`$STRING`","key$":"log_state_changes","index$":5},"milestone":{"a":true,"h":"Milestone","n":"milestone","r":false,"t":"`$STRING`","key$":"milestone","index$":6},"name":{"a":true,"h":"Name","n":"name","r":false,"t":"`$STRING`","key$":"name","index$":7},"rollout_issue_url":{"a":true,"h":"Rollout Issue Url","n":"rollout_issue_url","r":false,"t":"`$STRING`","key$":"rollout_issue_url","index$":8},"type":{"a":true,"h":"Type","n":"type","r":false,"t":"`$STRING`","key$":"type","index$":9}},"name":"api_entities_feature_definition","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/v4/features/definitions","source":"swagger2","version":2},"g":{},"k":"http","m":"GET","o":"/api/v4/features/definitions","q":{},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"features"},{"lit":"definitions"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"api_entities_feature_definition","name__orig":"api_entities_feature_definition","Name":"ApiEntitiesFeatureDefinition","name_":"api_entities_feature_definition","name-":"api-entities-feature-definition","NAME":"API_ENTITIES_FEATURE_DEFINITION","index$":73}, {"active":true,"entity":"api_entities_feature_definition","key$":"BasicApiEntitiesFeatureDefinitionFlow","kind":"basic","name":"BasicApiEntitiesFeatureDefinitionFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"api_entities_feature_definition_ref01"}}],"index$":0}]}, 'ApiEntitiesFeatureDefinition', {"GET /api/v4/features/definitions":{"protocol":"http","parameters":[]}})
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
  
