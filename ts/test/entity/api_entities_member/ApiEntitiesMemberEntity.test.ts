

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


describe('ApiEntitiesMemberEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesMember()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_member.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"access_level":{"a":true,"h":"Access Level","n":"access_level","r":false,"t":"`$STRING`","key$":"access_level","index$":0},"avatar_path":{"a":true,"h":"Avatar Path","n":"avatar_path","r":false,"t":"`$STRING`","key$":"avatar_path","index$":1},"avatar_url":{"a":true,"h":"Avatar Url","n":"avatar_url","r":false,"t":"`$STRING`","key$":"avatar_url","index$":2},"created_at":{"a":true,"h":"Created At","n":"created_at","r":false,"t":"`$STRING`","key$":"created_at","index$":3},"created_by":{"a":true,"h":"Created By","n":"created_by","r":false,"sh":"API_Entities_UserBasic model","t":"`$OBJECT`","key$":"created_by","index$":4},"custom_attributes":{"a":true,"h":"Custom Attributes","n":"custom_attributes","r":false,"t":"`$ARRAY`","key$":"custom_attributes","index$":5},"email":{"a":true,"h":"Email","n":"email","r":false,"t":"`$STRING`","key$":"email","index$":6},"expires_at":{"a":true,"h":"Expires At","n":"expires_at","r":false,"t":"`$STRING`","key$":"expires_at","index$":7},"group_saml_identity":{"a":true,"h":"Group Saml Identity","n":"group_saml_identity","r":false,"t":"`$OBJECT`","key$":"group_saml_identity","index$":8},"group_scim_identity":{"a":true,"h":"Group Scim Identity","n":"group_scim_identity","r":false,"t":"`$OBJECT`","key$":"group_scim_identity","index$":9},"id":{"a":true,"fo":"int32","h":"Id","n":"id","r":false,"t":"`$INTEGER`","key$":"id","index$":10},"is_using_seat":{"a":true,"h":"Is Using Seat","n":"is_using_seat","r":false,"t":"`$BOOLEAN`","key$":"is_using_seat","index$":11},"key":{"a":true,"h":"Key","n":"key","r":false,"t":"`$STRING`","key$":"key","index$":12},"locked":{"a":true,"h":"Locked","n":"locked","r":false,"t":"`$BOOLEAN`","key$":"locked","index$":13},"member_role":{"a":true,"h":"Member Role","n":"member_role","r":false,"t":"`$OBJECT`","key$":"member_role","index$":14},"membership_state":{"a":true,"h":"Membership State","n":"membership_state","r":false,"t":"`$STRING`","key$":"membership_state","index$":15},"name":{"a":true,"h":"Name","n":"name","r":false,"t":"`$STRING`","key$":"name","index$":16},"override":{"a":true,"h":"Override","n":"override","r":false,"t":"`$STRING`","key$":"override","index$":17},"public_email":{"a":true,"h":"Public Email","n":"public_email","r":false,"t":"`$STRING`","key$":"public_email","index$":18},"state":{"a":true,"h":"State","n":"state","r":false,"t":"`$STRING`","key$":"state","index$":19},"username":{"a":true,"h":"Username","n":"username","r":false,"t":"`$STRING`","key$":"username","index$":20},"value":{"a":true,"h":"Value","n":"value","r":false,"t":"`$STRING`","key$":"value","index$":21},"web_url":{"a":true,"h":"Web Url","n":"web_url","r":false,"t":"`$STRING`","key$":"web_url","index$":22}},"id":{"field":"id","name":"id"},"name":"api_entities_member","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/v4/groups/{id}/members/{user_id}/override","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"group_id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"member_id","or":"user_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/api/v4/groups/{id}/members/{user_id}/override","q":{"exist":["group_id","member_id"]},"r":{"param":{"id":"group_id","user_id":"member_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"members"},{"var":"member_id"},{"lit":"override"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /api/v4/groups/{id}/members","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"group_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"post_api_v4_groups_id_member","or":"post_api_v4_groups_id_member","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/api/v4/groups/{id}/members","q":{"exist":["group_id","post_api_v4_groups_id_member"]},"r":{"param":{"id":"group_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"members"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /api/v4/projects/{id}/members","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"post_api_v4_projects_id_member","or":"post_api_v4_projects_id_member","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/api/v4/projects/{id}/members","q":{"exist":["post_api_v4_projects_id_member","project_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"members"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/v4/groups/{id}/members","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"group_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"query","or":"query","r":false,"t":"`$ANY`","index$":2},{"a":true,"k":"query","n":"show_seat_info","or":"show_seat_info","r":false,"t":"`$ANY`","index$":3},{"a":true,"k":"query","n":"skip_user","or":"skip_user","r":false,"t":"`$ANY`","index$":4},{"a":true,"k":"query","n":"user_id","or":"user_id","r":false,"t":"`$STRING`","index$":5},{"a":true,"k":"query","n":"with_saml_identity","or":"with_saml_identity","r":false,"t":"`$ANY`","index$":6}]},"k":"http","m":"GET","o":"/api/v4/groups/{id}/members","q":{"exist":["group_id","page","per_page","query","show_seat_info","skip_user","user_id","with_saml_identity"]},"r":{"param":{"id":"group_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"members"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /api/v4/projects/{id}/members","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"query","or":"query","r":false,"t":"`$ANY`","index$":2},{"a":true,"k":"query","n":"show_seat_info","or":"show_seat_info","r":false,"t":"`$ANY`","index$":3},{"a":true,"k":"query","n":"skip_user","or":"skip_user","r":false,"t":"`$ANY`","index$":4},{"a":true,"k":"query","n":"user_id","or":"user_id","r":false,"t":"`$STRING`","index$":5},{"a":true,"k":"query","n":"with_saml_identity","or":"with_saml_identity","r":false,"t":"`$ANY`","index$":6}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/members","q":{"exist":["page","per_page","project_id","query","show_seat_info","skip_user","user_id","with_saml_identity"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"members"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"GET /api/v4/groups/{id}/members/all","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"group_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"query","or":"query","r":false,"t":"`$ANY`","index$":2},{"a":true,"k":"query","n":"show_seat_info","or":"show_seat_info","r":false,"t":"`$ANY`","index$":3},{"a":true,"k":"query","n":"state","or":"state","r":false,"t":"`$ANY`","index$":4},{"a":true,"k":"query","n":"user_id","or":"user_id","r":false,"t":"`$STRING`","index$":5}]},"k":"http","m":"GET","o":"/api/v4/groups/{id}/members/all","q":{"exist":["group_id","page","per_page","query","show_seat_info","state","user_id"]},"r":{"param":{"id":"group_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"members"},{"lit":"all"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"GET /api/v4/projects/{id}/members/all","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"query","or":"query","r":false,"t":"`$ANY`","index$":2},{"a":true,"k":"query","n":"show_seat_info","or":"show_seat_info","r":false,"t":"`$ANY`","index$":3},{"a":true,"k":"query","n":"state","or":"state","r":false,"t":"`$ANY`","index$":4},{"a":true,"k":"query","n":"user_id","or":"user_id","r":false,"t":"`$STRING`","index$":5}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/members/all","q":{"exist":["page","per_page","project_id","query","show_seat_info","state","user_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"members"},{"lit":"all"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3},{"a":true,"co":{"id":"GET /api/v4/groups/{id}/billable_members","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"group_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"search","or":"search","r":false,"t":"`$ANY`","index$":2},{"a":true,"k":"query","n":"sort","or":"sort","r":false,"t":"`$ANY`","index$":3}]},"k":"http","m":"GET","o":"/api/v4/groups/{id}/billable_members","q":{"exist":["group_id","page","per_page","search","sort"]},"r":{"param":{"id":"group_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"billable_members"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":4}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v4/groups/{id}/members/{user_id}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"group_id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"user_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/api/v4/groups/{id}/members/{user_id}","q":{"exist":["group_id","id"]},"r":{"param":{"id":"group_id","user_id":"id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"members"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /api/v4/groups/{id}/members/all/{user_id}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"group_id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"user_id","or":"user_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/api/v4/groups/{id}/members/all/{user_id}","q":{"exist":["group_id","user_id"]},"r":{"param":{"id":"group_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"members"},{"lit":"all"},{"var":"user_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"GET /api/v4/projects/{id}/members/{user_id}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"user_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/members/{user_id}","q":{"exist":["id","project_id"]},"r":{"param":{"id":"project_id","user_id":"id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"members"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"GET /api/v4/projects/{id}/members/all/{user_id}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"user_id","or":"user_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/members/all/{user_id}","q":{"exist":["project_id","user_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"members"},{"lit":"all"},{"var":"user_id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /api/v4/groups/{id}/members/{user_id}/override","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"group_id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"member_id","or":"user_id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/api/v4/groups/{id}/members/{user_id}/override","q":{"exist":["group_id","member_id"]},"r":{"param":{"id":"group_id","user_id":"member_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"members"},{"var":"member_id"},{"lit":"override"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /api/v4/groups/{id}/members/{user_id}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"group_id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"user_id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"put_api_v4_groups_id_members_user_id","or":"put_api_v4_groups_id_members_user_id","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"PUT","o":"/api/v4/groups/{id}/members/{user_id}","q":{"exist":["group_id","id","put_api_v4_groups_id_members_user_id"]},"r":{"param":{"id":"group_id","user_id":"id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"members"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"PUT /api/v4/groups/{id}/members/{user_id}/state","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"group_id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"member_id","or":"user_id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"put_api_v4_groups_id_members_user_id_state","or":"put_api_v4_groups_id_members_user_id_state","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"PUT","o":"/api/v4/groups/{id}/members/{user_id}/state","q":{"$action":"state","exist":["group_id","member_id","put_api_v4_groups_id_members_user_id_state"]},"r":{"param":{"id":"group_id","user_id":"member_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"members"},{"var":"member_id"},{"lit":"state"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"PUT /api/v4/projects/{id}/members/{user_id}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"user_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"put_api_v4_projects_id_members_user_id","or":"put_api_v4_projects_id_members_user_id","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"PUT","o":"/api/v4/projects/{id}/members/{user_id}","q":{"exist":["id","project_id","put_api_v4_projects_id_members_user_id"]},"r":{"param":{"id":"project_id","user_id":"id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"members"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.group"],["$.main.kit.entity.project"],["$.main.kit.entity.group"],["$.main.kit.entity.group","$.main.kit.entity.member"],["$.main.kit.entity.project"]]},"key$":"api_entities_member","name__orig":"api_entities_member","Name":"ApiEntitiesMember","name_":"api_entities_member","name-":"api-entities-member","NAME":"API_ENTITIES_MEMBER","index$":91}, {"active":true,"entity":"api_entities_member","key$":"BasicApiEntitiesMemberFlow","kind":"basic","name":"BasicApiEntitiesMemberFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"api_entities_member_ref01"},"m":{"group_id":"group01","project_id":"project01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"group_id":"group01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"api_entities_member_ref01"}}],"index$":1},{"a":true,"d":{"project_id":"project01"},"i":{"ref":"api_entities_member_ref01","srcdatavar":"api_entities_member_ref01_data","suffix":"_up0","textfield":"access_level"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_member_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"api_entities_member_ref01","srcdatavar":"api_entities_member_ref01_data","suffix":"_dt0"},"m":{"id":"api_entities_member01","project_id":"project01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_member_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"api_entities_member_ref01","suffix":"_rm0"},"m":{"group_id":"group01","id":"api_entities_member01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{"group_id":"group01"},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"api_entities_member_ref01"}}],"index$":5}]}, 'ApiEntitiesMember', {"POST /api/v4/groups/{id}/members/{user_id}/override":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID of a group","type":"string","required":true,"index$":0},{"in":"path","name":"user_id","description":"The user ID of the member","type":"integer","format":"int32","required":true,"index$":1}]},"POST /api/v4/groups/{id}/members":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The group ID","type":"string","required":true,"index$":0},{"name":"postApiV4GroupsIdMembers","in":"body","required":true,"schema":{"type":"object","properties":{"access_level":{"type":"integer","format":"int32","description":"A valid access level."},"user_id":{"type":"integer","format":"int32","description":"The user ID of the new member or multiple IDs separated by commas."},"username":{"type":"string","description":"The username of the new member or multiple usernames separated by commas."},"expires_at":{"type":"string","format":"date-time","description":"Date string in the format YEAR-MONTH-DAY"},"invite_source":{"type":"string","description":"Source that triggered the member creation process","default":"members-api"}},"required":["access_level"],"description":"Adds a member to a group or project.","x-ref":"#/definitions/postApiV4GroupsIdMembers"},"index$":1}]},"POST /api/v4/projects/{id}/members":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The project ID","type":"string","required":true,"index$":0},{"name":"postApiV4ProjectsIdMembers","in":"body","required":true,"schema":{"type":"object","properties":{"access_level":{"type":"integer","format":"int32","description":"A valid access level."},"user_id":{"type":"integer","format":"int32","description":"The user ID of the new member or multiple IDs separated by commas."},"username":{"type":"string","description":"The username of the new member or multiple usernames separated by commas."},"expires_at":{"type":"string","format":"date-time","description":"Date string in the format YEAR-MONTH-DAY"},"invite_source":{"type":"string","description":"Source that triggered the member creation process","default":"members-api"}},"required":["access_level"],"description":"Adds a member to a group or project.","x-ref":"#/definitions/postApiV4ProjectsIdMembers"},"index$":1}]},"GET /api/v4/groups/{id}/members":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The group ID","type":"string","required":true,"index$":0},{"in":"query","name":"query","description":"A query string to search for members","type":"string","required":false,"index$":1},{"in":"query","name":"user_ids","description":"Array of user ids to look up for membership","type":"array","items":{"type":"integer","format":"int32"},"required":false,"index$":2},{"in":"query","name":"skip_users","description":"Array of user ids to be skipped for membership","type":"array","items":{"type":"integer","format":"int32"},"required":false,"index$":3},{"in":"query","name":"show_seat_info","description":"Show seat information for members","type":"boolean","required":false,"index$":4},{"in":"query","name":"with_saml_identity","description":"List only members with linked SAML identity","type":"boolean","required":false,"index$":5},{"in":"query","name":"page","description":"Current page number","type":"integer","format":"int32","default":1,"required":false,"example":1,"index$":6},{"in":"query","name":"per_page","description":"Number of items per page","type":"integer","format":"int32","default":20,"required":false,"example":20,"index$":7}]},"GET /api/v4/projects/{id}/members":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The project ID","type":"string","required":true,"index$":0},{"in":"query","name":"query","description":"A query string to search for members","type":"string","required":false,"index$":1},{"in":"query","name":"user_ids","description":"Array of user ids to look up for membership","type":"array","items":{"type":"integer","format":"int32"},"required":false,"index$":2},{"in":"query","name":"skip_users","description":"Array of user ids to be skipped for membership","type":"array","items":{"type":"integer","format":"int32"},"required":false,"index$":3},{"in":"query","name":"show_seat_info","description":"Show seat information for members","type":"boolean","required":false,"index$":4},{"in":"query","name":"with_saml_identity","description":"List only members with linked SAML identity","type":"boolean","required":false,"index$":5},{"in":"query","name":"page","description":"Current page number","type":"integer","format":"int32","default":1,"required":false,"example":1,"index$":6},{"in":"query","name":"per_page","description":"Number of items per page","type":"integer","format":"int32","default":20,"required":false,"example":20,"index$":7}]},"GET /api/v4/groups/{id}/members/all":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The group ID","type":"string","required":true,"index$":0},{"in":"query","name":"query","description":"A query string to search for members","type":"string","required":false,"index$":1},{"in":"query","name":"user_ids","description":"Array of user ids to look up for membership","type":"array","items":{"type":"integer","format":"int32"},"required":false,"index$":2},{"in":"query","name":"show_seat_info","description":"Show seat information for members","type":"boolean","required":false,"index$":3},{"in":"query","name":"state","description":"Filter results by member state","type":"string","enum":["awaiting","active"],"required":false,"index$":4},{"in":"query","name":"page","description":"Current page number","type":"integer","format":"int32","default":1,"required":false,"example":1,"index$":5},{"in":"query","name":"per_page","description":"Number of items per page","type":"integer","format":"int32","default":20,"required":false,"example":20,"index$":6}]},"GET /api/v4/projects/{id}/members/all":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The project ID","type":"string","required":true,"index$":0},{"in":"query","name":"query","description":"A query string to search for members","type":"string","required":false,"index$":1},{"in":"query","name":"user_ids","description":"Array of user ids to look up for membership","type":"array","items":{"type":"integer","format":"int32"},"required":false,"index$":2},{"in":"query","name":"show_seat_info","description":"Show seat information for members","type":"boolean","required":false,"index$":3},{"in":"query","name":"state","description":"Filter results by member state","type":"string","enum":["awaiting","active"],"required":false,"index$":4},{"in":"query","name":"page","description":"Current page number","type":"integer","format":"int32","default":1,"required":false,"example":1,"index$":5},{"in":"query","name":"per_page","description":"Number of items per page","type":"integer","format":"int32","default":20,"required":false,"example":20,"index$":6}]},"GET /api/v4/groups/{id}/billable_members":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID of a group","type":"string","required":true,"index$":0},{"in":"query","name":"page","description":"Current page number","type":"integer","format":"int32","default":1,"required":false,"example":1,"index$":1},{"in":"query","name":"per_page","description":"Number of items per page","type":"integer","format":"int32","default":20,"required":false,"example":20,"index$":2},{"in":"query","name":"search","description":"The exact name of the subscribed member","type":"string","required":false,"index$":3},{"in":"query","name":"sort","description":"The sorting option","type":"string","enum":["access_level_asc","access_level_desc","last_joined","name_asc","name_desc","oldest_joined","oldest_sign_in","recent_sign_in","last_activity_on_asc","last_activity_on_desc"],"required":false,"index$":4}]},"GET /api/v4/groups/{id}/members/{user_id}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The group ID","type":"string","required":true,"index$":0},{"in":"path","name":"user_id","description":"The user ID of the member","type":"integer","format":"int32","required":true,"index$":1}]},"GET /api/v4/groups/{id}/members/all/{user_id}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The group ID","type":"string","required":true,"index$":0},{"in":"path","name":"user_id","description":"The user ID of the member","type":"integer","format":"int32","required":true,"index$":1}]},"GET /api/v4/projects/{id}/members/{user_id}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The project ID","type":"string","required":true,"index$":0},{"in":"path","name":"user_id","description":"The user ID of the member","type":"integer","format":"int32","required":true,"index$":1}]},"GET /api/v4/projects/{id}/members/all/{user_id}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The project ID","type":"string","required":true,"index$":0},{"in":"path","name":"user_id","description":"The user ID of the member","type":"integer","format":"int32","required":true,"index$":1}]},"DELETE /api/v4/groups/{id}/members/{user_id}/override":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID of a group","type":"string","required":true,"index$":0},{"in":"path","name":"user_id","description":"The user ID of the member","type":"integer","format":"int32","required":true,"index$":1}]},"PUT /api/v4/groups/{id}/members/{user_id}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The group ID","type":"string","required":true,"index$":0},{"in":"path","name":"user_id","description":"The user ID of the new member","type":"integer","format":"int32","required":true,"index$":1},{"name":"putApiV4GroupsIdMembersUserId","in":"body","required":true,"schema":{"type":"object","properties":{"access_level":{"type":"integer","format":"int32","description":"A valid access level"},"expires_at":{"type":"string","format":"date-time","description":"Date string in the format YEAR-MONTH-DAY"},"member_role_id":{"type":"integer","format":"int32","description":"The ID of the Member Role to be updated"}},"required":["access_level"],"description":"Updates a member of a group or project.","x-ref":"#/definitions/putApiV4GroupsIdMembersUserId"},"index$":2}]},"PUT /api/v4/groups/{id}/members/{user_id}/state":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID of a group","type":"string","required":true,"index$":0},{"in":"path","name":"user_id","description":"The user ID of the user","type":"integer","format":"int32","required":true,"index$":1},{"name":"putApiV4GroupsIdMembersUserIdState","in":"body","required":true,"schema":{"type":"object","properties":{"state":{"type":"string","description":"The new state for the memberships of the user","enum":["awaiting","active"]}},"required":["state"],"description":"Changes the state of the memberships of a user in the group","x-ref":"#/definitions/putApiV4GroupsIdMembersUserIdState"},"index$":2}]},"PUT /api/v4/projects/{id}/members/{user_id}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The project ID","type":"string","required":true,"index$":0},{"in":"path","name":"user_id","description":"The user ID of the new member","type":"integer","format":"int32","required":true,"index$":1},{"name":"putApiV4ProjectsIdMembersUserId","in":"body","required":true,"schema":{"type":"object","properties":{"access_level":{"type":"integer","format":"int32","description":"A valid access level"},"expires_at":{"type":"string","format":"date-time","description":"Date string in the format YEAR-MONTH-DAY"},"member_role_id":{"type":"integer","format":"int32","description":"The ID of the Member Role to be updated"}},"required":["access_level"],"description":"Updates a member of a group or project.","x-ref":"#/definitions/putApiV4ProjectsIdMembersUserId"},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const api_entities_member_ref01_ent = client.ApiEntitiesMember()
    let api_entities_member_ref01_data = setup.data.new.api_entities_member['api_entities_member_ref01']
    api_entities_member_ref01_data['group_id'] = setup.idmap['group01']
    api_entities_member_ref01_data['project_id'] = setup.idmap['project01']

    api_entities_member_ref01_data = (await api_entities_member_ref01_ent.create(api_entities_member_ref01_data)).data()
    assert(null != api_entities_member_ref01_data.id)


    // LIST
    const api_entities_member_ref01_match: any = {}
    api_entities_member_ref01_match['group_id'] = setup.idmap['group01']

    const api_entities_member_ref01_list = (await api_entities_member_ref01_ent.list(api_entities_member_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(api_entities_member_ref01_list, { id: api_entities_member_ref01_data.id })))


    // UPDATE
    const api_entities_member_ref01_data_up0: any = {}
    api_entities_member_ref01_data_up0.id = api_entities_member_ref01_data.id
    api_entities_member_ref01_data_up0 ['project_id'] = setup.idmap['project_id']

    const api_entities_member_ref01_markdef_up0 = { name: 'access_level', value: 'Mark01-api_entities_member_ref01_' + setup.now }
    ;(api_entities_member_ref01_data_up0 as any)[api_entities_member_ref01_markdef_up0.name] = api_entities_member_ref01_markdef_up0.value

    const api_entities_member_ref01_resdata_up0 = (await api_entities_member_ref01_ent.update(api_entities_member_ref01_data_up0)).data()
    assert(api_entities_member_ref01_resdata_up0.id === api_entities_member_ref01_data_up0.id)

    assert((api_entities_member_ref01_resdata_up0 as any)[api_entities_member_ref01_markdef_up0.name] === api_entities_member_ref01_markdef_up0.value)


    // LOAD
    const api_entities_member_ref01_match_dt0: any = {}
    api_entities_member_ref01_match_dt0.id = api_entities_member_ref01_data.id
    const api_entities_member_ref01_data_dt0 = (await api_entities_member_ref01_ent.load(api_entities_member_ref01_match_dt0)).data()
    assert(api_entities_member_ref01_data_dt0.id === api_entities_member_ref01_data.id)


    // REMOVE
    const api_entities_member_ref01_match_rm0: any = { id: api_entities_member_ref01_data.id }
    await api_entities_member_ref01_ent.remove(api_entities_member_ref01_match_rm0)
  

    // LIST
    const api_entities_member_ref01_match_rt0: any = {}
    api_entities_member_ref01_match_rt0['group_id'] = setup.idmap['group01']

    const api_entities_member_ref01_list_rt0 = (await api_entities_member_ref01_ent.list(api_entities_member_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(api_entities_member_ref01_list_rt0, { id: api_entities_member_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_member/ApiEntitiesMemberTestData.json')

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
    ['api_entities_member01','api_entities_member02','api_entities_member03','group01','group02','group03','project01','project02','project03','member01','member02','member03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_MEMBER_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_MEMBER_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_MEMBER_ENTID']
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
  
