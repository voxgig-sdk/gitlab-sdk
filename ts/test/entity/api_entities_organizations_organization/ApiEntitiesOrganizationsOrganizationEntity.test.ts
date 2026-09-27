

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


describe('ApiEntitiesOrganizationsOrganizationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesOrganizationsOrganization()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_organizations_organization.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"api_entities_organizations_organization","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/v4/organizations","source":"swagger2","version":2},"g":{"query":[{"a":true,"k":"query","n":"post_api_v4_organization","or":"post_api_v4_organization","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/api/v4/organizations","q":{"exist":["post_api_v4_organization"]},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"organizations"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"api_entities_organizations_organization","name__orig":"api_entities_organizations_organization","Name":"ApiEntitiesOrganizationsOrganization","name_":"api_entities_organizations_organization","name-":"api-entities-organizations-organization","NAME":"API_ENTITIES_ORGANIZATIONS_ORGANIZATION","index$":109}, {"active":true,"entity":"api_entities_organizations_organization","key$":"BasicApiEntitiesOrganizationsOrganizationFlow","kind":"basic","name":"BasicApiEntitiesOrganizationsOrganizationFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"api_entities_organizations_organization_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'ApiEntitiesOrganizationsOrganization', {"POST /api/v4/organizations":{"protocol":"http","parameters":[{"name":"postApiV4Organizations","in":"body","required":true,"schema":{"type":"object","properties":{"name":{"type":"string","description":"The name of the organization"},"path":{"type":"string","description":"The path of the organization"},"description":{"type":"string","description":"The description of the organization"},"avatar":{"type":"file","description":"The avatar image for the organization"}},"required":["name","path"],"description":"Create an organization","x-ref":"#/definitions/postApiV4Organizations"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const api_entities_organizations_organization_ref01_ent = client.ApiEntitiesOrganizationsOrganization()
    let api_entities_organizations_organization_ref01_data = setup.data.new.api_entities_organizations_organization['api_entities_organizations_organization_ref01']

    api_entities_organizations_organization_ref01_data = (await api_entities_organizations_organization_ref01_ent.create(api_entities_organizations_organization_ref01_data)).data()
    assert(null != api_entities_organizations_organization_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_organizations_organization/ApiEntitiesOrganizationsOrganizationTestData.json')

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
    ['api_entities_organizations_organization01','api_entities_organizations_organization02','api_entities_organizations_organization03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_ORGANIZATIONS_ORGANIZATION_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_ORGANIZATIONS_ORGANIZATION_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_ORGANIZATIONS_ORGANIZATION_ENTID']
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
  
