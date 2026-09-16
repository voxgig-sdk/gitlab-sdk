

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


describe('ApiEntitiesCompareEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesCompare()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_compare.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"commit","req":false,"short":"API_Entities_Commit model","type":"`$OBJECT`","index$":0},{"active":true,"name":"commits","req":false,"type":"`$ARRAY`","index$":1},{"active":true,"name":"compare_same_ref","req":false,"type":"`$BOOLEAN`","index$":2},{"active":true,"name":"compare_timeout","req":false,"type":"`$BOOLEAN`","index$":3},{"active":true,"name":"diffs","req":false,"type":"`$ARRAY`","index$":4},{"active":true,"name":"web_url","req":false,"type":"`$STRING`","index$":5}],"name":"api_entities_compare","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"example":1,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":"main","kind":"query","name":"from","orig":"from","reqd":true,"type":"`$ANY`","index$":0},{"active":true,"example":1,"kind":"query","name":"from_project_id","orig":"from_project_id","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"kind":"query","name":"straight","orig":"straight","reqd":false,"type":"`$ANY`","index$":2},{"active":true,"example":"feature","kind":"query","name":"to","orig":"to","reqd":true,"type":"`$ANY`","index$":3},{"active":true,"kind":"query","name":"unidiff","orig":"unidiff","reqd":false,"type":"`$ANY`","index$":4}]},"contract":{"id":"GET /api/v4/projects/{id}/repository/compare","json":"{\"operationId\":\"getApiV4ProjectsIdRepositoryCompare\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"example\":1,\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The commit, branch name, or tag name to start comparison\",\"example\":\"main\",\"in\":\"query\",\"name\":\"from\",\"required\":true,\"type\":\"string\"},{\"description\":\"The commit, branch name, or tag name to stop comparison\",\"example\":\"feature\",\"in\":\"query\",\"name\":\"to\",\"required\":true,\"type\":\"string\"},{\"description\":\"The project to compare from\",\"example\":1,\"format\":\"int32\",\"in\":\"query\",\"name\":\"from_project_id\",\"required\":false,\"type\":\"integer\"},{\"default\":false,\"description\":\"Comparison method, `true` for direct comparison between `from` and `to` (`from`..`to`), `false` to compare using merge base (`from`...`to`)\",\"in\":\"query\",\"name\":\"straight\",\"required\":false,\"type\":\"boolean\"},{\"default\":false,\"description\":\"A diff in a Unified diff format\",\"in\":\"query\",\"name\":\"unidiff\",\"required\":false,\"type\":\"boolean\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Compare two branches, tags, or commits\",\"schema\":{\"description\":\"API_Entities_Compare model\",\"properties\":{\"commit\":{\"description\":\"API_Entities_Commit model\",\"properties\":{\"author_email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"author_name\":{\"example\":\"John Smith\",\"type\":\"string\"},\"authored_date\":{\"example\":\"2012-05-28T04:42:42-07:00\",\"format\":\"date-time\",\"type\":\"string\"},\"committed_date\":{\"example\":\"2012-05-28T04:42:42-07:00\",\"format\":\"date-time\",\"type\":\"string\"},\"committer_email\":{\"example\":\"jack@example.com\",\"type\":\"string\"},\"committer_name\":{\"example\":\"Jack Smith\",\"type\":\"string\"},\"created_at\":{\"example\":\"2017-07-26T11:08:53.000+02:00\",\"format\":\"date-time\",\"type\":\"string\"},\"extended_trailers\":{\"example\":\"{ \\\"Signed-off-by\\\": [\\\"John Doe <johndoe@gitlab.com>\\\", \\\"Jane Doe <janedoe@gitlab.com>\\\"] }\",\"type\":\"object\"},\"id\":{\"example\":\"2695effb5807a22ff3d138d593fd856244e155e7\",\"type\":\"string\"},\"message\":{\"example\":\"Initial commit\",\"type\":\"string\"},\"parent_ids\":{\"example\":\"2a4b78934375d7f53875269ffd4f45fd83a84ebe\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"short_id\":{\"example\":\"2695effb\",\"type\":\"string\"},\"title\":{\"example\":\"Initial commit\",\"type\":\"string\"},\"trailers\":{\"example\":\"{ \\\"Merged-By\\\": \\\"Jane Doe janedoe@gitlab.com\\\" }\",\"type\":\"object\"},\"web_url\":{\"example\":\"https://gitlab.example.com/janedoe/gitlab-foss/-/commit/ed899a2f4b50b4370feeea94676502b42383c746\",\"type\":\"string\"}},\"type\":\"object\"},\"commits\":{\"items\":{\"description\":\"API_Entities_Commit model\",\"properties\":{\"author_email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"author_name\":{\"example\":\"John Smith\",\"type\":\"string\"},\"authored_date\":{\"example\":\"2012-05-28T04:42:42-07:00\",\"format\":\"date-time\",\"type\":\"string\"},\"committed_date\":{\"example\":\"2012-05-28T04:42:42-07:00\",\"format\":\"date-time\",\"type\":\"string\"},\"committer_email\":{\"example\":\"jack@example.com\",\"type\":\"string\"},\"committer_name\":{\"example\":\"Jack Smith\",\"type\":\"string\"},\"created_at\":{\"example\":\"2017-07-26T11:08:53.000+02:00\",\"format\":\"date-time\",\"type\":\"string\"},\"extended_trailers\":{\"example\":\"{ \\\"Signed-off-by\\\": [\\\"John Doe <johndoe@gitlab.com>\\\", \\\"Jane Doe <janedoe@gitlab.com>\\\"] }\",\"type\":\"object\"},\"id\":{\"example\":\"2695effb5807a22ff3d138d593fd856244e155e7\",\"type\":\"string\"},\"message\":{\"example\":\"Initial commit\",\"type\":\"string\"},\"parent_ids\":{\"example\":\"2a4b78934375d7f53875269ffd4f45fd83a84ebe\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"short_id\":{\"example\":\"2695effb\",\"type\":\"string\"},\"title\":{\"example\":\"Initial commit\",\"type\":\"string\"},\"trailers\":{\"example\":\"{ \\\"Merged-By\\\": \\\"Jane Doe janedoe@gitlab.com\\\" }\",\"type\":\"object\"},\"web_url\":{\"example\":\"https://gitlab.example.com/janedoe/gitlab-foss/-/commit/ed899a2f4b50b4370feeea94676502b42383c746\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"compare_same_ref\":{\"type\":\"boolean\"},\"compare_timeout\":{\"type\":\"boolean\"},\"diffs\":{\"items\":{\"description\":\"API_Entities_Diff model\",\"properties\":{\"a_mode\":{\"example\":\"100755\",\"type\":\"string\"},\"b_mode\":{\"example\":\"100644\",\"type\":\"string\"},\"collapsed\":{\"type\":\"boolean\"},\"deleted_file\":{\"type\":\"boolean\"},\"diff\":{\"example\":\"@@ -71,6 +71,8 @@\\\\n...\",\"type\":\"string\"},\"generated_file\":{\"type\":\"boolean\"},\"new_file\":{\"type\":\"boolean\"},\"new_path\":{\"example\":\"doc/update/5.4-to-6.0.md\",\"type\":\"string\"},\"old_path\":{\"example\":\"doc/update/5.4-to-6.0.md\",\"type\":\"string\"},\"renamed_file\":{\"type\":\"boolean\"},\"too_large\":{\"type\":\"boolean\"}},\"type\":\"object\"},\"type\":\"array\"},\"web_url\":{\"example\":\"https://gitlab.example.com/gitlab/gitlab-foss/-/compare/main...feature\",\"type\":\"string\"}},\"type\":\"object\"}}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/repository/compare","rename":{"param":{"id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"repository"},{"lit":"compare"}],"select":{"exist":["from","from_project_id","project_id","straight","to","unidiff"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["project"]]},"key$":"api_entities_compare","name__orig":"api_entities_compare","Name":"ApiEntitiesCompare","name_":"api_entities_compare","name-":"api-entities-compare","NAME":"API_ENTITIES_COMPARE","index$":52}, {"active":true,"entity":"api_entities_compare","key$":"BasicApiEntitiesCompareFlow","kind":"basic","name":"BasicApiEntitiesCompareFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{"project_id":"project01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"api_entities_compare_ref01"}}],"index$":0}]}, 'ApiEntitiesCompare')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let api_entities_compare_ref01_data = Object.values(setup.data.existing.api_entities_compare)[0] as any

    // LIST
    const api_entities_compare_ref01_ent = client.ApiEntitiesCompare()
    const api_entities_compare_ref01_match: any = {}
    api_entities_compare_ref01_match['project_id'] = setup.idmap['project01']

    const api_entities_compare_ref01_list = (await api_entities_compare_ref01_ent.list(api_entities_compare_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_compare/ApiEntitiesCompareTestData.json')

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
    ['api_entities_compare01','api_entities_compare02','api_entities_compare03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_COMPARE_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_COMPARE_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_COMPARE_ENTID']
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
  
