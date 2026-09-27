

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


describe('EeApiEntitiesBillableMembershipEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.EeApiEntitiesBillableMembership()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'ee_api_entities_billable_membership.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"custom_role":{"a":true,"h":"Custom Role","n":"custom_role","r":false,"t":"`$STRING`","key$":"custom_role","index$":0},"integer_value":{"a":true,"h":"Integer Value","n":"integer_value","r":false,"t":"`$STRING`","key$":"integer_value","index$":1},"string_value":{"a":true,"h":"String Value","n":"string_value","r":false,"t":"`$STRING`","key$":"string_value","index$":2}},"name":"ee_api_entities_billable_membership","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v4/groups/{id}/billable_members/{user_id}/indirect","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"billable_member_id","or":"user_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"group_id","or":"id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/api/v4/groups/{id}/billable_members/{user_id}/indirect","q":{"exist":["billable_member_id","group_id","page","per_page"]},"r":{"param":{"id":"group_id","user_id":"billable_member_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"billable_members"},{"var":"billable_member_id"},{"lit":"indirect"}],"t":{"req":"`reqdata`","res":"`body.access_level`"},"index$":0},{"a":true,"co":{"id":"GET /api/v4/groups/{id}/billable_members/{user_id}/memberships","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"billable_member_id","or":"user_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"group_id","or":"id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/api/v4/groups/{id}/billable_members/{user_id}/memberships","q":{"exist":["billable_member_id","group_id","page","per_page"]},"r":{"param":{"id":"group_id","user_id":"billable_member_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"billable_members"},{"var":"billable_member_id"},{"lit":"memberships"}],"t":{"req":"`reqdata`","res":"`body.access_level`"},"index$":1}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.group"]]},"key$":"ee_api_entities_billable_membership","name__orig":"ee_api_entities_billable_membership","Name":"EeApiEntitiesBillableMembership","name_":"ee_api_entities_billable_membership","name-":"ee-api-entities-billable-membership","NAME":"EE_API_ENTITIES_BILLABLE_MEMBERSHIP","index$":196}, {"active":true,"entity":"ee_api_entities_billable_membership","key$":"BasicEeApiEntitiesBillableMembershipFlow","kind":"basic","name":"BasicEeApiEntitiesBillableMembershipFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"ee_api_entities_billable_membership_ref01","srcdatavar":"ee_api_entities_billable_membership_ref01_data","suffix":"_dt0"},"m":{"group_id":"group01","id":"ee_api_entities_billable_membership01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-ee_api_entities_billable_membership_ref01"}}],"index$":0}]}, 'EeApiEntitiesBillableMembership', {"GET /api/v4/groups/{id}/billable_members/{user_id}/indirect":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID of a group","type":"string","required":true,"index$":0},{"in":"path","name":"user_id","description":"The user ID of the member","type":"integer","format":"int32","required":true,"index$":1},{"in":"query","name":"page","description":"Current page number","type":"integer","format":"int32","default":1,"required":false,"example":1,"index$":2},{"in":"query","name":"per_page","description":"Number of items per page","type":"integer","format":"int32","default":20,"required":false,"example":20,"index$":3}]},"GET /api/v4/groups/{id}/billable_members/{user_id}/memberships":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID of a group","type":"string","required":true,"index$":0},{"in":"path","name":"user_id","description":"The user ID of the member","type":"integer","format":"int32","required":true,"index$":1},{"in":"query","name":"page","description":"Current page number","type":"integer","format":"int32","default":1,"required":false,"example":1,"index$":2},{"in":"query","name":"per_page","description":"Number of items per page","type":"integer","format":"int32","default":20,"required":false,"example":20,"index$":3}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let ee_api_entities_billable_membership_ref01_data = Object.values(setup.data.existing.ee_api_entities_billable_membership)[0] as any

    // LOAD: skipped — no entity id field and load requires path params.
    // Entity-var is declared here so later flow steps still compile.
    const ee_api_entities_billable_membership_ref01_ent = client.EeApiEntitiesBillableMembership()


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/ee_api_entities_billable_membership/EeApiEntitiesBillableMembershipTestData.json')

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
    ['ee_api_entities_billable_membership01','ee_api_entities_billable_membership02','ee_api_entities_billable_membership03','group01','group02','group03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_EE_API_ENTITIES_BILLABLE_MEMBERSHIP_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_EE_API_ENTITIES_BILLABLE_MEMBERSHIP_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_EE_API_ENTITIES_BILLABLE_MEMBERSHIP_ENTID']
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
  
