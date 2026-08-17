
const { test, describe } = require('node:test')
const { equal } = require('node:assert')


const { GitlabSDK } = require('..')


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await GitlabSDK.test()
    equal(null !== testsdk, true)
  })

})
