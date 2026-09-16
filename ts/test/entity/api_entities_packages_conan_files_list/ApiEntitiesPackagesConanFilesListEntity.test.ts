

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


describe('ApiEntitiesPackagesConanFilesListEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesPackagesConanFilesList()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_packages_conan_files_list.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[],"name":"api_entities_packages_conan_files_list","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":"my-package","kind":"param","name":"conan_id","orig":"package_name","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":"stable","kind":"param","name":"package_channel","orig":"package_channel","reqd":true,"type":"`$ANY`","index$":1},{"active":true,"example":"5ab84d6acfe1f23c4fae0ab88f26e3a396351ac9","kind":"param","name":"package_id","orig":"conan_package_reference","reqd":true,"type":"`$STRING`","index$":2},{"active":true,"example":"3bdd2d8c8e76c876ebd1ac0469a4e72c","kind":"param","name":"package_revision","orig":"package_revision","reqd":true,"type":"`$ANY`","index$":3},{"active":true,"example":"my-group+my-project","kind":"param","name":"package_username","orig":"package_username","reqd":true,"type":"`$ANY`","index$":4},{"active":true,"example":"1.0","kind":"param","name":"package_version","orig":"package_version","reqd":true,"type":"`$ANY`","index$":5},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":6},{"active":true,"example":"df28fd816be3a119de5ce4d374436b25","kind":"param","name":"revision_id","orig":"recipe_revision","reqd":true,"type":"`$STRING`","index$":7}]},"contract":{"id":"GET /api/v4/projects/{id}/packages/conan/v2/conans/{package_name}/{package_version}/{package_username}/{package_channel}/revisions/{recipe_revision}/packages/{conan_package_reference}/revisions/{package_revision}/files","json":"{\"operationId\":\"getApiV4ProjectsIdPackagesConanV2ConansPackageNamePackageVersionPackageUsernamePackageChannelRevisionsRecipeRevisionPackagesConanPackageReferenceRevisionsPackageRevisionFiles\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package name\",\"example\":\"my-package\",\"in\":\"path\",\"name\":\"package_name\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package version\",\"example\":\"1.0\",\"in\":\"path\",\"name\":\"package_version\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package username\",\"example\":\"my-group+my-project\",\"in\":\"path\",\"name\":\"package_username\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package channel\",\"example\":\"stable\",\"in\":\"path\",\"name\":\"package_channel\",\"required\":true,\"type\":\"string\"},{\"description\":\"Recipe revision\",\"example\":\"df28fd816be3a119de5ce4d374436b25\",\"in\":\"path\",\"name\":\"recipe_revision\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package reference\",\"example\":\"5ab84d6acfe1f23c4fae0ab88f26e3a396351ac9\",\"in\":\"path\",\"name\":\"conan_package_reference\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package revision\",\"example\":\"3bdd2d8c8e76c876ebd1ac0469a4e72c\",\"in\":\"path\",\"name\":\"package_revision\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"List package files\",\"schema\":{\"description\":\"API_Entities_Packages_Conan_FilesList model\",\"properties\":{\"files\":{\"example\":\"{ \\\"files\\\" : { \\\"conan_sources.tgz\\\" : { }, \\\"conanmanifest.txt\\\" : { }, \\\"conanfile.py\\\" : { } } }\",\"type\":\"object\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Bad Request\"},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/packages/conan/v2/conans/{package_name}/{package_version}/{package_username}/{package_channel}/revisions/{recipe_revision}/packages/{conan_package_reference}/revisions/{package_revision}/files","rename":{"param":{"conan_package_reference":"package_id","id":"project_id","package_name":"conan_id","recipe_revision":"revision_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"packages"},{"lit":"conan"},{"lit":"v2"},{"lit":"conans"},{"var":"conan_id"},{"var":"package_version"},{"var":"package_username"},{"var":"package_channel"},{"lit":"revisions"},{"var":"revision_id"},{"lit":"packages"},{"var":"package_id"},{"lit":"revisions"},{"var":"package_revision"},{"lit":"files"}],"select":{"exist":["conan_id","package_channel","package_id","package_revision","package_username","package_version","project_id","revision_id"]},"transform":{"req":"`reqdata`","res":"`body.files`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"example":"my-package","kind":"param","name":"conan_id","orig":"package_name","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":"stable","kind":"param","name":"package_channel","orig":"package_channel","reqd":true,"type":"`$ANY`","index$":1},{"active":true,"example":"my-group+my-project","kind":"param","name":"package_username","orig":"package_username","reqd":true,"type":"`$ANY`","index$":2},{"active":true,"example":"1.0","kind":"param","name":"package_version","orig":"package_version","reqd":true,"type":"`$ANY`","index$":3},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":4},{"active":true,"example":"df28fd816be3a119de5ce4d374436b25","kind":"param","name":"recipe_revision","orig":"recipe_revision","reqd":true,"type":"`$ANY`","index$":5}]},"contract":{"id":"GET /api/v4/projects/{id}/packages/conan/v2/conans/{package_name}/{package_version}/{package_username}/{package_channel}/revisions/{recipe_revision}/files","json":"{\"operationId\":\"getApiV4ProjectsIdPackagesConanV2ConansPackageNamePackageVersionPackageUsernamePackageChannelRevisionsRecipeRevisionFiles\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package name\",\"example\":\"my-package\",\"in\":\"path\",\"name\":\"package_name\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package version\",\"example\":\"1.0\",\"in\":\"path\",\"name\":\"package_version\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package username\",\"example\":\"my-group+my-project\",\"in\":\"path\",\"name\":\"package_username\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package channel\",\"example\":\"stable\",\"in\":\"path\",\"name\":\"package_channel\",\"required\":true,\"type\":\"string\"},{\"description\":\"Recipe revision\",\"example\":\"df28fd816be3a119de5ce4d374436b25\",\"in\":\"path\",\"name\":\"recipe_revision\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"List recipe files\",\"schema\":{\"description\":\"API_Entities_Packages_Conan_FilesList model\",\"properties\":{\"files\":{\"example\":\"{ \\\"files\\\" : { \\\"conan_sources.tgz\\\" : { }, \\\"conanmanifest.txt\\\" : { }, \\\"conanfile.py\\\" : { } } }\",\"type\":\"object\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Bad Request\"},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/packages/conan/v2/conans/{package_name}/{package_version}/{package_username}/{package_channel}/revisions/{recipe_revision}/files","rename":{"param":{"id":"project_id","package_name":"conan_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"packages"},{"lit":"conan"},{"lit":"v2"},{"lit":"conans"},{"var":"conan_id"},{"var":"package_version"},{"var":"package_username"},{"var":"package_channel"},{"lit":"revisions"},{"var":"recipe_revision"},{"lit":"files"}],"select":{"exist":["conan_id","package_channel","package_username","package_version","project_id","recipe_revision"]},"transform":{"req":"`reqdata`","res":"`body.files`"},"index$":1}],"key$":"load"}},"relations":{"ancestors":[["project","conan","revision"],["project","conan","revision","package","revision"]]},"key$":"api_entities_packages_conan_files_list","name__orig":"api_entities_packages_conan_files_list","Name":"ApiEntitiesPackagesConanFilesList","name_":"api_entities_packages_conan_files_list","name-":"api-entities-packages-conan-files-list","NAME":"API_ENTITIES_PACKAGES_CONAN_FILES_LIST","index$":113}, {"active":true,"entity":"api_entities_packages_conan_files_list","key$":"BasicApiEntitiesPackagesConanFilesListFlow","kind":"basic","name":"BasicApiEntitiesPackagesConanFilesListFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"api_entities_packages_conan_files_list_ref01","srcdatavar":"api_entities_packages_conan_files_list_ref01_data","suffix":"_dt0"},"match":{"conan_id":"conan01","id":"api_entities_packages_conan_files_list01","package_channel":"package_channel01","package_username":"package_username01","package_version":"package_version01","project_id":"project01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_packages_conan_files_list_ref01"}}],"index$":0}]}, 'ApiEntitiesPackagesConanFilesList')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let api_entities_packages_conan_files_list_ref01_data = Object.values(setup.data.existing.api_entities_packages_conan_files_list)[0] as any

    // LOAD: skipped — no entity id field and load requires path params.
    // Entity-var is declared here so later flow steps still compile.
    const api_entities_packages_conan_files_list_ref01_ent = client.ApiEntitiesPackagesConanFilesList()


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_packages_conan_files_list/ApiEntitiesPackagesConanFilesListTestData.json')

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
    ['api_entities_packages_conan_files_list01','api_entities_packages_conan_files_list02','api_entities_packages_conan_files_list03','project01','project02','project03','conan01','conan02','conan03','revision01','revision02','revision03','project01','project02','project03','conan01','conan02','conan03','revision01','revision02','revision03','package01','package02','package03','revision01','revision02','revision03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_PACKAGES_CONAN_FILES_LIST_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_PACKAGES_CONAN_FILES_LIST_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_PACKAGES_CONAN_FILES_LIST_ENTID']
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
  
