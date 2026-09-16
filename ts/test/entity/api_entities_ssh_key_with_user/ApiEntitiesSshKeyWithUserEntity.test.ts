

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


describe('ApiEntitiesSshKeyWithUserEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesSshKeyWithUser()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_ssh_key_with_user.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"avatar_path","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"avatar_url","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"bio","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"bot","req":false,"type":"`$STRING`","index$":3},{"active":true,"name":"can_create_group","req":false,"type":"`$BOOLEAN`","index$":4},{"active":true,"name":"can_create_project","req":false,"type":"`$BOOLEAN`","index$":5},{"active":true,"format":"int32","name":"color_scheme_id","req":false,"type":"`$INTEGER`","index$":6},{"active":true,"name":"commit_email","req":false,"type":"`$STRING`","index$":7},{"active":true,"format":"date-time","name":"confirmed_at","req":false,"type":"`$STRING`","index$":8},{"active":true,"name":"created_at","req":false,"type":"`$STRING`","index$":9},{"active":true,"format":"date-time","name":"current_sign_in_at","req":false,"type":"`$STRING`","index$":10},{"active":true,"name":"custom_attributes","req":false,"type":"`$ARRAY`","index$":11},{"active":true,"name":"discord","req":false,"type":"`$STRING`","index$":12},{"active":true,"name":"email","req":false,"type":"`$STRING`","index$":13},{"active":true,"name":"external","req":false,"type":"`$STRING`","index$":14},{"active":true,"name":"extra_shared_runners_minutes_limit","req":false,"type":"`$STRING`","index$":15},{"active":true,"name":"followers","req":false,"type":"`$STRING`","index$":16},{"active":true,"name":"following","req":false,"type":"`$STRING`","index$":17},{"active":true,"name":"github","req":false,"type":"`$STRING`","index$":18},{"active":true,"format":"int32","name":"id","req":false,"type":"`$INTEGER`","index$":19},{"active":true,"name":"identities","req":false,"type":"`$OBJECT`","index$":20},{"active":true,"name":"is_followed","req":false,"type":"`$BOOLEAN`","index$":21},{"active":true,"name":"job_title","req":false,"type":"`$STRING`","index$":22},{"active":true,"format":"date-time","name":"last_activity_on","req":false,"type":"`$STRING`","index$":23},{"active":true,"format":"date-time","name":"last_sign_in_at","req":false,"type":"`$STRING`","index$":24},{"active":true,"name":"linkedin","req":false,"type":"`$STRING`","index$":25},{"active":true,"name":"local_time","req":false,"type":"`$STRING`","index$":26},{"active":true,"name":"location","req":false,"type":"`$STRING`","index$":27},{"active":true,"name":"locked","req":false,"type":"`$BOOLEAN`","index$":28},{"active":true,"name":"name","req":false,"type":"`$STRING`","index$":29},{"active":true,"name":"organization","req":false,"type":"`$STRING`","index$":30},{"active":true,"name":"preferred_language","req":false,"type":"`$STRING`","index$":31},{"active":true,"name":"private_profile","req":false,"type":"`$BOOLEAN`","index$":32},{"active":true,"format":"int32","name":"projects_limit","req":false,"type":"`$INTEGER`","index$":33},{"active":true,"name":"pronouns","req":false,"type":"`$STRING`","index$":34},{"active":true,"name":"public_email","req":false,"type":"`$STRING`","index$":35},{"active":true,"name":"scim_identities","req":false,"type":"`$OBJECT`","index$":36},{"active":true,"name":"shared_runners_minutes_limit","req":false,"type":"`$STRING`","index$":37},{"active":true,"name":"state","req":false,"type":"`$STRING`","index$":38},{"active":true,"format":"int32","name":"theme_id","req":false,"type":"`$INTEGER`","index$":39},{"active":true,"name":"twitter","req":false,"type":"`$STRING`","index$":40},{"active":true,"name":"two_factor_enabled","req":false,"type":"`$BOOLEAN`","index$":41},{"active":true,"name":"username","req":false,"type":"`$STRING`","index$":42},{"active":true,"name":"web_url","req":false,"type":"`$STRING`","index$":43},{"active":true,"name":"website_url","req":false,"type":"`$STRING`","index$":44},{"active":true,"name":"work_information","req":false,"type":"`$STRING`","index$":45}],"id":{"field":"id","name":"id"},"name":"api_entities_ssh_key_with_user","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":"2","kind":"param","name":"id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /api/v4/keys/{id}","json":"{\"operationId\":\"getApiV4KeysId\",\"parameters\":[{\"description\":\"The ID of an SSH key\",\"example\":\"2\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get single ssh key by id. Only available to admin users\",\"schema\":{\"description\":\"API_Entities_SSHKeyWithUser model\",\"properties\":{\"created_at\":{\"example\":\"2015-09-03T07:24:44.627Z\",\"format\":\"date-time\",\"type\":\"string\"},\"expires_at\":{\"example\":\"2020-09-03T07:24:44.627Z\",\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"key\":{\"example\":\"ssh-rsa AAAAB3NzaC1yc2EAAAABJQAAAIEAiPWx6WM4lhHNedGfBpPJNPpZ7yKu+dnn1SJejgt1256k6Yjz\\\\\\n      GGphH2TUxwKzxcKDKKezwkpfnxPkSMkuEspGRt/aZZ9wa++Oi7Qkr8prgHc4soW6NUlfDzpvZK2H5E7eQaSeP3SAwGmQKUFHCdd\\\\\\n      NaP0L+hM7zhFNzjFvpaMgJw0=\",\"type\":\"string\"},\"last_used_at\":{\"example\":\"2020-09-03T07:24:44.627Z\",\"format\":\"date-time\",\"type\":\"string\"},\"title\":{\"example\":\"Sample key 25\",\"type\":\"string\"},\"usage_type\":{\"example\":\"auth\",\"type\":\"string\"},\"user\":{\"description\":\"API_Entities_UserPublic model\",\"properties\":{\"avatar_path\":{\"example\":\"/user/avatar/28/The-Big-Lebowski-400-400.png\",\"type\":\"string\"},\"avatar_url\":{\"example\":\"https://gravatar.com/avatar/1\",\"type\":\"string\"},\"bio\":{\"type\":\"string\"},\"bot\":{\"type\":\"string\"},\"can_create_group\":{\"example\":true,\"type\":\"boolean\"},\"can_create_project\":{\"example\":true,\"type\":\"boolean\"},\"color_scheme_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"commit_email\":{\"type\":\"string\"},\"confirmed_at\":{\"example\":\"2015-09-03T07:24:01.670Z\",\"format\":\"date-time\",\"type\":\"string\"},\"created_at\":{\"type\":\"string\"},\"current_sign_in_at\":{\"example\":\"2015-09-03T07:24:01.670Z\",\"format\":\"date-time\",\"type\":\"string\"},\"custom_attributes\":{\"items\":{\"description\":\"API_Entities_CustomAttribute model\",\"properties\":{\"key\":{\"example\":\"foo\",\"type\":\"string\"},\"value\":{\"example\":\"bar\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"discord\":{\"type\":\"string\"},\"email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"external\":{\"type\":\"string\"},\"extra_shared_runners_minutes_limit\":{\"type\":\"string\"},\"followers\":{\"type\":\"string\"},\"following\":{\"type\":\"string\"},\"github\":{\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"identities\":{\"properties\":{\"extern_uid\":{\"type\":\"string\"},\"provider\":{\"type\":\"string\"},\"saml_provider_id\":{\"type\":\"string\"}},\"type\":\"object\"},\"is_followed\":{\"type\":\"string\"},\"job_title\":{\"type\":\"string\"},\"last_activity_on\":{\"example\":\"2015-09-03T07:24:01.670Z\",\"format\":\"date-time\",\"type\":\"string\"},\"last_sign_in_at\":{\"example\":\"2015-09-03T07:24:01.670Z\",\"format\":\"date-time\",\"type\":\"string\"},\"linkedin\":{\"type\":\"string\"},\"local_time\":{\"type\":\"string\"},\"location\":{\"type\":\"string\"},\"locked\":{\"type\":\"boolean\"},\"name\":{\"example\":\"Administrator\",\"type\":\"string\"},\"organization\":{\"type\":\"string\"},\"preferred_language\":{\"example\":\"en\",\"type\":\"string\"},\"private_profile\":{\"example\":\"null\",\"type\":\"boolean\"},\"projects_limit\":{\"example\":10,\"format\":\"int32\",\"type\":\"integer\"},\"pronouns\":{\"type\":\"string\"},\"public_email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"scim_identities\":{\"properties\":{\"active\":{\"type\":\"string\"},\"extern_uid\":{\"type\":\"string\"},\"group_id\":{\"type\":\"string\"}},\"type\":\"object\"},\"shared_runners_minutes_limit\":{\"type\":\"string\"},\"state\":{\"example\":\"active\",\"type\":\"string\"},\"theme_id\":{\"example\":2,\"format\":\"int32\",\"type\":\"integer\"},\"twitter\":{\"type\":\"string\"},\"two_factor_enabled\":{\"example\":true,\"type\":\"boolean\"},\"username\":{\"example\":\"admin\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/root\",\"type\":\"string\"},\"website_url\":{\"type\":\"string\"},\"work_information\":{\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/keys/{id}","segments":[{"lit":"api"},{"lit":"v4"},{"lit":"keys"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.user`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"api_entities_ssh_key_with_user","name__orig":"api_entities_ssh_key_with_user","Name":"ApiEntitiesSshKeyWithUser","name_":"api_entities_ssh_key_with_user","name-":"api-entities-ssh-key-with-user","NAME":"API_ENTITIES_SSH_KEY_WITH_USER","index$":156}, {"active":true,"entity":"api_entities_ssh_key_with_user","key$":"BasicApiEntitiesSshKeyWithUserFlow","kind":"basic","name":"BasicApiEntitiesSshKeyWithUserFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"api_entities_ssh_key_with_user_ref01","srcdatavar":"api_entities_ssh_key_with_user_ref01_data","suffix":"_dt0"},"match":{"id":"api_entities_ssh_key_with_user01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_ssh_key_with_user_ref01"}}],"index$":0}]}, 'ApiEntitiesSshKeyWithUser')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let api_entities_ssh_key_with_user_ref01_data = Object.values(setup.data.existing.api_entities_ssh_key_with_user)[0] as any

    // LOAD
    const api_entities_ssh_key_with_user_ref01_ent = client.ApiEntitiesSshKeyWithUser()
    const api_entities_ssh_key_with_user_ref01_match_dt0: any = {}
    api_entities_ssh_key_with_user_ref01_match_dt0.id = api_entities_ssh_key_with_user_ref01_data.id
    const api_entities_ssh_key_with_user_ref01_data_dt0 = (await api_entities_ssh_key_with_user_ref01_ent.load(api_entities_ssh_key_with_user_ref01_match_dt0)).data()
    assert(api_entities_ssh_key_with_user_ref01_data_dt0.id === api_entities_ssh_key_with_user_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_ssh_key_with_user/ApiEntitiesSshKeyWithUserTestData.json')

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
    ['api_entities_ssh_key_with_user01','api_entities_ssh_key_with_user02','api_entities_ssh_key_with_user03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_SSH_KEY_WITH_USER_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_SSH_KEY_WITH_USER_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_SSH_KEY_WITH_USER_ENTID']
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
  
