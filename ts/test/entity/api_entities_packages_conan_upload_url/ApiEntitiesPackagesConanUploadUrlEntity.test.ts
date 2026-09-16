

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


describe('ApiEntitiesPackagesConanUploadUrlEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesPackagesConanUploadUrl()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_packages_conan_upload_url.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[],"name":"api_entities_packages_conan_upload_url","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"params":[{"active":true,"example":"my-package","kind":"param","name":"conan_id","orig":"package_name","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":"103f6067a947f366ef91fc1b7da351c588d1827f","kind":"param","name":"conan_package_reference","orig":"conan_package_reference","reqd":true,"type":"`$ANY`","index$":1},{"active":true,"example":"stable","kind":"param","name":"package_channel","orig":"package_channel","reqd":true,"type":"`$ANY`","index$":2},{"active":true,"example":"my-group+my-project","kind":"param","name":"package_username","orig":"package_username","reqd":true,"type":"`$ANY`","index$":3},{"active":true,"example":"1.0","kind":"param","name":"package_version","orig":"package_version","reqd":true,"type":"`$ANY`","index$":4},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":5}]},"contract":{"id":"POST /api/v4/projects/{id}/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}/packages/{conan_package_reference}/upload_urls","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4ProjectsIdPackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannelPackagesConanPackageReferenceUploadUrls\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package name\",\"example\":\"my-package\",\"in\":\"path\",\"name\":\"package_name\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package version\",\"example\":\"1.0\",\"in\":\"path\",\"name\":\"package_version\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package username\",\"example\":\"my-group+my-project\",\"in\":\"path\",\"name\":\"package_username\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package channel\",\"example\":\"stable\",\"in\":\"path\",\"name\":\"package_channel\",\"required\":true,\"type\":\"string\"},{\"description\":\"Conan package ID\",\"example\":\"103f6067a947f366ef91fc1b7da351c588d1827f\",\"in\":\"path\",\"name\":\"conan_package_reference\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Package Upload Urls\",\"schema\":{\"description\":\"API_Entities_Packages_Conan_UploadUrls model\",\"properties\":{\"upload_urls\":{\"example\":\"{ \\\"conan_package.tgz\\\": \\\"https://gitlab.example.com/api/v4/packages/conan/v1/files/my-package/1.0/my-group+my-project/stable/0/package/103f6067a947f366ef91fc1b7da351c588d1827f/0/conan_package.tgz\\\" }\",\"type\":\"object\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Bad Request\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/projects/{id}/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}/packages/{conan_package_reference}/upload_urls","rename":{"param":{"id":"project_id","package_name":"conan_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"packages"},{"lit":"conan"},{"lit":"v1"},{"lit":"conans"},{"var":"conan_id"},{"var":"package_version"},{"var":"package_username"},{"var":"package_channel"},{"lit":"packages"},{"var":"conan_package_reference"},{"lit":"upload_urls"}],"select":{"exist":["conan_id","conan_package_reference","package_channel","package_username","package_version","project_id"]},"transform":{"req":"`reqdata`","res":"`body.upload_urls`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"example":"my-package","kind":"param","name":"conan_id","orig":"package_name","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":"103f6067a947f366ef91fc1b7da351c588d1827f","kind":"param","name":"conan_package_reference","orig":"conan_package_reference","reqd":true,"type":"`$ANY`","index$":1},{"active":true,"example":"stable","kind":"param","name":"package_channel","orig":"package_channel","reqd":true,"type":"`$ANY`","index$":2},{"active":true,"example":"my-group+my-project","kind":"param","name":"package_username","orig":"package_username","reqd":true,"type":"`$ANY`","index$":3},{"active":true,"example":"1.0","kind":"param","name":"package_version","orig":"package_version","reqd":true,"type":"`$ANY`","index$":4}]},"contract":{"id":"POST /api/v4/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}/packages/{conan_package_reference}/upload_urls","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4PackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannelPackagesConanPackageReferenceUploadUrls\",\"parameters\":[{\"description\":\"Package name\",\"example\":\"my-package\",\"in\":\"path\",\"name\":\"package_name\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package version\",\"example\":\"1.0\",\"in\":\"path\",\"name\":\"package_version\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package username\",\"example\":\"my-group+my-project\",\"in\":\"path\",\"name\":\"package_username\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package channel\",\"example\":\"stable\",\"in\":\"path\",\"name\":\"package_channel\",\"required\":true,\"type\":\"string\"},{\"description\":\"Conan package ID\",\"example\":\"103f6067a947f366ef91fc1b7da351c588d1827f\",\"in\":\"path\",\"name\":\"conan_package_reference\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Package Upload Urls\",\"schema\":{\"description\":\"API_Entities_Packages_Conan_UploadUrls model\",\"properties\":{\"upload_urls\":{\"example\":\"{ \\\"conan_package.tgz\\\": \\\"https://gitlab.example.com/api/v4/packages/conan/v1/files/my-package/1.0/my-group+my-project/stable/0/package/103f6067a947f366ef91fc1b7da351c588d1827f/0/conan_package.tgz\\\" }\",\"type\":\"object\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Bad Request\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}/packages/{conan_package_reference}/upload_urls","rename":{"param":{"package_name":"conan_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"packages"},{"lit":"conan"},{"lit":"v1"},{"lit":"conans"},{"var":"conan_id"},{"var":"package_version"},{"var":"package_username"},{"var":"package_channel"},{"lit":"packages"},{"var":"conan_package_reference"},{"lit":"upload_urls"}],"select":{"exist":["conan_id","conan_package_reference","package_channel","package_username","package_version"]},"transform":{"req":"`reqdata`","res":"`body.upload_urls`"},"index$":1},{"active":true,"args":{"params":[{"active":true,"example":"my-package","kind":"param","name":"conan_id","orig":"package_name","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":"stable","kind":"param","name":"package_channel","orig":"package_channel","reqd":true,"type":"`$ANY`","index$":1},{"active":true,"example":"my-group+my-project","kind":"param","name":"package_username","orig":"package_username","reqd":true,"type":"`$ANY`","index$":2},{"active":true,"example":"1.0","kind":"param","name":"package_version","orig":"package_version","reqd":true,"type":"`$ANY`","index$":3},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":4}]},"contract":{"id":"POST /api/v4/projects/{id}/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}/upload_urls","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4ProjectsIdPackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannelUploadUrls\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package name\",\"example\":\"my-package\",\"in\":\"path\",\"name\":\"package_name\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package version\",\"example\":\"1.0\",\"in\":\"path\",\"name\":\"package_version\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package username\",\"example\":\"my-group+my-project\",\"in\":\"path\",\"name\":\"package_username\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package channel\",\"example\":\"stable\",\"in\":\"path\",\"name\":\"package_channel\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Recipe Upload Urls\",\"schema\":{\"description\":\"API_Entities_Packages_Conan_UploadUrls model\",\"properties\":{\"upload_urls\":{\"example\":\"{ \\\"conan_package.tgz\\\": \\\"https://gitlab.example.com/api/v4/packages/conan/v1/files/my-package/1.0/my-group+my-project/stable/0/package/103f6067a947f366ef91fc1b7da351c588d1827f/0/conan_package.tgz\\\" }\",\"type\":\"object\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Bad Request\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/projects/{id}/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}/upload_urls","rename":{"param":{"id":"project_id","package_name":"conan_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"packages"},{"lit":"conan"},{"lit":"v1"},{"lit":"conans"},{"var":"conan_id"},{"var":"package_version"},{"var":"package_username"},{"var":"package_channel"},{"lit":"upload_urls"}],"select":{"exist":["conan_id","package_channel","package_username","package_version","project_id"]},"transform":{"req":"`reqdata`","res":"`body.upload_urls`"},"index$":2},{"active":true,"args":{"params":[{"active":true,"example":"my-package","kind":"param","name":"conan_id","orig":"package_name","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":"stable","kind":"param","name":"package_channel","orig":"package_channel","reqd":true,"type":"`$ANY`","index$":1},{"active":true,"example":"my-group+my-project","kind":"param","name":"package_username","orig":"package_username","reqd":true,"type":"`$ANY`","index$":2},{"active":true,"example":"1.0","kind":"param","name":"package_version","orig":"package_version","reqd":true,"type":"`$ANY`","index$":3}]},"contract":{"id":"POST /api/v4/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}/upload_urls","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4PackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannelUploadUrls\",\"parameters\":[{\"description\":\"Package name\",\"example\":\"my-package\",\"in\":\"path\",\"name\":\"package_name\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package version\",\"example\":\"1.0\",\"in\":\"path\",\"name\":\"package_version\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package username\",\"example\":\"my-group+my-project\",\"in\":\"path\",\"name\":\"package_username\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package channel\",\"example\":\"stable\",\"in\":\"path\",\"name\":\"package_channel\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Recipe Upload Urls\",\"schema\":{\"description\":\"API_Entities_Packages_Conan_UploadUrls model\",\"properties\":{\"upload_urls\":{\"example\":\"{ \\\"conan_package.tgz\\\": \\\"https://gitlab.example.com/api/v4/packages/conan/v1/files/my-package/1.0/my-group+my-project/stable/0/package/103f6067a947f366ef91fc1b7da351c588d1827f/0/conan_package.tgz\\\" }\",\"type\":\"object\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Bad Request\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}/upload_urls","rename":{"param":{"package_name":"conan_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"packages"},{"lit":"conan"},{"lit":"v1"},{"lit":"conans"},{"var":"conan_id"},{"var":"package_version"},{"var":"package_username"},{"var":"package_channel"},{"lit":"upload_urls"}],"select":{"exist":["conan_id","package_channel","package_username","package_version"]},"transform":{"req":"`reqdata`","res":"`body.upload_urls`"},"index$":3}],"key$":"create"}},"relations":{"ancestors":[["project","conan"],["project","conan","package"]]},"key$":"api_entities_packages_conan_upload_url","name__orig":"api_entities_packages_conan_upload_url","Name":"ApiEntitiesPackagesConanUploadUrl","name_":"api_entities_packages_conan_upload_url","name-":"api-entities-packages-conan-upload-url","NAME":"API_ENTITIES_PACKAGES_CONAN_UPLOAD_URL","index$":121}, {"active":true,"entity":"api_entities_packages_conan_upload_url","key$":"BasicApiEntitiesPackagesConanUploadUrlFlow","kind":"basic","name":"BasicApiEntitiesPackagesConanUploadUrlFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"api_entities_packages_conan_upload_url_ref01"},"match":{"conan_id":"conan01","package_channel":"package_channel01","package_username":"package_username01","package_version":"package_version01"},"op":"create","spec":[],"valid":[],"index$":0}]}, 'ApiEntitiesPackagesConanUploadUrl')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const api_entities_packages_conan_upload_url_ref01_ent = client.ApiEntitiesPackagesConanUploadUrl()
    let api_entities_packages_conan_upload_url_ref01_data = setup.data.new.api_entities_packages_conan_upload_url['api_entities_packages_conan_upload_url_ref01']
    api_entities_packages_conan_upload_url_ref01_data['conan_id'] = setup.idmap['conan01']
    api_entities_packages_conan_upload_url_ref01_data['package_channel'] = setup.idmap['package_channel01']
    api_entities_packages_conan_upload_url_ref01_data['package_username'] = setup.idmap['package_username01']
    api_entities_packages_conan_upload_url_ref01_data['package_version'] = setup.idmap['package_version01']

    api_entities_packages_conan_upload_url_ref01_data = (await api_entities_packages_conan_upload_url_ref01_ent.create(api_entities_packages_conan_upload_url_ref01_data)).data()
    assert(null != api_entities_packages_conan_upload_url_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_packages_conan_upload_url/ApiEntitiesPackagesConanUploadUrlTestData.json')

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
    ['api_entities_packages_conan_upload_url01','api_entities_packages_conan_upload_url02','api_entities_packages_conan_upload_url03','project01','project02','project03','conan01','conan02','conan03','project01','project02','project03','conan01','conan02','conan03','package01','package02','package03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_PACKAGES_CONAN_UPLOAD_URL_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_PACKAGES_CONAN_UPLOAD_URL_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_PACKAGES_CONAN_UPLOAD_URL_ENTID']
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
  
