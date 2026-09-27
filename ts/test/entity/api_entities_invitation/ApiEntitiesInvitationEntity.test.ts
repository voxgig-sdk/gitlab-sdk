

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


describe('ApiEntitiesInvitationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesInvitation()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create', 'list', 'update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_invitation.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"access_level":{"a":true,"h":"Access Level","n":"access_level","r":false,"t":"`$STRING`","key$":"access_level","index$":0},"created_at":{"a":true,"h":"Created At","n":"created_at","r":false,"t":"`$STRING`","key$":"created_at","index$":1},"created_by_name":{"a":true,"h":"Created By Name","n":"created_by_name","r":false,"t":"`$STRING`","key$":"created_by_name","index$":2},"expires_at":{"a":true,"h":"Expires At","n":"expires_at","r":false,"t":"`$STRING`","key$":"expires_at","index$":3},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":4},"invite_email":{"a":true,"h":"Invite Email","n":"invite_email","r":false,"t":"`$STRING`","key$":"invite_email","index$":5},"invite_token":{"a":true,"h":"Invite Token","n":"invite_token","r":false,"t":"`$STRING`","key$":"invite_token","index$":6},"user_name":{"a":true,"h":"User Name","n":"user_name","r":false,"t":"`$STRING`","key$":"user_name","index$":7}},"id":{"field":"id","name":"id"},"name":"api_entities_invitation","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/v4/groups/{id}/invitations","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"group_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"post_api_v4_groups_id_invitation","or":"post_api_v4_groups_id_invitation","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/api/v4/groups/{id}/invitations","q":{"exist":["group_id","post_api_v4_groups_id_invitation"]},"r":{"param":{"id":"group_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"invitations"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /api/v4/projects/{id}/invitations","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"post_api_v4_projects_id_invitation","or":"post_api_v4_projects_id_invitation","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/api/v4/projects/{id}/invitations","q":{"exist":["post_api_v4_projects_id_invitation","project_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"invitations"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/v4/groups/{id}/invitations","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"group_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"query","or":"query","r":false,"t":"`$ANY`","index$":2}]},"k":"http","m":"GET","o":"/api/v4/groups/{id}/invitations","q":{"exist":["group_id","page","per_page","query"]},"r":{"param":{"id":"group_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"invitations"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /api/v4/projects/{id}/invitations","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"query","or":"query","r":false,"t":"`$ANY`","index$":2}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/invitations","q":{"exist":["page","per_page","project_id","query"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"invitations"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"list"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /api/v4/groups/{id}/invitations/{email}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"group_id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"email","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"put_api_v4_groups_id_invitations_email","or":"put_api_v4_groups_id_invitations_email","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"PUT","o":"/api/v4/groups/{id}/invitations/{email}","q":{"exist":["group_id","id","put_api_v4_groups_id_invitations_email"]},"r":{"param":{"email":"id","id":"group_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"invitations"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"PUT /api/v4/projects/{id}/invitations/{email}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"email","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"put_api_v4_projects_id_invitations_email","or":"put_api_v4_projects_id_invitations_email","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"PUT","o":"/api/v4/projects/{id}/invitations/{email}","q":{"exist":["id","project_id","put_api_v4_projects_id_invitations_email"]},"r":{"param":{"email":"id","id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"invitations"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.group"],["$.main.kit.entity.project"]]},"key$":"api_entities_invitation","name__orig":"api_entities_invitation","Name":"ApiEntitiesInvitation","name_":"api_entities_invitation","name-":"api-entities-invitation","NAME":"API_ENTITIES_INVITATION","index$":84}, {"active":true,"entity":"api_entities_invitation","key$":"BasicApiEntitiesInvitationFlow","kind":"basic","name":"BasicApiEntitiesInvitationFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"api_entities_invitation_ref01"},"m":{"group_id":"group01","project_id":"project01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"project_id":"project01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"api_entities_invitation_ref01"}}],"index$":1},{"a":true,"d":{"project_id":"project01"},"i":{"ref":"api_entities_invitation_ref01","srcdatavar":"api_entities_invitation_ref01_data","suffix":"_up0","textfield":"access_level"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_invitation_ref01"}}],"v":[],"index$":2}]}, 'ApiEntitiesInvitation', {"POST /api/v4/groups/{id}/invitations":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The group ID","type":"string","required":true,"index$":0},{"name":"postApiV4GroupsIdInvitations","in":"body","required":true,"schema":{"type":"object","properties":{"access_level":{"type":"integer","format":"int32","description":"A valid access level (defaults: `30`, developer access level)","enum":[10,15,20,30,40,50,5]},"email":{"type":"array","description":"The email address to invite, or multiple emails separated by comma","items":{"type":"string"}},"user_id":{"type":"array","description":"The user ID of the new member or multiple IDs separated by commas.","items":{"type":"string"}},"expires_at":{"type":"string","format":"date-time","description":"Date string in the format YEAR-MONTH-DAY"},"invite_source":{"type":"string","description":"Source that triggered the member creation process","default":"invitations-api"},"member_role_id":{"type":"integer","format":"int32","description":"The ID of a member role for the invited user"}},"required":["access_level"],"description":"Invite non-members by email address to a group or project.","x-ref":"#/definitions/postApiV4GroupsIdInvitations"},"index$":1}]},"POST /api/v4/projects/{id}/invitations":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The project ID","type":"string","required":true,"index$":0},{"name":"postApiV4ProjectsIdInvitations","in":"body","required":true,"schema":{"type":"object","properties":{"access_level":{"type":"integer","format":"int32","description":"A valid access level (defaults: `30`, developer access level)","enum":[10,15,20,30,40,50,5]},"email":{"type":"array","description":"The email address to invite, or multiple emails separated by comma","items":{"type":"string"}},"user_id":{"type":"array","description":"The user ID of the new member or multiple IDs separated by commas.","items":{"type":"string"}},"expires_at":{"type":"string","format":"date-time","description":"Date string in the format YEAR-MONTH-DAY"},"invite_source":{"type":"string","description":"Source that triggered the member creation process","default":"invitations-api"},"member_role_id":{"type":"integer","format":"int32","description":"The ID of a member role for the invited user"}},"required":["access_level"],"description":"Invite non-members by email address to a group or project.","x-ref":"#/definitions/postApiV4ProjectsIdInvitations"},"index$":1}]},"GET /api/v4/groups/{id}/invitations":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The group ID","type":"string","required":true,"index$":0},{"in":"query","name":"page","description":"Current page number","type":"integer","format":"int32","default":1,"required":false,"example":1,"index$":1},{"in":"query","name":"per_page","description":"Number of items per page","type":"integer","format":"int32","default":20,"required":false,"example":20,"index$":2},{"in":"query","name":"query","description":"A query string to search for members","type":"string","required":false,"index$":3}]},"GET /api/v4/projects/{id}/invitations":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The project ID","type":"string","required":true,"index$":0},{"in":"query","name":"page","description":"Current page number","type":"integer","format":"int32","default":1,"required":false,"example":1,"index$":1},{"in":"query","name":"per_page","description":"Number of items per page","type":"integer","format":"int32","default":20,"required":false,"example":20,"index$":2},{"in":"query","name":"query","description":"A query string to search for members","type":"string","required":false,"index$":3}]},"PUT /api/v4/groups/{id}/invitations/{email}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The group ID","type":"string","required":true,"index$":0},{"in":"path","name":"email","description":"The email address of the invitation","type":"string","required":true,"index$":1},{"name":"putApiV4GroupsIdInvitationsEmail","in":"body","required":true,"schema":{"type":"object","properties":{"access_level":{"type":"integer","format":"int32","description":"A valid access level (defaults: `30`, developer access level)","enum":[10,15,20,30,40,50]},"expires_at":{"type":"string","format":"date-time","description":"Date string in ISO 8601 format (`YYYY-MM-DDTHH:MM:SSZ`)"},"member_role_id":{"type":"integer","format":"int32","description":"The ID of a member role for the invited user"}},"description":"Updates a group or project invitation.","x-ref":"#/definitions/putApiV4GroupsIdInvitationsEmail"},"index$":2}]},"PUT /api/v4/projects/{id}/invitations/{email}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The project ID","type":"string","required":true,"index$":0},{"in":"path","name":"email","description":"The email address of the invitation","type":"string","required":true,"index$":1},{"name":"putApiV4ProjectsIdInvitationsEmail","in":"body","required":true,"schema":{"type":"object","properties":{"access_level":{"type":"integer","format":"int32","description":"A valid access level (defaults: `30`, developer access level)","enum":[10,15,20,30,40,50]},"expires_at":{"type":"string","format":"date-time","description":"Date string in ISO 8601 format (`YYYY-MM-DDTHH:MM:SSZ`)"},"member_role_id":{"type":"integer","format":"int32","description":"The ID of a member role for the invited user"}},"description":"Updates a group or project invitation.","x-ref":"#/definitions/putApiV4ProjectsIdInvitationsEmail"},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const api_entities_invitation_ref01_ent = client.ApiEntitiesInvitation()
    let api_entities_invitation_ref01_data = setup.data.new.api_entities_invitation['api_entities_invitation_ref01']
    api_entities_invitation_ref01_data['group_id'] = setup.idmap['group01']
    api_entities_invitation_ref01_data['project_id'] = setup.idmap['project01']

    api_entities_invitation_ref01_data = (await api_entities_invitation_ref01_ent.create(api_entities_invitation_ref01_data)).data()
    assert(null != api_entities_invitation_ref01_data.id)


    // LIST
    const api_entities_invitation_ref01_match: any = {}
    api_entities_invitation_ref01_match['project_id'] = setup.idmap['project01']

    const api_entities_invitation_ref01_list = (await api_entities_invitation_ref01_ent.list(api_entities_invitation_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(api_entities_invitation_ref01_list, { id: api_entities_invitation_ref01_data.id })))


    // UPDATE
    const api_entities_invitation_ref01_data_up0: any = {}
    api_entities_invitation_ref01_data_up0.id = api_entities_invitation_ref01_data.id
    api_entities_invitation_ref01_data_up0 ['project_id'] = setup.idmap['project_id']

    const api_entities_invitation_ref01_markdef_up0 = { name: 'access_level', value: 'Mark01-api_entities_invitation_ref01_' + setup.now }
    ;(api_entities_invitation_ref01_data_up0 as any)[api_entities_invitation_ref01_markdef_up0.name] = api_entities_invitation_ref01_markdef_up0.value

    const api_entities_invitation_ref01_resdata_up0 = (await api_entities_invitation_ref01_ent.update(api_entities_invitation_ref01_data_up0)).data()
    assert(api_entities_invitation_ref01_resdata_up0.id === api_entities_invitation_ref01_data_up0.id)

    assert((api_entities_invitation_ref01_resdata_up0 as any)[api_entities_invitation_ref01_markdef_up0.name] === api_entities_invitation_ref01_markdef_up0.value)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_invitation/ApiEntitiesInvitationTestData.json')

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
    ['api_entities_invitation01','api_entities_invitation02','api_entities_invitation03','group01','group02','group03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_INVITATION_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_INVITATION_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_INVITATION_ENTID']
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
  
