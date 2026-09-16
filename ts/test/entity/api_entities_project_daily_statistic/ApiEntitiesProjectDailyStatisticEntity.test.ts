

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


describe('ApiEntitiesProjectDailyStatisticEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesProjectDailyStatistic()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_project_daily_statistic.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"days","req":false,"type":"`$ARRAY`","index$":0},{"active":true,"format":"int32","name":"total","req":false,"type":"`$INTEGER`","index$":1}],"name":"api_entities_project_daily_statistic","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /api/v4/projects/{id}/statistics","json":"{\"operationId\":\"getApiV4ProjectsIdStatistics\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get the list of project fetch statistics for the last 30 days\",\"schema\":{\"description\":\"API_Entities_ProjectDailyStatistics model\",\"properties\":{\"fetches\":{\"properties\":{\"days\":{\"items\":{\"properties\":{\"count\":{\"example\":3,\"format\":\"int32\",\"type\":\"integer\"},\"date\":{\"example\":\"2022-01-01\",\"format\":\"date\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"total\":{\"example\":3,\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"}},\"type\":\"object\"}},\"401\":{\"description\":\"401 Unauthorized\"},\"404\":{\"description\":\"404 Project Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/statistics","rename":{"param":{"id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"statistics"}],"select":{"exist":["project_id"]},"transform":{"req":"`reqdata`","res":"`body.fetches`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["project"]]},"key$":"api_entities_project_daily_statistic","name__orig":"api_entities_project_daily_statistic","Name":"ApiEntitiesProjectDailyStatistic","name_":"api_entities_project_daily_statistic","name-":"api-entities-project-daily-statistic","NAME":"API_ENTITIES_PROJECT_DAILY_STATISTIC","index$":131}, {"active":true,"entity":"api_entities_project_daily_statistic","key$":"BasicApiEntitiesProjectDailyStatisticFlow","kind":"basic","name":"BasicApiEntitiesProjectDailyStatisticFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"api_entities_project_daily_statistic_ref01","srcdatavar":"api_entities_project_daily_statistic_ref01_data","suffix":"_dt0"},"match":{"id":"api_entities_project_daily_statistic01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_project_daily_statistic_ref01"}}],"index$":0}]}, 'ApiEntitiesProjectDailyStatistic')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let api_entities_project_daily_statistic_ref01_data = Object.values(setup.data.existing.api_entities_project_daily_statistic)[0] as any

    // LOAD: skipped — no entity id field and load requires path params.
    // Entity-var is declared here so later flow steps still compile.
    const api_entities_project_daily_statistic_ref01_ent = client.ApiEntitiesProjectDailyStatistic()


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_project_daily_statistic/ApiEntitiesProjectDailyStatisticTestData.json')

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
    ['api_entities_project_daily_statistic01','api_entities_project_daily_statistic02','api_entities_project_daily_statistic03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_PROJECT_DAILY_STATISTIC_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_PROJECT_DAILY_STATISTIC_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_PROJECT_DAILY_STATISTIC_ENTID']
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
  
