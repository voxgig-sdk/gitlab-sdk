

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


describe('ApiEntitiesDeployKeyEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesDeployKey()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create', 'list', 'update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_deploy_key.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":false,"t":"`$STRING`","key$":"created_at","index$":0},"expires_at":{"a":true,"fo":"date-time","h":"Expires At","n":"expires_at","r":false,"t":"`$STRING`","key$":"expires_at","index$":1},"fingerprint":{"a":true,"h":"Fingerprint","n":"fingerprint","r":false,"t":"`$STRING`","key$":"fingerprint","index$":2},"fingerprint_sha256":{"a":true,"h":"Fingerprint Sha256","n":"fingerprint_sha256","r":false,"t":"`$STRING`","key$":"fingerprint_sha256","index$":3},"id":{"a":true,"fo":"int32","h":"Id","n":"id","r":false,"t":"`$INTEGER`","key$":"id","index$":4},"key":{"a":true,"h":"Key","n":"key","r":false,"t":"`$STRING`","key$":"key","index$":5},"last_used_at":{"a":true,"fo":"date-time","h":"Last Used At","n":"last_used_at","r":false,"t":"`$STRING`","key$":"last_used_at","index$":6},"projects_with_readonly_access":{"a":true,"h":"Projects With Readonly Access","n":"projects_with_readonly_access","r":false,"t":"`$OBJECT`","key$":"projects_with_readonly_access","index$":7},"projects_with_write_access":{"a":true,"h":"Projects With Write Access","n":"projects_with_write_access","r":false,"t":"`$OBJECT`","key$":"projects_with_write_access","index$":8},"title":{"a":true,"h":"Title","n":"title","r":false,"t":"`$STRING`","key$":"title","index$":9},"usage_type":{"a":true,"h":"Usage Type","n":"usage_type","r":false,"t":"`$STRING`","key$":"usage_type","index$":10}},"id":{"field":"id","name":"id"},"name":"api_entities_deploy_key","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/v4/projects/{id}/deploy_keys/{key_id}/enable","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"deploy_key_id","or":"key_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/api/v4/projects/{id}/deploy_keys/{key_id}/enable","q":{"exist":["deploy_key_id","project_id"]},"r":{"param":{"id":"project_id","key_id":"deploy_key_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"deploy_keys"},{"var":"deploy_key_id"},{"lit":"enable"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /api/v4/deploy_keys","source":"swagger2","version":2},"g":{"query":[{"a":true,"k":"query","n":"post_api_v4_deploy_key","or":"post_api_v4_deploy_key","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/api/v4/deploy_keys","q":{"exist":["post_api_v4_deploy_key"]},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"deploy_keys"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/v4/deploy_keys","source":"swagger2","version":2},"g":{"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"public","or":"public","r":false,"t":"`$BOOLEAN`","index$":2}]},"k":"http","m":"GET","o":"/api/v4/deploy_keys","q":{"exist":["page","per_page","public"]},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"deploy_keys"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /api/v4/projects/{id}/deploy_keys/{key_id}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"key_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"put_api_v4_projects_id_deploy_keys_key_id","or":"put_api_v4_projects_id_deploy_keys_key_id","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"PUT","o":"/api/v4/projects/{id}/deploy_keys/{key_id}","q":{"exist":["id","project_id","put_api_v4_projects_id_deploy_keys_key_id"]},"r":{"param":{"id":"project_id","key_id":"id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"deploy_keys"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.project"],["$.main.kit.entity.project","$.main.kit.entity.deploy_key"]]},"key$":"api_entities_deploy_key","name__orig":"api_entities_deploy_key","Name":"ApiEntitiesDeployKey","name_":"api_entities_deploy_key","name-":"api-entities-deploy-key","NAME":"API_ENTITIES_DEPLOY_KEY","index$":57}, {"active":true,"entity":"api_entities_deploy_key","key$":"BasicApiEntitiesDeployKeyFlow","kind":"basic","name":"BasicApiEntitiesDeployKeyFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"api_entities_deploy_key_ref01"},"m":{"project_id":"project01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"api_entities_deploy_key_ref01"}}],"index$":1},{"a":true,"d":{"project_id":"project01"},"i":{"ref":"api_entities_deploy_key_ref01","srcdatavar":"api_entities_deploy_key_ref01_data","suffix":"_up0","textfield":"created_at"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_deploy_key_ref01"}}],"v":[],"index$":2}]}, 'ApiEntitiesDeployKey', {"POST /api/v4/projects/{id}/deploy_keys/{key_id}/enable":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project owned by the authenticated user","type":"string","required":true,"index$":0},{"in":"path","name":"key_id","description":"The ID of the deploy key","type":"integer","format":"int32","required":true,"index$":1}]},"POST /api/v4/deploy_keys":{"protocol":"http","parameters":[{"name":"postApiV4DeployKeys","in":"body","required":true,"schema":{"type":"object","properties":{"key":{"type":"string","description":"New deploy key"},"title":{"type":"string","description":"New deploy key's title"},"expires_at":{"type":"string","format":"date-time","description":"The expiration date of the SSH key in ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ)"}},"required":["key","title"],"description":"Create a deploy key","x-ref":"#/definitions/postApiV4DeployKeys"},"index$":0}]},"GET /api/v4/deploy_keys":{"protocol":"http","parameters":[{"in":"query","name":"page","description":"Current page number","type":"integer","format":"int32","default":1,"required":false,"example":1,"index$":0},{"in":"query","name":"per_page","description":"Number of items per page","type":"integer","format":"int32","default":20,"required":false,"example":20,"index$":1},{"in":"query","name":"public","description":"Only return deploy keys that are public","type":"boolean","default":false,"required":false,"index$":2}]},"PUT /api/v4/projects/{id}/deploy_keys/{key_id}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project owned by the authenticated user","type":"string","required":true,"index$":0},{"in":"path","name":"key_id","description":"The ID of the deploy key","type":"integer","format":"int32","required":true,"index$":1},{"name":"putApiV4ProjectsIdDeployKeysKeyId","in":"body","required":true,"schema":{"type":"object","properties":{"title":{"type":"string","description":"New deploy key's title"},"can_push":{"type":"boolean","description":"Can deploy key push to the project's repository"}},"description":"Update deploy key","x-ref":"#/definitions/putApiV4ProjectsIdDeployKeysKeyId"},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const api_entities_deploy_key_ref01_ent = client.ApiEntitiesDeployKey()
    let api_entities_deploy_key_ref01_data = setup.data.new.api_entities_deploy_key['api_entities_deploy_key_ref01']
    api_entities_deploy_key_ref01_data['project_id'] = setup.idmap['project01']

    api_entities_deploy_key_ref01_data = (await api_entities_deploy_key_ref01_ent.create(api_entities_deploy_key_ref01_data)).data()
    assert(null != api_entities_deploy_key_ref01_data.id)


    // LIST
    const api_entities_deploy_key_ref01_match: any = {}

    const api_entities_deploy_key_ref01_list = (await api_entities_deploy_key_ref01_ent.list(api_entities_deploy_key_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(api_entities_deploy_key_ref01_list, { id: api_entities_deploy_key_ref01_data.id })))


    // UPDATE
    const api_entities_deploy_key_ref01_data_up0: any = {}
    api_entities_deploy_key_ref01_data_up0.id = api_entities_deploy_key_ref01_data.id
    api_entities_deploy_key_ref01_data_up0 ['project_id'] = setup.idmap['project_id']

    const api_entities_deploy_key_ref01_markdef_up0 = { name: 'created_at', value: 'Mark01-api_entities_deploy_key_ref01_' + setup.now }
    ;(api_entities_deploy_key_ref01_data_up0 as any)[api_entities_deploy_key_ref01_markdef_up0.name] = api_entities_deploy_key_ref01_markdef_up0.value

    const api_entities_deploy_key_ref01_resdata_up0 = (await api_entities_deploy_key_ref01_ent.update(api_entities_deploy_key_ref01_data_up0)).data()
    assert(api_entities_deploy_key_ref01_resdata_up0.id === api_entities_deploy_key_ref01_data_up0.id)

    assert((api_entities_deploy_key_ref01_resdata_up0 as any)[api_entities_deploy_key_ref01_markdef_up0.name] === api_entities_deploy_key_ref01_markdef_up0.value)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_deploy_key/ApiEntitiesDeployKeyTestData.json')

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
    ['api_entities_deploy_key01','api_entities_deploy_key02','api_entities_deploy_key03','project01','project02','project03','deploy_key01','deploy_key02','deploy_key03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_DEPLOY_KEY_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_DEPLOY_KEY_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_DEPLOY_KEY_ENTID']
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
  
