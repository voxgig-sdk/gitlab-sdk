

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


describe('ApiEntitiesCommitNoteEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesCommitNote()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create', 'list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_commit_note.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"author","req":false,"short":"API_Entities_UserBasic model","type":"`$OBJECT`","index$":0},{"active":true,"name":"avatar_path","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"avatar_url","req":false,"type":"`$STRING`","index$":2},{"active":true,"format":"date-time","name":"created_at","req":false,"type":"`$STRING`","index$":3},{"active":true,"name":"custom_attributes","req":false,"type":"`$ARRAY`","index$":4},{"active":true,"format":"int32","name":"id","req":false,"type":"`$INTEGER`","index$":5},{"active":true,"format":"int32","name":"line","req":false,"type":"`$INTEGER`","index$":6},{"active":true,"name":"line_type","req":false,"type":"`$STRING`","index$":7},{"active":true,"name":"locked","req":false,"type":"`$BOOLEAN`","index$":8},{"active":true,"name":"name","req":false,"type":"`$STRING`","index$":9},{"active":true,"name":"note","req":false,"type":"`$STRING`","index$":10},{"active":true,"name":"path","req":false,"type":"`$STRING`","index$":11},{"active":true,"name":"public_email","req":false,"type":"`$STRING`","index$":12},{"active":true,"name":"state","req":false,"type":"`$STRING`","index$":13},{"active":true,"name":"username","req":false,"type":"`$STRING`","index$":14},{"active":true,"name":"web_url","req":false,"type":"`$STRING`","index$":15}],"id":{"field":"id","name":"id"},"name":"api_entities_commit_note","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"sha","orig":"sha","reqd":true,"type":"`$ANY`","index$":1}],"query":[{"active":true,"kind":"query","name":"post_api_v4_projects_id_repository_commits_sha_comment","orig":"post_api_v4_projects_id_repository_commits_sha_comment","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"POST /api/v4/projects/{id}/repository/commits/{sha}/comments","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4ProjectsIdRepositoryCommitsShaComments\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"A commit sha, or the name of a branch or tag on which to post a comment\",\"in\":\"path\",\"name\":\"sha\",\"required\":true,\"type\":\"string\"},{\"in\":\"body\",\"name\":\"postApiV4ProjectsIdRepositoryCommitsShaComments\",\"required\":true,\"schema\":{\"description\":\"Post comment to commit\",\"properties\":{\"line\":{\"description\":\"The line number\",\"example\":11,\"format\":\"int32\",\"type\":\"integer\"},\"line_type\":{\"default\":\"new\",\"description\":\"The type of the line\",\"enum\":[\"new\",\"old\"],\"type\":\"string\"},\"note\":{\"description\":\"The text of the comment\",\"example\":\"Nice code!\",\"type\":\"string\"},\"path\":{\"description\":\"The file path\",\"example\":\"doc/update/5.4-to-6.0.md\",\"type\":\"string\"}},\"required\":[\"note\",\"line\",\"line_type\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Post comment to commit\",\"schema\":{\"description\":\"API_Entities_CommitNote model\",\"properties\":{\"author\":{\"description\":\"API_Entities_UserBasic model\",\"properties\":{\"avatar_path\":{\"example\":\"/user/avatar/28/The-Big-Lebowski-400-400.png\",\"type\":\"string\"},\"avatar_url\":{\"example\":\"https://gravatar.com/avatar/1\",\"type\":\"string\"},\"custom_attributes\":{\"items\":{\"description\":\"API_Entities_CustomAttribute model\",\"properties\":{\"key\":{\"example\":\"foo\",\"type\":\"string\"},\"value\":{\"example\":\"bar\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"locked\":{\"type\":\"boolean\"},\"name\":{\"example\":\"Administrator\",\"type\":\"string\"},\"public_email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"state\":{\"example\":\"active\",\"type\":\"string\"},\"username\":{\"example\":\"admin\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/root\",\"type\":\"string\"}},\"type\":\"object\"},\"created_at\":{\"example\":\"2016-01-19T09:44:55.600Z\",\"format\":\"date-time\",\"type\":\"string\"},\"line\":{\"example\":11,\"format\":\"int32\",\"type\":\"integer\"},\"line_type\":{\"example\":\"new\",\"type\":\"string\"},\"note\":{\"example\":\"this doc is really nice\",\"type\":\"string\"},\"path\":{\"example\":\"README.md\",\"type\":\"string\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Bad request\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/projects/{id}/repository/commits/{sha}/comments","rename":{"param":{"id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"repository"},{"lit":"commits"},{"var":"sha"},{"lit":"comments"}],"select":{"exist":["post_api_v4_projects_id_repository_commits_sha_comment","project_id","sha"]},"transform":{"req":"`reqdata`","res":"`body.author`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"sha","orig":"sha","reqd":true,"type":"`$ANY`","index$":1}],"query":[{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"example":20,"kind":"query","name":"per_page","orig":"per_page","reqd":false,"type":"`$INTEGER`","index$":1}]},"contract":{"id":"GET /api/v4/projects/{id}/repository/commits/{sha}/comments","json":"{\"operationId\":\"getApiV4ProjectsIdRepositoryCommitsShaComments\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"default\":1,\"description\":\"Current page number\",\"example\":1,\"format\":\"int32\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"type\":\"integer\"},{\"default\":20,\"description\":\"Number of items per page\",\"example\":20,\"format\":\"int32\",\"in\":\"query\",\"name\":\"per_page\",\"required\":false,\"type\":\"integer\"},{\"description\":\"A commit sha, or the name of a branch or tag\",\"in\":\"path\",\"name\":\"sha\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get a commit's comments\",\"schema\":{\"items\":{\"description\":\"API_Entities_CommitNote model\",\"properties\":{\"author\":{\"description\":\"API_Entities_UserBasic model\",\"properties\":{\"avatar_path\":{\"example\":\"/user/avatar/28/The-Big-Lebowski-400-400.png\",\"type\":\"string\"},\"avatar_url\":{\"example\":\"https://gravatar.com/avatar/1\",\"type\":\"string\"},\"custom_attributes\":{\"items\":{\"description\":\"API_Entities_CustomAttribute model\",\"properties\":{\"key\":{\"example\":\"foo\",\"type\":\"string\"},\"value\":{\"example\":\"bar\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"locked\":{\"type\":\"boolean\"},\"name\":{\"example\":\"Administrator\",\"type\":\"string\"},\"public_email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"state\":{\"example\":\"active\",\"type\":\"string\"},\"username\":{\"example\":\"admin\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/root\",\"type\":\"string\"}},\"type\":\"object\"},\"created_at\":{\"example\":\"2016-01-19T09:44:55.600Z\",\"format\":\"date-time\",\"type\":\"string\"},\"line\":{\"example\":11,\"format\":\"int32\",\"type\":\"integer\"},\"line_type\":{\"example\":\"new\",\"type\":\"string\"},\"note\":{\"example\":\"this doc is really nice\",\"type\":\"string\"},\"path\":{\"example\":\"README.md\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/repository/commits/{sha}/comments","rename":{"param":{"id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"repository"},{"lit":"commits"},{"var":"sha"},{"lit":"comments"}],"select":{"exist":["page","per_page","project_id","sha"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["project","commit"]]},"key$":"api_entities_commit_note","name__orig":"api_entities_commit_note","Name":"ApiEntitiesCommitNote","name_":"api_entities_commit_note","name-":"api-entities-commit-note","NAME":"API_ENTITIES_COMMIT_NOTE","index$":48}, {"active":true,"entity":"api_entities_commit_note","key$":"BasicApiEntitiesCommitNoteFlow","kind":"basic","name":"BasicApiEntitiesCommitNoteFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"api_entities_commit_note_ref01"},"match":{"project_id":"project01","sha":"sha01"},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{},"match":{"project_id":"project01","sha":"sha01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"api_entities_commit_note_ref01"}}],"index$":1}]}, 'ApiEntitiesCommitNote')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const api_entities_commit_note_ref01_ent = client.ApiEntitiesCommitNote()
    let api_entities_commit_note_ref01_data = setup.data.new.api_entities_commit_note['api_entities_commit_note_ref01']
    api_entities_commit_note_ref01_data['project_id'] = setup.idmap['project01']
    api_entities_commit_note_ref01_data['sha'] = setup.idmap['sha01']

    api_entities_commit_note_ref01_data = (await api_entities_commit_note_ref01_ent.create(api_entities_commit_note_ref01_data)).data()
    assert(null != api_entities_commit_note_ref01_data.id)


    // LIST
    const api_entities_commit_note_ref01_match: any = {}
    api_entities_commit_note_ref01_match['project_id'] = setup.idmap['project01']
    api_entities_commit_note_ref01_match['sha'] = setup.idmap['sha01']

    const api_entities_commit_note_ref01_list = (await api_entities_commit_note_ref01_ent.list(api_entities_commit_note_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(api_entities_commit_note_ref01_list, { id: api_entities_commit_note_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_commit_note/ApiEntitiesCommitNoteTestData.json')

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
    ['api_entities_commit_note01','api_entities_commit_note02','api_entities_commit_note03','project01','project02','project03','commit01','commit02','commit03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_COMMIT_NOTE_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_COMMIT_NOTE_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_COMMIT_NOTE_ENTID']
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
  
