

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


describe('PypiPackageEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.PypiPackage()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'pypi_package.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[],"name":"pypi_package","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST /api/v4/projects/{id}/packages/pypi/authorize","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4ProjectsIdPackagesPypiAuthorize\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Authorize the PyPi package upload from workhorse\"},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/projects/{id}/packages/pypi/authorize","rename":{"param":{"id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"packages"},{"lit":"pypi"},{"lit":"authorize"}],"select":{"exist":["project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"group_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":"5y57017232013c8ac80647f4ca153k3726f6cba62d055cd747844ed95b3c65ff","kind":"param","name":"sha256","orig":"sha256","reqd":true,"type":"`$ANY`","index$":1}],"query":[{"active":true,"example":"my.pypi.package-0.0.1.tar.gz","kind":"query","name":"file_identifier","orig":"file_identifier","reqd":true,"type":"`$ANY`","index$":0}]},"contract":{"id":"GET /api/v4/groups/{id}/-/packages/pypi/files/{sha256}/*file_identifier","json":"{\"operationId\":\"getApiV4GroupsIdPackagesPypiFilesSha256*fileIdentifier\",\"parameters\":[{\"description\":\"The ID or full path of the group.\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"integer\"},{\"description\":\"The PyPi package file identifier\",\"example\":\"my.pypi.package-0.0.1.tar.gz\",\"in\":\"query\",\"name\":\"file_identifier\",\"required\":true,\"type\":\"string\"},{\"description\":\"The PyPi package sha256 check sum\",\"example\":\"5y57017232013c8ac80647f4ca153k3726f6cba62d055cd747844ed95b3c65ff\",\"in\":\"path\",\"name\":\"sha256\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Download a package file from a group\"},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/groups/{id}/-/packages/pypi/files/{sha256}/*file_identifier","rename":{"param":{"id":"group_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"-"},{"lit":"packages"},{"lit":"pypi"},{"lit":"files"},{"var":"sha256"},{"lit":"*file_identifier"}],"select":{"exist":["file_identifier","group_id","sha256"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":"5y57017232013c8ac80647f4ca153k3726f6cba62d055cd747844ed95b3c65ff","kind":"param","name":"sha256","orig":"sha256","reqd":true,"type":"`$ANY`","index$":1}],"query":[{"active":true,"example":"my.pypi.package-0.0.1.tar.gz","kind":"query","name":"file_identifier","orig":"file_identifier","reqd":true,"type":"`$ANY`","index$":0}]},"contract":{"id":"GET /api/v4/projects/{id}/packages/pypi/files/{sha256}/*file_identifier","json":"{\"operationId\":\"getApiV4ProjectsIdPackagesPypiFilesSha256*fileIdentifier\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The PyPi package file identifier\",\"example\":\"my.pypi.package-0.0.1.tar.gz\",\"in\":\"query\",\"name\":\"file_identifier\",\"required\":true,\"type\":\"string\"},{\"description\":\"The PyPi package sha256 check sum\",\"example\":\"5y57017232013c8ac80647f4ca153k3726f6cba62d055cd747844ed95b3c65ff\",\"in\":\"path\",\"name\":\"sha256\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"The PyPi package download endpoint\"},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/packages/pypi/files/{sha256}/*file_identifier","rename":{"param":{"id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"packages"},{"lit":"pypi"},{"lit":"files"},{"var":"sha256"},{"lit":"*file_identifier"}],"select":{"exist":["file_identifier","project_id","sha256"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"group_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":"my.pypi.package","kind":"query","name":"package_name","orig":"package_name","reqd":true,"type":"`$ANY`","index$":0}]},"contract":{"id":"GET /api/v4/groups/{id}/-/packages/pypi/simple/*package_name","json":"{\"operationId\":\"getApiV4GroupsIdPackagesPypiSimple*packageName\",\"parameters\":[{\"description\":\"The ID or full path of the group.\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"integer\"},{\"description\":\"The PyPi package name\",\"example\":\"my.pypi.package\",\"in\":\"query\",\"name\":\"package_name\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"The PyPi Simple Group Package Endpoint\"},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/groups/{id}/-/packages/pypi/simple/*package_name","rename":{"param":{"id":"group_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"-"},{"lit":"packages"},{"lit":"pypi"},{"lit":"simple"},{"lit":"*package_name"}],"select":{"exist":["group_id","package_name"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":2},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":"my.pypi.package","kind":"query","name":"package_name","orig":"package_name","reqd":true,"type":"`$ANY`","index$":0}]},"contract":{"id":"GET /api/v4/projects/{id}/packages/pypi/simple/*package_name","json":"{\"operationId\":\"getApiV4ProjectsIdPackagesPypiSimple*packageName\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The PyPi package name\",\"example\":\"my.pypi.package\",\"in\":\"query\",\"name\":\"package_name\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"The PyPi Simple Project Package Endpoint\"},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/packages/pypi/simple/*package_name","rename":{"param":{"id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"packages"},{"lit":"pypi"},{"lit":"simple"},{"lit":"*package_name"}],"select":{"exist":["package_name","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":3},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"group_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /api/v4/groups/{id}/-/packages/pypi/simple","json":"{\"operationId\":\"getApiV4GroupsIdPackagesPypiSimple\",\"parameters\":[{\"description\":\"The ID or full path of the group.\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"The PyPi Simple Group Index Endpoint\"},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/groups/{id}/-/packages/pypi/simple","rename":{"param":{"id":"group_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"-"},{"lit":"packages"},{"lit":"pypi"},{"lit":"simple"}],"select":{"exist":["group_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":4},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /api/v4/projects/{id}/packages/pypi/simple","json":"{\"operationId\":\"getApiV4ProjectsIdPackagesPypiSimple\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"The PyPi Simple Project Index Endpoint\"},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/packages/pypi/simple","rename":{"param":{"id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"packages"},{"lit":"pypi"},{"lit":"simple"}],"select":{"exist":["project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["group"],["project"],["group","file"],["project","file"]]},"key$":"pypi_package","name__orig":"pypi_package","Name":"PypiPackage","name_":"pypi_package","name-":"pypi-package","NAME":"PYPI_PACKAGE","index$":250}, {"active":true,"entity":"pypi_package","key$":"BasicPypiPackageFlow","kind":"basic","name":"BasicPypiPackageFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"pypi_package_ref01"},"match":{"group_id":"group01","project_id":"project01"},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{"ref":"pypi_package_ref01","srcdatavar":"pypi_package_ref01_data","suffix":"_dt0"},"match":{"id":"pypi_package01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-pypi_package_ref01"}}],"index$":1}]}, 'PypiPackage')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const pypi_package_ref01_ent = client.PypiPackage()
    let pypi_package_ref01_data = setup.data.new.pypi_package['pypi_package_ref01']
    pypi_package_ref01_data['group_id'] = setup.idmap['group01']
    pypi_package_ref01_data['project_id'] = setup.idmap['project01']

    pypi_package_ref01_data = (await pypi_package_ref01_ent.create(pypi_package_ref01_data)).data()
    assert(null != pypi_package_ref01_data)



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/pypi_package/PypiPackageTestData.json')

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
    ['pypi_package01','pypi_package02','pypi_package03','group01','group02','group03','project01','project02','project03','group01','group02','group03','file01','file02','file03','project01','project02','project03','file01','file02','file03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_PYPI_PACKAGE_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_PYPI_PACKAGE_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_PYPI_PACKAGE_ENTID']
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
  
