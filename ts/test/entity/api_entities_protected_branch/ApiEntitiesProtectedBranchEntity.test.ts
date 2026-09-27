

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


describe('ApiEntitiesProtectedBranchEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesProtectedBranch()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_protected_branch.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"allow_force_push":{"a":true,"h":"Allow Force Push","n":"allow_force_push","r":false,"t":"`$BOOLEAN`","key$":"allow_force_push","index$":0},"code_owner_approval_required":{"a":true,"h":"Code Owner Approval Required","n":"code_owner_approval_required","r":false,"t":"`$BOOLEAN`","key$":"code_owner_approval_required","index$":1},"id":{"a":true,"fo":"int32","h":"Id","n":"id","r":false,"t":"`$INTEGER`","key$":"id","index$":2},"inherited":{"a":true,"h":"Inherited","n":"inherited","r":false,"t":"`$BOOLEAN`","key$":"inherited","index$":3},"merge_access_levels":{"a":true,"h":"Merge Access Levels","n":"merge_access_levels","r":false,"t":"`$ARRAY`","key$":"merge_access_levels","index$":4},"name":{"a":true,"h":"Name","n":"name","r":false,"t":"`$STRING`","key$":"name","index$":5},"push_access_levels":{"a":true,"h":"Push Access Levels","n":"push_access_levels","r":false,"t":"`$ARRAY`","key$":"push_access_levels","index$":6},"unprotect_access_levels":{"a":true,"h":"Unprotect Access Levels","n":"unprotect_access_levels","r":false,"t":"`$ARRAY`","key$":"unprotect_access_levels","index$":7}},"id":{"field":"id","name":"id"},"name":"api_entities_protected_branch","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/v4/projects/{id}/protected_branches","source":"swagger2","version":2},"g":{"params":[{"a":true,"ex":"gitlab-org/gitlab","k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"post_api_v4_projects_id_protected_branch","or":"post_api_v4_projects_id_protected_branch","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/api/v4/projects/{id}/protected_branches","q":{"exist":["post_api_v4_projects_id_protected_branch","project_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"protected_branches"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/v4/projects/{id}/protected_branches","source":"swagger2","version":2},"g":{"params":[{"a":true,"ex":"gitlab-org/gitlab","k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"ex":"mai","k":"query","n":"search","or":"search","r":false,"t":"`$ANY`","index$":2}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/protected_branches","q":{"exist":["page","per_page","project_id","search"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"protected_branches"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v4/projects/{id}/protected_branches/{name}","source":"swagger2","version":2},"g":{"params":[{"a":true,"ex":"main","k":"param","n":"id","or":"name","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"gitlab-org/gitlab","k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/protected_branches/{name}","q":{"exist":["id","project_id"]},"r":{"param":{"id":"project_id","name":"id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"protected_branches"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /api/v4/projects/{id}/protected_branches/{name}","source":"swagger2","version":2},"g":{"params":[{"a":true,"ex":"main","k":"param","n":"id","or":"name","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"gitlab-org/gitlab","k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"patch_api_v4_projects_id_protected_branches_name","or":"patch_api_v4_projects_id_protected_branches_name","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"PATCH","o":"/api/v4/projects/{id}/protected_branches/{name}","q":{"exist":["id","patch_api_v4_projects_id_protected_branches_name","project_id"]},"r":{"param":{"id":"project_id","name":"id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"protected_branches"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.project"]]},"key$":"api_entities_protected_branch","name__orig":"api_entities_protected_branch","Name":"ApiEntitiesProtectedBranch","name_":"api_entities_protected_branch","name-":"api-entities-protected-branch","NAME":"API_ENTITIES_PROTECTED_BRANCH","index$":144}, {"active":true,"entity":"api_entities_protected_branch","key$":"BasicApiEntitiesProtectedBranchFlow","kind":"basic","name":"BasicApiEntitiesProtectedBranchFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"api_entities_protected_branch_ref01"},"m":{"project_id":"project01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"project_id":"project01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"api_entities_protected_branch_ref01"}}],"index$":1},{"a":true,"d":{"project_id":"project01"},"i":{"ref":"api_entities_protected_branch_ref01","srcdatavar":"api_entities_protected_branch_ref01_data","suffix":"_up0","textfield":"name"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_protected_branch_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"api_entities_protected_branch_ref01","srcdatavar":"api_entities_protected_branch_ref01_data","suffix":"_dt0"},"m":{"id":"api_entities_protected_branch01","project_id":"project01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_protected_branch_ref01"}}],"index$":3}]}, 'ApiEntitiesProtectedBranch', {"POST /api/v4/projects/{id}/protected_branches":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"example":"gitlab-org/gitlab","index$":0},{"name":"postApiV4ProjectsIdProtectedBranches","in":"body","required":true,"schema":{"type":"object","properties":{"name":{"type":"string","description":"The name of the protected branch","example":"main"},"push_access_level":{"type":"integer","format":"int32","description":"Access levels allowed to push (defaults: `40`, maintainer access level)","enum":[30,40,60,0]},"merge_access_level":{"type":"integer","format":"int32","description":"Access levels allowed to merge (defaults: `40`, maintainer access level)","enum":[30,40,60,0]},"allow_force_push":{"type":"boolean","description":"Allow force push for all users with push access.","default":false},"unprotect_access_level":{"type":"integer","format":"int32","description":"Access levels allowed to unprotect (defaults: `40`, maintainer access level)","enum":[30,40,60]},"allowed_to_push":{"type":"array","description":"An array of users/groups allowed to push","items":{"type":"object","properties":{"access_level":{"type":"integer","format":"int32","enum":[30,40,60,0]},"deploy_key_id":{"type":"integer","format":"int32","example":1},"user_id":{"type":"integer","format":"int32","example":1},"group_id":{"type":"integer","format":"int32","example":1},"id":{"type":"integer","format":"int32","example":1},"_destroy":{"type":"boolean","description":"Delete the object when true"}}}},"allowed_to_merge":{"type":"array","description":"An array of users/groups allowed to merge","items":{"type":"object","properties":{"access_level":{"type":"integer","format":"int32","enum":[30,40,60,0]},"user_id":{"type":"integer","format":"int32","example":1},"group_id":{"type":"integer","format":"int32","example":1},"id":{"type":"integer","format":"int32","example":1},"_destroy":{"type":"boolean","description":"Delete the object when true"}}}},"allowed_to_unprotect":{"type":"array","description":"An array of users/groups allowed to unprotect","items":{"type":"object","properties":{"access_level":{"type":"integer","format":"int32","enum":[30,40,60]},"user_id":{"type":"integer","format":"int32","example":1},"group_id":{"type":"integer","format":"int32","example":1},"id":{"type":"integer","format":"int32","example":1},"_destroy":{"type":"boolean","description":"Delete the object when true"}}}},"code_owner_approval_required":{"type":"boolean","description":"Prevent pushes to this branch if it matches an item in CODEOWNERS"}},"required":["name"],"description":"Protect a single branch","x-ref":"#/definitions/postApiV4ProjectsIdProtectedBranches"},"index$":1}]},"GET /api/v4/projects/{id}/protected_branches":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"example":"gitlab-org/gitlab","index$":0},{"in":"query","name":"page","description":"Current page number","type":"integer","format":"int32","default":1,"required":false,"example":1,"index$":1},{"in":"query","name":"per_page","description":"Number of items per page","type":"integer","format":"int32","default":20,"required":false,"example":20,"index$":2},{"in":"query","name":"search","description":"Search for a protected branch by name","type":"string","required":false,"example":"mai","index$":3}]},"GET /api/v4/projects/{id}/protected_branches/{name}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"example":"gitlab-org/gitlab","index$":0},{"in":"path","name":"name","description":"The name of the branch or wildcard","type":"string","required":true,"example":"main","index$":1}]},"PATCH /api/v4/projects/{id}/protected_branches/{name}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"example":"gitlab-org/gitlab","index$":0},{"in":"path","name":"name","description":"The name of the branch","type":"string","required":true,"example":"main","index$":1},{"name":"patchApiV4ProjectsIdProtectedBranchesName","in":"body","required":true,"schema":{"type":"object","properties":{"allow_force_push":{"type":"boolean","description":"Allow force push for all users with push access."},"unprotect_access_level":{"type":"integer","format":"int32","description":"Access levels allowed to unprotect (defaults: `40`, maintainer access level)","enum":[30,40,60]},"allowed_to_push":{"type":"array","description":"An array of users/groups allowed to push","items":{"type":"object","properties":{"access_level":{"type":"integer","format":"int32","enum":[30,40,60,0]},"deploy_key_id":{"type":"integer","format":"int32","example":1},"user_id":{"type":"integer","format":"int32","example":1},"group_id":{"type":"integer","format":"int32","example":1},"id":{"type":"integer","format":"int32","example":1},"_destroy":{"type":"boolean","description":"Delete the object when true"}}}},"allowed_to_merge":{"type":"array","description":"An array of users/groups allowed to merge","items":{"type":"object","properties":{"access_level":{"type":"integer","format":"int32","enum":[30,40,60,0]},"user_id":{"type":"integer","format":"int32","example":1},"group_id":{"type":"integer","format":"int32","example":1},"id":{"type":"integer","format":"int32","example":1},"_destroy":{"type":"boolean","description":"Delete the object when true"}}}},"allowed_to_unprotect":{"type":"array","description":"An array of users/groups allowed to unprotect","items":{"type":"object","properties":{"access_level":{"type":"integer","format":"int32","enum":[30,40,60]},"user_id":{"type":"integer","format":"int32","example":1},"group_id":{"type":"integer","format":"int32","example":1},"id":{"type":"integer","format":"int32","example":1},"_destroy":{"type":"boolean","description":"Delete the object when true"}}}},"code_owner_approval_required":{"type":"boolean","description":"Prevent pushes to this branch if it matches an item in CODEOWNERS"}},"description":"Update a protected branch","x-ref":"#/definitions/patchApiV4ProjectsIdProtectedBranchesName"},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const api_entities_protected_branch_ref01_ent = client.ApiEntitiesProtectedBranch()
    let api_entities_protected_branch_ref01_data = setup.data.new.api_entities_protected_branch['api_entities_protected_branch_ref01']
    api_entities_protected_branch_ref01_data['project_id'] = setup.idmap['project01']

    api_entities_protected_branch_ref01_data = (await api_entities_protected_branch_ref01_ent.create(api_entities_protected_branch_ref01_data)).data()
    assert(null != api_entities_protected_branch_ref01_data.id)


    // LIST
    const api_entities_protected_branch_ref01_match: any = {}
    api_entities_protected_branch_ref01_match['project_id'] = setup.idmap['project01']

    const api_entities_protected_branch_ref01_list = (await api_entities_protected_branch_ref01_ent.list(api_entities_protected_branch_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(api_entities_protected_branch_ref01_list, { id: api_entities_protected_branch_ref01_data.id })))


    // UPDATE
    const api_entities_protected_branch_ref01_data_up0: any = {}
    api_entities_protected_branch_ref01_data_up0.id = api_entities_protected_branch_ref01_data.id
    api_entities_protected_branch_ref01_data_up0 ['project_id'] = setup.idmap['project_id']

    const api_entities_protected_branch_ref01_markdef_up0 = { name: 'name', value: 'Mark01-api_entities_protected_branch_ref01_' + setup.now }
    ;(api_entities_protected_branch_ref01_data_up0 as any)[api_entities_protected_branch_ref01_markdef_up0.name] = api_entities_protected_branch_ref01_markdef_up0.value

    const api_entities_protected_branch_ref01_resdata_up0 = (await api_entities_protected_branch_ref01_ent.update(api_entities_protected_branch_ref01_data_up0)).data()
    assert(api_entities_protected_branch_ref01_resdata_up0.id === api_entities_protected_branch_ref01_data_up0.id)

    assert((api_entities_protected_branch_ref01_resdata_up0 as any)[api_entities_protected_branch_ref01_markdef_up0.name] === api_entities_protected_branch_ref01_markdef_up0.value)


    // LOAD
    const api_entities_protected_branch_ref01_match_dt0: any = {}
    api_entities_protected_branch_ref01_match_dt0.id = api_entities_protected_branch_ref01_data.id
    const api_entities_protected_branch_ref01_data_dt0 = (await api_entities_protected_branch_ref01_ent.load(api_entities_protected_branch_ref01_match_dt0)).data()
    assert(api_entities_protected_branch_ref01_data_dt0.id === api_entities_protected_branch_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_protected_branch/ApiEntitiesProtectedBranchTestData.json')

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
    ['api_entities_protected_branch01','api_entities_protected_branch02','api_entities_protected_branch03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_PROTECTED_BRANCH_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_PROTECTED_BRANCH_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_PROTECTED_BRANCH_ENTID']
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
  
