

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


describe('ApiEntitiesPagesDomainEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesPagesDomain()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_pages_domain.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"auto_ssl_enabled","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"certificate","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"certificate_text","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"domain","req":false,"type":"`$STRING`","index$":3},{"active":true,"name":"enabled_until","req":false,"type":"`$STRING`","index$":4},{"active":true,"name":"expired","req":false,"type":"`$STRING`","index$":5},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":6},{"active":true,"name":"subject","req":false,"type":"`$STRING`","index$":7},{"active":true,"name":"url","req":false,"type":"`$STRING`","index$":8},{"active":true,"name":"verification_code","req":false,"type":"`$STRING`","index$":9},{"active":true,"name":"verified","req":false,"type":"`$BOOLEAN`","index$":10}],"id":{"field":"id","name":"id"},"name":"api_entities_pages_domain","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"post_api_v4_projects_id_pages_domain","orig":"post_api_v4_projects_id_pages_domain","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"POST /api/v4/projects/{id}/pages/domains","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4ProjectsIdPagesDomains\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project owned by the authenticated user\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"in\":\"body\",\"name\":\"postApiV4ProjectsIdPagesDomains\",\"required\":true,\"schema\":{\"description\":\"Create a new pages domain\",\"properties\":{\"auto_ssl_enabled\":{\"default\":false,\"description\":\"Enables automatic generation of SSL certificates issued by Let's Encrypt for custom domains.\",\"type\":\"boolean\"},\"certificate\":{\"description\":\"The certificate\",\"type\":\"file\"},\"domain\":{\"description\":\"The domain\",\"type\":\"string\"},\"key\":{\"description\":\"The key\",\"type\":\"file\"},\"user_provided_certificate\":{\"type\":\"string\"},\"user_provided_key\":{\"type\":\"string\"}},\"required\":[\"domain\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"Create a new pages domain\",\"schema\":{\"description\":\"API_Entities_PagesDomain model\",\"properties\":{\"auto_ssl_enabled\":{\"type\":\"string\"},\"certificate\":{\"properties\":{\"certificate\":{\"type\":\"string\"},\"certificate_text\":{\"type\":\"string\"},\"expired\":{\"type\":\"string\"},\"subject\":{\"type\":\"string\"}},\"type\":\"object\"},\"domain\":{\"type\":\"string\"},\"enabled_until\":{\"type\":\"string\"},\"url\":{\"type\":\"string\"},\"verification_code\":{\"type\":\"string\"},\"verified\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/projects/{id}/pages/domains","rename":{"param":{"id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"pages"},{"lit":"domains"}],"select":{"exist":["post_api_v4_projects_id_pages_domain","project_id"]},"transform":{"req":"`reqdata`","res":"`body.certificate`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"example":20,"kind":"query","name":"per_page","orig":"per_page","reqd":false,"type":"`$INTEGER`","index$":1}]},"contract":{"id":"GET /api/v4/projects/{id}/pages/domains","json":"{\"operationId\":\"getApiV4ProjectsIdPagesDomains\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project owned by the authenticated user\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"default\":1,\"description\":\"Current page number\",\"example\":1,\"format\":\"int32\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"type\":\"integer\"},{\"default\":20,\"description\":\"Number of items per page\",\"example\":20,\"format\":\"int32\",\"in\":\"query\",\"name\":\"per_page\",\"required\":false,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get all pages domains\",\"schema\":{\"items\":{\"description\":\"API_Entities_PagesDomain model\",\"properties\":{\"auto_ssl_enabled\":{\"type\":\"string\"},\"certificate\":{\"properties\":{\"certificate\":{\"type\":\"string\"},\"certificate_text\":{\"type\":\"string\"},\"expired\":{\"type\":\"string\"},\"subject\":{\"type\":\"string\"}},\"type\":\"object\"},\"domain\":{\"type\":\"string\"},\"enabled_until\":{\"type\":\"string\"},\"url\":{\"type\":\"string\"},\"verification_code\":{\"type\":\"string\"},\"verified\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/pages/domains","rename":{"param":{"id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"pages"},{"lit":"domains"}],"select":{"exist":["page","per_page","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"domain","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /api/v4/projects/{id}/pages/domains/{domain}","json":"{\"operationId\":\"getApiV4ProjectsIdPagesDomainsDomain\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project owned by the authenticated user\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The domain\",\"in\":\"path\",\"name\":\"domain\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get a single pages domain\",\"schema\":{\"description\":\"API_Entities_PagesDomain model\",\"properties\":{\"auto_ssl_enabled\":{\"type\":\"string\"},\"certificate\":{\"properties\":{\"certificate\":{\"type\":\"string\"},\"certificate_text\":{\"type\":\"string\"},\"expired\":{\"type\":\"string\"},\"subject\":{\"type\":\"string\"}},\"type\":\"object\"},\"domain\":{\"type\":\"string\"},\"enabled_until\":{\"type\":\"string\"},\"url\":{\"type\":\"string\"},\"verification_code\":{\"type\":\"string\"},\"verified\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/pages/domains/{domain}","rename":{"param":{"domain":"id","id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"pages"},{"lit":"domains"},{"var":"id"}],"select":{"exist":["id","project_id"]},"transform":{"req":"`reqdata`","res":"`body.certificate`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"domain_id","orig":"domain","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"PUT /api/v4/projects/{id}/pages/domains/{domain}/verify","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"putApiV4ProjectsIdPagesDomainsDomainVerify\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project owned by the authenticated user\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The domain to verify\",\"in\":\"path\",\"name\":\"domain\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Verify a pages domain\",\"schema\":{\"description\":\"API_Entities_PagesDomain model\",\"properties\":{\"auto_ssl_enabled\":{\"type\":\"string\"},\"certificate\":{\"properties\":{\"certificate\":{\"type\":\"string\"},\"certificate_text\":{\"type\":\"string\"},\"expired\":{\"type\":\"string\"},\"subject\":{\"type\":\"string\"}},\"type\":\"object\"},\"domain\":{\"type\":\"string\"},\"enabled_until\":{\"type\":\"string\"},\"url\":{\"type\":\"string\"},\"verification_code\":{\"type\":\"string\"},\"verified\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"PUT","orig":"/api/v4/projects/{id}/pages/domains/{domain}/verify","rename":{"param":{"domain":"domain_id","id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"pages"},{"lit":"domains"},{"var":"domain_id"},{"lit":"verify"}],"select":{"exist":["domain_id","project_id"]},"transform":{"req":"`reqdata`","res":"`body.certificate`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["project"],["project","domain"]]},"key$":"api_entities_pages_domain","name__orig":"api_entities_pages_domain","Name":"ApiEntitiesPagesDomain","name_":"api_entities_pages_domain","name-":"api-entities-pages-domain","NAME":"API_ENTITIES_PAGES_DOMAIN","index$":123}, {"active":true,"entity":"api_entities_pages_domain","key$":"BasicApiEntitiesPagesDomainFlow","kind":"basic","name":"BasicApiEntitiesPagesDomainFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"api_entities_pages_domain_ref01"},"match":{"project_id":"project01"},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{},"match":{"project_id":"project01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"api_entities_pages_domain_ref01"}}],"index$":1},{"active":true,"data":{"project_id":"project01"},"input":{"ref":"api_entities_pages_domain_ref01","srcdatavar":"api_entities_pages_domain_ref01_data","suffix":"_up0","textfield":"auto_ssl_enabled"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_pages_domain_ref01"}}],"valid":[],"index$":2},{"active":true,"data":{},"input":{"ref":"api_entities_pages_domain_ref01","srcdatavar":"api_entities_pages_domain_ref01_data","suffix":"_dt0"},"match":{"id":"api_entities_pages_domain01","project_id":"project01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_pages_domain_ref01"}}],"index$":3}]}, 'ApiEntitiesPagesDomain')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const api_entities_pages_domain_ref01_ent = client.ApiEntitiesPagesDomain()
    let api_entities_pages_domain_ref01_data = setup.data.new.api_entities_pages_domain['api_entities_pages_domain_ref01']
    api_entities_pages_domain_ref01_data['project_id'] = setup.idmap['project01']

    api_entities_pages_domain_ref01_data = (await api_entities_pages_domain_ref01_ent.create(api_entities_pages_domain_ref01_data)).data()
    assert(null != api_entities_pages_domain_ref01_data.id)


    // LIST
    const api_entities_pages_domain_ref01_match: any = {}
    api_entities_pages_domain_ref01_match['project_id'] = setup.idmap['project01']

    const api_entities_pages_domain_ref01_list = (await api_entities_pages_domain_ref01_ent.list(api_entities_pages_domain_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(api_entities_pages_domain_ref01_list, { id: api_entities_pages_domain_ref01_data.id })))


    // UPDATE
    const api_entities_pages_domain_ref01_data_up0: any = {}
    api_entities_pages_domain_ref01_data_up0.id = api_entities_pages_domain_ref01_data.id
    api_entities_pages_domain_ref01_data_up0 ['project_id'] = setup.idmap['project_id']

    const api_entities_pages_domain_ref01_markdef_up0 = { name: 'auto_ssl_enabled', value: 'Mark01-api_entities_pages_domain_ref01_' + setup.now }
    ;(api_entities_pages_domain_ref01_data_up0 as any)[api_entities_pages_domain_ref01_markdef_up0.name] = api_entities_pages_domain_ref01_markdef_up0.value

    const api_entities_pages_domain_ref01_resdata_up0 = (await api_entities_pages_domain_ref01_ent.update(api_entities_pages_domain_ref01_data_up0)).data()
    assert(api_entities_pages_domain_ref01_resdata_up0.id === api_entities_pages_domain_ref01_data_up0.id)

    assert((api_entities_pages_domain_ref01_resdata_up0 as any)[api_entities_pages_domain_ref01_markdef_up0.name] === api_entities_pages_domain_ref01_markdef_up0.value)


    // LOAD
    const api_entities_pages_domain_ref01_match_dt0: any = {}
    api_entities_pages_domain_ref01_match_dt0.id = api_entities_pages_domain_ref01_data.id
    const api_entities_pages_domain_ref01_data_dt0 = (await api_entities_pages_domain_ref01_ent.load(api_entities_pages_domain_ref01_match_dt0)).data()
    assert(api_entities_pages_domain_ref01_data_dt0.id === api_entities_pages_domain_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_pages_domain/ApiEntitiesPagesDomainTestData.json')

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
    ['api_entities_pages_domain01','api_entities_pages_domain02','api_entities_pages_domain03','project01','project02','project03','project01','project02','project03','domain01','domain02','domain03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_PAGES_DOMAIN_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_PAGES_DOMAIN_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_PAGES_DOMAIN_ENTID']
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
  
