
const envlocal = __dirname + '/../../../.env.local'
require('dotenv').config({ quiet: true, path: [envlocal] })

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'


import { GitlabSDK } from '../../..'

import {
  envOverride,
  liveDelay,
  maybeSkipControl,
  skipIfMissingIds,
} from '../../utility'


describe('ApiEntitiesPackagesConanRecipeRevisionDirect', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('direct-exists', async () => {
    const sdk = new GitlabSDK({
      system: { fetch: async () => ({}) }
    })
    assert('function' === typeof sdk.direct)
    assert('function' === typeof sdk.prepare)
  })


  test('direct-list-api_entities_packages_conan_recipe_revision', async (t: any) => {
    const setup = directSetup([{ id: 'direct01' }, { id: 'direct02' }])
    if (maybeSkipControl(t, 'direct', 'direct-list-api_entities_packages_conan_recipe_revision', setup.live)) return
    if (skipIfMissingIds(t, setup, ["conan01","package_channel01","package_username01","package_version01","project01"])) return
    const { client, calls } = setup

    const params: any = {}
    const query: any = {}
    if (setup.live) {
      params.conan_id = setup.idmap['conan01']
      params.package_channel = setup.idmap['package_channel01']
      params.package_username = setup.idmap['package_username01']
      params.package_version = setup.idmap['package_version01']
      params.project_id = setup.idmap['project01']
    } else {
      params.conan_id = 'direct01'
      params.package_channel = 'direct02'
      params.package_username = 'direct03'
      params.package_version = 'direct04'
      params.project_id = 'direct05'
    }

    const result: any = await client.direct({
      path: 'api/v4/projects/{project_id}/packages/conan/v2/conans/{conan_id}/{package_version}/{package_username}/{package_channel}/revisions',
      method: 'GET',
      params,
      query,
    })

    if (setup.live) {
      // Live mode is lenient: synthetic IDs frequently 4xx and the list-
      // response shape varies wildly across public APIs. Skip rather than
      // fail when the call doesn't return a usable list.
      if (!result.ok || result.status < 200 || result.status >= 300) {
        return
      }
      const listArr = unwrapListData(result.data)
      if (!Array.isArray(listArr)) {
        return
      }
    } else {
      assert(result.ok === true)
      assert(result.status === 200)
      assert(null != result.data)
      const listArr = unwrapListData(result.data)
      assert(Array.isArray(listArr))
      assert(listArr!.length === 2)
      assert(calls.length === 1)
      assert(calls[0].init.method === 'GET')
      assert(calls[0].url.includes('direct01'))
      assert(calls[0].url.includes('direct02'))
      assert(calls[0].url.includes('direct03'))
      assert(calls[0].url.includes('direct04'))
      assert(calls[0].url.includes('direct05'))
    }
  })

})



function directSetup(mockres?: any) {
  const calls: any[] = []

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_PACKAGES_CONAN_RECIPE_REVISION_ENTID': {},
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_APIKEY': 'NONE',
  })

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  if (live) {
    const client = new GitlabSDK({
      apikey: env.GITLAB_APIKEY,
    })

    let idmap: any = env['GITLAB_TEST_API_ENTITIES_PACKAGES_CONAN_RECIPE_REVISION_ENTID']
    if ('string' === typeof idmap && idmap.startsWith('{')) {
      idmap = JSON.parse(idmap)
    }

    return { client, calls, live, idmap }
  }

  const mockFetch = async (url: string, init: any) => {
    calls.push({ url, init })
    return {
      status: 200,
      statusText: 'OK',
      headers: {},
      json: async () => (null != mockres ? mockres : { id: 'direct01' }),
    }
  }

  const client = new GitlabSDK({
    base: 'http://localhost:8080',
    system: { fetch: mockFetch },
  })

  return { client, calls, live, idmap: {} as any }
}

// direct() returns the raw response body. List endpoints often wrap the
// array in an envelope (e.g. { data: [...] }, { entities: [...] },
// { pagination, data: [...] }). The test transforms the raw body to
// extract the first array — either the body itself or the first array
// property of an envelope object.
function unwrapListData(data: any): any[] | null {
  if (Array.isArray(data)) return data
  if (data && 'object' === typeof data) {
    for (const v of Object.values(data)) {
      if (Array.isArray(v)) return v as any[]
    }
  }
  return null
}
  
