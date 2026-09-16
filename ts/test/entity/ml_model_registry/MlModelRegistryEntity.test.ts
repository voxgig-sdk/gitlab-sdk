

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[],"name":"ml_model_registry","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"file_name","orig":"file_name","reqd":true,"type":"`$ANY`","index$":0},{"active":true,"kind":"param","name":"ml_model_id","orig":"model_version_id","reqd":true,"type":"`$STRING`","index$":1},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":2}],"query":[{"active":true,"kind":"query","name":"path","orig":"path","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"status","orig":"status","reqd":false,"type":"`$ANY`","index$":1}]},"contract":{"id":"GET /api/v4/projects/{id}/packages/ml_models/{model_version_id}/files/(*path/){file_name}","json":"{\"operationId\":\"getApiV4ProjectsIdPackagesMlModelsModelVersionIdFiles(*path)FileName\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"File name\",\"in\":\"path\",\"name\":\"file_name\",\"required\":true,\"type\":\"string\"},{\"description\":\"File directory path\",\"in\":\"query\",\"name\":\"path\",\"required\":false,\"type\":\"string\"},{\"description\":\"Package status\",\"enum\":[\"default\",\"hidden\"],\"in\":\"query\",\"name\":\"status\",\"required\":false,\"type\":\"string\"},{\"description\":\"Model version id\",\"in\":\"path\",\"name\":\"model_version_id\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Download an ml_model package file\"},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/packages/ml_models/{model_version_id}/files/(*path/){file_name}","rename":{"param":{"id":"project_id","model_version_id":"ml_model_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"packages"},{"lit":"ml_models"},{"var":"ml_model_id"},{"lit":"files"},{"lit":"(*path"},{"lit":"){file_name}"}],"select":{"exist":["file_name","ml_model_id","path","project_id","status"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"file_name","orig":"file_name","reqd":true,"type":"`$ANY`","index$":0},{"active":true,"kind":"param","name":"ml_model_id","orig":"model_version_id","reqd":true,"type":"`$STRING`","index$":1},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":2}],"query":[{"active":true,"kind":"query","name":"put_api_v4_projects_id_packages_ml_models_model_version_id_files(*path)_file_name","orig":"put_api_v4_projects_id_packages_ml_models_model_version_id_files(*path)_file_name","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"PUT /api/v4/projects/{id}/packages/ml_models/{model_version_id}/files/(*path/){file_name}","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"putApiV4ProjectsIdPackagesMlModelsModelVersionIdFiles(*path)FileName\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"File name\",\"in\":\"path\",\"name\":\"file_name\",\"required\":true,\"type\":\"string\"},{\"description\":\"Model version id\",\"in\":\"path\",\"name\":\"model_version_id\",\"required\":true,\"type\":\"string\"},{\"in\":\"body\",\"name\":\"putApiV4ProjectsIdPackagesMlModelsModelVersionIdFiles(*path)FileName\",\"required\":true,\"schema\":{\"description\":\"Workhorse upload model package file\",\"properties\":{\"file\":{\"description\":\"The package file to be published (generated by Multipart middleware)\",\"type\":\"file\"},\"path\":{\"description\":\"File directory path\",\"type\":\"string\"},\"status\":{\"description\":\"Package status\",\"enum\":[\"default\",\"hidden\"],\"type\":\"string\"}},\"required\":[\"file\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"Workhorse upload model package file\"},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"PUT","orig":"/api/v4/projects/{id}/packages/ml_models/{model_version_id}/files/(*path/){file_name}","rename":{"param":{"id":"project_id","model_version_id":"ml_model_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"packages"},{"lit":"ml_models"},{"var":"ml_model_id"},{"lit":"files"},{"lit":"(*path"},{"lit":"){file_name}"}],"select":{"exist":["file_name","ml_model_id","project_id","put_api_v4_projects_id_packages_ml_models_model_version_id_files(*path)_file_name"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"file_name","orig":"file_name","reqd":true,"type":"`$ANY`","index$":0},{"active":true,"kind":"param","name":"ml_model_id","orig":"model_version_id","reqd":true,"type":"`$STRING`","index$":1},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":2}],"query":[{"active":true,"kind":"query","name":"put_api_v4_projects_id_packages_ml_models_model_version_id_files(*path)_file_name_authorize","orig":"put_api_v4_projects_id_packages_ml_models_model_version_id_files(*path)_file_name_authorize","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"PUT /api/v4/projects/{id}/packages/ml_models/{model_version_id}/files/(*path/){file_name}/authorize","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"putApiV4ProjectsIdPackagesMlModelsModelVersionIdFiles(*path)FileNameAuthorize\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"File name\",\"in\":\"path\",\"name\":\"file_name\",\"required\":true,\"type\":\"string\"},{\"description\":\"Model version id\",\"in\":\"path\",\"name\":\"model_version_id\",\"required\":true,\"type\":\"string\"},{\"in\":\"body\",\"name\":\"putApiV4ProjectsIdPackagesMlModelsModelVersionIdFiles(*path)FileNameAuthorize\",\"required\":true,\"schema\":{\"description\":\"Workhorse authorize model package file\",\"properties\":{\"path\":{\"description\":\"File directory path\",\"type\":\"string\"},\"status\":{\"description\":\"Package status\",\"enum\":[\"default\",\"hidden\"],\"type\":\"string\"}},\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Workhorse authorize model package file\"},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"PUT","orig":"/api/v4/projects/{id}/packages/ml_models/{model_version_id}/files/(*path/){file_name}/authorize","rename":{"param":{"id":"project_id","model_version_id":"ml_model_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"packages"},{"lit":"ml_models"},{"var":"ml_model_id"},{"lit":"files"},{"lit":"(*path"},{"lit":"){file_name}"},{"lit":"authorize"}],"select":{"exist":["file_name","ml_model_id","project_id","put_api_v4_projects_id_packages_ml_models_model_version_id_files(*path)_file_name_authorize"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"update"}},"relations":{"ancestors":[["project","ml_model"]]},"key$":"ml_model_registry","name__orig":"ml_model_registry","Name":"MlModelRegistry","name_":"ml_model_registry","name-":"ml-model-registry","NAME":"ML_MODEL_REGISTRY","index$":228}, {"active":true,"entity":"ml_model_registry","key$":"BasicMlModelRegistryFlow","kind":"basic","name":"BasicMlModelRegistryFlow","param":{},"step":[{"active":true,"data":{"file_name":"file_name01","project_id":"project01"},"input":{"ref":"ml_model_registry_ref01","srcdatavar":"ml_model_registry_ref01_data","suffix":"_up0"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-ml_model_registry_ref01"}}],"valid":[],"index$":0},{"active":true,"data":{},"input":{"ref":"ml_model_registry_ref01","srcdatavar":"ml_model_registry_ref01_data","suffix":"_dt0"},"match":{"file_name":"file_name01","id":"ml_model_registry01","project_id":"project01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-ml_model_registry_ref01"}}],"index$":1}]}, 'MlModelRegistry')
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
    ['ml_model_registry01','ml_model_registry02','ml_model_registry03','project01','project02','project03','ml_model01','ml_model02','ml_model03'],
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
  
