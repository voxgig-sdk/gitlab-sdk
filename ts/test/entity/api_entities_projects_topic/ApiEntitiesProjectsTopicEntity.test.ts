

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


describe('ApiEntitiesProjectsTopicEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesProjectsTopic()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_projects_topic.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"avatar_url":{"a":true,"h":"Avatar Url","n":"avatar_url","r":false,"t":"`$STRING`","key$":"avatar_url","index$":0},"description":{"a":true,"h":"Description","n":"description","r":false,"t":"`$STRING`","key$":"description","index$":1},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":2},"name":{"a":true,"h":"Name","n":"name","r":false,"t":"`$STRING`","key$":"name","index$":3},"organization_id":{"a":true,"h":"Organization Id","n":"organization_id","r":false,"t":"`$STRING`","key$":"organization_id","index$":4},"title":{"a":true,"h":"Title","n":"title","r":false,"t":"`$STRING`","key$":"title","index$":5},"total_projects_count":{"a":true,"h":"Total Projects Count","n":"total_projects_count","r":false,"t":"`$STRING`","key$":"total_projects_count","index$":6}},"id":{"field":"id","name":"id"},"name":"api_entities_projects_topic","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/v4/topics","source":"swagger2","version":2},"g":{"query":[{"a":true,"k":"query","n":"post_api_v4_topic","or":"post_api_v4_topic","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/api/v4/topics","q":{"exist":["post_api_v4_topic"]},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"topics"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /api/v4/topics/merge","source":"swagger2","version":2},"g":{"query":[{"a":true,"k":"query","n":"post_api_v4_topics_merge","or":"post_api_v4_topics_merge","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/api/v4/topics/merge","q":{"exist":["post_api_v4_topics_merge"]},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"topics"},{"lit":"merge"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v4/topics","source":"swagger2","version":2},"g":{"query":[{"a":true,"k":"query","n":"organization_id","or":"organization_id","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"ex":"search","k":"query","n":"search","or":"search","r":false,"t":"`$ANY`","index$":3},{"a":true,"k":"query","n":"without_project","or":"without_project","r":false,"t":"`$ANY`","index$":4}]},"k":"http","m":"GET","o":"/api/v4/topics","q":{"exist":["organization_id","page","per_page","search","without_project"]},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"topics"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /api/v4/topics/{id}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/v4/topics/{id}","q":{"exist":["id"]},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"topics"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /api/v4/topics/{id}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"put_api_v4_topics_id","or":"put_api_v4_topics_id","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"PUT","o":"/api/v4/topics/{id}","q":{"exist":["id","put_api_v4_topics_id"]},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"topics"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"api_entities_projects_topic","name__orig":"api_entities_projects_topic","Name":"ApiEntitiesProjectsTopic","name_":"api_entities_projects_topic","name-":"api-entities-projects-topic","NAME":"API_ENTITIES_PROJECTS_TOPIC","index$":143}, {"active":true,"entity":"api_entities_projects_topic","key$":"BasicApiEntitiesProjectsTopicFlow","kind":"basic","name":"BasicApiEntitiesProjectsTopicFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"api_entities_projects_topic_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"api_entities_projects_topic_ref01","srcdatavar":"api_entities_projects_topic_ref01_data","suffix":"_up0","textfield":"avatar_url"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_projects_topic_ref01"}}],"v":[],"index$":1},{"a":true,"d":{},"i":{"ref":"api_entities_projects_topic_ref01","srcdatavar":"api_entities_projects_topic_ref01_data","suffix":"_dt0"},"m":{"id":"api_entities_projects_topic01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_projects_topic_ref01"}}],"index$":2}]}, 'ApiEntitiesProjectsTopic', {"POST /api/v4/topics":{"protocol":"http","parameters":[{"name":"postApiV4Topics","in":"body","required":true,"schema":{"type":"object","properties":{"name":{"type":"string","description":"Slug (name)"},"title":{"type":"string","description":"Title"},"description":{"type":"string","description":"Description"},"avatar":{"type":"file","description":"Avatar image for topic"},"organization_id":{"type":"integer","format":"int32","description":"The organization id for the topic","default":{}}},"required":["name","title"],"description":"Create a topic","x-ref":"#/definitions/postApiV4Topics"},"index$":0}]},"POST /api/v4/topics/merge":{"protocol":"http","parameters":[{"name":"postApiV4TopicsMerge","in":"body","required":true,"schema":{"type":"object","properties":{"source_topic_id":{"type":"integer","format":"int32","description":"ID of source project topic"},"target_topic_id":{"type":"integer","format":"int32","description":"ID of target project topic"}},"required":["source_topic_id","target_topic_id"],"description":"Merge topics","x-ref":"#/definitions/postApiV4TopicsMerge"},"index$":0}]},"GET /api/v4/topics":{"protocol":"http","parameters":[{"in":"query","name":"search","description":"Return list of topics matching the search criteria","type":"string","required":false,"example":"search","index$":0},{"in":"query","name":"without_projects","description":"Return list of topics without assigned projects","type":"boolean","required":false,"index$":1},{"in":"query","name":"organization_id","description":"The organization id for the topics","type":"integer","format":"int32","default":{},"required":false,"index$":2},{"in":"query","name":"page","description":"Current page number","type":"integer","format":"int32","default":1,"required":false,"example":1,"index$":3},{"in":"query","name":"per_page","description":"Number of items per page","type":"integer","format":"int32","default":20,"required":false,"example":20,"index$":4}]},"GET /api/v4/topics/{id}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"ID of project topic","type":"integer","format":"int32","required":true,"index$":0}]},"PUT /api/v4/topics/{id}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"ID of project topic","type":"integer","format":"int32","required":true,"index$":0},{"name":"putApiV4TopicsId","in":"body","required":true,"schema":{"type":"object","properties":{"name":{"type":"string","description":"Slug (name)"},"title":{"type":"string","description":"Title"},"description":{"type":"string","description":"Description"},"avatar":{"type":"file","description":"Avatar image for topic"}},"description":"Update a topic","x-ref":"#/definitions/putApiV4TopicsId"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const api_entities_projects_topic_ref01_ent = client.ApiEntitiesProjectsTopic()
    let api_entities_projects_topic_ref01_data = setup.data.new.api_entities_projects_topic['api_entities_projects_topic_ref01']

    api_entities_projects_topic_ref01_data = (await api_entities_projects_topic_ref01_ent.create(api_entities_projects_topic_ref01_data)).data()
    assert(null != api_entities_projects_topic_ref01_data.id)


    // UPDATE
    const api_entities_projects_topic_ref01_data_up0: any = {}
    api_entities_projects_topic_ref01_data_up0.id = api_entities_projects_topic_ref01_data.id

    const api_entities_projects_topic_ref01_markdef_up0 = { name: 'avatar_url', value: 'Mark01-api_entities_projects_topic_ref01_' + setup.now }
    ;(api_entities_projects_topic_ref01_data_up0 as any)[api_entities_projects_topic_ref01_markdef_up0.name] = api_entities_projects_topic_ref01_markdef_up0.value

    const api_entities_projects_topic_ref01_resdata_up0 = (await api_entities_projects_topic_ref01_ent.update(api_entities_projects_topic_ref01_data_up0)).data()
    assert(api_entities_projects_topic_ref01_resdata_up0.id === api_entities_projects_topic_ref01_data_up0.id)

    assert((api_entities_projects_topic_ref01_resdata_up0 as any)[api_entities_projects_topic_ref01_markdef_up0.name] === api_entities_projects_topic_ref01_markdef_up0.value)


    // LOAD
    const api_entities_projects_topic_ref01_match_dt0: any = {}
    api_entities_projects_topic_ref01_match_dt0.id = api_entities_projects_topic_ref01_data.id
    const api_entities_projects_topic_ref01_data_dt0 = (await api_entities_projects_topic_ref01_ent.load(api_entities_projects_topic_ref01_match_dt0)).data()
    assert(api_entities_projects_topic_ref01_data_dt0.id === api_entities_projects_topic_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_projects_topic/ApiEntitiesProjectsTopicTestData.json')

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
    ['api_entities_projects_topic01','api_entities_projects_topic02','api_entities_projects_topic03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_PROJECTS_TOPIC_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_PROJECTS_TOPIC_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_PROJECTS_TOPIC_ENTID']
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
  
