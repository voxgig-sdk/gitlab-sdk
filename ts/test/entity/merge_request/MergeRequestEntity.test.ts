

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0}},"id":{"field":"id","name":"id"},"name":"merge_request","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v4/projects/{id}/merge_requests/{merge_request_iid}/related_issues","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"merge_request_iid","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/merge_requests/{merge_request_iid}/related_issues","q":{"$action":"related_issue","exist":["id","page","per_page","project_id"]},"r":{"param":{"id":"project_id","merge_request_iid":"id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"merge_requests"},{"var":"id"},{"lit":"related_issues"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /api/v4/projects/{id}/merge_requests/{merge_request_iid}/merge_ref","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"merge_request_iid","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/merge_requests/{merge_request_iid}/merge_ref","q":{"$action":"merge_ref","exist":["id","project_id"]},"r":{"param":{"id":"project_id","merge_request_iid":"id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"merge_requests"},{"var":"id"},{"lit":"merge_ref"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"GET /api/v4/projects/{id}/merge_requests/{merge_request_iid}/raw_diffs","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"merge_request_iid","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/merge_requests/{merge_request_iid}/raw_diffs","q":{"$action":"raw_diff","exist":["id","project_id"]},"r":{"param":{"id":"project_id","merge_request_iid":"id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"merge_requests"},{"var":"id"},{"lit":"raw_diffs"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /api/v4/projects/{id}/merge_requests/{merge_request_iid}/context_commits","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"merge_request_iid","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"commit","or":"commit","r":true,"t":"`$ANY`","index$":0}]},"k":"http","m":"DELETE","o":"/api/v4/projects/{id}/merge_requests/{merge_request_iid}/context_commits","q":{"$action":"context_commit","exist":["commit","id","project_id"]},"r":{"param":{"id":"project_id","merge_request_iid":"id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"merge_requests"},{"var":"id"},{"lit":"context_commits"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"DELETE /api/v4/projects/{id}/merge_requests/{merge_request_iid}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"merge_request_iid","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"DELETE","o":"/api/v4/projects/{id}/merge_requests/{merge_request_iid}","q":{"exist":["id","project_id"]},"r":{"param":{"id":"project_id","merge_request_iid":"id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"merge_requests"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /api/v4/projects/{id}/merge_requests/{merge_request_iid}/reset_approvals","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"merge_request_iid","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"PUT","o":"/api/v4/projects/{id}/merge_requests/{merge_request_iid}/reset_approvals","q":{"$action":"reset_approval","exist":["id","project_id"]},"r":{"param":{"id":"project_id","merge_request_iid":"id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"merge_requests"},{"var":"id"},{"lit":"reset_approvals"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.project"]]},"key$":"merge_request","name__orig":"merge_request","Name":"MergeRequest","name_":"merge_request","name-":"merge-request","NAME":"MERGE_REQUEST","index$":225}, {"active":true,"entity":"merge_request","key$":"BasicMergeRequestFlow","kind":"basic","name":"BasicMergeRequestFlow","param":{},"step":[{"a":true,"d":{"project_id":"project01"},"i":{"ref":"merge_request_ref01","srcdatavar":"merge_request_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-merge_request_ref01"}}],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"merge_request_ref01","srcdatavar":"merge_request_ref01_data","suffix":"_dt0"},"m":{"id":"merge_request01","project_id":"project01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-merge_request_ref01"}}],"index$":1}]}, 'MergeRequest', {"GET /api/v4/projects/{id}/merge_requests/{merge_request_iid}/related_issues":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project.","type":"string","required":true,"index$":0},{"in":"query","name":"page","description":"Current page number","type":"integer","format":"int32","default":1,"required":false,"example":1,"index$":1},{"in":"query","name":"per_page","description":"Number of items per page","type":"integer","format":"int32","default":20,"required":false,"example":20,"index$":2},{"in":"path","name":"merge_request_iid","type":"integer","format":"int32","required":true,"index$":3}]},"GET /api/v4/projects/{id}/merge_requests/{merge_request_iid}/merge_ref":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project.","type":"string","required":true,"index$":0},{"in":"path","name":"merge_request_iid","type":"integer","format":"int32","required":true,"index$":1}]},"GET /api/v4/projects/{id}/merge_requests/{merge_request_iid}/raw_diffs":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project.","type":"string","required":true,"index$":0},{"in":"path","name":"merge_request_iid","type":"integer","format":"int32","required":true,"index$":1}]},"DELETE /api/v4/projects/{id}/merge_requests/{merge_request_iid}/context_commits":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project.","type":"string","required":true,"index$":0},{"in":"query","name":"commits","description":"The context commits’ SHA.","type":"array","items":{"type":"string"},"required":true,"index$":1},{"in":"path","name":"merge_request_iid","type":"integer","format":"int32","required":true,"index$":2}]},"DELETE /api/v4/projects/{id}/merge_requests/{merge_request_iid}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project.","type":"string","required":true,"index$":0},{"in":"path","name":"merge_request_iid","description":"The internal ID of the merge request.","type":"integer","format":"int32","required":true,"index$":1}]},"PUT /api/v4/projects/{id}/merge_requests/{merge_request_iid}/reset_approvals":{"protocol":"http","parameters":[{"in":"path","name":"id","type":"integer","format":"int32","required":true,"index$":0},{"in":"path","name":"merge_request_iid","type":"integer","format":"int32","required":true,"index$":1}]}})
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
  
