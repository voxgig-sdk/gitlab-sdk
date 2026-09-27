

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


describe('ApiEntitiesCommitStatusEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesCommitStatus()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create', 'list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_commit_status.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"allow_failure":{"a":true,"h":"Allow Failure","n":"allow_failure","r":false,"t":"`$BOOLEAN`","key$":"allow_failure","index$":0},"author":{"a":true,"h":"Author","n":"author","r":false,"sh":"API_Entities_UserBasic model","t":"`$OBJECT`","key$":"author","index$":1},"avatar_path":{"a":true,"h":"Avatar Path","n":"avatar_path","r":false,"t":"`$STRING`","key$":"avatar_path","index$":2},"avatar_url":{"a":true,"h":"Avatar Url","n":"avatar_url","r":false,"t":"`$STRING`","key$":"avatar_url","index$":3},"coverage":{"a":true,"fo":"float","h":"Coverage","n":"coverage","r":false,"t":"`$NUMBER`","key$":"coverage","index$":4},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":false,"t":"`$STRING`","key$":"created_at","index$":5},"custom_attributes":{"a":true,"h":"Custom Attributes","n":"custom_attributes","r":false,"t":"`$ARRAY`","key$":"custom_attributes","index$":6},"description":{"a":true,"h":"Description","n":"description","r":false,"t":"`$STRING`","key$":"description","index$":7},"finished_at":{"a":true,"fo":"date-time","h":"Finished At","n":"finished_at","r":false,"t":"`$STRING`","key$":"finished_at","index$":8},"id":{"a":true,"fo":"int32","h":"Id","n":"id","r":false,"t":"`$INTEGER`","key$":"id","index$":9},"locked":{"a":true,"h":"Locked","n":"locked","r":false,"t":"`$BOOLEAN`","key$":"locked","index$":10},"name":{"a":true,"h":"Name","n":"name","r":false,"t":"`$STRING`","key$":"name","index$":11},"pipeline_id":{"a":true,"fo":"int32","h":"Pipeline Id","n":"pipeline_id","r":false,"t":"`$INTEGER`","key$":"pipeline_id","index$":12},"public_email":{"a":true,"h":"Public Email","n":"public_email","r":false,"t":"`$STRING`","key$":"public_email","index$":13},"ref":{"a":true,"h":"Ref","n":"ref","r":false,"t":"`$STRING`","key$":"ref","index$":14},"sha":{"a":true,"h":"Sha","n":"sha","r":false,"t":"`$STRING`","key$":"sha","index$":15},"started_at":{"a":true,"fo":"date-time","h":"Started At","n":"started_at","r":false,"t":"`$STRING`","key$":"started_at","index$":16},"state":{"a":true,"h":"State","n":"state","r":false,"t":"`$STRING`","key$":"state","index$":17},"status":{"a":true,"h":"Status","n":"status","r":false,"t":"`$STRING`","key$":"status","index$":18},"target_url":{"a":true,"h":"Target Url","n":"target_url","r":false,"t":"`$STRING`","key$":"target_url","index$":19},"username":{"a":true,"h":"Username","n":"username","r":false,"t":"`$STRING`","key$":"username","index$":20},"web_url":{"a":true,"h":"Web Url","n":"web_url","r":false,"t":"`$STRING`","key$":"web_url","index$":21}},"id":{"field":"id","name":"id"},"name":"api_entities_commit_status","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/v4/projects/{id}/statuses/{sha}","source":"swagger2","version":2},"g":{"params":[{"a":true,"ex":"18f3e63d05582537db6d183d9d557be09e1f90c8","k":"param","n":"id","or":"sha","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"post_api_v4_projects_id_statuses_sha","or":"post_api_v4_projects_id_statuses_sha","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/api/v4/projects/{id}/statuses/{sha}","q":{"exist":["id","post_api_v4_projects_id_statuses_sha","project_id"]},"r":{"param":{"id":"project_id","sha":"id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"statuses"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.author`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/v4/projects/{id}/repository/commits/{sha}/statuses","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"18f3e63d05582537db6d183d9d557be09e1f90c8","k":"param","n":"sha","or":"sha","r":true,"t":"`$ANY`","index$":1}],"query":[{"a":true,"k":"query","n":"all","or":"all","r":false,"t":"`$ANY`","index$":0},{"a":true,"ex":"bundler:audit","k":"query","n":"name","or":"name","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"order_by","or":"order_by","r":false,"t":"`$ANY`","index$":2},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":3},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":4},{"a":true,"ex":1234,"k":"query","n":"pipeline_id","or":"pipeline_id","r":false,"t":"`$STRING`","index$":5},{"a":true,"ex":"develop","k":"query","n":"ref","or":"ref","r":false,"t":"`$ANY`","index$":6},{"a":true,"k":"query","n":"sort","or":"sort","r":false,"t":"`$ANY`","index$":7},{"a":true,"ex":"test","k":"query","n":"stage","or":"stage","r":false,"t":"`$ANY`","index$":8}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/repository/commits/{sha}/statuses","q":{"exist":["all","name","order_by","page","per_page","pipeline_id","project_id","ref","sha","sort","stage"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"repository"},{"lit":"commits"},{"var":"sha"},{"lit":"statuses"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["$.main.kit.entity.project"],["$.main.kit.entity.project"]]},"key$":"api_entities_commit_status","name__orig":"api_entities_commit_status","Name":"ApiEntitiesCommitStatus","name_":"api_entities_commit_status","name-":"api-entities-commit-status","NAME":"API_ENTITIES_COMMIT_STATUS","index$":51}, {"active":true,"entity":"api_entities_commit_status","key$":"BasicApiEntitiesCommitStatusFlow","kind":"basic","name":"BasicApiEntitiesCommitStatusFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"api_entities_commit_status_ref01"},"m":{"project_id":"project01","sha":"sha01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"project_id":"project01","sha":"sha01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"api_entities_commit_status_ref01"}}],"index$":1}]}, 'ApiEntitiesCommitStatus', {"POST /api/v4/projects/{id}/statuses/{sha}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"ID or URL-encoded path of the project.","type":"string","required":true,"index$":0},{"in":"path","name":"sha","description":"The commit hash","type":"string","required":true,"example":"18f3e63d05582537db6d183d9d557be09e1f90c8","index$":1},{"name":"postApiV4ProjectsIdStatusesSha","in":"body","required":true,"schema":{"type":"object","properties":{"state":{"type":"string","description":"The state of the status","enum":["pending","running","success","failed","canceled","skipped"],"example":"pending"},"ref":{"type":"string","description":"The ref","example":"develop"},"target_url":{"type":"string","description":"The target URL to associate with this status","example":"https://gitlab.example.com/janedoe/gitlab-foss/builds/91"},"description":{"type":"string","description":"A short description of the status"},"name":{"type":"string","description":"A string label to differentiate this status from the status of other systems","default":"default","example":"coverage"},"context":{"type":"string","description":"A string label to differentiate this status from the status of other systems","default":"default","example":"coverage"},"coverage":{"type":"number","format":"float","description":"The total code coverage","example":100},"pipeline_id":{"type":"integer","format":"int32","description":"An existing pipeline ID, when multiple pipelines on the same commit SHA have been triggered"}},"required":["state"],"description":"Post status to a commit","x-ref":"#/definitions/postApiV4ProjectsIdStatusesSha"},"index$":2}]},"GET /api/v4/projects/{id}/repository/commits/{sha}/statuses":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"ID or URL-encoded path of the project.","type":"string","required":true,"index$":0},{"in":"path","name":"sha","description":"Hash of the commit.","type":"string","required":true,"example":"18f3e63d05582537db6d183d9d557be09e1f90c8","index$":1},{"in":"query","name":"ref","description":"Name of the branch or tag. Default is the default branch.","type":"string","required":false,"example":"develop","index$":2},{"in":"query","name":"stage","description":"Filter statuses by build stage.","type":"string","required":false,"example":"test","index$":3},{"in":"query","name":"name","description":"Filter statuses by job name.","type":"string","required":false,"example":"bundler:audit","index$":4},{"in":"query","name":"pipeline_id","description":"Filter statuses by pipeline ID.","type":"integer","format":"int32","required":false,"example":1234,"index$":5},{"in":"query","name":"all","description":"Include all statuses instead of latest only. Default is `false`.","type":"boolean","default":false,"required":false,"index$":6},{"in":"query","name":"order_by","description":"Values for sorting statuses. Valid values are `id` and `pipeline_id`. Default is `id`.","type":"string","default":"id","enum":["id","pipeline_id"],"required":false,"index$":7},{"in":"query","name":"sort","description":"Sort statuses in ascending or descending order. Valid values are `asc` and `desc`. Default is `asc`.","type":"string","default":"asc","enum":["asc","desc"],"required":false,"index$":8},{"in":"query","name":"page","description":"Current page number","type":"integer","format":"int32","default":1,"required":false,"example":1,"index$":9},{"in":"query","name":"per_page","description":"Number of items per page","type":"integer","format":"int32","default":20,"required":false,"example":20,"index$":10}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const api_entities_commit_status_ref01_ent = client.ApiEntitiesCommitStatus()
    let api_entities_commit_status_ref01_data = setup.data.new.api_entities_commit_status['api_entities_commit_status_ref01']
    api_entities_commit_status_ref01_data['project_id'] = setup.idmap['project01']
    api_entities_commit_status_ref01_data['sha'] = setup.idmap['sha01']

    api_entities_commit_status_ref01_data = (await api_entities_commit_status_ref01_ent.create(api_entities_commit_status_ref01_data)).data()
    assert(null != api_entities_commit_status_ref01_data.id)


    // LIST
    const api_entities_commit_status_ref01_match: any = {}
    api_entities_commit_status_ref01_match['project_id'] = setup.idmap['project01']
    api_entities_commit_status_ref01_match['sha'] = setup.idmap['sha01']

    const api_entities_commit_status_ref01_list = (await api_entities_commit_status_ref01_ent.list(api_entities_commit_status_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(api_entities_commit_status_ref01_list, { id: api_entities_commit_status_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_commit_status/ApiEntitiesCommitStatusTestData.json')

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
    ['api_entities_commit_status01','api_entities_commit_status02','api_entities_commit_status03','project01','project02','project03','sha01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_COMMIT_STATUS_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_COMMIT_STATUS_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_COMMIT_STATUS_ENTID']
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
  
