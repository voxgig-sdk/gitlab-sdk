

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"api_entities_packages_conan_files_list","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v4/projects/{id}/packages/conan/v2/conans/{package_name}/{package_version}/{package_username}/{package_channel}/revisions/{recipe_revision}/packages/{conan_package_reference}/revisions/{package_revision}/files","source":"swagger2","version":2},"g":{"params":[{"a":true,"ex":"my-package","k":"param","n":"conan_id","or":"package_name","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"stable","k":"param","n":"package_channel","or":"package_channel","r":true,"t":"`$ANY`","index$":1},{"a":true,"ex":"5ab84d6acfe1f23c4fae0ab88f26e3a396351ac9","k":"param","n":"package_id","or":"conan_package_reference","r":true,"t":"`$STRING`","index$":2},{"a":true,"ex":"3bdd2d8c8e76c876ebd1ac0469a4e72c","k":"param","n":"package_revision","or":"package_revision","r":true,"t":"`$ANY`","index$":3},{"a":true,"ex":"my-group+my-project","k":"param","n":"package_username","or":"package_username","r":true,"t":"`$ANY`","index$":4},{"a":true,"ex":"1.0","k":"param","n":"package_version","or":"package_version","r":true,"t":"`$ANY`","index$":5},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":6},{"a":true,"ex":"df28fd816be3a119de5ce4d374436b25","k":"param","n":"revision_id","or":"recipe_revision","r":true,"t":"`$STRING`","index$":7}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/packages/conan/v2/conans/{package_name}/{package_version}/{package_username}/{package_channel}/revisions/{recipe_revision}/packages/{conan_package_reference}/revisions/{package_revision}/files","q":{"exist":["conan_id","package_channel","package_id","package_revision","package_username","package_version","project_id","revision_id"]},"r":{"param":{"conan_package_reference":"package_id","id":"project_id","package_name":"conan_id","recipe_revision":"revision_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"packages"},{"lit":"conan"},{"lit":"v2"},{"lit":"conans"},{"var":"conan_id"},{"var":"package_version"},{"var":"package_username"},{"var":"package_channel"},{"lit":"revisions"},{"var":"revision_id"},{"lit":"packages"},{"var":"package_id"},{"lit":"revisions"},{"var":"package_revision"},{"lit":"files"}],"t":{"req":"`reqdata`","res":"`body.files`"},"index$":0},{"a":true,"co":{"id":"GET /api/v4/projects/{id}/packages/conan/v2/conans/{package_name}/{package_version}/{package_username}/{package_channel}/revisions/{recipe_revision}/files","source":"swagger2","version":2},"g":{"params":[{"a":true,"ex":"my-package","k":"param","n":"conan_id","or":"package_name","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"stable","k":"param","n":"package_channel","or":"package_channel","r":true,"t":"`$ANY`","index$":1},{"a":true,"ex":"my-group+my-project","k":"param","n":"package_username","or":"package_username","r":true,"t":"`$ANY`","index$":2},{"a":true,"ex":"1.0","k":"param","n":"package_version","or":"package_version","r":true,"t":"`$ANY`","index$":3},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":4},{"a":true,"ex":"df28fd816be3a119de5ce4d374436b25","k":"param","n":"recipe_revision","or":"recipe_revision","r":true,"t":"`$ANY`","index$":5}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/packages/conan/v2/conans/{package_name}/{package_version}/{package_username}/{package_channel}/revisions/{recipe_revision}/files","q":{"exist":["conan_id","package_channel","package_username","package_version","project_id","recipe_revision"]},"r":{"param":{"id":"project_id","package_name":"conan_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"packages"},{"lit":"conan"},{"lit":"v2"},{"lit":"conans"},{"var":"conan_id"},{"var":"package_version"},{"var":"package_username"},{"var":"package_channel"},{"lit":"revisions"},{"var":"recipe_revision"},{"lit":"files"}],"t":{"req":"`reqdata`","res":"`body.files`"},"index$":1}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.project","$.main.kit.entity.conan"],["$.main.kit.entity.project","$.main.kit.entity.conan"]]},"key$":"api_entities_packages_conan_files_list","name__orig":"api_entities_packages_conan_files_list","Name":"ApiEntitiesPackagesConanFilesList","name_":"api_entities_packages_conan_files_list","name-":"api-entities-packages-conan-files-list","NAME":"API_ENTITIES_PACKAGES_CONAN_FILES_LIST","index$":113}, {"active":true,"entity":"api_entities_packages_conan_files_list","key$":"BasicApiEntitiesPackagesConanFilesListFlow","kind":"basic","name":"BasicApiEntitiesPackagesConanFilesListFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"api_entities_packages_conan_files_list_ref01","srcdatavar":"api_entities_packages_conan_files_list_ref01_data","suffix":"_dt0"},"m":{"conan_id":"conan01","id":"api_entities_packages_conan_files_list01","package_channel":"package_channel01","package_username":"package_username01","package_version":"package_version01","project_id":"project01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_packages_conan_files_list_ref01"}}],"index$":0}]}, 'ApiEntitiesPackagesConanFilesList', {"GET /api/v4/projects/{id}/packages/conan/v2/conans/{package_name}/{package_version}/{package_username}/{package_channel}/revisions/{recipe_revision}/packages/{conan_package_reference}/revisions/{package_revision}/files":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"in":"path","name":"package_name","description":"Package name","type":"string","required":true,"example":"my-package","index$":1},{"in":"path","name":"package_version","description":"Package version","type":"string","required":true,"example":"1.0","index$":2},{"in":"path","name":"package_username","description":"Package username","type":"string","required":true,"example":"my-group+my-project","index$":3},{"in":"path","name":"package_channel","description":"Package channel","type":"string","required":true,"example":"stable","index$":4},{"in":"path","name":"recipe_revision","description":"Recipe revision","type":"string","required":true,"example":"df28fd816be3a119de5ce4d374436b25","index$":5},{"in":"path","name":"conan_package_reference","description":"Package reference","type":"string","required":true,"example":"5ab84d6acfe1f23c4fae0ab88f26e3a396351ac9","index$":6},{"in":"path","name":"package_revision","description":"Package revision","type":"string","required":true,"example":"3bdd2d8c8e76c876ebd1ac0469a4e72c","index$":7}]},"GET /api/v4/projects/{id}/packages/conan/v2/conans/{package_name}/{package_version}/{package_username}/{package_channel}/revisions/{recipe_revision}/files":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"in":"path","name":"package_name","description":"Package name","type":"string","required":true,"example":"my-package","index$":1},{"in":"path","name":"package_version","description":"Package version","type":"string","required":true,"example":"1.0","index$":2},{"in":"path","name":"package_username","description":"Package username","type":"string","required":true,"example":"my-group+my-project","index$":3},{"in":"path","name":"package_channel","description":"Package channel","type":"string","required":true,"example":"stable","index$":4},{"in":"path","name":"recipe_revision","description":"Recipe revision","type":"string","required":true,"example":"df28fd816be3a119de5ce4d374436b25","index$":5}]}})
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
    ['api_entities_packages_conan_files_list01','api_entities_packages_conan_files_list02','api_entities_packages_conan_files_list03','project01','project02','project03','conan01','conan02','conan03','package_channel01','package_username01','package_version01'],
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
  
