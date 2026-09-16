

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


describe('ApiEntitiesUserWithAdminEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesUserWithAdmin()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_user_with_admin.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"key","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"value","req":false,"type":"`$STRING`","index$":1}],"name":"api_entities_user_with_admin","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"example":"ba:81:59:68:d7:6c:cd:02:02:bf:6a:9b:55:4e:af:d1","kind":"query","name":"fingerprint","orig":"fingerprint","reqd":true,"type":"`$ANY`","index$":0}]},"contract":{"id":"GET /api/v4/keys","json":"{\"operationId\":\"getApiV4Keys\",\"parameters\":[{\"description\":\"The fingerprint of an SSH key\",\"example\":\"ba:81:59:68:d7:6c:cd:02:02:bf:6a:9b:55:4e:af:d1\",\"in\":\"query\",\"name\":\"fingerprint\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get user by fingerprint of SSH key\",\"schema\":{\"description\":\"API_Entities_UserWithAdmin model\",\"properties\":{\"avatar_path\":{\"example\":\"/user/avatar/28/The-Big-Lebowski-400-400.png\",\"type\":\"string\"},\"avatar_url\":{\"example\":\"https://gravatar.com/avatar/1\",\"type\":\"string\"},\"bio\":{\"type\":\"string\"},\"bot\":{\"type\":\"string\"},\"can_create_group\":{\"example\":true,\"type\":\"boolean\"},\"can_create_project\":{\"example\":true,\"type\":\"boolean\"},\"color_scheme_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"commit_email\":{\"type\":\"string\"},\"confirmed_at\":{\"example\":\"2015-09-03T07:24:01.670Z\",\"format\":\"date-time\",\"type\":\"string\"},\"created_at\":{\"type\":\"string\"},\"created_by\":{\"description\":\"API_Entities_UserBasic model\",\"properties\":{\"avatar_path\":{\"example\":\"/user/avatar/28/The-Big-Lebowski-400-400.png\",\"type\":\"string\"},\"avatar_url\":{\"example\":\"https://gravatar.com/avatar/1\",\"type\":\"string\"},\"custom_attributes\":{\"items\":{\"description\":\"API_Entities_CustomAttribute model\",\"properties\":{\"key\":{\"example\":\"foo\",\"type\":\"string\"},\"value\":{\"example\":\"bar\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"locked\":{\"type\":\"boolean\"},\"name\":{\"example\":\"Administrator\",\"type\":\"string\"},\"public_email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"state\":{\"example\":\"active\",\"type\":\"string\"},\"username\":{\"example\":\"admin\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/root\",\"type\":\"string\"}},\"type\":\"object\"},\"current_sign_in_at\":{\"example\":\"2015-09-03T07:24:01.670Z\",\"format\":\"date-time\",\"type\":\"string\"},\"custom_attributes\":{\"items\":{\"description\":\"API_Entities_CustomAttribute model\",\"properties\":{\"key\":{\"example\":\"foo\",\"type\":\"string\"},\"value\":{\"example\":\"bar\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"discord\":{\"type\":\"string\"},\"email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"enterprise_group_associated_at\":{\"type\":\"string\"},\"enterprise_group_id\":{\"type\":\"string\"},\"external\":{\"type\":\"string\"},\"extra_shared_runners_minutes_limit\":{\"type\":\"string\"},\"followers\":{\"type\":\"string\"},\"following\":{\"type\":\"string\"},\"github\":{\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"identities\":{\"properties\":{\"extern_uid\":{\"type\":\"string\"},\"provider\":{\"type\":\"string\"},\"saml_provider_id\":{\"type\":\"string\"}},\"type\":\"object\"},\"is_admin\":{\"type\":\"string\"},\"is_auditor\":{\"type\":\"string\"},\"is_followed\":{\"type\":\"string\"},\"job_title\":{\"type\":\"string\"},\"last_activity_on\":{\"example\":\"2015-09-03T07:24:01.670Z\",\"format\":\"date-time\",\"type\":\"string\"},\"last_sign_in_at\":{\"example\":\"2015-09-03T07:24:01.670Z\",\"format\":\"date-time\",\"type\":\"string\"},\"linkedin\":{\"type\":\"string\"},\"local_time\":{\"type\":\"string\"},\"location\":{\"type\":\"string\"},\"locked\":{\"type\":\"boolean\"},\"name\":{\"example\":\"Administrator\",\"type\":\"string\"},\"namespace_id\":{\"type\":\"string\"},\"note\":{\"type\":\"string\"},\"organization\":{\"type\":\"string\"},\"preferred_language\":{\"example\":\"en\",\"type\":\"string\"},\"private_profile\":{\"example\":\"null\",\"type\":\"boolean\"},\"projects_limit\":{\"example\":10,\"format\":\"int32\",\"type\":\"integer\"},\"pronouns\":{\"type\":\"string\"},\"provisioned_by_group_id\":{\"type\":\"string\"},\"public_email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"scim_identities\":{\"properties\":{\"active\":{\"type\":\"string\"},\"extern_uid\":{\"type\":\"string\"},\"group_id\":{\"type\":\"string\"}},\"type\":\"object\"},\"shared_runners_minutes_limit\":{\"type\":\"string\"},\"state\":{\"example\":\"active\",\"type\":\"string\"},\"theme_id\":{\"example\":2,\"format\":\"int32\",\"type\":\"integer\"},\"twitter\":{\"type\":\"string\"},\"two_factor_enabled\":{\"example\":true,\"type\":\"boolean\"},\"username\":{\"example\":\"admin\",\"type\":\"string\"},\"using_license_seat\":{\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/root\",\"type\":\"string\"},\"website_url\":{\"type\":\"string\"},\"work_information\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/keys","segments":[{"lit":"api"},{"lit":"v4"},{"lit":"keys"}],"select":{"exist":["fingerprint"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"api_entities_user_with_admin","name__orig":"api_entities_user_with_admin","Name":"ApiEntitiesUserWithAdmin","name_":"api_entities_user_with_admin","name-":"api-entities-user-with-admin","NAME":"API_ENTITIES_USER_WITH_ADMIN","index$":168}, {"active":true,"entity":"api_entities_user_with_admin","key$":"BasicApiEntitiesUserWithAdminFlow","kind":"basic","name":"BasicApiEntitiesUserWithAdminFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"api_entities_user_with_admin_ref01"}}],"index$":0}]}, 'ApiEntitiesUserWithAdmin')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let api_entities_user_with_admin_ref01_data = Object.values(setup.data.existing.api_entities_user_with_admin)[0] as any

    // LIST
    const api_entities_user_with_admin_ref01_ent = client.ApiEntitiesUserWithAdmin()
    const api_entities_user_with_admin_ref01_match: any = {}

    const api_entities_user_with_admin_ref01_list = (await api_entities_user_with_admin_ref01_ent.list(api_entities_user_with_admin_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_user_with_admin/ApiEntitiesUserWithAdminTestData.json')

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
    ['api_entities_user_with_admin01','api_entities_user_with_admin02','api_entities_user_with_admin03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_USER_WITH_ADMIN_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_USER_WITH_ADMIN_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_USER_WITH_ADMIN_ENTID']
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
  
