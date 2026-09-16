

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


describe('ApiEntitiesCiSecureFileEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesCiSecureFile()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_ci_secure_file.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":0}],"id":{"field":"id","name":"id"},"name":"api_entities_ci_secure_file","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"post_api_v4_projects_id_secure_file","orig":"post_api_v4_projects_id_secure_file","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"POST /api/v4/projects/{id}/secure_files","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4ProjectsIdSecureFiles\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project owned by the\\n        authenticated user\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"in\":\"body\",\"name\":\"postApiV4ProjectsIdSecureFiles\",\"required\":true,\"schema\":{\"description\":\"Create a secure file\",\"properties\":{\"file\":{\"description\":\"The secure file being uploaded\",\"type\":\"file\"},\"name\":{\"description\":\"The name of the file being uploaded. The filename must be unique within\\n            the project\",\"type\":\"string\"}},\"required\":[\"name\",\"file\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"Create a secure file\",\"schema\":{\"description\":\"API_Entities_Ci_SecureFile model\",\"properties\":{\"checksum\":{\"example\":\"16630b189ab34b2e3504f4758e1054d2e478deda510b2b08cc0ef38d12e80aac\",\"type\":\"string\"},\"checksum_algorithm\":{\"example\":\"sha256\",\"type\":\"string\"},\"created_at\":{\"example\":\"2022-02-22T22:22:22.222Z\",\"format\":\"date-time\",\"type\":\"string\"},\"expires_at\":{\"example\":\"2023-09-21T14:55:59.000Z\",\"format\":\"date-time\",\"type\":\"string\"},\"file_extension\":{\"example\":\"jks\",\"type\":\"string\"},\"id\":{\"example\":123,\"format\":\"int32\",\"type\":\"integer\"},\"metadata\":{\"example\":{\"id\":\"75949910542696343243264405377658443914\"},\"type\":\"object\"},\"name\":{\"example\":\"upload-keystore.jks\",\"type\":\"string\"}},\"type\":\"object\"}},\"400\":{\"description\":\"400 Bad Request\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/projects/{id}/secure_files","rename":{"param":{"id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"secure_files"}],"select":{"exist":["post_api_v4_projects_id_secure_file","project_id"]},"transform":{"req":"`reqdata`","res":"`body.metadata`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"example":20,"kind":"query","name":"per_page","orig":"per_page","reqd":false,"type":"`$INTEGER`","index$":1}]},"contract":{"id":"GET /api/v4/projects/{id}/secure_files","json":"{\"operationId\":\"getApiV4ProjectsIdSecureFiles\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project owned by the\\n        authenticated user\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"default\":1,\"description\":\"Current page number\",\"example\":1,\"format\":\"int32\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"type\":\"integer\"},{\"default\":20,\"description\":\"Number of items per page\",\"example\":20,\"format\":\"int32\",\"in\":\"query\",\"name\":\"per_page\",\"required\":false,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get list of secure files in a project\",\"schema\":{\"description\":\"API_Entities_Ci_SecureFile model\",\"properties\":{\"checksum\":{\"example\":\"16630b189ab34b2e3504f4758e1054d2e478deda510b2b08cc0ef38d12e80aac\",\"type\":\"string\"},\"checksum_algorithm\":{\"example\":\"sha256\",\"type\":\"string\"},\"created_at\":{\"example\":\"2022-02-22T22:22:22.222Z\",\"format\":\"date-time\",\"type\":\"string\"},\"expires_at\":{\"example\":\"2023-09-21T14:55:59.000Z\",\"format\":\"date-time\",\"type\":\"string\"},\"file_extension\":{\"example\":\"jks\",\"type\":\"string\"},\"id\":{\"example\":123,\"format\":\"int32\",\"type\":\"integer\"},\"metadata\":{\"example\":{\"id\":\"75949910542696343243264405377658443914\"},\"type\":\"object\"},\"name\":{\"example\":\"upload-keystore.jks\",\"type\":\"string\"}},\"type\":\"object\"}}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/secure_files","rename":{"param":{"id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"secure_files"}],"select":{"exist":["page","per_page","project_id"]},"transform":{"req":"`reqdata`","res":"`body.metadata`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"secure_file_id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /api/v4/projects/{id}/secure_files/{secure_file_id}","json":"{\"operationId\":\"getApiV4ProjectsIdSecureFilesSecureFileId\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project owned by the\\n        authenticated user\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The ID of a secure file\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"secure_file_id\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get the details of a specific secure file in a project\",\"schema\":{\"description\":\"API_Entities_Ci_SecureFile model\",\"properties\":{\"checksum\":{\"example\":\"16630b189ab34b2e3504f4758e1054d2e478deda510b2b08cc0ef38d12e80aac\",\"type\":\"string\"},\"checksum_algorithm\":{\"example\":\"sha256\",\"type\":\"string\"},\"created_at\":{\"example\":\"2022-02-22T22:22:22.222Z\",\"format\":\"date-time\",\"type\":\"string\"},\"expires_at\":{\"example\":\"2023-09-21T14:55:59.000Z\",\"format\":\"date-time\",\"type\":\"string\"},\"file_extension\":{\"example\":\"jks\",\"type\":\"string\"},\"id\":{\"example\":123,\"format\":\"int32\",\"type\":\"integer\"},\"metadata\":{\"example\":{\"id\":\"75949910542696343243264405377658443914\"},\"type\":\"object\"},\"name\":{\"example\":\"upload-keystore.jks\",\"type\":\"string\"}},\"type\":\"object\"}},\"404\":{\"description\":\"404 Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/secure_files/{secure_file_id}","rename":{"param":{"id":"project_id","secure_file_id":"id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"secure_files"},{"var":"id"}],"select":{"exist":["id","project_id"]},"transform":{"req":"`reqdata`","res":"`body.metadata`"},"index$":1}],"key$":"load"}},"relations":{"ancestors":[["project"]]},"key$":"api_entities_ci_secure_file","name__orig":"api_entities_ci_secure_file","Name":"ApiEntitiesCiSecureFile","name_":"api_entities_ci_secure_file","name-":"api-entities-ci-secure-file","NAME":"API_ENTITIES_CI_SECURE_FILE","index$":37}, {"active":true,"entity":"api_entities_ci_secure_file","key$":"BasicApiEntitiesCiSecureFileFlow","kind":"basic","name":"BasicApiEntitiesCiSecureFileFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"api_entities_ci_secure_file_ref01"},"match":{"project_id":"project01"},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{"ref":"api_entities_ci_secure_file_ref01","srcdatavar":"api_entities_ci_secure_file_ref01_data","suffix":"_dt0"},"match":{"id":"api_entities_ci_secure_file01","project_id":"project01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_ci_secure_file_ref01"}}],"index$":1}]}, 'ApiEntitiesCiSecureFile')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const api_entities_ci_secure_file_ref01_ent = client.ApiEntitiesCiSecureFile()
    let api_entities_ci_secure_file_ref01_data = setup.data.new.api_entities_ci_secure_file['api_entities_ci_secure_file_ref01']
    api_entities_ci_secure_file_ref01_data['project_id'] = setup.idmap['project01']

    api_entities_ci_secure_file_ref01_data = (await api_entities_ci_secure_file_ref01_ent.create(api_entities_ci_secure_file_ref01_data)).data()
    assert(null != api_entities_ci_secure_file_ref01_data.id)


    // LOAD
    const api_entities_ci_secure_file_ref01_match_dt0: any = {}
    api_entities_ci_secure_file_ref01_match_dt0.id = api_entities_ci_secure_file_ref01_data.id
    const api_entities_ci_secure_file_ref01_data_dt0 = (await api_entities_ci_secure_file_ref01_ent.load(api_entities_ci_secure_file_ref01_match_dt0)).data()
    assert(api_entities_ci_secure_file_ref01_data_dt0.id === api_entities_ci_secure_file_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_ci_secure_file/ApiEntitiesCiSecureFileTestData.json')

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
    ['api_entities_ci_secure_file01','api_entities_ci_secure_file02','api_entities_ci_secure_file03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_CI_SECURE_FILE_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_CI_SECURE_FILE_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_CI_SECURE_FILE_ENTID']
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
  
