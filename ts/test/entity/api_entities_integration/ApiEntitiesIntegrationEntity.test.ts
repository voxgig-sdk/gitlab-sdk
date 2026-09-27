

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


describe('ApiEntitiesIntegrationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesIntegration()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_integration.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0}},"id":{"field":"id","name":"id"},"name":"api_entities_integration","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v4/groups/{id}/integrations/{slug}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"group_id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"slug","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/api/v4/groups/{id}/integrations/{slug}","q":{"exist":["group_id","id"]},"r":{"param":{"id":"group_id","slug":"id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"integrations"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.properties`"},"index$":0},{"a":true,"co":{"id":"GET /api/v4/projects/{id}/integrations/{slug}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"slug","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/integrations/{slug}","q":{"exist":["id","project_id"]},"r":{"param":{"id":"project_id","slug":"id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"integrations"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.properties`"},"index$":1},{"a":true,"co":{"id":"GET /api/v4/projects/{id}/services/{slug}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"slug","or":"slug","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/services/{slug}","q":{"exist":["project_id","slug"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"services"},{"var":"slug"}],"t":{"req":"`reqdata`","res":"`body.properties`"},"index$":2}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.group"],["$.main.kit.entity.project"],["$.main.kit.entity.project"]]},"key$":"api_entities_integration","name__orig":"api_entities_integration","Name":"ApiEntitiesIntegration","name_":"api_entities_integration","name-":"api-entities-integration","NAME":"API_ENTITIES_INTEGRATION","index$":82}, {"active":true,"entity":"api_entities_integration","key$":"BasicApiEntitiesIntegrationFlow","kind":"basic","name":"BasicApiEntitiesIntegrationFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"api_entities_integration_ref01","srcdatavar":"api_entities_integration_ref01_data","suffix":"_dt0"},"m":{"id":"api_entities_integration01","project_id":"project01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_integration_ref01"}}],"index$":0}]}, 'ApiEntitiesIntegration', {"GET /api/v4/groups/{id}/integrations/{slug}":{"protocol":"http","parameters":[{"in":"path","name":"slug","description":"The name of the integration","type":"string","enum":["apple-app-store","asana","assembla","bamboo","bugzilla","buildkite","campfire","confluence","custom-issue-tracker","datadog","diffblue-cover","discord","drone-ci","emails-on-push","external-wiki","gitlab-slack-application","google-play","hangouts-chat","harbor","irker","jenkins","jira","jira-cloud-app","linear","matrix","mattermost-slash-commands","slack-slash-commands","packagist","phorge","pipelines-email","pivotaltracker","pumble","pushover","redmine","ewm","youtrack","clickup","slack","microsoft-teams","mattermost","teamcity","telegram","unify-circuit","webex-teams","zentao","squash-tm","github","git-guardian","google-cloud-platform-artifact-registry","google-cloud-platform-workload-identity-federation","mock-ci","mock-monitoring"],"required":true,"index$":0},{"in":"path","name":"id","type":"integer","format":"int32","required":true,"index$":1}]},"GET /api/v4/projects/{id}/integrations/{slug}":{"protocol":"http","parameters":[{"in":"path","name":"slug","description":"The name of the integration","type":"string","enum":["apple-app-store","asana","assembla","bamboo","bugzilla","buildkite","campfire","confluence","custom-issue-tracker","datadog","diffblue-cover","discord","drone-ci","emails-on-push","external-wiki","gitlab-slack-application","google-play","hangouts-chat","harbor","irker","jenkins","jira","jira-cloud-app","linear","matrix","mattermost-slash-commands","slack-slash-commands","packagist","phorge","pipelines-email","pivotaltracker","pumble","pushover","redmine","ewm","youtrack","clickup","slack","microsoft-teams","mattermost","teamcity","telegram","unify-circuit","webex-teams","zentao","squash-tm","github","git-guardian","google-cloud-platform-artifact-registry","google-cloud-platform-workload-identity-federation","mock-ci","mock-monitoring"],"required":true,"index$":0},{"in":"path","name":"id","type":"integer","format":"int32","required":true,"index$":1}]},"GET /api/v4/projects/{id}/services/{slug}":{"protocol":"http","parameters":[{"in":"path","name":"slug","description":"The name of the integration","type":"string","enum":["apple-app-store","asana","assembla","bamboo","bugzilla","buildkite","campfire","confluence","custom-issue-tracker","datadog","diffblue-cover","discord","drone-ci","emails-on-push","external-wiki","gitlab-slack-application","google-play","hangouts-chat","harbor","irker","jenkins","jira","jira-cloud-app","linear","matrix","mattermost-slash-commands","slack-slash-commands","packagist","phorge","pipelines-email","pivotaltracker","pumble","pushover","redmine","ewm","youtrack","clickup","slack","microsoft-teams","mattermost","teamcity","telegram","unify-circuit","webex-teams","zentao","squash-tm","github","git-guardian","google-cloud-platform-artifact-registry","google-cloud-platform-workload-identity-federation","mock-ci","mock-monitoring"],"required":true,"index$":0},{"in":"path","name":"id","type":"integer","format":"int32","required":true,"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let api_entities_integration_ref01_data = Object.values(setup.data.existing.api_entities_integration)[0] as any

    // LOAD
    const api_entities_integration_ref01_ent = client.ApiEntitiesIntegration()
    const api_entities_integration_ref01_match_dt0: any = {}
    api_entities_integration_ref01_match_dt0.id = api_entities_integration_ref01_data.id
    const api_entities_integration_ref01_data_dt0 = (await api_entities_integration_ref01_ent.load(api_entities_integration_ref01_match_dt0)).data()
    assert(api_entities_integration_ref01_data_dt0.id === api_entities_integration_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_integration/ApiEntitiesIntegrationTestData.json')

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
    ['api_entities_integration01','api_entities_integration02','api_entities_integration03','group01','group02','group03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_INTEGRATION_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_INTEGRATION_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_INTEGRATION_ENTID']
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
  
