

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


describe('ApiEntitiesTerraformModuleVersionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesTerraformModuleVersion()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_terraform_module_version.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0},"modules":{"a":true,"h":"Modules","n":"modules","r":false,"t":"`$STRING`","key$":"modules","index$":1},"name":{"a":true,"h":"Name","n":"name","r":false,"t":"`$STRING`","key$":"name","index$":2},"provider":{"a":true,"h":"Provider","n":"provider","r":false,"t":"`$STRING`","key$":"provider","index$":3},"providers":{"a":true,"h":"Providers","n":"providers","r":false,"t":"`$STRING`","key$":"providers","index$":4},"root":{"a":true,"h":"Root","n":"root","r":false,"t":"`$STRING`","key$":"root","index$":5},"source":{"a":true,"h":"Source","n":"source","r":false,"t":"`$STRING`","key$":"source","index$":6},"submodules":{"a":true,"h":"Submodules","n":"submodules","r":false,"t":"`$STRING`","key$":"submodules","index$":7},"version":{"a":true,"h":"Version","n":"version","r":false,"t":"`$STRING`","key$":"version","index$":8},"versions":{"a":true,"h":"Versions","n":"versions","r":false,"t":"`$STRING`","key$":"versions","index$":9}},"id":{"field":"id","name":"id","parts":["module_namespace","module_name","module_system"],"sep":"/"},"name":"api_entities_terraform_module_version","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/v4/packages/terraform/modules/v1/{module_namespace}/{module_name}/{module_system}/versions","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"module_name","or":"module_name","r":true,"t":"`$ANY`","index$":0},{"a":true,"k":"param","n":"module_system","or":"module_system","r":true,"t":"`$ANY`","index$":1},{"a":true,"k":"param","n":"v1_id","or":"module_namespace","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/api/v4/packages/terraform/modules/v1/{module_namespace}/{module_name}/{module_system}/versions","q":{"exist":["module_name","module_system","v1_id"]},"r":{"param":{"module_namespace":"v1_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"packages"},{"lit":"terraform"},{"lit":"modules"},{"lit":"v1"},{"var":"v1_id"},{"var":"module_name"},{"var":"module_system"},{"lit":"versions"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v4/packages/terraform/modules/v1/{module_namespace}/{module_name}/{module_system}/*module_version","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"module_name","or":"module_name","r":true,"t":"`$ANY`","index$":0},{"a":true,"k":"param","n":"module_system","or":"module_system","r":true,"t":"`$ANY`","index$":1},{"a":true,"k":"param","n":"v1_id","or":"module_namespace","r":true,"t":"`$STRING`","index$":2}],"query":[{"a":true,"k":"query","n":"module_version","or":"module_version","r":true,"t":"`$ANY`","index$":0}]},"k":"http","m":"GET","o":"/api/v4/packages/terraform/modules/v1/{module_namespace}/{module_name}/{module_system}/*module_version","q":{"exist":["module_name","module_system","module_version","v1_id"]},"r":{"param":{"module_namespace":"v1_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"packages"},{"lit":"terraform"},{"lit":"modules"},{"lit":"v1"},{"var":"v1_id"},{"var":"module_name"},{"var":"module_system"},{"lit":"*module_version"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /api/v4/packages/terraform/modules/v1/{module_namespace}/{module_name}/{module_system}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"module_name","or":"module_name","r":true,"t":"`$ANY`","index$":0},{"a":true,"k":"param","n":"module_namespace","or":"module_namespace","r":true,"t":"`$ANY`","index$":1},{"a":true,"k":"param","n":"module_system","or":"module_system","r":true,"t":"`$ANY`","index$":2}]},"k":"http","m":"GET","o":"/api/v4/packages/terraform/modules/v1/{module_namespace}/{module_name}/{module_system}","q":{"exist":["module_name","module_namespace","module_system"]},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"packages"},{"lit":"terraform"},{"lit":"modules"},{"lit":"v1"},{"var":"module_namespace"},{"var":"module_name"},{"var":"module_system"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"api_entities_terraform_module_version","name__orig":"api_entities_terraform_module_version","Name":"ApiEntitiesTerraformModuleVersion","name_":"api_entities_terraform_module_version","name-":"api-entities-terraform-module-version","NAME":"API_ENTITIES_TERRAFORM_MODULE_VERSION","index$":162}, {"active":true,"entity":"api_entities_terraform_module_version","key$":"BasicApiEntitiesTerraformModuleVersionFlow","kind":"basic","name":"BasicApiEntitiesTerraformModuleVersionFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"module_name":"module_name01","module_system":"module_system01","v1_id":"v101"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"api_entities_terraform_module_version_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"api_entities_terraform_module_version_ref01","srcdatavar":"api_entities_terraform_module_version_ref01_data","suffix":"_dt0"},"m":{"id":"api_entities_terraform_module_version01","module_name":"module_name01","module_namespace":"module_namespace01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_terraform_module_version_ref01"}}],"index$":1}]}, 'ApiEntitiesTerraformModuleVersion', {"GET /api/v4/packages/terraform/modules/v1/{module_namespace}/{module_name}/{module_system}/versions":{"protocol":"http","parameters":[{"in":"path","name":"module_namespace","description":"Group's ID or slug","type":"string","required":true,"index$":0},{"in":"path","name":"module_name","description":"","type":"string","required":true,"index$":1},{"in":"path","name":"module_system","type":"string","required":true,"index$":2}]},"GET /api/v4/packages/terraform/modules/v1/{module_namespace}/{module_name}/{module_system}/*module_version":{"protocol":"http","parameters":[{"in":"path","name":"module_namespace","description":"Group's ID or slug","type":"string","required":true,"index$":0},{"in":"path","name":"module_name","description":"","type":"string","required":true,"index$":1},{"in":"path","name":"module_system","type":"string","required":true,"index$":2},{"in":"query","name":"module_version","description":"Module version","type":"string","required":true,"index$":3}]},"GET /api/v4/packages/terraform/modules/v1/{module_namespace}/{module_name}/{module_system}":{"protocol":"http","parameters":[{"in":"path","name":"module_namespace","description":"Group's ID or slug","type":"string","required":true,"index$":0},{"in":"path","name":"module_name","description":"","type":"string","required":true,"index$":1},{"in":"path","name":"module_system","type":"string","required":true,"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let api_entities_terraform_module_version_ref01_data = Object.values(setup.data.existing.api_entities_terraform_module_version)[0] as any

    // LIST
    const api_entities_terraform_module_version_ref01_ent = client.ApiEntitiesTerraformModuleVersion()
    const api_entities_terraform_module_version_ref01_match: any = {}
    api_entities_terraform_module_version_ref01_match['module_name'] = setup.idmap['module_name01']
    api_entities_terraform_module_version_ref01_match['module_system'] = setup.idmap['module_system01']
    api_entities_terraform_module_version_ref01_match['v1_id'] = setup.idmap['v101']

    const api_entities_terraform_module_version_ref01_list = (await api_entities_terraform_module_version_ref01_ent.list(api_entities_terraform_module_version_ref01_match)).map((e: any) => e.data())


    // LOAD
    const api_entities_terraform_module_version_ref01_match_dt0: any = {}
    api_entities_terraform_module_version_ref01_match_dt0.id = api_entities_terraform_module_version_ref01_data.id
    const api_entities_terraform_module_version_ref01_data_dt0 = (await api_entities_terraform_module_version_ref01_ent.load(api_entities_terraform_module_version_ref01_match_dt0)).data()
    assert(api_entities_terraform_module_version_ref01_data_dt0.id === api_entities_terraform_module_version_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_terraform_module_version/ApiEntitiesTerraformModuleVersionTestData.json')

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
    ['api_entities_terraform_module_version01','api_entities_terraform_module_version02','api_entities_terraform_module_version03','module_name01','module_system01','v101','module_namespace01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_TERRAFORM_MODULE_VERSION_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_TERRAFORM_MODULE_VERSION_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_TERRAFORM_MODULE_VERSION_ENTID']
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
  
