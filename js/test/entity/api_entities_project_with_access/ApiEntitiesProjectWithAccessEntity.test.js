
const envlocal = __dirname + '/../../../.env.local'
require('dotenv').config({ quiet: true, path: [envlocal] })

const Path = require('node:path')
const Fs = require('node:fs')

const { test, describe } = require('node:test')
const assert = require('node:assert')


const { GitlabSDK, BaseFeature, stdutil, config } = require('../../..')

const {
  envOverride,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
} = require('../../utility')


describe('ApiEntitiesProjectWithAccessEntity', async () => {

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesProjectWithAccess()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let api_entities_project_with_access_ref01_data = Object.values(setup.data.existing.api_entities_project_with_access)[0]

    // LOAD
    const api_entities_project_with_access_ref01_ent = client.ApiEntitiesProjectWithAccess()
    const api_entities_project_with_access_ref01_match_dt0 = {}
    api_entities_project_with_access_ref01_match_dt0.id = api_entities_project_with_access_ref01_data.id
    const api_entities_project_with_access_ref01_data_dt0 = (await api_entities_project_with_access_ref01_ent.load(api_entities_project_with_access_ref01_match_dt0)).data()
    assert(api_entities_project_with_access_ref01_data_dt0.id === api_entities_project_with_access_ref01_data.id)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/api_entities_project_with_access/ApiEntitiesProjectWithAccessTestData.json')

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
    ['api_entities_project_with_access01','api_entities_project_with_access02','api_entities_project_with_access03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_PROJECT_WITH_ACCESS_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': 'NONE',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_PROJECT_WITH_ACCESS_ENTID']

  if ('TRUE' === env.GITLAB_TEST_LIVE) {
    client = new GitlabSDK(merge([
      {
        apikey: env.GITLAB_APIKEY,
      },
      extra
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
    now: Date.now(),
  }

  return setup
}
  
