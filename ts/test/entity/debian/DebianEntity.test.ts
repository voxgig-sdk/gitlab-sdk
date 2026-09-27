

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0}},"id":{"field":"id","name":"id"},"name":"debian","op":{"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /api/v4/projects/{id}/packages/debian/{file_name}/authorize","source":"swagger2","version":2},"g":{"params":[{"a":true,"ex":"example_1.0.0~alpha2_amd64.deb","k":"param","n":"file_name","or":"file_name","r":true,"t":"`$ANY`","index$":0},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"put_api_v4_projects_id_packages_debian_file_name_authorize","or":"put_api_v4_projects_id_packages_debian_file_name_authorize","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"PUT","o":"/api/v4/projects/{id}/packages/debian/{file_name}/authorize","q":{"$action":"authorize","exist":["file_name","project_id","put_api_v4_projects_id_packages_debian_file_name_authorize"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"packages"},{"lit":"debian"},{"var":"file_name"},{"lit":"authorize"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"PUT /api/v4/projects/{id}/packages/debian/{file_name}","source":"swagger2","version":2},"g":{"params":[{"a":true,"ex":"example_1.0.0~alpha2_amd64.deb","k":"param","n":"id","or":"file_name","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"put_api_v4_projects_id_packages_debian_file_name","or":"put_api_v4_projects_id_packages_debian_file_name","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"PUT","o":"/api/v4/projects/{id}/packages/debian/{file_name}","q":{"exist":["id","project_id","put_api_v4_projects_id_packages_debian_file_name"]},"r":{"param":{"file_name":"id","id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"packages"},{"lit":"debian"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.project"],["$.main.kit.entity.project"]]},"key$":"debian","name__orig":"debian","Name":"Debian","name_":"debian","name-":"debian","NAME":"DEBIAN","index$":187}, {"active":true,"entity":"debian","key$":"BasicDebianFlow","kind":"basic","name":"BasicDebianFlow","param":{},"step":[{"a":true,"d":{"project_id":"project01"},"i":{"ref":"debian_ref01","srcdatavar":"debian_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-debian_ref01"}}],"v":[],"index$":0}]}, 'Debian', {"PUT /api/v4/projects/{id}/packages/debian/{file_name}/authorize":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"in":"path","name":"file_name","description":"The filename","type":"string","required":true,"example":"example_1.0.0~alpha2_amd64.deb","index$":1},{"name":"putApiV4ProjectsIdPackagesDebianFileNameAuthorize","in":"body","required":true,"schema":{"type":"object","properties":{"distribution":{"type":"string","description":"The Debian Codename or Suite"},"component":{"type":"string","description":"The Debian Component"}},"required":["component"],"description":"Authorize Debian package upload","x-ref":"#/definitions/putApiV4ProjectsIdPackagesDebianFileNameAuthorize"},"index$":2}]},"PUT /api/v4/projects/{id}/packages/debian/{file_name}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"in":"path","name":"file_name","description":"The filename","type":"string","required":true,"example":"example_1.0.0~alpha2_amd64.deb","index$":1},{"name":"putApiV4ProjectsIdPackagesDebianFileName","in":"body","required":true,"schema":{"type":"object","properties":{"file":{"type":"file","description":"The package file to be published (generated by Multipart middleware)"},"distribution":{"type":"string","description":"The Debian Codename or Suite"},"component":{"type":"string","description":"The Debian Component"}},"required":["file","component"],"description":"Upload Debian package","x-ref":"#/definitions/putApiV4ProjectsIdPackagesDebianFileName"},"index$":2}]}})
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
    ['debian01','debian02','debian03','project01','project02','project03'],
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
  
