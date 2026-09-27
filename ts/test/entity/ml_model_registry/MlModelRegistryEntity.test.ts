

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


describe('MlModelRegistryEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.MlModelRegistry()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'ml_model_registry.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"ml_model_registry","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v4/projects/{id}/packages/ml_models/{model_version_id}/files/(*path/){file_name}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"file_name","or":"file_name","r":true,"t":"`$ANY`","index$":0},{"a":true,"k":"param","n":"ml_model_id","or":"model_version_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":2}],"query":[{"a":true,"k":"query","n":"path","or":"path","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"status","or":"status","r":false,"t":"`$ANY`","index$":1}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/packages/ml_models/{model_version_id}/files/(*path/){file_name}","q":{"exist":["file_name","ml_model_id","path","project_id","status"]},"r":{"param":{"id":"project_id","model_version_id":"ml_model_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"packages"},{"lit":"ml_models"},{"var":"ml_model_id"},{"lit":"files"},{"lit":"(*path"},{"lit":"){file_name}"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /api/v4/projects/{id}/packages/ml_models/{model_version_id}/files/(*path/){file_name}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"file_name","or":"file_name","r":true,"t":"`$ANY`","index$":0},{"a":true,"k":"param","n":"ml_model_id","or":"model_version_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":2}],"query":[{"a":true,"k":"query","n":"put_api_v4_projects_id_packages_ml_models_model_version_id_files(*path)_file_name","or":"put_api_v4_projects_id_packages_ml_models_model_version_id_files(*path)_file_name","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"PUT","o":"/api/v4/projects/{id}/packages/ml_models/{model_version_id}/files/(*path/){file_name}","q":{"exist":["file_name","ml_model_id","project_id","put_api_v4_projects_id_packages_ml_models_model_version_id_files(*path)_file_name"]},"r":{"param":{"id":"project_id","model_version_id":"ml_model_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"packages"},{"lit":"ml_models"},{"var":"ml_model_id"},{"lit":"files"},{"lit":"(*path"},{"lit":"){file_name}"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"PUT /api/v4/projects/{id}/packages/ml_models/{model_version_id}/files/(*path/){file_name}/authorize","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"file_name","or":"file_name","r":true,"t":"`$ANY`","index$":0},{"a":true,"k":"param","n":"ml_model_id","or":"model_version_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":2}],"query":[{"a":true,"k":"query","n":"put_api_v4_projects_id_packages_ml_models_model_version_id_files(*path)_file_name_authorize","or":"put_api_v4_projects_id_packages_ml_models_model_version_id_files(*path)_file_name_authorize","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"PUT","o":"/api/v4/projects/{id}/packages/ml_models/{model_version_id}/files/(*path/){file_name}/authorize","q":{"exist":["file_name","ml_model_id","project_id","put_api_v4_projects_id_packages_ml_models_model_version_id_files(*path)_file_name_authorize"]},"r":{"param":{"id":"project_id","model_version_id":"ml_model_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"packages"},{"lit":"ml_models"},{"var":"ml_model_id"},{"lit":"files"},{"lit":"(*path"},{"lit":"){file_name}"},{"lit":"authorize"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.project"]]},"key$":"ml_model_registry","name__orig":"ml_model_registry","Name":"MlModelRegistry","name_":"ml_model_registry","name-":"ml-model-registry","NAME":"ML_MODEL_REGISTRY","index$":228}, {"active":true,"entity":"ml_model_registry","key$":"BasicMlModelRegistryFlow","kind":"basic","name":"BasicMlModelRegistryFlow","param":{},"step":[{"a":true,"d":{"file_name":"file_name01","project_id":"project01"},"i":{"ref":"ml_model_registry_ref01","srcdatavar":"ml_model_registry_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-ml_model_registry_ref01"}}],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"ml_model_registry_ref01","srcdatavar":"ml_model_registry_ref01_data","suffix":"_dt0"},"m":{"file_name":"file_name01","id":"ml_model_registry01","project_id":"project01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-ml_model_registry_ref01"}}],"index$":1}]}, 'MlModelRegistry', {"GET /api/v4/projects/{id}/packages/ml_models/{model_version_id}/files/(*path/){file_name}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"in":"path","name":"file_name","description":"File name","type":"string","required":true,"index$":1},{"in":"query","name":"path","description":"File directory path","type":"string","required":false,"index$":2},{"in":"query","name":"status","description":"Package status","type":"string","enum":["default","hidden"],"required":false,"index$":3},{"in":"path","name":"model_version_id","description":"Model version id","type":"string","required":true,"index$":4}]},"PUT /api/v4/projects/{id}/packages/ml_models/{model_version_id}/files/(*path/){file_name}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"in":"path","name":"file_name","description":"File name","type":"string","required":true,"index$":1},{"in":"path","name":"model_version_id","description":"Model version id","type":"string","required":true,"index$":2},{"name":"putApiV4ProjectsIdPackagesMlModelsModelVersionIdFiles(*path)FileName","in":"body","required":true,"schema":{"type":"object","properties":{"path":{"type":"string","description":"File directory path"},"status":{"type":"string","description":"Package status","enum":["default","hidden"]},"file":{"type":"file","description":"The package file to be published (generated by Multipart middleware)"}},"required":["file"],"description":"Workhorse upload model package file","x-ref":"#/definitions/putApiV4ProjectsIdPackagesMlModelsModelVersionIdFiles(*path)FileName"},"index$":3}]},"PUT /api/v4/projects/{id}/packages/ml_models/{model_version_id}/files/(*path/){file_name}/authorize":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"in":"path","name":"file_name","description":"File name","type":"string","required":true,"index$":1},{"in":"path","name":"model_version_id","description":"Model version id","type":"string","required":true,"index$":2},{"name":"putApiV4ProjectsIdPackagesMlModelsModelVersionIdFiles(*path)FileNameAuthorize","in":"body","required":true,"schema":{"type":"object","properties":{"path":{"type":"string","description":"File directory path"},"status":{"type":"string","description":"Package status","enum":["default","hidden"]}},"description":"Workhorse authorize model package file","x-ref":"#/definitions/putApiV4ProjectsIdPackagesMlModelsModelVersionIdFiles(*path)FileNameAuthorize"},"index$":3}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let ml_model_registry_ref01_data = Object.values(setup.data.existing.ml_model_registry)[0] as any

    // UPDATE
    const ml_model_registry_ref01_ent = client.MlModelRegistry()
    const ml_model_registry_ref01_data_up0: any = {}
    ml_model_registry_ref01_data_up0 ['file_name'] = setup.idmap['file_name']
    ml_model_registry_ref01_data_up0 ['project_id'] = setup.idmap['project_id']

    const ml_model_registry_ref01_resdata_up0 = (await ml_model_registry_ref01_ent.update(ml_model_registry_ref01_data_up0)).data()
    assert(null != ml_model_registry_ref01_resdata_up0)



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/ml_model_registry/MlModelRegistryTestData.json')

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
    ['ml_model_registry01','ml_model_registry02','ml_model_registry03','project01','project02','project03','file_name01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_ML_MODEL_REGISTRY_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_ML_MODEL_REGISTRY_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_ML_MODEL_REGISTRY_ENTID']
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
  
