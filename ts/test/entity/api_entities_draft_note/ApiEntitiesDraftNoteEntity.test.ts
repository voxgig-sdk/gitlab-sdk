

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"author_id":{"a":true,"fo":"int32","h":"Author Id","n":"author_id","r":false,"t":"`$INTEGER`","key$":"author_id","index$":0},"commit_id":{"a":true,"fo":"int32","h":"Commit Id","n":"commit_id","r":false,"t":"`$INTEGER`","key$":"commit_id","index$":1},"discussion_id":{"a":true,"fo":"int32","h":"Discussion Id","n":"discussion_id","r":false,"t":"`$INTEGER`","key$":"discussion_id","index$":2},"id":{"a":true,"fo":"int32","h":"Id","n":"id","r":false,"t":"`$INTEGER`","key$":"id","index$":3},"line_code":{"a":true,"h":"Line Code","n":"line_code","r":false,"t":"`$STRING`","key$":"line_code","index$":4},"merge_request_id":{"a":true,"fo":"int32","h":"Merge Request Id","n":"merge_request_id","r":false,"t":"`$INTEGER`","key$":"merge_request_id","index$":5},"note":{"a":true,"h":"Note","n":"note","r":false,"t":"`$STRING`","key$":"note","index$":6},"position":{"a":true,"h":"Position","n":"position","r":false,"t":"`$OBJECT`","key$":"position","index$":7},"resolve_discussion":{"a":true,"h":"Resolve Discussion","n":"resolve_discussion","r":false,"t":"`$BOOLEAN`","key$":"resolve_discussion","index$":8}},"id":{"field":"id","name":"id"},"name":"api_entities_draft_note","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/v4/projects/{id}/merge_requests/{merge_request_iid}/draft_notes","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"merge_request_id","or":"merge_request_iid","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"post_api_v4_projects_id_merge_requests_merge_request_iid_draft_note","or":"post_api_v4_projects_id_merge_requests_merge_request_iid_draft_note","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/api/v4/projects/{id}/merge_requests/{merge_request_iid}/draft_notes","q":{"exist":["merge_request_id","post_api_v4_projects_id_merge_requests_merge_request_iid_draft_note","project_id"]},"r":{"param":{"id":"project_id","merge_request_iid":"merge_request_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"merge_requests"},{"var":"merge_request_id"},{"lit":"draft_notes"}],"t":{"req":"`reqdata`","res":"`body.position`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/v4/projects/{id}/merge_requests/{merge_request_iid}/draft_notes","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"merge_request_id","or":"merge_request_iid","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/merge_requests/{merge_request_iid}/draft_notes","q":{"exist":["merge_request_id","project_id"]},"r":{"param":{"id":"project_id","merge_request_iid":"merge_request_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"merge_requests"},{"var":"merge_request_id"},{"lit":"draft_notes"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v4/projects/{id}/merge_requests/{merge_request_iid}/draft_notes/{draft_note_id}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"draft_note_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"merge_request_id","or":"merge_request_iid","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/merge_requests/{merge_request_iid}/draft_notes/{draft_note_id}","q":{"exist":["id","merge_request_id","project_id"]},"r":{"param":{"draft_note_id":"id","id":"project_id","merge_request_iid":"merge_request_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"merge_requests"},{"var":"merge_request_id"},{"lit":"draft_notes"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.position`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /api/v4/projects/{id}/merge_requests/{merge_request_iid}/draft_notes/{draft_note_id}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"draft_note_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"merge_request_id","or":"merge_request_iid","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":2}],"query":[{"a":true,"k":"query","n":"put_api_v4_projects_id_merge_requests_merge_request_iid_draft_notes_draft_note_id","or":"put_api_v4_projects_id_merge_requests_merge_request_iid_draft_notes_draft_note_id","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"PUT","o":"/api/v4/projects/{id}/merge_requests/{merge_request_iid}/draft_notes/{draft_note_id}","q":{"exist":["id","merge_request_id","project_id","put_api_v4_projects_id_merge_requests_merge_request_iid_draft_notes_draft_note_id"]},"r":{"param":{"draft_note_id":"id","id":"project_id","merge_request_iid":"merge_request_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"merge_requests"},{"var":"merge_request_id"},{"lit":"draft_notes"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.position`"},"index$":0},{"a":true,"co":{"id":"PUT /api/v4/projects/{id}/merge_requests/{merge_request_iid}/draft_notes/{draft_note_id}/publish","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"draft_note_id","or":"draft_note_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"merge_request_id","or":"merge_request_iid","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"PUT","o":"/api/v4/projects/{id}/merge_requests/{merge_request_iid}/draft_notes/{draft_note_id}/publish","q":{"$action":"publish","exist":["draft_note_id","merge_request_id","project_id"]},"r":{"param":{"id":"project_id","merge_request_iid":"merge_request_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"merge_requests"},{"var":"merge_request_id"},{"lit":"draft_notes"},{"var":"draft_note_id"},{"lit":"publish"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.project","$.main.kit.entity.merge_request"],["$.main.kit.entity.project","$.main.kit.entity.merge_request"]]},"key$":"api_entities_draft_note","name__orig":"api_entities_draft_note","Name":"ApiEntitiesDraftNote","name_":"api_entities_draft_note","name-":"api-entities-draft-note","NAME":"API_ENTITIES_DRAFT_NOTE","index$":67}, {"active":true,"entity":"api_entities_draft_note","key$":"BasicApiEntitiesDraftNoteFlow","kind":"basic","name":"BasicApiEntitiesDraftNoteFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"api_entities_draft_note_ref01"},"m":{"merge_request_id":"merge_request01","project_id":"project01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"merge_request_id":"merge_request01","project_id":"project01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"api_entities_draft_note_ref01"}}],"index$":1},{"a":true,"d":{"merge_request_id":"merge_request01","project_id":"project01"},"i":{"ref":"api_entities_draft_note_ref01","srcdatavar":"api_entities_draft_note_ref01_data","suffix":"_up0","textfield":"line_code"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_draft_note_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"api_entities_draft_note_ref01","srcdatavar":"api_entities_draft_note_ref01_data","suffix":"_dt0"},"m":{"id":"api_entities_draft_note01","merge_request_id":"merge_request01","project_id":"project01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_draft_note_ref01"}}],"index$":3}]}, 'ApiEntitiesDraftNote', {"POST /api/v4/projects/{id}/merge_requests/{merge_request_iid}/draft_notes":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID of a project.","type":"string","required":true,"index$":0},{"in":"path","name":"merge_request_iid","description":"The ID of a merge request.","type":"integer","format":"int32","required":true,"index$":1},{"name":"postApiV4ProjectsIdMergeRequestsMergeRequestIidDraftNotes","in":"body","required":true,"schema":{"type":"object","properties":{"note":{"type":"string","description":"The content of a note."},"in_reply_to_discussion_id":{"type":"string","description":"The ID of a discussion the draft note replies to."},"commit_id":{"type":"string","description":"The sha of a commit to associate the draft note to."},"resolve_discussion":{"type":"boolean","description":"The associated discussion should be resolved."},"position":{"type":"object","properties":{"base_sha":{"type":"string","description":"Base commit SHA in the source branch"},"start_sha":{"type":"string","description":"SHA referencing commit in target branch"},"head_sha":{"type":"string","description":"SHA referencing HEAD of this merge request"},"position_type":{"type":"string","description":"Type of the position reference","enum":["text","image","file"]},"new_path":{"type":"string","description":"File path after change"},"new_line":{"type":"integer","format":"int32","description":"Line number after change"},"old_path":{"type":"string","description":"File path before change"},"old_line":{"type":"integer","format":"int32","description":"Line number before change"},"width":{"type":"integer","format":"int32","description":"Width of the image"},"height":{"type":"integer","format":"int32","description":"Height of the image"},"x":{"type":"integer","format":"int32","description":"X coordinate in the image"},"y":{"type":"integer","format":"int32","description":"Y coordinate in the image"},"line_range":{"type":"object","description":"Multi-line start and end","properties":{"start":{"type":"object","properties":{}},"end":{"type":"object","properties":{}}}}},"required":["base_sha","start_sha","head_sha","position_type"]}},"required":["note"],"description":"Create a new draft note","x-ref":"#/definitions/postApiV4ProjectsIdMergeRequestsMergeRequestIidDraftNotes"},"index$":2}]},"GET /api/v4/projects/{id}/merge_requests/{merge_request_iid}/draft_notes":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID of a project","type":"string","required":true,"index$":0},{"in":"path","name":"merge_request_iid","description":"The ID of a merge request","type":"integer","format":"int32","required":true,"index$":1}]},"GET /api/v4/projects/{id}/merge_requests/{merge_request_iid}/draft_notes/{draft_note_id}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID of a project","type":"string","required":true,"index$":0},{"in":"path","name":"merge_request_iid","description":"The ID of a merge request","type":"integer","format":"int32","required":true,"index$":1},{"in":"path","name":"draft_note_id","description":"The ID of a draft note","type":"integer","format":"int32","required":true,"index$":2}]},"PUT /api/v4/projects/{id}/merge_requests/{merge_request_iid}/draft_notes/{draft_note_id}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID of a project.","type":"string","required":true,"index$":0},{"in":"path","name":"merge_request_iid","description":"The ID of a merge request.","type":"integer","format":"int32","required":true,"index$":1},{"in":"path","name":"draft_note_id","description":"The ID of a draft note","type":"integer","format":"int32","required":true,"index$":2},{"name":"putApiV4ProjectsIdMergeRequestsMergeRequestIidDraftNotesDraftNoteId","in":"body","required":true,"schema":{"type":"object","properties":{"note":{"type":"string","description":"The content of a note."},"position":{"type":"object","properties":{"base_sha":{"type":"string","description":"Base commit SHA in the source branch"},"start_sha":{"type":"string","description":"SHA referencing commit in target branch"},"head_sha":{"type":"string","description":"SHA referencing HEAD of this merge request"},"position_type":{"type":"string","description":"Type of the position reference","enum":["text","image","file"]},"new_path":{"type":"string","description":"File path after change"},"new_line":{"type":"integer","format":"int32","description":"Line number after change"},"old_path":{"type":"string","description":"File path before change"},"old_line":{"type":"integer","format":"int32","description":"Line number before change"},"width":{"type":"integer","format":"int32","description":"Width of the image"},"height":{"type":"integer","format":"int32","description":"Height of the image"},"x":{"type":"integer","format":"int32","description":"X coordinate in the image"},"y":{"type":"integer","format":"int32","description":"Y coordinate in the image"},"line_range":{"type":"object","description":"Multi-line start and end","properties":{"start":{"type":"object","properties":{}},"end":{"type":"object","properties":{}}}}},"required":["base_sha","start_sha","head_sha","position_type"]}},"description":"Modify an existing draft note","x-ref":"#/definitions/putApiV4ProjectsIdMergeRequestsMergeRequestIidDraftNotesDraftNoteId"},"index$":3}]},"PUT /api/v4/projects/{id}/merge_requests/{merge_request_iid}/draft_notes/{draft_note_id}/publish":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID of a project","type":"string","required":true,"index$":0},{"in":"path","name":"merge_request_iid","description":"The ID of a merge request","type":"integer","format":"int32","required":true,"index$":1},{"in":"path","name":"draft_note_id","description":"The ID of a draft note","type":"integer","format":"int32","required":true,"index$":2}]}})
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
    ['api_entities_draft_note01','api_entities_draft_note02','api_entities_draft_note03','project01','project02','project03','merge_request01','merge_request02','merge_request03'],
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
  
