

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


describe('DebianEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.Debian()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'debian.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":0}],"id":{"field":"id","name":"id"},"name":"debian","op":{"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"example":"example_1.0.0~alpha2_amd64.deb","kind":"param","name":"file_name","orig":"file_name","reqd":true,"type":"`$ANY`"},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`"}],"query":[{"active":true,"kind":"query","name":"put_api_v4_projects_id_packages_debian_file_name_authorize","orig":"put_api_v4_projects_id_packages_debian_file_name_authorize","reqd":true,"type":"`$OBJECT`"}]},"contract":{"id":"PUT /api/v4/projects/{id}/packages/debian/{file_name}/authorize","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"putApiV4ProjectsIdPackagesDebianFileNameAuthorize\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The filename\",\"example\":\"example_1.0.0~alpha2_amd64.deb\",\"in\":\"path\",\"name\":\"file_name\",\"required\":true,\"type\":\"string\"},{\"in\":\"body\",\"name\":\"putApiV4ProjectsIdPackagesDebianFileNameAuthorize\",\"required\":true,\"schema\":{\"description\":\"Authorize Debian package upload\",\"properties\":{\"component\":{\"description\":\"The Debian Component\",\"type\":\"string\"},\"distribution\":{\"description\":\"The Debian Codename or Suite\",\"type\":\"string\"}},\"required\":[\"component\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Authorize Debian package upload\"},\"400\":{\"description\":\"Bad Request\"},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"PUT","orig":"/api/v4/projects/{id}/packages/debian/{file_name}/authorize","rename":{"param":{"id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"packages"},{"lit":"debian"},{"var":"file_name"},{"lit":"authorize"}],"select":{"$action":"authorize","exist":["file_name","project_id","put_api_v4_projects_id_packages_debian_file_name_authorize"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"example":"example_1.0.0~alpha2_amd64.deb","kind":"param","name":"id","orig":"file_name","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}],"query":[{"active":true,"kind":"query","name":"put_api_v4_projects_id_packages_debian_file_name","orig":"put_api_v4_projects_id_packages_debian_file_name","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"PUT /api/v4/projects/{id}/packages/debian/{file_name}","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"putApiV4ProjectsIdPackagesDebianFileName\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The filename\",\"example\":\"example_1.0.0~alpha2_amd64.deb\",\"in\":\"path\",\"name\":\"file_name\",\"required\":true,\"type\":\"string\"},{\"in\":\"body\",\"name\":\"putApiV4ProjectsIdPackagesDebianFileName\",\"required\":true,\"schema\":{\"description\":\"Upload Debian package\",\"properties\":{\"component\":{\"description\":\"The Debian Component\",\"type\":\"string\"},\"distribution\":{\"description\":\"The Debian Codename or Suite\",\"type\":\"string\"},\"file\":{\"description\":\"The package file to be published (generated by Multipart middleware)\",\"type\":\"file\"}},\"required\":[\"file\",\"component\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"Upload Debian package\"},\"400\":{\"description\":\"Bad Request\"},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"PUT","orig":"/api/v4/projects/{id}/packages/debian/{file_name}","rename":{"param":{"file_name":"id","id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"packages"},{"lit":"debian"},{"var":"id"}],"select":{"exist":["id","project_id","put_api_v4_projects_id_packages_debian_file_name"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"update"}},"relations":{"ancestors":[["project"],["project","debian"]]},"key$":"debian","name__orig":"debian","Name":"Debian","name_":"debian","name-":"debian","NAME":"DEBIAN","index$":187}, {"active":true,"entity":"debian","key$":"BasicDebianFlow","kind":"basic","name":"BasicDebianFlow","param":{},"step":[{"active":true,"data":{"project_id":"project01"},"input":{"ref":"debian_ref01","srcdatavar":"debian_ref01_data","suffix":"_up0"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-debian_ref01"}}],"valid":[],"index$":0}]}, 'Debian')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let debian_ref01_data = Object.values(setup.data.existing.debian)[0] as any

    // UPDATE
    const debian_ref01_ent = client.Debian()
    const debian_ref01_data_up0: any = {}
    debian_ref01_data_up0.id = debian_ref01_data.id
    debian_ref01_data_up0 ['project_id'] = setup.idmap['project_id']

    const debian_ref01_resdata_up0 = (await debian_ref01_ent.update(debian_ref01_data_up0)).data()
    assert(debian_ref01_resdata_up0.id === debian_ref01_data_up0.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/debian/DebianTestData.json')

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
    ['debian01','debian02','debian03','project01','project02','project03','project01','project02','project03','debian01','debian02','debian03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_DEBIAN_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_DEBIAN_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_DEBIAN_ENTID']
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
  
