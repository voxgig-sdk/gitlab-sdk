

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"pypi_package","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/v4/projects/{id}/packages/pypi/authorize","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/api/v4/projects/{id}/packages/pypi/authorize","q":{"exist":["project_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"packages"},{"lit":"pypi"},{"lit":"authorize"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v4/groups/{id}/-/packages/pypi/files/{sha256}/*file_identifier","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"group_id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"5y57017232013c8ac80647f4ca153k3726f6cba62d055cd747844ed95b3c65ff","k":"param","n":"sha256","or":"sha256","r":true,"t":"`$ANY`","index$":1}],"query":[{"a":true,"ex":"my.pypi.package-0.0.1.tar.gz","k":"query","n":"file_identifier","or":"file_identifier","r":true,"t":"`$ANY`","index$":0}]},"k":"http","m":"GET","o":"/api/v4/groups/{id}/-/packages/pypi/files/{sha256}/*file_identifier","q":{"exist":["file_identifier","group_id","sha256"]},"r":{"param":{"id":"group_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"-"},{"lit":"packages"},{"lit":"pypi"},{"lit":"files"},{"var":"sha256"},{"lit":"*file_identifier"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /api/v4/projects/{id}/packages/pypi/files/{sha256}/*file_identifier","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"5y57017232013c8ac80647f4ca153k3726f6cba62d055cd747844ed95b3c65ff","k":"param","n":"sha256","or":"sha256","r":true,"t":"`$ANY`","index$":1}],"query":[{"a":true,"ex":"my.pypi.package-0.0.1.tar.gz","k":"query","n":"file_identifier","or":"file_identifier","r":true,"t":"`$ANY`","index$":0}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/packages/pypi/files/{sha256}/*file_identifier","q":{"exist":["file_identifier","project_id","sha256"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"packages"},{"lit":"pypi"},{"lit":"files"},{"var":"sha256"},{"lit":"*file_identifier"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"GET /api/v4/groups/{id}/-/packages/pypi/simple/*package_name","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"group_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"my.pypi.package","k":"query","n":"package_name","or":"package_name","r":true,"t":"`$ANY`","index$":0}]},"k":"http","m":"GET","o":"/api/v4/groups/{id}/-/packages/pypi/simple/*package_name","q":{"exist":["group_id","package_name"]},"r":{"param":{"id":"group_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"-"},{"lit":"packages"},{"lit":"pypi"},{"lit":"simple"},{"lit":"*package_name"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"GET /api/v4/projects/{id}/packages/pypi/simple/*package_name","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"my.pypi.package","k":"query","n":"package_name","or":"package_name","r":true,"t":"`$ANY`","index$":0}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/packages/pypi/simple/*package_name","q":{"exist":["package_name","project_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"packages"},{"lit":"pypi"},{"lit":"simple"},{"lit":"*package_name"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3},{"a":true,"co":{"id":"GET /api/v4/groups/{id}/-/packages/pypi/simple","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"group_id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/v4/groups/{id}/-/packages/pypi/simple","q":{"exist":["group_id"]},"r":{"param":{"id":"group_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"-"},{"lit":"packages"},{"lit":"pypi"},{"lit":"simple"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":4},{"a":true,"co":{"id":"GET /api/v4/projects/{id}/packages/pypi/simple","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/packages/pypi/simple","q":{"exist":["project_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"packages"},{"lit":"pypi"},{"lit":"simple"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.group"],["$.main.kit.entity.project"],["$.main.kit.entity.group"],["$.main.kit.entity.project"]]},"key$":"pypi_package","name__orig":"pypi_package","Name":"PypiPackage","name_":"pypi_package","name-":"pypi-package","NAME":"PYPI_PACKAGE","index$":250}, {"active":true,"entity":"pypi_package","key$":"BasicPypiPackageFlow","kind":"basic","name":"BasicPypiPackageFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"pypi_package_ref01"},"m":{"group_id":"group01","project_id":"project01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"pypi_package_ref01","srcdatavar":"pypi_package_ref01_data","suffix":"_dt0"},"m":{"id":"pypi_package01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-pypi_package_ref01"}}],"index$":1}]}, 'PypiPackage', {"POST /api/v4/projects/{id}/packages/pypi/authorize":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0}]},"GET /api/v4/groups/{id}/-/packages/pypi/files/{sha256}/*file_identifier":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or full path of the group.","type":"integer","format":"int32","required":true,"index$":0},{"in":"query","name":"file_identifier","description":"The PyPi package file identifier","type":"string","required":true,"example":"my.pypi.package-0.0.1.tar.gz","index$":1},{"in":"path","name":"sha256","description":"The PyPi package sha256 check sum","type":"string","required":true,"example":"5y57017232013c8ac80647f4ca153k3726f6cba62d055cd747844ed95b3c65ff","index$":2}]},"GET /api/v4/projects/{id}/packages/pypi/files/{sha256}/*file_identifier":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"in":"query","name":"file_identifier","description":"The PyPi package file identifier","type":"string","required":true,"example":"my.pypi.package-0.0.1.tar.gz","index$":1},{"in":"path","name":"sha256","description":"The PyPi package sha256 check sum","type":"string","required":true,"example":"5y57017232013c8ac80647f4ca153k3726f6cba62d055cd747844ed95b3c65ff","index$":2}]},"GET /api/v4/groups/{id}/-/packages/pypi/simple/*package_name":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or full path of the group.","type":"integer","format":"int32","required":true,"index$":0},{"in":"query","name":"package_name","description":"The PyPi package name","type":"string","required":true,"example":"my.pypi.package","index$":1}]},"GET /api/v4/projects/{id}/packages/pypi/simple/*package_name":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"in":"query","name":"package_name","description":"The PyPi package name","type":"string","required":true,"example":"my.pypi.package","index$":1}]},"GET /api/v4/groups/{id}/-/packages/pypi/simple":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or full path of the group.","type":"integer","format":"int32","required":true,"index$":0}]},"GET /api/v4/projects/{id}/packages/pypi/simple":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0}]}})
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
    ['pypi_package01','pypi_package02','pypi_package03','group01','group02','group03','project01','project02','project03'],
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
  
