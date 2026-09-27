

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


describe('ApiEntitiesCiVariableEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesCiVariable()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_ci_variable.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"description":{"a":true,"h":"Description","n":"description","r":false,"t":"`$STRING`","key$":"description","index$":0},"environment_scope":{"a":true,"h":"Environment Scope","n":"environment_scope","r":false,"t":"`$STRING`","key$":"environment_scope","index$":1},"hidden":{"a":true,"h":"Hidden","n":"hidden","r":false,"t":"`$BOOLEAN`","key$":"hidden","index$":2},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":3},"key":{"a":true,"h":"Key","n":"key","r":false,"t":"`$STRING`","key$":"key","index$":4},"masked":{"a":true,"h":"Masked","n":"masked","r":false,"t":"`$BOOLEAN`","key$":"masked","index$":5},"protected":{"a":true,"h":"Protected","n":"protected","r":false,"t":"`$BOOLEAN`","key$":"protected","index$":6},"raw":{"a":true,"h":"Raw","n":"raw","r":false,"t":"`$BOOLEAN`","key$":"raw","index$":7},"value":{"a":true,"h":"Value","n":"value","r":false,"t":"`$STRING`","key$":"value","index$":8},"variable_type":{"a":true,"h":"Variable Type","n":"variable_type","r":false,"t":"`$STRING`","key$":"variable_type","index$":9}},"id":{"field":"id","name":"id"},"name":"api_entities_ci_variable","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/v4/projects/{id}/pipeline_schedules/{pipeline_schedule_id}/variables","source":"swagger2","version":2},"g":{"params":[{"a":true,"ex":13,"k":"param","n":"pipeline_schedule_id","or":"pipeline_schedule_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":18,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"post_api_v4_projects_id_pipeline_schedules_pipeline_schedule_id_variable","or":"post_api_v4_projects_id_pipeline_schedules_pipeline_schedule_id_variable","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/api/v4/projects/{id}/pipeline_schedules/{pipeline_schedule_id}/variables","q":{"exist":["pipeline_schedule_id","post_api_v4_projects_id_pipeline_schedules_pipeline_schedule_id_variable","project_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"pipeline_schedules"},{"var":"pipeline_schedule_id"},{"lit":"variables"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /api/v4/groups/{id}/variables","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"group_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"post_api_v4_groups_id_variable","or":"post_api_v4_groups_id_variable","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/api/v4/groups/{id}/variables","q":{"exist":["group_id","post_api_v4_groups_id_variable"]},"r":{"param":{"id":"group_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"variables"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /api/v4/projects/{id}/variables","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"post_api_v4_projects_id_variable","or":"post_api_v4_projects_id_variable","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/api/v4/projects/{id}/variables","q":{"exist":["post_api_v4_projects_id_variable","project_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"variables"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"POST /api/v4/admin/ci/variables","source":"swagger2","version":2},"g":{"query":[{"a":true,"k":"query","n":"post_api_v4_admin_ci_variable","or":"post_api_v4_admin_ci_variable","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/api/v4/admin/ci/variables","q":{"exist":["post_api_v4_admin_ci_variable"]},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"admin"},{"lit":"ci"},{"lit":"variables"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /api/v4/projects/{id}/pipelines/{pipeline_id}/variables","source":"swagger2","version":2},"g":{"params":[{"a":true,"ex":18,"k":"param","n":"pipeline_id","or":"pipeline_id","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":11,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/pipelines/{pipeline_id}/variables","q":{"exist":["pipeline_id","project_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"pipelines"},{"var":"pipeline_id"},{"lit":"variables"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v4/projects/{id}/variables/{key}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"key","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"filter_environment_scope","or":"filter_environment_scope","r":false,"t":"`$ANY`","index$":0}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/variables/{key}","q":{"exist":["filter_environment_scope","id","project_id"]},"r":{"param":{"id":"project_id","key":"id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"variables"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /api/v4/groups/{id}/variables","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"group_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/api/v4/groups/{id}/variables","q":{"exist":["group_id","page","per_page"]},"r":{"param":{"id":"group_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"variables"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"GET /api/v4/projects/{id}/variables","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/api/v4/projects/{id}/variables","q":{"exist":["page","per_page","project_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"variables"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"GET /api/v4/groups/{id}/variables/{key}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"group_id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"key","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/api/v4/groups/{id}/variables/{key}","q":{"exist":["group_id","id"]},"r":{"param":{"id":"group_id","key":"id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"variables"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3},{"a":true,"co":{"id":"GET /api/v4/admin/ci/variables","source":"swagger2","version":2},"g":{"query":[{"a":true,"ex":1,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"ex":20,"k":"query","n":"per_page","or":"per_page","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/api/v4/admin/ci/variables","q":{"exist":["page","per_page"]},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"admin"},{"lit":"ci"},{"lit":"variables"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":4},{"a":true,"co":{"id":"GET /api/v4/admin/ci/variables/{key}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"key","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/api/v4/admin/ci/variables/{key}","q":{"exist":["id"]},"r":{"param":{"key":"id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"admin"},{"lit":"ci"},{"lit":"variables"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":5}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /api/v4/projects/{id}/pipeline_schedules/{pipeline_schedule_id}/variables/{key}","source":"swagger2","version":2},"g":{"params":[{"a":true,"ex":"NEW_VARIABLE","k":"param","n":"id","or":"key","r":true,"t":"`$STRING`","index$":0},{"a":true,"ex":13,"k":"param","n":"pipeline_schedule_id","or":"pipeline_schedule_id","r":true,"t":"`$STRING`","index$":1},{"a":true,"ex":18,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":2}],"query":[{"a":true,"k":"query","n":"put_api_v4_projects_id_pipeline_schedules_pipeline_schedule_id_variables_key","or":"put_api_v4_projects_id_pipeline_schedules_pipeline_schedule_id_variables_key","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"PUT","o":"/api/v4/projects/{id}/pipeline_schedules/{pipeline_schedule_id}/variables/{key}","q":{"exist":["id","pipeline_schedule_id","project_id","put_api_v4_projects_id_pipeline_schedules_pipeline_schedule_id_variables_key"]},"r":{"param":{"id":"project_id","key":"id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"pipeline_schedules"},{"var":"pipeline_schedule_id"},{"lit":"variables"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"PUT /api/v4/groups/{id}/variables/{key}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"group_id","or":"id","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"id","or":"key","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"put_api_v4_groups_id_variables_key","or":"put_api_v4_groups_id_variables_key","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"PUT","o":"/api/v4/groups/{id}/variables/{key}","q":{"exist":["group_id","id","put_api_v4_groups_id_variables_key"]},"r":{"param":{"id":"group_id","key":"id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"variables"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"PUT /api/v4/projects/{id}/variables/{key}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"key","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"put_api_v4_projects_id_variables_key","or":"put_api_v4_projects_id_variables_key","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"PUT","o":"/api/v4/projects/{id}/variables/{key}","q":{"exist":["id","project_id","put_api_v4_projects_id_variables_key"]},"r":{"param":{"id":"project_id","key":"id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"variables"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"PUT /api/v4/admin/ci/variables/{key}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"key","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"put_api_v4_admin_ci_variables_key","or":"put_api_v4_admin_ci_variables_key","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"PUT","o":"/api/v4/admin/ci/variables/{key}","q":{"exist":["id","put_api_v4_admin_ci_variables_key"]},"r":{"param":{"key":"id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"admin"},{"lit":"ci"},{"lit":"variables"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.group"],["$.main.kit.entity.project"],["$.main.kit.entity.project"],["$.main.kit.entity.project"]]},"key$":"api_entities_ci_variable","name__orig":"api_entities_ci_variable","Name":"ApiEntitiesCiVariable","name_":"api_entities_ci_variable","name-":"api-entities-ci-variable","NAME":"API_ENTITIES_CI_VARIABLE","index$":38}, {"active":true,"entity":"api_entities_ci_variable","key$":"BasicApiEntitiesCiVariableFlow","kind":"basic","name":"BasicApiEntitiesCiVariableFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"api_entities_ci_variable_ref01"},"m":{"group_id":"group01","pipeline_id":"pipeline01","pipeline_schedule_id":"pipeline_schedule01","project_id":"project01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"pipeline_id":"pipeline01","project_id":"project01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"api_entities_ci_variable_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"api_entities_ci_variable_ref01","srcdatavar":"api_entities_ci_variable_ref01_data","suffix":"_up0","textfield":"description"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_ci_variable_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"api_entities_ci_variable_ref01","srcdatavar":"api_entities_ci_variable_ref01_data","suffix":"_dt0"},"m":{"id":"api_entities_ci_variable01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_ci_variable_ref01"}}],"index$":3}]}, 'ApiEntitiesCiVariable', {"POST /api/v4/projects/{id}/pipeline_schedules/{pipeline_schedule_id}/variables":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"example":18,"index$":0},{"in":"path","name":"pipeline_schedule_id","description":"The pipeline schedule id","type":"integer","format":"int32","required":true,"example":13,"index$":1},{"name":"postApiV4ProjectsIdPipelineSchedulesPipelineScheduleIdVariables","in":"body","required":true,"schema":{"type":"object","properties":{"key":{"type":"string","description":"The key of the variable","example":"NEW_VARIABLE"},"value":{"type":"string","description":"The value of the variable","example":"new value"},"variable_type":{"type":"string","description":"The type of variable, must be one of env_var or file. Defaults to env_var","enum":["env_var","file"],"default":"env_var"}},"required":["key","value"],"description":"Create a new pipeline schedule variable","x-ref":"#/definitions/postApiV4ProjectsIdPipelineSchedulesPipelineScheduleIdVariables"},"index$":2}]},"POST /api/v4/groups/{id}/variables":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID of a group or URL-encoded path of the group owned by the authenticated\n      user","type":"string","required":true,"index$":0},{"name":"postApiV4GroupsIdVariables","in":"body","required":true,"schema":{"type":"object","properties":{"key":{"type":"string","description":"The ID of a group or URL-encoded path of the group owned by the\n        authenticated user"},"value":{"type":"string","description":"The value of a variable"},"protected":{"type":"boolean","description":"Whether the variable is protected"},"masked_and_hidden":{"type":"boolean","description":"Whether the variable is masked and hidden"},"masked":{"type":"boolean","description":"Whether the variable is masked"},"raw":{"type":"boolean","description":"Whether the variable will be expanded"},"variable_type":{"type":"string","description":"The type of the variable. Default: env_var","enum":["env_var","file"]},"environment_scope":{"type":"string","description":"The environment scope of the variable"},"description":{"type":"string","description":"The description of the variable"}},"required":["key","value"],"description":"Create a new variable in a group","x-ref":"#/definitions/postApiV4GroupsIdVariables"},"index$":1}]},"POST /api/v4/projects/{id}/variables":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID of a project or URL-encoded NAMESPACE/PROJECT_NAME of the project owned by the authenticated user","type":"string","required":true,"index$":0},{"name":"postApiV4ProjectsIdVariables","in":"body","required":true,"schema":{"type":"object","properties":{"key":{"type":"string","description":"The key of a variable"},"value":{"type":"string","description":"The value of a variable"},"protected":{"type":"boolean","description":"Whether the variable is protected"},"masked":{"type":"boolean","description":"Whether the variable is masked"},"masked_and_hidden":{"type":"boolean","description":"Whether the variable is masked and hidden"},"raw":{"type":"boolean","description":"Whether the variable will be expanded"},"variable_type":{"type":"string","description":"The type of the variable. Default: env_var","enum":["env_var","file"]},"environment_scope":{"type":"string","description":"The environment_scope of the variable"},"description":{"type":"string","description":"The description of the variable"}},"required":["key","value"],"description":"Create a new variable in a project","x-ref":"#/definitions/postApiV4ProjectsIdVariables"},"index$":1}]},"POST /api/v4/admin/ci/variables":{"protocol":"http","parameters":[{"name":"postApiV4AdminCiVariables","in":"body","required":true,"schema":{"type":"object","properties":{"key":{"type":"string","description":"The key of the variable. Max 255 characters"},"description":{"type":"string","description":"The description of the variable"},"value":{"type":"string","description":"The value of a variable"},"protected":{"type":"boolean","description":"Whether the variable is protected"},"masked":{"type":"boolean","description":"Whether the variable is masked"},"raw":{"type":"boolean","description":"Whether the variable will be expanded"},"variable_type":{"type":"string","description":"The type of a variable. Available types are: env_var (default) and file","enum":["env_var","file"]}},"required":["key","value"],"description":"Create a new instance-level variable","x-ref":"#/definitions/postApiV4AdminCiVariables"},"index$":0}]},"GET /api/v4/projects/{id}/pipelines/{pipeline_id}/variables":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The project ID or URL-encoded path","type":"string","required":true,"example":11,"index$":0},{"in":"path","name":"pipeline_id","description":"The pipeline ID","type":"integer","format":"int32","required":true,"example":18,"index$":1}]},"GET /api/v4/projects/{id}/variables/{key}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID of a project or URL-encoded NAMESPACE/PROJECT_NAME of the project owned by the authenticated user","type":"string","required":true,"index$":0},{"in":"path","name":"key","description":"The key of a variable","type":"string","required":true,"index$":1},{"in":"query","name":"filter[environment_scope]","description":"The environment scope of a variable","type":"string","required":false,"index$":2}]},"GET /api/v4/groups/{id}/variables":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID of a group or URL-encoded path of the group owned by the authenticated\n      user","type":"string","required":true,"index$":0},{"in":"query","name":"page","description":"Current page number","type":"integer","format":"int32","default":1,"required":false,"example":1,"index$":1},{"in":"query","name":"per_page","description":"Number of items per page","type":"integer","format":"int32","default":20,"required":false,"example":20,"index$":2}]},"GET /api/v4/projects/{id}/variables":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID of a project or URL-encoded NAMESPACE/PROJECT_NAME of the project owned by the authenticated user","type":"string","required":true,"index$":0},{"in":"query","name":"page","description":"Current page number","type":"integer","format":"int32","default":1,"required":false,"example":1,"index$":1},{"in":"query","name":"per_page","description":"Number of items per page","type":"integer","format":"int32","default":20,"required":false,"example":20,"index$":2}]},"GET /api/v4/groups/{id}/variables/{key}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID of a group or URL-encoded path of the group owned by the authenticated\n      user","type":"string","required":true,"index$":0},{"in":"path","name":"key","description":"The key of the variable","type":"string","required":true,"index$":1}]},"GET /api/v4/admin/ci/variables":{"protocol":"http","parameters":[{"in":"query","name":"page","description":"Current page number","type":"integer","format":"int32","default":1,"required":false,"example":1,"index$":0},{"in":"query","name":"per_page","description":"Number of items per page","type":"integer","format":"int32","default":20,"required":false,"example":20,"index$":1}]},"GET /api/v4/admin/ci/variables/{key}":{"protocol":"http","parameters":[{"in":"path","name":"key","description":"The key of a variable","type":"string","required":true,"index$":0}]},"PUT /api/v4/projects/{id}/pipeline_schedules/{pipeline_schedule_id}/variables/{key}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID or URL-encoded path of the project","type":"string","required":true,"example":18,"index$":0},{"in":"path","name":"pipeline_schedule_id","description":"The pipeline schedule id","type":"integer","format":"int32","required":true,"example":13,"index$":1},{"in":"path","name":"key","description":"The key of the variable","type":"string","required":true,"example":"NEW_VARIABLE","index$":2},{"name":"putApiV4ProjectsIdPipelineSchedulesPipelineScheduleIdVariablesKey","in":"body","required":true,"schema":{"type":"object","properties":{"value":{"type":"string","description":"The value of the variable","example":"new value"},"variable_type":{"type":"string","description":"The type of variable, must be one of env_var or file","enum":["env_var","file"],"default":"env_var"}},"description":"Edit a pipeline schedule variable","x-ref":"#/definitions/putApiV4ProjectsIdPipelineSchedulesPipelineScheduleIdVariablesKey"},"index$":3}]},"PUT /api/v4/groups/{id}/variables/{key}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID of a group or URL-encoded path of the group owned by the authenticated\n      user","type":"string","required":true,"index$":0},{"in":"path","name":"key","description":"The key of a variable","type":"string","required":true,"index$":1},{"name":"putApiV4GroupsIdVariablesKey","in":"body","required":true,"schema":{"type":"object","properties":{"value":{"type":"string","description":"The value of a variable"},"protected":{"type":"boolean","description":"Whether the variable is protected"},"masked":{"type":"boolean","description":"Whether the variable is masked"},"raw":{"type":"boolean","description":"Whether the variable will be expanded"},"variable_type":{"type":"string","description":"The type of the variable. Default: env_var","enum":["env_var","file"]},"environment_scope":{"type":"string","description":"The environment scope of the variable"},"description":{"type":"string","description":"The description of the variable"}},"description":"Update an existing variable from a group","x-ref":"#/definitions/putApiV4GroupsIdVariablesKey"},"index$":2}]},"PUT /api/v4/projects/{id}/variables/{key}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"The ID of a project or URL-encoded NAMESPACE/PROJECT_NAME of the project owned by the authenticated user","type":"string","required":true,"index$":0},{"in":"path","name":"key","description":"The key of a variable","type":"string","required":true,"index$":1},{"name":"putApiV4ProjectsIdVariablesKey","in":"body","required":true,"schema":{"type":"object","properties":{"value":{"type":"string","description":"The value of a variable"},"protected":{"type":"boolean","description":"Whether the variable is protected"},"masked":{"type":"boolean","description":"Whether the variable is masked"},"environment_scope":{"type":"string","description":"The environment_scope of a variable"},"raw":{"type":"boolean","description":"Whether the variable will be expanded"},"variable_type":{"type":"string","description":"The type of the variable. Default: env_var","enum":["env_var","file"]},"filter":{"type":"object","description":"Available filters: [environment_scope]. Example: filter[environment_scope]=production","properties":{"environment_scope":{"type":"string","description":"The environment scope of a variable"}}},"description":{"type":"string","description":"The description of the variable"}},"description":"Update an existing variable from a project","x-ref":"#/definitions/putApiV4ProjectsIdVariablesKey"},"index$":2}]},"PUT /api/v4/admin/ci/variables/{key}":{"protocol":"http","parameters":[{"in":"path","name":"key","description":"The key of a variable","type":"string","required":true,"index$":0},{"name":"putApiV4AdminCiVariablesKey","in":"body","required":true,"schema":{"type":"object","properties":{"description":{"type":"string","description":"The description of the variable"},"value":{"type":"string","description":"The value of a variable"},"protected":{"type":"boolean","description":"Whether the variable is protected"},"masked":{"type":"boolean","description":"Whether the variable is masked"},"raw":{"type":"boolean","description":"Whether the variable will be expanded"},"variable_type":{"type":"string","description":"The type of a variable. Available types are: env_var (default) and file","enum":["env_var","file"]}},"description":"Update an instance-level variable","x-ref":"#/definitions/putApiV4AdminCiVariablesKey"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const api_entities_ci_variable_ref01_ent = client.ApiEntitiesCiVariable()
    let api_entities_ci_variable_ref01_data = setup.data.new.api_entities_ci_variable['api_entities_ci_variable_ref01']
    api_entities_ci_variable_ref01_data['group_id'] = setup.idmap['group01']
    api_entities_ci_variable_ref01_data['pipeline_id'] = setup.idmap['pipeline01']
    api_entities_ci_variable_ref01_data['pipeline_schedule_id'] = setup.idmap['pipeline_schedule01']
    api_entities_ci_variable_ref01_data['project_id'] = setup.idmap['project01']

    api_entities_ci_variable_ref01_data = (await api_entities_ci_variable_ref01_ent.create(api_entities_ci_variable_ref01_data)).data()
    assert(null != api_entities_ci_variable_ref01_data.id)


    // LIST
    const api_entities_ci_variable_ref01_match: any = {}
    api_entities_ci_variable_ref01_match['pipeline_id'] = setup.idmap['pipeline01']
    api_entities_ci_variable_ref01_match['project_id'] = setup.idmap['project01']

    const api_entities_ci_variable_ref01_list = (await api_entities_ci_variable_ref01_ent.list(api_entities_ci_variable_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(api_entities_ci_variable_ref01_list, { id: api_entities_ci_variable_ref01_data.id })))


    // UPDATE
    const api_entities_ci_variable_ref01_data_up0: any = {}
    api_entities_ci_variable_ref01_data_up0.id = api_entities_ci_variable_ref01_data.id

    const api_entities_ci_variable_ref01_markdef_up0 = { name: 'description', value: 'Mark01-api_entities_ci_variable_ref01_' + setup.now }
    ;(api_entities_ci_variable_ref01_data_up0 as any)[api_entities_ci_variable_ref01_markdef_up0.name] = api_entities_ci_variable_ref01_markdef_up0.value

    const api_entities_ci_variable_ref01_resdata_up0 = (await api_entities_ci_variable_ref01_ent.update(api_entities_ci_variable_ref01_data_up0)).data()
    assert(api_entities_ci_variable_ref01_resdata_up0.id === api_entities_ci_variable_ref01_data_up0.id)

    assert((api_entities_ci_variable_ref01_resdata_up0 as any)[api_entities_ci_variable_ref01_markdef_up0.name] === api_entities_ci_variable_ref01_markdef_up0.value)


    // LOAD
    const api_entities_ci_variable_ref01_match_dt0: any = {}
    api_entities_ci_variable_ref01_match_dt0.id = api_entities_ci_variable_ref01_data.id
    const api_entities_ci_variable_ref01_data_dt0 = (await api_entities_ci_variable_ref01_ent.load(api_entities_ci_variable_ref01_match_dt0)).data()
    assert(api_entities_ci_variable_ref01_data_dt0.id === api_entities_ci_variable_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_ci_variable/ApiEntitiesCiVariableTestData.json')

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
    ['api_entities_ci_variable01','api_entities_ci_variable02','api_entities_ci_variable03','group01','group02','group03','project01','project02','project03','pipeline01','pipeline_schedule01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_CI_VARIABLE_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_CI_VARIABLE_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_CI_VARIABLE_ENTID']
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
  
