

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


describe('ApiEntitiesPackagesConanRecipeManifestEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesPackagesConanRecipeManifest()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_packages_conan_recipe_manifest.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[],"name":"api_entities_packages_conan_recipe_manifest","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":"my-package","kind":"param","name":"conan_id","orig":"package_name","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":"stable","kind":"param","name":"package_channel","orig":"package_channel","reqd":true,"type":"`$ANY`","index$":1},{"active":true,"example":"my-group+my-project","kind":"param","name":"package_username","orig":"package_username","reqd":true,"type":"`$ANY`","index$":2},{"active":true,"example":"1.0","kind":"param","name":"package_version","orig":"package_version","reqd":true,"type":"`$ANY`","index$":3},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":4}]},"contract":{"id":"GET /api/v4/projects/{id}/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}/digest","json":"{\"operationId\":\"getApiV4ProjectsIdPackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannelDigest\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package name\",\"example\":\"my-package\",\"in\":\"path\",\"name\":\"package_name\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package version\",\"example\":\"1.0\",\"in\":\"path\",\"name\":\"package_version\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package username\",\"example\":\"my-group+my-project\",\"in\":\"path\",\"name\":\"package_username\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package channel\",\"example\":\"stable\",\"in\":\"path\",\"name\":\"package_channel\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Recipe Digest\",\"schema\":{\"description\":\"API_Entities_Packages_Conan_RecipeManifest model\",\"properties\":{\"recipe_urls\":{\"example\":\"{ \\\"conan_sources.tgz\\\": \\\"https://gitlab.example.com/api/v4/packages/conan/v1/files/my-package/1.0/my-group+my-project/stable/0/export/conan_sources.tgz\\\" }\",\"type\":\"object\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Bad Request\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}/digest","rename":{"param":{"id":"project_id","package_name":"conan_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"packages"},{"lit":"conan"},{"lit":"v1"},{"lit":"conans"},{"var":"conan_id"},{"var":"package_version"},{"var":"package_username"},{"var":"package_channel"},{"lit":"digest"}],"select":{"exist":["conan_id","package_channel","package_username","package_version","project_id"]},"transform":{"req":"`reqdata`","res":"`body.recipe_urls`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"example":"my-package","kind":"param","name":"conan_id","orig":"package_name","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":"stable","kind":"param","name":"package_channel","orig":"package_channel","reqd":true,"type":"`$ANY`","index$":1},{"active":true,"example":"my-group+my-project","kind":"param","name":"package_username","orig":"package_username","reqd":true,"type":"`$ANY`","index$":2},{"active":true,"example":"1.0","kind":"param","name":"package_version","orig":"package_version","reqd":true,"type":"`$ANY`","index$":3},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":4}]},"contract":{"id":"GET /api/v4/projects/{id}/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}/download_urls","json":"{\"operationId\":\"getApiV4ProjectsIdPackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannelDownloadUrls\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package name\",\"example\":\"my-package\",\"in\":\"path\",\"name\":\"package_name\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package version\",\"example\":\"1.0\",\"in\":\"path\",\"name\":\"package_version\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package username\",\"example\":\"my-group+my-project\",\"in\":\"path\",\"name\":\"package_username\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package channel\",\"example\":\"stable\",\"in\":\"path\",\"name\":\"package_channel\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Recipe Download Urls\",\"schema\":{\"description\":\"API_Entities_Packages_Conan_RecipeManifest model\",\"properties\":{\"recipe_urls\":{\"example\":\"{ \\\"conan_sources.tgz\\\": \\\"https://gitlab.example.com/api/v4/packages/conan/v1/files/my-package/1.0/my-group+my-project/stable/0/export/conan_sources.tgz\\\" }\",\"type\":\"object\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Bad Request\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}/download_urls","rename":{"param":{"id":"project_id","package_name":"conan_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"packages"},{"lit":"conan"},{"lit":"v1"},{"lit":"conans"},{"var":"conan_id"},{"var":"package_version"},{"var":"package_username"},{"var":"package_channel"},{"lit":"download_urls"}],"select":{"exist":["conan_id","package_channel","package_username","package_version","project_id"]},"transform":{"req":"`reqdata`","res":"`body.recipe_urls`"},"index$":1},{"active":true,"args":{"params":[{"active":true,"example":"my-package","kind":"param","name":"conan_id","orig":"package_name","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":"stable","kind":"param","name":"package_channel","orig":"package_channel","reqd":true,"type":"`$ANY`","index$":1},{"active":true,"example":"my-group+my-project","kind":"param","name":"package_username","orig":"package_username","reqd":true,"type":"`$ANY`","index$":2},{"active":true,"example":"1.0","kind":"param","name":"package_version","orig":"package_version","reqd":true,"type":"`$ANY`","index$":3}]},"contract":{"id":"GET /api/v4/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}/digest","json":"{\"operationId\":\"getApiV4PackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannelDigest\",\"parameters\":[{\"description\":\"Package name\",\"example\":\"my-package\",\"in\":\"path\",\"name\":\"package_name\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package version\",\"example\":\"1.0\",\"in\":\"path\",\"name\":\"package_version\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package username\",\"example\":\"my-group+my-project\",\"in\":\"path\",\"name\":\"package_username\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package channel\",\"example\":\"stable\",\"in\":\"path\",\"name\":\"package_channel\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Recipe Digest\",\"schema\":{\"description\":\"API_Entities_Packages_Conan_RecipeManifest model\",\"properties\":{\"recipe_urls\":{\"example\":\"{ \\\"conan_sources.tgz\\\": \\\"https://gitlab.example.com/api/v4/packages/conan/v1/files/my-package/1.0/my-group+my-project/stable/0/export/conan_sources.tgz\\\" }\",\"type\":\"object\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Bad Request\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}/digest","rename":{"param":{"package_name":"conan_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"packages"},{"lit":"conan"},{"lit":"v1"},{"lit":"conans"},{"var":"conan_id"},{"var":"package_version"},{"var":"package_username"},{"var":"package_channel"},{"lit":"digest"}],"select":{"exist":["conan_id","package_channel","package_username","package_version"]},"transform":{"req":"`reqdata`","res":"`body.recipe_urls`"},"index$":2},{"active":true,"args":{"params":[{"active":true,"example":"my-package","kind":"param","name":"conan_id","orig":"package_name","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":"stable","kind":"param","name":"package_channel","orig":"package_channel","reqd":true,"type":"`$ANY`","index$":1},{"active":true,"example":"my-group+my-project","kind":"param","name":"package_username","orig":"package_username","reqd":true,"type":"`$ANY`","index$":2},{"active":true,"example":"1.0","kind":"param","name":"package_version","orig":"package_version","reqd":true,"type":"`$ANY`","index$":3}]},"contract":{"id":"GET /api/v4/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}/download_urls","json":"{\"operationId\":\"getApiV4PackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannelDownloadUrls\",\"parameters\":[{\"description\":\"Package name\",\"example\":\"my-package\",\"in\":\"path\",\"name\":\"package_name\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package version\",\"example\":\"1.0\",\"in\":\"path\",\"name\":\"package_version\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package username\",\"example\":\"my-group+my-project\",\"in\":\"path\",\"name\":\"package_username\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package channel\",\"example\":\"stable\",\"in\":\"path\",\"name\":\"package_channel\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Recipe Download Urls\",\"schema\":{\"description\":\"API_Entities_Packages_Conan_RecipeManifest model\",\"properties\":{\"recipe_urls\":{\"example\":\"{ \\\"conan_sources.tgz\\\": \\\"https://gitlab.example.com/api/v4/packages/conan/v1/files/my-package/1.0/my-group+my-project/stable/0/export/conan_sources.tgz\\\" }\",\"type\":\"object\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Bad Request\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}/download_urls","rename":{"param":{"package_name":"conan_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"packages"},{"lit":"conan"},{"lit":"v1"},{"lit":"conans"},{"var":"conan_id"},{"var":"package_version"},{"var":"package_username"},{"var":"package_channel"},{"lit":"download_urls"}],"select":{"exist":["conan_id","package_channel","package_username","package_version"]},"transform":{"req":"`reqdata`","res":"`body.recipe_urls`"},"index$":3}],"key$":"load"}},"relations":{"ancestors":[["project","conan"]]},"key$":"api_entities_packages_conan_recipe_manifest","name__orig":"api_entities_packages_conan_recipe_manifest","Name":"ApiEntitiesPackagesConanRecipeManifest","name_":"api_entities_packages_conan_recipe_manifest","name-":"api-entities-packages-conan-recipe-manifest","NAME":"API_ENTITIES_PACKAGES_CONAN_RECIPE_MANIFEST","index$":117}, {"active":true,"entity":"api_entities_packages_conan_recipe_manifest","key$":"BasicApiEntitiesPackagesConanRecipeManifestFlow","kind":"basic","name":"BasicApiEntitiesPackagesConanRecipeManifestFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"api_entities_packages_conan_recipe_manifest_ref01","srcdatavar":"api_entities_packages_conan_recipe_manifest_ref01_data","suffix":"_dt0"},"match":{"conan_id":"conan01","id":"api_entities_packages_conan_recipe_manifest01","package_username":"package_username01","package_version":"package_version01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_packages_conan_recipe_manifest_ref01"}}],"index$":0}]}, 'ApiEntitiesPackagesConanRecipeManifest')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let api_entities_packages_conan_recipe_manifest_ref01_data = Object.values(setup.data.existing.api_entities_packages_conan_recipe_manifest)[0] as any

    // LOAD: skipped — no entity id field and load requires path params.
    // Entity-var is declared here so later flow steps still compile.
    const api_entities_packages_conan_recipe_manifest_ref01_ent = client.ApiEntitiesPackagesConanRecipeManifest()


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_packages_conan_recipe_manifest/ApiEntitiesPackagesConanRecipeManifestTestData.json')

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
    ['api_entities_packages_conan_recipe_manifest01','api_entities_packages_conan_recipe_manifest02','api_entities_packages_conan_recipe_manifest03','project01','project02','project03','conan01','conan02','conan03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_PACKAGES_CONAN_RECIPE_MANIFEST_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_PACKAGES_CONAN_RECIPE_MANIFEST_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_PACKAGES_CONAN_RECIPE_MANIFEST_ENTID']
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
  
