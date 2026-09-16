

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


describe('EeApiEntitiesGeoPipelineRefEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.EeApiEntitiesGeoPipelineRef()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'ee_api_entities_geo_pipeline_ref.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"pipeline_refs","req":false,"type":"`$ARRAY`","index$":0}],"name":"ee_api_entities_geo_pipeline_ref","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"gl_repository","orig":"gl_repository","reqd":true,"type":"`$ANY`","index$":0}]},"contract":{"id":"GET /api/v4/geo/repositories/{gl_repository}/pipeline_refs","json":"{\"operationId\":\"getApiV4GeoRepositoriesGlRepositoryPipelineRefs\",\"parameters\":[{\"description\":\"The repository to check\",\"in\":\"path\",\"name\":\"gl_repository\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Returns the list of pipeline refs for the project\",\"schema\":{\"items\":{\"description\":\"EE_API_Entities_Geo_PipelineRefs model\",\"properties\":{\"pipeline_refs\":{\"example\":[\"refs/pipelines/1\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"type\":\"object\"},\"type\":\"array\"}},\"401\":{\"description\":\"401 Unauthorized\"},\"404\":{\"description\":\"404 Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/geo/repositories/{gl_repository}/pipeline_refs","segments":[{"lit":"api"},{"lit":"v4"},{"lit":"geo"},{"lit":"repositories"},{"var":"gl_repository"},{"lit":"pipeline_refs"}],"select":{"exist":["gl_repository"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["repository"]]},"key$":"ee_api_entities_geo_pipeline_ref","name__orig":"ee_api_entities_geo_pipeline_ref","Name":"EeApiEntitiesGeoPipelineRef","name_":"ee_api_entities_geo_pipeline_ref","name-":"ee-api-entities-geo-pipeline-ref","NAME":"EE_API_ENTITIES_GEO_PIPELINE_REF","index$":198}, {"active":true,"entity":"ee_api_entities_geo_pipeline_ref","key$":"BasicEeApiEntitiesGeoPipelineRefFlow","kind":"basic","name":"BasicEeApiEntitiesGeoPipelineRefFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{"gl_repository":"gl_repository01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"ee_api_entities_geo_pipeline_ref_ref01"}}],"index$":0}]}, 'EeApiEntitiesGeoPipelineRef')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let ee_api_entities_geo_pipeline_ref_ref01_data = Object.values(setup.data.existing.ee_api_entities_geo_pipeline_ref)[0] as any

    // LIST
    const ee_api_entities_geo_pipeline_ref_ref01_ent = client.EeApiEntitiesGeoPipelineRef()
    const ee_api_entities_geo_pipeline_ref_ref01_match: any = {}
    ee_api_entities_geo_pipeline_ref_ref01_match['gl_repository'] = setup.idmap['gl_repository01']

    const ee_api_entities_geo_pipeline_ref_ref01_list = (await ee_api_entities_geo_pipeline_ref_ref01_ent.list(ee_api_entities_geo_pipeline_ref_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/ee_api_entities_geo_pipeline_ref/EeApiEntitiesGeoPipelineRefTestData.json')

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
    ['ee_api_entities_geo_pipeline_ref01','ee_api_entities_geo_pipeline_ref02','ee_api_entities_geo_pipeline_ref03','repository01','repository02','repository03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_EE_API_ENTITIES_GEO_PIPELINE_REF_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_EE_API_ENTITIES_GEO_PIPELINE_REF_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_EE_API_ENTITIES_GEO_PIPELINE_REF_ENTID']
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
  
