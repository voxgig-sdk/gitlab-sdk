

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


describe('ComposerPackageEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ComposerPackage()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'composer_package.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[],"name":"composer_package","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":"my-composer-package","kind":"query","name":"package_name","orig":"package_name","reqd":true,"type":"`$ANY`","index$":0},{"active":true,"example":"673594f85a55fe3c0eb45df7bd2fa9d95a1601ab","kind":"query","name":"sha","orig":"sha","reqd":true,"type":"`$ANY`","index$":1}]},"contract":{"id":"GET /api/v4/projects/{id}/packages/composer/archives/*package_name","json":"{\"operationId\":\"getApiV4ProjectsIdPackagesComposerArchives*packageName\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of a project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"Shasum of current json\",\"example\":\"673594f85a55fe3c0eb45df7bd2fa9d95a1601ab\",\"in\":\"query\",\"name\":\"sha\",\"required\":true,\"type\":\"string\"},{\"description\":\"The Composer package name\",\"example\":\"my-composer-package\",\"in\":\"query\",\"name\":\"package_name\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Composer package endpoint to download a package archive\"},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/packages/composer/archives/*package_name","rename":{"param":{"id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"packages"},{"lit":"composer"},{"lit":"archives"},{"lit":"*package_name"}],"select":{"exist":["package_name","project_id","sha"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"group_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":"my-composer-package","kind":"query","name":"package_name","orig":"package_name","reqd":true,"type":"`$ANY`","index$":0}]},"contract":{"id":"GET /api/v4/group/{id}/-/packages/composer/*package_name","json":"{\"operationId\":\"getApiV4GroupIdPackagesComposer*packageName\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of a group\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The Composer package name\",\"example\":\"my-composer-package\",\"in\":\"query\",\"name\":\"package_name\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Composer packages endpoint at group level for package versions metadata\"},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/group/{id}/-/packages/composer/*package_name","rename":{"param":{"id":"group_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"group"},{"var":"group_id"},{"lit":"-"},{"lit":"packages"},{"lit":"composer"},{"lit":"*package_name"}],"select":{"exist":["group_id","package_name"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"group_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":"my-composer-package","kind":"query","name":"package_name","orig":"package_name","reqd":true,"type":"`$ANY`","index$":0}]},"contract":{"id":"GET /api/v4/group/{id}/-/packages/composer/p2/*package_name","json":"{\"operationId\":\"getApiV4GroupIdPackagesComposerP2*packageName\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of a group\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The Composer package name\",\"example\":\"my-composer-package\",\"in\":\"query\",\"name\":\"package_name\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Composer v2 packages p2 endpoint at group level for package versions metadata\"},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/group/{id}/-/packages/composer/p2/*package_name","rename":{"param":{"id":"group_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"group"},{"var":"group_id"},{"lit":"-"},{"lit":"packages"},{"lit":"composer"},{"lit":"p2"},{"lit":"*package_name"}],"select":{"exist":["group_id","package_name"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":2},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"group_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":"673594f85a55fe3c0eb45df7bd2fa9d95a1601ab","kind":"param","name":"sha","orig":"sha","reqd":true,"type":"`$ANY`","index$":1}]},"contract":{"id":"GET /api/v4/group/{id}/-/packages/composer/p/{sha}","json":"{\"operationId\":\"getApiV4GroupIdPackagesComposerPSha\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of a group\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"Shasum of current json\",\"example\":\"673594f85a55fe3c0eb45df7bd2fa9d95a1601ab\",\"in\":\"path\",\"name\":\"sha\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Composer packages endpoint at group level for packages list\"},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/group/{id}/-/packages/composer/p/{sha}","rename":{"param":{"id":"group_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"group"},{"var":"group_id"},{"lit":"-"},{"lit":"packages"},{"lit":"composer"},{"lit":"p"},{"var":"sha"}],"select":{"exist":["group_id","sha"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"group_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /api/v4/group/{id}/-/packages/composer/packages","json":"{\"operationId\":\"getApiV4GroupIdPackagesComposerPackages\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of a group\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Composer packages endpoint at group level\"},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/group/{id}/-/packages/composer/packages","rename":{"param":{"id":"group_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"group"},{"var":"group_id"},{"lit":"-"},{"lit":"packages"},{"lit":"composer"},{"lit":"packages"}],"select":{"exist":["group_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":4}],"key$":"load"}},"relations":{"ancestors":[["group"],["project"],["group","p"]]},"key$":"composer_package","name__orig":"composer_package","Name":"ComposerPackage","name_":"composer_package","name-":"composer-package","NAME":"COMPOSER_PACKAGE","index$":181}, {"active":true,"entity":"composer_package","key$":"BasicComposerPackageFlow","kind":"basic","name":"BasicComposerPackageFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"composer_package_ref01","srcdatavar":"composer_package_ref01_data","suffix":"_dt0"},"match":{"id":"composer_package01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-composer_package_ref01"}}],"index$":0}]}, 'ComposerPackage')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let composer_package_ref01_data = Object.values(setup.data.existing.composer_package)[0] as any

    // LOAD: skipped — no entity id field and load requires path params.
    // Entity-var is declared here so later flow steps still compile.
    const composer_package_ref01_ent = client.ComposerPackage()


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/composer_package/ComposerPackageTestData.json')

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
    ['composer_package01','composer_package02','composer_package03','group01','group02','group03','project01','project02','project03','group01','group02','group03','p01','p02','p03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_COMPOSER_PACKAGE_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_COMPOSER_PACKAGE_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_COMPOSER_PACKAGE_ENTID']
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
  
