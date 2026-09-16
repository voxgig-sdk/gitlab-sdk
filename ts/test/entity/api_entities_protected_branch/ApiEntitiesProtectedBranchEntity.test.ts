

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


describe('ApiEntitiesProtectedBranchEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesProtectedBranch()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_protected_branch.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"allow_force_push","req":false,"type":"`$BOOLEAN`","index$":0},{"active":true,"name":"code_owner_approval_required","req":false,"type":"`$BOOLEAN`","index$":1},{"active":true,"format":"int32","name":"id","req":false,"type":"`$INTEGER`","index$":2},{"active":true,"name":"inherited","req":false,"type":"`$BOOLEAN`","index$":3},{"active":true,"name":"merge_access_levels","req":false,"type":"`$ARRAY`","index$":4},{"active":true,"name":"name","req":false,"type":"`$STRING`","index$":5},{"active":true,"name":"push_access_levels","req":false,"type":"`$ARRAY`","index$":6},{"active":true,"name":"unprotect_access_levels","req":false,"type":"`$ARRAY`","index$":7}],"id":{"field":"id","name":"id"},"name":"api_entities_protected_branch","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"params":[{"active":true,"example":"gitlab-org/gitlab","kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"post_api_v4_projects_id_protected_branch","orig":"post_api_v4_projects_id_protected_branch","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"POST /api/v4/projects/{id}/protected_branches","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4ProjectsIdProtectedBranches\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"example\":\"gitlab-org/gitlab\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"in\":\"body\",\"name\":\"postApiV4ProjectsIdProtectedBranches\",\"required\":true,\"schema\":{\"description\":\"Protect a single branch\",\"properties\":{\"allow_force_push\":{\"default\":false,\"description\":\"Allow force push for all users with push access.\",\"type\":\"boolean\"},\"allowed_to_merge\":{\"description\":\"An array of users/groups allowed to merge\",\"items\":{\"properties\":{\"_destroy\":{\"description\":\"Delete the object when true\",\"type\":\"boolean\"},\"access_level\":{\"enum\":[30,40,60,0],\"format\":\"int32\",\"type\":\"integer\"},\"group_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"user_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"},\"allowed_to_push\":{\"description\":\"An array of users/groups allowed to push\",\"items\":{\"properties\":{\"_destroy\":{\"description\":\"Delete the object when true\",\"type\":\"boolean\"},\"access_level\":{\"enum\":[30,40,60,0],\"format\":\"int32\",\"type\":\"integer\"},\"deploy_key_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"group_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"user_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"},\"allowed_to_unprotect\":{\"description\":\"An array of users/groups allowed to unprotect\",\"items\":{\"properties\":{\"_destroy\":{\"description\":\"Delete the object when true\",\"type\":\"boolean\"},\"access_level\":{\"enum\":[30,40,60],\"format\":\"int32\",\"type\":\"integer\"},\"group_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"user_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"},\"code_owner_approval_required\":{\"description\":\"Prevent pushes to this branch if it matches an item in CODEOWNERS\",\"type\":\"boolean\"},\"merge_access_level\":{\"description\":\"Access levels allowed to merge (defaults: `40`, maintainer access level)\",\"enum\":[30,40,60,0],\"format\":\"int32\",\"type\":\"integer\"},\"name\":{\"description\":\"The name of the protected branch\",\"example\":\"main\",\"type\":\"string\"},\"push_access_level\":{\"description\":\"Access levels allowed to push (defaults: `40`, maintainer access level)\",\"enum\":[30,40,60,0],\"format\":\"int32\",\"type\":\"integer\"},\"unprotect_access_level\":{\"description\":\"Access levels allowed to unprotect (defaults: `40`, maintainer access level)\",\"enum\":[30,40,60],\"format\":\"int32\",\"type\":\"integer\"}},\"required\":[\"name\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"Protect a single branch\",\"schema\":{\"description\":\"API_Entities_ProtectedBranch model\",\"properties\":{\"allow_force_push\":{\"type\":\"boolean\"},\"code_owner_approval_required\":{\"type\":\"boolean\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"inherited\":{\"type\":\"boolean\"},\"merge_access_levels\":{\"items\":{\"properties\":{\"access_level\":{\"example\":40,\"format\":\"int32\",\"type\":\"integer\"},\"access_level_description\":{\"example\":\"Maintainers\",\"type\":\"string\"},\"deploy_key_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"group_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"user_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"},\"name\":{\"example\":\"main\",\"type\":\"string\"},\"push_access_levels\":{\"items\":{\"properties\":{\"access_level\":{\"example\":40,\"format\":\"int32\",\"type\":\"integer\"},\"access_level_description\":{\"example\":\"Maintainers\",\"type\":\"string\"},\"deploy_key_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"group_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"user_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"},\"unprotect_access_levels\":{\"items\":{\"properties\":{\"access_level\":{\"example\":40,\"format\":\"int32\",\"type\":\"integer\"},\"access_level_description\":{\"example\":\"Maintainers\",\"type\":\"string\"},\"deploy_key_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"group_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"user_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}},\"401\":{\"description\":\"401 Unauthorized\"},\"404\":{\"description\":\"404 Project Not Found\"},\"409\":{\"description\":\"Protected branch 'main' already exists\"},\"422\":{\"description\":\"name is missing\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/projects/{id}/protected_branches","rename":{"param":{"id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"protected_branches"}],"select":{"exist":["post_api_v4_projects_id_protected_branch","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"example":"gitlab-org/gitlab","kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"example":20,"kind":"query","name":"per_page","orig":"per_page","reqd":false,"type":"`$INTEGER`","index$":1},{"active":true,"example":"mai","kind":"query","name":"search","orig":"search","reqd":false,"type":"`$ANY`","index$":2}]},"contract":{"id":"GET /api/v4/projects/{id}/protected_branches","json":"{\"operationId\":\"getApiV4ProjectsIdProtectedBranches\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"example\":\"gitlab-org/gitlab\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"default\":1,\"description\":\"Current page number\",\"example\":1,\"format\":\"int32\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"type\":\"integer\"},{\"default\":20,\"description\":\"Number of items per page\",\"example\":20,\"format\":\"int32\",\"in\":\"query\",\"name\":\"per_page\",\"required\":false,\"type\":\"integer\"},{\"description\":\"Search for a protected branch by name\",\"example\":\"mai\",\"in\":\"query\",\"name\":\"search\",\"required\":false,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get a project's protected branches\",\"schema\":{\"items\":{\"description\":\"API_Entities_ProtectedBranch model\",\"properties\":{\"allow_force_push\":{\"type\":\"boolean\"},\"code_owner_approval_required\":{\"type\":\"boolean\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"inherited\":{\"type\":\"boolean\"},\"merge_access_levels\":{\"items\":{\"properties\":{\"access_level\":{\"example\":40,\"format\":\"int32\",\"type\":\"integer\"},\"access_level_description\":{\"example\":\"Maintainers\",\"type\":\"string\"},\"deploy_key_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"group_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"user_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"},\"name\":{\"example\":\"main\",\"type\":\"string\"},\"push_access_levels\":{\"items\":{\"properties\":{\"access_level\":{\"example\":40,\"format\":\"int32\",\"type\":\"integer\"},\"access_level_description\":{\"example\":\"Maintainers\",\"type\":\"string\"},\"deploy_key_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"group_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"user_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"},\"unprotect_access_levels\":{\"items\":{\"properties\":{\"access_level\":{\"example\":40,\"format\":\"int32\",\"type\":\"integer\"},\"access_level_description\":{\"example\":\"Maintainers\",\"type\":\"string\"},\"deploy_key_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"group_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"user_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"},\"type\":\"array\"}},\"401\":{\"description\":\"401 Unauthorized\"},\"404\":{\"description\":\"404 Project Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/protected_branches","rename":{"param":{"id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"protected_branches"}],"select":{"exist":["page","per_page","project_id","search"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":"main","kind":"param","name":"id","orig":"name","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":"gitlab-org/gitlab","kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /api/v4/projects/{id}/protected_branches/{name}","json":"{\"operationId\":\"getApiV4ProjectsIdProtectedBranchesName\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"example\":\"gitlab-org/gitlab\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The name of the branch or wildcard\",\"example\":\"main\",\"in\":\"path\",\"name\":\"name\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get a single protected branch\",\"schema\":{\"description\":\"API_Entities_ProtectedBranch model\",\"properties\":{\"allow_force_push\":{\"type\":\"boolean\"},\"code_owner_approval_required\":{\"type\":\"boolean\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"inherited\":{\"type\":\"boolean\"},\"merge_access_levels\":{\"items\":{\"properties\":{\"access_level\":{\"example\":40,\"format\":\"int32\",\"type\":\"integer\"},\"access_level_description\":{\"example\":\"Maintainers\",\"type\":\"string\"},\"deploy_key_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"group_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"user_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"},\"name\":{\"example\":\"main\",\"type\":\"string\"},\"push_access_levels\":{\"items\":{\"properties\":{\"access_level\":{\"example\":40,\"format\":\"int32\",\"type\":\"integer\"},\"access_level_description\":{\"example\":\"Maintainers\",\"type\":\"string\"},\"deploy_key_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"group_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"user_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"},\"unprotect_access_levels\":{\"items\":{\"properties\":{\"access_level\":{\"example\":40,\"format\":\"int32\",\"type\":\"integer\"},\"access_level_description\":{\"example\":\"Maintainers\",\"type\":\"string\"},\"deploy_key_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"group_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"user_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}},\"401\":{\"description\":\"401 Unauthorized\"},\"404\":{\"description\":\"404 Project Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/protected_branches/{name}","rename":{"param":{"id":"project_id","name":"id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"protected_branches"},{"var":"id"}],"select":{"exist":["id","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"example":"main","kind":"param","name":"id","orig":"name","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":"gitlab-org/gitlab","kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}],"query":[{"active":true,"kind":"query","name":"patch_api_v4_projects_id_protected_branches_name","orig":"patch_api_v4_projects_id_protected_branches_name","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"PATCH /api/v4/projects/{id}/protected_branches/{name}","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"patchApiV4ProjectsIdProtectedBranchesName\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"example\":\"gitlab-org/gitlab\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The name of the branch\",\"example\":\"main\",\"in\":\"path\",\"name\":\"name\",\"required\":true,\"type\":\"string\"},{\"in\":\"body\",\"name\":\"patchApiV4ProjectsIdProtectedBranchesName\",\"required\":true,\"schema\":{\"description\":\"Update a protected branch\",\"properties\":{\"allow_force_push\":{\"description\":\"Allow force push for all users with push access.\",\"type\":\"boolean\"},\"allowed_to_merge\":{\"description\":\"An array of users/groups allowed to merge\",\"items\":{\"properties\":{\"_destroy\":{\"description\":\"Delete the object when true\",\"type\":\"boolean\"},\"access_level\":{\"enum\":[30,40,60,0],\"format\":\"int32\",\"type\":\"integer\"},\"group_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"user_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"},\"allowed_to_push\":{\"description\":\"An array of users/groups allowed to push\",\"items\":{\"properties\":{\"_destroy\":{\"description\":\"Delete the object when true\",\"type\":\"boolean\"},\"access_level\":{\"enum\":[30,40,60,0],\"format\":\"int32\",\"type\":\"integer\"},\"deploy_key_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"group_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"user_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"},\"allowed_to_unprotect\":{\"description\":\"An array of users/groups allowed to unprotect\",\"items\":{\"properties\":{\"_destroy\":{\"description\":\"Delete the object when true\",\"type\":\"boolean\"},\"access_level\":{\"enum\":[30,40,60],\"format\":\"int32\",\"type\":\"integer\"},\"group_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"user_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"},\"code_owner_approval_required\":{\"description\":\"Prevent pushes to this branch if it matches an item in CODEOWNERS\",\"type\":\"boolean\"},\"unprotect_access_level\":{\"description\":\"Access levels allowed to unprotect (defaults: `40`, maintainer access level)\",\"enum\":[30,40,60],\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Update a protected branch\",\"schema\":{\"description\":\"API_Entities_ProtectedBranch model\",\"properties\":{\"allow_force_push\":{\"type\":\"boolean\"},\"code_owner_approval_required\":{\"type\":\"boolean\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"inherited\":{\"type\":\"boolean\"},\"merge_access_levels\":{\"items\":{\"properties\":{\"access_level\":{\"example\":40,\"format\":\"int32\",\"type\":\"integer\"},\"access_level_description\":{\"example\":\"Maintainers\",\"type\":\"string\"},\"deploy_key_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"group_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"user_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"},\"name\":{\"example\":\"main\",\"type\":\"string\"},\"push_access_levels\":{\"items\":{\"properties\":{\"access_level\":{\"example\":40,\"format\":\"int32\",\"type\":\"integer\"},\"access_level_description\":{\"example\":\"Maintainers\",\"type\":\"string\"},\"deploy_key_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"group_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"user_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"},\"unprotect_access_levels\":{\"items\":{\"properties\":{\"access_level\":{\"example\":40,\"format\":\"int32\",\"type\":\"integer\"},\"access_level_description\":{\"example\":\"Maintainers\",\"type\":\"string\"},\"deploy_key_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"group_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"user_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}},\"400\":{\"description\":\"400 Bad request\"},\"401\":{\"description\":\"401 Unauthorized\"},\"404\":{\"description\":\"404 Project Not Found\"},\"422\":{\"description\":\"Push access levels access level has already been taken\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"PATCH","orig":"/api/v4/projects/{id}/protected_branches/{name}","rename":{"param":{"id":"project_id","name":"id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"protected_branches"},{"var":"id"}],"select":{"exist":["id","patch_api_v4_projects_id_protected_branches_name","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["project"]]},"key$":"api_entities_protected_branch","name__orig":"api_entities_protected_branch","Name":"ApiEntitiesProtectedBranch","name_":"api_entities_protected_branch","name-":"api-entities-protected-branch","NAME":"API_ENTITIES_PROTECTED_BRANCH","index$":144}, {"active":true,"entity":"api_entities_protected_branch","key$":"BasicApiEntitiesProtectedBranchFlow","kind":"basic","name":"BasicApiEntitiesProtectedBranchFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"api_entities_protected_branch_ref01"},"match":{"project_id":"project01"},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{},"match":{"project_id":"project01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"api_entities_protected_branch_ref01"}}],"index$":1},{"active":true,"data":{"project_id":"project01"},"input":{"ref":"api_entities_protected_branch_ref01","srcdatavar":"api_entities_protected_branch_ref01_data","suffix":"_up0","textfield":"name"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_protected_branch_ref01"}}],"valid":[],"index$":2},{"active":true,"data":{},"input":{"ref":"api_entities_protected_branch_ref01","srcdatavar":"api_entities_protected_branch_ref01_data","suffix":"_dt0"},"match":{"id":"api_entities_protected_branch01","project_id":"project01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_protected_branch_ref01"}}],"index$":3}]}, 'ApiEntitiesProtectedBranch')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const api_entities_protected_branch_ref01_ent = client.ApiEntitiesProtectedBranch()
    let api_entities_protected_branch_ref01_data = setup.data.new.api_entities_protected_branch['api_entities_protected_branch_ref01']
    api_entities_protected_branch_ref01_data['project_id'] = setup.idmap['project01']

    api_entities_protected_branch_ref01_data = (await api_entities_protected_branch_ref01_ent.create(api_entities_protected_branch_ref01_data)).data()
    assert(null != api_entities_protected_branch_ref01_data.id)


    // LIST
    const api_entities_protected_branch_ref01_match: any = {}
    api_entities_protected_branch_ref01_match['project_id'] = setup.idmap['project01']

    const api_entities_protected_branch_ref01_list = (await api_entities_protected_branch_ref01_ent.list(api_entities_protected_branch_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(api_entities_protected_branch_ref01_list, { id: api_entities_protected_branch_ref01_data.id })))


    // UPDATE
    const api_entities_protected_branch_ref01_data_up0: any = {}
    api_entities_protected_branch_ref01_data_up0.id = api_entities_protected_branch_ref01_data.id
    api_entities_protected_branch_ref01_data_up0 ['project_id'] = setup.idmap['project_id']

    const api_entities_protected_branch_ref01_markdef_up0 = { name: 'name', value: 'Mark01-api_entities_protected_branch_ref01_' + setup.now }
    ;(api_entities_protected_branch_ref01_data_up0 as any)[api_entities_protected_branch_ref01_markdef_up0.name] = api_entities_protected_branch_ref01_markdef_up0.value

    const api_entities_protected_branch_ref01_resdata_up0 = (await api_entities_protected_branch_ref01_ent.update(api_entities_protected_branch_ref01_data_up0)).data()
    assert(api_entities_protected_branch_ref01_resdata_up0.id === api_entities_protected_branch_ref01_data_up0.id)

    assert((api_entities_protected_branch_ref01_resdata_up0 as any)[api_entities_protected_branch_ref01_markdef_up0.name] === api_entities_protected_branch_ref01_markdef_up0.value)


    // LOAD
    const api_entities_protected_branch_ref01_match_dt0: any = {}
    api_entities_protected_branch_ref01_match_dt0.id = api_entities_protected_branch_ref01_data.id
    const api_entities_protected_branch_ref01_data_dt0 = (await api_entities_protected_branch_ref01_ent.load(api_entities_protected_branch_ref01_match_dt0)).data()
    assert(api_entities_protected_branch_ref01_data_dt0.id === api_entities_protected_branch_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_protected_branch/ApiEntitiesProtectedBranchTestData.json')

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
    ['api_entities_protected_branch01','api_entities_protected_branch02','api_entities_protected_branch03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_PROTECTED_BRANCH_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_PROTECTED_BRANCH_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_PROTECTED_BRANCH_ENTID']
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
  
