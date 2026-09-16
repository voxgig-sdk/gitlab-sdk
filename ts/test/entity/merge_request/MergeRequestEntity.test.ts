

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


describe('MergeRequestEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.MergeRequest()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'merge_request.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":0}],"id":{"field":"id","name":"id"},"name":"merge_request","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"merge_request_iid","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}],"query":[{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"example":20,"kind":"query","name":"per_page","orig":"per_page","reqd":false,"type":"`$INTEGER`","index$":1}]},"contract":{"id":"GET /api/v4/projects/{id}/merge_requests/{merge_request_iid}/related_issues","json":"{\"operationId\":\"getApiV4ProjectsIdMergeRequestsMergeRequestIidRelatedIssues\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project.\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"default\":1,\"description\":\"Current page number\",\"example\":1,\"format\":\"int32\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"type\":\"integer\"},{\"default\":20,\"description\":\"Number of items per page\",\"example\":20,\"format\":\"int32\",\"in\":\"query\",\"name\":\"per_page\",\"required\":false,\"type\":\"integer\"},{\"format\":\"int32\",\"in\":\"path\",\"name\":\"merge_request_iid\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"List issues related to merge request\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/merge_requests/{merge_request_iid}/related_issues","rename":{"param":{"id":"project_id","merge_request_iid":"id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"merge_requests"},{"var":"id"},{"lit":"related_issues"}],"select":{"$action":"related_issue","exist":["id","page","per_page","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"merge_request_iid","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /api/v4/projects/{id}/merge_requests/{merge_request_iid}/merge_ref","json":"{\"operationId\":\"getApiV4ProjectsIdMergeRequestsMergeRequestIidMergeRef\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project.\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"format\":\"int32\",\"in\":\"path\",\"name\":\"merge_request_iid\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Returns the up to date merge-ref HEAD commit\"},\"400\":{\"description\":\"Bad request\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/merge_requests/{merge_request_iid}/merge_ref","rename":{"param":{"id":"project_id","merge_request_iid":"id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"merge_requests"},{"var":"id"},{"lit":"merge_ref"}],"select":{"$action":"merge_ref","exist":["id","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"merge_request_iid","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /api/v4/projects/{id}/merge_requests/{merge_request_iid}/raw_diffs","json":"{\"operationId\":\"getApiV4ProjectsIdMergeRequestsMergeRequestIidRawDiffs\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project.\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"format\":\"int32\",\"in\":\"path\",\"name\":\"merge_request_iid\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get the merge request raw diffs\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/merge_requests/{merge_request_iid}/raw_diffs","rename":{"param":{"id":"project_id","merge_request_iid":"id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"merge_requests"},{"var":"id"},{"lit":"raw_diffs"}],"select":{"$action":"raw_diff","exist":["id","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"merge_request_iid","reqd":true,"type":"`$STRING`"},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`"}],"query":[{"active":true,"kind":"query","name":"commit","orig":"commit","reqd":true,"type":"`$ANY`"}]},"contract":{"id":"DELETE /api/v4/projects/{id}/merge_requests/{merge_request_iid}/context_commits","json":"{\"operationId\":\"deleteApiV4ProjectsIdMergeRequestsMergeRequestIidContextCommits\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project.\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The context commits’ SHA.\",\"in\":\"query\",\"items\":{\"type\":\"string\"},\"name\":\"commits\",\"required\":true,\"type\":\"array\"},{\"format\":\"int32\",\"in\":\"path\",\"name\":\"merge_request_iid\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"204\":{\"description\":\"Delete merge request context commits\"},\"400\":{\"description\":\"Bad request\"},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"DELETE","orig":"/api/v4/projects/{id}/merge_requests/{merge_request_iid}/context_commits","rename":{"param":{"id":"project_id","merge_request_iid":"id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"merge_requests"},{"var":"id"},{"lit":"context_commits"}],"select":{"$action":"context_commit","exist":["commit","id","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"merge_request_iid","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"DELETE /api/v4/projects/{id}/merge_requests/{merge_request_iid}","json":"{\"operationId\":\"deleteApiV4ProjectsIdMergeRequestsMergeRequestIid\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project.\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The internal ID of the merge request.\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"merge_request_iid\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"204\":{\"description\":\"Delete a merge request\"},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not found\"},\"412\":{\"description\":\"Precondition failed\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"DELETE","orig":"/api/v4/projects/{id}/merge_requests/{merge_request_iid}","rename":{"param":{"id":"project_id","merge_request_iid":"id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"merge_requests"},{"var":"id"}],"select":{"exist":["id","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"merge_request_iid","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"PUT /api/v4/projects/{id}/merge_requests/{merge_request_iid}/reset_approvals","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"putApiV4ProjectsIdMergeRequestsMergeRequestIidResetApprovals\",\"parameters\":[{\"format\":\"int32\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"integer\"},{\"format\":\"int32\",\"in\":\"path\",\"name\":\"merge_request_iid\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Remove all merge request approvals\"},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"PUT","orig":"/api/v4/projects/{id}/merge_requests/{merge_request_iid}/reset_approvals","rename":{"param":{"id":"project_id","merge_request_iid":"id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"merge_requests"},{"var":"id"},{"lit":"reset_approvals"}],"select":{"$action":"reset_approval","exist":["id","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["project"]]},"key$":"merge_request","name__orig":"merge_request","Name":"MergeRequest","name_":"merge_request","name-":"merge-request","NAME":"MERGE_REQUEST","index$":225}, {"active":true,"entity":"merge_request","key$":"BasicMergeRequestFlow","kind":"basic","name":"BasicMergeRequestFlow","param":{},"step":[{"active":true,"data":{"project_id":"project01"},"input":{"ref":"merge_request_ref01","srcdatavar":"merge_request_ref01_data","suffix":"_up0"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-merge_request_ref01"}}],"valid":[],"index$":0},{"active":true,"data":{},"input":{"ref":"merge_request_ref01","srcdatavar":"merge_request_ref01_data","suffix":"_dt0"},"match":{"id":"merge_request01","project_id":"project01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-merge_request_ref01"}}],"index$":1}]}, 'MergeRequest')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let merge_request_ref01_data = Object.values(setup.data.existing.merge_request)[0] as any

    // UPDATE
    const merge_request_ref01_ent = client.MergeRequest()
    const merge_request_ref01_data_up0: any = {}
    merge_request_ref01_data_up0.id = merge_request_ref01_data.id
    merge_request_ref01_data_up0 ['project_id'] = setup.idmap['project_id']

    const merge_request_ref01_resdata_up0 = (await merge_request_ref01_ent.update(merge_request_ref01_data_up0)).data()
    assert(merge_request_ref01_resdata_up0.id === merge_request_ref01_data_up0.id)


    // LOAD
    const merge_request_ref01_match_dt0: any = {}
    merge_request_ref01_match_dt0.id = merge_request_ref01_data.id
    const merge_request_ref01_data_dt0 = (await merge_request_ref01_ent.load(merge_request_ref01_match_dt0)).data()
    assert(merge_request_ref01_data_dt0.id === merge_request_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/merge_request/MergeRequestTestData.json')

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
    ['merge_request01','merge_request02','merge_request03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_MERGE_REQUEST_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_MERGE_REQUEST_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_MERGE_REQUEST_ENTID']
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
  
