

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"avatar_url","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"description","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"name","req":false,"type":"`$STRING`","index$":3},{"active":true,"name":"organization_id","req":false,"type":"`$STRING`","index$":4},{"active":true,"name":"title","req":false,"type":"`$STRING`","index$":5},{"active":true,"name":"total_projects_count","req":false,"type":"`$STRING`","index$":6}],"id":{"field":"id","name":"id"},"name":"api_entities_projects_topic","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"post_api_v4_topic","orig":"post_api_v4_topic","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"POST /api/v4/topics","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4Topics\",\"parameters\":[{\"in\":\"body\",\"name\":\"postApiV4Topics\",\"required\":true,\"schema\":{\"description\":\"Create a topic\",\"properties\":{\"avatar\":{\"description\":\"Avatar image for topic\",\"type\":\"file\"},\"description\":{\"description\":\"Description\",\"type\":\"string\"},\"name\":{\"description\":\"Slug (name)\",\"type\":\"string\"},\"organization_id\":{\"default\":{},\"description\":\"The organization id for the topic\",\"format\":\"int32\",\"type\":\"integer\"},\"title\":{\"description\":\"Title\",\"type\":\"string\"}},\"required\":[\"name\",\"title\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"Create a topic\",\"schema\":{\"description\":\"API_Entities_Projects_Topic model\",\"properties\":{\"avatar_url\":{\"type\":\"string\"},\"description\":{\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"organization_id\":{\"type\":\"string\"},\"title\":{\"type\":\"string\"},\"total_projects_count\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/topics","segments":[{"lit":"api"},{"lit":"v4"},{"lit":"topics"}],"select":{"exist":["post_api_v4_topic"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"post_api_v4_topics_merge","orig":"post_api_v4_topics_merge","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"POST /api/v4/topics/merge","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4TopicsMerge\",\"parameters\":[{\"in\":\"body\",\"name\":\"postApiV4TopicsMerge\",\"required\":true,\"schema\":{\"description\":\"Merge topics\",\"properties\":{\"source_topic_id\":{\"description\":\"ID of source project topic\",\"format\":\"int32\",\"type\":\"integer\"},\"target_topic_id\":{\"description\":\"ID of target project topic\",\"format\":\"int32\",\"type\":\"integer\"}},\"required\":[\"source_topic_id\",\"target_topic_id\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"Merge topics\",\"schema\":{\"description\":\"API_Entities_Projects_Topic model\",\"properties\":{\"avatar_url\":{\"type\":\"string\"},\"description\":{\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"organization_id\":{\"type\":\"string\"},\"title\":{\"type\":\"string\"},\"total_projects_count\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/topics/merge","segments":[{"lit":"api"},{"lit":"v4"},{"lit":"topics"},{"lit":"merge"}],"select":{"exist":["post_api_v4_topics_merge"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"organization_id","orig":"organization_id","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":1},{"active":true,"example":20,"kind":"query","name":"per_page","orig":"per_page","reqd":false,"type":"`$INTEGER`","index$":2},{"active":true,"example":"search","kind":"query","name":"search","orig":"search","reqd":false,"type":"`$ANY`","index$":3},{"active":true,"kind":"query","name":"without_project","orig":"without_project","reqd":false,"type":"`$ANY`","index$":4}]},"contract":{"id":"GET /api/v4/topics","json":"{\"operationId\":\"getApiV4Topics\",\"parameters\":[{\"description\":\"Return list of topics matching the search criteria\",\"example\":\"search\",\"in\":\"query\",\"name\":\"search\",\"required\":false,\"type\":\"string\"},{\"description\":\"Return list of topics without assigned projects\",\"in\":\"query\",\"name\":\"without_projects\",\"required\":false,\"type\":\"boolean\"},{\"default\":{},\"description\":\"The organization id for the topics\",\"format\":\"int32\",\"in\":\"query\",\"name\":\"organization_id\",\"required\":false,\"type\":\"integer\"},{\"default\":1,\"description\":\"Current page number\",\"example\":1,\"format\":\"int32\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"type\":\"integer\"},{\"default\":20,\"description\":\"Number of items per page\",\"example\":20,\"format\":\"int32\",\"in\":\"query\",\"name\":\"per_page\",\"required\":false,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get topics\",\"schema\":{\"description\":\"API_Entities_Projects_Topic model\",\"properties\":{\"avatar_url\":{\"type\":\"string\"},\"description\":{\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"organization_id\":{\"type\":\"string\"},\"title\":{\"type\":\"string\"},\"total_projects_count\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/topics","segments":[{"lit":"api"},{"lit":"v4"},{"lit":"topics"}],"select":{"exist":["organization_id","page","per_page","search","without_project"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /api/v4/topics/{id}","json":"{\"operationId\":\"getApiV4TopicsId\",\"parameters\":[{\"description\":\"ID of project topic\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get topic\",\"schema\":{\"description\":\"API_Entities_Projects_Topic model\",\"properties\":{\"avatar_url\":{\"type\":\"string\"},\"description\":{\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"organization_id\":{\"type\":\"string\"},\"title\":{\"type\":\"string\"},\"total_projects_count\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/topics/{id}","segments":[{"lit":"api"},{"lit":"v4"},{"lit":"topics"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"put_api_v4_topics_id","orig":"put_api_v4_topics_id","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"PUT /api/v4/topics/{id}","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"putApiV4TopicsId\",\"parameters\":[{\"description\":\"ID of project topic\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"integer\"},{\"in\":\"body\",\"name\":\"putApiV4TopicsId\",\"required\":true,\"schema\":{\"description\":\"Update a topic\",\"properties\":{\"avatar\":{\"description\":\"Avatar image for topic\",\"type\":\"file\"},\"description\":{\"description\":\"Description\",\"type\":\"string\"},\"name\":{\"description\":\"Slug (name)\",\"type\":\"string\"},\"title\":{\"description\":\"Title\",\"type\":\"string\"}},\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Update a topic\",\"schema\":{\"description\":\"API_Entities_Projects_Topic model\",\"properties\":{\"avatar_url\":{\"type\":\"string\"},\"description\":{\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"organization_id\":{\"type\":\"string\"},\"title\":{\"type\":\"string\"},\"total_projects_count\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"PUT","orig":"/api/v4/topics/{id}","segments":[{"lit":"api"},{"lit":"v4"},{"lit":"topics"},{"var":"id"}],"select":{"exist":["id","put_api_v4_topics_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"api_entities_projects_topic","name__orig":"api_entities_projects_topic","Name":"ApiEntitiesProjectsTopic","name_":"api_entities_projects_topic","name-":"api-entities-projects-topic","NAME":"API_ENTITIES_PROJECTS_TOPIC","index$":143}, {"active":true,"entity":"api_entities_projects_topic","key$":"BasicApiEntitiesProjectsTopicFlow","kind":"basic","name":"BasicApiEntitiesProjectsTopicFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"api_entities_projects_topic_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{"ref":"api_entities_projects_topic_ref01","srcdatavar":"api_entities_projects_topic_ref01_data","suffix":"_up0","textfield":"avatar_url"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_projects_topic_ref01"}}],"valid":[],"index$":1},{"active":true,"data":{},"input":{"ref":"api_entities_projects_topic_ref01","srcdatavar":"api_entities_projects_topic_ref01_data","suffix":"_dt0"},"match":{"id":"api_entities_projects_topic01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_projects_topic_ref01"}}],"index$":2}]}, 'ApiEntitiesProjectsTopic')
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
  
