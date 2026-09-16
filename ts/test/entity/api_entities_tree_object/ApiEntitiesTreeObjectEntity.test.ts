

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


describe('ApiEntitiesTreeObjectEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesTreeObject()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_tree_object.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"mode","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"name","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"path","req":false,"type":"`$STRING`","index$":3},{"active":true,"name":"type","req":false,"type":"`$STRING`","index$":4}],"id":{"field":"id","name":"id"},"name":"api_entities_tree_object","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":1,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"example":"a1e8f8d745cc87e3a9248358d9352bb7f9a0aeba","kind":"query","name":"page_token","orig":"page_token","reqd":false,"type":"`$ANY`","index$":1},{"active":true,"kind":"query","name":"pagination","orig":"pagination","reqd":false,"type":"`$ANY`","index$":2},{"active":true,"example":"files/html","kind":"query","name":"path","orig":"path","reqd":false,"type":"`$STRING`","index$":3},{"active":true,"example":20,"kind":"query","name":"per_page","orig":"per_page","reqd":false,"type":"`$INTEGER`","index$":4},{"active":true,"kind":"query","name":"recursive","orig":"recursive","reqd":false,"type":"`$ANY`","index$":5},{"active":true,"example":"main","kind":"query","name":"ref","orig":"ref","reqd":false,"type":"`$ANY`","index$":6}]},"contract":{"id":"GET /api/v4/projects/{id}/repository/tree","json":"{\"operationId\":\"getApiV4ProjectsIdRepositoryTree\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"example\":1,\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The name of a repository branch or tag, if not given the default branch is used\",\"example\":\"main\",\"in\":\"query\",\"name\":\"ref\",\"required\":false,\"type\":\"string\"},{\"description\":\"The path of the tree\",\"example\":\"files/html\",\"in\":\"query\",\"name\":\"path\",\"required\":false,\"type\":\"string\"},{\"default\":false,\"description\":\"Used to get a recursive tree\",\"in\":\"query\",\"name\":\"recursive\",\"required\":false,\"type\":\"boolean\"},{\"default\":1,\"description\":\"Current page number\",\"example\":1,\"format\":\"int32\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"type\":\"integer\"},{\"default\":20,\"description\":\"Number of items per page\",\"example\":20,\"format\":\"int32\",\"in\":\"query\",\"name\":\"per_page\",\"required\":false,\"type\":\"integer\"},{\"default\":\"legacy\",\"description\":\"Specify the pagination method (\\\"none\\\" is only valid if \\\"recursive\\\" is true)\",\"enum\":[\"legacy\",\"keyset\",\"none\"],\"in\":\"query\",\"name\":\"pagination\",\"required\":false,\"type\":\"string\"},{\"description\":\"Record from which to start the keyset pagination\",\"example\":\"a1e8f8d745cc87e3a9248358d9352bb7f9a0aeba\",\"in\":\"query\",\"name\":\"page_token\",\"required\":false,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get a project repository tree\",\"schema\":{\"description\":\"API_Entities_TreeObject model\",\"properties\":{\"id\":{\"example\":\"a1e8f8d745cc87e3a9248358d9352bb7f9a0aeba\",\"type\":\"string\"},\"mode\":{\"example\":\"040000\",\"type\":\"string\"},\"name\":{\"example\":\"html\",\"type\":\"string\"},\"path\":{\"example\":\"files/html\",\"type\":\"string\"},\"type\":{\"example\":\"tree\",\"type\":\"string\"}},\"type\":\"object\"}}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/repository/tree","rename":{"param":{"id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"repository"},{"lit":"tree"}],"select":{"exist":["page","page_token","pagination","path","per_page","project_id","recursive","ref"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["project"]]},"key$":"api_entities_tree_object","name__orig":"api_entities_tree_object","Name":"ApiEntitiesTreeObject","name_":"api_entities_tree_object","name-":"api-entities-tree-object","NAME":"API_ENTITIES_TREE_OBJECT","index$":163}, {"active":true,"entity":"api_entities_tree_object","key$":"BasicApiEntitiesTreeObjectFlow","kind":"basic","name":"BasicApiEntitiesTreeObjectFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"api_entities_tree_object_ref01","srcdatavar":"api_entities_tree_object_ref01_data","suffix":"_dt0"},"match":{"id":"api_entities_tree_object01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_tree_object_ref01"}}],"index$":0}]}, 'ApiEntitiesTreeObject')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let api_entities_tree_object_ref01_data = Object.values(setup.data.existing.api_entities_tree_object)[0] as any

    // LOAD
    const api_entities_tree_object_ref01_ent = client.ApiEntitiesTreeObject()
    const api_entities_tree_object_ref01_match_dt0: any = {}
    api_entities_tree_object_ref01_match_dt0.id = api_entities_tree_object_ref01_data.id
    const api_entities_tree_object_ref01_data_dt0 = (await api_entities_tree_object_ref01_ent.load(api_entities_tree_object_ref01_match_dt0)).data()
    assert(api_entities_tree_object_ref01_data_dt0.id === api_entities_tree_object_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_tree_object/ApiEntitiesTreeObjectTestData.json')

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
    ['api_entities_tree_object01','api_entities_tree_object02','api_entities_tree_object03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_TREE_OBJECT_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_TREE_OBJECT_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_TREE_OBJECT_ENTID']
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
  
