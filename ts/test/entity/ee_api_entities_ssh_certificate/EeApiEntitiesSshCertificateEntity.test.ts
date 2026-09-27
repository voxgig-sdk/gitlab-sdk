

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":false,"t":"`$STRING`","key$":"created_at","index$":0},"id":{"a":true,"fo":"int32","h":"Id","n":"id","r":false,"t":"`$INTEGER`","key$":"id","index$":1},"key":{"a":true,"h":"Key","n":"key","r":false,"t":"`$STRING`","key$":"key","index$":2},"title":{"a":true,"h":"Title","n":"title","r":false,"t":"`$STRING`","key$":"title","index$":3}},"id":{"field":"id","name":"id"},"name":"ee_api_entities_ssh_certificate","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/v4/groups/{id}/ssh_certificates","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"group_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"post_api_v4_groups_id_ssh_certificate","or":"post_api_v4_groups_id_ssh_certificate","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/api/v4/groups/{id}/ssh_certificates","q":{"exist":["group_id","post_api_v4_groups_id_ssh_certificate"]},"r":{"param":{"id":"group_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"ssh_certificates"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/v4/groups/{id}/ssh_certificates","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"group_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/api/v4/groups/{id}/ssh_certificates","q":{"exist":["group_id","page","per_page"]},"r":{"param":{"id":"group_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"ssh_certificates"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.group"]]},"key$":"ee_api_entities_ssh_certificate","name__orig":"ee_api_entities_ssh_certificate","Name":"EeApiEntitiesSshCertificate","name_":"ee_api_entities_ssh_certificate","name-":"ee-api-entities-ssh-certificate","NAME":"EE_API_ENTITIES_SSH_CERTIFICATE","index$":201}, {"active":true,"entity":"ee_api_entities_ssh_certificate","key$":"BasicEeApiEntitiesSshCertificateFlow","kind":"basic","name":"BasicEeApiEntitiesSshCertificateFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"ee_api_entities_ssh_certificate_ref01"},"m":{"group_id":"group01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"group_id":"group01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"ee_api_entities_ssh_certificate_ref01"}}],"index$":1}]}, 'EeApiEntitiesSshCertificate', {"POST /api/v4/groups/{id}/ssh_certificates":{"protocol":"http","parameters":[{"in":"path","name":"id","type":"integer","format":"int32","required":true,"index$":0},{"name":"postApiV4GroupsIdSshCertificates","in":"body","required":true,"schema":{"type":"object","properties":{"title":{"type":"string","description":"The title of the ssh certificate"},"key":{"type":"string","description":"The key of the ssh certificate"}},"required":["title","key"],"description":"Create a ssh certificate for a group.","x-ref":"#/definitions/postApiV4GroupsIdSshCertificates"},"index$":1}]},"GET /api/v4/groups/{id}/ssh_certificates":{"protocol":"http","parameters":[{"in":"query","name":"page","description":"Current page number","type":"integer","format":"int32","default":1,"required":false,"example":1,"index$":0},{"in":"query","name":"per_page","description":"Number of items per page","type":"integer","format":"int32","default":20,"required":false,"example":20,"index$":1},{"in":"path","name":"id","type":"integer","format":"int32","required":true,"index$":2}]}})
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
  
