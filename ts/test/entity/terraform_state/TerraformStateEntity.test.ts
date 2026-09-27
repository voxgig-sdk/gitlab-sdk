

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0}},"id":{"field":"id","name":"id"},"name":"terraform_state","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/v4/projects/{id}/terraform/state/{name}/lock","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"name","or":"name","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"post_api_v4_projects_id_terraform_state_name_lock","or":"post_api_v4_projects_id_terraform_state_name_lock","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/api/v4/projects/{id}/terraform/state/{name}/lock","q":{"$action":"lock","exist":["name","post_api_v4_projects_id_terraform_state_name_lock","project_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"terraform"},{"lit":"state"},{"var":"name"},{"lit":"lock"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /api/v4/projects/{id}/terraform/state/{name}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"name","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/api/v4/projects/{id}/terraform/state/{name}","q":{"exist":["id","project_id"]},"r":{"param":{"id":"project_id","name":"id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"terraform"},{"lit":"state"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v4/projects/{id}/terraform/state/{name}/versions/{serial}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"serial","or":"serial","r":true,"t":"`$ANY`","index$":1},{"a":true,"k":"param","n":"state_id","or":"name","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/terraform/state/{name}/versions/{serial}","q":{"exist":["project_id","serial","state_id"]},"r":{"param":{"id":"project_id","name":"state_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"terraform"},{"lit":"state"},{"var":"state_id"},{"lit":"versions"},{"var":"serial"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /api/v4/projects/{id}/terraform/state/{name}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"name","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"id","or":"id","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/terraform/state/{name}","q":{"exist":["id","project_id"]},"r":{"param":{"id":"project_id","name":"id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"terraform"},{"lit":"state"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /api/v4/projects/{id}/terraform/state/{name}/lock","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"name","or":"name","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"id","or":"id","r":false,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/api/v4/projects/{id}/terraform/state/{name}/lock","q":{"$action":"lock","exist":["id","name","project_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"terraform"},{"lit":"state"},{"var":"name"},{"lit":"lock"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"DELETE /api/v4/projects/{id}/terraform/state/{name}/versions/{serial}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"serial","or":"serial","r":true,"t":"`$ANY`","index$":1},{"a":true,"k":"param","n":"state_id","or":"name","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"DELETE","o":"/api/v4/projects/{id}/terraform/state/{name}/versions/{serial}","q":{"exist":["project_id","serial","state_id"]},"r":{"param":{"id":"project_id","name":"state_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"terraform"},{"lit":"state"},{"var":"state_id"},{"lit":"versions"},{"var":"serial"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"DELETE /api/v4/projects/{id}/terraform/state/{name}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"name","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/api/v4/projects/{id}/terraform/state/{name}","q":{"exist":["id","project_id"]},"r":{"param":{"id":"project_id","name":"id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"terraform"},{"lit":"state"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"remove"}},"relations":{"ancestors":[["$.main.kit.entity.project"],["$.main.kit.entity.project"],["$.main.kit.entity.project"]]},"key$":"terraform_state","name__orig":"terraform_state","Name":"TerraformState","name_":"terraform_state","name-":"terraform-state","NAME":"TERRAFORM_STATE","index$":267}, {"active":true,"entity":"terraform_state","key$":"BasicTerraformStateFlow","kind":"basic","name":"BasicTerraformStateFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"terraform_state_ref01"},"m":{"name":"name01","project_id":"project01","state_id":"state01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"terraform_state_ref01","srcdatavar":"terraform_state_ref01_data","suffix":"_dt0"},"m":{"id":"terraform_state01","project_id":"project01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-terraform_state_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"terraform_state_ref01","suffix":"_rm0"},"m":{"id":"terraform_state01","project_id":"project01"},"o":"remove","s":[],"v":[],"index$":2}]}, 'TerraformState', {"POST /api/v4/projects/{id}/terraform/state/{name}/lock":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"in":"path","name":"name","description":"The name of a Terraform state","type":"string","required":true,"index$":1},{"name":"postApiV4ProjectsIdTerraformStateNameLock","in":"body","required":true,"schema":{"type":"object","properties":{"ID":{"type":"string","description":"Terraform state lock ID"},"Operation":{"type":"string","description":"Terraform operation"},"Info":{"type":"string","description":"Terraform info"},"Who":{"type":"string","description":"Terraform state lock owner"},"Version":{"type":"string","description":"Terraform version"},"Created":{"type":"string","description":"Terraform state lock timestamp"},"Path":{"type":"string","description":"Terraform path"}},"required":["ID","Operation","Info","Who","Version","Created","Path"],"description":"Lock a Terraform state of a certain name","x-ref":"#/definitions/postApiV4ProjectsIdTerraformStateNameLock"},"index$":2}]},"POST /api/v4/projects/{id}/terraform/state/{name}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"in":"path","name":"name","description":"The name of a Terraform state","type":"string","required":true,"index$":1}]},"GET /api/v4/projects/{id}/terraform/state/{name}/versions/{serial}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"in":"path","name":"name","description":"The name of a Terraform state","type":"string","required":true,"index$":1},{"in":"path","name":"serial","description":"The version number of the state","type":"integer","format":"int32","required":true,"index$":2}]},"GET /api/v4/projects/{id}/terraform/state/{name}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"in":"path","name":"name","description":"The name of a Terraform state","type":"string","required":true,"index$":1},{"in":"query","name":"ID","description":"Terraform state lock ID","type":"string","required":false,"index$":2}]},"DELETE /api/v4/projects/{id}/terraform/state/{name}/lock":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"in":"path","name":"name","description":"The name of a Terraform state","type":"string","required":true,"index$":1},{"in":"query","name":"ID","description":"Terraform state lock ID","type":"string","required":false,"index$":2}]},"DELETE /api/v4/projects/{id}/terraform/state/{name}/versions/{serial}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"in":"path","name":"name","type":"integer","format":"int32","required":true,"index$":1},{"in":"path","name":"serial","type":"integer","format":"int32","required":true,"index$":2}]},"DELETE /api/v4/projects/{id}/terraform/state/{name}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"in":"path","name":"name","description":"The name of a Terraform state","type":"string","required":true,"index$":1}]}})
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
    ['terraform_state01','terraform_state02','terraform_state03','project01','project02','project03','name01','state01'],
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
  
