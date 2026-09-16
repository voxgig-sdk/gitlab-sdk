

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


describe('ApiEntitiesBasicRefEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesBasicRef()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_basic_ref.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"name","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"type","req":false,"type":"`$STRING`","index$":1}],"name":"api_entities_basic_ref","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"sha","orig":"sha","reqd":true,"type":"`$ANY`","index$":1}],"query":[{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"example":20,"kind":"query","name":"per_page","orig":"per_page","reqd":false,"type":"`$INTEGER`","index$":1},{"active":true,"kind":"query","name":"type","orig":"type","reqd":false,"type":"`$ANY`","index$":2}]},"contract":{"id":"GET /api/v4/projects/{id}/repository/commits/{sha}/refs","json":"{\"operationId\":\"getApiV4ProjectsIdRepositoryCommitsShaRefs\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"A commit sha\",\"in\":\"path\",\"name\":\"sha\",\"required\":true,\"type\":\"string\"},{\"default\":\"all\",\"description\":\"Scope\",\"enum\":[\"branch\",\"tag\",\"all\"],\"in\":\"query\",\"name\":\"type\",\"required\":false,\"type\":\"string\"},{\"default\":1,\"description\":\"Current page number\",\"example\":1,\"format\":\"int32\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"type\":\"integer\"},{\"default\":20,\"description\":\"Number of items per page\",\"example\":20,\"format\":\"int32\",\"in\":\"query\",\"name\":\"per_page\",\"required\":false,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get all references a commit is pushed to\",\"schema\":{\"items\":{\"description\":\"API_Entities_BasicRef model\",\"properties\":{\"name\":{\"example\":\"v1.1.0\",\"type\":\"string\"},\"type\":{\"example\":\"tag\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/repository/commits/{sha}/refs","rename":{"param":{"id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"repository"},{"lit":"commits"},{"var":"sha"},{"lit":"refs"}],"select":{"exist":["page","per_page","project_id","sha","type"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["project","commit"]]},"key$":"api_entities_basic_ref","name__orig":"api_entities_basic_ref","Name":"ApiEntitiesBasicRef","name_":"api_entities_basic_ref","name-":"api-entities-basic-ref","NAME":"API_ENTITIES_BASIC_REF","index$":13}, {"active":true,"entity":"api_entities_basic_ref","key$":"BasicApiEntitiesBasicRefFlow","kind":"basic","name":"BasicApiEntitiesBasicRefFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{"project_id":"project01","sha":"sha01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"api_entities_basic_ref_ref01"}}],"index$":0}]}, 'ApiEntitiesBasicRef')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let api_entities_basic_ref_ref01_data = Object.values(setup.data.existing.api_entities_basic_ref)[0] as any

    // LIST
    const api_entities_basic_ref_ref01_ent = client.ApiEntitiesBasicRef()
    const api_entities_basic_ref_ref01_match: any = {}
    api_entities_basic_ref_ref01_match['project_id'] = setup.idmap['project01']
    api_entities_basic_ref_ref01_match['sha'] = setup.idmap['sha01']

    const api_entities_basic_ref_ref01_list = (await api_entities_basic_ref_ref01_ent.list(api_entities_basic_ref_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_basic_ref/ApiEntitiesBasicRefTestData.json')

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
    ['api_entities_basic_ref01','api_entities_basic_ref02','api_entities_basic_ref03','project01','project02','project03','commit01','commit02','commit03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_BASIC_REF_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_BASIC_REF_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_BASIC_REF_ENTID']
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
  
