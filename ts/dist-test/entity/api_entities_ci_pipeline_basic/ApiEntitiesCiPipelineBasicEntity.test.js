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
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": false, "t": "`$STRING`", "key$": "created_at", "index$": 0 }, "id": { "a": true, "fo": "int32", "h": "Id", "n": "id", "r": false, "t": "`$INTEGER`", "key$": "id", "index$": 1 }, "iid": { "a": true, "fo": "int32", "h": "Iid", "n": "iid", "r": false, "t": "`$INTEGER`", "key$": "iid", "index$": 2 }, "project_id": { "a": true, "fo": "int32", "h": "Project Id", "n": "project_id", "r": false, "t": "`$INTEGER`", "key$": "project_id", "index$": 3 }, "ref": { "a": true, "h": "Ref", "n": "ref", "r": false, "t": "`$STRING`", "key$": "ref", "index$": 4 }, "sha": { "a": true, "h": "Sha", "n": "sha", "r": false, "t": "`$STRING`", "key$": "sha", "index$": 5 }, "source": { "a": true, "h": "Source", "n": "source", "r": false, "t": "`$STRING`", "key$": "source", "index$": 6 }, "status": { "a": true, "h": "Status", "n": "status", "r": false, "t": "`$STRING`", "key$": "status", "index$": 7 }, "updated_at": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updated_at", "r": false, "t": "`$STRING`", "key$": "updated_at", "index$": 8 }, "web_url": { "a": true, "h": "Web Url", "n": "web_url", "r": false, "t": "`$STRING`", "key$": "web_url", "index$": 9 } }, "id": { "field": "id", "name": "id" }, "name": "api_entities_ci_pipeline_basic", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /api/v4/projects/{id}/pipelines", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "ex": 11, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": "2015-12-24T15:51:21.880Z", "k": "query", "n": "created_after", "or": "created_after", "r": false, "t": "`$ANY`", "index$": 0 }, { "a": true, "ex": "2015-12-24T15:51:21.880Z", "k": "query", "n": "created_before", "or": "created_before", "r": false, "t": "`$ANY`", "index$": 1 }, { "a": true, "ex": "Build pipeline", "k": "query", "n": "name", "or": "name", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "ex": "status", "k": "query", "n": "order_by", "or": "order_by", "r": false, "t": "`$ANY`", "index$": 3 }, { "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 4 }, { "a": true, "ex": 20, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$INTEGER`", "index$": 5 }, { "a": true, "ex": "develop", "k": "query", "n": "ref", "or": "ref", "r": false, "t": "`$ANY`", "index$": 6 }, { "a": true, "ex": "pending", "k": "query", "n": "scope", "or": "scope", "r": false, "t": "`$ANY`", "index$": 7 }, { "a": true, "ex": "a91957a858320c0e17f3a0eca7cfacbff50ea29a", "k": "query", "n": "sha", "or": "sha", "r": false, "t": "`$ANY`", "index$": 8 }, { "a": true, "ex": "asc", "k": "query", "n": "sort", "or": "sort", "r": false, "t": "`$ANY`", "index$": 9 }, { "a": true, "ex": "push", "k": "query", "n": "source", "or": "source", "r": false, "t": "`$ANY`", "index$": 10 }, { "a": true, "ex": "pending", "k": "query", "n": "status", "or": "status", "r": false, "t": "`$ANY`", "index$": 11 }, { "a": true, "ex": "2015-12-24T15:51:21.880Z", "k": "query", "n": "updated_after", "or": "updated_after", "r": false, "t": "`$ANY`", "index$": 12 }, { "a": true, "ex": "2015-12-24T15:51:21.880Z", "k": "query", "n": "updated_before", "or": "updated_before", "r": false, "t": "`$ANY`", "index$": 13 }, { "a": true, "ex": "root", "k": "query", "n": "username", "or": "username", "r": false, "t": "`$STRING`", "index$": 14 }, { "a": true, "k": "query", "n": "yaml_error", "or": "yaml_error", "r": false, "t": "`$ANY`", "index$": 15 }] }, "k": "http", "m": "GET", "o": "/api/v4/projects/{id}/pipelines", "q": { "exist": ["created_after", "created_before", "name", "order_by", "page", "per_page", "project_id", "ref", "scope", "sha", "sort", "source", "status", "updated_after", "updated_before", "username", "yaml_error"] }, "r": { "param": { "id": "project_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "pipelines" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /api/v4/projects/{id}/pipeline_schedules/{pipeline_schedule_id}/pipelines", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "ex": 13, "k": "param", "n": "pipeline_schedule_id", "or": "pipeline_schedule_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": 18, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/api/v4/projects/{id}/pipeline_schedules/{pipeline_schedule_id}/pipelines", "q": { "exist": ["pipeline_schedule_id", "project_id"] }, "r": { "param": { "id": "project_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "pipeline_schedules" }, { "var": "pipeline_schedule_id" }, { "lit": "pipelines" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/v4/projects/{id}/merge_requests/{merge_request_iid}/pipelines", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "merge_request_id", "or": "merge_request_iid", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/api/v4/projects/{id}/merge_requests/{merge_request_iid}/pipelines", "q": { "exist": ["merge_request_id", "project_id"] }, "r": { "param": { "id": "project_id", "merge_request_iid": "merge_request_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "merge_requests" }, { "var": "merge_request_id" }, { "lit": "pipelines" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [["$.main.kit.entity.project"], ["$.main.kit.entity.project", "$.main.kit.entity.merge_request"], ["$.main.kit.entity.project"]] }, "key$": "api_entities_ci_pipeline_basic", "name__orig": "api_entities_ci_pipeline_basic", "Name": "ApiEntitiesCiPipelineBasic", "name_": "api_entities_ci_pipeline_basic", "name-": "api-entities-ci-pipeline-basic", "NAME": "API_ENTITIES_CI_PIPELINE_BASIC", "index$": 28 }, { "active": true, "entity": "api_entities_ci_pipeline_basic", "key$": "BasicApiEntitiesCiPipelineBasicFlow", "kind": "basic", "name": "BasicApiEntitiesCiPipelineBasicFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "pipeline_schedule_id": "pipeline_schedule01", "project_id": "project01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "api_entities_ci_pipeline_basic_ref01" } }], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "api_entities_ci_pipeline_basic_ref01", "srcdatavar": "api_entities_ci_pipeline_basic_ref01_data", "suffix": "_dt0" }, "m": { "id": "api_entities_ci_pipeline_basic01", "project_id": "project01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-api_entities_ci_pipeline_basic_ref01" } }], "index$": 1 }] }, 'ApiEntitiesCiPipelineBasic', { "GET /api/v4/projects/{id}/pipelines": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The project ID or URL-encoded path", "type": "string", "required": true, "example": 11, "index$": 0 }, { "in": "query", "name": "page", "description": "Current page number", "type": "integer", "format": "int32", "default": 1, "required": false, "example": 1, "index$": 1 }, { "in": "query", "name": "per_page", "description": "Number of items per page", "type": "integer", "format": "int32", "default": 20, "required": false, "example": 20, "index$": 2 }, { "in": "query", "name": "scope", "description": "The scope of pipelines", "type": "string", "enum": ["running", "pending", "finished", "branches", "tags"], "required": false, "example": "pending", "index$": 3 }, { "in": "query", "name": "status", "description": "The status of pipelines", "type": "string", "enum": ["created", "waiting_for_resource", "preparing", "waiting_for_callback", "pending", "running", "success", "failed", "canceling", "canceled", "skipped", "manual", "scheduled"], "required": false, "example": "pending", "index$": 4 }, { "in": "query", "name": "ref", "description": "The ref of pipelines", "type": "string", "required": false, "example": "develop", "index$": 5 }, { "in": "query", "name": "sha", "description": "The sha of pipelines", "type": "string", "required": false, "example": "a91957a858320c0e17f3a0eca7cfacbff50ea29a", "index$": 6 }, { "in": "query", "name": "yaml_errors", "description": "Returns pipelines with invalid configurations", "type": "boolean", "required": false, "index$": 7 }, { "in": "query", "name": "username", "description": "The username of the user who triggered pipelines", "type": "string", "required": false, "example": "root", "index$": 8 }, { "in": "query", "name": "updated_before", "description": "Return pipelines updated before the specified datetime. Format: ISO 8601 YYYY-MM-DDTHH:MM:SSZ", "type": "string", "format": "date-time", "required": false, "example": "2015-12-24T15:51:21.880Z", "index$": 9 }, { "in": "query", "name": "updated_after", "description": "Return pipelines updated after the specified datetime. Format: ISO 8601 YYYY-MM-DDTHH:MM:SSZ", "type": "string", "format": "date-time", "required": false, "example": "2015-12-24T15:51:21.880Z", "index$": 10 }, { "in": "query", "name": "created_before", "description": "Return pipelines created before the specified datetime. Format: ISO 8601 YYYY-MM-DDTHH:MM:SSZ", "type": "string", "format": "date-time", "required": false, "example": "2015-12-24T15:51:21.880Z", "index$": 11 }, { "in": "query", "name": "created_after", "description": "Return pipelines created after the specified datetime. Format: ISO 8601 YYYY-MM-DDTHH:MM:SSZ", "type": "string", "format": "date-time", "required": false, "example": "2015-12-24T15:51:21.880Z", "index$": 12 }, { "in": "query", "name": "order_by", "description": "Order pipelines", "type": "string", "default": "id", "enum": ["id", "status", "ref", "updated_at", "user_id"], "required": false, "example": "status", "index$": 13 }, { "in": "query", "name": "sort", "description": "Sort pipelines", "type": "string", "default": "desc", "enum": ["asc", "desc"], "required": false, "example": "asc", "index$": 14 }, { "in": "query", "name": "source", "type": "string", "enum": ["unknown", "push", "web", "trigger", "schedule", "api", "external", "pipeline", "chat", "webide", "merge_request_event", "external_pull_request_event", "parent_pipeline", "ondemand_dast_scan", "ondemand_dast_validation", "security_orchestration_policy", "container_registry_push", "duo_workflow", "pipeline_execution_policy_schedule"], "required": false, "example": "push", "index$": 15 }, { "in": "query", "name": "name", "description": "Filter pipelines by name", "type": "string", "required": false, "example": "Build pipeline", "index$": 16 }] }, "GET /api/v4/projects/{id}/pipeline_schedules/{pipeline_schedule_id}/pipelines": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project", "type": "string", "required": true, "example": 18, "index$": 0 }, { "in": "path", "name": "pipeline_schedule_id", "description": "The pipeline schedule ID", "type": "integer", "format": "int32", "required": true, "example": 13, "index$": 1 }] }, "GET /api/v4/projects/{id}/merge_requests/{merge_request_iid}/pipelines": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project.", "type": "string", "required": true, "index$": 0 }, { "in": "path", "name": "merge_request_iid", "description": "The internal ID of the merge request.", "type": "integer", "format": "int32", "required": true, "index$": 1 }] } });
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
    let idmap = transform(['api_entities_ci_pipeline_basic01', 'api_entities_ci_pipeline_basic02', 'api_entities_ci_pipeline_basic03', 'project01', 'project02', 'project03', 'merge_request01', 'merge_request02', 'merge_request03', 'pipeline_schedule01'], {
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