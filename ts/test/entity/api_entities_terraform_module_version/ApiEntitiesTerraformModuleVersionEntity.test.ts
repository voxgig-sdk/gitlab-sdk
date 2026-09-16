

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"modules","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"name","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"provider","req":false,"type":"`$STRING`","index$":3},{"active":true,"name":"providers","req":false,"type":"`$STRING`","index$":4},{"active":true,"name":"root","req":false,"type":"`$STRING`","index$":5},{"active":true,"name":"source","req":false,"type":"`$STRING`","index$":6},{"active":true,"name":"submodules","req":false,"type":"`$STRING`","index$":7},{"active":true,"name":"version","req":false,"type":"`$STRING`","index$":8},{"active":true,"name":"versions","req":false,"type":"`$STRING`","index$":9}],"id":{"field":"id","name":"id","parts":["module_namespace","module_name","module_system"],"sep":"/"},"name":"api_entities_terraform_module_version","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"module_name","orig":"module_name","reqd":true,"type":"`$ANY`","index$":0},{"active":true,"kind":"param","name":"module_system","orig":"module_system","reqd":true,"type":"`$ANY`","index$":1},{"active":true,"kind":"param","name":"v1_id","orig":"module_namespace","reqd":true,"type":"`$STRING`","index$":2}]},"contract":{"id":"GET /api/v4/packages/terraform/modules/v1/{module_namespace}/{module_name}/{module_system}/versions","json":"{\"operationId\":\"getApiV4PackagesTerraformModulesV1ModuleNamespaceModuleNameModuleSystemVersions\",\"parameters\":[{\"description\":\"Group's ID or slug\",\"in\":\"path\",\"name\":\"module_namespace\",\"required\":true,\"type\":\"string\"},{\"description\":\"\",\"in\":\"path\",\"name\":\"module_name\",\"required\":true,\"type\":\"string\"},{\"in\":\"path\",\"name\":\"module_system\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"List versions for a module\",\"schema\":{\"items\":{\"description\":\"API_Entities_Terraform_ModuleVersions model\",\"properties\":{\"modules\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"403\":{\"description\":\"Forbidden\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/packages/terraform/modules/v1/{module_namespace}/{module_name}/{module_system}/versions","rename":{"param":{"module_namespace":"v1_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"packages"},{"lit":"terraform"},{"lit":"modules"},{"lit":"v1"},{"var":"v1_id"},{"var":"module_name"},{"var":"module_system"},{"lit":"versions"}],"select":{"exist":["module_name","module_system","v1_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"module_name","orig":"module_name","reqd":true,"type":"`$ANY`","index$":0},{"active":true,"kind":"param","name":"module_system","orig":"module_system","reqd":true,"type":"`$ANY`","index$":1},{"active":true,"kind":"param","name":"v1_id","orig":"module_namespace","reqd":true,"type":"`$STRING`","index$":2}],"query":[{"active":true,"kind":"query","name":"module_version","orig":"module_version","reqd":true,"type":"`$ANY`","index$":0}]},"contract":{"id":"GET /api/v4/packages/terraform/modules/v1/{module_namespace}/{module_name}/{module_system}/*module_version","json":"{\"operationId\":\"getApiV4PackagesTerraformModulesV1ModuleNamespaceModuleNameModuleSystem*moduleVersion\",\"parameters\":[{\"description\":\"Group's ID or slug\",\"in\":\"path\",\"name\":\"module_namespace\",\"required\":true,\"type\":\"string\"},{\"description\":\"\",\"in\":\"path\",\"name\":\"module_name\",\"required\":true,\"type\":\"string\"},{\"in\":\"path\",\"name\":\"module_system\",\"required\":true,\"type\":\"string\"},{\"description\":\"Module version\",\"in\":\"query\",\"name\":\"module_version\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get details about specific version of a module\",\"schema\":{\"description\":\"API_Entities_Terraform_ModuleVersion model\",\"properties\":{\"name\":{\"type\":\"string\"},\"provider\":{\"type\":\"string\"},\"providers\":{\"type\":\"string\"},\"root\":{\"type\":\"string\"},\"source\":{\"type\":\"string\"},\"submodules\":{\"type\":\"string\"},\"version\":{\"type\":\"string\"},\"versions\":{\"type\":\"string\"}},\"type\":\"object\"}},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/packages/terraform/modules/v1/{module_namespace}/{module_name}/{module_system}/*module_version","rename":{"param":{"module_namespace":"v1_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"packages"},{"lit":"terraform"},{"lit":"modules"},{"lit":"v1"},{"var":"v1_id"},{"var":"module_name"},{"var":"module_system"},{"lit":"*module_version"}],"select":{"exist":["module_name","module_system","module_version","v1_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"module_name","orig":"module_name","reqd":true,"type":"`$ANY`","index$":0},{"active":true,"kind":"param","name":"module_namespace","orig":"module_namespace","reqd":true,"type":"`$ANY`","index$":1},{"active":true,"kind":"param","name":"module_system","orig":"module_system","reqd":true,"type":"`$ANY`","index$":2}]},"contract":{"id":"GET /api/v4/packages/terraform/modules/v1/{module_namespace}/{module_name}/{module_system}","json":"{\"operationId\":\"getApiV4PackagesTerraformModulesV1ModuleNamespaceModuleNameModuleSystem\",\"parameters\":[{\"description\":\"Group's ID or slug\",\"in\":\"path\",\"name\":\"module_namespace\",\"required\":true,\"type\":\"string\"},{\"description\":\"\",\"in\":\"path\",\"name\":\"module_name\",\"required\":true,\"type\":\"string\"},{\"in\":\"path\",\"name\":\"module_system\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get details about the latest version of a module\",\"schema\":{\"description\":\"API_Entities_Terraform_ModuleVersion model\",\"properties\":{\"name\":{\"type\":\"string\"},\"provider\":{\"type\":\"string\"},\"providers\":{\"type\":\"string\"},\"root\":{\"type\":\"string\"},\"source\":{\"type\":\"string\"},\"submodules\":{\"type\":\"string\"},\"version\":{\"type\":\"string\"},\"versions\":{\"type\":\"string\"}},\"type\":\"object\"}},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/packages/terraform/modules/v1/{module_namespace}/{module_name}/{module_system}","segments":[{"lit":"api"},{"lit":"v4"},{"lit":"packages"},{"lit":"terraform"},{"lit":"modules"},{"lit":"v1"},{"var":"module_namespace"},{"var":"module_name"},{"var":"module_system"}],"select":{"exist":["module_name","module_namespace","module_system"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"}},"relations":{"ancestors":[["v1"]]},"key$":"api_entities_terraform_module_version","name__orig":"api_entities_terraform_module_version","Name":"ApiEntitiesTerraformModuleVersion","name_":"api_entities_terraform_module_version","name-":"api-entities-terraform-module-version","NAME":"API_ENTITIES_TERRAFORM_MODULE_VERSION","index$":162}, {"active":true,"entity":"api_entities_terraform_module_version","key$":"BasicApiEntitiesTerraformModuleVersionFlow","kind":"basic","name":"BasicApiEntitiesTerraformModuleVersionFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{"module_name":"module_name01","module_system":"module_system01","v1_id":"v101"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"api_entities_terraform_module_version_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"api_entities_terraform_module_version_ref01","srcdatavar":"api_entities_terraform_module_version_ref01_data","suffix":"_dt0"},"match":{"id":"api_entities_terraform_module_version01","module_name":"module_name01","module_namespace":"module_namespace01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_terraform_module_version_ref01"}}],"index$":1}]}, 'ApiEntitiesTerraformModuleVersion')
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
    ['api_entities_terraform_module_version01','api_entities_terraform_module_version02','api_entities_terraform_module_version03','v101','v102','v103'],
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
  
