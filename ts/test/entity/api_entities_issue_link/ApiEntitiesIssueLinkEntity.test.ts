

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


describe('ApiEntitiesIssueLinkEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesIssueLink()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_issue_link.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0},"link_type":{"a":true,"h":"Link Type","n":"link_type","r":false,"t":"`$STRING`","key$":"link_type","index$":1},"source_issue":{"a":true,"h":"Source Issue","n":"source_issue","r":false,"t":"`$OBJECT`","key$":"source_issue","index$":2},"target_issue":{"a":true,"h":"Target Issue","n":"target_issue","r":false,"t":"`$OBJECT`","key$":"target_issue","index$":3}},"id":{"field":"id","name":"id"},"name":"api_entities_issue_link","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/v4/projects/{id}/issues/{issue_iid}/links","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"issue_id","or":"issue_iid","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"post_api_v4_projects_id_issues_issue_iid_link","or":"post_api_v4_projects_id_issues_issue_iid_link","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/api/v4/projects/{id}/issues/{issue_iid}/links","q":{"exist":["issue_id","post_api_v4_projects_id_issues_issue_iid_link","project_id"]},"r":{"param":{"id":"project_id","issue_iid":"issue_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"issues"},{"var":"issue_id"},{"lit":"links"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v4/projects/{id}/issues/{issue_iid}/links/{issue_link_id}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"issue_link_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"issue_id","or":"issue_iid","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/issues/{issue_iid}/links/{issue_link_id}","q":{"exist":["id","issue_id","project_id"]},"r":{"param":{"id":"project_id","issue_iid":"issue_id","issue_link_id":"id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"issues"},{"var":"issue_id"},{"lit":"links"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.project"]]},"key$":"api_entities_issue_link","name__orig":"api_entities_issue_link","Name":"ApiEntitiesIssueLink","name_":"api_entities_issue_link","name-":"api-entities-issue-link","NAME":"API_ENTITIES_ISSUE_LINK","index$":87}, {"active":true,"entity":"api_entities_issue_link","key$":"BasicApiEntitiesIssueLinkFlow","kind":"basic","name":"BasicApiEntitiesIssueLinkFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"api_entities_issue_link_ref01"},"m":{"issue_id":"issue01","project_id":"project01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"api_entities_issue_link_ref01","srcdatavar":"api_entities_issue_link_ref01_data","suffix":"_dt0"},"m":{"id":"api_entities_issue_link01","issue_id":"issue01","project_id":"project01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_issue_link_ref01"}}],"index$":1}]}, 'ApiEntitiesIssueLink', {"POST /api/v4/projects/{id}/issues/{issue_iid}/links":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project owned by the authenticated user","type":"string","required":true,"index$":0},{"in":"path","name":"issue_iid","description":"The internal ID of a project’s issue","type":"integer","format":"int32","required":true,"index$":1},{"name":"postApiV4ProjectsIdIssuesIssueIidLinks","in":"body","required":true,"schema":{"type":"object","properties":{"target_project_id":{"type":"string","description":"The ID or URL-encoded path of a target project"},"target_issue_iid":{"type":"string","description":"The internal ID of a target project’s issue"},"link_type":{"type":"string","description":"The type of the relation (“relates_to”, “blocks”, “is_blocked_by”),defaults to “relates_to”)","enum":["relates_to","blocks","is_blocked_by"]}},"required":["target_project_id","target_issue_iid"],"description":"Create an issue link","x-ref":"#/definitions/postApiV4ProjectsIdIssuesIssueIidLinks"},"index$":2}]},"GET /api/v4/projects/{id}/issues/{issue_iid}/links/{issue_link_id}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project owned by the authenticated user","type":"string","required":true,"index$":0},{"in":"path","name":"issue_iid","description":"The internal ID of a project’s issue","type":"integer","format":"int32","required":true,"index$":1},{"in":"path","name":"issue_link_id","description":"ID of an issue relationship","type":"string","required":true,"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const api_entities_issue_link_ref01_ent = client.ApiEntitiesIssueLink()
    let api_entities_issue_link_ref01_data = setup.data.new.api_entities_issue_link['api_entities_issue_link_ref01']
    api_entities_issue_link_ref01_data['issue_id'] = setup.idmap['issue01']
    api_entities_issue_link_ref01_data['project_id'] = setup.idmap['project01']

    api_entities_issue_link_ref01_data = (await api_entities_issue_link_ref01_ent.create(api_entities_issue_link_ref01_data)).data()
    assert(null != api_entities_issue_link_ref01_data.id)


    // LOAD
    const api_entities_issue_link_ref01_match_dt0: any = {}
    api_entities_issue_link_ref01_match_dt0.id = api_entities_issue_link_ref01_data.id
    const api_entities_issue_link_ref01_data_dt0 = (await api_entities_issue_link_ref01_ent.load(api_entities_issue_link_ref01_match_dt0)).data()
    assert(api_entities_issue_link_ref01_data_dt0.id === api_entities_issue_link_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_issue_link/ApiEntitiesIssueLinkTestData.json')

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
    ['api_entities_issue_link01','api_entities_issue_link02','api_entities_issue_link03','project01','project02','project03','issue01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_ISSUE_LINK_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_ISSUE_LINK_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_ISSUE_LINK_ENTID']
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
  
