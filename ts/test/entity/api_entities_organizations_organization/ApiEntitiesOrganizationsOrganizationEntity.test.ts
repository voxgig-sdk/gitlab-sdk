

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[],"name":"api_entities_organizations_organization","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"post_api_v4_organization","orig":"post_api_v4_organization","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"POST /api/v4/organizations","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4Organizations\",\"parameters\":[{\"in\":\"body\",\"name\":\"postApiV4Organizations\",\"required\":true,\"schema\":{\"description\":\"Create an organization\",\"properties\":{\"avatar\":{\"description\":\"The avatar image for the organization\",\"type\":\"file\"},\"description\":{\"description\":\"The description of the organization\",\"type\":\"string\"},\"name\":{\"description\":\"The name of the organization\",\"type\":\"string\"},\"path\":{\"description\":\"The path of the organization\",\"type\":\"string\"}},\"required\":[\"name\",\"path\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"Create an organization\",\"schema\":{\"description\":\"API_Entities_Organizations_Organization model\",\"properties\":{\"avatar_url\":{\"example\":\"https://example.com/uploads/-/system/organizations/organization_detail/avatar/1/avatar.png\",\"type\":\"string\"},\"created_at\":{\"example\":\"2022-02-24T20:22:30.097Z\",\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"example\":\"My description\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"name\":{\"example\":\"GitLab\",\"type\":\"string\"},\"path\":{\"example\":\"gitlab\",\"type\":\"string\"},\"updated_at\":{\"example\":\"2022-02-24T20:22:30.097Z\",\"format\":\"date-time\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://example.com/-/organizations/gitlab\",\"type\":\"string\"}},\"type\":\"object\"}}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/organizations","segments":[{"lit":"api"},{"lit":"v4"},{"lit":"organizations"}],"select":{"exist":["post_api_v4_organization"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"api_entities_organizations_organization","name__orig":"api_entities_organizations_organization","Name":"ApiEntitiesOrganizationsOrganization","name_":"api_entities_organizations_organization","name-":"api-entities-organizations-organization","NAME":"API_ENTITIES_ORGANIZATIONS_ORGANIZATION","index$":109}, {"active":true,"entity":"api_entities_organizations_organization","key$":"BasicApiEntitiesOrganizationsOrganizationFlow","kind":"basic","name":"BasicApiEntitiesOrganizationsOrganizationFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"api_entities_organizations_organization_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0}]}, 'ApiEntitiesOrganizationsOrganization')
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
  
