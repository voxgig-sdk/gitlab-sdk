

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


describe('ProjectEntityEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ProjectEntity()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'project_entity.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"project_entity","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/v4/import/bitbucket_server","source":"swagger2","version":2},"g":{"query":[{"a":true,"k":"query","n":"post_api_v4_import_bitbucket_server","or":"post_api_v4_import_bitbucket_server","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/api/v4/import/bitbucket_server","q":{"exist":["post_api_v4_import_bitbucket_server"]},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"import"},{"lit":"bitbucket_server"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /api/v4/import/github","source":"swagger2","version":2},"g":{"query":[{"a":true,"k":"query","n":"post_api_v4_import_github","or":"post_api_v4_import_github","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/api/v4/import/github","q":{"exist":["post_api_v4_import_github"]},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"import"},{"lit":"github"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"project_entity","name__orig":"project_entity","Name":"ProjectEntity","name_":"project_entity","name-":"project-entity","NAME":"PROJECT_ENTITY","index$":240}, {"active":true,"entity":"project_entity","key$":"BasicProjectEntityFlow","kind":"basic","name":"BasicProjectEntityFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"project_entity_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'ProjectEntity', {"POST /api/v4/import/bitbucket_server":{"protocol":"http","parameters":[{"name":"postApiV4ImportBitbucketServer","in":"body","required":true,"schema":{"type":"object","properties":{"bitbucket_server_url":{"type":"string","description":"Bitbucket Server URL"},"bitbucket_server_username":{"type":"string","description":"BitBucket Server Username"},"personal_access_token":{"type":"string","description":"BitBucket Server personal access token/password"},"bitbucket_server_project":{"type":"string","description":"BitBucket Server Project Key"},"bitbucket_server_repo":{"type":"string","description":"BitBucket Server Repository Name"},"new_name":{"type":"string","description":"New repo name"},"new_namespace":{"type":"string","description":"Namespace to import repo into"},"timeout_strategy":{"type":"string","description":"Strategy for behavior on timeouts","enum":["optimistic","pessimistic"]}},"required":["bitbucket_server_url","bitbucket_server_username","personal_access_token","bitbucket_server_project","bitbucket_server_repo"],"description":"Import a BitBucket Server repository","x-ref":"#/definitions/postApiV4ImportBitbucketServer"},"index$":0}]},"POST /api/v4/import/github":{"protocol":"http","parameters":[{"name":"postApiV4ImportGithub","in":"body","required":true,"schema":{"type":"object","properties":{"personal_access_token":{"type":"string","description":"GitHub personal access token"},"repo_id":{"type":"integer","format":"int32","description":"GitHub repository ID"},"new_name":{"type":"string","description":"New repo name"},"target_namespace":{"type":"string","description":"Namespace or group to import repository into"},"github_hostname":{"type":"string","description":"Custom GitHub enterprise hostname. For example: https://github.example.com. From GitLab 16.5 to GitLab 17.1, you must include the path `/api/v3`."},"optional_stages":{"type":"object","description":"Optional stages of import to be performed"},"timeout_strategy":{"type":"string","description":"Strategy for behavior on timeouts","enum":["optimistic","pessimistic"]},"pagination_limit":{"type":"integer","format":"int32","description":"Pagination limit"}},"required":["personal_access_token","repo_id","target_namespace"],"description":"Import a GitHub project","x-ref":"#/definitions/postApiV4ImportGithub"},"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const project_entity_ref01_ent = client.ProjectEntity()
    let project_entity_ref01_data = setup.data.new.project_entity['project_entity_ref01']

    project_entity_ref01_data = (await project_entity_ref01_ent.create(project_entity_ref01_data)).data()
    assert(null != project_entity_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/project_entity/ProjectEntityTestData.json')

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
    ['project_entity01','project_entity02','project_entity03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_PROJECT_ENTITY_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_PROJECT_ENTITY_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_PROJECT_ENTITY_ENTID']
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
  
