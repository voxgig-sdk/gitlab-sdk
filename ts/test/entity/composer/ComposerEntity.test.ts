

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


describe('ComposerEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.Composer()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'composer.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"composer","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/v4/projects/{id}/packages/composer","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"post_api_v4_projects_id_packages_composer","or":"post_api_v4_projects_id_packages_composer","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/api/v4/projects/{id}/packages/composer","q":{"exist":["post_api_v4_projects_id_packages_composer","project_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"packages"},{"lit":"composer"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[["$.main.kit.entity.project"]]},"key$":"composer","name__orig":"composer","Name":"Composer","name_":"composer","name-":"composer","NAME":"COMPOSER","index$":180}, {"active":true,"entity":"composer","key$":"BasicComposerFlow","kind":"basic","name":"BasicComposerFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"composer_ref01"},"m":{"project_id":"project01"},"o":"create","s":[],"v":[],"index$":0}]}, 'Composer', {"POST /api/v4/projects/{id}/packages/composer":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of a project","type":"string","required":true,"index$":0},{"name":"postApiV4ProjectsIdPackagesComposer","in":"body","required":true,"schema":{"type":"object","properties":{"branch":{"type":"string","description":"The name of the branch","example":"release"},"tag":{"type":"string","description":"The name of the tag","example":"v1.0.0"}},"description":"Composer packages endpoint for registering packages","x-ref":"#/definitions/postApiV4ProjectsIdPackagesComposer"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const composer_ref01_ent = client.Composer()
    let composer_ref01_data = setup.data.new.composer['composer_ref01']
    composer_ref01_data['project_id'] = setup.idmap['project01']

    composer_ref01_data = (await composer_ref01_ent.create(composer_ref01_data)).data()
    assert(null != composer_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/composer/ComposerTestData.json')

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
    ['composer01','composer02','composer03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_COMPOSER_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_COMPOSER_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_COMPOSER_ENTID']
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
  
