

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[],"name":"project_entity","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"post_api_v4_import_bitbucket_server","orig":"post_api_v4_import_bitbucket_server","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"POST /api/v4/import/bitbucket_server","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4ImportBitbucketServer\",\"parameters\":[{\"in\":\"body\",\"name\":\"postApiV4ImportBitbucketServer\",\"required\":true,\"schema\":{\"description\":\"Import a BitBucket Server repository\",\"properties\":{\"bitbucket_server_project\":{\"description\":\"BitBucket Server Project Key\",\"type\":\"string\"},\"bitbucket_server_repo\":{\"description\":\"BitBucket Server Repository Name\",\"type\":\"string\"},\"bitbucket_server_url\":{\"description\":\"Bitbucket Server URL\",\"type\":\"string\"},\"bitbucket_server_username\":{\"description\":\"BitBucket Server Username\",\"type\":\"string\"},\"new_name\":{\"description\":\"New repo name\",\"type\":\"string\"},\"new_namespace\":{\"description\":\"Namespace to import repo into\",\"type\":\"string\"},\"personal_access_token\":{\"description\":\"BitBucket Server personal access token/password\",\"type\":\"string\"},\"timeout_strategy\":{\"description\":\"Strategy for behavior on timeouts\",\"enum\":[\"optimistic\",\"pessimistic\"],\"type\":\"string\"}},\"required\":[\"bitbucket_server_url\",\"bitbucket_server_username\",\"personal_access_token\",\"bitbucket_server_project\",\"bitbucket_server_repo\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"Import a BitBucket Server repository\",\"schema\":{\"description\":\"ProjectEntity model\",\"properties\":{\"forked\":{\"example\":true,\"type\":\"boolean\"},\"full_name\":{\"example\":\"GitLab Org / GitLab\",\"type\":\"string\"},\"full_path\":{\"example\":\"gitlab-org/gitlab\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"name\":{\"example\":\"GitLab\",\"type\":\"string\"},\"refs_url\":{\"type\":\"string\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Bad request\"},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"422\":{\"description\":\"Unprocessable entity\"},\"503\":{\"description\":\"Service unavailable\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/import/bitbucket_server","segments":[{"lit":"api"},{"lit":"v4"},{"lit":"import"},{"lit":"bitbucket_server"}],"select":{"exist":["post_api_v4_import_bitbucket_server"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"post_api_v4_import_github","orig":"post_api_v4_import_github","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"POST /api/v4/import/github","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4ImportGithub\",\"parameters\":[{\"in\":\"body\",\"name\":\"postApiV4ImportGithub\",\"required\":true,\"schema\":{\"description\":\"Import a GitHub project\",\"properties\":{\"github_hostname\":{\"description\":\"Custom GitHub enterprise hostname. For example: https://github.example.com. From GitLab 16.5 to GitLab 17.1, you must include the path `/api/v3`.\",\"type\":\"string\"},\"new_name\":{\"description\":\"New repo name\",\"type\":\"string\"},\"optional_stages\":{\"description\":\"Optional stages of import to be performed\",\"type\":\"object\"},\"pagination_limit\":{\"description\":\"Pagination limit\",\"format\":\"int32\",\"type\":\"integer\"},\"personal_access_token\":{\"description\":\"GitHub personal access token\",\"type\":\"string\"},\"repo_id\":{\"description\":\"GitHub repository ID\",\"format\":\"int32\",\"type\":\"integer\"},\"target_namespace\":{\"description\":\"Namespace or group to import repository into\",\"type\":\"string\"},\"timeout_strategy\":{\"description\":\"Strategy for behavior on timeouts\",\"enum\":[\"optimistic\",\"pessimistic\"],\"type\":\"string\"}},\"required\":[\"personal_access_token\",\"repo_id\",\"target_namespace\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"Import a GitHub project\",\"schema\":{\"description\":\"ProjectEntity model\",\"properties\":{\"forked\":{\"example\":true,\"type\":\"boolean\"},\"full_name\":{\"example\":\"GitLab Org / GitLab\",\"type\":\"string\"},\"full_path\":{\"example\":\"gitlab-org/gitlab\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"name\":{\"example\":\"GitLab\",\"type\":\"string\"},\"refs_url\":{\"type\":\"string\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Bad request\"},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"422\":{\"description\":\"Unprocessable entity\"},\"503\":{\"description\":\"Service unavailable\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/import/github","segments":[{"lit":"api"},{"lit":"v4"},{"lit":"import"},{"lit":"github"}],"select":{"exist":["post_api_v4_import_github"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"project_entity","name__orig":"project_entity","Name":"ProjectEntity","name_":"project_entity","name-":"project-entity","NAME":"PROJECT_ENTITY","index$":240}, {"active":true,"entity":"project_entity","key$":"BasicProjectEntityFlow","kind":"basic","name":"BasicProjectEntityFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"project_entity_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0}]}, 'ProjectEntity')
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
  
