
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { GitlabSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = GitlabSDK.test()
    equal(testsdk instanceof GitlabSDK, true,
      'GitlabSDK.test() must return a client synchronously')
  })

})
