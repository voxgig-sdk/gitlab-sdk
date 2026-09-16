

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


describe('ProjectImportEntityEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ProjectImportEntity()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'project_import_entity.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"forked","req":false,"type":"`$BOOLEAN`","index$":0},{"active":true,"name":"full_name","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"full_path","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"human_import_status_name","req":false,"type":"`$STRING`","index$":3},{"active":true,"format":"int32","name":"id","req":false,"type":"`$INTEGER`","index$":4},{"active":true,"name":"import_error","req":false,"type":"`$STRING`","index$":5},{"active":true,"name":"import_source","req":false,"type":"`$STRING`","index$":6},{"active":true,"name":"import_status","req":false,"type":"`$STRING`","index$":7},{"active":true,"name":"import_warning","req":false,"type":"`$STRING`","index$":8},{"active":true,"name":"name","req":false,"type":"`$STRING`","index$":9},{"active":true,"name":"provider_link","req":false,"type":"`$STRING`","index$":10},{"active":true,"name":"refs_url","req":false,"type":"`$STRING`","index$":11},{"active":true,"name":"relation_type","req":false,"type":"`$STRING`","index$":12}],"id":{"field":"id","name":"id"},"name":"project_import_entity","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"post_api_v4_import_bitbucket","orig":"post_api_v4_import_bitbucket","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"POST /api/v4/import/bitbucket","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4ImportBitbucket\",\"parameters\":[{\"in\":\"body\",\"name\":\"postApiV4ImportBitbucket\",\"required\":true,\"schema\":{\"description\":\"Import a BitBucket Cloud repository\",\"properties\":{\"bitbucket_app_password\":{\"description\":\"BitBucket app password\",\"type\":\"string\"},\"bitbucket_username\":{\"description\":\"BitBucket username\",\"type\":\"string\"},\"new_name\":{\"description\":\"New repository name\",\"type\":\"string\"},\"repo_path\":{\"description\":\"Repository path\",\"type\":\"string\"},\"target_namespace\":{\"description\":\"Target namespace\",\"type\":\"string\"}},\"required\":[\"bitbucket_username\",\"bitbucket_app_password\",\"repo_path\",\"target_namespace\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"Import a BitBucket Cloud repository\",\"schema\":{\"description\":\"ProjectImportEntity model\",\"properties\":{\"forked\":{\"example\":true,\"type\":\"boolean\"},\"full_name\":{\"example\":\"GitLab Org / GitLab\",\"type\":\"string\"},\"full_path\":{\"example\":\"gitlab-org/gitlab\",\"type\":\"string\"},\"human_import_status_name\":{\"example\":\"canceled\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"import_error\":{\"type\":\"string\"},\"import_source\":{\"example\":\"source/source-repo\",\"type\":\"string\"},\"import_status\":{\"enum\":[\"scheduled\",\"started\",\"finished\",\"failed\",\"canceled\"],\"example\":\"scheduled\",\"type\":\"string\"},\"import_warning\":{\"type\":\"string\"},\"name\":{\"example\":\"GitLab\",\"type\":\"string\"},\"provider_link\":{\"example\":\"/source/source-repo\",\"type\":\"string\"},\"refs_url\":{\"type\":\"string\"},\"relation_type\":{\"type\":\"string\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Bad request\"},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"422\":{\"description\":\"Unprocessable entity\"},\"503\":{\"description\":\"Service unavailable\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/import/bitbucket","segments":[{"lit":"api"},{"lit":"v4"},{"lit":"import"},{"lit":"bitbucket"}],"select":{"exist":["post_api_v4_import_bitbucket"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"post_api_v4_import_github_cancel","orig":"post_api_v4_import_github_cancel","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"POST /api/v4/import/github/cancel","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4ImportGithubCancel\",\"parameters\":[{\"in\":\"body\",\"name\":\"postApiV4ImportGithubCancel\",\"required\":true,\"schema\":{\"description\":\"Cancel GitHub project import\",\"properties\":{\"project_id\":{\"description\":\"ID of importing project to be canceled\",\"format\":\"int32\",\"type\":\"integer\"}},\"required\":[\"project_id\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Cancel GitHub project import\",\"schema\":{\"description\":\"ProjectImportEntity model\",\"properties\":{\"forked\":{\"example\":true,\"type\":\"boolean\"},\"full_name\":{\"example\":\"GitLab Org / GitLab\",\"type\":\"string\"},\"full_path\":{\"example\":\"gitlab-org/gitlab\",\"type\":\"string\"},\"human_import_status_name\":{\"example\":\"canceled\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"import_error\":{\"type\":\"string\"},\"import_source\":{\"example\":\"source/source-repo\",\"type\":\"string\"},\"import_status\":{\"enum\":[\"scheduled\",\"started\",\"finished\",\"failed\",\"canceled\"],\"example\":\"scheduled\",\"type\":\"string\"},\"import_warning\":{\"type\":\"string\"},\"name\":{\"example\":\"GitLab\",\"type\":\"string\"},\"provider_link\":{\"example\":\"/source/source-repo\",\"type\":\"string\"},\"refs_url\":{\"type\":\"string\"},\"relation_type\":{\"type\":\"string\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Bad request\"},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not found\"},\"503\":{\"description\":\"Service unavailable\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/import/github/cancel","segments":[{"lit":"api"},{"lit":"v4"},{"lit":"import"},{"lit":"github"},{"lit":"cancel"}],"select":{"exist":["post_api_v4_import_github_cancel"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"project_import_entity","name__orig":"project_import_entity","Name":"ProjectImportEntity","name_":"project_import_entity","name-":"project-import-entity","NAME":"PROJECT_IMPORT_ENTITY","index$":244}, {"active":true,"entity":"project_import_entity","key$":"BasicProjectImportEntityFlow","kind":"basic","name":"BasicProjectImportEntityFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"project_import_entity_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0}]}, 'ProjectImportEntity')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const project_import_entity_ref01_ent = client.ProjectImportEntity()
    let project_import_entity_ref01_data = setup.data.new.project_import_entity['project_import_entity_ref01']

    project_import_entity_ref01_data = (await project_import_entity_ref01_ent.create(project_import_entity_ref01_data)).data()
    assert(null != project_import_entity_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/project_import_entity/ProjectImportEntityTestData.json')

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
    ['project_import_entity01','project_import_entity02','project_import_entity03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_PROJECT_IMPORT_ENTITY_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_PROJECT_IMPORT_ENTITY_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_PROJECT_IMPORT_ENTITY_ENTID']
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
  
