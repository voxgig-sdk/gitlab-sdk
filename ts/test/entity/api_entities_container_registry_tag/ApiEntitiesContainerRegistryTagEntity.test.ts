

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


describe('ApiEntitiesContainerRegistryTagEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesContainerRegistryTag()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_container_registry_tag.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"location","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"name","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"path","req":false,"type":"`$STRING`","index$":2}],"name":"api_entities_container_registry_tag","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"repository_id","orig":"repository_id","reqd":true,"type":"`$STRING`","index$":1}],"query":[{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"example":20,"kind":"query","name":"per_page","orig":"per_page","reqd":false,"type":"`$INTEGER`","index$":1}]},"contract":{"id":"GET /api/v4/projects/{id}/registry/repositories/{repository_id}/tags","json":"{\"operationId\":\"getApiV4ProjectsIdRegistryRepositoriesRepositoryIdTags\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The ID of the repository\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"repository_id\",\"required\":true,\"type\":\"integer\"},{\"default\":1,\"description\":\"Current page number\",\"example\":1,\"format\":\"int32\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"type\":\"integer\"},{\"default\":20,\"description\":\"Number of items per page\",\"example\":20,\"format\":\"int32\",\"in\":\"query\",\"name\":\"per_page\",\"required\":false,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"List tags of a repository\",\"schema\":{\"items\":{\"description\":\"API_Entities_ContainerRegistry_Tag model\",\"properties\":{\"location\":{\"example\":\"registry.dev/namespace1/project1/test_image_1:latest\",\"type\":\"string\"},\"name\":{\"example\":\"latest\",\"type\":\"string\"},\"path\":{\"example\":\"namespace1/project1/test_image_1:latest\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not Found\"},\"405\":{\"description\":\"Method Not Allowed\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/registry/repositories/{repository_id}/tags","rename":{"param":{"id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"registry"},{"lit":"repositories"},{"var":"repository_id"},{"lit":"tags"}],"select":{"exist":["page","per_page","project_id","repository_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["project","repository"]]},"key$":"api_entities_container_registry_tag","name__orig":"api_entities_container_registry_tag","Name":"ApiEntitiesContainerRegistryTag","name_":"api_entities_container_registry_tag","name-":"api-entities-container-registry-tag","NAME":"API_ENTITIES_CONTAINER_REGISTRY_TAG","index$":54}, {"active":true,"entity":"api_entities_container_registry_tag","key$":"BasicApiEntitiesContainerRegistryTagFlow","kind":"basic","name":"BasicApiEntitiesContainerRegistryTagFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{"project_id":"project01","repository_id":"repository01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"api_entities_container_registry_tag_ref01"}}],"index$":0}]}, 'ApiEntitiesContainerRegistryTag')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let api_entities_container_registry_tag_ref01_data = Object.values(setup.data.existing.api_entities_container_registry_tag)[0] as any

    // LIST
    const api_entities_container_registry_tag_ref01_ent = client.ApiEntitiesContainerRegistryTag()
    const api_entities_container_registry_tag_ref01_match: any = {}
    api_entities_container_registry_tag_ref01_match['project_id'] = setup.idmap['project01']
    api_entities_container_registry_tag_ref01_match['repository_id'] = setup.idmap['repository01']

    const api_entities_container_registry_tag_ref01_list = (await api_entities_container_registry_tag_ref01_ent.list(api_entities_container_registry_tag_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_container_registry_tag/ApiEntitiesContainerRegistryTagTestData.json')

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
    ['api_entities_container_registry_tag01','api_entities_container_registry_tag02','api_entities_container_registry_tag03','project01','project02','project03','repository01','repository02','repository03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_CONTAINER_REGISTRY_TAG_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_CONTAINER_REGISTRY_TAG_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_CONTAINER_REGISTRY_TAG_ENTID']
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
  
