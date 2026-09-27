

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


describe('ApiEntitiesPackagesDebianDistributionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesPackagesDebianDistribution()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_packages_debian_distribution.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"architectures":{"a":true,"h":"Architectures","n":"architectures","r":false,"t":"`$ARRAY`","key$":"architectures","index$":0},"codename":{"a":true,"h":"Codename","n":"codename","r":false,"t":"`$STRING`","key$":"codename","index$":1},"components":{"a":true,"h":"Components","n":"components","r":false,"t":"`$ARRAY`","key$":"components","index$":2},"description":{"a":true,"h":"Description","n":"description","r":false,"t":"`$STRING`","key$":"description","index$":3},"id":{"a":true,"fo":"int32","h":"Id","n":"id","r":false,"t":"`$INTEGER`","key$":"id","index$":4},"label":{"a":true,"h":"Label","n":"label","r":false,"t":"`$STRING`","key$":"label","index$":5},"origin":{"a":true,"h":"Origin","n":"origin","r":false,"t":"`$STRING`","key$":"origin","index$":6},"suite":{"a":true,"h":"Suite","n":"suite","r":false,"t":"`$STRING`","key$":"suite","index$":7},"valid_time_duration_seconds":{"a":true,"fo":"int32","h":"Valid Time Duration Seconds","n":"valid_time_duration_seconds","r":false,"t":"`$INTEGER`","key$":"valid_time_duration_seconds","index$":8},"version":{"a":true,"h":"Version","n":"version","r":false,"t":"`$STRING`","key$":"version","index$":9}},"id":{"field":"id","name":"id"},"name":"api_entities_packages_debian_distribution","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/v4/groups/{id}/-/debian_distributions","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"group_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"post_api_v4_groups_id_debian_distribution","or":"post_api_v4_groups_id_debian_distribution","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/api/v4/groups/{id}/-/debian_distributions","q":{"exist":["group_id","post_api_v4_groups_id_debian_distribution"]},"r":{"param":{"id":"group_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"-"},{"lit":"debian_distributions"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /api/v4/projects/{id}/debian_distributions","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"post_api_v4_projects_id_debian_distribution","or":"post_api_v4_projects_id_debian_distribution","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/api/v4/projects/{id}/debian_distributions","q":{"exist":["post_api_v4_projects_id_debian_distribution","project_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"debian_distributions"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/v4/groups/{id}/-/debian_distributions","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"group_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"amd64","k":"query","n":"architecture","or":"architecture","r":false,"t":"`$ANY`","index$":0},{"a":true,"ex":"sid","k":"query","n":"codename","or":"codename","r":false,"t":"`$ANY`","index$":1},{"a":true,"ex":"main","k":"query","n":"component","or":"component","r":false,"t":"`$ANY`","index$":2},{"a":true,"ex":"My description","k":"query","n":"description","or":"description","r":false,"t":"`$STRING`","index$":3},{"a":true,"ex":"grep.be","k":"query","n":"label","or":"label","r":false,"t":"`$STRING`","index$":4},{"a":true,"ex":"Grep","k":"query","n":"origin","or":"origin","r":false,"t":"`$ANY`","index$":5},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":6},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":7},{"a":true,"ex":"unstable","k":"query","n":"suite","or":"suite","r":false,"t":"`$ANY`","index$":8},{"a":true,"ex":604800,"k":"query","n":"valid_time_duration_second","or":"valid_time_duration_second","r":false,"t":"`$ANY`","index$":9},{"a":true,"ex":"12","k":"query","n":"version","or":"version","r":false,"t":"`$ANY`","index$":10}]},"k":"http","m":"GET","o":"/api/v4/groups/{id}/-/debian_distributions","q":{"exist":["architecture","codename","component","description","group_id","label","origin","page","per_page","suite","valid_time_duration_second","version"]},"r":{"param":{"id":"group_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"-"},{"lit":"debian_distributions"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /api/v4/projects/{id}/debian_distributions","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"amd64","k":"query","n":"architecture","or":"architecture","r":false,"t":"`$ANY`","index$":0},{"a":true,"ex":"sid","k":"query","n":"codename","or":"codename","r":false,"t":"`$ANY`","index$":1},{"a":true,"ex":"main","k":"query","n":"component","or":"component","r":false,"t":"`$ANY`","index$":2},{"a":true,"ex":"My description","k":"query","n":"description","or":"description","r":false,"t":"`$STRING`","index$":3},{"a":true,"ex":"grep.be","k":"query","n":"label","or":"label","r":false,"t":"`$STRING`","index$":4},{"a":true,"ex":"Grep","k":"query","n":"origin","or":"origin","r":false,"t":"`$ANY`","index$":5},{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":6},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":7},{"a":true,"ex":"unstable","k":"query","n":"suite","or":"suite","r":false,"t":"`$ANY`","index$":8},{"a":true,"ex":604800,"k":"query","n":"valid_time_duration_second","or":"valid_time_duration_second","r":false,"t":"`$ANY`","index$":9},{"a":true,"ex":"12","k":"query","n":"version","or":"version","r":false,"t":"`$ANY`","index$":10}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/debian_distributions","q":{"exist":["architecture","codename","component","description","label","origin","page","per_page","project_id","suite","valid_time_duration_second","version"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"debian_distributions"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /api/v4/groups/{id}/-/debian_distributions/{codename}/key.asc","source":"swagger2","version":2},"g":{"params":[{"a":true,"ex":"sid","k":"param","n":"codename","or":"codename","r":true,"t":"`$ANY`","index$":0},{"a":true,"k":"param","n":"group_id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/api/v4/groups/{id}/-/debian_distributions/{codename}/key.asc","q":{"exist":["codename","group_id"]},"r":{"param":{"id":"group_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"-"},{"lit":"debian_distributions"},{"var":"codename"},{"lit":"key.asc"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"GET /api/v4/projects/{id}/debian_distributions/{codename}/key.asc","source":"swagger2","version":2},"g":{"params":[{"a":true,"ex":"sid","k":"param","n":"codename","or":"codename","r":true,"t":"`$ANY`","index$":0},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/debian_distributions/{codename}/key.asc","q":{"exist":["codename","project_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"debian_distributions"},{"var":"codename"},{"lit":"key.asc"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v4/groups/{id}/-/debian_distributions/{codename}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"group_id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"sid","k":"param","n":"id","or":"codename","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/api/v4/groups/{id}/-/debian_distributions/{codename}","q":{"exist":["group_id","id"]},"r":{"param":{"codename":"id","id":"group_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"-"},{"lit":"debian_distributions"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /api/v4/projects/{id}/debian_distributions/{codename}","source":"swagger2","version":2},"g":{"params":[{"a":true,"ex":"sid","k":"param","n":"id","or":"codename","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/debian_distributions/{codename}","q":{"exist":["id","project_id"]},"r":{"param":{"codename":"id","id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"debian_distributions"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /api/v4/groups/{id}/-/debian_distributions/{codename}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"group_id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":"sid","k":"param","n":"id","or":"codename","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"put_api_v4_groups_id_debian_distributions_codename","or":"put_api_v4_groups_id_debian_distributions_codename","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"PUT","o":"/api/v4/groups/{id}/-/debian_distributions/{codename}","q":{"exist":["group_id","id","put_api_v4_groups_id_debian_distributions_codename"]},"r":{"param":{"codename":"id","id":"group_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"-"},{"lit":"debian_distributions"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"PUT /api/v4/projects/{id}/debian_distributions/{codename}","source":"swagger2","version":2},"g":{"params":[{"a":true,"ex":"sid","k":"param","n":"id","or":"codename","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"put_api_v4_projects_id_debian_distributions_codename","or":"put_api_v4_projects_id_debian_distributions_codename","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"PUT","o":"/api/v4/projects/{id}/debian_distributions/{codename}","q":{"exist":["id","project_id","put_api_v4_projects_id_debian_distributions_codename"]},"r":{"param":{"codename":"id","id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"debian_distributions"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.group"],["$.main.kit.entity.project"],["$.main.kit.entity.group","$.main.kit.entity.debian_distribution"],["$.main.kit.entity.project","$.main.kit.entity.debian_distribution"]]},"key$":"api_entities_packages_debian_distribution","name__orig":"api_entities_packages_debian_distribution","Name":"ApiEntitiesPackagesDebianDistribution","name_":"api_entities_packages_debian_distribution","name-":"api-entities-packages-debian-distribution","NAME":"API_ENTITIES_PACKAGES_DEBIAN_DISTRIBUTION","index$":122}, {"active":true,"entity":"api_entities_packages_debian_distribution","key$":"BasicApiEntitiesPackagesDebianDistributionFlow","kind":"basic","name":"BasicApiEntitiesPackagesDebianDistributionFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"api_entities_packages_debian_distribution_ref01"},"m":{"codename":"codename01","group_id":"group01","project_id":"project01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"codename":"codename01","project_id":"project01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"api_entities_packages_debian_distribution_ref01"}}],"index$":1},{"a":true,"d":{"project_id":"project01"},"i":{"ref":"api_entities_packages_debian_distribution_ref01","srcdatavar":"api_entities_packages_debian_distribution_ref01_data","suffix":"_up0","textfield":"codename"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_packages_debian_distribution_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"api_entities_packages_debian_distribution_ref01","srcdatavar":"api_entities_packages_debian_distribution_ref01_data","suffix":"_dt0"},"m":{"id":"api_entities_packages_debian_distribution01","project_id":"project01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_packages_debian_distribution_ref01"}}],"index$":3}]}, 'ApiEntitiesPackagesDebianDistribution', {"POST /api/v4/groups/{id}/-/debian_distributions":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the group","type":"string","required":true,"index$":0},{"name":"postApiV4GroupsIdDebianDistributions","in":"body","required":true,"schema":{"type":"object","properties":{"codename":{"type":"string","description":"The Debian Codename","example":"sid"},"suite":{"type":"string","description":"The Debian Suite","example":"unstable"},"origin":{"type":"string","description":"The Debian Origin","example":"Grep"},"label":{"type":"string","description":"The Debian Label","example":"grep.be"},"version":{"type":"string","description":"The Debian Version","example":"12"},"description":{"type":"string","description":"The Debian Description","example":"My description"},"valid_time_duration_seconds":{"type":"integer","format":"int32","description":"The duration before the Release file should be considered expired by the client","example":604800},"components":{"type":"array","description":"The list of Components","example":"main","items":{"type":"string"}},"architectures":{"type":"array","description":"The list of Architectures","example":"amd64","items":{"type":"string"}}},"required":["codename"],"description":"Create a Debian Distribution","x-ref":"#/definitions/postApiV4GroupsIdDebianDistributions"},"index$":1}]},"POST /api/v4/projects/{id}/debian_distributions":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"name":"postApiV4ProjectsIdDebianDistributions","in":"body","required":true,"schema":{"type":"object","properties":{"codename":{"type":"string","description":"The Debian Codename","example":"sid"},"suite":{"type":"string","description":"The Debian Suite","example":"unstable"},"origin":{"type":"string","description":"The Debian Origin","example":"Grep"},"label":{"type":"string","description":"The Debian Label","example":"grep.be"},"version":{"type":"string","description":"The Debian Version","example":"12"},"description":{"type":"string","description":"The Debian Description","example":"My description"},"valid_time_duration_seconds":{"type":"integer","format":"int32","description":"The duration before the Release file should be considered expired by the client","example":604800},"components":{"type":"array","description":"The list of Components","example":"main","items":{"type":"string"}},"architectures":{"type":"array","description":"The list of Architectures","example":"amd64","items":{"type":"string"}}},"required":["codename"],"description":"Create a Debian Distribution","x-ref":"#/definitions/postApiV4ProjectsIdDebianDistributions"},"index$":1}]},"GET /api/v4/groups/{id}/-/debian_distributions":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the group","type":"string","required":true,"index$":0},{"in":"query","name":"page","description":"Current page number","type":"integer","format":"int32","default":1,"required":false,"example":1,"index$":1},{"in":"query","name":"per_page","description":"Number of items per page","type":"integer","format":"int32","default":20,"required":false,"example":20,"index$":2},{"in":"query","name":"codename","description":"The Debian Codename","type":"string","required":false,"example":"sid","index$":3},{"in":"query","name":"suite","description":"The Debian Suite","type":"string","required":false,"example":"unstable","index$":4},{"in":"query","name":"origin","description":"The Debian Origin","type":"string","required":false,"example":"Grep","index$":5},{"in":"query","name":"label","description":"The Debian Label","type":"string","required":false,"example":"grep.be","index$":6},{"in":"query","name":"version","description":"The Debian Version","type":"string","required":false,"example":"12","index$":7},{"in":"query","name":"description","description":"The Debian Description","type":"string","required":false,"example":"My description","index$":8},{"in":"query","name":"valid_time_duration_seconds","description":"The duration before the Release file should be considered expired by the client","type":"integer","format":"int32","required":false,"example":604800,"index$":9},{"in":"query","name":"components","description":"The list of Components","type":"array","items":{"type":"string"},"required":false,"example":"main","index$":10},{"in":"query","name":"architectures","description":"The list of Architectures","type":"array","items":{"type":"string"},"required":false,"example":"amd64","index$":11}]},"GET /api/v4/projects/{id}/debian_distributions":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"in":"query","name":"page","description":"Current page number","type":"integer","format":"int32","default":1,"required":false,"example":1,"index$":1},{"in":"query","name":"per_page","description":"Number of items per page","type":"integer","format":"int32","default":20,"required":false,"example":20,"index$":2},{"in":"query","name":"codename","description":"The Debian Codename","type":"string","required":false,"example":"sid","index$":3},{"in":"query","name":"suite","description":"The Debian Suite","type":"string","required":false,"example":"unstable","index$":4},{"in":"query","name":"origin","description":"The Debian Origin","type":"string","required":false,"example":"Grep","index$":5},{"in":"query","name":"label","description":"The Debian Label","type":"string","required":false,"example":"grep.be","index$":6},{"in":"query","name":"version","description":"The Debian Version","type":"string","required":false,"example":"12","index$":7},{"in":"query","name":"description","description":"The Debian Description","type":"string","required":false,"example":"My description","index$":8},{"in":"query","name":"valid_time_duration_seconds","description":"The duration before the Release file should be considered expired by the client","type":"integer","format":"int32","required":false,"example":604800,"index$":9},{"in":"query","name":"components","description":"The list of Components","type":"array","items":{"type":"string"},"required":false,"example":"main","index$":10},{"in":"query","name":"architectures","description":"The list of Architectures","type":"array","items":{"type":"string"},"required":false,"example":"amd64","index$":11}]},"GET /api/v4/groups/{id}/-/debian_distributions/{codename}/key.asc":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the group","type":"string","required":true,"index$":0},{"in":"path","name":"codename","description":"The Debian Codename","type":"string","required":true,"example":"sid","index$":1}]},"GET /api/v4/projects/{id}/debian_distributions/{codename}/key.asc":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"in":"path","name":"codename","description":"The Debian Codename","type":"string","required":true,"example":"sid","index$":1}]},"GET /api/v4/groups/{id}/-/debian_distributions/{codename}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the group","type":"string","required":true,"index$":0},{"in":"path","name":"codename","description":"The Debian Codename","type":"string","required":true,"example":"sid","index$":1}]},"GET /api/v4/projects/{id}/debian_distributions/{codename}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"in":"path","name":"codename","description":"The Debian Codename","type":"string","required":true,"example":"sid","index$":1}]},"PUT /api/v4/groups/{id}/-/debian_distributions/{codename}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the group","type":"string","required":true,"index$":0},{"in":"path","name":"codename","description":"The Debian Codename","type":"string","required":true,"example":"sid","index$":1},{"name":"putApiV4GroupsIdDebianDistributionsCodename","in":"body","required":true,"schema":{"type":"object","properties":{"suite":{"type":"string","description":"The Debian Suite","example":"unstable"},"origin":{"type":"string","description":"The Debian Origin","example":"Grep"},"label":{"type":"string","description":"The Debian Label","example":"grep.be"},"version":{"type":"string","description":"The Debian Version","example":"12"},"description":{"type":"string","description":"The Debian Description","example":"My description"},"valid_time_duration_seconds":{"type":"integer","format":"int32","description":"The duration before the Release file should be considered expired by the client","example":604800},"components":{"type":"array","description":"The list of Components","example":"main","items":{"type":"string"}},"architectures":{"type":"array","description":"The list of Architectures","example":"amd64","items":{"type":"string"}}},"description":"Update a Debian Distribution","x-ref":"#/definitions/putApiV4GroupsIdDebianDistributionsCodename"},"index$":2}]},"PUT /api/v4/projects/{id}/debian_distributions/{codename}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"in":"path","name":"codename","description":"The Debian Codename","type":"string","required":true,"example":"sid","index$":1},{"name":"putApiV4ProjectsIdDebianDistributionsCodename","in":"body","required":true,"schema":{"type":"object","properties":{"suite":{"type":"string","description":"The Debian Suite","example":"unstable"},"origin":{"type":"string","description":"The Debian Origin","example":"Grep"},"label":{"type":"string","description":"The Debian Label","example":"grep.be"},"version":{"type":"string","description":"The Debian Version","example":"12"},"description":{"type":"string","description":"The Debian Description","example":"My description"},"valid_time_duration_seconds":{"type":"integer","format":"int32","description":"The duration before the Release file should be considered expired by the client","example":604800},"components":{"type":"array","description":"The list of Components","example":"main","items":{"type":"string"}},"architectures":{"type":"array","description":"The list of Architectures","example":"amd64","items":{"type":"string"}}},"description":"Update a Debian Distribution","x-ref":"#/definitions/putApiV4ProjectsIdDebianDistributionsCodename"},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const api_entities_packages_debian_distribution_ref01_ent = client.ApiEntitiesPackagesDebianDistribution()
    let api_entities_packages_debian_distribution_ref01_data = setup.data.new.api_entities_packages_debian_distribution['api_entities_packages_debian_distribution_ref01']
    api_entities_packages_debian_distribution_ref01_data['codename'] = setup.idmap['codename01']
    api_entities_packages_debian_distribution_ref01_data['group_id'] = setup.idmap['group01']
    api_entities_packages_debian_distribution_ref01_data['project_id'] = setup.idmap['project01']

    api_entities_packages_debian_distribution_ref01_data = (await api_entities_packages_debian_distribution_ref01_ent.create(api_entities_packages_debian_distribution_ref01_data)).data()
    assert(null != api_entities_packages_debian_distribution_ref01_data.id)


    // LIST
    const api_entities_packages_debian_distribution_ref01_match: any = {}
    api_entities_packages_debian_distribution_ref01_match['codename'] = setup.idmap['codename01']
    api_entities_packages_debian_distribution_ref01_match['project_id'] = setup.idmap['project01']

    const api_entities_packages_debian_distribution_ref01_list = (await api_entities_packages_debian_distribution_ref01_ent.list(api_entities_packages_debian_distribution_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(api_entities_packages_debian_distribution_ref01_list, { id: api_entities_packages_debian_distribution_ref01_data.id })))


    // UPDATE
    const api_entities_packages_debian_distribution_ref01_data_up0: any = {}
    api_entities_packages_debian_distribution_ref01_data_up0.id = api_entities_packages_debian_distribution_ref01_data.id
    api_entities_packages_debian_distribution_ref01_data_up0 ['project_id'] = setup.idmap['project_id']

    const api_entities_packages_debian_distribution_ref01_markdef_up0 = { name: 'codename', value: 'Mark01-api_entities_packages_debian_distribution_ref01_' + setup.now }
    ;(api_entities_packages_debian_distribution_ref01_data_up0 as any)[api_entities_packages_debian_distribution_ref01_markdef_up0.name] = api_entities_packages_debian_distribution_ref01_markdef_up0.value

    const api_entities_packages_debian_distribution_ref01_resdata_up0 = (await api_entities_packages_debian_distribution_ref01_ent.update(api_entities_packages_debian_distribution_ref01_data_up0)).data()
    assert(api_entities_packages_debian_distribution_ref01_resdata_up0.id === api_entities_packages_debian_distribution_ref01_data_up0.id)

    assert((api_entities_packages_debian_distribution_ref01_resdata_up0 as any)[api_entities_packages_debian_distribution_ref01_markdef_up0.name] === api_entities_packages_debian_distribution_ref01_markdef_up0.value)


    // LOAD
    const api_entities_packages_debian_distribution_ref01_match_dt0: any = {}
    api_entities_packages_debian_distribution_ref01_match_dt0.id = api_entities_packages_debian_distribution_ref01_data.id
    const api_entities_packages_debian_distribution_ref01_data_dt0 = (await api_entities_packages_debian_distribution_ref01_ent.load(api_entities_packages_debian_distribution_ref01_match_dt0)).data()
    assert(api_entities_packages_debian_distribution_ref01_data_dt0.id === api_entities_packages_debian_distribution_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_packages_debian_distribution/ApiEntitiesPackagesDebianDistributionTestData.json')

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
    ['api_entities_packages_debian_distribution01','api_entities_packages_debian_distribution02','api_entities_packages_debian_distribution03','group01','group02','group03','project01','project02','project03','debian_distribution01','debian_distribution02','debian_distribution03','codename01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_PACKAGES_DEBIAN_DISTRIBUTION_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_PACKAGES_DEBIAN_DISTRIBUTION_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_PACKAGES_DEBIAN_DISTRIBUTION_ENTID']
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
  
