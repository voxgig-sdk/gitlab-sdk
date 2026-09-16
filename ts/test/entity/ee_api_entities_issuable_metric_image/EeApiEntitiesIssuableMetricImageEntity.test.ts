

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


describe('EeApiEntitiesIssuableMetricImageEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.EeApiEntitiesIssuableMetricImage()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create', 'update', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'ee_api_entities_issuable_metric_image.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"created_at","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"file_path","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"filename","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":3},{"active":true,"name":"url","req":false,"type":"`$STRING`","index$":4},{"active":true,"name":"url_text","req":false,"type":"`$STRING`","index$":5}],"id":{"field":"id","name":"id"},"name":"ee_api_entities_issuable_metric_image","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"issue_id","orig":"issue_iid","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}],"query":[{"active":true,"kind":"query","name":"post_api_v4_projects_id_issues_issue_iid_metric_image","orig":"post_api_v4_projects_id_issues_issue_iid_metric_image","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"POST /api/v4/projects/{id}/issues/{issue_iid}/metric_images","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4ProjectsIdIssuesIssueIidMetricImages\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"format\":\"int32\",\"in\":\"path\",\"name\":\"issue_iid\",\"required\":true,\"type\":\"integer\"},{\"in\":\"body\",\"name\":\"postApiV4ProjectsIdIssuesIssueIidMetricImages\",\"required\":true,\"schema\":{\"description\":\"Upload a metric image for an issue\",\"properties\":{\"file\":{\"description\":\"The image file to be uploaded\",\"type\":\"file\"},\"url\":{\"description\":\"The url to view more metric info\",\"type\":\"string\"},\"url_text\":{\"description\":\"A description of the image or URL\",\"type\":\"string\"}},\"required\":[\"file\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"Upload a metric image for an issue\",\"schema\":{\"description\":\"EE_API_Entities_IssuableMetricImage model\",\"properties\":{\"created_at\":{\"type\":\"string\"},\"file_path\":{\"type\":\"string\"},\"filename\":{\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"url\":{\"type\":\"string\"},\"url_text\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/projects/{id}/issues/{issue_iid}/metric_images","rename":{"param":{"id":"project_id","issue_iid":"issue_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"issues"},{"var":"issue_id"},{"lit":"metric_images"}],"select":{"exist":["issue_id","post_api_v4_projects_id_issues_issue_iid_metric_image","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"remove":{"input":"data","name":"remove","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"metric_image_id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"issue_id","orig":"issue_iid","reqd":true,"type":"`$STRING`","index$":1},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":2}]},"contract":{"id":"DELETE /api/v4/projects/{id}/issues/{issue_iid}/metric_images/{metric_image_id}","json":"{\"operationId\":\"deleteApiV4ProjectsIdIssuesIssueIidMetricImagesMetricImageId\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The ID of metric image\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"metric_image_id\",\"required\":true,\"type\":\"integer\"},{\"format\":\"int32\",\"in\":\"path\",\"name\":\"issue_iid\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Remove a metric image for an issue\",\"schema\":{\"description\":\"EE_API_Entities_IssuableMetricImage model\",\"properties\":{\"created_at\":{\"type\":\"string\"},\"file_path\":{\"type\":\"string\"},\"filename\":{\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"url\":{\"type\":\"string\"},\"url_text\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"DELETE","orig":"/api/v4/projects/{id}/issues/{issue_iid}/metric_images/{metric_image_id}","rename":{"param":{"id":"project_id","issue_iid":"issue_id","metric_image_id":"id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"issues"},{"var":"issue_id"},{"lit":"metric_images"},{"var":"id"}],"select":{"exist":["id","issue_id","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"metric_image_id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"issue_id","orig":"issue_iid","reqd":true,"type":"`$STRING`","index$":1},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":2}],"query":[{"active":true,"kind":"query","name":"put_api_v4_projects_id_issues_issue_iid_metric_images_metric_image_id","orig":"put_api_v4_projects_id_issues_issue_iid_metric_images_metric_image_id","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"PUT /api/v4/projects/{id}/issues/{issue_iid}/metric_images/{metric_image_id}","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"putApiV4ProjectsIdIssuesIssueIidMetricImagesMetricImageId\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The ID of metric image\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"metric_image_id\",\"required\":true,\"type\":\"integer\"},{\"format\":\"int32\",\"in\":\"path\",\"name\":\"issue_iid\",\"required\":true,\"type\":\"integer\"},{\"in\":\"body\",\"name\":\"putApiV4ProjectsIdIssuesIssueIidMetricImagesMetricImageId\",\"required\":true,\"schema\":{\"description\":\"Update a metric image for an issue\",\"properties\":{\"url\":{\"description\":\"The url to view more metric info\",\"type\":\"string\"},\"url_text\":{\"description\":\"A description of the image or URL\",\"type\":\"string\"}},\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Update a metric image for an issue\",\"schema\":{\"description\":\"EE_API_Entities_IssuableMetricImage model\",\"properties\":{\"created_at\":{\"type\":\"string\"},\"file_path\":{\"type\":\"string\"},\"filename\":{\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"url\":{\"type\":\"string\"},\"url_text\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"PUT","orig":"/api/v4/projects/{id}/issues/{issue_iid}/metric_images/{metric_image_id}","rename":{"param":{"id":"project_id","issue_iid":"issue_id","metric_image_id":"id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"issues"},{"var":"issue_id"},{"lit":"metric_images"},{"var":"id"}],"select":{"exist":["id","issue_id","project_id","put_api_v4_projects_id_issues_issue_iid_metric_images_metric_image_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["project","issue"]]},"key$":"ee_api_entities_issuable_metric_image","name__orig":"ee_api_entities_issuable_metric_image","Name":"EeApiEntitiesIssuableMetricImage","name_":"ee_api_entities_issuable_metric_image","name-":"ee-api-entities-issuable-metric-image","NAME":"EE_API_ENTITIES_ISSUABLE_METRIC_IMAGE","index$":199}, {"active":true,"entity":"ee_api_entities_issuable_metric_image","key$":"BasicEeApiEntitiesIssuableMetricImageFlow","kind":"basic","name":"BasicEeApiEntitiesIssuableMetricImageFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"ee_api_entities_issuable_metric_image_ref01"},"match":{"issue_id":"issue01","project_id":"project01"},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{"issue_id":"issue01","project_id":"project01"},"input":{"ref":"ee_api_entities_issuable_metric_image_ref01","srcdatavar":"ee_api_entities_issuable_metric_image_ref01_data","suffix":"_up0","textfield":"created_at"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-ee_api_entities_issuable_metric_image_ref01"}}],"valid":[],"index$":1},{"active":true,"data":{},"input":{"ref":"ee_api_entities_issuable_metric_image_ref01","suffix":"_rm0"},"match":{"id":"ee_api_entities_issuable_metric_image01","issue_id":"issue01","project_id":"project01"},"op":"remove","spec":[],"valid":[],"index$":2}]}, 'EeApiEntitiesIssuableMetricImage')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const ee_api_entities_issuable_metric_image_ref01_ent = client.EeApiEntitiesIssuableMetricImage()
    let ee_api_entities_issuable_metric_image_ref01_data = setup.data.new.ee_api_entities_issuable_metric_image['ee_api_entities_issuable_metric_image_ref01']
    ee_api_entities_issuable_metric_image_ref01_data['issue_id'] = setup.idmap['issue01']
    ee_api_entities_issuable_metric_image_ref01_data['project_id'] = setup.idmap['project01']

    ee_api_entities_issuable_metric_image_ref01_data = (await ee_api_entities_issuable_metric_image_ref01_ent.create(ee_api_entities_issuable_metric_image_ref01_data)).data()
    assert(null != ee_api_entities_issuable_metric_image_ref01_data.id)


    // UPDATE
    const ee_api_entities_issuable_metric_image_ref01_data_up0: any = {}
    ee_api_entities_issuable_metric_image_ref01_data_up0.id = ee_api_entities_issuable_metric_image_ref01_data.id
    ee_api_entities_issuable_metric_image_ref01_data_up0 ['issue_id'] = setup.idmap['issue_id']
    ee_api_entities_issuable_metric_image_ref01_data_up0 ['project_id'] = setup.idmap['project_id']

    const ee_api_entities_issuable_metric_image_ref01_markdef_up0 = { name: 'created_at', value: 'Mark01-ee_api_entities_issuable_metric_image_ref01_' + setup.now }
    ;(ee_api_entities_issuable_metric_image_ref01_data_up0 as any)[ee_api_entities_issuable_metric_image_ref01_markdef_up0.name] = ee_api_entities_issuable_metric_image_ref01_markdef_up0.value

    const ee_api_entities_issuable_metric_image_ref01_resdata_up0 = (await ee_api_entities_issuable_metric_image_ref01_ent.update(ee_api_entities_issuable_metric_image_ref01_data_up0)).data()
    assert(ee_api_entities_issuable_metric_image_ref01_resdata_up0.id === ee_api_entities_issuable_metric_image_ref01_data_up0.id)

    assert((ee_api_entities_issuable_metric_image_ref01_resdata_up0 as any)[ee_api_entities_issuable_metric_image_ref01_markdef_up0.name] === ee_api_entities_issuable_metric_image_ref01_markdef_up0.value)


    // REMOVE
    const ee_api_entities_issuable_metric_image_ref01_match_rm0: any = { id: ee_api_entities_issuable_metric_image_ref01_data.id }
    await ee_api_entities_issuable_metric_image_ref01_ent.remove(ee_api_entities_issuable_metric_image_ref01_match_rm0)
  

  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/ee_api_entities_issuable_metric_image/EeApiEntitiesIssuableMetricImageTestData.json')

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
    ['ee_api_entities_issuable_metric_image01','ee_api_entities_issuable_metric_image02','ee_api_entities_issuable_metric_image03','project01','project02','project03','issue01','issue02','issue03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_EE_API_ENTITIES_ISSUABLE_METRIC_IMAGE_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_EE_API_ENTITIES_ISSUABLE_METRIC_IMAGE_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_EE_API_ENTITIES_ISSUABLE_METRIC_IMAGE_ENTID']
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
  
