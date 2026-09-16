

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


describe('EeApiEntitiesSshCertificateEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.EeApiEntitiesSshCertificate()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create', 'list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'ee_api_entities_ssh_certificate.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"date-time","name":"created_at","req":false,"type":"`$STRING`","index$":0},{"active":true,"format":"int32","name":"id","req":false,"type":"`$INTEGER`","index$":1},{"active":true,"name":"key","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"title","req":false,"type":"`$STRING`","index$":3}],"id":{"field":"id","name":"id"},"name":"ee_api_entities_ssh_certificate","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"group_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"post_api_v4_groups_id_ssh_certificate","orig":"post_api_v4_groups_id_ssh_certificate","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"POST /api/v4/groups/{id}/ssh_certificates","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4GroupsIdSshCertificates\",\"parameters\":[{\"format\":\"int32\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"integer\"},{\"in\":\"body\",\"name\":\"postApiV4GroupsIdSshCertificates\",\"required\":true,\"schema\":{\"description\":\"Create a ssh certificate for a group.\",\"properties\":{\"key\":{\"description\":\"The key of the ssh certificate\",\"type\":\"string\"},\"title\":{\"description\":\"The title of the ssh certificate\",\"type\":\"string\"}},\"required\":[\"title\",\"key\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"Create a ssh certificate for a group.\",\"schema\":{\"description\":\"EE_API_Entities_SshCertificate model\",\"properties\":{\"created_at\":{\"example\":\"2022-01-31T15:10:45.080Z\",\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"example\":142,\"format\":\"int32\",\"type\":\"integer\"},\"key\":{\"type\":\"string\"},\"title\":{\"example\":\"new ssh cert\",\"type\":\"string\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Bad request\"},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/groups/{id}/ssh_certificates","rename":{"param":{"id":"group_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"ssh_certificates"}],"select":{"exist":["group_id","post_api_v4_groups_id_ssh_certificate"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"group_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"example":20,"kind":"query","name":"per_page","orig":"per_page","reqd":false,"type":"`$INTEGER`","index$":1}]},"contract":{"id":"GET /api/v4/groups/{id}/ssh_certificates","json":"{\"operationId\":\"getApiV4GroupsIdSshCertificates\",\"parameters\":[{\"default\":1,\"description\":\"Current page number\",\"example\":1,\"format\":\"int32\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"type\":\"integer\"},{\"default\":20,\"description\":\"Number of items per page\",\"example\":20,\"format\":\"int32\",\"in\":\"query\",\"name\":\"per_page\",\"required\":false,\"type\":\"integer\"},{\"format\":\"int32\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get a list of ssh certificates created for a group.\",\"schema\":{\"items\":{\"description\":\"EE_API_Entities_SshCertificate model\",\"properties\":{\"created_at\":{\"example\":\"2022-01-31T15:10:45.080Z\",\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"example\":142,\"format\":\"int32\",\"type\":\"integer\"},\"key\":{\"type\":\"string\"},\"title\":{\"example\":\"new ssh cert\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"404 Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/groups/{id}/ssh_certificates","rename":{"param":{"id":"group_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"ssh_certificates"}],"select":{"exist":["group_id","page","per_page"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["group"]]},"key$":"ee_api_entities_ssh_certificate","name__orig":"ee_api_entities_ssh_certificate","Name":"EeApiEntitiesSshCertificate","name_":"ee_api_entities_ssh_certificate","name-":"ee-api-entities-ssh-certificate","NAME":"EE_API_ENTITIES_SSH_CERTIFICATE","index$":201}, {"active":true,"entity":"ee_api_entities_ssh_certificate","key$":"BasicEeApiEntitiesSshCertificateFlow","kind":"basic","name":"BasicEeApiEntitiesSshCertificateFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"ee_api_entities_ssh_certificate_ref01"},"match":{"group_id":"group01"},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{},"match":{"group_id":"group01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"ee_api_entities_ssh_certificate_ref01"}}],"index$":1}]}, 'EeApiEntitiesSshCertificate')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const ee_api_entities_ssh_certificate_ref01_ent = client.EeApiEntitiesSshCertificate()
    let ee_api_entities_ssh_certificate_ref01_data = setup.data.new.ee_api_entities_ssh_certificate['ee_api_entities_ssh_certificate_ref01']
    ee_api_entities_ssh_certificate_ref01_data['group_id'] = setup.idmap['group01']

    ee_api_entities_ssh_certificate_ref01_data = (await ee_api_entities_ssh_certificate_ref01_ent.create(ee_api_entities_ssh_certificate_ref01_data)).data()
    assert(null != ee_api_entities_ssh_certificate_ref01_data.id)


    // LIST
    const ee_api_entities_ssh_certificate_ref01_match: any = {}
    ee_api_entities_ssh_certificate_ref01_match['group_id'] = setup.idmap['group01']

    const ee_api_entities_ssh_certificate_ref01_list = (await ee_api_entities_ssh_certificate_ref01_ent.list(ee_api_entities_ssh_certificate_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(ee_api_entities_ssh_certificate_ref01_list, { id: ee_api_entities_ssh_certificate_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/ee_api_entities_ssh_certificate/EeApiEntitiesSshCertificateTestData.json')

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
    ['ee_api_entities_ssh_certificate01','ee_api_entities_ssh_certificate02','ee_api_entities_ssh_certificate03','group01','group02','group03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_EE_API_ENTITIES_SSH_CERTIFICATE_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_EE_API_ENTITIES_SSH_CERTIFICATE_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_EE_API_ENTITIES_SSH_CERTIFICATE_ENTID']
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
  
