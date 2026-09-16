

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


describe('ApiEntitiesLicenseEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesLicense()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_license.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"conditions","req":false,"type":"`$ARRAY`","index$":0},{"active":true,"name":"content","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"description","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"html_url","req":false,"type":"`$STRING`","index$":3},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":4},{"active":true,"name":"key","req":false,"type":"`$STRING`","index$":5},{"active":true,"name":"limitations","req":false,"type":"`$ARRAY`","index$":6},{"active":true,"name":"name","req":false,"type":"`$STRING`","index$":7},{"active":true,"name":"nickname","req":false,"type":"`$STRING`","index$":8},{"active":true,"name":"permissions","req":false,"type":"`$ARRAY`","index$":9},{"active":true,"name":"popular","req":false,"type":"`$BOOLEAN`","index$":10},{"active":true,"name":"source_url","req":false,"type":"`$STRING`","index$":11}],"id":{"field":"id","from":{"name":"name"},"name":"id","parts":["type","name"],"sep":"/"},"name":"api_entities_license","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":"MIT","kind":"param","name":"name","orig":"name","reqd":true,"type":"`$STRING`","index$":1},{"active":true,"kind":"param","name":"type","orig":"type","reqd":true,"type":"`$ANY`","index$":2}],"query":[{"active":true,"example":"GitLab B.V.","kind":"query","name":"fullname","orig":"fullname","reqd":false,"type":"`$ANY`","index$":0},{"active":true,"example":"GitLab","kind":"query","name":"project","orig":"project","reqd":false,"type":"`$ANY`","index$":1},{"active":true,"example":1,"kind":"query","name":"source_template_project_id","orig":"source_template_project_id","reqd":false,"type":"`$STRING`","index$":2}]},"contract":{"id":"GET /api/v4/projects/{id}/templates/{type}/{name}","json":"{\"operationId\":\"getApiV4ProjectsIdTemplatesTypeName\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The type (dockerfiles|gitignores|gitlab_ci_ymls|licenses|issues|merge_requests) of the template\",\"enum\":[\"dockerfiles\",\"gitignores\",\"gitlab_ci_ymls\",\"licenses\",\"issues\",\"merge_requests\"],\"in\":\"path\",\"name\":\"type\",\"required\":true,\"type\":\"string\"},{\"description\":\"The key of the template, as obtained from the collection endpoint.\",\"example\":\"MIT\",\"in\":\"path\",\"name\":\"name\",\"required\":true,\"type\":\"string\"},{\"description\":\"The project id where a given template is being stored. This is useful when multiple templates from different projects have the same name\",\"example\":1,\"format\":\"int32\",\"in\":\"query\",\"name\":\"source_template_project_id\",\"required\":false,\"type\":\"integer\"},{\"description\":\"The project name to use when expanding placeholders in the template. Only affects licenses\",\"example\":\"GitLab\",\"in\":\"query\",\"name\":\"project\",\"required\":false,\"type\":\"string\"},{\"description\":\"The full name of the copyright holder to use when expanding placeholders in the template. Only affects licenses\",\"example\":\"GitLab B.V.\",\"in\":\"query\",\"name\":\"fullname\",\"required\":false,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Download a template available to this project\",\"schema\":{\"description\":\"API_Entities_License model\",\"properties\":{\"conditions\":{\"example\":\"include-copyright\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"content\":{\"example\":\"GNU GENERAL PUBLIC LICENSE\",\"type\":\"string\"},\"description\":{\"example\":\"A simple license\",\"type\":\"string\"},\"html_url\":{\"example\":\"http://choosealicense.com/licenses/gpl-3.0\",\"type\":\"string\"},\"key\":{\"example\":\"gpl-3.0\",\"type\":\"string\"},\"limitations\":{\"example\":\"liability\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"name\":{\"example\":\"GNU General Public License v3.0\",\"type\":\"string\"},\"nickname\":{\"example\":\"GNU GPLv3\",\"type\":\"string\"},\"permissions\":{\"example\":\"commercial-use\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"popular\":{\"type\":\"boolean\"},\"source_url\":{\"type\":\"string\"}},\"type\":\"object\"}},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/templates/{type}/{name}","segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"id"},{"lit":"templates"},{"var":"type"},{"var":"name"}],"select":{"exist":["fullname","id","name","project","source_template_project_id","type"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["template"]]},"key$":"api_entities_license","name__orig":"api_entities_license","Name":"ApiEntitiesLicense","name_":"api_entities_license","name-":"api-entities-license","NAME":"API_ENTITIES_LICENSE","index$":88}, {"active":true,"entity":"api_entities_license","key$":"BasicApiEntitiesLicenseFlow","kind":"basic","name":"BasicApiEntitiesLicenseFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"api_entities_license_ref01","srcdatavar":"api_entities_license_ref01_data","suffix":"_dt0"},"match":{"id":"api_entities_license01","type":"type01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_license_ref01"}}],"index$":0}]}, 'ApiEntitiesLicense')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let api_entities_license_ref01_data = Object.values(setup.data.existing.api_entities_license)[0] as any

    // LOAD
    const api_entities_license_ref01_ent = client.ApiEntitiesLicense()
    const api_entities_license_ref01_match_dt0: any = {}
    api_entities_license_ref01_match_dt0.id = api_entities_license_ref01_data.id
    const api_entities_license_ref01_data_dt0 = (await api_entities_license_ref01_ent.load(api_entities_license_ref01_match_dt0)).data()
    assert(api_entities_license_ref01_data_dt0.id === api_entities_license_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_license/ApiEntitiesLicenseTestData.json')

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
    ['api_entities_license01','api_entities_license02','api_entities_license03','template01','template02','template03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_LICENSE_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_LICENSE_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_LICENSE_ENTID']
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
  
