

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


describe('NugetPackageEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.NugetPackage()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['list', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'nuget_package.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"authors":{"a":true,"h":"Authors","n":"authors","r":false,"t":"`$STRING`","key$":"authors","index$":0},"count":{"a":true,"fo":"int32","h":"Count","n":"count","r":false,"t":"`$INTEGER`","key$":"count","index$":1},"dependencyGroups":{"a":true,"h":"Dependency Groups","n":"dependencyGroups","r":false,"t":"`$ARRAY`","key$":"dependencyGroups","index$":2},"description":{"a":true,"h":"Description","n":"description","r":false,"t":"`$STRING`","key$":"description","index$":3},"iconUrl":{"a":true,"h":"Icon Url","n":"iconUrl","r":false,"t":"`$STRING`","key$":"iconUrl","index$":4},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":5},"items":{"a":true,"h":"Items","n":"items","r":false,"t":"`$ARRAY`","key$":"items","index$":6},"licenseUrl":{"a":true,"h":"License Url","n":"licenseUrl","r":false,"t":"`$STRING`","key$":"licenseUrl","index$":7},"lower":{"a":true,"h":"Lower","n":"lower","r":false,"t":"`$STRING`","key$":"lower","index$":8},"packageContent":{"a":true,"h":"Package Content","n":"packageContent","r":false,"t":"`$STRING`","key$":"packageContent","index$":9},"projectUrl":{"a":true,"h":"Project Url","n":"projectUrl","r":false,"t":"`$STRING`","key$":"projectUrl","index$":10},"published":{"a":true,"h":"Published","n":"published","r":false,"t":"`$STRING`","key$":"published","index$":11},"summary":{"a":true,"h":"Summary","n":"summary","r":false,"t":"`$STRING`","key$":"summary","index$":12},"tags":{"a":true,"h":"Tags","n":"tags","r":false,"t":"`$STRING`","key$":"tags","index$":13},"upper":{"a":true,"h":"Upper","n":"upper","r":false,"t":"`$STRING`","key$":"upper","index$":14},"version":{"a":true,"h":"Version","n":"version","r":false,"t":"`$STRING`","key$":"version","index$":15}},"id":{"field":"id","name":"id"},"name":"nuget_package","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/v4/groups/{id}/-/packages/nuget/metadata/*package_name/index","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"group_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"MyNuGetPkg","k":"query","n":"package_name","or":"package_name","r":true,"t":"`$ANY`","index$":0}]},"k":"http","m":"GET","o":"/api/v4/groups/{id}/-/packages/nuget/metadata/*package_name/index","q":{"exist":["group_id","package_name"]},"r":{"param":{"id":"group_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"-"},{"lit":"packages"},{"lit":"nuget"},{"lit":"metadata"},{"lit":"*package_name"},{"lit":"index"}],"t":{"req":"`reqdata`","res":"`body.items`"},"index$":0},{"a":true,"co":{"id":"GET /api/v4/projects/{id}/packages/nuget/metadata/*package_name/index","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"MyNuGetPkg","k":"query","n":"package_name","or":"package_name","r":true,"t":"`$ANY`","index$":0}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/packages/nuget/metadata/*package_name/index","q":{"exist":["package_name","project_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"packages"},{"lit":"nuget"},{"lit":"metadata"},{"lit":"*package_name"},{"lit":"index"}],"t":{"req":"`reqdata`","res":"`body.items`"},"index$":1}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v4/groups/{id}/-/packages/nuget/symbolfiles/*file_name/*signature/*same_file_name","source":"swagger2","version":2},"g":{"header":[{"a":true,"k":"header","n":"symbolchecksum","or":"symbolchecksum","r":true,"t":"`$ANY`","index$":0}],"params":[{"a":true,"k":"param","n":"group_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"mynugetpkg.pdb","k":"query","n":"file_name","or":"file_name","r":true,"t":"`$ANY`","index$":0},{"a":true,"k":"query","n":"same_file_name","or":"same_file_name","r":true,"t":"`$ANY`","index$":1},{"a":true,"ex":"k813f89485474661234z7109cve5709eFFFFFFFF","k":"query","n":"signature","or":"signature","r":true,"t":"`$ANY`","index$":2}]},"k":"http","m":"GET","o":"/api/v4/groups/{id}/-/packages/nuget/symbolfiles/*file_name/*signature/*same_file_name","q":{"exist":["file_name","group_id","same_file_name","signature","symbolchecksum"]},"r":{"param":{"id":"group_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"-"},{"lit":"packages"},{"lit":"nuget"},{"lit":"symbolfiles"},{"lit":"*file_name"},{"lit":"*signature"},{"lit":"*same_file_name"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /api/v4/projects/{id}/packages/nuget/symbolfiles/*file_name/*signature/*same_file_name","source":"swagger2","version":2},"g":{"header":[{"a":true,"k":"header","n":"symbolchecksum","or":"symbolchecksum","r":true,"t":"`$ANY`","index$":0}],"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"mynugetpkg.pdb","k":"query","n":"file_name","or":"file_name","r":true,"t":"`$ANY`","index$":0},{"a":true,"k":"query","n":"same_file_name","or":"same_file_name","r":true,"t":"`$ANY`","index$":1},{"a":true,"ex":"k813f89485474661234z7109cve5709eFFFFFFFF","k":"query","n":"signature","or":"signature","r":true,"t":"`$ANY`","index$":2}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/packages/nuget/symbolfiles/*file_name/*signature/*same_file_name","q":{"exist":["file_name","project_id","same_file_name","signature","symbolchecksum"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"packages"},{"lit":"nuget"},{"lit":"symbolfiles"},{"lit":"*file_name"},{"lit":"*signature"},{"lit":"*same_file_name"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"GET /api/v4/projects/{id}/packages/nuget/download/*package_name/*package_version/*package_filename","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"mynugetpkg.1.3.0.17.nupkg","k":"query","n":"package_filename","or":"package_filename","r":true,"t":"`$ANY`","index$":0},{"a":true,"ex":"mynugetpkg.1.3.0.17.nupkg","k":"query","n":"package_name","or":"package_name","r":true,"t":"`$ANY`","index$":1},{"a":true,"ex":"1.3.0.17","k":"query","n":"package_version","or":"package_version","r":true,"t":"`$ANY`","index$":2}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/packages/nuget/download/*package_name/*package_version/*package_filename","q":{"exist":["package_filename","package_name","package_version","project_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"packages"},{"lit":"nuget"},{"lit":"download"},{"lit":"*package_name"},{"lit":"*package_version"},{"lit":"*package_filename"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"GET /api/v4/groups/{id}/-/packages/nuget/metadata/*package_name/*package_version","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"group_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"MyNuGetPkg","k":"query","n":"package_name","or":"package_name","r":true,"t":"`$ANY`","index$":0},{"a":true,"ex":"1.0.0","k":"query","n":"package_version","or":"package_version","r":true,"t":"`$ANY`","index$":1}]},"k":"http","m":"GET","o":"/api/v4/groups/{id}/-/packages/nuget/metadata/*package_name/*package_version","q":{"exist":["group_id","package_name","package_version"]},"r":{"param":{"id":"group_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"-"},{"lit":"packages"},{"lit":"nuget"},{"lit":"metadata"},{"lit":"*package_name"},{"lit":"*package_version"}],"t":{"req":"`reqdata`","res":"`body.catalogEntry`"},"index$":3},{"a":true,"co":{"id":"GET /api/v4/projects/{id}/packages/nuget/metadata/*package_name/*package_version","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"MyNuGetPkg","k":"query","n":"package_name","or":"package_name","r":true,"t":"`$ANY`","index$":0},{"a":true,"ex":"1.0.0","k":"query","n":"package_version","or":"package_version","r":true,"t":"`$ANY`","index$":1}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/packages/nuget/metadata/*package_name/*package_version","q":{"exist":["package_name","package_version","project_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"packages"},{"lit":"nuget"},{"lit":"metadata"},{"lit":"*package_name"},{"lit":"*package_version"}],"t":{"req":"`reqdata`","res":"`body.catalogEntry`"},"index$":4},{"a":true,"co":{"id":"GET /api/v4/projects/{project_id}/packages/nuget/v2/Packages\\(Id='*package_name',Version='*package_version'\\)","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"project_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"mynugetpkg","k":"query","n":"package_name","or":"package_name","r":true,"t":"`$ANY`","index$":0},{"a":true,"ex":"1.3.0.17","k":"query","n":"package_version","or":"package_version","r":true,"t":"`$ANY`","index$":1}]},"k":"http","m":"GET","o":"/api/v4/projects/{project_id}/packages/nuget/v2/Packages\\(Id='*package_name',Version='*package_version'\\)","q":{"exist":["package_name","package_version","project_id"]},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"packages"},{"lit":"nuget"},{"lit":"v2"},{"lit":"Packages\\(Id='*package_name',Version='*package_version'\\)"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":5},{"a":true,"co":{"id":"GET /api/v4/projects/{project_id}/packages/nuget/v2/Packages\\(\\)","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"project_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"mynugetpkg","k":"query","n":"$filter","or":"$filter","r":true,"t":"`$ANY`","index$":0}]},"k":"http","m":"GET","o":"/api/v4/projects/{project_id}/packages/nuget/v2/Packages\\(\\)","q":{"exist":["$filter","project_id"]},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"packages"},{"lit":"nuget"},{"lit":"v2"},{"lit":"Packages\\(\\)"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":6},{"a":true,"co":{"id":"GET /api/v4/projects/{project_id}/packages/nuget/v2/FindPackagesById\\(\\)","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"project_id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"mynugetpkg","k":"query","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/v4/projects/{project_id}/packages/nuget/v2/FindPackagesById\\(\\)","q":{"exist":["id","project_id"]},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"packages"},{"lit":"nuget"},{"lit":"v2"},{"lit":"FindPackagesById\\(\\)"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":7},{"a":true,"co":{"id":"GET /api/v4/groups/{id}/-/packages/nuget/v2","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"group_id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/v4/groups/{id}/-/packages/nuget/v2","q":{"exist":["group_id"]},"r":{"param":{"id":"group_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"-"},{"lit":"packages"},{"lit":"nuget"},{"lit":"v2"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":8},{"a":true,"co":{"id":"GET /api/v4/groups/{id}/-/packages/nuget/v2/$metadata","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"group_id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/v4/groups/{id}/-/packages/nuget/v2/$metadata","q":{"exist":["group_id"]},"r":{"param":{"id":"group_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"-"},{"lit":"packages"},{"lit":"nuget"},{"lit":"v2"},{"lit":"$metadata"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":9},{"a":true,"co":{"id":"GET /api/v4/projects/{id}/packages/nuget/v2","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/packages/nuget/v2","q":{"exist":["project_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"packages"},{"lit":"nuget"},{"lit":"v2"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /api/v4/projects/{id}/packages/nuget/v2/$metadata","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/packages/nuget/v2/$metadata","q":{"exist":["project_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"packages"},{"lit":"nuget"},{"lit":"v2"},{"lit":"$metadata"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":11}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /api/v4/projects/{id}/packages/nuget/*package_name/*package_version","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":"mynugetpkg","k":"query","n":"package_name","or":"package_name","r":true,"t":"`$ANY`","index$":0},{"a":true,"ex":"1.0.1","k":"query","n":"package_version","or":"package_version","r":true,"t":"`$ANY`","index$":1}]},"k":"http","m":"DELETE","o":"/api/v4/projects/{id}/packages/nuget/*package_name/*package_version","q":{"exist":["package_name","package_version","project_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"packages"},{"lit":"nuget"},{"lit":"*package_name"},{"lit":"*package_version"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /api/v4/projects/{id}/packages/nuget/symbolpackage","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"put_api_v4_projects_id_packages_nuget_symbolpackage","or":"put_api_v4_projects_id_packages_nuget_symbolpackage","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"PUT","o":"/api/v4/projects/{id}/packages/nuget/symbolpackage","q":{"exist":["project_id","put_api_v4_projects_id_packages_nuget_symbolpackage"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"packages"},{"lit":"nuget"},{"lit":"symbolpackage"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"PUT /api/v4/projects/{id}/packages/nuget/v2","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"put_api_v4_projects_id_packages_nuget_v2","or":"put_api_v4_projects_id_packages_nuget_v2","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"PUT","o":"/api/v4/projects/{id}/packages/nuget/v2","q":{"exist":["project_id","put_api_v4_projects_id_packages_nuget_v2"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"packages"},{"lit":"nuget"},{"lit":"v2"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"PUT /api/v4/projects/{id}/packages/nuget/authorize","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/api/v4/projects/{id}/packages/nuget/authorize","q":{"exist":["project_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"packages"},{"lit":"nuget"},{"lit":"authorize"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"PUT /api/v4/projects/{id}/packages/nuget/symbolpackage/authorize","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/api/v4/projects/{id}/packages/nuget/symbolpackage/authorize","q":{"exist":["project_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"packages"},{"lit":"nuget"},{"lit":"symbolpackage"},{"lit":"authorize"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3},{"a":true,"co":{"id":"PUT /api/v4/projects/{id}/packages/nuget/v2/authorize","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"PUT","o":"/api/v4/projects/{id}/packages/nuget/v2/authorize","q":{"exist":["project_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"packages"},{"lit":"nuget"},{"lit":"v2"},{"lit":"authorize"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":4}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.group"],["$.main.kit.entity.project"]]},"key$":"nuget_package","name__orig":"nuget_package","Name":"NugetPackage","name_":"nuget_package","name-":"nuget-package","NAME":"NUGET_PACKAGE","index$":233}, {"active":true,"entity":"nuget_package","key$":"BasicNugetPackageFlow","kind":"basic","name":"BasicNugetPackageFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"project_id":"project01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"nuget_package_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"nuget_package_ref01","srcdatavar":"nuget_package_ref01_data","suffix":"_up0","textfield":"authors"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-nuget_package_ref01"}}],"v":[],"index$":1},{"a":true,"d":{},"i":{"ref":"nuget_package_ref01","srcdatavar":"nuget_package_ref01_data","suffix":"_dt0"},"m":{"id":"nuget_package01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-nuget_package_ref01"}}],"index$":2}]}, 'NugetPackage', {"GET /api/v4/groups/{id}/-/packages/nuget/metadata/*package_name/index":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The group ID or full group path.","type":"integer","format":"int32","required":true,"index$":0},{"in":"query","name":"package_name","description":"The NuGet package name","type":"string","required":true,"example":"MyNuGetPkg","index$":1}]},"GET /api/v4/projects/{id}/packages/nuget/metadata/*package_name/index":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"in":"query","name":"package_name","description":"The NuGet package name","type":"string","required":true,"example":"MyNuGetPkg","index$":1}]},"GET /api/v4/groups/{id}/-/packages/nuget/symbolfiles/*file_name/*signature/*same_file_name":{"protocol":"http","parameters":[{"in":"header","name":"Symbolchecksum","type":"string","required":true,"index$":0},{"in":"path","name":"id","description":"The group ID or full group path.","type":"integer","format":"int32","required":true,"index$":1},{"in":"query","name":"file_name","description":"The symbol file name","type":"string","required":true,"example":"mynugetpkg.pdb","index$":2},{"in":"query","name":"signature","description":"The symbol file signature","type":"string","required":true,"example":"k813f89485474661234z7109cve5709eFFFFFFFF","index$":3},{"in":"query","name":"same_file_name","type":"string","required":true,"index$":4}]},"GET /api/v4/projects/{id}/packages/nuget/symbolfiles/*file_name/*signature/*same_file_name":{"protocol":"http","parameters":[{"in":"header","name":"Symbolchecksum","type":"string","required":true,"index$":0},{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":1},{"in":"query","name":"file_name","description":"The symbol file name","type":"string","required":true,"example":"mynugetpkg.pdb","index$":2},{"in":"query","name":"signature","description":"The symbol file signature","type":"string","required":true,"example":"k813f89485474661234z7109cve5709eFFFFFFFF","index$":3},{"in":"query","name":"same_file_name","type":"string","required":true,"index$":4}]},"GET /api/v4/projects/{id}/packages/nuget/download/*package_name/*package_version/*package_filename":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"in":"query","name":"package_name","description":"The NuGet package name","type":"string","required":true,"example":"mynugetpkg.1.3.0.17.nupkg","index$":1},{"in":"query","name":"package_version","description":"The NuGet package version","type":"string","required":true,"example":"1.3.0.17","index$":2},{"in":"query","name":"package_filename","description":"The NuGet package filename","type":"string","required":true,"example":"mynugetpkg.1.3.0.17.nupkg","index$":3}]},"GET /api/v4/groups/{id}/-/packages/nuget/metadata/*package_name/*package_version":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The group ID or full group path.","type":"integer","format":"int32","required":true,"index$":0},{"in":"query","name":"package_name","description":"The NuGet package name","type":"string","required":true,"example":"MyNuGetPkg","index$":1},{"in":"query","name":"package_version","description":"The NuGet package version","type":"string","required":true,"example":"1.0.0","index$":2}]},"GET /api/v4/projects/{id}/packages/nuget/metadata/*package_name/*package_version":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"in":"query","name":"package_name","description":"The NuGet package name","type":"string","required":true,"example":"MyNuGetPkg","index$":1},{"in":"query","name":"package_version","description":"The NuGet package version","type":"string","required":true,"example":"1.0.0","index$":2}]},"GET /api/v4/projects/{project_id}/packages/nuget/v2/Packages\\(Id='*package_name',Version='*package_version'\\)":{"protocol":"http","parameters":[{"in":"path","name":"project_id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"in":"query","name":"package_name","description":"The NuGet package name","type":"string","required":true,"example":"mynugetpkg","index$":1},{"in":"query","name":"package_version","description":"The NuGet package version","type":"string","required":true,"example":"1.3.0.17","index$":2}]},"GET /api/v4/projects/{project_id}/packages/nuget/v2/Packages\\(\\)":{"protocol":"http","parameters":[{"in":"path","name":"project_id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"in":"query","name":"$filter","description":"The NuGet package name","type":"string","required":true,"example":"mynugetpkg","index$":1}]},"GET /api/v4/projects/{project_id}/packages/nuget/v2/FindPackagesById\\(\\)":{"protocol":"http","parameters":[{"in":"path","name":"project_id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"in":"query","name":"id","description":"The NuGet package name","type":"string","required":true,"example":"mynugetpkg","index$":1}]},"GET /api/v4/groups/{id}/-/packages/nuget/v2":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The group ID or full group path.","type":"integer","format":"int32","required":true,"index$":0}]},"GET /api/v4/groups/{id}/-/packages/nuget/v2/$metadata":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The group ID or full group path.","type":"integer","format":"int32","required":true,"index$":0}]},"GET /api/v4/projects/{id}/packages/nuget/v2":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0}]},"GET /api/v4/projects/{id}/packages/nuget/v2/$metadata":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0}]},"DELETE /api/v4/projects/{id}/packages/nuget/*package_name/*package_version":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"in":"query","name":"package_name","description":"The NuGet package name","type":"string","required":true,"example":"mynugetpkg","index$":1},{"in":"query","name":"package_version","description":"The NuGet package version","type":"string","required":true,"example":"1.0.1","index$":2}]},"PUT /api/v4/projects/{id}/packages/nuget/symbolpackage":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"name":"putApiV4ProjectsIdPackagesNugetSymbolpackage","in":"body","required":true,"schema":{"type":"object","properties":{"package":{"type":"file","description":"The package file to be published (generated by Multipart middleware)"}},"required":["package"],"description":"The NuGet Symbol Package Publish endpoint","x-ref":"#/definitions/putApiV4ProjectsIdPackagesNugetSymbolpackage"},"index$":1}]},"PUT /api/v4/projects/{id}/packages/nuget/v2":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0},{"name":"putApiV4ProjectsIdPackagesNugetV2","in":"body","required":true,"schema":{"type":"object","properties":{"package":{"type":"file","description":"The package file to be published (generated by Multipart middleware)"}},"required":["package"],"description":"The NuGet V2 Feed Package Publish endpoint","x-ref":"#/definitions/putApiV4ProjectsIdPackagesNugetV2"},"index$":1}]},"PUT /api/v4/projects/{id}/packages/nuget/authorize":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0}]},"PUT /api/v4/projects/{id}/packages/nuget/symbolpackage/authorize":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0}]},"PUT /api/v4/projects/{id}/packages/nuget/v2/authorize":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let nuget_package_ref01_data = Object.values(setup.data.existing.nuget_package)[0] as any

    // LIST
    const nuget_package_ref01_ent = client.NugetPackage()
    const nuget_package_ref01_match: any = {}
    nuget_package_ref01_match['project_id'] = setup.idmap['project01']

    const nuget_package_ref01_list = (await nuget_package_ref01_ent.list(nuget_package_ref01_match)).map((e: any) => e.data())


    // UPDATE
    const nuget_package_ref01_data_up0: any = {}
    nuget_package_ref01_data_up0.id = nuget_package_ref01_data.id

    const nuget_package_ref01_markdef_up0 = { name: 'authors', value: 'Mark01-nuget_package_ref01_' + setup.now }
    ;(nuget_package_ref01_data_up0 as any)[nuget_package_ref01_markdef_up0.name] = nuget_package_ref01_markdef_up0.value

    const nuget_package_ref01_resdata_up0 = (await nuget_package_ref01_ent.update(nuget_package_ref01_data_up0)).data()
    assert(nuget_package_ref01_resdata_up0.id === nuget_package_ref01_data_up0.id)

    assert((nuget_package_ref01_resdata_up0 as any)[nuget_package_ref01_markdef_up0.name] === nuget_package_ref01_markdef_up0.value)


    // LOAD
    const nuget_package_ref01_match_dt0: any = {}
    nuget_package_ref01_match_dt0.id = nuget_package_ref01_data.id
    const nuget_package_ref01_data_dt0 = (await nuget_package_ref01_ent.load(nuget_package_ref01_match_dt0)).data()
    assert(nuget_package_ref01_data_dt0.id === nuget_package_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/nuget_package/NugetPackageTestData.json')

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
    ['nuget_package01','nuget_package02','nuget_package03','group01','group02','group03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_NUGET_PACKAGE_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_NUGET_PACKAGE_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_NUGET_PACKAGE_ENTID']
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
  
