

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


describe('ApiEntitiesMetricImageEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesMetricImage()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create', 'list', 'update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_metric_image.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"date-time","name":"created_at","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"file_path","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"filename","req":false,"type":"`$STRING`","index$":2},{"active":true,"format":"int32","name":"id","req":false,"type":"`$INTEGER`","index$":3},{"active":true,"name":"url","req":false,"type":"`$STRING`","index$":4},{"active":true,"name":"url_text","req":false,"type":"`$STRING`","index$":5}],"id":{"field":"id","name":"id"},"name":"api_entities_metric_image","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"params":[{"active":true,"example":23,"kind":"param","name":"alert_management_alert_id","orig":"alert_iid","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":17,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}],"query":[{"active":true,"kind":"query","name":"file","orig":"file","reqd":true,"type":"`$ANY`","index$":0},{"active":true,"example":"https://example.com/metric","kind":"query","name":"url","orig":"url","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"example":"An example metric","kind":"query","name":"url_text","orig":"url_text","reqd":false,"type":"`$ANY`","index$":2}]},"contract":{"id":"POST /api/v4/projects/{id}/alert_management_alerts/{alert_iid}/metric_images","json":"{\"consumes\":[\"multipart/form-data\"],\"operationId\":\"postApiV4ProjectsIdAlertManagementAlertsAlertIidMetricImages\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"example\":17,\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The IID of the Alert\",\"example\":23,\"format\":\"int32\",\"in\":\"path\",\"name\":\"alert_iid\",\"required\":true,\"type\":\"integer\"},{\"description\":\"The image file to be uploaded\",\"in\":\"formData\",\"name\":\"file\",\"required\":true,\"type\":\"file\"},{\"description\":\"The url to view more metric info\",\"example\":\"https://example.com/metric\",\"in\":\"formData\",\"name\":\"url\",\"required\":false,\"type\":\"string\"},{\"description\":\"A description of the image or URL\",\"example\":\"An example metric\",\"in\":\"formData\",\"name\":\"url_text\",\"required\":false,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Upload a metric image for an alert\",\"schema\":{\"description\":\"API_Entities_MetricImage model\",\"properties\":{\"created_at\":{\"example\":\"2020-11-13T00:06:18.084Z\",\"format\":\"date-time\",\"type\":\"string\"},\"file_path\":{\"example\":\"/uploads/-/system/alert_metric_image/file/23/file.png\",\"type\":\"string\"},\"filename\":{\"example\":\"file.png\",\"type\":\"string\"},\"id\":{\"example\":23,\"format\":\"int32\",\"type\":\"integer\"},\"url\":{\"example\":\"https://example.com/metric\",\"type\":\"string\"},\"url_text\":{\"example\":\"An example metric\",\"type\":\"string\"}},\"type\":\"object\"}},\"403\":{\"description\":\"Forbidden\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/projects/{id}/alert_management_alerts/{alert_iid}/metric_images","rename":{"param":{"alert_iid":"alert_management_alert_id","id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"alert_management_alerts"},{"var":"alert_management_alert_id"},{"lit":"metric_images"}],"select":{"exist":["alert_management_alert_id","file","project_id","url","url_text"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"example":23,"kind":"param","name":"alert_management_alert_id","orig":"alert_iid","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":17,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /api/v4/projects/{id}/alert_management_alerts/{alert_iid}/metric_images","json":"{\"operationId\":\"getApiV4ProjectsIdAlertManagementAlertsAlertIidMetricImages\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"example\":17,\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The IID of the Alert\",\"example\":23,\"format\":\"int32\",\"in\":\"path\",\"name\":\"alert_iid\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Metric Images for alert\",\"schema\":{\"items\":{\"description\":\"API_Entities_MetricImage model\",\"properties\":{\"created_at\":{\"example\":\"2020-11-13T00:06:18.084Z\",\"format\":\"date-time\",\"type\":\"string\"},\"file_path\":{\"example\":\"/uploads/-/system/alert_metric_image/file/23/file.png\",\"type\":\"string\"},\"filename\":{\"example\":\"file.png\",\"type\":\"string\"},\"id\":{\"example\":23,\"format\":\"int32\",\"type\":\"integer\"},\"url\":{\"example\":\"https://example.com/metric\",\"type\":\"string\"},\"url_text\":{\"example\":\"An example metric\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/alert_management_alerts/{alert_iid}/metric_images","rename":{"param":{"alert_iid":"alert_management_alert_id","id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"alert_management_alerts"},{"var":"alert_management_alert_id"},{"lit":"metric_images"}],"select":{"exist":["alert_management_alert_id","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"example":23,"kind":"param","name":"alert_management_alert_id","orig":"alert_iid","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":42,"kind":"param","name":"id","orig":"metric_image_id","reqd":true,"type":"`$STRING`","index$":1},{"active":true,"example":17,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":2}],"query":[{"active":true,"example":"https://example.com/metric","kind":"query","name":"url","orig":"url","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":"An example metric","kind":"query","name":"url_text","orig":"url_text","reqd":false,"type":"`$ANY`","index$":1}]},"contract":{"id":"PUT /api/v4/projects/{id}/alert_management_alerts/{alert_iid}/metric_images/{metric_image_id}","json":"{\"consumes\":[\"multipart/form-data\"],\"operationId\":\"putApiV4ProjectsIdAlertManagementAlertsAlertIidMetricImagesMetricImageId\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"example\":17,\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The IID of the Alert\",\"example\":23,\"format\":\"int32\",\"in\":\"path\",\"name\":\"alert_iid\",\"required\":true,\"type\":\"integer\"},{\"description\":\"The ID of metric image\",\"example\":42,\"format\":\"int32\",\"in\":\"path\",\"name\":\"metric_image_id\",\"required\":true,\"type\":\"integer\"},{\"description\":\"The url to view more metric info\",\"example\":\"https://example.com/metric\",\"in\":\"formData\",\"name\":\"url\",\"required\":false,\"type\":\"string\"},{\"description\":\"A description of the image or URL\",\"example\":\"An example metric\",\"in\":\"formData\",\"name\":\"url_text\",\"required\":false,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Update a metric image for an alert\",\"schema\":{\"description\":\"API_Entities_MetricImage model\",\"properties\":{\"created_at\":{\"example\":\"2020-11-13T00:06:18.084Z\",\"format\":\"date-time\",\"type\":\"string\"},\"file_path\":{\"example\":\"/uploads/-/system/alert_metric_image/file/23/file.png\",\"type\":\"string\"},\"filename\":{\"example\":\"file.png\",\"type\":\"string\"},\"id\":{\"example\":23,\"format\":\"int32\",\"type\":\"integer\"},\"url\":{\"example\":\"https://example.com/metric\",\"type\":\"string\"},\"url_text\":{\"example\":\"An example metric\",\"type\":\"string\"}},\"type\":\"object\"}},\"403\":{\"description\":\"Forbidden\"},\"422\":{\"description\":\"Unprocessable entity\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"PUT","orig":"/api/v4/projects/{id}/alert_management_alerts/{alert_iid}/metric_images/{metric_image_id}","rename":{"param":{"alert_iid":"alert_management_alert_id","id":"project_id","metric_image_id":"id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"alert_management_alerts"},{"var":"alert_management_alert_id"},{"lit":"metric_images"},{"var":"id"}],"select":{"exist":["alert_management_alert_id","id","project_id","url","url_text"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["project","alert_management_alert"]]},"key$":"api_entities_metric_image","name__orig":"api_entities_metric_image","Name":"ApiEntitiesMetricImage","name_":"api_entities_metric_image","name-":"api-entities-metric-image","NAME":"API_ENTITIES_METRIC_IMAGE","index$":99}, {"active":true,"entity":"api_entities_metric_image","key$":"BasicApiEntitiesMetricImageFlow","kind":"basic","name":"BasicApiEntitiesMetricImageFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"api_entities_metric_image_ref01"},"match":{"alert_management_alert_id":"alert_management_alert01","project_id":"project01"},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{},"match":{"alert_management_alert_id":"alert_management_alert01","project_id":"project01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"api_entities_metric_image_ref01"}}],"index$":1},{"active":true,"data":{"alert_management_alert_id":"alert_management_alert01","project_id":"project01"},"input":{"ref":"api_entities_metric_image_ref01","srcdatavar":"api_entities_metric_image_ref01_data","suffix":"_up0","textfield":"created_at"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_metric_image_ref01"}}],"valid":[],"index$":2}]}, 'ApiEntitiesMetricImage')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const api_entities_metric_image_ref01_ent = client.ApiEntitiesMetricImage()
    let api_entities_metric_image_ref01_data = setup.data.new.api_entities_metric_image['api_entities_metric_image_ref01']
    api_entities_metric_image_ref01_data['alert_management_alert_id'] = setup.idmap['alert_management_alert01']
    api_entities_metric_image_ref01_data['project_id'] = setup.idmap['project01']

    api_entities_metric_image_ref01_data = (await api_entities_metric_image_ref01_ent.create(api_entities_metric_image_ref01_data)).data()
    assert(null != api_entities_metric_image_ref01_data.id)


    // LIST
    const api_entities_metric_image_ref01_match: any = {}
    api_entities_metric_image_ref01_match['alert_management_alert_id'] = setup.idmap['alert_management_alert01']
    api_entities_metric_image_ref01_match['project_id'] = setup.idmap['project01']

    const api_entities_metric_image_ref01_list = (await api_entities_metric_image_ref01_ent.list(api_entities_metric_image_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(api_entities_metric_image_ref01_list, { id: api_entities_metric_image_ref01_data.id })))


    // UPDATE
    const api_entities_metric_image_ref01_data_up0: any = {}
    api_entities_metric_image_ref01_data_up0.id = api_entities_metric_image_ref01_data.id
    api_entities_metric_image_ref01_data_up0 ['alert_management_alert_id'] = setup.idmap['alert_management_alert_id']
    api_entities_metric_image_ref01_data_up0 ['project_id'] = setup.idmap['project_id']

    const api_entities_metric_image_ref01_markdef_up0 = { name: 'created_at', value: 'Mark01-api_entities_metric_image_ref01_' + setup.now }
    ;(api_entities_metric_image_ref01_data_up0 as any)[api_entities_metric_image_ref01_markdef_up0.name] = api_entities_metric_image_ref01_markdef_up0.value

    const api_entities_metric_image_ref01_resdata_up0 = (await api_entities_metric_image_ref01_ent.update(api_entities_metric_image_ref01_data_up0)).data()
    assert(api_entities_metric_image_ref01_resdata_up0.id === api_entities_metric_image_ref01_data_up0.id)

    assert((api_entities_metric_image_ref01_resdata_up0 as any)[api_entities_metric_image_ref01_markdef_up0.name] === api_entities_metric_image_ref01_markdef_up0.value)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_metric_image/ApiEntitiesMetricImageTestData.json')

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
    ['api_entities_metric_image01','api_entities_metric_image02','api_entities_metric_image03','project01','project02','project03','alert_management_alert01','alert_management_alert02','alert_management_alert03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_METRIC_IMAGE_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_METRIC_IMAGE_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_METRIC_IMAGE_ENTID']
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
  
