

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


describe('ApiEntitiesCiPipelineEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesCiPipeline()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_ci_pipeline.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"api_entities_ci_pipeline","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/v4/projects/{id}/merge_requests/{merge_request_iid}/pipelines","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"merge_request_id","or":"merge_request_iid","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"post_api_v4_projects_id_merge_requests_merge_request_iid_pipeline","or":"post_api_v4_projects_id_merge_requests_merge_request_iid_pipeline","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/api/v4/projects/{id}/merge_requests/{merge_request_iid}/pipelines","q":{"exist":["merge_request_id","post_api_v4_projects_id_merge_requests_merge_request_iid_pipeline","project_id"]},"r":{"param":{"id":"project_id","merge_request_iid":"merge_request_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"merge_requests"},{"var":"merge_request_id"},{"lit":"pipelines"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /api/v4/projects/{id}/(ref/{ref}/)trigger/pipeline","source":"swagger2","version":2},"g":{"params":[{"a":true,"ex":18,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"develop","k":"param","n":"ref_id","or":"ref","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"post_api_v4_projects_id(ref_ref)trigger_pipeline","or":"post_api_v4_projects_id(ref_ref)trigger_pipeline","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/api/v4/projects/{id}/(ref/{ref}/)trigger/pipeline","q":{"exist":["post_api_v4_projects_id(ref_ref)trigger_pipeline","project_id","ref_id"]},"r":{"param":{"id":"project_id","ref":"ref_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"(ref"},{"var":"ref_id"},{"lit":")trigger"},{"lit":"pipeline"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"POST /api/v4/projects/{id}/pipelines/{pipeline_id}/cancel","source":"swagger2","version":2},"g":{"params":[{"a":true,"ex":18,"k":"param","n":"pipeline_id","or":"pipeline_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":11,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/api/v4/projects/{id}/pipelines/{pipeline_id}/cancel","q":{"exist":["pipeline_id","project_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"pipelines"},{"var":"pipeline_id"},{"lit":"cancel"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"POST /api/v4/projects/{id}/pipelines/{pipeline_id}/retry","source":"swagger2","version":2},"g":{"params":[{"a":true,"ex":18,"k":"param","n":"pipeline_id","or":"pipeline_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":11,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/api/v4/projects/{id}/pipelines/{pipeline_id}/retry","q":{"exist":["pipeline_id","project_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"pipelines"},{"var":"pipeline_id"},{"lit":"retry"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3},{"a":true,"co":{"id":"POST /api/v4/projects/{id}/pipeline","source":"swagger2","version":2},"g":{"params":[{"a":true,"ex":11,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"post_api_v4_projects_id_pipeline","or":"post_api_v4_projects_id_pipeline","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/api/v4/projects/{id}/pipeline","q":{"exist":["post_api_v4_projects_id_pipeline","project_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"pipeline"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":4}],"key$":"create"}},"relations":{"ancestors":[["$.main.kit.entity.project"],["$.main.kit.entity.project"],["$.main.kit.entity.project","$.main.kit.entity.merge_request"],["$.main.kit.entity.project"]]},"key$":"api_entities_ci_pipeline","name__orig":"api_entities_ci_pipeline","Name":"ApiEntitiesCiPipeline","name_":"api_entities_ci_pipeline","name-":"api-entities-ci-pipeline","NAME":"API_ENTITIES_CI_PIPELINE","index$":27}, {"active":true,"entity":"api_entities_ci_pipeline","key$":"BasicApiEntitiesCiPipelineFlow","kind":"basic","name":"BasicApiEntitiesCiPipelineFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"api_entities_ci_pipeline_ref01"},"m":{"project_id":"project01"},"o":"create","s":[],"v":[],"index$":0}]}, 'ApiEntitiesCiPipeline', {"POST /api/v4/projects/{id}/merge_requests/{merge_request_iid}/pipelines":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project.","type":"string","required":true,"index$":0},{"in":"path","name":"merge_request_iid","type":"integer","format":"int32","required":true,"index$":1},{"name":"postApiV4ProjectsIdMergeRequestsMergeRequestIidPipelines","in":"body","required":true,"schema":{"type":"object","properties":{"async":{"type":"boolean","description":"Indicates if the merge request pipeline creation should be performed asynchronously. If set to `true`, the pipeline will be created outside of the API request and the endpoint will return an empty response with a `202` status code. When the response is `202`, the creation can still fail outside of this request.","default":false}},"description":"Create merge request pipeline","x-ref":"#/definitions/postApiV4ProjectsIdMergeRequestsMergeRequestIidPipelines"},"index$":2}]},"POST /api/v4/projects/{id}/(ref/{ref}/)trigger/pipeline":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"example":18,"index$":0},{"in":"path","name":"ref","description":"The commit sha or name of a branch or tag","type":"string","required":true,"example":"develop","index$":1},{"name":"postApiV4ProjectsId(refRef)triggerPipeline","in":"body","required":true,"schema":{"type":"object","properties":{"token":{"type":"string","description":"The unique token of trigger or job token","example":"6d056f63e50fe6f8c5f8f4aa10edb7"},"variables":{"type":"object","description":"The list of variables to be injected into build","example":{"VAR1":"value1","VAR2":"value2"}},"inputs":{"type":"object","description":"The list of inputs to be used to create the pipeline."}},"required":["token"],"description":"Trigger a GitLab project pipeline","x-ref":"#/definitions/postApiV4ProjectsId(refRef)triggerPipeline"},"index$":2}]},"POST /api/v4/projects/{id}/pipelines/{pipeline_id}/cancel":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The project ID or URL-encoded path","type":"string","required":true,"example":11,"index$":0},{"in":"path","name":"pipeline_id","description":"The pipeline ID","type":"integer","format":"int32","required":true,"example":18,"index$":1}]},"POST /api/v4/projects/{id}/pipelines/{pipeline_id}/retry":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The project ID or URL-encoded path","type":"string","required":true,"example":11,"index$":0},{"in":"path","name":"pipeline_id","description":"The pipeline ID","type":"integer","format":"int32","required":true,"example":18,"index$":1}]},"POST /api/v4/projects/{id}/pipeline":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The project ID or URL-encoded path","type":"string","required":true,"example":11,"index$":0},{"name":"postApiV4ProjectsIdPipeline","in":"body","required":true,"schema":{"type":"object","properties":{"ref":{"type":"string","description":"Reference","example":"develop"},"variables":{"type":"array","description":"Array of variables available in the pipeline","items":{"type":"object","properties":{"key":{"type":"string","description":"The key of the variable","example":"UPLOAD_TO_S3"},"value":{"type":"string","description":"The value of the variable","example":"true"},"variable_type":{"type":"string","description":"The type of variable, must be one of env_var or file. Defaults to env_var","enum":["env_var","file"],"default":"env_var"}}}},"inputs":{"type":"object","description":"The list of inputs to be used to create the pipeline."}},"required":["ref"],"description":"Create a new pipeline","x-ref":"#/definitions/postApiV4ProjectsIdPipeline"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const api_entities_ci_pipeline_ref01_ent = client.ApiEntitiesCiPipeline()
    let api_entities_ci_pipeline_ref01_data = setup.data.new.api_entities_ci_pipeline['api_entities_ci_pipeline_ref01']
    api_entities_ci_pipeline_ref01_data['project_id'] = setup.idmap['project01']

    api_entities_ci_pipeline_ref01_data = (await api_entities_ci_pipeline_ref01_ent.create(api_entities_ci_pipeline_ref01_data)).data()
    assert(null != api_entities_ci_pipeline_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_ci_pipeline/ApiEntitiesCiPipelineTestData.json')

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
    ['api_entities_ci_pipeline01','api_entities_ci_pipeline02','api_entities_ci_pipeline03','project01','project02','project03','merge_request01','merge_request02','merge_request03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_CI_PIPELINE_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_CI_PIPELINE_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_CI_PIPELINE_ENTID']
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
  
