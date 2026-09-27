

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"author":{"a":true,"h":"Author","n":"author","r":false,"sh":"API_Entities_UserBasic model","t":"`$OBJECT`","key$":"author","index$":0},"avatar_path":{"a":true,"h":"Avatar Path","n":"avatar_path","r":false,"t":"`$STRING`","key$":"avatar_path","index$":1},"avatar_url":{"a":true,"h":"Avatar Url","n":"avatar_url","r":false,"t":"`$STRING`","key$":"avatar_url","index$":2},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":false,"t":"`$STRING`","key$":"created_at","index$":3},"custom_attributes":{"a":true,"h":"Custom Attributes","n":"custom_attributes","r":false,"t":"`$ARRAY`","key$":"custom_attributes","index$":4},"id":{"a":true,"fo":"int32","h":"Id","n":"id","r":false,"t":"`$INTEGER`","key$":"id","index$":5},"line":{"a":true,"fo":"int32","h":"Line","n":"line","r":false,"t":"`$INTEGER`","key$":"line","index$":6},"line_type":{"a":true,"h":"Line Type","n":"line_type","r":false,"t":"`$STRING`","key$":"line_type","index$":7},"locked":{"a":true,"h":"Locked","n":"locked","r":false,"t":"`$BOOLEAN`","key$":"locked","index$":8},"name":{"a":true,"h":"Name","n":"name","r":false,"t":"`$STRING`","key$":"name","index$":9},"note":{"a":true,"h":"Note","n":"note","r":false,"t":"`$STRING`","key$":"note","index$":10},"path":{"a":true,"h":"Path","n":"path","r":false,"t":"`$STRING`","key$":"path","index$":11},"public_email":{"a":true,"h":"Public Email","n":"public_email","r":false,"t":"`$STRING`","key$":"public_email","index$":12},"state":{"a":true,"h":"State","n":"state","r":false,"t":"`$STRING`","key$":"state","index$":13},"username":{"a":true,"h":"Username","n":"username","r":false,"t":"`$STRING`","key$":"username","index$":14},"web_url":{"a":true,"h":"Web Url","n":"web_url","r":false,"t":"`$STRING`","key$":"web_url","index$":15}},"id":{"field":"id","name":"id"},"name":"api_entities_commit_note","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/v4/projects/{id}/repository/commits/{sha}/comments","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"sha","or":"sha","r":true,"t":"`$ANY`","index$":1}],"query":[{"a":true,"k":"query","n":"post_api_v4_projects_id_repository_commits_sha_comment","or":"post_api_v4_projects_id_repository_commits_sha_comment","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/api/v4/projects/{id}/repository/commits/{sha}/comments","q":{"exist":["post_api_v4_projects_id_repository_commits_sha_comment","project_id","sha"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"repository"},{"lit":"commits"},{"var":"sha"},{"lit":"comments"}],"t":{"req":"`reqdata`","res":"`body.author`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/v4/projects/{id}/repository/commits/{sha}/comments","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"sha","or":"sha","r":true,"t":"`$ANY`","index$":1}],"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/repository/commits/{sha}/comments","q":{"exist":["page","per_page","project_id","sha"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"repository"},{"lit":"commits"},{"var":"sha"},{"lit":"comments"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.project"]]},"key$":"api_entities_commit_note","name__orig":"api_entities_commit_note","Name":"ApiEntitiesCommitNote","name_":"api_entities_commit_note","name-":"api-entities-commit-note","NAME":"API_ENTITIES_COMMIT_NOTE","index$":48}, {"active":true,"entity":"api_entities_commit_note","key$":"BasicApiEntitiesCommitNoteFlow","kind":"basic","name":"BasicApiEntitiesCommitNoteFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"api_entities_commit_note_ref01"},"m":{"project_id":"project01","sha":"sha01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"project_id":"project01","sha":"sha01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"api_entities_commit_note_ref01"}}],"index$":1}]}, 'ApiEntitiesCommitNote', {"POST /api/v4/projects/{id}/repository/commits/{sha}/comments":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"in":"path","name":"sha","description":"A commit sha, or the name of a branch or tag on which to post a comment","type":"string","required":true,"index$":1},{"name":"postApiV4ProjectsIdRepositoryCommitsShaComments","in":"body","required":true,"schema":{"type":"object","properties":{"note":{"type":"string","description":"The text of the comment","example":"Nice code!"},"path":{"type":"string","description":"The file path","example":"doc/update/5.4-to-6.0.md"},"line":{"type":"integer","format":"int32","description":"The line number","example":11},"line_type":{"type":"string","description":"The type of the line","enum":["new","old"],"default":"new"}},"required":["note","line","line_type"],"description":"Post comment to commit","x-ref":"#/definitions/postApiV4ProjectsIdRepositoryCommitsShaComments"},"index$":2}]},"GET /api/v4/projects/{id}/repository/commits/{sha}/comments":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"in":"query","name":"page","description":"Current page number","type":"integer","format":"int32","default":1,"required":false,"example":1,"index$":1},{"in":"query","name":"per_page","description":"Number of items per page","type":"integer","format":"int32","default":20,"required":false,"example":20,"index$":2},{"in":"path","name":"sha","description":"A commit sha, or the name of a branch or tag","type":"string","required":true,"index$":3}]}})
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
    ['api_entities_commit_note01','api_entities_commit_note02','api_entities_commit_note03','project01','project02','project03','sha01'],
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
  
