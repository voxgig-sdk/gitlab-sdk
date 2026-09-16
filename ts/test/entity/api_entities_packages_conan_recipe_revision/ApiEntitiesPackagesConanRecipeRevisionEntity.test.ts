

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


describe('ApiEntitiesPackagesConanRecipeRevisionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesPackagesConanRecipeRevision()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_packages_conan_recipe_revision.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"revision","req":false,"short":"The revision hash of the Conan recipe or package","type":"`$STRING`","index$":0},{"active":true,"name":"time","req":false,"short":"The UTC timestamp when the revision was created","type":"`$STRING`","index$":1}],"name":"api_entities_packages_conan_recipe_revision","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"example":"my-package","kind":"param","name":"conan_id","orig":"package_name","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":"stable","kind":"param","name":"package_channel","orig":"package_channel","reqd":true,"type":"`$ANY`","index$":1},{"active":true,"example":"my-group+my-project","kind":"param","name":"package_username","orig":"package_username","reqd":true,"type":"`$ANY`","index$":2},{"active":true,"example":"1.0","kind":"param","name":"package_version","orig":"package_version","reqd":true,"type":"`$ANY`","index$":3},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":4}]},"contract":{"id":"GET /api/v4/projects/{id}/packages/conan/v2/conans/{package_name}/{package_version}/{package_username}/{package_channel}/revisions","json":"{\"operationId\":\"getApiV4ProjectsIdPackagesConanV2ConansPackageNamePackageVersionPackageUsernamePackageChannelRevisions\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package name\",\"example\":\"my-package\",\"in\":\"path\",\"name\":\"package_name\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package version\",\"example\":\"1.0\",\"in\":\"path\",\"name\":\"package_version\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package username\",\"example\":\"my-group+my-project\",\"in\":\"path\",\"name\":\"package_username\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package channel\",\"example\":\"stable\",\"in\":\"path\",\"name\":\"package_channel\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get the list of revisions\",\"schema\":{\"description\":\"API_Entities_Packages_Conan_RecipeRevisions model\",\"properties\":{\"reference\":{\"description\":\"The Conan package reference\",\"example\":\"packageTest/1.2.3@gitlab-org+conan/stable\",\"type\":\"string\"},\"revisions\":{\"description\":\"List of recipe revisions\",\"items\":{\"description\":\"API_Entities_Packages_Conan_Revision model\",\"properties\":{\"revision\":{\"description\":\"The revision hash of the Conan recipe or package\",\"example\":\"75151329520e7685dcf5da49ded2fec0\",\"type\":\"string\"},\"time\":{\"description\":\"The UTC timestamp when the revision was created\",\"example\":\"2024-12-17T09:16:40.334Z\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Bad Request\"},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/packages/conan/v2/conans/{package_name}/{package_version}/{package_username}/{package_channel}/revisions","rename":{"param":{"id":"project_id","package_name":"conan_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"packages"},{"lit":"conan"},{"lit":"v2"},{"lit":"conans"},{"var":"conan_id"},{"var":"package_version"},{"var":"package_username"},{"var":"package_channel"},{"lit":"revisions"}],"select":{"exist":["conan_id","package_channel","package_username","package_version","project_id"]},"transform":{"req":"`reqdata`","res":"`body.revisions`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[["project","conan"]]},"key$":"api_entities_packages_conan_recipe_revision","name__orig":"api_entities_packages_conan_recipe_revision","Name":"ApiEntitiesPackagesConanRecipeRevision","name_":"api_entities_packages_conan_recipe_revision","name-":"api-entities-packages-conan-recipe-revision","NAME":"API_ENTITIES_PACKAGES_CONAN_RECIPE_REVISION","index$":118}, {"active":true,"entity":"api_entities_packages_conan_recipe_revision","key$":"BasicApiEntitiesPackagesConanRecipeRevisionFlow","kind":"basic","name":"BasicApiEntitiesPackagesConanRecipeRevisionFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{"conan_id":"conan01","package_channel":"package_channel01","package_username":"package_username01","package_version":"package_version01","project_id":"project01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"api_entities_packages_conan_recipe_revision_ref01"}}],"index$":0}]}, 'ApiEntitiesPackagesConanRecipeRevision')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let api_entities_packages_conan_recipe_revision_ref01_data = Object.values(setup.data.existing.api_entities_packages_conan_recipe_revision)[0] as any

    // LIST
    const api_entities_packages_conan_recipe_revision_ref01_ent = client.ApiEntitiesPackagesConanRecipeRevision()
    const api_entities_packages_conan_recipe_revision_ref01_match: any = {}
    api_entities_packages_conan_recipe_revision_ref01_match['conan_id'] = setup.idmap['conan01']
    api_entities_packages_conan_recipe_revision_ref01_match['package_channel'] = setup.idmap['package_channel01']
    api_entities_packages_conan_recipe_revision_ref01_match['package_username'] = setup.idmap['package_username01']
    api_entities_packages_conan_recipe_revision_ref01_match['package_version'] = setup.idmap['package_version01']
    api_entities_packages_conan_recipe_revision_ref01_match['project_id'] = setup.idmap['project01']

    const api_entities_packages_conan_recipe_revision_ref01_list = (await api_entities_packages_conan_recipe_revision_ref01_ent.list(api_entities_packages_conan_recipe_revision_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_packages_conan_recipe_revision/ApiEntitiesPackagesConanRecipeRevisionTestData.json')

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
    ['api_entities_packages_conan_recipe_revision01','api_entities_packages_conan_recipe_revision02','api_entities_packages_conan_recipe_revision03','project01','project02','project03','conan01','conan02','conan03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_PACKAGES_CONAN_RECIPE_REVISION_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_PACKAGES_CONAN_RECIPE_REVISION_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_PACKAGES_CONAN_RECIPE_REVISION_ENTID']
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
  
