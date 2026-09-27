

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


describe('ApiEntitiesCommitEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesCommit()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create', 'list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_commit.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"author_email":{"a":true,"h":"Author Email","n":"author_email","r":false,"t":"`$STRING`","key$":"author_email","index$":0},"author_name":{"a":true,"h":"Author Name","n":"author_name","r":false,"t":"`$STRING`","key$":"author_name","index$":1},"authored_date":{"a":true,"fo":"date-time","h":"Authored Date","n":"authored_date","r":false,"t":"`$STRING`","key$":"authored_date","index$":2},"committed_date":{"a":true,"fo":"date-time","h":"Committed Date","n":"committed_date","r":false,"t":"`$STRING`","key$":"committed_date","index$":3},"committer_email":{"a":true,"h":"Committer Email","n":"committer_email","r":false,"t":"`$STRING`","key$":"committer_email","index$":4},"committer_name":{"a":true,"h":"Committer Name","n":"committer_name","r":false,"t":"`$STRING`","key$":"committer_name","index$":5},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":false,"t":"`$STRING`","key$":"created_at","index$":6},"extended_trailers":{"a":true,"h":"Extended Trailers","n":"extended_trailers","r":false,"t":"`$OBJECT`","key$":"extended_trailers","index$":7},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":8},"message":{"a":true,"h":"Message","n":"message","r":false,"t":"`$STRING`","key$":"message","index$":9},"parent_ids":{"a":true,"h":"Parent Ids","n":"parent_ids","r":false,"t":"`$ARRAY`","key$":"parent_ids","index$":10},"short_id":{"a":true,"h":"Short Id","n":"short_id","r":false,"t":"`$STRING`","key$":"short_id","index$":11},"title":{"a":true,"h":"Title","n":"title","r":false,"t":"`$STRING`","key$":"title","index$":12},"trailers":{"a":true,"h":"Trailers","n":"trailers","r":false,"t":"`$OBJECT`","key$":"trailers","index$":13},"web_url":{"a":true,"h":"Web Url","n":"web_url","r":false,"t":"`$STRING`","key$":"web_url","index$":14}},"id":{"field":"id","name":"id"},"name":"api_entities_commit","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/v4/projects/{id}/merge_requests/{merge_request_iid}/context_commits","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"merge_request_id","or":"merge_request_iid","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"post_api_v4_projects_id_merge_requests_merge_request_iid_context_commit","or":"post_api_v4_projects_id_merge_requests_merge_request_iid_context_commit","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/api/v4/projects/{id}/merge_requests/{merge_request_iid}/context_commits","q":{"exist":["merge_request_id","post_api_v4_projects_id_merge_requests_merge_request_iid_context_commit","project_id"]},"r":{"param":{"id":"project_id","merge_request_iid":"merge_request_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"merge_requests"},{"var":"merge_request_id"},{"lit":"context_commits"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /api/v4/projects/{id}/repository/commits/{sha}/cherry_pick","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"sha","or":"sha","r":true,"t":"`$ANY`","index$":1}],"query":[{"a":true,"k":"query","n":"post_api_v4_projects_id_repository_commits_sha_cherry_pick","or":"post_api_v4_projects_id_repository_commits_sha_cherry_pick","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/api/v4/projects/{id}/repository/commits/{sha}/cherry_pick","q":{"exist":["post_api_v4_projects_id_repository_commits_sha_cherry_pick","project_id","sha"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"repository"},{"lit":"commits"},{"var":"sha"},{"lit":"cherry_pick"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"POST /api/v4/projects/{id}/repository/commits/{sha}/revert","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"sha","or":"sha","r":true,"t":"`$ANY`","index$":1}],"query":[{"a":true,"k":"query","n":"post_api_v4_projects_id_repository_commits_sha_revert","or":"post_api_v4_projects_id_repository_commits_sha_revert","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/api/v4/projects/{id}/repository/commits/{sha}/revert","q":{"exist":["post_api_v4_projects_id_repository_commits_sha_revert","project_id","sha"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"repository"},{"lit":"commits"},{"var":"sha"},{"lit":"revert"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/v4/projects/{id}/repository/commits","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"all","or":"all","r":false,"t":"`$ANY`","index$":0},{"a":true,"ex":"John Smith","k":"query","n":"author","or":"author","r":false,"t":"`$ANY`","index$":1},{"a":true,"k":"query","n":"first_parent","or":"first_parent","r":false,"t":"`$ANY`","index$":2},{"a":true,"k":"query","n":"order","or":"order","r":false,"t":"`$ANY`","index$":3},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":4},{"a":true,"ex":"README.md","k":"query","n":"path","or":"path","r":false,"t":"`$STRING`","index$":5},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":6},{"a":true,"ex":"v1.1.0","k":"query","n":"ref_name","or":"ref_name","r":false,"t":"`$ANY`","index$":7},{"a":true,"ex":"2021-09-20T11:50:22.001","k":"query","n":"since","or":"since","r":false,"t":"`$ANY`","index$":8},{"a":true,"k":"query","n":"trailer","or":"trailer","r":false,"t":"`$ANY`","index$":9},{"a":true,"ex":"2021-09-20T11:50:22.001","k":"query","n":"until","or":"until","r":false,"t":"`$ANY`","index$":10},{"a":true,"k":"query","n":"with_stat","or":"with_stat","r":false,"t":"`$ANY`","index$":11}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/repository/commits","q":{"exist":["all","author","first_parent","order","page","path","per_page","project_id","ref_name","since","trailer","until","with_stat"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"repository"},{"lit":"commits"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /api/v4/projects/{id}/merge_requests/{merge_request_iid}/commits","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"merge_request_id","or":"merge_request_iid","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/merge_requests/{merge_request_iid}/commits","q":{"exist":["merge_request_id","page","per_page","project_id"]},"r":{"param":{"id":"project_id","merge_request_iid":"merge_request_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"merge_requests"},{"var":"merge_request_id"},{"lit":"commits"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"GET /api/v4/projects/{id}/merge_requests/{merge_request_iid}/context_commits","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"merge_request_id","or":"merge_request_iid","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/merge_requests/{merge_request_iid}/context_commits","q":{"exist":["merge_request_id","project_id"]},"r":{"param":{"id":"project_id","merge_request_iid":"merge_request_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"merge_requests"},{"var":"merge_request_id"},{"lit":"context_commits"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"GET /api/v4/projects/{id}/repository/merge_base","source":"swagger2","version":2},"g":{"params":[{"a":true,"ex":1,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"main","k":"query","n":"ref","or":"ref","r":true,"t":"`$ANY`","index$":0}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/repository/merge_base","q":{"exist":["project_id","ref"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"repository"},{"lit":"merge_base"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.project"],["$.main.kit.entity.project","$.main.kit.entity.merge_request"],["$.main.kit.entity.project"]]},"key$":"api_entities_commit","name__orig":"api_entities_commit","Name":"ApiEntitiesCommit","name_":"api_entities_commit","name-":"api-entities-commit","NAME":"API_ENTITIES_COMMIT","index$":46}, {"active":true,"entity":"api_entities_commit","key$":"BasicApiEntitiesCommitFlow","kind":"basic","name":"BasicApiEntitiesCommitFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"api_entities_commit_ref01"},"m":{"merge_request_id":"merge_request01","project_id":"project01","sha":"sha01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"project_id":"project01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"api_entities_commit_ref01"}}],"index$":1}]}, 'ApiEntitiesCommit', {"POST /api/v4/projects/{id}/merge_requests/{merge_request_iid}/context_commits":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project.","type":"string","required":true,"index$":0},{"in":"path","name":"merge_request_iid","type":"integer","format":"int32","required":true,"index$":1},{"name":"postApiV4ProjectsIdMergeRequestsMergeRequestIidContextCommits","in":"body","required":true,"schema":{"type":"object","properties":{"commits":{"type":"array","description":"The context commits’ SHA.","items":{"type":"string"}}},"required":["commits"],"description":"Create merge request context commits","x-ref":"#/definitions/postApiV4ProjectsIdMergeRequestsMergeRequestIidContextCommits"},"index$":2}]},"POST /api/v4/projects/{id}/repository/commits/{sha}/cherry_pick":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"in":"path","name":"sha","description":"A commit sha, or the name of a branch or tag to be cherry-picked","type":"string","required":true,"index$":1},{"name":"postApiV4ProjectsIdRepositoryCommitsShaCherryPick","in":"body","required":true,"schema":{"type":"object","properties":{"branch":{"type":"string","description":"The name of the branch","example":"master"},"dry_run":{"type":"boolean","description":"Does not commit any changes","default":false},"message":{"type":"string","description":"A custom commit message to use for the picked commit","example":"Initial commit"}},"required":["branch"],"description":"Cherry pick commit into a branch","x-ref":"#/definitions/postApiV4ProjectsIdRepositoryCommitsShaCherryPick"},"index$":2}]},"POST /api/v4/projects/{id}/repository/commits/{sha}/revert":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"in":"path","name":"sha","description":"Commit SHA to revert","type":"string","required":true,"index$":1},{"name":"postApiV4ProjectsIdRepositoryCommitsShaRevert","in":"body","required":true,"schema":{"type":"object","properties":{"branch":{"type":"string","description":"Target branch name","example":"master"},"dry_run":{"type":"boolean","description":"Does not commit any changes","default":false}},"required":["branch"],"description":"Revert a commit in a branch","x-ref":"#/definitions/postApiV4ProjectsIdRepositoryCommitsShaRevert"},"index$":2}]},"GET /api/v4/projects/{id}/repository/commits":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"in":"query","name":"ref_name","description":"The name of a repository branch or tag, if not given the default branch is used","type":"string","required":false,"example":"v1.1.0","index$":1},{"in":"query","name":"since","description":"Only commits after or on this date will be returned","type":"string","format":"date-time","required":false,"example":"2021-09-20T11:50:22.001","index$":2},{"in":"query","name":"until","description":"Only commits before or on this date will be returned","type":"string","format":"date-time","required":false,"example":"2021-09-20T11:50:22.001","index$":3},{"in":"query","name":"path","description":"The file path","type":"string","required":false,"example":"README.md","index$":4},{"in":"query","name":"author","description":"Search commits by commit author","type":"string","required":false,"example":"John Smith","index$":5},{"in":"query","name":"all","description":"Every commit will be returned","type":"boolean","required":false,"index$":6},{"in":"query","name":"with_stats","description":"Stats about each commit will be added to the response","type":"boolean","required":false,"index$":7},{"in":"query","name":"first_parent","description":"Only include the first parent of merges","type":"boolean","required":false,"index$":8},{"in":"query","name":"order","description":"List commits in order","type":"string","default":"default","enum":["default","topo"],"required":false,"index$":9},{"in":"query","name":"trailers","description":"Parse and include Git trailers for every commit","type":"boolean","default":false,"required":false,"index$":10},{"in":"query","name":"page","description":"Current page number","type":"integer","format":"int32","default":1,"required":false,"example":1,"index$":11},{"in":"query","name":"per_page","description":"Number of items per page","type":"integer","format":"int32","default":20,"required":false,"example":20,"index$":12}]},"GET /api/v4/projects/{id}/merge_requests/{merge_request_iid}/commits":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project.","type":"string","required":true,"index$":0},{"in":"path","name":"merge_request_iid","description":"The internal ID of the merge request.","type":"integer","format":"int32","required":true,"index$":1},{"in":"query","name":"page","description":"Current page number","type":"integer","format":"int32","default":1,"required":false,"example":1,"index$":2},{"in":"query","name":"per_page","description":"Number of items per page","type":"integer","format":"int32","default":20,"required":false,"example":20,"index$":3}]},"GET /api/v4/projects/{id}/merge_requests/{merge_request_iid}/context_commits":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project.","type":"string","required":true,"index$":0},{"in":"path","name":"merge_request_iid","type":"integer","format":"int32","required":true,"index$":1}]},"GET /api/v4/projects/{id}/repository/merge_base":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"example":1,"index$":0},{"in":"query","name":"refs","description":"The refs to find the common ancestor of, multiple refs can be passed","type":"array","items":{"type":"string"},"required":true,"example":"main","index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const api_entities_commit_ref01_ent = client.ApiEntitiesCommit()
    let api_entities_commit_ref01_data = setup.data.new.api_entities_commit['api_entities_commit_ref01']
    api_entities_commit_ref01_data['merge_request_id'] = setup.idmap['merge_request01']
    api_entities_commit_ref01_data['project_id'] = setup.idmap['project01']
    api_entities_commit_ref01_data['sha'] = setup.idmap['sha01']

    api_entities_commit_ref01_data = (await api_entities_commit_ref01_ent.create(api_entities_commit_ref01_data)).data()
    assert(null != api_entities_commit_ref01_data.id)


    // LIST
    const api_entities_commit_ref01_match: any = {}
    api_entities_commit_ref01_match['project_id'] = setup.idmap['project01']

    const api_entities_commit_ref01_list = (await api_entities_commit_ref01_ent.list(api_entities_commit_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(api_entities_commit_ref01_list, { id: api_entities_commit_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_commit/ApiEntitiesCommitTestData.json')

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
    ['api_entities_commit01','api_entities_commit02','api_entities_commit03','project01','project02','project03','merge_request01','merge_request02','merge_request03','sha01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_COMMIT_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_COMMIT_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_COMMIT_ENTID']
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
  
