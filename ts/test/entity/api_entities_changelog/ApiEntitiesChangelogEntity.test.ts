

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


describe('ApiEntitiesChangelogEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesChangelog()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_changelog.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"notes","req":false,"type":"`$STRING`","index$":0}],"name":"api_entities_changelog","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":1,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":".gitlab/changelog_config.yml","kind":"query","name":"config_file","orig":"config_file","reqd":false,"type":"`$ANY`","index$":0},{"active":true,"example":"main","kind":"query","name":"config_file_ref","orig":"config_file_ref","reqd":false,"type":"`$ANY`","index$":1},{"active":true,"example":"2021-09-20T11:50:22.001+00:00","kind":"query","name":"date","orig":"date","reqd":false,"type":"`$ANY`","index$":2},{"active":true,"example":"ed899a2f4b50b4370feeea94676502b42383c746","kind":"query","name":"from","orig":"from","reqd":false,"type":"`$ANY`","index$":3},{"active":true,"example":"6104942438c14ec7bd21c6cd5bd995272b3faff6","kind":"query","name":"to","orig":"to","reqd":false,"type":"`$ANY`","index$":4},{"active":true,"example":"Changelog","kind":"query","name":"trailer","orig":"trailer","reqd":false,"type":"`$ANY`","index$":5},{"active":true,"example":"1.0.0","kind":"query","name":"version","orig":"version","reqd":true,"type":"`$ANY`","index$":6}]},"contract":{"id":"GET /api/v4/projects/{id}/repository/changelog","json":"{\"operationId\":\"getApiV4ProjectsIdRepositoryChangelog\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"example\":1,\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The version of the release, using the semantic versioning format\",\"example\":\"1.0.0\",\"in\":\"query\",\"name\":\"version\",\"required\":true,\"type\":\"string\"},{\"description\":\"The first commit in the range of commits to use for the changelog\",\"example\":\"ed899a2f4b50b4370feeea94676502b42383c746\",\"in\":\"query\",\"name\":\"from\",\"required\":false,\"type\":\"string\"},{\"description\":\"The last commit in the range of commits to use for the changelog\",\"example\":\"6104942438c14ec7bd21c6cd5bd995272b3faff6\",\"in\":\"query\",\"name\":\"to\",\"required\":false,\"type\":\"string\"},{\"description\":\"The date and time of the release\",\"example\":\"2021-09-20T11:50:22.001+00:00\",\"format\":\"date-time\",\"in\":\"query\",\"name\":\"date\",\"required\":false,\"type\":\"string\"},{\"default\":\"Changelog\",\"description\":\"The Git trailer to use for determining if commits are to be included in the changelog\",\"example\":\"Changelog\",\"in\":\"query\",\"name\":\"trailer\",\"required\":false,\"type\":\"string\"},{\"description\":\"The file path to the configuration file as stored in the project's Git repository. Defaults to '.gitlab/changelog_config.yml'\",\"example\":\".gitlab/changelog_config.yml\",\"in\":\"query\",\"name\":\"config_file\",\"required\":false,\"type\":\"string\"},{\"description\":\"The git reference (for example, branch) where the changelog configuration file is defined. Defaults to the default repository branch.\",\"example\":\"main\",\"in\":\"query\",\"name\":\"config_file_ref\",\"required\":false,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Generates a changelog section for a release and returns it\",\"schema\":{\"description\":\"API_Entities_Changelog model\",\"properties\":{\"notes\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/repository/changelog","rename":{"param":{"id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"repository"},{"lit":"changelog"}],"select":{"exist":["config_file","config_file_ref","date","from","project_id","to","trailer","version"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["project"]]},"key$":"api_entities_changelog","name__orig":"api_entities_changelog","Name":"ApiEntitiesChangelog","name_":"api_entities_changelog","name-":"api-entities-changelog","NAME":"API_ENTITIES_CHANGELOG","index$":20}, {"active":true,"entity":"api_entities_changelog","key$":"BasicApiEntitiesChangelogFlow","kind":"basic","name":"BasicApiEntitiesChangelogFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"api_entities_changelog_ref01","srcdatavar":"api_entities_changelog_ref01_data","suffix":"_dt0"},"match":{"id":"api_entities_changelog01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_changelog_ref01"}}],"index$":0}]}, 'ApiEntitiesChangelog')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let api_entities_changelog_ref01_data = Object.values(setup.data.existing.api_entities_changelog)[0] as any

    // LOAD: skipped — no entity id field and load requires path params.
    // Entity-var is declared here so later flow steps still compile.
    const api_entities_changelog_ref01_ent = client.ApiEntitiesChangelog()


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_changelog/ApiEntitiesChangelogTestData.json')

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
    ['api_entities_changelog01','api_entities_changelog02','api_entities_changelog03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_CHANGELOG_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_CHANGELOG_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_CHANGELOG_ENTID']
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
  
