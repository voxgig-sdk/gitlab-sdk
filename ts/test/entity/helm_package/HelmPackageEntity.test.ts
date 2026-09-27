

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


describe('HelmPackageEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.HelmPackage()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'helm_package.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"helm_package","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/v4/projects/{id}/packages/helm/api/{channel}/charts","source":"swagger2","version":2},"g":{"params":[{"a":true,"ex":"stable","k":"param","n":"channel","or":"channel","r":true,"t":"`$ANY`","index$":0},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"post_api_v4_projects_id_packages_helm_api_channel_chart","or":"post_api_v4_projects_id_packages_helm_api_channel_chart","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/api/v4/projects/{id}/packages/helm/api/{channel}/charts","q":{"exist":["channel","post_api_v4_projects_id_packages_helm_api_channel_chart","project_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"packages"},{"lit":"helm"},{"lit":"api"},{"var":"channel"},{"lit":"charts"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /api/v4/projects/{id}/packages/helm/api/{channel}/charts/authorize","source":"swagger2","version":2},"g":{"params":[{"a":true,"ex":"stable","k":"param","n":"api_id","or":"channel","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/api/v4/projects/{id}/packages/helm/api/{channel}/charts/authorize","q":{"exist":["api_id","project_id"]},"r":{"param":{"channel":"api_id","id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"packages"},{"lit":"helm"},{"lit":"api"},{"var":"api_id"},{"lit":"charts"},{"lit":"authorize"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v4/projects/{id}/packages/helm/{channel}/charts/{file_name}.tgz","source":"swagger2","version":2},"g":{"params":[{"a":true,"ex":"mychart","k":"param","n":"file_name","or":"file_name","r":true,"t":"`$ANY`","index$":0},{"a":true,"ex":"stable","k":"param","n":"helm_id","or":"channel","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/packages/helm/{channel}/charts/{file_name}.tgz","q":{"exist":["file_name","helm_id","project_id"]},"r":{"param":{"channel":"helm_id","id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"packages"},{"lit":"helm"},{"var":"helm_id"},{"lit":"charts"},{"lit":"{file_name}.tgz"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /api/v4/projects/{id}/packages/helm/{channel}/index.yaml","source":"swagger2","version":2},"g":{"params":[{"a":true,"ex":"stable","k":"param","n":"channel","or":"channel","r":true,"t":"`$ANY`","index$":0},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/packages/helm/{channel}/index.yaml","q":{"exist":["channel","project_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"packages"},{"lit":"helm"},{"var":"channel"},{"lit":"index.yaml"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.project"],["$.main.kit.entity.project"]]},"key$":"helm_package","name__orig":"helm_package","Name":"HelmPackage","name_":"helm_package","name-":"helm-package","NAME":"HELM_PACKAGE","index$":215}, {"active":true,"entity":"helm_package","key$":"BasicHelmPackageFlow","kind":"basic","name":"BasicHelmPackageFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"helm_package_ref01"},"m":{"api_id":"api01","file_name":"file_name01","project_id":"project01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"helm_package_ref01","srcdatavar":"helm_package_ref01_data","suffix":"_dt0"},"m":{"id":"helm_package01","project_id":"project01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-helm_package_ref01"}}],"index$":1}]}, 'HelmPackage', {"POST /api/v4/projects/{id}/packages/helm/api/{channel}/charts":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or full path of a project","type":"integer","format":"int32","required":true,"index$":0},{"in":"path","name":"channel","description":"Helm channel","type":"string","required":true,"example":"stable","index$":1},{"name":"postApiV4ProjectsIdPackagesHelmApiChannelCharts","in":"body","required":true,"schema":{"type":"object","properties":{"chart":{"type":"file","description":"The chart file to be published (generated by Multipart middleware)"}},"required":["chart"],"description":"Upload a chart","x-ref":"#/definitions/postApiV4ProjectsIdPackagesHelmApiChannelCharts"},"index$":2}]},"POST /api/v4/projects/{id}/packages/helm/api/{channel}/charts/authorize":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or full path of a project","type":"integer","format":"int32","required":true,"index$":0},{"in":"path","name":"channel","description":"Helm channel","type":"string","required":true,"example":"stable","index$":1}]},"GET /api/v4/projects/{id}/packages/helm/{channel}/charts/{file_name}.tgz":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or full path of a project","type":"integer","format":"int32","required":true,"index$":0},{"in":"path","name":"channel","description":"Helm channel","type":"string","required":true,"example":"stable","index$":1},{"in":"path","name":"file_name","description":"Helm package file name","type":"string","required":true,"example":"mychart","index$":2}]},"GET /api/v4/projects/{id}/packages/helm/{channel}/index.yaml":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or full path of a project","type":"integer","format":"int32","required":true,"index$":0},{"in":"path","name":"channel","description":"Helm channel","type":"string","required":true,"example":"stable","index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const helm_package_ref01_ent = client.HelmPackage()
    let helm_package_ref01_data = setup.data.new.helm_package['helm_package_ref01']
    helm_package_ref01_data['api_id'] = setup.idmap['api01']
    helm_package_ref01_data['file_name'] = setup.idmap['file_name01']
    helm_package_ref01_data['project_id'] = setup.idmap['project01']

    helm_package_ref01_data = (await helm_package_ref01_ent.create(helm_package_ref01_data)).data()
    assert(null != helm_package_ref01_data)



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/helm_package/HelmPackageTestData.json')

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
    ['helm_package01','helm_package02','helm_package03','project01','project02','project03','api01','file_name01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_HELM_PACKAGE_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_HELM_PACKAGE_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_HELM_PACKAGE_ENTID']
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
  
