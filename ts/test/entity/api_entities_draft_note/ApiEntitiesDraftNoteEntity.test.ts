

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


describe('ApiEntitiesDraftNoteEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesDraftNote()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_draft_note.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"int32","name":"author_id","req":false,"type":"`$INTEGER`","index$":0},{"active":true,"format":"int32","name":"commit_id","req":false,"type":"`$INTEGER`","index$":1},{"active":true,"format":"int32","name":"discussion_id","req":false,"type":"`$INTEGER`","index$":2},{"active":true,"format":"int32","name":"id","req":false,"type":"`$INTEGER`","index$":3},{"active":true,"name":"line_code","req":false,"type":"`$STRING`","index$":4},{"active":true,"format":"int32","name":"merge_request_id","req":false,"type":"`$INTEGER`","index$":5},{"active":true,"name":"note","req":false,"type":"`$STRING`","index$":6},{"active":true,"name":"position","req":false,"type":"`$OBJECT`","index$":7},{"active":true,"name":"resolve_discussion","req":false,"type":"`$BOOLEAN`","index$":8}],"id":{"field":"id","name":"id"},"name":"api_entities_draft_note","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"merge_request_id","orig":"merge_request_iid","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}],"query":[{"active":true,"kind":"query","name":"post_api_v4_projects_id_merge_requests_merge_request_iid_draft_note","orig":"post_api_v4_projects_id_merge_requests_merge_request_iid_draft_note","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"POST /api/v4/projects/{id}/merge_requests/{merge_request_iid}/draft_notes","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4ProjectsIdMergeRequestsMergeRequestIidDraftNotes\",\"parameters\":[{\"description\":\"The ID of a project.\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The ID of a merge request.\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"merge_request_iid\",\"required\":true,\"type\":\"integer\"},{\"in\":\"body\",\"name\":\"postApiV4ProjectsIdMergeRequestsMergeRequestIidDraftNotes\",\"required\":true,\"schema\":{\"description\":\"Create a new draft note\",\"properties\":{\"commit_id\":{\"description\":\"The sha of a commit to associate the draft note to.\",\"type\":\"string\"},\"in_reply_to_discussion_id\":{\"description\":\"The ID of a discussion the draft note replies to.\",\"type\":\"string\"},\"note\":{\"description\":\"The content of a note.\",\"type\":\"string\"},\"position\":{\"properties\":{\"base_sha\":{\"description\":\"Base commit SHA in the source branch\",\"type\":\"string\"},\"head_sha\":{\"description\":\"SHA referencing HEAD of this merge request\",\"type\":\"string\"},\"height\":{\"description\":\"Height of the image\",\"format\":\"int32\",\"type\":\"integer\"},\"line_range\":{\"description\":\"Multi-line start and end\",\"properties\":{\"end\":{\"properties\":{\"line_code\":{\"description\":\"End line code for multi-line note\",\"type\":\"string\"},\"new_line\":{\"description\":\"End new_line line number\",\"type\":\"string\"},\"old_line\":{\"description\":\"End old_line line number\",\"type\":\"string\"},\"type\":{\"description\":\"End line type for multi-line note\",\"type\":\"string\"}},\"type\":\"object\"},\"start\":{\"properties\":{\"line_code\":{\"description\":\"Start line code for multi-line note\",\"type\":\"string\"},\"new_line\":{\"description\":\"Start new_line line number\",\"type\":\"string\"},\"old_line\":{\"description\":\"Start old_line line number\",\"type\":\"string\"},\"type\":{\"description\":\"Start line type for multi-line note\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"new_line\":{\"description\":\"Line number after change\",\"format\":\"int32\",\"type\":\"integer\"},\"new_path\":{\"description\":\"File path after change\",\"type\":\"string\"},\"old_line\":{\"description\":\"Line number before change\",\"format\":\"int32\",\"type\":\"integer\"},\"old_path\":{\"description\":\"File path before change\",\"type\":\"string\"},\"position_type\":{\"description\":\"Type of the position reference\",\"enum\":[\"text\",\"image\",\"file\"],\"type\":\"string\"},\"start_sha\":{\"description\":\"SHA referencing commit in target branch\",\"type\":\"string\"},\"width\":{\"description\":\"Width of the image\",\"format\":\"int32\",\"type\":\"integer\"},\"x\":{\"description\":\"X coordinate in the image\",\"format\":\"int32\",\"type\":\"integer\"},\"y\":{\"description\":\"Y coordinate in the image\",\"format\":\"int32\",\"type\":\"integer\"}},\"required\":[\"base_sha\",\"start_sha\",\"head_sha\",\"position_type\"],\"type\":\"object\"},\"resolve_discussion\":{\"description\":\"The associated discussion should be resolved.\",\"type\":\"boolean\"}},\"required\":[\"note\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"Create a new draft note\",\"schema\":{\"description\":\"API_Entities_DraftNote model\",\"properties\":{\"author_id\":{\"example\":4,\"format\":\"int32\",\"type\":\"integer\"},\"commit_id\":{\"example\":4,\"format\":\"int32\",\"type\":\"integer\"},\"discussion_id\":{\"example\":613,\"format\":\"int32\",\"type\":\"integer\"},\"id\":{\"example\":2,\"format\":\"int32\",\"type\":\"integer\"},\"line_code\":{\"example\":\"1c497fbb3a46b78edf0_2_4\",\"type\":\"string\"},\"merge_request_id\":{\"example\":52,\"format\":\"int32\",\"type\":\"integer\"},\"note\":{\"example\":\"This is a note\",\"type\":\"string\"},\"position\":{\"example\":{\"base_sha\":\"aa149113\",\"head_sha\":\"be3020c7\",\"line_range\":{\"end\":{\"line_code\":\"1c497fbb3a46b78edf04cc2a2fa33f67e3ffbe2a_2_4\",\"new_line\":4,\"old_line\":2,\"type\":null},\"start\":{\"line_code\":\"1c497fbb3a46b78edf04cc2a2fa33f67e3ffbe2a_2_4\",\"new_line\":4,\"old_line\":2,\"type\":null}},\"new_line\":4,\"new_path\":\"example.md\",\"old_line\":2,\"old_path\":\"example.md\",\"position_type\":\"text\",\"start_sha\":\"b3a0a8c4\"},\"type\":\"object\"},\"resolve_discussion\":{\"example\":true,\"type\":\"boolean\"}},\"type\":\"object\"}},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/projects/{id}/merge_requests/{merge_request_iid}/draft_notes","rename":{"param":{"id":"project_id","merge_request_iid":"merge_request_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"merge_requests"},{"var":"merge_request_id"},{"lit":"draft_notes"}],"select":{"exist":["merge_request_id","post_api_v4_projects_id_merge_requests_merge_request_iid_draft_note","project_id"]},"transform":{"req":"`reqdata`","res":"`body.position`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"merge_request_id","orig":"merge_request_iid","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /api/v4/projects/{id}/merge_requests/{merge_request_iid}/draft_notes","json":"{\"operationId\":\"getApiV4ProjectsIdMergeRequestsMergeRequestIidDraftNotes\",\"parameters\":[{\"description\":\"The ID of a project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The ID of a merge request\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"merge_request_iid\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get a list of merge request draft notes\",\"schema\":{\"items\":{\"description\":\"API_Entities_DraftNote model\",\"properties\":{\"author_id\":{\"example\":4,\"format\":\"int32\",\"type\":\"integer\"},\"commit_id\":{\"example\":4,\"format\":\"int32\",\"type\":\"integer\"},\"discussion_id\":{\"example\":613,\"format\":\"int32\",\"type\":\"integer\"},\"id\":{\"example\":2,\"format\":\"int32\",\"type\":\"integer\"},\"line_code\":{\"example\":\"1c497fbb3a46b78edf0_2_4\",\"type\":\"string\"},\"merge_request_id\":{\"example\":52,\"format\":\"int32\",\"type\":\"integer\"},\"note\":{\"example\":\"This is a note\",\"type\":\"string\"},\"position\":{\"example\":{\"base_sha\":\"aa149113\",\"head_sha\":\"be3020c7\",\"line_range\":{\"end\":{\"line_code\":\"1c497fbb3a46b78edf04cc2a2fa33f67e3ffbe2a_2_4\",\"new_line\":4,\"old_line\":2,\"type\":null},\"start\":{\"line_code\":\"1c497fbb3a46b78edf04cc2a2fa33f67e3ffbe2a_2_4\",\"new_line\":4,\"old_line\":2,\"type\":null}},\"new_line\":4,\"new_path\":\"example.md\",\"old_line\":2,\"old_path\":\"example.md\",\"position_type\":\"text\",\"start_sha\":\"b3a0a8c4\"},\"type\":\"object\"},\"resolve_discussion\":{\"example\":true,\"type\":\"boolean\"}},\"type\":\"object\"},\"type\":\"array\"}},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/merge_requests/{merge_request_iid}/draft_notes","rename":{"param":{"id":"project_id","merge_request_iid":"merge_request_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"merge_requests"},{"var":"merge_request_id"},{"lit":"draft_notes"}],"select":{"exist":["merge_request_id","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"draft_note_id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"merge_request_id","orig":"merge_request_iid","reqd":true,"type":"`$STRING`","index$":1},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":2}]},"contract":{"id":"GET /api/v4/projects/{id}/merge_requests/{merge_request_iid}/draft_notes/{draft_note_id}","json":"{\"operationId\":\"getApiV4ProjectsIdMergeRequestsMergeRequestIidDraftNotesDraftNoteId\",\"parameters\":[{\"description\":\"The ID of a project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The ID of a merge request\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"merge_request_iid\",\"required\":true,\"type\":\"integer\"},{\"description\":\"The ID of a draft note\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"draft_note_id\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get a single draft note\",\"schema\":{\"description\":\"API_Entities_DraftNote model\",\"properties\":{\"author_id\":{\"example\":4,\"format\":\"int32\",\"type\":\"integer\"},\"commit_id\":{\"example\":4,\"format\":\"int32\",\"type\":\"integer\"},\"discussion_id\":{\"example\":613,\"format\":\"int32\",\"type\":\"integer\"},\"id\":{\"example\":2,\"format\":\"int32\",\"type\":\"integer\"},\"line_code\":{\"example\":\"1c497fbb3a46b78edf0_2_4\",\"type\":\"string\"},\"merge_request_id\":{\"example\":52,\"format\":\"int32\",\"type\":\"integer\"},\"note\":{\"example\":\"This is a note\",\"type\":\"string\"},\"position\":{\"example\":{\"base_sha\":\"aa149113\",\"head_sha\":\"be3020c7\",\"line_range\":{\"end\":{\"line_code\":\"1c497fbb3a46b78edf04cc2a2fa33f67e3ffbe2a_2_4\",\"new_line\":4,\"old_line\":2,\"type\":null},\"start\":{\"line_code\":\"1c497fbb3a46b78edf04cc2a2fa33f67e3ffbe2a_2_4\",\"new_line\":4,\"old_line\":2,\"type\":null}},\"new_line\":4,\"new_path\":\"example.md\",\"old_line\":2,\"old_path\":\"example.md\",\"position_type\":\"text\",\"start_sha\":\"b3a0a8c4\"},\"type\":\"object\"},\"resolve_discussion\":{\"example\":true,\"type\":\"boolean\"}},\"type\":\"object\"}},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/merge_requests/{merge_request_iid}/draft_notes/{draft_note_id}","rename":{"param":{"draft_note_id":"id","id":"project_id","merge_request_iid":"merge_request_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"merge_requests"},{"var":"merge_request_id"},{"lit":"draft_notes"},{"var":"id"}],"select":{"exist":["id","merge_request_id","project_id"]},"transform":{"req":"`reqdata`","res":"`body.position`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"draft_note_id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"merge_request_id","orig":"merge_request_iid","reqd":true,"type":"`$STRING`","index$":1},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":2}],"query":[{"active":true,"kind":"query","name":"put_api_v4_projects_id_merge_requests_merge_request_iid_draft_notes_draft_note_id","orig":"put_api_v4_projects_id_merge_requests_merge_request_iid_draft_notes_draft_note_id","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"PUT /api/v4/projects/{id}/merge_requests/{merge_request_iid}/draft_notes/{draft_note_id}","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"putApiV4ProjectsIdMergeRequestsMergeRequestIidDraftNotesDraftNoteId\",\"parameters\":[{\"description\":\"The ID of a project.\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The ID of a merge request.\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"merge_request_iid\",\"required\":true,\"type\":\"integer\"},{\"description\":\"The ID of a draft note\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"draft_note_id\",\"required\":true,\"type\":\"integer\"},{\"in\":\"body\",\"name\":\"putApiV4ProjectsIdMergeRequestsMergeRequestIidDraftNotesDraftNoteId\",\"required\":true,\"schema\":{\"description\":\"Modify an existing draft note\",\"properties\":{\"note\":{\"description\":\"The content of a note.\",\"type\":\"string\"},\"position\":{\"properties\":{\"base_sha\":{\"description\":\"Base commit SHA in the source branch\",\"type\":\"string\"},\"head_sha\":{\"description\":\"SHA referencing HEAD of this merge request\",\"type\":\"string\"},\"height\":{\"description\":\"Height of the image\",\"format\":\"int32\",\"type\":\"integer\"},\"line_range\":{\"description\":\"Multi-line start and end\",\"properties\":{\"end\":{\"properties\":{\"line_code\":{\"description\":\"End line code for multi-line note\",\"type\":\"string\"},\"new_line\":{\"description\":\"End new_line line number\",\"type\":\"string\"},\"old_line\":{\"description\":\"End old_line line number\",\"type\":\"string\"},\"type\":{\"description\":\"End line type for multi-line note\",\"type\":\"string\"}},\"type\":\"object\"},\"start\":{\"properties\":{\"line_code\":{\"description\":\"Start line code for multi-line note\",\"type\":\"string\"},\"new_line\":{\"description\":\"Start new_line line number\",\"type\":\"string\"},\"old_line\":{\"description\":\"Start old_line line number\",\"type\":\"string\"},\"type\":{\"description\":\"Start line type for multi-line note\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"new_line\":{\"description\":\"Line number after change\",\"format\":\"int32\",\"type\":\"integer\"},\"new_path\":{\"description\":\"File path after change\",\"type\":\"string\"},\"old_line\":{\"description\":\"Line number before change\",\"format\":\"int32\",\"type\":\"integer\"},\"old_path\":{\"description\":\"File path before change\",\"type\":\"string\"},\"position_type\":{\"description\":\"Type of the position reference\",\"enum\":[\"text\",\"image\",\"file\"],\"type\":\"string\"},\"start_sha\":{\"description\":\"SHA referencing commit in target branch\",\"type\":\"string\"},\"width\":{\"description\":\"Width of the image\",\"format\":\"int32\",\"type\":\"integer\"},\"x\":{\"description\":\"X coordinate in the image\",\"format\":\"int32\",\"type\":\"integer\"},\"y\":{\"description\":\"Y coordinate in the image\",\"format\":\"int32\",\"type\":\"integer\"}},\"required\":[\"base_sha\",\"start_sha\",\"head_sha\",\"position_type\"],\"type\":\"object\"}},\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Modify an existing draft note\",\"schema\":{\"description\":\"API_Entities_DraftNote model\",\"properties\":{\"author_id\":{\"example\":4,\"format\":\"int32\",\"type\":\"integer\"},\"commit_id\":{\"example\":4,\"format\":\"int32\",\"type\":\"integer\"},\"discussion_id\":{\"example\":613,\"format\":\"int32\",\"type\":\"integer\"},\"id\":{\"example\":2,\"format\":\"int32\",\"type\":\"integer\"},\"line_code\":{\"example\":\"1c497fbb3a46b78edf0_2_4\",\"type\":\"string\"},\"merge_request_id\":{\"example\":52,\"format\":\"int32\",\"type\":\"integer\"},\"note\":{\"example\":\"This is a note\",\"type\":\"string\"},\"position\":{\"example\":{\"base_sha\":\"aa149113\",\"head_sha\":\"be3020c7\",\"line_range\":{\"end\":{\"line_code\":\"1c497fbb3a46b78edf04cc2a2fa33f67e3ffbe2a_2_4\",\"new_line\":4,\"old_line\":2,\"type\":null},\"start\":{\"line_code\":\"1c497fbb3a46b78edf04cc2a2fa33f67e3ffbe2a_2_4\",\"new_line\":4,\"old_line\":2,\"type\":null}},\"new_line\":4,\"new_path\":\"example.md\",\"old_line\":2,\"old_path\":\"example.md\",\"position_type\":\"text\",\"start_sha\":\"b3a0a8c4\"},\"type\":\"object\"},\"resolve_discussion\":{\"example\":true,\"type\":\"boolean\"}},\"type\":\"object\"}},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"PUT","orig":"/api/v4/projects/{id}/merge_requests/{merge_request_iid}/draft_notes/{draft_note_id}","rename":{"param":{"draft_note_id":"id","id":"project_id","merge_request_iid":"merge_request_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"merge_requests"},{"var":"merge_request_id"},{"lit":"draft_notes"},{"var":"id"}],"select":{"exist":["id","merge_request_id","project_id","put_api_v4_projects_id_merge_requests_merge_request_iid_draft_notes_draft_note_id"]},"transform":{"req":"`reqdata`","res":"`body.position`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"draft_note_id","orig":"draft_note_id","reqd":true,"type":"`$STRING`"},{"active":true,"kind":"param","name":"merge_request_id","orig":"merge_request_iid","reqd":true,"type":"`$STRING`"},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`"}]},"contract":{"id":"PUT /api/v4/projects/{id}/merge_requests/{merge_request_iid}/draft_notes/{draft_note_id}/publish","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"putApiV4ProjectsIdMergeRequestsMergeRequestIidDraftNotesDraftNoteIdPublish\",\"parameters\":[{\"description\":\"The ID of a project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The ID of a merge request\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"merge_request_iid\",\"required\":true,\"type\":\"integer\"},{\"description\":\"The ID of a draft note\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"draft_note_id\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"204\":{\"description\":\"Publish a pending draft note\"},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"PUT","orig":"/api/v4/projects/{id}/merge_requests/{merge_request_iid}/draft_notes/{draft_note_id}/publish","rename":{"param":{"id":"project_id","merge_request_iid":"merge_request_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"merge_requests"},{"var":"merge_request_id"},{"lit":"draft_notes"},{"var":"draft_note_id"},{"lit":"publish"}],"select":{"$action":"publish","exist":["draft_note_id","merge_request_id","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"update"}},"relations":{"ancestors":[["project","merge_request"],["project","merge_request","draft_note"]]},"key$":"api_entities_draft_note","name__orig":"api_entities_draft_note","Name":"ApiEntitiesDraftNote","name_":"api_entities_draft_note","name-":"api-entities-draft-note","NAME":"API_ENTITIES_DRAFT_NOTE","index$":67}, {"active":true,"entity":"api_entities_draft_note","key$":"BasicApiEntitiesDraftNoteFlow","kind":"basic","name":"BasicApiEntitiesDraftNoteFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"api_entities_draft_note_ref01"},"match":{"merge_request_id":"merge_request01","project_id":"project01"},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{},"match":{"merge_request_id":"merge_request01","project_id":"project01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"api_entities_draft_note_ref01"}}],"index$":1},{"active":true,"data":{"merge_request_id":"merge_request01","project_id":"project01"},"input":{"ref":"api_entities_draft_note_ref01","srcdatavar":"api_entities_draft_note_ref01_data","suffix":"_up0","textfield":"line_code"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_draft_note_ref01"}}],"valid":[],"index$":2},{"active":true,"data":{},"input":{"ref":"api_entities_draft_note_ref01","srcdatavar":"api_entities_draft_note_ref01_data","suffix":"_dt0"},"match":{"id":"api_entities_draft_note01","merge_request_id":"merge_request01","project_id":"project01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_draft_note_ref01"}}],"index$":3}]}, 'ApiEntitiesDraftNote')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const api_entities_draft_note_ref01_ent = client.ApiEntitiesDraftNote()
    let api_entities_draft_note_ref01_data = setup.data.new.api_entities_draft_note['api_entities_draft_note_ref01']
    api_entities_draft_note_ref01_data['merge_request_id'] = setup.idmap['merge_request01']
    api_entities_draft_note_ref01_data['project_id'] = setup.idmap['project01']

    api_entities_draft_note_ref01_data = (await api_entities_draft_note_ref01_ent.create(api_entities_draft_note_ref01_data)).data()
    assert(null != api_entities_draft_note_ref01_data.id)


    // LIST
    const api_entities_draft_note_ref01_match: any = {}
    api_entities_draft_note_ref01_match['merge_request_id'] = setup.idmap['merge_request01']
    api_entities_draft_note_ref01_match['project_id'] = setup.idmap['project01']

    const api_entities_draft_note_ref01_list = (await api_entities_draft_note_ref01_ent.list(api_entities_draft_note_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(api_entities_draft_note_ref01_list, { id: api_entities_draft_note_ref01_data.id })))


    // UPDATE
    const api_entities_draft_note_ref01_data_up0: any = {}
    api_entities_draft_note_ref01_data_up0.id = api_entities_draft_note_ref01_data.id
    api_entities_draft_note_ref01_data_up0 ['merge_request_id'] = setup.idmap['merge_request_id']
    api_entities_draft_note_ref01_data_up0 ['project_id'] = setup.idmap['project_id']

    const api_entities_draft_note_ref01_markdef_up0 = { name: 'line_code', value: 'Mark01-api_entities_draft_note_ref01_' + setup.now }
    ;(api_entities_draft_note_ref01_data_up0 as any)[api_entities_draft_note_ref01_markdef_up0.name] = api_entities_draft_note_ref01_markdef_up0.value

    const api_entities_draft_note_ref01_resdata_up0 = (await api_entities_draft_note_ref01_ent.update(api_entities_draft_note_ref01_data_up0)).data()
    assert(api_entities_draft_note_ref01_resdata_up0.id === api_entities_draft_note_ref01_data_up0.id)

    assert((api_entities_draft_note_ref01_resdata_up0 as any)[api_entities_draft_note_ref01_markdef_up0.name] === api_entities_draft_note_ref01_markdef_up0.value)


    // LOAD
    const api_entities_draft_note_ref01_match_dt0: any = {}
    api_entities_draft_note_ref01_match_dt0.id = api_entities_draft_note_ref01_data.id
    const api_entities_draft_note_ref01_data_dt0 = (await api_entities_draft_note_ref01_ent.load(api_entities_draft_note_ref01_match_dt0)).data()
    assert(api_entities_draft_note_ref01_data_dt0.id === api_entities_draft_note_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_draft_note/ApiEntitiesDraftNoteTestData.json')

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
    ['api_entities_draft_note01','api_entities_draft_note02','api_entities_draft_note03','project01','project02','project03','merge_request01','merge_request02','merge_request03','project01','project02','project03','merge_request01','merge_request02','merge_request03','draft_note01','draft_note02','draft_note03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_DRAFT_NOTE_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_DRAFT_NOTE_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_DRAFT_NOTE_ENTID']
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
  
