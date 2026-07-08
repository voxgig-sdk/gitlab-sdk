
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { GitlabSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await GitlabSDK.test()
    equal(null !== testsdk, true)
  })

})
