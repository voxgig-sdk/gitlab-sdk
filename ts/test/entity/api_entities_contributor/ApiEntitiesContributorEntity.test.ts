

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


describe('ApiEntitiesContributorEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesContributor()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_contributor.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"int32","name":"additions","req":false,"type":"`$INTEGER`","index$":0},{"active":true,"format":"int32","name":"commits","req":false,"type":"`$INTEGER`","index$":1},{"active":true,"format":"int32","name":"deletions","req":false,"type":"`$INTEGER`","index$":2},{"active":true,"name":"email","req":false,"type":"`$STRING`","index$":3},{"active":true,"name":"name","req":false,"type":"`$STRING`","index$":4}],"name":"api_entities_contributor","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":1,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"order_by","orig":"order_by","reqd":false,"type":"`$ANY`","index$":0},{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":1},{"active":true,"example":20,"kind":"query","name":"per_page","orig":"per_page","reqd":false,"type":"`$INTEGER`","index$":2},{"active":true,"example":"main","kind":"query","name":"ref","orig":"ref","reqd":false,"type":"`$ANY`","index$":3},{"active":true,"kind":"query","name":"sort","orig":"sort","reqd":false,"type":"`$ANY`","index$":4}]},"contract":{"id":"GET /api/v4/projects/{id}/repository/contributors","json":"{\"operationId\":\"getApiV4ProjectsIdRepositoryContributors\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"example\":1,\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"default\":1,\"description\":\"Current page number\",\"example\":1,\"format\":\"int32\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"type\":\"integer\"},{\"default\":20,\"description\":\"Number of items per page\",\"example\":20,\"format\":\"int32\",\"in\":\"query\",\"name\":\"per_page\",\"required\":false,\"type\":\"integer\"},{\"description\":\"The name of a repository branch or tag, if not given the default branch is used\",\"example\":\"main\",\"in\":\"query\",\"name\":\"ref\",\"required\":false,\"type\":\"string\"},{\"default\":\"commits\",\"description\":\"Return contributors ordered by `name` or `email` or `commits`\",\"enum\":[\"email\",\"name\",\"commits\"],\"in\":\"query\",\"name\":\"order_by\",\"required\":false,\"type\":\"string\"},{\"default\":\"asc\",\"description\":\"Sort by asc (ascending) or desc (descending)\",\"enum\":[\"asc\",\"desc\"],\"in\":\"query\",\"name\":\"sort\",\"required\":false,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get repository contributors\",\"schema\":{\"description\":\"API_Entities_Contributor model\",\"properties\":{\"additions\":{\"example\":3,\"format\":\"int32\",\"type\":\"integer\"},\"commits\":{\"example\":117,\"format\":\"int32\",\"type\":\"integer\"},\"deletions\":{\"example\":5,\"format\":\"int32\",\"type\":\"integer\"},\"email\":{\"example\":\"johndoe@example.com\",\"type\":\"string\"},\"name\":{\"example\":\"John Doe\",\"type\":\"string\"}},\"type\":\"object\"}}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/repository/contributors","rename":{"param":{"id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"repository"},{"lit":"contributors"}],"select":{"exist":["order_by","page","per_page","project_id","ref","sort"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["project"]]},"key$":"api_entities_contributor","name__orig":"api_entities_contributor","Name":"ApiEntitiesContributor","name_":"api_entities_contributor","name-":"api-entities-contributor","NAME":"API_ENTITIES_CONTRIBUTOR","index$":56}, {"active":true,"entity":"api_entities_contributor","key$":"BasicApiEntitiesContributorFlow","kind":"basic","name":"BasicApiEntitiesContributorFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"api_entities_contributor_ref01","srcdatavar":"api_entities_contributor_ref01_data","suffix":"_dt0"},"match":{"id":"api_entities_contributor01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_contributor_ref01"}}],"index$":0}]}, 'ApiEntitiesContributor')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let api_entities_contributor_ref01_data = Object.values(setup.data.existing.api_entities_contributor)[0] as any

    // LOAD: skipped — no entity id field and load requires path params.
    // Entity-var is declared here so later flow steps still compile.
    const api_entities_contributor_ref01_ent = client.ApiEntitiesContributor()


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_contributor/ApiEntitiesContributorTestData.json')

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
    ['api_entities_contributor01','api_entities_contributor02','api_entities_contributor03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_CONTRIBUTOR_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_CONTRIBUTOR_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_CONTRIBUTOR_ENTID']
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
  
