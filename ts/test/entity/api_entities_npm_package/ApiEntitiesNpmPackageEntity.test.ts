

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


describe('ApiEntitiesNpmPackageEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesNpmPackage()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_npm_package.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"disttags","req":false,"type":"`$OBJECT`","index$":0},{"active":true,"name":"name","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"versions","req":false,"type":"`$OBJECT`","index$":2}],"name":"api_entities_npm_package","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"group_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":"mypackage","kind":"query","name":"package_name","orig":"package_name","reqd":true,"type":"`$ANY`","index$":0}]},"contract":{"id":"GET /api/v4/groups/{id}/-/packages/npm/*package_name","json":"{\"operationId\":\"getApiV4GroupsIdPackagesNpm*packageName\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the group\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package name\",\"example\":\"mypackage\",\"in\":\"query\",\"name\":\"package_name\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Ok\",\"schema\":{\"description\":\"API_Entities_NpmPackage model\",\"properties\":{\"dist-tags\":{\"example\":\"{ \\\"latest\\\":\\\"1.0.1\\\" }\",\"type\":\"object\"},\"name\":{\"example\":\"my_package\",\"type\":\"string\"},\"versions\":{\"example\":\"{\\n                 \\\"1.0.0\\\": {\\n                   \\\"name\\\": \\\"my_package\\\",\\n                   \\\"version\\\": \\\"1.0.0\\\",\\n                   \\\"dist\\\": { \\\"shasum\\\": \\\"12345\\\", \\\"tarball\\\": \\\"https://...\\\" }\\n                 }\\n               }\",\"type\":\"object\"}},\"type\":\"object\"}},\"302\":{\"description\":\"Found (redirect)\"},\"400\":{\"description\":\"Bad Request\"},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/groups/{id}/-/packages/npm/*package_name","rename":{"param":{"id":"group_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"-"},{"lit":"packages"},{"lit":"npm"},{"lit":"*package_name"}],"select":{"exist":["group_id","package_name"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":"mypackage","kind":"query","name":"package_name","orig":"package_name","reqd":true,"type":"`$ANY`","index$":0}]},"contract":{"id":"GET /api/v4/projects/{id}/packages/npm/*package_name","json":"{\"operationId\":\"getApiV4ProjectsIdPackagesNpm*packageName\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package name\",\"example\":\"mypackage\",\"in\":\"query\",\"name\":\"package_name\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Ok\",\"schema\":{\"description\":\"API_Entities_NpmPackage model\",\"properties\":{\"dist-tags\":{\"example\":\"{ \\\"latest\\\":\\\"1.0.1\\\" }\",\"type\":\"object\"},\"name\":{\"example\":\"my_package\",\"type\":\"string\"},\"versions\":{\"example\":\"{\\n                 \\\"1.0.0\\\": {\\n                   \\\"name\\\": \\\"my_package\\\",\\n                   \\\"version\\\": \\\"1.0.0\\\",\\n                   \\\"dist\\\": { \\\"shasum\\\": \\\"12345\\\", \\\"tarball\\\": \\\"https://...\\\" }\\n                 }\\n               }\",\"type\":\"object\"}},\"type\":\"object\"}},\"302\":{\"description\":\"Found (redirect)\"},\"400\":{\"description\":\"Bad Request\"},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/packages/npm/*package_name","rename":{"param":{"id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"packages"},{"lit":"npm"},{"lit":"*package_name"}],"select":{"exist":["package_name","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1},{"active":true,"args":{"query":[{"active":true,"example":"mypackage","kind":"query","name":"package_name","orig":"package_name","reqd":true,"type":"`$ANY`","index$":0}]},"contract":{"id":"GET /api/v4/packages/npm/*package_name","json":"{\"operationId\":\"getApiV4PackagesNpm*packageName\",\"parameters\":[{\"description\":\"Package name\",\"example\":\"mypackage\",\"in\":\"query\",\"name\":\"package_name\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Ok\",\"schema\":{\"description\":\"API_Entities_NpmPackage model\",\"properties\":{\"dist-tags\":{\"example\":\"{ \\\"latest\\\":\\\"1.0.1\\\" }\",\"type\":\"object\"},\"name\":{\"example\":\"my_package\",\"type\":\"string\"},\"versions\":{\"example\":\"{\\n                 \\\"1.0.0\\\": {\\n                   \\\"name\\\": \\\"my_package\\\",\\n                   \\\"version\\\": \\\"1.0.0\\\",\\n                   \\\"dist\\\": { \\\"shasum\\\": \\\"12345\\\", \\\"tarball\\\": \\\"https://...\\\" }\\n                 }\\n               }\",\"type\":\"object\"}},\"type\":\"object\"}},\"302\":{\"description\":\"Found (redirect)\"},\"400\":{\"description\":\"Bad Request\"},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/packages/npm/*package_name","segments":[{"lit":"api"},{"lit":"v4"},{"lit":"packages"},{"lit":"npm"},{"lit":"*package_name"}],"select":{"exist":["package_name"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"load"}},"relations":{"ancestors":[["group"],["project"]]},"key$":"api_entities_npm_package","name__orig":"api_entities_npm_package","Name":"ApiEntitiesNpmPackage","name_":"api_entities_npm_package","name-":"api-entities-npm-package","NAME":"API_ENTITIES_NPM_PACKAGE","index$":104}, {"active":true,"entity":"api_entities_npm_package","key$":"BasicApiEntitiesNpmPackageFlow","kind":"basic","name":"BasicApiEntitiesNpmPackageFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"api_entities_npm_package_ref01","srcdatavar":"api_entities_npm_package_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_npm_package_ref01"}}],"index$":0}]}, 'ApiEntitiesNpmPackage')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let api_entities_npm_package_ref01_data = Object.values(setup.data.existing.api_entities_npm_package)[0] as any

    // LOAD: skipped — no entity id field and load requires path params.
    // Entity-var is declared here so later flow steps still compile.
    const api_entities_npm_package_ref01_ent = client.ApiEntitiesNpmPackage()


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_npm_package/ApiEntitiesNpmPackageTestData.json')

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
    ['api_entities_npm_package01','api_entities_npm_package02','api_entities_npm_package03','group01','group02','group03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_NPM_PACKAGE_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_NPM_PACKAGE_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_NPM_PACKAGE_ENTID']
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
  
