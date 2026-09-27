

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":false,"t":"`$STRING`","key$":"created_at","index$":0},"digest":{"a":true,"h":"Digest","n":"digest","r":false,"t":"`$STRING`","key$":"digest","index$":1},"location":{"a":true,"h":"Location","n":"location","r":false,"t":"`$STRING`","key$":"location","index$":2},"name":{"a":true,"h":"Name","n":"name","r":false,"t":"`$STRING`","key$":"name","index$":3},"path":{"a":true,"h":"Path","n":"path","r":false,"t":"`$STRING`","key$":"path","index$":4},"revision":{"a":true,"h":"Revision","n":"revision","r":false,"t":"`$STRING`","key$":"revision","index$":5},"short_revision":{"a":true,"h":"Short Revision","n":"short_revision","r":false,"t":"`$STRING`","key$":"short_revision","index$":6},"total_size":{"a":true,"fo":"int32","h":"Total Size","n":"total_size","r":false,"t":"`$INTEGER`","key$":"total_size","index$":7}},"name":"api_entities_container_registry_tag_detail","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v4/projects/{id}/registry/repositories/{repository_id}/tags/{tag_name}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"repository_id","or":"repository_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"tag_name","or":"tag_name","r":true,"t":"`$ANY`","index$":2}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/registry/repositories/{repository_id}/tags/{tag_name}","q":{"exist":["project_id","repository_id","tag_name"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"registry"},{"lit":"repositories"},{"var":"repository_id"},{"lit":"tags"},{"var":"tag_name"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.project","$.main.kit.entity.tag"]]},"key$":"api_entities_container_registry_tag_detail","name__orig":"api_entities_container_registry_tag_detail","Name":"ApiEntitiesContainerRegistryTagDetail","name_":"api_entities_container_registry_tag_detail","name-":"api-entities-container-registry-tag-detail","NAME":"API_ENTITIES_CONTAINER_REGISTRY_TAG_DETAIL","index$":55}, {"active":true,"entity":"api_entities_container_registry_tag_detail","key$":"BasicApiEntitiesContainerRegistryTagDetailFlow","kind":"basic","name":"BasicApiEntitiesContainerRegistryTagDetailFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"api_entities_container_registry_tag_detail_ref01","srcdatavar":"api_entities_container_registry_tag_detail_ref01_data","suffix":"_dt0"},"m":{"id":"api_entities_container_registry_tag_detail01","project_id":"project01","repository_id":"repository01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_container_registry_tag_detail_ref01"}}],"index$":0}]}, 'ApiEntitiesContainerRegistryTagDetail', {"GET /api/v4/projects/{id}/registry/repositories/{repository_id}/tags/{tag_name}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"in":"path","name":"repository_id","description":"The ID of the repository","type":"integer","format":"int32","required":true,"index$":1},{"in":"path","name":"tag_name","description":"The name of the tag","type":"string","required":true,"index$":2}]}})
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
    ['api_entities_container_registry_tag_detail01','api_entities_container_registry_tag_detail02','api_entities_container_registry_tag_detail03','project01','project02','project03','tag01','tag02','tag03','repository01'],
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
  
