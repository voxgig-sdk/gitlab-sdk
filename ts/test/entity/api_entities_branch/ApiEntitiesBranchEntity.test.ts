

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


describe('ApiEntitiesBranchEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesBranch()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_branch.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"author_email":{"a":true,"h":"Author Email","n":"author_email","r":false,"t":"`$STRING`","key$":"author_email","index$":0},"author_name":{"a":true,"h":"Author Name","n":"author_name","r":false,"t":"`$STRING`","key$":"author_name","index$":1},"authored_date":{"a":true,"fo":"date-time","h":"Authored Date","n":"authored_date","r":false,"t":"`$STRING`","key$":"authored_date","index$":2},"can_push":{"a":true,"h":"Can Push","n":"can_push","r":false,"t":"`$BOOLEAN`","key$":"can_push","index$":3},"commit":{"a":true,"h":"Commit","n":"commit","r":false,"sh":"API_Entities_Commit model","t":"`$OBJECT`","key$":"commit","index$":4},"committed_date":{"a":true,"fo":"date-time","h":"Committed Date","n":"committed_date","r":false,"t":"`$STRING`","key$":"committed_date","index$":5},"committer_email":{"a":true,"h":"Committer Email","n":"committer_email","r":false,"t":"`$STRING`","key$":"committer_email","index$":6},"committer_name":{"a":true,"h":"Committer Name","n":"committer_name","r":false,"t":"`$STRING`","key$":"committer_name","index$":7},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":false,"t":"`$STRING`","key$":"created_at","index$":8},"default":{"a":true,"h":"Default","n":"default","r":false,"t":"`$BOOLEAN`","key$":"default","index$":9},"developers_can_merge":{"a":true,"h":"Developers Can Merge","n":"developers_can_merge","r":false,"t":"`$BOOLEAN`","key$":"developers_can_merge","index$":10},"developers_can_push":{"a":true,"h":"Developers Can Push","n":"developers_can_push","r":false,"t":"`$BOOLEAN`","key$":"developers_can_push","index$":11},"extended_trailers":{"a":true,"h":"Extended Trailers","n":"extended_trailers","r":false,"t":"`$OBJECT`","key$":"extended_trailers","index$":12},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":13},"merged":{"a":true,"h":"Merged","n":"merged","r":false,"t":"`$BOOLEAN`","key$":"merged","index$":14},"message":{"a":true,"h":"Message","n":"message","r":false,"t":"`$STRING`","key$":"message","index$":15},"name":{"a":true,"h":"Name","n":"name","r":false,"t":"`$STRING`","key$":"name","index$":16},"parent_ids":{"a":true,"h":"Parent Ids","n":"parent_ids","r":false,"t":"`$ARRAY`","key$":"parent_ids","index$":17},"protected":{"a":true,"h":"Protected","n":"protected","r":false,"t":"`$BOOLEAN`","key$":"protected","index$":18},"short_id":{"a":true,"h":"Short Id","n":"short_id","r":false,"t":"`$STRING`","key$":"short_id","index$":19},"title":{"a":true,"h":"Title","n":"title","r":false,"t":"`$STRING`","key$":"title","index$":20},"trailers":{"a":true,"h":"Trailers","n":"trailers","r":false,"t":"`$OBJECT`","key$":"trailers","index$":21},"web_url":{"a":true,"h":"Web Url","n":"web_url","r":false,"t":"`$STRING`","key$":"web_url","index$":22}},"id":{"field":"id","name":"id"},"name":"api_entities_branch","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/v4/projects/{id}/repository/branches","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"post_api_v4_projects_id_repository_branch","or":"post_api_v4_projects_id_repository_branch","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/api/v4/projects/{id}/repository/branches","q":{"exist":["post_api_v4_projects_id_repository_branch","project_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"repository"},{"lit":"branches"}],"t":{"req":"`reqdata`","res":"`body.commit`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/v4/projects/{id}/repository/branches","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"k":"query","n":"page_token","or":"page_token","r":false,"t":"`$ANY`","index$":1},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"regex","or":"regex","r":false,"t":"`$ANY`","index$":3},{"a":true,"k":"query","n":"search","or":"search","r":false,"t":"`$ANY`","index$":4},{"a":true,"k":"query","n":"sort","or":"sort","r":false,"t":"`$ANY`","index$":5}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/repository/branches","q":{"exist":["page","page_token","per_page","project_id","regex","search","sort"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"repository"},{"lit":"branches"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v4/projects/{id}/repository/branches/{branch}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"branch","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/repository/branches/{branch}","q":{"exist":["id","project_id"]},"r":{"param":{"branch":"id","id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"repository"},{"lit":"branches"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.commit`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /api/v4/projects/{id}/repository/branches/{branch}/protect","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"branch_id","or":"branch","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"put_api_v4_projects_id_repository_branches_branch_protect","or":"put_api_v4_projects_id_repository_branches_branch_protect","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"PUT","o":"/api/v4/projects/{id}/repository/branches/{branch}/protect","q":{"exist":["branch_id","project_id","put_api_v4_projects_id_repository_branches_branch_protect"]},"r":{"param":{"branch":"branch_id","id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"repository"},{"lit":"branches"},{"var":"branch_id"},{"lit":"protect"}],"t":{"req":"`reqdata`","res":"`body.commit`"},"index$":0},{"a":true,"co":{"id":"PUT /api/v4/projects/{id}/repository/branches/{branch}/unprotect","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"branch_id","or":"branch","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PUT","o":"/api/v4/projects/{id}/repository/branches/{branch}/unprotect","q":{"exist":["branch_id","project_id"]},"r":{"param":{"branch":"branch_id","id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"repository"},{"lit":"branches"},{"var":"branch_id"},{"lit":"unprotect"}],"t":{"req":"`reqdata`","res":"`body.commit`"},"index$":1}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.project"],["$.main.kit.entity.project","$.main.kit.entity.branch"]]},"key$":"api_entities_branch","name__orig":"api_entities_branch","Name":"ApiEntitiesBranch","name_":"api_entities_branch","name-":"api-entities-branch","NAME":"API_ENTITIES_BRANCH","index$":16}, {"active":true,"entity":"api_entities_branch","key$":"BasicApiEntitiesBranchFlow","kind":"basic","name":"BasicApiEntitiesBranchFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"api_entities_branch_ref01"},"m":{"project_id":"project01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"project_id":"project01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"api_entities_branch_ref01"}}],"index$":1},{"a":true,"d":{"project_id":"project01"},"i":{"ref":"api_entities_branch_ref01","srcdatavar":"api_entities_branch_ref01_data","suffix":"_up0","textfield":"author_email"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_branch_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"api_entities_branch_ref01","srcdatavar":"api_entities_branch_ref01_data","suffix":"_dt0"},"m":{"id":"api_entities_branch01","project_id":"project01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_branch_ref01"}}],"index$":3}]}, 'ApiEntitiesBranch', {"POST /api/v4/projects/{id}/repository/branches":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"name":"postApiV4ProjectsIdRepositoryBranches","in":"body","required":true,"schema":{"type":"object","properties":{"branch":{"type":"string","description":"The name of the branch"},"ref":{"type":"string","description":"Create branch from commit sha or existing branch"}},"required":["branch","ref"],"description":"Create branch","x-ref":"#/definitions/postApiV4ProjectsIdRepositoryBranches"},"index$":1}]},"GET /api/v4/projects/{id}/repository/branches":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"in":"query","name":"page","description":"Current page number","type":"integer","format":"int32","default":1,"required":false,"example":1,"index$":1},{"in":"query","name":"per_page","description":"Number of items per page","type":"integer","format":"int32","default":20,"required":false,"example":20,"index$":2},{"in":"query","name":"search","description":"Return list of branches matching the search criteria","type":"string","required":false,"index$":3},{"in":"query","name":"regex","description":"Return list of branches matching the regex","type":"string","required":false,"index$":4},{"in":"query","name":"sort","description":"Return list of branches sorted by the given field","type":"string","enum":["name_asc","updated_asc","updated_desc"],"required":false,"index$":5},{"in":"query","name":"page_token","description":"Name of branch to start the pagination from","type":"string","required":false,"index$":6}]},"GET /api/v4/projects/{id}/repository/branches/{branch}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"in":"path","name":"branch","type":"integer","format":"int32","required":true,"index$":1}]},"PUT /api/v4/projects/{id}/repository/branches/{branch}/protect":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"in":"path","name":"branch","description":"The name of the branch","type":"string","required":true,"index$":1},{"name":"putApiV4ProjectsIdRepositoryBranchesBranchProtect","in":"body","required":true,"schema":{"type":"object","properties":{"developers_can_push":{"type":"boolean","description":"Flag if developers can push to that branch"},"developers_can_merge":{"type":"boolean","description":"Flag if developers can merge to that branch"}},"description":"Protect a single branch","x-ref":"#/definitions/putApiV4ProjectsIdRepositoryBranchesBranchProtect"},"index$":2}]},"PUT /api/v4/projects/{id}/repository/branches/{branch}/unprotect":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"in":"path","name":"branch","description":"The name of the branch","type":"string","required":true,"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const api_entities_branch_ref01_ent = client.ApiEntitiesBranch()
    let api_entities_branch_ref01_data = setup.data.new.api_entities_branch['api_entities_branch_ref01']
    api_entities_branch_ref01_data['project_id'] = setup.idmap['project01']

    api_entities_branch_ref01_data = (await api_entities_branch_ref01_ent.create(api_entities_branch_ref01_data)).data()
    assert(null != api_entities_branch_ref01_data.id)


    // LIST
    const api_entities_branch_ref01_match: any = {}
    api_entities_branch_ref01_match['project_id'] = setup.idmap['project01']

    const api_entities_branch_ref01_list = (await api_entities_branch_ref01_ent.list(api_entities_branch_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(api_entities_branch_ref01_list, { id: api_entities_branch_ref01_data.id })))


    // UPDATE
    const api_entities_branch_ref01_data_up0: any = {}
    api_entities_branch_ref01_data_up0.id = api_entities_branch_ref01_data.id
    api_entities_branch_ref01_data_up0 ['project_id'] = setup.idmap['project_id']

    const api_entities_branch_ref01_markdef_up0 = { name: 'author_email', value: 'Mark01-api_entities_branch_ref01_' + setup.now }
    ;(api_entities_branch_ref01_data_up0 as any)[api_entities_branch_ref01_markdef_up0.name] = api_entities_branch_ref01_markdef_up0.value

    const api_entities_branch_ref01_resdata_up0 = (await api_entities_branch_ref01_ent.update(api_entities_branch_ref01_data_up0)).data()
    assert(api_entities_branch_ref01_resdata_up0.id === api_entities_branch_ref01_data_up0.id)

    assert((api_entities_branch_ref01_resdata_up0 as any)[api_entities_branch_ref01_markdef_up0.name] === api_entities_branch_ref01_markdef_up0.value)


    // LOAD
    const api_entities_branch_ref01_match_dt0: any = {}
    api_entities_branch_ref01_match_dt0.id = api_entities_branch_ref01_data.id
    const api_entities_branch_ref01_data_dt0 = (await api_entities_branch_ref01_ent.load(api_entities_branch_ref01_match_dt0)).data()
    assert(api_entities_branch_ref01_data_dt0.id === api_entities_branch_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_branch/ApiEntitiesBranchTestData.json')

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
    ['api_entities_branch01','api_entities_branch02','api_entities_branch03','project01','project02','project03','branch01','branch02','branch03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_BRANCH_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_BRANCH_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_BRANCH_ENTID']
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
  
