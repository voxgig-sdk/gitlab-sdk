

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


describe('ApiEntitiesUserPublicEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesUserPublic()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_user_public.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"avatar_path":{"a":true,"h":"Avatar Path","n":"avatar_path","r":false,"t":"`$STRING`","key$":"avatar_path","index$":0},"avatar_url":{"a":true,"h":"Avatar Url","n":"avatar_url","r":false,"t":"`$STRING`","key$":"avatar_url","index$":1},"bio":{"a":true,"h":"Bio","n":"bio","r":false,"t":"`$STRING`","key$":"bio","index$":2},"bot":{"a":true,"h":"Bot","n":"bot","r":false,"t":"`$STRING`","key$":"bot","index$":3},"can_create_group":{"a":true,"h":"Can Create Group","n":"can_create_group","r":false,"t":"`$BOOLEAN`","key$":"can_create_group","index$":4},"can_create_project":{"a":true,"h":"Can Create Project","n":"can_create_project","r":false,"t":"`$BOOLEAN`","key$":"can_create_project","index$":5},"color_scheme_id":{"a":true,"fo":"int32","h":"Color Scheme Id","n":"color_scheme_id","r":false,"t":"`$INTEGER`","key$":"color_scheme_id","index$":6},"commit_email":{"a":true,"h":"Commit Email","n":"commit_email","r":false,"t":"`$STRING`","key$":"commit_email","index$":7},"confirmed_at":{"a":true,"fo":"date-time","h":"Confirmed At","n":"confirmed_at","r":false,"t":"`$STRING`","key$":"confirmed_at","index$":8},"created_at":{"a":true,"h":"Created At","n":"created_at","r":false,"t":"`$STRING`","key$":"created_at","index$":9},"current_sign_in_at":{"a":true,"fo":"date-time","h":"Current Sign In At","n":"current_sign_in_at","r":false,"t":"`$STRING`","key$":"current_sign_in_at","index$":10},"custom_attributes":{"a":true,"h":"Custom Attributes","n":"custom_attributes","r":false,"t":"`$ARRAY`","key$":"custom_attributes","index$":11},"discord":{"a":true,"h":"Discord","n":"discord","r":false,"t":"`$STRING`","key$":"discord","index$":12},"email":{"a":true,"h":"Email","n":"email","r":false,"t":"`$STRING`","key$":"email","index$":13},"external":{"a":true,"h":"External","n":"external","r":false,"t":"`$STRING`","key$":"external","index$":14},"extra_shared_runners_minutes_limit":{"a":true,"h":"Extra Shared Runners Minutes Limit","n":"extra_shared_runners_minutes_limit","r":false,"t":"`$STRING`","key$":"extra_shared_runners_minutes_limit","index$":15},"followers":{"a":true,"h":"Followers","n":"followers","r":false,"t":"`$STRING`","key$":"followers","index$":16},"following":{"a":true,"h":"Following","n":"following","r":false,"t":"`$STRING`","key$":"following","index$":17},"github":{"a":true,"h":"Github","n":"github","r":false,"t":"`$STRING`","key$":"github","index$":18},"id":{"a":true,"fo":"int32","h":"Id","n":"id","r":false,"t":"`$INTEGER`","key$":"id","index$":19},"identities":{"a":true,"h":"Identities","n":"identities","r":false,"t":"`$OBJECT`","key$":"identities","index$":20},"is_followed":{"a":true,"h":"Is Followed","n":"is_followed","r":false,"t":"`$BOOLEAN`","key$":"is_followed","index$":21},"job_title":{"a":true,"h":"Job Title","n":"job_title","r":false,"t":"`$STRING`","key$":"job_title","index$":22},"key":{"a":true,"h":"Key","n":"key","r":false,"t":"`$STRING`","key$":"key","index$":23},"last_activity_on":{"a":true,"fo":"date-time","h":"Last Activity On","n":"last_activity_on","r":false,"t":"`$STRING`","key$":"last_activity_on","index$":24},"last_sign_in_at":{"a":true,"fo":"date-time","h":"Last Sign In At","n":"last_sign_in_at","r":false,"t":"`$STRING`","key$":"last_sign_in_at","index$":25},"linkedin":{"a":true,"h":"Linkedin","n":"linkedin","r":false,"t":"`$STRING`","key$":"linkedin","index$":26},"local_time":{"a":true,"h":"Local Time","n":"local_time","r":false,"t":"`$STRING`","key$":"local_time","index$":27},"location":{"a":true,"h":"Location","n":"location","r":false,"t":"`$STRING`","key$":"location","index$":28},"locked":{"a":true,"h":"Locked","n":"locked","r":false,"t":"`$BOOLEAN`","key$":"locked","index$":29},"name":{"a":true,"h":"Name","n":"name","r":false,"t":"`$STRING`","key$":"name","index$":30},"organization":{"a":true,"h":"Organization","n":"organization","r":false,"t":"`$STRING`","key$":"organization","index$":31},"preferred_language":{"a":true,"h":"Preferred Language","n":"preferred_language","r":false,"t":"`$STRING`","key$":"preferred_language","index$":32},"private_profile":{"a":true,"h":"Private Profile","n":"private_profile","r":false,"t":"`$BOOLEAN`","key$":"private_profile","index$":33},"projects_limit":{"a":true,"fo":"int32","h":"Projects Limit","n":"projects_limit","r":false,"t":"`$INTEGER`","key$":"projects_limit","index$":34},"pronouns":{"a":true,"h":"Pronouns","n":"pronouns","r":false,"t":"`$STRING`","key$":"pronouns","index$":35},"public_email":{"a":true,"h":"Public Email","n":"public_email","r":false,"t":"`$STRING`","key$":"public_email","index$":36},"scim_identities":{"a":true,"h":"Scim Identities","n":"scim_identities","r":false,"t":"`$OBJECT`","key$":"scim_identities","index$":37},"shared_runners_minutes_limit":{"a":true,"h":"Shared Runners Minutes Limit","n":"shared_runners_minutes_limit","r":false,"t":"`$STRING`","key$":"shared_runners_minutes_limit","index$":38},"state":{"a":true,"h":"State","n":"state","r":false,"t":"`$STRING`","key$":"state","index$":39},"theme_id":{"a":true,"fo":"int32","h":"Theme Id","n":"theme_id","r":false,"t":"`$INTEGER`","key$":"theme_id","index$":40},"twitter":{"a":true,"h":"Twitter","n":"twitter","r":false,"t":"`$STRING`","key$":"twitter","index$":41},"two_factor_enabled":{"a":true,"h":"Two Factor Enabled","n":"two_factor_enabled","r":false,"t":"`$BOOLEAN`","key$":"two_factor_enabled","index$":42},"username":{"a":true,"h":"Username","n":"username","r":false,"t":"`$STRING`","key$":"username","index$":43},"value":{"a":true,"h":"Value","n":"value","r":false,"t":"`$STRING`","key$":"value","index$":44},"web_url":{"a":true,"h":"Web Url","n":"web_url","r":false,"t":"`$STRING`","key$":"web_url","index$":45},"website_url":{"a":true,"h":"Website Url","n":"website_url","r":false,"t":"`$STRING`","key$":"website_url","index$":46},"work_information":{"a":true,"h":"Work Information","n":"work_information","r":false,"t":"`$STRING`","key$":"work_information","index$":47}},"id":{"field":"id","name":"id"},"name":"api_entities_user_public","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/v4/groups/{id}/provisioned_users","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"group_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"active","or":"active","r":false,"t":"`$BOOLEAN`","index$":0},{"a":true,"k":"query","n":"blocked","or":"blocked","r":false,"t":"`$BOOLEAN`","index$":1},{"a":true,"k":"query","n":"created_after","or":"created_after","r":false,"t":"`$ANY`","index$":2},{"a":true,"k":"query","n":"created_before","or":"created_before","r":false,"t":"`$ANY`","index$":3},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":4},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":5},{"a":true,"k":"query","n":"search","or":"search","r":false,"t":"`$ANY`","index$":6},{"a":true,"k":"query","n":"username","or":"username","r":false,"t":"`$STRING`","index$":7}]},"k":"http","m":"GET","o":"/api/v4/groups/{id}/provisioned_users","q":{"exist":["active","blocked","created_after","created_before","group_id","page","per_page","search","username"]},"r":{"param":{"id":"group_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"provisioned_users"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /api/v4/groups/{id}/saml_users","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"group_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"active","or":"active","r":false,"t":"`$BOOLEAN`","index$":0},{"a":true,"k":"query","n":"blocked","or":"blocked","r":false,"t":"`$BOOLEAN`","index$":1},{"a":true,"k":"query","n":"created_after","or":"created_after","r":false,"t":"`$ANY`","index$":2},{"a":true,"k":"query","n":"created_before","or":"created_before","r":false,"t":"`$ANY`","index$":3},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":4},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":5},{"a":true,"k":"query","n":"search","or":"search","r":false,"t":"`$ANY`","index$":6},{"a":true,"k":"query","n":"username","or":"username","r":false,"t":"`$STRING`","index$":7}]},"k":"http","m":"GET","o":"/api/v4/groups/{id}/saml_users","q":{"exist":["active","blocked","created_after","created_before","group_id","page","per_page","search","username"]},"r":{"param":{"id":"group_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"saml_users"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.group"]]},"key$":"api_entities_user_public","name__orig":"api_entities_user_public","Name":"ApiEntitiesUserPublic","name_":"api_entities_user_public","name-":"api-entities-user-public","NAME":"API_ENTITIES_USER_PUBLIC","index$":167}, {"active":true,"entity":"api_entities_user_public","key$":"BasicApiEntitiesUserPublicFlow","kind":"basic","name":"BasicApiEntitiesUserPublicFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"group_id":"group01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"api_entities_user_public_ref01"}}],"index$":0}]}, 'ApiEntitiesUserPublic', {"GET /api/v4/groups/{id}/provisioned_users":{"protocol":"http","parameters":[{"in":"query","name":"username","description":"Return a single user with a specific username","type":"string","required":false,"index$":0},{"in":"query","name":"search","description":"Search users by name, email or username","type":"string","required":false,"index$":1},{"in":"query","name":"active","description":"Return only active users","type":"boolean","default":false,"required":false,"index$":2},{"in":"query","name":"blocked","description":"Return only blocked users","type":"boolean","default":false,"required":false,"index$":3},{"in":"query","name":"created_after","description":"Return users created after the specified time","type":"string","format":"date-time","required":false,"index$":4},{"in":"query","name":"created_before","description":"Return users created before the specified time","type":"string","format":"date-time","required":false,"index$":5},{"in":"query","name":"page","description":"Current page number","type":"integer","format":"int32","default":1,"required":false,"example":1,"index$":6},{"in":"query","name":"per_page","description":"Number of items per page","type":"integer","format":"int32","default":20,"required":false,"example":20,"index$":7},{"in":"path","name":"id","type":"integer","format":"int32","required":true,"index$":8}]},"GET /api/v4/groups/{id}/saml_users":{"protocol":"http","parameters":[{"in":"query","name":"username","description":"Return single user with a specific username.","type":"string","required":false,"index$":0},{"in":"query","name":"search","description":"Search users by name, email, username.","type":"string","required":false,"index$":1},{"in":"query","name":"active","description":"Return only active users.","type":"boolean","default":false,"required":false,"index$":2},{"in":"query","name":"blocked","description":"Return only blocked users.","type":"boolean","default":false,"required":false,"index$":3},{"in":"query","name":"created_after","description":"Return users created after the specified time.","type":"string","format":"date-time","required":false,"index$":4},{"in":"query","name":"created_before","description":"Return users created before the specified time.","type":"string","format":"date-time","required":false,"index$":5},{"in":"query","name":"page","description":"Current page number","type":"integer","format":"int32","default":1,"required":false,"example":1,"index$":6},{"in":"query","name":"per_page","description":"Number of items per page","type":"integer","format":"int32","default":20,"required":false,"example":20,"index$":7},{"in":"path","name":"id","type":"integer","format":"int32","required":true,"index$":8}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let api_entities_user_public_ref01_data = Object.values(setup.data.existing.api_entities_user_public)[0] as any

    // LIST
    const api_entities_user_public_ref01_ent = client.ApiEntitiesUserPublic()
    const api_entities_user_public_ref01_match: any = {}
    api_entities_user_public_ref01_match['group_id'] = setup.idmap['group01']

    const api_entities_user_public_ref01_list = (await api_entities_user_public_ref01_ent.list(api_entities_user_public_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_user_public/ApiEntitiesUserPublicTestData.json')

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
    ['api_entities_user_public01','api_entities_user_public02','api_entities_user_public03','group01','group02','group03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_USER_PUBLIC_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_USER_PUBLIC_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_USER_PUBLIC_ENTID']
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
  
