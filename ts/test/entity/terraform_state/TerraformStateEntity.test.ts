

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


describe('TerraformStateEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.TerraformState()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'terraform_state.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":0}],"id":{"field":"id","name":"id"},"name":"terraform_state","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"name","orig":"name","reqd":true,"type":"`$STRING`"},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`"}],"query":[{"active":true,"kind":"query","name":"post_api_v4_projects_id_terraform_state_name_lock","orig":"post_api_v4_projects_id_terraform_state_name_lock","reqd":true,"type":"`$OBJECT`"}]},"contract":{"id":"POST /api/v4/projects/{id}/terraform/state/{name}/lock","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4ProjectsIdTerraformStateNameLock\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The name of a Terraform state\",\"in\":\"path\",\"name\":\"name\",\"required\":true,\"type\":\"string\"},{\"in\":\"body\",\"name\":\"postApiV4ProjectsIdTerraformStateNameLock\",\"required\":true,\"schema\":{\"description\":\"Lock a Terraform state of a certain name\",\"properties\":{\"Created\":{\"description\":\"Terraform state lock timestamp\",\"type\":\"string\"},\"ID\":{\"description\":\"Terraform state lock ID\",\"type\":\"string\"},\"Info\":{\"description\":\"Terraform info\",\"type\":\"string\"},\"Operation\":{\"description\":\"Terraform operation\",\"type\":\"string\"},\"Path\":{\"description\":\"Terraform path\",\"type\":\"string\"},\"Version\":{\"description\":\"Terraform version\",\"type\":\"string\"},\"Who\":{\"description\":\"Terraform state lock owner\",\"type\":\"string\"}},\"required\":[\"ID\",\"Operation\",\"Info\",\"Who\",\"Version\",\"Created\",\"Path\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Lock a Terraform state of a certain name\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not found\"},\"409\":{\"description\":\"Conflict\"},\"422\":{\"description\":\"Validation failure\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/projects/{id}/terraform/state/{name}/lock","rename":{"param":{"id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"terraform"},{"lit":"state"},{"var":"name"},{"lit":"lock"}],"select":{"$action":"lock","exist":["name","post_api_v4_projects_id_terraform_state_name_lock","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"name","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"POST /api/v4/projects/{id}/terraform/state/{name}","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4ProjectsIdTerraformStateName\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The name of a Terraform state\",\"in\":\"path\",\"name\":\"name\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Add a new Terraform state or update an existing one\"},\"204\":{\"description\":\"No data provided\"},\"403\":{\"description\":\"Forbidden\"},\"413\":{\"description\":\"Request Entity Too Large\"},\"422\":{\"description\":\"Validation failure\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/projects/{id}/terraform/state/{name}","rename":{"param":{"id":"project_id","name":"id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"terraform"},{"lit":"state"},{"var":"id"}],"select":{"exist":["id","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"serial","orig":"serial","reqd":true,"type":"`$ANY`","index$":1},{"active":true,"kind":"param","name":"state_id","orig":"name","reqd":true,"type":"`$STRING`","index$":2}]},"contract":{"id":"GET /api/v4/projects/{id}/terraform/state/{name}/versions/{serial}","json":"{\"operationId\":\"getApiV4ProjectsIdTerraformStateNameVersionsSerial\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The name of a Terraform state\",\"in\":\"path\",\"name\":\"name\",\"required\":true,\"type\":\"string\"},{\"description\":\"The version number of the state\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"serial\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get a Terraform state version\",\"schema\":{\"type\":\"file\"}},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/terraform/state/{name}/versions/{serial}","rename":{"param":{"id":"project_id","name":"state_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"terraform"},{"lit":"state"},{"var":"state_id"},{"lit":"versions"},{"var":"serial"}],"select":{"exist":["project_id","serial","state_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"name","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}],"query":[{"active":true,"kind":"query","name":"id","orig":"id","reqd":false,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /api/v4/projects/{id}/terraform/state/{name}","json":"{\"operationId\":\"getApiV4ProjectsIdTerraformStateName\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The name of a Terraform state\",\"in\":\"path\",\"name\":\"name\",\"required\":true,\"type\":\"string\"},{\"description\":\"Terraform state lock ID\",\"in\":\"query\",\"name\":\"ID\",\"required\":false,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get a Terraform state by its name\"},\"204\":{\"description\":\"Empty state\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not found\"},\"422\":{\"description\":\"Validation failure\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/terraform/state/{name}","rename":{"param":{"id":"project_id","name":"id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"terraform"},{"lit":"state"},{"var":"id"}],"select":{"exist":["id","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"name","orig":"name","reqd":true,"type":"`$STRING`"},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`"}],"query":[{"active":true,"kind":"query","name":"id","orig":"id","reqd":false,"type":"`$STRING`"}]},"contract":{"id":"DELETE /api/v4/projects/{id}/terraform/state/{name}/lock","json":"{\"operationId\":\"deleteApiV4ProjectsIdTerraformStateNameLock\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The name of a Terraform state\",\"in\":\"path\",\"name\":\"name\",\"required\":true,\"type\":\"string\"},{\"description\":\"Terraform state lock ID\",\"in\":\"query\",\"name\":\"ID\",\"required\":false,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"204\":{\"description\":\"Unlock a Terraform state of a certain name\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not found\"},\"409\":{\"description\":\"Conflict\"},\"422\":{\"description\":\"Validation failure\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"DELETE","orig":"/api/v4/projects/{id}/terraform/state/{name}/lock","rename":{"param":{"id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"terraform"},{"lit":"state"},{"var":"name"},{"lit":"lock"}],"select":{"$action":"lock","exist":["id","name","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"serial","orig":"serial","reqd":true,"type":"`$ANY`","index$":1},{"active":true,"kind":"param","name":"state_id","orig":"name","reqd":true,"type":"`$STRING`","index$":2}]},"contract":{"id":"DELETE /api/v4/projects/{id}/terraform/state/{name}/versions/{serial}","json":"{\"operationId\":\"deleteApiV4ProjectsIdTerraformStateNameVersionsSerial\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"format\":\"int32\",\"in\":\"path\",\"name\":\"name\",\"required\":true,\"type\":\"integer\"},{\"format\":\"int32\",\"in\":\"path\",\"name\":\"serial\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"204\":{\"description\":\"Delete a Terraform state version\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"DELETE","orig":"/api/v4/projects/{id}/terraform/state/{name}/versions/{serial}","rename":{"param":{"id":"project_id","name":"state_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"terraform"},{"lit":"state"},{"var":"state_id"},{"lit":"versions"},{"var":"serial"}],"select":{"exist":["project_id","serial","state_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"name","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"DELETE /api/v4/projects/{id}/terraform/state/{name}","json":"{\"operationId\":\"deleteApiV4ProjectsIdTerraformStateName\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The name of a Terraform state\",\"in\":\"path\",\"name\":\"name\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"204\":{\"description\":\"Delete a Terraform state of a certain name\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not found\"},\"422\":{\"description\":\"Validation failure\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"DELETE","orig":"/api/v4/projects/{id}/terraform/state/{name}","rename":{"param":{"id":"project_id","name":"id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"terraform"},{"lit":"state"},{"var":"id"}],"select":{"exist":["id","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"remove"}},"relations":{"ancestors":[["project"],["project","state"],["project","state","version"]]},"key$":"terraform_state","name__orig":"terraform_state","Name":"TerraformState","name_":"terraform_state","name-":"terraform-state","NAME":"TERRAFORM_STATE","index$":267}, {"active":true,"entity":"terraform_state","key$":"BasicTerraformStateFlow","kind":"basic","name":"BasicTerraformStateFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"terraform_state_ref01"},"match":{"name":"name01","project_id":"project01","state_id":"state01"},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{"ref":"terraform_state_ref01","srcdatavar":"terraform_state_ref01_data","suffix":"_dt0"},"match":{"id":"terraform_state01","project_id":"project01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-terraform_state_ref01"}}],"index$":1},{"active":true,"data":{},"input":{"ref":"terraform_state_ref01","suffix":"_rm0"},"match":{"id":"terraform_state01","project_id":"project01"},"op":"remove","spec":[],"valid":[],"index$":2}]}, 'TerraformState')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const terraform_state_ref01_ent = client.TerraformState()
    let terraform_state_ref01_data = setup.data.new.terraform_state['terraform_state_ref01']
    terraform_state_ref01_data['name'] = setup.idmap['name01']
    terraform_state_ref01_data['project_id'] = setup.idmap['project01']
    terraform_state_ref01_data['state_id'] = setup.idmap['state01']

    terraform_state_ref01_data = (await terraform_state_ref01_ent.create(terraform_state_ref01_data)).data()
    assert(null != terraform_state_ref01_data.id)


    // LOAD
    const terraform_state_ref01_match_dt0: any = {}
    terraform_state_ref01_match_dt0.id = terraform_state_ref01_data.id
    const terraform_state_ref01_data_dt0 = (await terraform_state_ref01_ent.load(terraform_state_ref01_match_dt0)).data()
    assert(terraform_state_ref01_data_dt0.id === terraform_state_ref01_data.id)


    // REMOVE
    const terraform_state_ref01_match_rm0: any = { id: terraform_state_ref01_data.id }
    await terraform_state_ref01_ent.remove(terraform_state_ref01_match_rm0)
  

  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/terraform_state/TerraformStateTestData.json')

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
    ['terraform_state01','terraform_state02','terraform_state03','project01','project02','project03','project01','project02','project03','state01','state02','state03','project01','project02','project03','state01','state02','state03','version01','version02','version03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_TERRAFORM_STATE_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_TERRAFORM_STATE_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_TERRAFORM_STATE_ENTID']
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
  
