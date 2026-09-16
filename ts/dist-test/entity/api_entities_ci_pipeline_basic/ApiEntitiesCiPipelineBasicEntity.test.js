"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('ApiEntitiesCiPipelineBasicEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.ApiEntitiesCiPipelineBasic();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'api_entities_ci_pipeline_basic.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "format": "date-time", "name": "created_at", "req": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "format": "int32", "name": "id", "req": false, "type": "`$INTEGER`", "index$": 1 }, { "active": true, "format": "int32", "name": "iid", "req": false, "type": "`$INTEGER`", "index$": 2 }, { "active": true, "format": "int32", "name": "project_id", "req": false, "type": "`$INTEGER`", "index$": 3 }, { "active": true, "name": "ref", "req": false, "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "sha", "req": false, "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "source", "req": false, "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "status", "req": false, "type": "`$STRING`", "index$": 7 }, { "active": true, "format": "date-time", "name": "updated_at", "req": false, "type": "`$STRING`", "index$": 8 }, { "active": true, "name": "web_url", "req": false, "type": "`$STRING`", "index$": 9 }], "id": { "field": "id", "name": "id" }, "name": "api_entities_ci_pipeline_basic", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "params": [{ "active": true, "example": 11, "kind": "param", "name": "project_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }], "query": [{ "active": true, "example": "2015-12-24T15:51:21.880Z", "kind": "query", "name": "created_after", "orig": "created_after", "reqd": false, "type": "`$ANY`", "index$": 0 }, { "active": true, "example": "2015-12-24T15:51:21.880Z", "kind": "query", "name": "created_before", "orig": "created_before", "reqd": false, "type": "`$ANY`", "index$": 1 }, { "active": true, "example": "Build pipeline", "kind": "query", "name": "name", "orig": "name", "reqd": false, "type": "`$STRING`", "index$": 2 }, { "active": true, "example": "status", "kind": "query", "name": "order_by", "orig": "order_by", "reqd": false, "type": "`$ANY`", "index$": 3 }, { "active": true, "example": 1, "kind": "query", "name": "page", "orig": "page", "reqd": false, "type": "`$INTEGER`", "index$": 4 }, { "active": true, "example": 20, "kind": "query", "name": "per_page", "orig": "per_page", "reqd": false, "type": "`$INTEGER`", "index$": 5 }, { "active": true, "example": "develop", "kind": "query", "name": "ref", "orig": "ref", "reqd": false, "type": "`$ANY`", "index$": 6 }, { "active": true, "example": "pending", "kind": "query", "name": "scope", "orig": "scope", "reqd": false, "type": "`$ANY`", "index$": 7 }, { "active": true, "example": "a91957a858320c0e17f3a0eca7cfacbff50ea29a", "kind": "query", "name": "sha", "orig": "sha", "reqd": false, "type": "`$ANY`", "index$": 8 }, { "active": true, "example": "asc", "kind": "query", "name": "sort", "orig": "sort", "reqd": false, "type": "`$ANY`", "index$": 9 }, { "active": true, "example": "push", "kind": "query", "name": "source", "orig": "source", "reqd": false, "type": "`$ANY`", "index$": 10 }, { "active": true, "example": "pending", "kind": "query", "name": "status", "orig": "status", "reqd": false, "type": "`$ANY`", "index$": 11 }, { "active": true, "example": "2015-12-24T15:51:21.880Z", "kind": "query", "name": "updated_after", "orig": "updated_after", "reqd": false, "type": "`$ANY`", "index$": 12 }, { "active": true, "example": "2015-12-24T15:51:21.880Z", "kind": "query", "name": "updated_before", "orig": "updated_before", "reqd": false, "type": "`$ANY`", "index$": 13 }, { "active": true, "example": "root", "kind": "query", "name": "username", "orig": "username", "reqd": false, "type": "`$STRING`", "index$": 14 }, { "active": true, "kind": "query", "name": "yaml_error", "orig": "yaml_error", "reqd": false, "type": "`$ANY`", "index$": 15 }] }, "contract": { "id": "GET /api/v4/projects/{id}/pipelines", "json": "{\"operationId\":\"getApiV4ProjectsIdPipelines\",\"parameters\":[{\"description\":\"The project ID or URL-encoded path\",\"example\":11,\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"default\":1,\"description\":\"Current page number\",\"example\":1,\"format\":\"int32\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"type\":\"integer\"},{\"default\":20,\"description\":\"Number of items per page\",\"example\":20,\"format\":\"int32\",\"in\":\"query\",\"name\":\"per_page\",\"required\":false,\"type\":\"integer\"},{\"description\":\"The scope of pipelines\",\"enum\":[\"running\",\"pending\",\"finished\",\"branches\",\"tags\"],\"example\":\"pending\",\"in\":\"query\",\"name\":\"scope\",\"required\":false,\"type\":\"string\"},{\"description\":\"The status of pipelines\",\"enum\":[\"created\",\"waiting_for_resource\",\"preparing\",\"waiting_for_callback\",\"pending\",\"running\",\"success\",\"failed\",\"canceling\",\"canceled\",\"skipped\",\"manual\",\"scheduled\"],\"example\":\"pending\",\"in\":\"query\",\"name\":\"status\",\"required\":false,\"type\":\"string\"},{\"description\":\"The ref of pipelines\",\"example\":\"develop\",\"in\":\"query\",\"name\":\"ref\",\"required\":false,\"type\":\"string\"},{\"description\":\"The sha of pipelines\",\"example\":\"a91957a858320c0e17f3a0eca7cfacbff50ea29a\",\"in\":\"query\",\"name\":\"sha\",\"required\":false,\"type\":\"string\"},{\"description\":\"Returns pipelines with invalid configurations\",\"in\":\"query\",\"name\":\"yaml_errors\",\"required\":false,\"type\":\"boolean\"},{\"description\":\"The username of the user who triggered pipelines\",\"example\":\"root\",\"in\":\"query\",\"name\":\"username\",\"required\":false,\"type\":\"string\"},{\"description\":\"Return pipelines updated before the specified datetime. Format: ISO 8601 YYYY-MM-DDTHH:MM:SSZ\",\"example\":\"2015-12-24T15:51:21.880Z\",\"format\":\"date-time\",\"in\":\"query\",\"name\":\"updated_before\",\"required\":false,\"type\":\"string\"},{\"description\":\"Return pipelines updated after the specified datetime. Format: ISO 8601 YYYY-MM-DDTHH:MM:SSZ\",\"example\":\"2015-12-24T15:51:21.880Z\",\"format\":\"date-time\",\"in\":\"query\",\"name\":\"updated_after\",\"required\":false,\"type\":\"string\"},{\"description\":\"Return pipelines created before the specified datetime. Format: ISO 8601 YYYY-MM-DDTHH:MM:SSZ\",\"example\":\"2015-12-24T15:51:21.880Z\",\"format\":\"date-time\",\"in\":\"query\",\"name\":\"created_before\",\"required\":false,\"type\":\"string\"},{\"description\":\"Return pipelines created after the specified datetime. Format: ISO 8601 YYYY-MM-DDTHH:MM:SSZ\",\"example\":\"2015-12-24T15:51:21.880Z\",\"format\":\"date-time\",\"in\":\"query\",\"name\":\"created_after\",\"required\":false,\"type\":\"string\"},{\"default\":\"id\",\"description\":\"Order pipelines\",\"enum\":[\"id\",\"status\",\"ref\",\"updated_at\",\"user_id\"],\"example\":\"status\",\"in\":\"query\",\"name\":\"order_by\",\"required\":false,\"type\":\"string\"},{\"default\":\"desc\",\"description\":\"Sort pipelines\",\"enum\":[\"asc\",\"desc\"],\"example\":\"asc\",\"in\":\"query\",\"name\":\"sort\",\"required\":false,\"type\":\"string\"},{\"enum\":[\"unknown\",\"push\",\"web\",\"trigger\",\"schedule\",\"api\",\"external\",\"pipeline\",\"chat\",\"webide\",\"merge_request_event\",\"external_pull_request_event\",\"parent_pipeline\",\"ondemand_dast_scan\",\"ondemand_dast_validation\",\"security_orchestration_policy\",\"container_registry_push\",\"duo_workflow\",\"pipeline_execution_policy_schedule\"],\"example\":\"push\",\"in\":\"query\",\"name\":\"source\",\"required\":false,\"type\":\"string\"},{\"description\":\"Filter pipelines by name\",\"example\":\"Build pipeline\",\"in\":\"query\",\"name\":\"name\",\"required\":false,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get all Pipelines of the project\",\"schema\":{\"items\":{\"description\":\"API_Entities_Ci_PipelineBasic model\",\"properties\":{\"created_at\":{\"example\":\"2022-10-21T16:49:48.000+02:00\",\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"iid\":{\"example\":2,\"format\":\"int32\",\"type\":\"integer\"},\"project_id\":{\"example\":3,\"format\":\"int32\",\"type\":\"integer\"},\"ref\":{\"example\":\"feature-branch\",\"type\":\"string\"},\"sha\":{\"example\":\"0ec9e58fdfca6cdd6652c083c9edb53abc0bad52\",\"type\":\"string\"},\"source\":{\"example\":\"push\",\"type\":\"string\"},\"status\":{\"example\":\"success\",\"type\":\"string\"},\"updated_at\":{\"example\":\"2022-10-21T16:49:48.000+02:00\",\"format\":\"date-time\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/gitlab-org/gitlab-foss/-/pipelines/61\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/v4/projects/{id}/pipelines", "rename": { "param": { "id": "project_id" } }, "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "pipelines" }], "select": { "exist": ["created_after", "created_before", "name", "order_by", "page", "per_page", "project_id", "ref", "scope", "sha", "sort", "source", "status", "updated_after", "updated_before", "username", "yaml_error"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "active": true, "args": { "params": [{ "active": true, "example": 13, "kind": "param", "name": "pipeline_schedule_id", "orig": "pipeline_schedule_id", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": 18, "kind": "param", "name": "project_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 1 }] }, "contract": { "id": "GET /api/v4/projects/{id}/pipeline_schedules/{pipeline_schedule_id}/pipelines", "json": "{\"operationId\":\"getApiV4ProjectsIdPipelineSchedulesPipelineScheduleIdPipelines\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"example\":18,\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The pipeline schedule ID\",\"example\":13,\"format\":\"int32\",\"in\":\"path\",\"name\":\"pipeline_schedule_id\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get all pipelines triggered from a pipeline schedule\",\"schema\":{\"items\":{\"description\":\"API_Entities_Ci_PipelineBasic model\",\"properties\":{\"created_at\":{\"example\":\"2022-10-21T16:49:48.000+02:00\",\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"iid\":{\"example\":2,\"format\":\"int32\",\"type\":\"integer\"},\"project_id\":{\"example\":3,\"format\":\"int32\",\"type\":\"integer\"},\"ref\":{\"example\":\"feature-branch\",\"type\":\"string\"},\"sha\":{\"example\":\"0ec9e58fdfca6cdd6652c083c9edb53abc0bad52\",\"type\":\"string\"},\"source\":{\"example\":\"push\",\"type\":\"string\"},\"status\":{\"example\":\"success\",\"type\":\"string\"},\"updated_at\":{\"example\":\"2022-10-21T16:49:48.000+02:00\",\"format\":\"date-time\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/gitlab-org/gitlab-foss/-/pipelines/61\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/v4/projects/{id}/pipeline_schedules/{pipeline_schedule_id}/pipelines", "rename": { "param": { "id": "project_id" } }, "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "pipeline_schedules" }, { "var": "pipeline_schedule_id" }, { "lit": "pipelines" }], "select": { "exist": ["pipeline_schedule_id", "project_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "merge_request_id", "orig": "merge_request_iid", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "param", "name": "project_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 1 }] }, "contract": { "id": "GET /api/v4/projects/{id}/merge_requests/{merge_request_iid}/pipelines", "json": "{\"operationId\":\"getApiV4ProjectsIdMergeRequestsMergeRequestIidPipelines\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project.\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The internal ID of the merge request.\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"merge_request_iid\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get single merge request pipelines\",\"schema\":{\"description\":\"API_Entities_Ci_PipelineBasic model\",\"properties\":{\"created_at\":{\"example\":\"2022-10-21T16:49:48.000+02:00\",\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"iid\":{\"example\":2,\"format\":\"int32\",\"type\":\"integer\"},\"project_id\":{\"example\":3,\"format\":\"int32\",\"type\":\"integer\"},\"ref\":{\"example\":\"feature-branch\",\"type\":\"string\"},\"sha\":{\"example\":\"0ec9e58fdfca6cdd6652c083c9edb53abc0bad52\",\"type\":\"string\"},\"source\":{\"example\":\"push\",\"type\":\"string\"},\"status\":{\"example\":\"success\",\"type\":\"string\"},\"updated_at\":{\"example\":\"2022-10-21T16:49:48.000+02:00\",\"format\":\"date-time\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/gitlab-org/gitlab-foss/-/pipelines/61\",\"type\":\"string\"}},\"type\":\"object\"}},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/v4/projects/{id}/merge_requests/{merge_request_iid}/pipelines", "rename": { "param": { "id": "project_id", "merge_request_iid": "merge_request_id" } }, "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "merge_requests" }, { "var": "merge_request_id" }, { "lit": "pipelines" }], "select": { "exist": ["merge_request_id", "project_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [["project"], ["project", "merge_request"], ["project", "pipeline_schedule"]] }, "key$": "api_entities_ci_pipeline_basic", "name__orig": "api_entities_ci_pipeline_basic", "Name": "ApiEntitiesCiPipelineBasic", "name_": "api_entities_ci_pipeline_basic", "name-": "api-entities-ci-pipeline-basic", "NAME": "API_ENTITIES_CI_PIPELINE_BASIC", "index$": 28 }, { "active": true, "entity": "api_entities_ci_pipeline_basic", "key$": "BasicApiEntitiesCiPipelineBasicFlow", "kind": "basic", "name": "BasicApiEntitiesCiPipelineBasicFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": { "pipeline_schedule_id": "pipeline_schedule01", "project_id": "project01" }, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "api_entities_ci_pipeline_basic_ref01" } }], "index$": 0 }, { "active": true, "data": {}, "input": { "ref": "api_entities_ci_pipeline_basic_ref01", "srcdatavar": "api_entities_ci_pipeline_basic_ref01_data", "suffix": "_dt0" }, "match": { "id": "api_entities_ci_pipeline_basic01", "project_id": "project01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-api_entities_ci_pipeline_basic_ref01" } }], "index$": 1 }] }, 'ApiEntitiesCiPipelineBasic');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let api_entities_ci_pipeline_basic_ref01_data = Object.values(setup.data.existing.api_entities_ci_pipeline_basic)[0];
        // LIST
        const api_entities_ci_pipeline_basic_ref01_ent = client.ApiEntitiesCiPipelineBasic();
        const api_entities_ci_pipeline_basic_ref01_match = {};
        api_entities_ci_pipeline_basic_ref01_match['pipeline_schedule_id'] = setup.idmap['pipeline_schedule01'];
        api_entities_ci_pipeline_basic_ref01_match['project_id'] = setup.idmap['project01'];
        const api_entities_ci_pipeline_basic_ref01_list = (await api_entities_ci_pipeline_basic_ref01_ent.list(api_entities_ci_pipeline_basic_ref01_match)).map((e) => e.data());
        // LOAD
        const api_entities_ci_pipeline_basic_ref01_match_dt0 = {};
        api_entities_ci_pipeline_basic_ref01_match_dt0.id = api_entities_ci_pipeline_basic_ref01_data.id;
        const api_entities_ci_pipeline_basic_ref01_data_dt0 = (await api_entities_ci_pipeline_basic_ref01_ent.load(api_entities_ci_pipeline_basic_ref01_match_dt0)).data();
        (0, node_assert_1.default)(api_entities_ci_pipeline_basic_ref01_data_dt0.id === api_entities_ci_pipeline_basic_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/api_entities_ci_pipeline_basic/ApiEntitiesCiPipelineBasicTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['api_entities_ci_pipeline_basic01', 'api_entities_ci_pipeline_basic02', 'api_entities_ci_pipeline_basic03', 'project01', 'project02', 'project03', 'project01', 'project02', 'project03', 'merge_request01', 'merge_request02', 'merge_request03', 'project01', 'project02', 'project03', 'pipeline_schedule01', 'pipeline_schedule02', 'pipeline_schedule03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_API_ENTITIES_CI_PIPELINE_BASIC_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_API_ENTITIES_CI_PIPELINE_BASIC_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_API_ENTITIES_CI_PIPELINE_BASIC_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.GitlabSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
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
        ]));
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
    };
    return setup;
}
//# sourceMappingURL=ApiEntitiesCiPipelineBasicEntity.test.js.map