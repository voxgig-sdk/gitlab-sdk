

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


describe('ApiEntitiesCommitSignatureEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesCommitSignature()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_commit_signature.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"commit_source":{"a":true,"h":"Commit Source","n":"commit_source","r":false,"t":"`$STRING`","key$":"commit_source","index$":0},"signature":{"a":true,"h":"Signature","n":"signature","r":false,"t":"`$STRING`","key$":"signature","index$":1},"signature_type":{"a":true,"h":"Signature Type","n":"signature_type","r":false,"t":"`$STRING`","key$":"signature_type","index$":2}},"name":"api_entities_commit_signature","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v4/projects/{id}/repository/commits/{sha}/signature","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"sha","or":"sha","r":true,"t":"`$ANY`","index$":1}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/repository/commits/{sha}/signature","q":{"exist":["project_id","sha"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"repository"},{"lit":"commits"},{"var":"sha"},{"lit":"signature"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.project"]]},"key$":"api_entities_commit_signature","name__orig":"api_entities_commit_signature","Name":"ApiEntitiesCommitSignature","name_":"api_entities_commit_signature","name-":"api-entities-commit-signature","NAME":"API_ENTITIES_COMMIT_SIGNATURE","index$":50}, {"active":true,"entity":"api_entities_commit_signature","key$":"BasicApiEntitiesCommitSignatureFlow","kind":"basic","name":"BasicApiEntitiesCommitSignatureFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"api_entities_commit_signature_ref01","srcdatavar":"api_entities_commit_signature_ref01_data","suffix":"_dt0"},"m":{"id":"api_entities_commit_signature01","project_id":"project01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_commit_signature_ref01"}}],"index$":0}]}, 'ApiEntitiesCommitSignature', {"GET /api/v4/projects/{id}/repository/commits/{sha}/signature":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"in":"path","name":"sha","description":"A commit sha, or the name of a branch or tag","type":"string","required":true,"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let api_entities_commit_signature_ref01_data = Object.values(setup.data.existing.api_entities_commit_signature)[0] as any

    // LOAD: skipped — no entity id field and load requires path params.
    // Entity-var is declared here so later flow steps still compile.
    const api_entities_commit_signature_ref01_ent = client.ApiEntitiesCommitSignature()


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_commit_signature/ApiEntitiesCommitSignatureTestData.json')

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
    ['api_entities_commit_signature01','api_entities_commit_signature02','api_entities_commit_signature03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_COMMIT_SIGNATURE_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_COMMIT_SIGNATURE_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_COMMIT_SIGNATURE_ENTID']
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
  
