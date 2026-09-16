

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


describe('FeatureFlagEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.FeatureFlag()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'feature_flag.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":0}],"id":{"field":"id","name":"id"},"name":"feature_flag","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"unleash_id","orig":"project_id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"post_api_v4_feature_flags_unleash_project_id_client_metric","orig":"post_api_v4_feature_flags_unleash_project_id_client_metric","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"POST /api/v4/feature_flags/unleash/{project_id}/client/metrics","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4FeatureFlagsUnleashProjectIdClientMetrics\",\"parameters\":[{\"description\":\"The ID of a project\",\"in\":\"path\",\"name\":\"project_id\",\"required\":true,\"type\":\"string\"},{\"in\":\"body\",\"name\":\"postApiV4FeatureFlagsUnleashProjectIdClientMetrics\",\"required\":true,\"schema\":{\"properties\":{\"app_name\":{\"description\":\"The application name of Unleash Client\",\"type\":\"string\"},\"instance_id\":{\"description\":\"The instance ID of Unleash Client\",\"type\":\"string\"}},\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"created Metric\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/feature_flags/unleash/{project_id}/client/metrics","rename":{"param":{"project_id":"unleash_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"feature_flags"},{"lit":"unleash"},{"var":"unleash_id"},{"lit":"client"},{"lit":"metrics"}],"select":{"exist":["post_api_v4_feature_flags_unleash_project_id_client_metric","unleash_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"unleash_id","orig":"project_id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"post_api_v4_feature_flags_unleash_project_id_client_register","orig":"post_api_v4_feature_flags_unleash_project_id_client_register","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"POST /api/v4/feature_flags/unleash/{project_id}/client/register","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4FeatureFlagsUnleashProjectIdClientRegister\",\"parameters\":[{\"description\":\"The ID of a project\",\"in\":\"path\",\"name\":\"project_id\",\"required\":true,\"type\":\"string\"},{\"in\":\"body\",\"name\":\"postApiV4FeatureFlagsUnleashProjectIdClientRegister\",\"required\":true,\"schema\":{\"properties\":{\"app_name\":{\"description\":\"The application name of Unleash Client\",\"type\":\"string\"},\"instance_id\":{\"description\":\"The instance ID of Unleash Client\",\"type\":\"string\"}},\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"created Register\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/feature_flags/unleash/{project_id}/client/register","rename":{"param":{"project_id":"unleash_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"feature_flags"},{"lit":"unleash"},{"var":"unleash_id"},{"lit":"client"},{"lit":"register"}],"select":{"exist":["post_api_v4_feature_flags_unleash_project_id_client_register","unleash_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"project_id","orig":"project_id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"app_name","orig":"app_name","reqd":false,"type":"`$ANY`","index$":0},{"active":true,"kind":"query","name":"instance_id","orig":"instance_id","reqd":false,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /api/v4/feature_flags/unleash/{project_id}","json":"{\"operationId\":\"getApiV4FeatureFlagsUnleashProjectId\",\"parameters\":[{\"description\":\"The ID of a project\",\"in\":\"path\",\"name\":\"project_id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The instance ID of Unleash Client\",\"in\":\"query\",\"name\":\"instance_id\",\"required\":false,\"type\":\"string\"},{\"description\":\"The application name of Unleash Client\",\"in\":\"query\",\"name\":\"app_name\",\"required\":false,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"get Unleash(s)\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/feature_flags/unleash/{project_id}","segments":[{"lit":"api"},{"lit":"v4"},{"lit":"feature_flags"},{"lit":"unleash"},{"var":"project_id"}],"select":{"exist":["app_name","instance_id","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"feature_flag_name","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"DELETE /api/v4/projects/{id}/feature_flags/{feature_flag_name}","json":"{\"operationId\":\"deleteApiV4ProjectsIdFeatureFlagsFeatureFlagName\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The name of the feature flag\",\"in\":\"path\",\"name\":\"feature_flag_name\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"204\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"DELETE","orig":"/api/v4/projects/{id}/feature_flags/{feature_flag_name}","rename":{"param":{"feature_flag_name":"id","id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"feature_flags"},{"var":"id"}],"select":{"exist":["id","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"}},"relations":{"ancestors":[["unleash"],["project"]]},"key$":"feature_flag","name__orig":"feature_flag","Name":"FeatureFlag","name_":"feature_flag","name-":"feature-flag","NAME":"FEATURE_FLAG","index$":205}, {"active":true,"entity":"feature_flag","key$":"BasicFeatureFlagFlow","kind":"basic","name":"BasicFeatureFlagFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"feature_flag_ref01"},"match":{"project_id":"project01","unleash_id":"unleash01"},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{"ref":"feature_flag_ref01","srcdatavar":"feature_flag_ref01_data","suffix":"_dt0"},"match":{"id":"feature_flag01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-feature_flag_ref01"}}],"index$":1},{"active":true,"data":{},"input":{"ref":"feature_flag_ref01","suffix":"_rm0"},"match":{"id":"feature_flag01","project_id":"project01"},"op":"remove","spec":[],"valid":[],"index$":2}]}, 'FeatureFlag')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const feature_flag_ref01_ent = client.FeatureFlag()
    let feature_flag_ref01_data = setup.data.new.feature_flag['feature_flag_ref01']
    feature_flag_ref01_data['project_id'] = setup.idmap['project01']
    feature_flag_ref01_data['unleash_id'] = setup.idmap['unleash01']

    feature_flag_ref01_data = (await feature_flag_ref01_ent.create(feature_flag_ref01_data)).data()
    assert(null != feature_flag_ref01_data.id)


    // LOAD
    const feature_flag_ref01_match_dt0: any = {}
    feature_flag_ref01_match_dt0.id = feature_flag_ref01_data.id
    const feature_flag_ref01_data_dt0 = (await feature_flag_ref01_ent.load(feature_flag_ref01_match_dt0)).data()
    assert(feature_flag_ref01_data_dt0.id === feature_flag_ref01_data.id)


    // REMOVE
    const feature_flag_ref01_match_rm0: any = { id: feature_flag_ref01_data.id }
    await feature_flag_ref01_ent.remove(feature_flag_ref01_match_rm0)
  

  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/feature_flag/FeatureFlagTestData.json')

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
    ['feature_flag01','feature_flag02','feature_flag03','unleash01','unleash02','unleash03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_FEATURE_FLAG_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_FEATURE_FLAG_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_FEATURE_FLAG_ENTID']
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
  
