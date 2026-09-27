

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


describe('ProjectImportEntityEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ProjectImportEntity()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'project_import_entity.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"forked":{"a":true,"h":"Forked","n":"forked","r":false,"t":"`$BOOLEAN`","key$":"forked","index$":0},"full_name":{"a":true,"h":"Full Name","n":"full_name","r":false,"t":"`$STRING`","key$":"full_name","index$":1},"full_path":{"a":true,"h":"Full Path","n":"full_path","r":false,"t":"`$STRING`","key$":"full_path","index$":2},"human_import_status_name":{"a":true,"h":"Human Import Status Name","n":"human_import_status_name","r":false,"t":"`$STRING`","key$":"human_import_status_name","index$":3},"id":{"a":true,"fo":"int32","h":"Id","n":"id","r":false,"t":"`$INTEGER`","key$":"id","index$":4},"import_error":{"a":true,"h":"Import Error","n":"import_error","r":false,"t":"`$STRING`","key$":"import_error","index$":5},"import_source":{"a":true,"h":"Import Source","n":"import_source","r":false,"t":"`$STRING`","key$":"import_source","index$":6},"import_status":{"a":true,"h":"Import Status","n":"import_status","r":false,"t":"`$STRING`","key$":"import_status","index$":7},"import_warning":{"a":true,"h":"Import Warning","n":"import_warning","r":false,"t":"`$STRING`","key$":"import_warning","index$":8},"name":{"a":true,"h":"Name","n":"name","r":false,"t":"`$STRING`","key$":"name","index$":9},"provider_link":{"a":true,"h":"Provider Link","n":"provider_link","r":false,"t":"`$STRING`","key$":"provider_link","index$":10},"refs_url":{"a":true,"h":"Refs Url","n":"refs_url","r":false,"t":"`$STRING`","key$":"refs_url","index$":11},"relation_type":{"a":true,"h":"Relation Type","n":"relation_type","r":false,"t":"`$STRING`","key$":"relation_type","index$":12}},"id":{"field":"id","name":"id"},"name":"project_import_entity","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/v4/import/bitbucket","source":"swagger2","version":2},"g":{"query":[{"a":true,"k":"query","n":"post_api_v4_import_bitbucket","or":"post_api_v4_import_bitbucket","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/api/v4/import/bitbucket","q":{"exist":["post_api_v4_import_bitbucket"]},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"import"},{"lit":"bitbucket"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /api/v4/import/github/cancel","source":"swagger2","version":2},"g":{"query":[{"a":true,"k":"query","n":"post_api_v4_import_github_cancel","or":"post_api_v4_import_github_cancel","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/api/v4/import/github/cancel","q":{"exist":["post_api_v4_import_github_cancel"]},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"import"},{"lit":"github"},{"lit":"cancel"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"project_import_entity","name__orig":"project_import_entity","Name":"ProjectImportEntity","name_":"project_import_entity","name-":"project-import-entity","NAME":"PROJECT_IMPORT_ENTITY","index$":244}, {"active":true,"entity":"project_import_entity","key$":"BasicProjectImportEntityFlow","kind":"basic","name":"BasicProjectImportEntityFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"project_import_entity_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'ProjectImportEntity', {"POST /api/v4/import/bitbucket":{"protocol":"http","parameters":[{"name":"postApiV4ImportBitbucket","in":"body","required":true,"schema":{"type":"object","properties":{"bitbucket_username":{"type":"string","description":"BitBucket username"},"bitbucket_app_password":{"type":"string","description":"BitBucket app password"},"repo_path":{"type":"string","description":"Repository path"},"target_namespace":{"type":"string","description":"Target namespace"},"new_name":{"type":"string","description":"New repository name"}},"required":["bitbucket_username","bitbucket_app_password","repo_path","target_namespace"],"description":"Import a BitBucket Cloud repository","x-ref":"#/definitions/postApiV4ImportBitbucket"},"index$":0}]},"POST /api/v4/import/github/cancel":{"protocol":"http","parameters":[{"name":"postApiV4ImportGithubCancel","in":"body","required":true,"schema":{"type":"object","properties":{"project_id":{"type":"integer","format":"int32","description":"ID of importing project to be canceled"}},"required":["project_id"],"description":"Cancel GitHub project import","x-ref":"#/definitions/postApiV4ImportGithubCancel"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const project_import_entity_ref01_ent = client.ProjectImportEntity()
    let project_import_entity_ref01_data = setup.data.new.project_import_entity['project_import_entity_ref01']

    project_import_entity_ref01_data = (await project_import_entity_ref01_ent.create(project_import_entity_ref01_data)).data()
    assert(null != project_import_entity_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/project_import_entity/ProjectImportEntityTestData.json')

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
    ['project_import_entity01','project_import_entity02','project_import_entity03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_PROJECT_IMPORT_ENTITY_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_PROJECT_IMPORT_ENTITY_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_PROJECT_IMPORT_ENTITY_ENTID']
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
  
