

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


describe('UsageDataEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.UsageData()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'usage_data.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"usage_data","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/v4/usage_data/increment_counter","source":"swagger2","version":2},"g":{"query":[{"a":true,"k":"query","n":"post_api_v4_usage_data_increment_counter","or":"post_api_v4_usage_data_increment_counter","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/api/v4/usage_data/increment_counter","q":{"$action":"increment_counter","exist":["post_api_v4_usage_data_increment_counter"]},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"usage_data"},{"lit":"increment_counter"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /api/v4/usage_data/increment_unique_users","source":"swagger2","version":2},"g":{"query":[{"a":true,"k":"query","n":"post_api_v4_usage_data_increment_unique_user","or":"post_api_v4_usage_data_increment_unique_user","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/api/v4/usage_data/increment_unique_users","q":{"$action":"increment_unique_user","exist":["post_api_v4_usage_data_increment_unique_user"]},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"usage_data"},{"lit":"increment_unique_users"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"POST /api/v4/usage_data/track_event","source":"swagger2","version":2},"g":{"query":[{"a":true,"k":"query","n":"post_api_v4_usage_data_track_event","or":"post_api_v4_usage_data_track_event","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/api/v4/usage_data/track_event","q":{"$action":"track_event","exist":["post_api_v4_usage_data_track_event"]},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"usage_data"},{"lit":"track_event"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"POST /api/v4/usage_data/track_events","source":"swagger2","version":2},"g":{"query":[{"a":true,"k":"query","n":"post_api_v4_usage_data_track_event","or":"post_api_v4_usage_data_track_event","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/api/v4/usage_data/track_events","q":{"$action":"track_event","exist":["post_api_v4_usage_data_track_event"]},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"usage_data"},{"lit":"track_events"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v4/usage_data/metric_definitions","source":"swagger2","version":2},"g":{"query":[{"a":true,"ex":true,"k":"query","n":"include_path","or":"include_path","r":false,"t":"`$ANY`","index$":0}]},"k":"http","m":"GET","o":"/api/v4/usage_data/metric_definitions","q":{"$action":"metric_definition","exist":["include_path"]},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"usage_data"},{"lit":"metric_definitions"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /api/v4/usage_data/non_sql_metrics","source":"swagger2","version":2},"g":{},"k":"http","m":"GET","o":"/api/v4/usage_data/non_sql_metrics","q":{"$action":"non_sql_metric"},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"usage_data"},{"lit":"non_sql_metrics"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"GET /api/v4/usage_data/queries","source":"swagger2","version":2},"g":{},"k":"http","m":"GET","o":"/api/v4/usage_data/queries","q":{"$action":"query"},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"usage_data"},{"lit":"queries"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"GET /api/v4/usage_data/service_ping","source":"swagger2","version":2},"g":{},"k":"http","m":"GET","o":"/api/v4/usage_data/service_ping","q":{"$action":"service_ping"},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"usage_data"},{"lit":"service_ping"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"usage_data","name__orig":"usage_data","Name":"UsageData","name_":"usage_data","name-":"usage-data","NAME":"USAGE_DATA","index$":272}, {"active":true,"entity":"usage_data","key$":"BasicUsageDataFlow","kind":"basic","name":"BasicUsageDataFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"usage_data_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"usage_data_ref01","srcdatavar":"usage_data_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-usage_data_ref01"}}],"index$":1}]}, 'UsageData', {"POST /api/v4/usage_data/increment_counter":{"protocol":"http","parameters":[{"name":"postApiV4UsageDataIncrementCounter","in":"body","required":true,"schema":{"type":"object","properties":{"event":{"type":"string","description":"The event name that should be tracked","example":"i_quickactions_page"}},"required":["event"],"description":"Track usage data event","x-ref":"#/definitions/postApiV4UsageDataIncrementCounter"},"index$":0}]},"POST /api/v4/usage_data/increment_unique_users":{"protocol":"http","parameters":[{"name":"postApiV4UsageDataIncrementUniqueUsers","in":"body","required":true,"schema":{"type":"object","properties":{"event":{"type":"string","description":"The event name that should be tracked","example":"i_quickactions_page"}},"required":["event"],"description":"Track usage data event for the current user","x-ref":"#/definitions/postApiV4UsageDataIncrementUniqueUsers"},"index$":0}]},"POST /api/v4/usage_data/track_event":{"protocol":"http","parameters":[{"name":"postApiV4UsageDataTrackEvent","in":"body","required":true,"schema":{"type":"object","properties":{"event":{"type":"string","description":"The event name that should be tracked","example":"i_quickactions_page"},"namespace_id":{"type":"integer","format":"int32","description":"Namespace ID","example":1234},"project_id":{"type":"integer","format":"int32","description":"Project ID","example":1234},"additional_properties":{"type":"object","description":"Additional properties to be tracked","example":{"label":"login_button","value":1}},"send_to_snowplow":{"type":"boolean","description":"Send the tracked event to Snowplow","default":false,"example":true}},"required":["event"],"description":"Track gitlab internal events","x-ref":"#/definitions/postApiV4UsageDataTrackEvent"},"index$":0}]},"POST /api/v4/usage_data/track_events":{"protocol":"http","parameters":[{"name":"postApiV4UsageDataTrackEvents","in":"body","required":true,"schema":{"type":"object","properties":{"events":{"type":"array","description":"An array of internal events. Maximum 50 events allowed.","items":{"type":"object","properties":{"event":{"type":"string","description":"The event name that should be tracked","example":"i_quickactions_page"},"namespace_id":{"type":"integer","format":"int32","description":"Namespace ID","example":1234},"project_id":{"type":"integer","format":"int32","description":"Project ID","example":1234},"additional_properties":{"type":"object","description":"Additional properties to be tracked","example":{"label":"login_button","value":1}},"send_to_snowplow":{"type":"boolean","description":"Send the tracked event to Snowplow","default":false,"example":true}},"required":["event"]}}},"required":["events"],"description":"Track multiple gitlab internal events","x-ref":"#/definitions/postApiV4UsageDataTrackEvents"},"index$":0}]},"GET /api/v4/usage_data/metric_definitions":{"protocol":"http","parameters":[{"in":"query","name":"include_paths","description":"Include file paths in the metric definitions","type":"boolean","default":false,"required":false,"example":true,"index$":0}]},"GET /api/v4/usage_data/non_sql_metrics":{"protocol":"http","parameters":[]},"GET /api/v4/usage_data/queries":{"protocol":"http","parameters":[]},"GET /api/v4/usage_data/service_ping":{"protocol":"http","parameters":[]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const usage_data_ref01_ent = client.UsageData()
    let usage_data_ref01_data = setup.data.new.usage_data['usage_data_ref01']

    usage_data_ref01_data = (await usage_data_ref01_ent.create(usage_data_ref01_data)).data()
    assert(null != usage_data_ref01_data)


    // LOAD
    const usage_data_ref01_match_dt0: any = {}
    const usage_data_ref01_data_dt0 = (await usage_data_ref01_ent.load(usage_data_ref01_match_dt0)).data()
    assert(null != usage_data_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/usage_data/UsageDataTestData.json')

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
    ['usage_data01','usage_data02','usage_data03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_USAGE_DATA_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_USAGE_DATA_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_USAGE_DATA_ENTID']
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
  
