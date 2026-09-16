

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


describe('IssuesStatisticEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.IssuesStatistic()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'issues_statistic.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[],"name":"issues_statistic","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"assignee_id","orig":"assignee_id","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"assignee_username","orig":"assignee_username","reqd":false,"type":"`$ANY`","index$":1},{"active":true,"kind":"query","name":"author_id","orig":"author_id","reqd":false,"type":"`$STRING`","index$":2},{"active":true,"kind":"query","name":"author_username","orig":"author_username","reqd":false,"type":"`$ANY`","index$":3},{"active":true,"kind":"query","name":"confidential","orig":"confidential","reqd":false,"type":"`$ANY`","index$":4},{"active":true,"kind":"query","name":"created_after","orig":"created_after","reqd":false,"type":"`$ANY`","index$":5},{"active":true,"kind":"query","name":"created_before","orig":"created_before","reqd":false,"type":"`$ANY`","index$":6},{"active":true,"kind":"query","name":"epic_id","orig":"epic_id","reqd":false,"type":"`$STRING`","index$":7},{"active":true,"kind":"query","name":"health_status","orig":"health_status","reqd":false,"type":"`$ANY`","index$":8},{"active":true,"kind":"query","name":"iid","orig":"iid","reqd":false,"type":"`$ANY`","index$":9},{"active":true,"kind":"query","name":"in","orig":"in","reqd":false,"type":"`$ANY`","index$":10},{"active":true,"kind":"query","name":"iteration_id","orig":"iteration_id","reqd":false,"type":"`$STRING`","index$":11},{"active":true,"kind":"query","name":"iteration_title","orig":"iteration_title","reqd":false,"type":"`$ANY`","index$":12},{"active":true,"kind":"query","name":"label","orig":"label","reqd":false,"type":"`$STRING`","index$":13},{"active":true,"kind":"query","name":"milestone","orig":"milestone","reqd":false,"type":"`$ANY`","index$":14},{"active":true,"kind":"query","name":"milestone_id","orig":"milestone_id","reqd":false,"type":"`$STRING`","index$":15},{"active":true,"kind":"query","name":"my_reaction_emoji","orig":"my_reaction_emoji","reqd":false,"type":"`$ANY`","index$":16},{"active":true,"kind":"query","name":"not_assignee_id","orig":"not_assignee_id","reqd":false,"type":"`$STRING`","index$":17},{"active":true,"kind":"query","name":"not_assignee_username","orig":"not_assignee_username","reqd":false,"type":"`$ANY`","index$":18},{"active":true,"kind":"query","name":"not_author_id","orig":"not_author_id","reqd":false,"type":"`$STRING`","index$":19},{"active":true,"kind":"query","name":"not_author_username","orig":"not_author_username","reqd":false,"type":"`$ANY`","index$":20},{"active":true,"kind":"query","name":"not_iid","orig":"not_iid","reqd":false,"type":"`$ANY`","index$":21},{"active":true,"kind":"query","name":"not_iteration_id","orig":"not_iteration_id","reqd":false,"type":"`$STRING`","index$":22},{"active":true,"kind":"query","name":"not_iteration_title","orig":"not_iteration_title","reqd":false,"type":"`$ANY`","index$":23},{"active":true,"kind":"query","name":"not_label","orig":"not_label","reqd":false,"type":"`$ANY`","index$":24},{"active":true,"kind":"query","name":"not_milestone","orig":"not_milestone","reqd":false,"type":"`$ANY`","index$":25},{"active":true,"kind":"query","name":"not_milestone_id","orig":"not_milestone_id","reqd":false,"type":"`$STRING`","index$":26},{"active":true,"kind":"query","name":"not_weight","orig":"not_weight","reqd":false,"type":"`$ANY`","index$":27},{"active":true,"kind":"query","name":"scope","orig":"scope","reqd":false,"type":"`$ANY`","index$":28},{"active":true,"kind":"query","name":"search","orig":"search","reqd":false,"type":"`$ANY`","index$":29},{"active":true,"kind":"query","name":"updated_after","orig":"updated_after","reqd":false,"type":"`$ANY`","index$":30},{"active":true,"kind":"query","name":"updated_before","orig":"updated_before","reqd":false,"type":"`$ANY`","index$":31},{"active":true,"kind":"query","name":"weight","orig":"weight","reqd":false,"type":"`$NUMBER`","index$":32}]},"contract":{"id":"GET /api/v4/issues_statistics","json":"{\"operationId\":\"getApiV4IssuesStatistics\",\"parameters\":[{\"description\":\"Comma-separated list of label names\",\"in\":\"query\",\"items\":{\"type\":\"string\"},\"name\":\"labels\",\"required\":false,\"type\":\"array\"},{\"description\":\"Milestone title\",\"in\":\"query\",\"name\":\"milestone\",\"required\":false,\"type\":\"string\"},{\"description\":\"Return issues assigned to milestones with the specified timebox value (\\\"Any\\\", \\\"None\\\", \\\"Upcoming\\\" or \\\"Started\\\")\",\"enum\":[\"Any\",\"None\",\"Upcoming\",\"Started\"],\"in\":\"query\",\"name\":\"milestone_id\",\"required\":false,\"type\":\"string\"},{\"description\":\"The IID array of issues\",\"in\":\"query\",\"items\":{\"format\":\"int32\",\"type\":\"integer\"},\"name\":\"iids\",\"required\":false,\"type\":\"array\"},{\"description\":\"Search issues for text present in the title, description, or any combination of these\",\"in\":\"query\",\"name\":\"search\",\"required\":false,\"type\":\"string\"},{\"description\":\"`title`, `description`, or a string joining them with comma\",\"in\":\"query\",\"name\":\"in\",\"required\":false,\"type\":\"string\"},{\"description\":\"Return issues which are authored by the user with the given ID\",\"format\":\"int32\",\"in\":\"query\",\"name\":\"author_id\",\"required\":false,\"type\":\"integer\"},{\"description\":\"Return issues which are authored by the user with the given username\",\"in\":\"query\",\"name\":\"author_username\",\"required\":false,\"type\":\"string\"},{\"description\":\"Return issues which are assigned to the user with the given ID\",\"format\":\"int32\",\"in\":\"query\",\"name\":\"assignee_id\",\"required\":false,\"type\":\"integer\"},{\"description\":\"Return issues which are assigned to the user with the given username\",\"in\":\"query\",\"items\":{\"type\":\"string\"},\"name\":\"assignee_username\",\"required\":false,\"type\":\"array\"},{\"description\":\"Return issues created after the specified time\",\"format\":\"date-time\",\"in\":\"query\",\"name\":\"created_after\",\"required\":false,\"type\":\"string\"},{\"description\":\"Return issues created before the specified time\",\"format\":\"date-time\",\"in\":\"query\",\"name\":\"created_before\",\"required\":false,\"type\":\"string\"},{\"description\":\"Return issues updated after the specified time\",\"format\":\"date-time\",\"in\":\"query\",\"name\":\"updated_after\",\"required\":false,\"type\":\"string\"},{\"description\":\"Return issues updated before the specified time\",\"format\":\"date-time\",\"in\":\"query\",\"name\":\"updated_before\",\"required\":false,\"type\":\"string\"},{\"description\":\"Comma-separated list of label names\",\"in\":\"query\",\"items\":{\"type\":\"string\"},\"name\":\"not[labels]\",\"required\":false,\"type\":\"array\"},{\"description\":\"Milestone title\",\"in\":\"query\",\"name\":\"not[milestone]\",\"required\":false,\"type\":\"string\"},{\"description\":\"Return issues assigned to milestones without the specified timebox value (\\\"Any\\\", \\\"None\\\", \\\"Upcoming\\\" or \\\"Started\\\")\",\"enum\":[\"Any\",\"None\",\"Upcoming\",\"Started\"],\"in\":\"query\",\"name\":\"not[milestone_id]\",\"required\":false,\"type\":\"string\"},{\"description\":\"The IID array of issues\",\"in\":\"query\",\"items\":{\"format\":\"int32\",\"type\":\"integer\"},\"name\":\"not[iids]\",\"required\":false,\"type\":\"array\"},{\"description\":\"Return issues which are not authored by the user with the given ID\",\"format\":\"int32\",\"in\":\"query\",\"name\":\"not[author_id]\",\"required\":false,\"type\":\"integer\"},{\"description\":\"Return issues which are not authored by the user with the given username\",\"in\":\"query\",\"name\":\"not[author_username]\",\"required\":false,\"type\":\"string\"},{\"description\":\"Return issues which are not assigned to the user with the given ID\",\"format\":\"int32\",\"in\":\"query\",\"name\":\"not[assignee_id]\",\"required\":false,\"type\":\"integer\"},{\"description\":\"Return issues which are not assigned to the user with the given username\",\"in\":\"query\",\"items\":{\"type\":\"string\"},\"name\":\"not[assignee_username]\",\"required\":false,\"type\":\"array\"},{\"description\":\"Return issues without the specified weight\",\"format\":\"int32\",\"in\":\"query\",\"name\":\"not[weight]\",\"required\":false,\"type\":\"integer\"},{\"description\":\"Return issues which are not assigned to the iteration with the given ID\",\"format\":\"int32\",\"in\":\"query\",\"name\":\"not[iteration_id]\",\"required\":false,\"type\":\"integer\"},{\"description\":\"Return issues which are not assigned to the iteration with the given title\",\"in\":\"query\",\"name\":\"not[iteration_title]\",\"required\":false,\"type\":\"string\"},{\"default\":\"created_by_me\",\"description\":\"Return issues for the given scope: `created_by_me`, `assigned_to_me` or `all`\",\"enum\":[\"created_by_me\",\"assigned_to_me\",\"all\"],\"in\":\"query\",\"name\":\"scope\",\"required\":false,\"type\":\"string\"},{\"description\":\"Return issues reacted by the authenticated user by the given emoji\",\"in\":\"query\",\"name\":\"my_reaction_emoji\",\"required\":false,\"type\":\"string\"},{\"description\":\"Filter confidential or public issues\",\"in\":\"query\",\"name\":\"confidential\",\"required\":false,\"type\":\"boolean\"},{\"description\":\"The weight of the issue\",\"format\":\"int32\",\"in\":\"query\",\"name\":\"weight\",\"required\":false,\"type\":\"integer\"},{\"description\":\"The ID of an epic associated with the issues\",\"format\":\"int32\",\"in\":\"query\",\"name\":\"epic_id\",\"required\":false,\"type\":\"integer\"},{\"description\":\"The health status of the issue. Must be one of: on_track, needs_attention, at_risk, none, any\",\"enum\":[\"on_track\",\"needs_attention\",\"at_risk\",\"none\",\"any\"],\"in\":\"query\",\"name\":\"health_status\",\"required\":false,\"type\":\"string\"},{\"description\":\"Return issues which are assigned to the iteration with the given ID\",\"format\":\"int32\",\"in\":\"query\",\"name\":\"iteration_id\",\"required\":false,\"type\":\"integer\"},{\"description\":\"Return issues which are assigned to the iteration with the given title\",\"in\":\"query\",\"name\":\"iteration_title\",\"required\":false,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get currently authenticated user's issues statistics\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/issues_statistics","segments":[{"lit":"api"},{"lit":"v4"},{"lit":"issues_statistics"}],"select":{"exist":["assignee_id","assignee_username","author_id","author_username","confidential","created_after","created_before","epic_id","health_status","iid","in","iteration_id","iteration_title","label","milestone","milestone_id","my_reaction_emoji","not_assignee_id","not_assignee_username","not_author_id","not_author_username","not_iid","not_iteration_id","not_iteration_title","not_label","not_milestone","not_milestone_id","not_weight","scope","search","updated_after","updated_before","weight"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"issues_statistic","name__orig":"issues_statistic","Name":"IssuesStatistic","name_":"issues_statistic","name-":"issues-statistic","NAME":"ISSUES_STATISTIC","index$":221}, {"active":true,"entity":"issues_statistic","key$":"BasicIssuesStatisticFlow","kind":"basic","name":"BasicIssuesStatisticFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"issues_statistic_ref01","srcdatavar":"issues_statistic_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-issues_statistic_ref01"}}],"index$":0}]}, 'IssuesStatistic')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let issues_statistic_ref01_data = Object.values(setup.data.existing.issues_statistic)[0] as any

    // LOAD
    const issues_statistic_ref01_ent = client.IssuesStatistic()
    const issues_statistic_ref01_match_dt0: any = {}
    const issues_statistic_ref01_data_dt0 = (await issues_statistic_ref01_ent.load(issues_statistic_ref01_match_dt0)).data()
    assert(null != issues_statistic_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/issues_statistic/IssuesStatisticTestData.json')

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
    ['issues_statistic01','issues_statistic02','issues_statistic03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_ISSUES_STATISTIC_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_ISSUES_STATISTIC_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_ISSUES_STATISTIC_ENTID']
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
  
