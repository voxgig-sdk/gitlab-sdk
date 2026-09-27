

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


describe('ApiEntitiesDiffEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesDiff()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_diff.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"a_mode":{"a":true,"h":"A Mode","n":"a_mode","r":false,"t":"`$STRING`","key$":"a_mode","index$":0},"b_mode":{"a":true,"h":"B Mode","n":"b_mode","r":false,"t":"`$STRING`","key$":"b_mode","index$":1},"collapsed":{"a":true,"h":"Collapsed","n":"collapsed","r":false,"t":"`$BOOLEAN`","key$":"collapsed","index$":2},"deleted_file":{"a":true,"h":"Deleted File","n":"deleted_file","r":false,"t":"`$BOOLEAN`","key$":"deleted_file","index$":3},"diff":{"a":true,"h":"Diff","n":"diff","r":false,"t":"`$STRING`","key$":"diff","index$":4},"generated_file":{"a":true,"h":"Generated File","n":"generated_file","r":false,"t":"`$BOOLEAN`","key$":"generated_file","index$":5},"new_file":{"a":true,"h":"New File","n":"new_file","r":false,"t":"`$BOOLEAN`","key$":"new_file","index$":6},"new_path":{"a":true,"h":"New Path","n":"new_path","r":false,"t":"`$STRING`","key$":"new_path","index$":7},"old_path":{"a":true,"h":"Old Path","n":"old_path","r":false,"t":"`$STRING`","key$":"old_path","index$":8},"renamed_file":{"a":true,"h":"Renamed File","n":"renamed_file","r":false,"t":"`$BOOLEAN`","key$":"renamed_file","index$":9},"too_large":{"a":true,"h":"Too Large","n":"too_large","r":false,"t":"`$BOOLEAN`","key$":"too_large","index$":10}},"name":"api_entities_diff","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/v4/projects/{id}/repository/commits/{sha}/diff","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"sha","or":"sha","r":true,"t":"`$ANY`","index$":1}],"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"unidiff","or":"unidiff","r":false,"t":"`$ANY`","index$":2}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/repository/commits/{sha}/diff","q":{"exist":["page","per_page","project_id","sha","unidiff"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"repository"},{"lit":"commits"},{"var":"sha"},{"lit":"diff"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v4/projects/{id}/merge_requests/{merge_request_iid}/diffs","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"merge_request_id","or":"merge_request_iid","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"unidiff","or":"unidiff","r":false,"t":"`$ANY`","index$":2}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/merge_requests/{merge_request_iid}/diffs","q":{"exist":["merge_request_id","page","per_page","project_id","unidiff"]},"r":{"param":{"id":"project_id","merge_request_iid":"merge_request_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"merge_requests"},{"var":"merge_request_id"},{"lit":"diffs"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.project","$.main.kit.entity.merge_request"],["$.main.kit.entity.project"]]},"key$":"api_entities_diff","name__orig":"api_entities_diff","Name":"ApiEntitiesDiff","name_":"api_entities_diff","name-":"api-entities-diff","NAME":"API_ENTITIES_DIFF","index$":65}, {"active":true,"entity":"api_entities_diff","key$":"BasicApiEntitiesDiffFlow","kind":"basic","name":"BasicApiEntitiesDiffFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"project_id":"project01","sha":"sha01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"api_entities_diff_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"api_entities_diff_ref01","srcdatavar":"api_entities_diff_ref01_data","suffix":"_dt0"},"m":{"id":"api_entities_diff01","project_id":"project01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_diff_ref01"}}],"index$":1}]}, 'ApiEntitiesDiff', {"GET /api/v4/projects/{id}/repository/commits/{sha}/diff":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"in":"path","name":"sha","description":"A commit sha, or the name of a branch or tag","type":"string","required":true,"index$":1},{"in":"query","name":"page","description":"Current page number","type":"integer","format":"int32","default":1,"required":false,"example":1,"index$":2},{"in":"query","name":"per_page","description":"Number of items per page","type":"integer","format":"int32","default":20,"required":false,"example":20,"index$":3},{"in":"query","name":"unidiff","description":"A diff in a Unified diff format","type":"boolean","default":false,"required":false,"index$":4}]},"GET /api/v4/projects/{id}/merge_requests/{merge_request_iid}/diffs":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project.","type":"string","required":true,"index$":0},{"in":"path","name":"merge_request_iid","description":"The internal ID of the merge request.","type":"integer","format":"int32","required":true,"index$":1},{"in":"query","name":"page","description":"Current page number","type":"integer","format":"int32","default":1,"required":false,"example":1,"index$":2},{"in":"query","name":"per_page","description":"Number of items per page","type":"integer","format":"int32","default":20,"required":false,"example":20,"index$":3},{"in":"query","name":"unidiff","description":"A diff in a Unified diff format","type":"boolean","default":false,"required":false,"index$":4}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let api_entities_diff_ref01_data = Object.values(setup.data.existing.api_entities_diff)[0] as any

    // LIST
    const api_entities_diff_ref01_ent = client.ApiEntitiesDiff()
    const api_entities_diff_ref01_match: any = {}
    api_entities_diff_ref01_match['project_id'] = setup.idmap['project01']
    api_entities_diff_ref01_match['sha'] = setup.idmap['sha01']

    const api_entities_diff_ref01_list = (await api_entities_diff_ref01_ent.list(api_entities_diff_ref01_match)).map((e: any) => e.data())



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_diff/ApiEntitiesDiffTestData.json')

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
    ['api_entities_diff01','api_entities_diff02','api_entities_diff03','project01','project02','project03','merge_request01','merge_request02','merge_request03','sha01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_DIFF_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_DIFF_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_DIFF_ENTID']
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
  
