

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


describe('NpmPackageEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.NpmPackage()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'npm_package.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[],"name":"npm_package","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"group_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST /api/v4/groups/{id}/-/packages/npm/-/npm/v1/security/advisories/bulk","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4GroupsIdPackagesNpmNpmV1SecurityAdvisoriesBulk\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the group\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Ok\"},\"307\":{\"description\":\"Temporary Redirect\"},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/groups/{id}/-/packages/npm/-/npm/v1/security/advisories/bulk","rename":{"param":{"id":"group_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"-"},{"lit":"packages"},{"lit":"npm"},{"lit":"-"},{"lit":"npm"},{"lit":"v1"},{"lit":"security"},{"lit":"advisories"},{"lit":"bulk"}],"select":{"exist":["group_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"group_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST /api/v4/groups/{id}/-/packages/npm/-/npm/v1/security/audits/quick","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4GroupsIdPackagesNpmNpmV1SecurityAuditsQuick\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the group\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Ok\"},\"307\":{\"description\":\"Temporary Redirect\"},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/groups/{id}/-/packages/npm/-/npm/v1/security/audits/quick","rename":{"param":{"id":"group_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"-"},{"lit":"packages"},{"lit":"npm"},{"lit":"-"},{"lit":"npm"},{"lit":"v1"},{"lit":"security"},{"lit":"audits"},{"lit":"quick"}],"select":{"exist":["group_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST /api/v4/projects/{id}/packages/npm/-/npm/v1/security/advisories/bulk","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4ProjectsIdPackagesNpmNpmV1SecurityAdvisoriesBulk\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Ok\"},\"307\":{\"description\":\"Temporary Redirect\"},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/projects/{id}/packages/npm/-/npm/v1/security/advisories/bulk","rename":{"param":{"id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"packages"},{"lit":"npm"},{"lit":"-"},{"lit":"npm"},{"lit":"v1"},{"lit":"security"},{"lit":"advisories"},{"lit":"bulk"}],"select":{"exist":["project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":2},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST /api/v4/projects/{id}/packages/npm/-/npm/v1/security/audits/quick","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4ProjectsIdPackagesNpmNpmV1SecurityAuditsQuick\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Ok\"},\"307\":{\"description\":\"Temporary Redirect\"},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/projects/{id}/packages/npm/-/npm/v1/security/audits/quick","rename":{"param":{"id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"packages"},{"lit":"npm"},{"lit":"-"},{"lit":"npm"},{"lit":"v1"},{"lit":"security"},{"lit":"audits"},{"lit":"quick"}],"select":{"exist":["project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":3},{"active":true,"args":{},"contract":{"id":"POST /api/v4/packages/npm/-/npm/v1/security/advisories/bulk","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4PackagesNpmNpmV1SecurityAdvisoriesBulk\",\"parameters\":[],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Ok\"},\"307\":{\"description\":\"Temporary Redirect\"},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/packages/npm/-/npm/v1/security/advisories/bulk","segments":[{"lit":"api"},{"lit":"v4"},{"lit":"packages"},{"lit":"npm"},{"lit":"-"},{"lit":"npm"},{"lit":"v1"},{"lit":"security"},{"lit":"advisories"},{"lit":"bulk"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{},"contract":{"id":"POST /api/v4/packages/npm/-/npm/v1/security/audits/quick","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4PackagesNpmNpmV1SecurityAuditsQuick\",\"parameters\":[],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Ok\"},\"307\":{\"description\":\"Temporary Redirect\"},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/packages/npm/-/npm/v1/security/audits/quick","segments":[{"lit":"api"},{"lit":"v4"},{"lit":"packages"},{"lit":"npm"},{"lit":"-"},{"lit":"npm"},{"lit":"v1"},{"lit":"security"},{"lit":"audits"},{"lit":"quick"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":5}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"file_name","orig":"file_name","reqd":true,"type":"`$ANY`","index$":0},{"active":true,"kind":"query","name":"package_name","orig":"package_name","reqd":true,"type":"`$ANY`","index$":1}]},"contract":{"id":"GET /api/v4/projects/{id}/packages/npm/*package_name/-/*file_name","json":"{\"operationId\":\"getApiV4ProjectsIdPackagesNpm*packageName-*fileName\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package name\",\"in\":\"query\",\"name\":\"package_name\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package file name\",\"in\":\"query\",\"name\":\"file_name\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Download the NPM tarball\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/packages/npm/*package_name/-/*file_name","rename":{"param":{"id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"packages"},{"lit":"npm"},{"lit":"*package_name"},{"lit":"-"},{"lit":"*file_name"}],"select":{"exist":["file_name","package_name","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"group_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"tag","orig":"tag","reqd":true,"type":"`$ANY`","index$":1}],"query":[{"active":true,"kind":"query","name":"package_name","orig":"package_name","reqd":true,"type":"`$ANY`","index$":0}]},"contract":{"id":"DELETE /api/v4/groups/{id}/-/packages/npm/-/package/*package_name/dist-tags/{tag}","json":"{\"operationId\":\"deleteApiV4GroupsIdPackagesNpmPackage*packageNameDistTagsTag\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the group\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package name\",\"in\":\"query\",\"name\":\"package_name\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package dist-tag\",\"in\":\"path\",\"name\":\"tag\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"204\":{\"description\":\"Deletes the given tag\"},\"400\":{\"description\":\"Bad Request\"},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"DELETE","orig":"/api/v4/groups/{id}/-/packages/npm/-/package/*package_name/dist-tags/{tag}","rename":{"param":{"id":"group_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"-"},{"lit":"packages"},{"lit":"npm"},{"lit":"-"},{"lit":"package"},{"lit":"*package_name"},{"lit":"dist-tags"},{"var":"tag"}],"select":{"exist":["group_id","package_name","tag"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"tag","orig":"tag","reqd":true,"type":"`$ANY`","index$":1}],"query":[{"active":true,"kind":"query","name":"package_name","orig":"package_name","reqd":true,"type":"`$ANY`","index$":0}]},"contract":{"id":"DELETE /api/v4/projects/{id}/packages/npm/-/package/*package_name/dist-tags/{tag}","json":"{\"operationId\":\"deleteApiV4ProjectsIdPackagesNpmPackage*packageNameDistTagsTag\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package name\",\"in\":\"query\",\"name\":\"package_name\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package dist-tag\",\"in\":\"path\",\"name\":\"tag\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"204\":{\"description\":\"Deletes the given tag\"},\"400\":{\"description\":\"Bad Request\"},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"DELETE","orig":"/api/v4/projects/{id}/packages/npm/-/package/*package_name/dist-tags/{tag}","rename":{"param":{"id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"packages"},{"lit":"npm"},{"lit":"-"},{"lit":"package"},{"lit":"*package_name"},{"lit":"dist-tags"},{"var":"tag"}],"select":{"exist":["package_name","project_id","tag"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"tag","orig":"tag","reqd":true,"type":"`$ANY`","index$":0}],"query":[{"active":true,"kind":"query","name":"package_name","orig":"package_name","reqd":true,"type":"`$ANY`","index$":0}]},"contract":{"id":"DELETE /api/v4/packages/npm/-/package/*package_name/dist-tags/{tag}","json":"{\"operationId\":\"deleteApiV4PackagesNpmPackage*packageNameDistTagsTag\",\"parameters\":[{\"description\":\"Package name\",\"in\":\"query\",\"name\":\"package_name\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package dist-tag\",\"in\":\"path\",\"name\":\"tag\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"204\":{\"description\":\"Deletes the given tag\"},\"400\":{\"description\":\"Bad Request\"},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"DELETE","orig":"/api/v4/packages/npm/-/package/*package_name/dist-tags/{tag}","segments":[{"lit":"api"},{"lit":"v4"},{"lit":"packages"},{"lit":"npm"},{"lit":"-"},{"lit":"package"},{"lit":"*package_name"},{"lit":"dist-tags"},{"var":"tag"}],"select":{"exist":["package_name","tag"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"group_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"tag","orig":"tag","reqd":true,"type":"`$ANY`","index$":1}],"query":[{"active":true,"kind":"query","name":"put_api_v4_groups_id_packages_npm_package*package_name_dist_tags_tag","orig":"put_api_v4_groups_id_packages_npm_package*package_name_dist_tags_tag","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"PUT /api/v4/groups/{id}/-/packages/npm/-/package/*package_name/dist-tags/{tag}","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"putApiV4GroupsIdPackagesNpmPackage*packageNameDistTagsTag\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the group\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package dist-tag\",\"in\":\"path\",\"name\":\"tag\",\"required\":true,\"type\":\"string\"},{\"in\":\"body\",\"name\":\"putApiV4GroupsIdPackagesNpmPackage*packageNameDistTagsTag\",\"required\":true,\"schema\":{\"description\":\"Create or Update the given tag for the given NPM package and version\",\"properties\":{\"package_name\":{\"description\":\"Package name\",\"type\":\"string\"}},\"required\":[\"package_name\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"204\":{\"description\":\"Create or Update the given tag for the given NPM package and version\"},\"400\":{\"description\":\"Bad Request\"},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"PUT","orig":"/api/v4/groups/{id}/-/packages/npm/-/package/*package_name/dist-tags/{tag}","rename":{"param":{"id":"group_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"-"},{"lit":"packages"},{"lit":"npm"},{"lit":"-"},{"lit":"package"},{"lit":"*package_name"},{"lit":"dist-tags"},{"var":"tag"}],"select":{"exist":["group_id","put_api_v4_groups_id_packages_npm_package*package_name_dist_tags_tag","tag"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"tag","orig":"tag","reqd":true,"type":"`$ANY`","index$":1}],"query":[{"active":true,"kind":"query","name":"put_api_v4_projects_id_packages_npm_package*package_name_dist_tags_tag","orig":"put_api_v4_projects_id_packages_npm_package*package_name_dist_tags_tag","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"PUT /api/v4/projects/{id}/packages/npm/-/package/*package_name/dist-tags/{tag}","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"putApiV4ProjectsIdPackagesNpmPackage*packageNameDistTagsTag\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package dist-tag\",\"in\":\"path\",\"name\":\"tag\",\"required\":true,\"type\":\"string\"},{\"in\":\"body\",\"name\":\"putApiV4ProjectsIdPackagesNpmPackage*packageNameDistTagsTag\",\"required\":true,\"schema\":{\"description\":\"Create or Update the given tag for the given NPM package and version\",\"properties\":{\"package_name\":{\"description\":\"Package name\",\"type\":\"string\"}},\"required\":[\"package_name\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"204\":{\"description\":\"Create or Update the given tag for the given NPM package and version\"},\"400\":{\"description\":\"Bad Request\"},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"PUT","orig":"/api/v4/projects/{id}/packages/npm/-/package/*package_name/dist-tags/{tag}","rename":{"param":{"id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"packages"},{"lit":"npm"},{"lit":"-"},{"lit":"package"},{"lit":"*package_name"},{"lit":"dist-tags"},{"var":"tag"}],"select":{"exist":["project_id","put_api_v4_projects_id_packages_npm_package*package_name_dist_tags_tag","tag"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"tag","orig":"tag","reqd":true,"type":"`$ANY`","index$":0}],"query":[{"active":true,"kind":"query","name":"put_api_v4_packages_npm_package*package_name_dist_tags_tag","orig":"put_api_v4_packages_npm_package*package_name_dist_tags_tag","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"PUT /api/v4/packages/npm/-/package/*package_name/dist-tags/{tag}","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"putApiV4PackagesNpmPackage*packageNameDistTagsTag\",\"parameters\":[{\"description\":\"Package dist-tag\",\"in\":\"path\",\"name\":\"tag\",\"required\":true,\"type\":\"string\"},{\"in\":\"body\",\"name\":\"putApiV4PackagesNpmPackage*packageNameDistTagsTag\",\"required\":true,\"schema\":{\"description\":\"Create or Update the given tag for the given NPM package and version\",\"properties\":{\"package_name\":{\"description\":\"Package name\",\"type\":\"string\"}},\"required\":[\"package_name\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"204\":{\"description\":\"Create or Update the given tag for the given NPM package and version\"},\"400\":{\"description\":\"Bad Request\"},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"PUT","orig":"/api/v4/packages/npm/-/package/*package_name/dist-tags/{tag}","segments":[{"lit":"api"},{"lit":"v4"},{"lit":"packages"},{"lit":"npm"},{"lit":"-"},{"lit":"package"},{"lit":"*package_name"},{"lit":"dist-tags"},{"var":"tag"}],"select":{"exist":["put_api_v4_packages_npm_package*package_name_dist_tags_tag","tag"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"update"}},"relations":{"ancestors":[["group"],["project"],["group","dist_tag"],["project","dist_tag"]]},"key$":"npm_package","name__orig":"npm_package","Name":"NpmPackage","name_":"npm_package","name-":"npm-package","NAME":"NPM_PACKAGE","index$":231}, {"active":true,"entity":"npm_package","key$":"BasicNpmPackageFlow","kind":"basic","name":"BasicNpmPackageFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"npm_package_ref01"},"match":{"group_id":"group01","project_id":"project01"},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{"ref":"npm_package_ref01","srcdatavar":"npm_package_ref01_data","suffix":"_up0"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-npm_package_ref01"}}],"valid":[],"index$":1},{"active":true,"data":{},"input":{"ref":"npm_package_ref01","srcdatavar":"npm_package_ref01_data","suffix":"_dt0"},"match":{"id":"npm_package01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-npm_package_ref01"}}],"index$":2},{"active":true,"data":{},"input":{"ref":"npm_package_ref01","suffix":"_rm0"},"match":{"id":"npm_package01"},"op":"remove","spec":[],"valid":[],"index$":3}]}, 'NpmPackage')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const npm_package_ref01_ent = client.NpmPackage()
    let npm_package_ref01_data = setup.data.new.npm_package['npm_package_ref01']
    npm_package_ref01_data['group_id'] = setup.idmap['group01']
    npm_package_ref01_data['project_id'] = setup.idmap['project01']

    npm_package_ref01_data = (await npm_package_ref01_ent.create(npm_package_ref01_data)).data()
    assert(null != npm_package_ref01_data)


    // UPDATE
    const npm_package_ref01_data_up0: any = {}

    const npm_package_ref01_resdata_up0 = (await npm_package_ref01_ent.update(npm_package_ref01_data_up0)).data()
    assert(null != npm_package_ref01_resdata_up0)




  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/npm_package/NpmPackageTestData.json')

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
    ['npm_package01','npm_package02','npm_package03','group01','group02','group03','project01','project02','project03','group01','group02','group03','dist_tag01','dist_tag02','dist_tag03','project01','project02','project03','dist_tag01','dist_tag02','dist_tag03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_NPM_PACKAGE_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_NPM_PACKAGE_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_NPM_PACKAGE_ENTID']
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
  
