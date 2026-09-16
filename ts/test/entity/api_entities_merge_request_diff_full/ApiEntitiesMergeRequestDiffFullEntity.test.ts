

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


describe('ApiEntitiesMergeRequestDiffFullEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesMergeRequestDiffFull()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_merge_request_diff_full.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"base_commit_sha","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"commits","req":false,"short":"API_Entities_Commit model","type":"`$OBJECT`","index$":1},{"active":true,"name":"created_at","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"diffs","req":false,"short":"API_Entities_Diff model","type":"`$OBJECT`","index$":3},{"active":true,"name":"head_commit_sha","req":false,"type":"`$STRING`","index$":4},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":5},{"active":true,"name":"merge_request_id","req":false,"type":"`$STRING`","index$":6},{"active":true,"name":"patch_id_sha","req":false,"type":"`$STRING`","index$":7},{"active":true,"name":"real_size","req":false,"type":"`$STRING`","index$":8},{"active":true,"name":"start_commit_sha","req":false,"type":"`$STRING`","index$":9},{"active":true,"name":"state","req":false,"type":"`$STRING`","index$":10}],"id":{"field":"id","name":"id"},"name":"api_entities_merge_request_diff_full","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"merge_request_id","orig":"merge_request_iid","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1},{"active":true,"kind":"param","name":"version_id","orig":"version_id","reqd":true,"type":"`$STRING`","index$":2}],"query":[{"active":true,"kind":"query","name":"unidiff","orig":"unidiff","reqd":false,"type":"`$ANY`","index$":0}]},"contract":{"id":"GET /api/v4/projects/{id}/merge_requests/{merge_request_iid}/versions/{version_id}","json":"{\"operationId\":\"getApiV4ProjectsIdMergeRequestsMergeRequestIidVersionsVersionId\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The internal ID of the merge request\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"merge_request_iid\",\"required\":true,\"type\":\"integer\"},{\"description\":\"The ID of the merge request diff version\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"version_id\",\"required\":true,\"type\":\"integer\"},{\"default\":false,\"description\":\"A diff in a Unified diff format\",\"in\":\"query\",\"name\":\"unidiff\",\"required\":false,\"type\":\"boolean\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get a single merge request diff version\",\"schema\":{\"description\":\"API_Entities_MergeRequestDiffFull model\",\"properties\":{\"base_commit_sha\":{\"type\":\"string\"},\"commits\":{\"description\":\"API_Entities_Commit model\",\"properties\":{\"author_email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"author_name\":{\"example\":\"John Smith\",\"type\":\"string\"},\"authored_date\":{\"example\":\"2012-05-28T04:42:42-07:00\",\"format\":\"date-time\",\"type\":\"string\"},\"committed_date\":{\"example\":\"2012-05-28T04:42:42-07:00\",\"format\":\"date-time\",\"type\":\"string\"},\"committer_email\":{\"example\":\"jack@example.com\",\"type\":\"string\"},\"committer_name\":{\"example\":\"Jack Smith\",\"type\":\"string\"},\"created_at\":{\"example\":\"2017-07-26T11:08:53.000+02:00\",\"format\":\"date-time\",\"type\":\"string\"},\"extended_trailers\":{\"example\":\"{ \\\"Signed-off-by\\\": [\\\"John Doe <johndoe@gitlab.com>\\\", \\\"Jane Doe <janedoe@gitlab.com>\\\"] }\",\"type\":\"object\"},\"id\":{\"example\":\"2695effb5807a22ff3d138d593fd856244e155e7\",\"type\":\"string\"},\"message\":{\"example\":\"Initial commit\",\"type\":\"string\"},\"parent_ids\":{\"example\":\"2a4b78934375d7f53875269ffd4f45fd83a84ebe\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"short_id\":{\"example\":\"2695effb\",\"type\":\"string\"},\"title\":{\"example\":\"Initial commit\",\"type\":\"string\"},\"trailers\":{\"example\":\"{ \\\"Merged-By\\\": \\\"Jane Doe janedoe@gitlab.com\\\" }\",\"type\":\"object\"},\"web_url\":{\"example\":\"https://gitlab.example.com/janedoe/gitlab-foss/-/commit/ed899a2f4b50b4370feeea94676502b42383c746\",\"type\":\"string\"}},\"type\":\"object\"},\"created_at\":{\"type\":\"string\"},\"diffs\":{\"description\":\"API_Entities_Diff model\",\"properties\":{\"a_mode\":{\"example\":\"100755\",\"type\":\"string\"},\"b_mode\":{\"example\":\"100644\",\"type\":\"string\"},\"collapsed\":{\"type\":\"boolean\"},\"deleted_file\":{\"type\":\"boolean\"},\"diff\":{\"example\":\"@@ -71,6 +71,8 @@\\\\n...\",\"type\":\"string\"},\"generated_file\":{\"type\":\"boolean\"},\"new_file\":{\"type\":\"boolean\"},\"new_path\":{\"example\":\"doc/update/5.4-to-6.0.md\",\"type\":\"string\"},\"old_path\":{\"example\":\"doc/update/5.4-to-6.0.md\",\"type\":\"string\"},\"renamed_file\":{\"type\":\"boolean\"},\"too_large\":{\"type\":\"boolean\"}},\"type\":\"object\"},\"head_commit_sha\":{\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"merge_request_id\":{\"type\":\"string\"},\"patch_id_sha\":{\"type\":\"string\"},\"real_size\":{\"type\":\"string\"},\"start_commit_sha\":{\"type\":\"string\"},\"state\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/merge_requests/{merge_request_iid}/versions/{version_id}","rename":{"param":{"id":"project_id","merge_request_iid":"merge_request_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"merge_requests"},{"var":"merge_request_id"},{"lit":"versions"},{"var":"version_id"}],"select":{"exist":["merge_request_id","project_id","unidiff","version_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["project","merge_request","version"]]},"key$":"api_entities_merge_request_diff_full","name__orig":"api_entities_merge_request_diff_full","Name":"ApiEntitiesMergeRequestDiffFull","name_":"api_entities_merge_request_diff_full","name-":"api-entities-merge-request-diff-full","NAME":"API_ENTITIES_MERGE_REQUEST_DIFF_FULL","index$":97}, {"active":true,"entity":"api_entities_merge_request_diff_full","key$":"BasicApiEntitiesMergeRequestDiffFullFlow","kind":"basic","name":"BasicApiEntitiesMergeRequestDiffFullFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"api_entities_merge_request_diff_full_ref01","srcdatavar":"api_entities_merge_request_diff_full_ref01_data","suffix":"_dt0"},"match":{"id":"api_entities_merge_request_diff_full01","merge_request_id":"merge_request01","project_id":"project01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_merge_request_diff_full_ref01"}}],"index$":0}]}, 'ApiEntitiesMergeRequestDiffFull')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let api_entities_merge_request_diff_full_ref01_data = Object.values(setup.data.existing.api_entities_merge_request_diff_full)[0] as any

    // LOAD
    const api_entities_merge_request_diff_full_ref01_ent = client.ApiEntitiesMergeRequestDiffFull()
    const api_entities_merge_request_diff_full_ref01_match_dt0: any = {}
    api_entities_merge_request_diff_full_ref01_match_dt0.id = api_entities_merge_request_diff_full_ref01_data.id
    const api_entities_merge_request_diff_full_ref01_data_dt0 = (await api_entities_merge_request_diff_full_ref01_ent.load(api_entities_merge_request_diff_full_ref01_match_dt0)).data()
    assert(api_entities_merge_request_diff_full_ref01_data_dt0.id === api_entities_merge_request_diff_full_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_merge_request_diff_full/ApiEntitiesMergeRequestDiffFullTestData.json')

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
    ['api_entities_merge_request_diff_full01','api_entities_merge_request_diff_full02','api_entities_merge_request_diff_full03','project01','project02','project03','merge_request01','merge_request02','merge_request03','version01','version02','version03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_MERGE_REQUEST_DIFF_FULL_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_MERGE_REQUEST_DIFF_FULL_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_MERGE_REQUEST_DIFF_FULL_ENTID']
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
  
