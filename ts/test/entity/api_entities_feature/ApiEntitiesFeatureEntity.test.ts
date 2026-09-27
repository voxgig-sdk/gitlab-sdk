

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


describe('ApiEntitiesFeatureEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesFeature()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create', 'list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_feature.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"definition":{"a":true,"h":"Definition","n":"definition","r":false,"sh":"API_Entities_Feature_Definition model","t":"`$OBJECT`","key$":"definition","index$":0},"gates":{"a":true,"h":"Gates","n":"gates","r":false,"t":"`$OBJECT`","key$":"gates","index$":1},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":2},"name":{"a":true,"h":"Name","n":"name","r":false,"t":"`$STRING`","key$":"name","index$":3},"state":{"a":true,"h":"State","n":"state","r":false,"t":"`$STRING`","key$":"state","index$":4}},"id":{"field":"id","name":"id"},"name":"api_entities_feature","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/v4/features/{name}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"name","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"post_api_v4_features_name","or":"post_api_v4_features_name","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/api/v4/features/{name}","q":{"exist":["id","post_api_v4_features_name"]},"r":{"param":{"name":"id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"features"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/v4/features","source":"swagger2","version":2},"g":{},"k":"http","m":"GET","o":"/api/v4/features","q":{},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"features"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"api_entities_feature","name__orig":"api_entities_feature","Name":"ApiEntitiesFeature","name_":"api_entities_feature","name-":"api-entities-feature","NAME":"API_ENTITIES_FEATURE","index$":72}, {"active":true,"entity":"api_entities_feature","key$":"BasicApiEntitiesFeatureFlow","kind":"basic","name":"BasicApiEntitiesFeatureFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"api_entities_feature_ref01"},"m":{"name":"name01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"api_entities_feature_ref01"}}],"index$":1}]}, 'ApiEntitiesFeature', {"POST /api/v4/features/{name}":{"protocol":"http","parameters":[{"in":"path","name":"name","type":"integer","format":"int32","required":true,"index$":0},{"name":"postApiV4FeaturesName","in":"body","required":true,"schema":{"type":"object","properties":{"value":{"type":"string","description":"`true` or `false` to enable/disable, or an integer for percentage of time"},"key":{"type":"string","description":"`percentage_of_actors` or `percentage_of_time` (default)"},"feature_group":{"type":"string","description":"A Feature group name"},"user":{"type":"string","description":"A GitLab username or comma-separated multiple usernames"},"group":{"type":"string","description":"A GitLab group's path, for example `gitlab-org`, or comma-separated multiple group paths"},"namespace":{"type":"string","description":"A GitLab group or user namespace's path, for example `john-doe`, or comma-separated multiple namespace paths. Introduced in GitLab 15.0."},"project":{"type":"string","description":"A projects path, for example `gitlab-org/gitlab-foss`, or comma-separated multiple project paths"},"repository":{"type":"string","description":"A repository path, for example `gitlab-org/gitlab-test.git`, `gitlab-org/gitlab-test.wiki.git`, `snippets/21.git`, to name a few. Use comma to separate multiple repository paths"},"force":{"type":"boolean","description":"Skip feature flag validation checks, such as a YAML definition"}},"required":["value"],"description":"Set or create a feature","x-ref":"#/definitions/postApiV4FeaturesName"},"index$":1}]},"GET /api/v4/features":{"protocol":"http","parameters":[]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const api_entities_feature_ref01_ent = client.ApiEntitiesFeature()
    let api_entities_feature_ref01_data = setup.data.new.api_entities_feature['api_entities_feature_ref01']
    api_entities_feature_ref01_data['name'] = setup.idmap['name01']

    api_entities_feature_ref01_data = (await api_entities_feature_ref01_ent.create(api_entities_feature_ref01_data)).data()
    assert(null != api_entities_feature_ref01_data.id)


    // LIST
    const api_entities_feature_ref01_match: any = {}

    const api_entities_feature_ref01_list = (await api_entities_feature_ref01_ent.list(api_entities_feature_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(api_entities_feature_ref01_list, { id: api_entities_feature_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_feature/ApiEntitiesFeatureTestData.json')

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
    ['api_entities_feature01','api_entities_feature02','api_entities_feature03','name01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_FEATURE_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_FEATURE_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_FEATURE_ENTID']
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
  
