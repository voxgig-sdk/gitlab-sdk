

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


describe('ApiEntitiesProjectHookEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesProjectHook()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_project_hook.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"alert_status":{"a":true,"h":"Alert Status","n":"alert_status","r":false,"t":"Any","key$":"alert_status","index$":0},"branch_filter_strategy":{"a":true,"h":"Branch Filter Strategy","n":"branch_filter_strategy","r":false,"t":"`$STRING`","key$":"branch_filter_strategy","index$":1},"confidential_issues_events":{"a":true,"h":"Confidential Issues Events","n":"confidential_issues_events","r":false,"t":"`$BOOLEAN`","key$":"confidential_issues_events","index$":2},"confidential_note_events":{"a":true,"h":"Confidential Note Events","n":"confidential_note_events","r":false,"t":"`$BOOLEAN`","key$":"confidential_note_events","index$":3},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":false,"t":"`$STRING`","key$":"created_at","index$":4},"custom_headers":{"a":true,"h":"Custom Headers","n":"custom_headers","r":false,"t":"`$ARRAY`","key$":"custom_headers","index$":5},"custom_webhook_template":{"a":true,"h":"Custom Webhook Template","n":"custom_webhook_template","r":false,"t":"`$STRING`","key$":"custom_webhook_template","index$":6},"deployment_events":{"a":true,"h":"Deployment Events","n":"deployment_events","r":false,"t":"`$BOOLEAN`","key$":"deployment_events","index$":7},"description":{"a":true,"h":"Description","n":"description","r":false,"t":"`$STRING`","key$":"description","index$":8},"disabled_until":{"a":true,"fo":"date-time","h":"Disabled Until","n":"disabled_until","r":false,"t":"`$STRING`","key$":"disabled_until","index$":9},"emoji_events":{"a":true,"h":"Emoji Events","n":"emoji_events","r":false,"t":"`$BOOLEAN`","key$":"emoji_events","index$":10},"enable_ssl_verification":{"a":true,"h":"Enable Ssl Verification","n":"enable_ssl_verification","r":false,"t":"`$BOOLEAN`","key$":"enable_ssl_verification","index$":11},"feature_flag_events":{"a":true,"h":"Feature Flag Events","n":"feature_flag_events","r":false,"t":"`$BOOLEAN`","key$":"feature_flag_events","index$":12},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":13},"issues_events":{"a":true,"h":"Issues Events","n":"issues_events","r":false,"t":"`$BOOLEAN`","key$":"issues_events","index$":14},"job_events":{"a":true,"h":"Job Events","n":"job_events","r":false,"t":"`$BOOLEAN`","key$":"job_events","index$":15},"merge_requests_events":{"a":true,"h":"Merge Requests Events","n":"merge_requests_events","r":false,"t":"`$BOOLEAN`","key$":"merge_requests_events","index$":16},"milestone_events":{"a":true,"h":"Milestone Events","n":"milestone_events","r":false,"t":"`$BOOLEAN`","key$":"milestone_events","index$":17},"name":{"a":true,"h":"Name","n":"name","r":false,"t":"`$STRING`","key$":"name","index$":18},"note_events":{"a":true,"h":"Note Events","n":"note_events","r":false,"t":"`$BOOLEAN`","key$":"note_events","index$":19},"pipeline_events":{"a":true,"h":"Pipeline Events","n":"pipeline_events","r":false,"t":"`$BOOLEAN`","key$":"pipeline_events","index$":20},"project_id":{"a":true,"h":"Project Id","n":"project_id","r":false,"t":"`$STRING`","key$":"project_id","index$":21},"push_events":{"a":true,"h":"Push Events","n":"push_events","r":false,"t":"`$BOOLEAN`","key$":"push_events","index$":22},"push_events_branch_filter":{"a":true,"h":"Push Events Branch Filter","n":"push_events_branch_filter","r":false,"t":"`$STRING`","key$":"push_events_branch_filter","index$":23},"releases_events":{"a":true,"h":"Releases Events","n":"releases_events","r":false,"t":"`$BOOLEAN`","key$":"releases_events","index$":24},"repository_update_events":{"a":true,"h":"Repository Update Events","n":"repository_update_events","r":false,"t":"`$BOOLEAN`","key$":"repository_update_events","index$":25},"resource_access_token_events":{"a":true,"h":"Resource Access Token Events","n":"resource_access_token_events","r":false,"t":"`$BOOLEAN`","key$":"resource_access_token_events","index$":26},"tag_push_events":{"a":true,"h":"Tag Push Events","n":"tag_push_events","r":false,"t":"`$BOOLEAN`","key$":"tag_push_events","index$":27},"url":{"a":true,"h":"Url","n":"url","r":false,"t":"`$STRING`","key$":"url","index$":28},"url_variables":{"a":true,"h":"Url Variables","n":"url_variables","r":false,"t":"`$ARRAY`","key$":"url_variables","index$":29},"vulnerability_events":{"a":true,"h":"Vulnerability Events","n":"vulnerability_events","r":false,"t":"`$BOOLEAN`","key$":"vulnerability_events","index$":30},"wiki_page_events":{"a":true,"h":"Wiki Page Events","n":"wiki_page_events","r":false,"t":"`$BOOLEAN`","key$":"wiki_page_events","index$":31}},"id":{"field":"id","name":"id"},"name":"api_entities_project_hook","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/v4/projects/{id}/hooks","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"post_api_v4_projects_id_hook","or":"post_api_v4_projects_id_hook","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/api/v4/projects/{id}/hooks","q":{"exist":["post_api_v4_projects_id_hook","project_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"hooks"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/v4/projects/{id}/hooks","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/hooks","q":{"exist":["page","per_page","project_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"hooks"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v4/projects/{id}/hooks/{hook_id}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"hook_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/hooks/{hook_id}","q":{"exist":["id","project_id"]},"r":{"param":{"hook_id":"id","id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"hooks"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /api/v4/projects/{id}/hooks/{hook_id}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"hook_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"put_api_v4_projects_id_hooks_hook_id","or":"put_api_v4_projects_id_hooks_hook_id","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"PUT","o":"/api/v4/projects/{id}/hooks/{hook_id}","q":{"exist":["id","project_id","put_api_v4_projects_id_hooks_hook_id"]},"r":{"param":{"hook_id":"id","id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"hooks"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.project"]]},"key$":"api_entities_project_hook","name__orig":"api_entities_project_hook","Name":"ApiEntitiesProjectHook","name_":"api_entities_project_hook","name-":"api-entities-project-hook","NAME":"API_ENTITIES_PROJECT_HOOK","index$":134}, {"active":true,"entity":"api_entities_project_hook","key$":"BasicApiEntitiesProjectHookFlow","kind":"basic","name":"BasicApiEntitiesProjectHookFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"api_entities_project_hook_ref01"},"m":{"project_id":"project01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"project_id":"project01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"api_entities_project_hook_ref01"}}],"index$":1},{"a":true,"d":{"project_id":"project01"},"i":{"ref":"api_entities_project_hook_ref01","srcdatavar":"api_entities_project_hook_ref01_data","suffix":"_up0","textfield":"branch_filter_strategy"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_project_hook_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"api_entities_project_hook_ref01","srcdatavar":"api_entities_project_hook_ref01_data","suffix":"_dt0"},"m":{"id":"api_entities_project_hook01","project_id":"project01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_project_hook_ref01"}}],"index$":3}]}, 'ApiEntitiesProjectHook', {"POST /api/v4/projects/{id}/hooks":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"name":"postApiV4ProjectsIdHooks","in":"body","required":true,"schema":{"type":"object","properties":{"url":{"type":"string","description":"The URL to send the request to","example":"http://example.com/hook"},"name":{"type":"string","description":"Name of the hook"},"description":{"type":"string","description":"Description of the hook"},"push_events":{"type":"boolean","description":"Trigger hook on push events"},"issues_events":{"type":"boolean","description":"Trigger hook on issues events"},"confidential_issues_events":{"type":"boolean","description":"Trigger hook on confidential issues events"},"merge_requests_events":{"type":"boolean","description":"Trigger hook on merge request events"},"tag_push_events":{"type":"boolean","description":"Trigger hook on tag push events"},"note_events":{"type":"boolean","description":"Trigger hook on note (comment) events"},"confidential_note_events":{"type":"boolean","description":"Trigger hook on confidential note (comment) events"},"job_events":{"type":"boolean","description":"Trigger hook on job events"},"pipeline_events":{"type":"boolean","description":"Trigger hook on pipeline events"},"wiki_page_events":{"type":"boolean","description":"Trigger hook on wiki events"},"deployment_events":{"type":"boolean","description":"Trigger hook on deployment events"},"feature_flag_events":{"type":"boolean","description":"Trigger hook on feature flag events"},"releases_events":{"type":"boolean","description":"Trigger hook on release events"},"milestone_events":{"type":"boolean","description":"Trigger hook on milestone events"},"emoji_events":{"type":"boolean","description":"Trigger hook on emoji events"},"resource_access_token_events":{"type":"boolean","description":"Trigger hook on project access token expiry events"},"enable_ssl_verification":{"type":"boolean","description":"Do SSL verification when triggering the hook"},"token":{"type":"string","description":"Secret token to validate received payloads; this will not be returned in the response"},"push_events_branch_filter":{"type":"string","description":"Trigger hook on specified branch only"},"custom_webhook_template":{"type":"string","description":"Custom template for the request payload"},"branch_filter_strategy":{"type":"string","description":"Filter push events by branch. Possible values are `wildcard` (default), `regex`, and `all_branches`","enum":["wildcard","regex","all_branches"]},"vulnerability_events":{"type":"boolean","description":"Trigger hook on vulnerability events"},"url_variables":{"type":"array","description":"URL variables for interpolation","items":{"type":"object","properties":{"key":{"type":"string","description":"Name of the variable","example":"token"},"value":{"type":"string","description":"Value of the variable","example":"123"}},"required":["key","value"]}},"custom_headers":{"type":"array","description":"Custom headers","items":{"type":"object","properties":{"key":{"type":"string","description":"Name of the header","example":"X-Custom-Header"},"value":{"type":"string","description":"Value of the header","example":"value"}},"required":["key","value"]}}},"required":["url"],"description":"Add project hook","x-ref":"#/definitions/postApiV4ProjectsIdHooks"},"index$":1}]},"GET /api/v4/projects/{id}/hooks":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"in":"query","name":"page","description":"Current page number","type":"integer","format":"int32","default":1,"required":false,"example":1,"index$":1},{"in":"query","name":"per_page","description":"Number of items per page","type":"integer","format":"int32","default":20,"required":false,"example":20,"index$":2}]},"GET /api/v4/projects/{id}/hooks/{hook_id}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"in":"path","name":"hook_id","description":"The ID of a project hook","type":"integer","format":"int32","required":true,"index$":1}]},"PUT /api/v4/projects/{id}/hooks/{hook_id}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"in":"path","name":"hook_id","description":"The ID of the project hook","type":"integer","format":"int32","required":true,"index$":1},{"name":"putApiV4ProjectsIdHooksHookId","in":"body","required":true,"schema":{"type":"object","properties":{"url":{"type":"string","description":"The URL to send the request to"},"name":{"type":"string","description":"Name of the hook"},"description":{"type":"string","description":"Description of the hook"},"push_events":{"type":"boolean","description":"Trigger hook on push events"},"issues_events":{"type":"boolean","description":"Trigger hook on issues events"},"confidential_issues_events":{"type":"boolean","description":"Trigger hook on confidential issues events"},"merge_requests_events":{"type":"boolean","description":"Trigger hook on merge request events"},"tag_push_events":{"type":"boolean","description":"Trigger hook on tag push events"},"note_events":{"type":"boolean","description":"Trigger hook on note (comment) events"},"confidential_note_events":{"type":"boolean","description":"Trigger hook on confidential note (comment) events"},"job_events":{"type":"boolean","description":"Trigger hook on job events"},"pipeline_events":{"type":"boolean","description":"Trigger hook on pipeline events"},"wiki_page_events":{"type":"boolean","description":"Trigger hook on wiki events"},"deployment_events":{"type":"boolean","description":"Trigger hook on deployment events"},"feature_flag_events":{"type":"boolean","description":"Trigger hook on feature flag events"},"releases_events":{"type":"boolean","description":"Trigger hook on release events"},"milestone_events":{"type":"boolean","description":"Trigger hook on milestone events"},"emoji_events":{"type":"boolean","description":"Trigger hook on emoji events"},"resource_access_token_events":{"type":"boolean","description":"Trigger hook on project access token expiry events"},"enable_ssl_verification":{"type":"boolean","description":"Do SSL verification when triggering the hook"},"token":{"type":"string","description":"Secret token to validate received payloads; this will not be returned in the response"},"push_events_branch_filter":{"type":"string","description":"Trigger hook on specified branch only"},"custom_webhook_template":{"type":"string","description":"Custom template for the request payload"},"branch_filter_strategy":{"type":"string","description":"Filter push events by branch. Possible values are `wildcard` (default), `regex`, and `all_branches`","enum":["wildcard","regex","all_branches"]},"vulnerability_events":{"type":"boolean","description":"Trigger hook on vulnerability events"},"url_variables":{"type":"array","description":"URL variables for interpolation","items":{"type":"object","properties":{"key":{"type":"string","description":"Name of the variable","example":"token"},"value":{"type":"string","description":"Value of the variable","example":"123"}},"required":["key","value"]}},"custom_headers":{"type":"array","description":"Custom headers","items":{"type":"object","properties":{"key":{"type":"string","description":"Name of the header","example":"X-Custom-Header"},"value":{"type":"string","description":"Value of the header","example":"value"}},"required":["key","value"]}}},"description":"Edit project hook","x-ref":"#/definitions/putApiV4ProjectsIdHooksHookId"},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const api_entities_project_hook_ref01_ent = client.ApiEntitiesProjectHook()
    let api_entities_project_hook_ref01_data = setup.data.new.api_entities_project_hook['api_entities_project_hook_ref01']
    api_entities_project_hook_ref01_data['project_id'] = setup.idmap['project01']

    api_entities_project_hook_ref01_data = (await api_entities_project_hook_ref01_ent.create(api_entities_project_hook_ref01_data)).data()
    assert(null != api_entities_project_hook_ref01_data.id)


    // LIST
    const api_entities_project_hook_ref01_match: any = {}
    api_entities_project_hook_ref01_match['project_id'] = setup.idmap['project01']

    const api_entities_project_hook_ref01_list = (await api_entities_project_hook_ref01_ent.list(api_entities_project_hook_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(api_entities_project_hook_ref01_list, { id: api_entities_project_hook_ref01_data.id })))


    // UPDATE
    const api_entities_project_hook_ref01_data_up0: any = {}
    api_entities_project_hook_ref01_data_up0.id = api_entities_project_hook_ref01_data.id
    api_entities_project_hook_ref01_data_up0 ['project_id'] = setup.idmap['project_id']

    const api_entities_project_hook_ref01_markdef_up0 = { name: 'branch_filter_strategy', value: 'Mark01-api_entities_project_hook_ref01_' + setup.now }
    ;(api_entities_project_hook_ref01_data_up0 as any)[api_entities_project_hook_ref01_markdef_up0.name] = api_entities_project_hook_ref01_markdef_up0.value

    const api_entities_project_hook_ref01_resdata_up0 = (await api_entities_project_hook_ref01_ent.update(api_entities_project_hook_ref01_data_up0)).data()
    assert(api_entities_project_hook_ref01_resdata_up0.id === api_entities_project_hook_ref01_data_up0.id)

    assert((api_entities_project_hook_ref01_resdata_up0 as any)[api_entities_project_hook_ref01_markdef_up0.name] === api_entities_project_hook_ref01_markdef_up0.value)


    // LOAD
    const api_entities_project_hook_ref01_match_dt0: any = {}
    api_entities_project_hook_ref01_match_dt0.id = api_entities_project_hook_ref01_data.id
    const api_entities_project_hook_ref01_data_dt0 = (await api_entities_project_hook_ref01_ent.load(api_entities_project_hook_ref01_match_dt0)).data()
    assert(api_entities_project_hook_ref01_data_dt0.id === api_entities_project_hook_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_project_hook/ApiEntitiesProjectHookTestData.json')

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
    ['api_entities_project_hook01','api_entities_project_hook02','api_entities_project_hook03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_PROJECT_HOOK_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_PROJECT_HOOK_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_PROJECT_HOOK_ENTID']
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
  
