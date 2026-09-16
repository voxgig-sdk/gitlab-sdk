

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


describe('ApiEntitiesContainerRegistryTagDetailEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesContainerRegistryTagDetail()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_container_registry_tag_detail.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"date-time","name":"created_at","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"digest","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"location","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"name","req":false,"type":"`$STRING`","index$":3},{"active":true,"name":"path","req":false,"type":"`$STRING`","index$":4},{"active":true,"name":"revision","req":false,"type":"`$STRING`","index$":5},{"active":true,"name":"short_revision","req":false,"type":"`$STRING`","index$":6},{"active":true,"format":"int32","name":"total_size","req":false,"type":"`$INTEGER`","index$":7}],"name":"api_entities_container_registry_tag_detail","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"repository_id","orig":"repository_id","reqd":true,"type":"`$STRING`","index$":1},{"active":true,"kind":"param","name":"tag_name","orig":"tag_name","reqd":true,"type":"`$ANY`","index$":2}]},"contract":{"id":"GET /api/v4/projects/{id}/registry/repositories/{repository_id}/tags/{tag_name}","json":"{\"operationId\":\"getApiV4ProjectsIdRegistryRepositoriesRepositoryIdTagsTagName\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The ID of the repository\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"repository_id\",\"required\":true,\"type\":\"integer\"},{\"description\":\"The name of the tag\",\"in\":\"path\",\"name\":\"tag_name\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get details about a repository tag\",\"schema\":{\"description\":\"API_Entities_ContainerRegistry_TagDetails model\",\"properties\":{\"created_at\":{\"example\":\"2022-01-10T13:39:08.229Z\",\"format\":\"date-time\",\"type\":\"string\"},\"digest\":{\"example\":\"shadigest\",\"type\":\"string\"},\"location\":{\"example\":\"registry.dev/namespace1/project1/test_image_1:latest\",\"type\":\"string\"},\"name\":{\"example\":\"latest\",\"type\":\"string\"},\"path\":{\"example\":\"namespace1/project1/test_image_1:latest\",\"type\":\"string\"},\"revision\":{\"example\":\"tagrevision\",\"type\":\"string\"},\"short_revision\":{\"example\":\"shortrevison\",\"type\":\"string\"},\"total_size\":{\"example\":3,\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Bad Request\"},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/registry/repositories/{repository_id}/tags/{tag_name}","rename":{"param":{"id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"registry"},{"lit":"repositories"},{"var":"repository_id"},{"lit":"tags"},{"var":"tag_name"}],"select":{"exist":["project_id","repository_id","tag_name"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["project","repository","tag"]]},"key$":"api_entities_container_registry_tag_detail","name__orig":"api_entities_container_registry_tag_detail","Name":"ApiEntitiesContainerRegistryTagDetail","name_":"api_entities_container_registry_tag_detail","name-":"api-entities-container-registry-tag-detail","NAME":"API_ENTITIES_CONTAINER_REGISTRY_TAG_DETAIL","index$":55}, {"active":true,"entity":"api_entities_container_registry_tag_detail","key$":"BasicApiEntitiesContainerRegistryTagDetailFlow","kind":"basic","name":"BasicApiEntitiesContainerRegistryTagDetailFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"api_entities_container_registry_tag_detail_ref01","srcdatavar":"api_entities_container_registry_tag_detail_ref01_data","suffix":"_dt0"},"match":{"id":"api_entities_container_registry_tag_detail01","project_id":"project01","repository_id":"repository01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_container_registry_tag_detail_ref01"}}],"index$":0}]}, 'ApiEntitiesContainerRegistryTagDetail')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let api_entities_container_registry_tag_detail_ref01_data = Object.values(setup.data.existing.api_entities_container_registry_tag_detail)[0] as any

    // LOAD: skipped — no entity id field and load requires path params.
    // Entity-var is declared here so later flow steps still compile.
    const api_entities_container_registry_tag_detail_ref01_ent = client.ApiEntitiesContainerRegistryTagDetail()


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_container_registry_tag_detail/ApiEntitiesContainerRegistryTagDetailTestData.json')

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
    ['api_entities_container_registry_tag_detail01','api_entities_container_registry_tag_detail02','api_entities_container_registry_tag_detail03','project01','project02','project03','repository01','repository02','repository03','tag01','tag02','tag03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_CONTAINER_REGISTRY_TAG_DETAIL_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_CONTAINER_REGISTRY_TAG_DETAIL_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_CONTAINER_REGISTRY_TAG_DETAIL_ENTID']
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
  
