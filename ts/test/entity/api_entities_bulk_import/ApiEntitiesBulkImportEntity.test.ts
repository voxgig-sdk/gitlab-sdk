

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


describe('ApiEntitiesBulkImportEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesBulkImport()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create', 'list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_bulk_import.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"int32","name":"bulk_import_id","req":false,"type":"`$INTEGER`","index$":0},{"active":true,"format":"date-time","name":"created_at","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"destination_full_path","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"destination_name","req":false,"type":"`$STRING`","index$":3},{"active":true,"name":"destination_namespace","req":false,"type":"`$STRING`","index$":4},{"active":true,"name":"destination_slug","req":false,"type":"`$STRING`","index$":5},{"active":true,"name":"entity_type","req":false,"type":"`$STRING`","index$":6},{"active":true,"name":"failures","req":false,"type":"`$ARRAY`","index$":7},{"active":true,"name":"has_failures","req":false,"type":"`$BOOLEAN`","index$":8},{"active":true,"format":"int32","name":"id","req":false,"type":"`$INTEGER`","index$":9},{"active":true,"name":"migrate_memberships","req":false,"type":"`$BOOLEAN`","index$":10},{"active":true,"name":"migrate_projects","req":false,"type":"`$BOOLEAN`","index$":11},{"active":true,"format":"int32","name":"namespace_id","req":false,"type":"`$INTEGER`","index$":12},{"active":true,"format":"int32","name":"parent_id","req":false,"type":"`$INTEGER`","index$":13},{"active":true,"format":"int32","name":"project_id","req":false,"type":"`$INTEGER`","index$":14},{"active":true,"name":"source_full_path","req":false,"type":"`$STRING`","index$":15},{"active":true,"name":"source_type","req":false,"type":"`$STRING`","index$":16},{"active":true,"name":"source_url","req":false,"type":"`$STRING`","index$":17},{"active":true,"name":"stats","req":false,"type":"`$OBJECT`","index$":18},{"active":true,"name":"status","req":false,"type":"`$STRING`","index$":19},{"active":true,"format":"date-time","name":"updated_at","req":false,"type":"`$STRING`","index$":20}],"id":{"field":"id","name":"id"},"name":"api_entities_bulk_import","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"configuration_access_token","orig":"configuration_access_token","reqd":true,"type":"`$ANY`","index$":0},{"active":true,"kind":"query","name":"configuration_url","orig":"configuration_url","reqd":true,"type":"`$ANY`","index$":1},{"active":true,"example":"'destination_slug' not 'destination/slug'","kind":"query","name":"entities_destination_name","orig":"entities_destination_name","reqd":false,"type":"`$ANY`","index$":2},{"active":true,"example":"'destination_namespace' or 'destination/namespace'","kind":"query","name":"entities_destination_namespace","orig":"entities_destination_namespace","reqd":true,"type":"`$ANY`","index$":3},{"active":true,"example":"'destination_slug' not 'destination/slug'","kind":"query","name":"entities_destination_slug","orig":"entities_destination_slug","reqd":false,"type":"`$ANY`","index$":4},{"active":true,"kind":"query","name":"entities_migrate_membership","orig":"entities_migrate_membership","reqd":false,"type":"`$ANY`","index$":5},{"active":true,"kind":"query","name":"entities_migrate_project","orig":"entities_migrate_project","reqd":false,"type":"`$ANY`","index$":6},{"active":true,"example":"'source/full/path' not 'https://example.com/source/full/path'","kind":"query","name":"entities_source_full_path","orig":"entities_source_full_path","reqd":true,"type":"`$ANY`","index$":7},{"active":true,"kind":"query","name":"entities_source_type","orig":"entities_source_type","reqd":true,"type":"`$ANY`","index$":8}]},"contract":{"id":"POST /api/v4/bulk_imports","json":"{\"consumes\":[\"application/x-www-form-urlencoded\"],\"operationId\":\"postApiV4BulkImports\",\"parameters\":[{\"description\":\"Source GitLab instance URL\",\"in\":\"formData\",\"name\":\"configuration[url]\",\"required\":true,\"type\":\"string\"},{\"description\":\"Access token to the source GitLab instance\",\"in\":\"formData\",\"name\":\"configuration[access_token]\",\"required\":true,\"type\":\"string\"},{\"description\":\"Source entity type\",\"in\":\"formData\",\"items\":{\"enum\":[\"group_entity\",\"project_entity\"],\"type\":\"string\"},\"name\":\"entities[source_type]\",\"required\":true,\"type\":\"array\"},{\"description\":\"Relative path of the source entity to import\",\"example\":\"'source/full/path' not 'https://example.com/source/full/path'\",\"in\":\"formData\",\"items\":{\"type\":\"string\"},\"name\":\"entities[source_full_path]\",\"required\":true,\"type\":\"array\"},{\"description\":\"Destination namespace for the entity\",\"example\":\"'destination_namespace' or 'destination/namespace'\",\"in\":\"formData\",\"items\":{\"type\":\"string\"},\"name\":\"entities[destination_namespace]\",\"required\":true,\"type\":\"array\"},{\"description\":\"Destination slug for the entity\",\"example\":\"'destination_slug' not 'destination/slug'\",\"in\":\"formData\",\"items\":{\"type\":\"string\"},\"name\":\"entities[destination_slug]\",\"required\":false,\"type\":\"array\"},{\"description\":\"Deprecated: Use :destination_slug instead. Destination slug for the entity\",\"example\":\"'destination_slug' not 'destination/slug'\",\"in\":\"formData\",\"items\":{\"type\":\"string\"},\"name\":\"entities[destination_name]\",\"required\":false,\"type\":\"array\"},{\"default\":true,\"description\":\"Indicates group migration should include nested projects\",\"in\":\"formData\",\"items\":{\"type\":\"boolean\"},\"name\":\"entities[migrate_projects]\",\"required\":false,\"type\":\"array\"},{\"default\":true,\"description\":\"The option to migrate memberships or not\",\"in\":\"formData\",\"items\":{\"type\":\"boolean\"},\"name\":\"entities[migrate_memberships]\",\"required\":false,\"type\":\"array\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Start a new GitLab Migration\",\"schema\":{\"description\":\"API_Entities_BulkImport model\",\"properties\":{\"created_at\":{\"example\":\"2012-05-28T04:42:42-07:00\",\"format\":\"date-time\",\"type\":\"string\"},\"has_failures\":{\"example\":false,\"type\":\"boolean\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"source_type\":{\"example\":\"gitlab\",\"type\":\"string\"},\"source_url\":{\"example\":\"https://source.gitlab.com/\",\"type\":\"string\"},\"status\":{\"enum\":[\"created\",\"started\",\"finished\",\"timeout\",\"failed\"],\"example\":\"finished\",\"type\":\"string\"},\"updated_at\":{\"example\":\"2012-05-28T04:42:42-07:00\",\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Bad request\"},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not found\"},\"422\":{\"description\":\"Unprocessable entity\"},\"503\":{\"description\":\"Service unavailable\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/bulk_imports","segments":[{"lit":"api"},{"lit":"v4"},{"lit":"bulk_imports"}],"select":{"exist":["configuration_access_token","configuration_url","entities_destination_name","entities_destination_namespace","entities_destination_slug","entities_migrate_membership","entities_migrate_project","entities_source_full_path","entities_source_type"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"bulk_import_id","orig":"import_id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"POST /api/v4/bulk_imports/{import_id}/cancel","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4BulkImportsImportIdCancel\",\"parameters\":[{\"description\":\"The ID of user's GitLab Migration\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"import_id\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Cancel GitLab Migration\",\"schema\":{\"description\":\"API_Entities_BulkImport model\",\"properties\":{\"created_at\":{\"example\":\"2012-05-28T04:42:42-07:00\",\"format\":\"date-time\",\"type\":\"string\"},\"has_failures\":{\"example\":false,\"type\":\"boolean\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"source_type\":{\"example\":\"gitlab\",\"type\":\"string\"},\"source_url\":{\"example\":\"https://source.gitlab.com/\",\"type\":\"string\"},\"status\":{\"enum\":[\"created\",\"started\",\"finished\",\"timeout\",\"failed\"],\"example\":\"finished\",\"type\":\"string\"},\"updated_at\":{\"example\":\"2012-05-28T04:42:42-07:00\",\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not found\"},\"503\":{\"description\":\"Service unavailable\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/bulk_imports/{import_id}/cancel","rename":{"param":{"import_id":"bulk_import_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"bulk_imports"},{"var":"bulk_import_id"},{"lit":"cancel"}],"select":{"exist":["bulk_import_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"bulk_import_id","orig":"import_id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"example":20,"kind":"query","name":"per_page","orig":"per_page","reqd":false,"type":"`$INTEGER`","index$":1},{"active":true,"kind":"query","name":"status","orig":"status","reqd":false,"type":"`$ANY`","index$":2}]},"contract":{"id":"GET /api/v4/bulk_imports/{import_id}/entities","json":"{\"operationId\":\"getApiV4BulkImportsImportIdEntities\",\"parameters\":[{\"description\":\"The ID of user's GitLab Migration\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"import_id\",\"required\":true,\"type\":\"integer\"},{\"description\":\"Return import entities with specified status\",\"enum\":[\"created\",\"started\",\"finished\",\"timeout\",\"failed\",\"canceled\"],\"in\":\"query\",\"name\":\"status\",\"required\":false,\"type\":\"string\"},{\"default\":1,\"description\":\"Current page number\",\"example\":1,\"format\":\"int32\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"type\":\"integer\"},{\"default\":20,\"description\":\"Number of items per page\",\"example\":20,\"format\":\"int32\",\"in\":\"query\",\"name\":\"per_page\",\"required\":false,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"List GitLab Migration entities\",\"schema\":{\"items\":{\"description\":\"API_Entities_BulkImports model\",\"properties\":{\"bulk_import_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"created_at\":{\"example\":\"2012-05-28T04:42:42-07:00\",\"format\":\"date-time\",\"type\":\"string\"},\"destination_full_path\":{\"example\":\"some_group/source_project\",\"type\":\"string\"},\"destination_name\":{\"example\":\"destination_slug\",\"type\":\"string\"},\"destination_namespace\":{\"example\":\"destination_path\",\"type\":\"string\"},\"destination_slug\":{\"example\":\"destination_slug\",\"type\":\"string\"},\"entity_type\":{\"enum\":[\"group\",\"project\"],\"type\":\"string\"},\"failures\":{\"items\":{\"description\":\"API_Entities_BulkImports_EntityFailure model\",\"properties\":{\"correlation_id_value\":{\"example\":\"dfcf583058ed4508e4c7c617bd7f0edd\",\"type\":\"string\"},\"exception_class\":{\"example\":\"Exception\",\"type\":\"string\"},\"exception_message\":{\"example\":\"error message\",\"type\":\"string\"},\"relation\":{\"example\":\"label\",\"type\":\"string\"},\"source_title\":{\"example\":\"title\",\"type\":\"string\"},\"source_url\":{\"example\":\"https://source.gitlab.com/group/-/epics/1\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"has_failures\":{\"example\":false,\"type\":\"boolean\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"migrate_memberships\":{\"example\":true,\"type\":\"boolean\"},\"migrate_projects\":{\"example\":true,\"type\":\"boolean\"},\"namespace_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"parent_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"project_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"source_full_path\":{\"example\":\"source_group\",\"type\":\"string\"},\"stats\":{\"type\":\"object\"},\"status\":{\"enum\":[\"created\",\"started\",\"finished\",\"timeout\",\"failed\"],\"example\":\"created\",\"type\":\"string\"},\"updated_at\":{\"example\":\"2012-05-28T04:42:42-07:00\",\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not found\"},\"503\":{\"description\":\"Service unavailable\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/bulk_imports/{import_id}/entities","rename":{"param":{"import_id":"bulk_import_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"bulk_imports"},{"var":"bulk_import_id"},{"lit":"entities"}],"select":{"exist":["bulk_import_id","page","per_page","status"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"query":[{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"example":20,"kind":"query","name":"per_page","orig":"per_page","reqd":false,"type":"`$INTEGER`","index$":1},{"active":true,"kind":"query","name":"sort","orig":"sort","reqd":false,"type":"`$ANY`","index$":2},{"active":true,"kind":"query","name":"status","orig":"status","reqd":false,"type":"`$ANY`","index$":3}]},"contract":{"id":"GET /api/v4/bulk_imports","json":"{\"operationId\":\"getApiV4BulkImports\",\"parameters\":[{\"default\":1,\"description\":\"Current page number\",\"example\":1,\"format\":\"int32\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"type\":\"integer\"},{\"default\":20,\"description\":\"Number of items per page\",\"example\":20,\"format\":\"int32\",\"in\":\"query\",\"name\":\"per_page\",\"required\":false,\"type\":\"integer\"},{\"default\":\"desc\",\"description\":\"Return GitLab Migrations sorted in created by `asc` or `desc` order.\",\"enum\":[\"asc\",\"desc\"],\"in\":\"query\",\"name\":\"sort\",\"required\":false,\"type\":\"string\"},{\"description\":\"Return GitLab Migrations with specified status\",\"enum\":[\"created\",\"started\",\"finished\",\"timeout\",\"failed\",\"canceled\"],\"in\":\"query\",\"name\":\"status\",\"required\":false,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"List all GitLab Migrations\",\"schema\":{\"items\":{\"description\":\"API_Entities_BulkImport model\",\"properties\":{\"created_at\":{\"example\":\"2012-05-28T04:42:42-07:00\",\"format\":\"date-time\",\"type\":\"string\"},\"has_failures\":{\"example\":false,\"type\":\"boolean\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"source_type\":{\"example\":\"gitlab\",\"type\":\"string\"},\"source_url\":{\"example\":\"https://source.gitlab.com/\",\"type\":\"string\"},\"status\":{\"enum\":[\"created\",\"started\",\"finished\",\"timeout\",\"failed\"],\"example\":\"finished\",\"type\":\"string\"},\"updated_at\":{\"example\":\"2012-05-28T04:42:42-07:00\",\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not found\"},\"503\":{\"description\":\"Service unavailable\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/bulk_imports","segments":[{"lit":"api"},{"lit":"v4"},{"lit":"bulk_imports"}],"select":{"exist":["page","per_page","sort","status"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"query":[{"active":true,"example":1,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"example":20,"kind":"query","name":"per_page","orig":"per_page","reqd":false,"type":"`$INTEGER`","index$":1},{"active":true,"kind":"query","name":"sort","orig":"sort","reqd":false,"type":"`$ANY`","index$":2},{"active":true,"kind":"query","name":"status","orig":"status","reqd":false,"type":"`$ANY`","index$":3}]},"contract":{"id":"GET /api/v4/bulk_imports/entities","json":"{\"operationId\":\"getApiV4BulkImportsEntities\",\"parameters\":[{\"default\":1,\"description\":\"Current page number\",\"example\":1,\"format\":\"int32\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"type\":\"integer\"},{\"default\":20,\"description\":\"Number of items per page\",\"example\":20,\"format\":\"int32\",\"in\":\"query\",\"name\":\"per_page\",\"required\":false,\"type\":\"integer\"},{\"default\":\"desc\",\"description\":\"Return GitLab Migrations sorted in created by `asc` or `desc` order.\",\"enum\":[\"asc\",\"desc\"],\"in\":\"query\",\"name\":\"sort\",\"required\":false,\"type\":\"string\"},{\"description\":\"Return all GitLab Migrations' entities with specified status\",\"enum\":[\"created\",\"started\",\"finished\",\"timeout\",\"failed\",\"canceled\"],\"in\":\"query\",\"name\":\"status\",\"required\":false,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"List all GitLab Migrations' entities\",\"schema\":{\"items\":{\"description\":\"API_Entities_BulkImports model\",\"properties\":{\"bulk_import_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"created_at\":{\"example\":\"2012-05-28T04:42:42-07:00\",\"format\":\"date-time\",\"type\":\"string\"},\"destination_full_path\":{\"example\":\"some_group/source_project\",\"type\":\"string\"},\"destination_name\":{\"example\":\"destination_slug\",\"type\":\"string\"},\"destination_namespace\":{\"example\":\"destination_path\",\"type\":\"string\"},\"destination_slug\":{\"example\":\"destination_slug\",\"type\":\"string\"},\"entity_type\":{\"enum\":[\"group\",\"project\"],\"type\":\"string\"},\"failures\":{\"items\":{\"description\":\"API_Entities_BulkImports_EntityFailure model\",\"properties\":{\"correlation_id_value\":{\"example\":\"dfcf583058ed4508e4c7c617bd7f0edd\",\"type\":\"string\"},\"exception_class\":{\"example\":\"Exception\",\"type\":\"string\"},\"exception_message\":{\"example\":\"error message\",\"type\":\"string\"},\"relation\":{\"example\":\"label\",\"type\":\"string\"},\"source_title\":{\"example\":\"title\",\"type\":\"string\"},\"source_url\":{\"example\":\"https://source.gitlab.com/group/-/epics/1\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"has_failures\":{\"example\":false,\"type\":\"boolean\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"migrate_memberships\":{\"example\":true,\"type\":\"boolean\"},\"migrate_projects\":{\"example\":true,\"type\":\"boolean\"},\"namespace_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"parent_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"project_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"source_full_path\":{\"example\":\"source_group\",\"type\":\"string\"},\"stats\":{\"type\":\"object\"},\"status\":{\"enum\":[\"created\",\"started\",\"finished\",\"timeout\",\"failed\"],\"example\":\"created\",\"type\":\"string\"},\"updated_at\":{\"example\":\"2012-05-28T04:42:42-07:00\",\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not found\"},\"503\":{\"description\":\"Service unavailable\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/bulk_imports/entities","segments":[{"lit":"api"},{"lit":"v4"},{"lit":"bulk_imports"},{"lit":"entities"}],"select":{"exist":["page","per_page","sort","status"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"bulk_import_id","orig":"import_id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"entity_id","orig":"entity_id","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /api/v4/bulk_imports/{import_id}/entities/{entity_id}","json":"{\"operationId\":\"getApiV4BulkImportsImportIdEntitiesEntityId\",\"parameters\":[{\"description\":\"The ID of user's GitLab Migration\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"import_id\",\"required\":true,\"type\":\"integer\"},{\"description\":\"The ID of GitLab Migration entity\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"entity_id\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get GitLab Migration entity details\",\"schema\":{\"description\":\"API_Entities_BulkImports model\",\"properties\":{\"bulk_import_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"created_at\":{\"example\":\"2012-05-28T04:42:42-07:00\",\"format\":\"date-time\",\"type\":\"string\"},\"destination_full_path\":{\"example\":\"some_group/source_project\",\"type\":\"string\"},\"destination_name\":{\"example\":\"destination_slug\",\"type\":\"string\"},\"destination_namespace\":{\"example\":\"destination_path\",\"type\":\"string\"},\"destination_slug\":{\"example\":\"destination_slug\",\"type\":\"string\"},\"entity_type\":{\"enum\":[\"group\",\"project\"],\"type\":\"string\"},\"failures\":{\"items\":{\"description\":\"API_Entities_BulkImports_EntityFailure model\",\"properties\":{\"correlation_id_value\":{\"example\":\"dfcf583058ed4508e4c7c617bd7f0edd\",\"type\":\"string\"},\"exception_class\":{\"example\":\"Exception\",\"type\":\"string\"},\"exception_message\":{\"example\":\"error message\",\"type\":\"string\"},\"relation\":{\"example\":\"label\",\"type\":\"string\"},\"source_title\":{\"example\":\"title\",\"type\":\"string\"},\"source_url\":{\"example\":\"https://source.gitlab.com/group/-/epics/1\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"has_failures\":{\"example\":false,\"type\":\"boolean\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"migrate_memberships\":{\"example\":true,\"type\":\"boolean\"},\"migrate_projects\":{\"example\":true,\"type\":\"boolean\"},\"namespace_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"parent_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"project_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"source_full_path\":{\"example\":\"source_group\",\"type\":\"string\"},\"stats\":{\"type\":\"object\"},\"status\":{\"enum\":[\"created\",\"started\",\"finished\",\"timeout\",\"failed\"],\"example\":\"created\",\"type\":\"string\"},\"updated_at\":{\"example\":\"2012-05-28T04:42:42-07:00\",\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not found\"},\"503\":{\"description\":\"Service unavailable\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/bulk_imports/{import_id}/entities/{entity_id}","rename":{"param":{"import_id":"bulk_import_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"bulk_imports"},{"var":"bulk_import_id"},{"lit":"entities"},{"var":"entity_id"}],"select":{"exist":["bulk_import_id","entity_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"import_id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /api/v4/bulk_imports/{import_id}","json":"{\"operationId\":\"getApiV4BulkImportsImportId\",\"parameters\":[{\"description\":\"The ID of user's GitLab Migration\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"import_id\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get GitLab Migration details\",\"schema\":{\"description\":\"API_Entities_BulkImport model\",\"properties\":{\"created_at\":{\"example\":\"2012-05-28T04:42:42-07:00\",\"format\":\"date-time\",\"type\":\"string\"},\"has_failures\":{\"example\":false,\"type\":\"boolean\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"source_type\":{\"example\":\"gitlab\",\"type\":\"string\"},\"source_url\":{\"example\":\"https://source.gitlab.com/\",\"type\":\"string\"},\"status\":{\"enum\":[\"created\",\"started\",\"finished\",\"timeout\",\"failed\"],\"example\":\"finished\",\"type\":\"string\"},\"updated_at\":{\"example\":\"2012-05-28T04:42:42-07:00\",\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not found\"},\"503\":{\"description\":\"Service unavailable\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/bulk_imports/{import_id}","rename":{"param":{"import_id":"id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"bulk_imports"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["bulk_import"],["bulk_import","entity"]]},"key$":"api_entities_bulk_import","name__orig":"api_entities_bulk_import","Name":"ApiEntitiesBulkImport","name_":"api_entities_bulk_import","name-":"api-entities-bulk-import","NAME":"API_ENTITIES_BULK_IMPORT","index$":17}, {"active":true,"entity":"api_entities_bulk_import","key$":"BasicApiEntitiesBulkImportFlow","kind":"basic","name":"BasicApiEntitiesBulkImportFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"api_entities_bulk_import_ref01"},"match":{"bulk_import_id":"bulk_import01"},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"api_entities_bulk_import_ref01"}}],"index$":1},{"active":true,"data":{},"input":{"ref":"api_entities_bulk_import_ref01","srcdatavar":"api_entities_bulk_import_ref01_data","suffix":"_dt0"},"match":{"id":"api_entities_bulk_import01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_bulk_import_ref01"}}],"index$":2}]}, 'ApiEntitiesBulkImport')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const api_entities_bulk_import_ref01_ent = client.ApiEntitiesBulkImport()
    let api_entities_bulk_import_ref01_data = setup.data.new.api_entities_bulk_import['api_entities_bulk_import_ref01']
    api_entities_bulk_import_ref01_data['bulk_import_id'] = setup.idmap['bulk_import01']

    api_entities_bulk_import_ref01_data = (await api_entities_bulk_import_ref01_ent.create(api_entities_bulk_import_ref01_data)).data()
    assert(null != api_entities_bulk_import_ref01_data.id)


    // LIST
    const api_entities_bulk_import_ref01_match: any = {}

    const api_entities_bulk_import_ref01_list = (await api_entities_bulk_import_ref01_ent.list(api_entities_bulk_import_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(api_entities_bulk_import_ref01_list, { id: api_entities_bulk_import_ref01_data.id })))


    // LOAD
    const api_entities_bulk_import_ref01_match_dt0: any = {}
    api_entities_bulk_import_ref01_match_dt0.id = api_entities_bulk_import_ref01_data.id
    const api_entities_bulk_import_ref01_data_dt0 = (await api_entities_bulk_import_ref01_ent.load(api_entities_bulk_import_ref01_match_dt0)).data()
    assert(api_entities_bulk_import_ref01_data_dt0.id === api_entities_bulk_import_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_bulk_import/ApiEntitiesBulkImportTestData.json')

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
    ['api_entities_bulk_import01','api_entities_bulk_import02','api_entities_bulk_import03','bulk_import01','bulk_import02','bulk_import03','bulk_import01','bulk_import02','bulk_import03','entity01','entity02','entity03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_BULK_IMPORT_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_BULK_IMPORT_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_BULK_IMPORT_ENTID']
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
  
