

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


describe('ApiEntitiesContainerRegistryRepositoryEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesContainerRegistryRepository()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_container_registry_repository.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"date-time","name":"cleanup_policy_started_at","req":false,"type":"`$STRING`","index$":0},{"active":true,"format":"date-time","name":"created_at","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"delete_api_path","req":false,"type":"`$STRING`","index$":2},{"active":true,"format":"int32","name":"id","req":false,"type":"`$INTEGER`","index$":3},{"active":true,"name":"location","req":false,"type":"`$STRING`","index$":4},{"active":true,"name":"name","req":false,"type":"`$STRING`","index$":5},{"active":true,"name":"path","req":false,"type":"`$STRING`","index$":6},{"active":true,"format":"int32","name":"project_id","req":false,"type":"`$INTEGER`","index$":7},{"active":true,"format":"int32","name":"size","req":false,"type":"`$INTEGER`","index$":8},{"active":true,"name":"status","req":false,"type":"`$STRING`","index$":9},{"active":true,"name":"tags","req":false,"short":"API_Entities_ContainerRegistry_Tag model","type":"`$OBJECT`","index$":10},{"active":true,"format":"int32","name":"tags_count","req":false,"type":"`$INTEGER`","index$":11}],"id":{"field":"id","name":"id"},"name":"api_entities_container_registry_repository","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"example":20,"kind":"query","name":"per_page","orig":"per_page","reqd":false,"type":"`$INTEGER`","index$":1},{"active":true,"kind":"query","name":"tag","orig":"tag","reqd":false,"type":"`$ANY`","index$":2},{"active":true,"kind":"query","name":"tags_count","orig":"tags_count","reqd":false,"type":"`$INTEGER`","index$":3}]},"contract":{"id":"GET /api/v4/projects/{id}/registry/repositories","json":"{\"operationId\":\"getApiV4ProjectsIdRegistryRepositories\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"default\":1,\"description\":\"Current page number\",\"example\":1,\"format\":\"int32\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"type\":\"integer\"},{\"default\":20,\"description\":\"Number of items per page\",\"example\":20,\"format\":\"int32\",\"in\":\"query\",\"name\":\"per_page\",\"required\":false,\"type\":\"integer\"},{\"default\":false,\"description\":\"Determines if tags should be included\",\"in\":\"query\",\"name\":\"tags\",\"required\":false,\"type\":\"boolean\"},{\"default\":false,\"description\":\"Determines if the tags count should be included\",\"in\":\"query\",\"name\":\"tags_count\",\"required\":false,\"type\":\"boolean\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"List container repositories within a project\",\"schema\":{\"items\":{\"description\":\"API_Entities_ContainerRegistry_Repository model\",\"properties\":{\"cleanup_policy_started_at\":{\"example\":\"2020-08-17T03:12:35.489Z\",\"format\":\"date-time\",\"type\":\"string\"},\"created_at\":{\"example\":\"2019-01-10T13:39:08.229Z\",\"format\":\"date-time\",\"type\":\"string\"},\"delete_api_path\":{\"example\":\"delete/api/path\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"location\":{\"example\":\"gitlab.example.com/group/project/releases\",\"type\":\"string\"},\"name\":{\"example\":\"releases\",\"type\":\"string\"},\"path\":{\"example\":\"group/project/releases\",\"type\":\"string\"},\"project_id\":{\"example\":9,\"format\":\"int32\",\"type\":\"integer\"},\"size\":{\"example\":12345,\"format\":\"int32\",\"type\":\"integer\"},\"status\":{\"example\":\"delete_scheduled\",\"type\":\"string\"},\"tags\":{\"description\":\"API_Entities_ContainerRegistry_Tag model\",\"properties\":{\"location\":{\"example\":\"registry.dev/namespace1/project1/test_image_1:latest\",\"type\":\"string\"},\"name\":{\"example\":\"latest\",\"type\":\"string\"},\"path\":{\"example\":\"namespace1/project1/test_image_1:latest\",\"type\":\"string\"}},\"type\":\"object\"},\"tags_count\":{\"example\":3,\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"}},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/registry/repositories","rename":{"param":{"id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"registry"},{"lit":"repositories"}],"select":{"exist":["page","per_page","project_id","tag","tags_count"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"group_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"example":20,"kind":"query","name":"per_page","orig":"per_page","reqd":false,"type":"`$INTEGER`","index$":1}]},"contract":{"id":"GET /api/v4/groups/{id}/registry/repositories","json":"{\"operationId\":\"getApiV4GroupsIdRegistryRepositories\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the group accessible by the authenticated user\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"default\":1,\"description\":\"Current page number\",\"example\":1,\"format\":\"int32\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"type\":\"integer\"},{\"default\":20,\"description\":\"Number of items per page\",\"example\":20,\"format\":\"int32\",\"in\":\"query\",\"name\":\"per_page\",\"required\":false,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"List registry repositories within a group\",\"schema\":{\"items\":{\"description\":\"API_Entities_ContainerRegistry_Repository model\",\"properties\":{\"cleanup_policy_started_at\":{\"example\":\"2020-08-17T03:12:35.489Z\",\"format\":\"date-time\",\"type\":\"string\"},\"created_at\":{\"example\":\"2019-01-10T13:39:08.229Z\",\"format\":\"date-time\",\"type\":\"string\"},\"delete_api_path\":{\"example\":\"delete/api/path\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"location\":{\"example\":\"gitlab.example.com/group/project/releases\",\"type\":\"string\"},\"name\":{\"example\":\"releases\",\"type\":\"string\"},\"path\":{\"example\":\"group/project/releases\",\"type\":\"string\"},\"project_id\":{\"example\":9,\"format\":\"int32\",\"type\":\"integer\"},\"size\":{\"example\":12345,\"format\":\"int32\",\"type\":\"integer\"},\"status\":{\"example\":\"delete_scheduled\",\"type\":\"string\"},\"tags\":{\"description\":\"API_Entities_ContainerRegistry_Tag model\",\"properties\":{\"location\":{\"example\":\"registry.dev/namespace1/project1/test_image_1:latest\",\"type\":\"string\"},\"name\":{\"example\":\"latest\",\"type\":\"string\"},\"path\":{\"example\":\"namespace1/project1/test_image_1:latest\",\"type\":\"string\"}},\"type\":\"object\"},\"tags_count\":{\"example\":3,\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"}},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Group Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/groups/{id}/registry/repositories","rename":{"param":{"id":"group_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"registry"},{"lit":"repositories"}],"select":{"exist":["group_id","page","per_page"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"size","orig":"size","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"kind":"query","name":"tag","orig":"tag","reqd":false,"type":"`$ANY`","index$":1},{"active":true,"kind":"query","name":"tags_count","orig":"tags_count","reqd":false,"type":"`$INTEGER`","index$":2}]},"contract":{"id":"GET /api/v4/registry/repositories/{id}","json":"{\"operationId\":\"getApiV4RegistryRepositoriesId\",\"parameters\":[{\"description\":\"The ID of the repository\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"default\":false,\"description\":\"Determines if tags should be included\",\"in\":\"query\",\"name\":\"tags\",\"required\":false,\"type\":\"boolean\"},{\"default\":false,\"description\":\"Determines if the tags count should be included\",\"in\":\"query\",\"name\":\"tags_count\",\"required\":false,\"type\":\"boolean\"},{\"default\":false,\"description\":\"Determines if the size should be included\",\"in\":\"query\",\"name\":\"size\",\"required\":false,\"type\":\"boolean\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get a container repository\",\"schema\":{\"description\":\"API_Entities_ContainerRegistry_Repository model\",\"properties\":{\"cleanup_policy_started_at\":{\"example\":\"2020-08-17T03:12:35.489Z\",\"format\":\"date-time\",\"type\":\"string\"},\"created_at\":{\"example\":\"2019-01-10T13:39:08.229Z\",\"format\":\"date-time\",\"type\":\"string\"},\"delete_api_path\":{\"example\":\"delete/api/path\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"location\":{\"example\":\"gitlab.example.com/group/project/releases\",\"type\":\"string\"},\"name\":{\"example\":\"releases\",\"type\":\"string\"},\"path\":{\"example\":\"group/project/releases\",\"type\":\"string\"},\"project_id\":{\"example\":9,\"format\":\"int32\",\"type\":\"integer\"},\"size\":{\"example\":12345,\"format\":\"int32\",\"type\":\"integer\"},\"status\":{\"example\":\"delete_scheduled\",\"type\":\"string\"},\"tags\":{\"description\":\"API_Entities_ContainerRegistry_Tag model\",\"properties\":{\"location\":{\"example\":\"registry.dev/namespace1/project1/test_image_1:latest\",\"type\":\"string\"},\"name\":{\"example\":\"latest\",\"type\":\"string\"},\"path\":{\"example\":\"namespace1/project1/test_image_1:latest\",\"type\":\"string\"}},\"type\":\"object\"},\"tags_count\":{\"example\":3,\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"}},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Repository Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/registry/repositories/{id}","segments":[{"lit":"api"},{"lit":"v4"},{"lit":"registry"},{"lit":"repositories"},{"var":"id"}],"select":{"exist":["id","size","tag","tags_count"]},"transform":{"req":"`reqdata`","res":"`body.tags`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["group"],["project"]]},"key$":"api_entities_container_registry_repository","name__orig":"api_entities_container_registry_repository","Name":"ApiEntitiesContainerRegistryRepository","name_":"api_entities_container_registry_repository","name-":"api-entities-container-registry-repository","NAME":"API_ENTITIES_CONTAINER_REGISTRY_REPOSITORY","index$":53}, {"active":true,"entity":"api_entities_container_registry_repository","key$":"BasicApiEntitiesContainerRegistryRepositoryFlow","kind":"basic","name":"BasicApiEntitiesContainerRegistryRepositoryFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{"group_id":"group01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"api_entities_container_registry_repository_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"api_entities_container_registry_repository_ref01","srcdatavar":"api_entities_container_registry_repository_ref01_data","suffix":"_dt0"},"match":{"id":"api_entities_container_registry_repository01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_container_registry_repository_ref01"}}],"index$":1}]}, 'ApiEntitiesContainerRegistryRepository')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let api_entities_container_registry_repository_ref01_data = Object.values(setup.data.existing.api_entities_container_registry_repository)[0] as any

    // LIST
    const api_entities_container_registry_repository_ref01_ent = client.ApiEntitiesContainerRegistryRepository()
    const api_entities_container_registry_repository_ref01_match: any = {}
    api_entities_container_registry_repository_ref01_match['group_id'] = setup.idmap['group01']

    const api_entities_container_registry_repository_ref01_list = (await api_entities_container_registry_repository_ref01_ent.list(api_entities_container_registry_repository_ref01_match)).map((e: any) => e.data())


    // LOAD
    const api_entities_container_registry_repository_ref01_match_dt0: any = {}
    api_entities_container_registry_repository_ref01_match_dt0.id = api_entities_container_registry_repository_ref01_data.id
    const api_entities_container_registry_repository_ref01_data_dt0 = (await api_entities_container_registry_repository_ref01_ent.load(api_entities_container_registry_repository_ref01_match_dt0)).data()
    assert(api_entities_container_registry_repository_ref01_data_dt0.id === api_entities_container_registry_repository_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_container_registry_repository/ApiEntitiesContainerRegistryRepositoryTestData.json')

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
    ['api_entities_container_registry_repository01','api_entities_container_registry_repository02','api_entities_container_registry_repository03','group01','group02','group03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_CONTAINER_REGISTRY_REPOSITORY_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_CONTAINER_REGISTRY_REPOSITORY_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_CONTAINER_REGISTRY_REPOSITORY_ENTID']
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
  
