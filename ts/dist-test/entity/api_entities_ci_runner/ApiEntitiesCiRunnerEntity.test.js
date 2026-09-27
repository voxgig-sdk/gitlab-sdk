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
(0, node_test_1.describe)('ApiEntitiesCiRunnerEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.ApiEntitiesCiRunner();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['create', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'api_entities_ci_runner.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "avatar_path": { "a": true, "h": "Avatar Path", "n": "avatar_path", "r": false, "t": "`$STRING`", "key$": "avatar_path", "index$": 0 }, "avatar_url": { "a": true, "h": "Avatar Url", "n": "avatar_url", "r": false, "t": "`$STRING`", "key$": "avatar_url", "index$": 1 }, "custom_attributes": { "a": true, "h": "Custom Attributes", "n": "custom_attributes", "r": false, "t": "`$ARRAY`", "key$": "custom_attributes", "index$": 2 }, "id": { "a": true, "fo": "int32", "h": "Id", "n": "id", "r": false, "t": "`$INTEGER`", "key$": "id", "index$": 3 }, "locked": { "a": true, "h": "Locked", "n": "locked", "r": false, "t": "`$BOOLEAN`", "key$": "locked", "index$": 4 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "t": "`$STRING`", "key$": "name", "index$": 5 }, "public_email": { "a": true, "h": "Public Email", "n": "public_email", "r": false, "t": "`$STRING`", "key$": "public_email", "index$": 6 }, "state": { "a": true, "h": "State", "n": "state", "r": false, "t": "`$STRING`", "key$": "state", "index$": 7 }, "username": { "a": true, "h": "Username", "n": "username", "r": false, "t": "`$STRING`", "key$": "username", "index$": 8 }, "web_url": { "a": true, "h": "Web Url", "n": "web_url", "r": false, "t": "`$STRING`", "key$": "web_url", "index$": 9 } }, "id": { "field": "id", "name": "id" }, "name": "api_entities_ci_runner", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /api/v4/projects/{id}/runners", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "post_api_v4_projects_id_runner", "or": "post_api_v4_projects_id_runner", "r": true, "t": "`$OBJECT`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/v4/projects/{id}/runners", "q": { "exist": ["post_api_v4_projects_id_runner", "project_id"] }, "r": { "param": { "id": "project_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "runners" }], "t": { "req": "`reqdata`", "res": "`body.created_by`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/v4/projects/{id}/runners", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "k": "query", "n": "paused", "or": "paused", "r": false, "t": "`$ANY`", "index$": 1 }, { "a": true, "ex": 20, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "k": "query", "n": "scope", "or": "scope", "r": false, "t": "`$ANY`", "index$": 3 }, { "a": true, "k": "query", "n": "status", "or": "status", "r": false, "t": "`$ANY`", "index$": 4 }, { "a": true, "ex": "['macos', 'shell']", "k": "query", "n": "tag_list", "or": "tag_list", "r": false, "t": "`$ANY`", "index$": 5 }, { "a": true, "k": "query", "n": "type", "or": "type", "r": false, "t": "`$ANY`", "index$": 6 }, { "a": true, "ex": "'15.1.' or '16.'", "k": "query", "n": "version_prefix", "or": "version_prefix", "r": false, "t": "`$ANY`", "index$": 7 }] }, "k": "http", "m": "GET", "o": "/api/v4/projects/{id}/runners", "q": { "exist": ["page", "paused", "per_page", "project_id", "scope", "status", "tag_list", "type", "version_prefix"] }, "r": { "param": { "id": "project_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "runners" }], "t": { "req": "`reqdata`", "res": "`body.created_by`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /api/v4/groups/{id}/runners", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "group_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "k": "query", "n": "paused", "or": "paused", "r": false, "t": "`$ANY`", "index$": 1 }, { "a": true, "ex": 20, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "k": "query", "n": "status", "or": "status", "r": false, "t": "`$ANY`", "index$": 3 }, { "a": true, "ex": "['macos', 'shell']", "k": "query", "n": "tag_list", "or": "tag_list", "r": false, "t": "`$ANY`", "index$": 4 }, { "a": true, "k": "query", "n": "type", "or": "type", "r": false, "t": "`$ANY`", "index$": 5 }, { "a": true, "ex": "'15.1.' or '16.'", "k": "query", "n": "version_prefix", "or": "version_prefix", "r": false, "t": "`$ANY`", "index$": 6 }] }, "k": "http", "m": "GET", "o": "/api/v4/groups/{id}/runners", "q": { "exist": ["group_id", "page", "paused", "per_page", "status", "tag_list", "type", "version_prefix"] }, "r": { "param": { "id": "group_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "groups" }, { "var": "group_id" }, { "lit": "runners" }], "t": { "req": "`reqdata`", "res": "`body.created_by`" }, "index$": 1 }, { "a": true, "co": { "id": "GET /api/v4/runners", "source": "swagger2", "version": 2 }, "g": { "query": [{ "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "k": "query", "n": "paused", "or": "paused", "r": false, "t": "`$ANY`", "index$": 1 }, { "a": true, "ex": 20, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "k": "query", "n": "scope", "or": "scope", "r": false, "t": "`$ANY`", "index$": 3 }, { "a": true, "k": "query", "n": "status", "or": "status", "r": false, "t": "`$ANY`", "index$": 4 }, { "a": true, "ex": "['macos', 'shell']", "k": "query", "n": "tag_list", "or": "tag_list", "r": false, "t": "`$ANY`", "index$": 5 }, { "a": true, "k": "query", "n": "type", "or": "type", "r": false, "t": "`$ANY`", "index$": 6 }, { "a": true, "ex": "'15.1.' or '16.'", "k": "query", "n": "version_prefix", "or": "version_prefix", "r": false, "t": "`$ANY`", "index$": 7 }] }, "k": "http", "m": "GET", "o": "/api/v4/runners", "q": { "exist": ["page", "paused", "per_page", "scope", "status", "tag_list", "type", "version_prefix"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "runners" }], "t": { "req": "`reqdata`", "res": "`body.created_by`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /api/v4/runners/all", "source": "swagger2", "version": 2 }, "g": { "query": [{ "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "k": "query", "n": "paused", "or": "paused", "r": false, "t": "`$ANY`", "index$": 1 }, { "a": true, "ex": 20, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "k": "query", "n": "scope", "or": "scope", "r": false, "t": "`$ANY`", "index$": 3 }, { "a": true, "k": "query", "n": "status", "or": "status", "r": false, "t": "`$ANY`", "index$": 4 }, { "a": true, "ex": "['macos', 'shell']", "k": "query", "n": "tag_list", "or": "tag_list", "r": false, "t": "`$ANY`", "index$": 5 }, { "a": true, "k": "query", "n": "type", "or": "type", "r": false, "t": "`$ANY`", "index$": 6 }, { "a": true, "ex": "'15.1.' or '16.'", "k": "query", "n": "version_prefix", "or": "version_prefix", "r": false, "t": "`$ANY`", "index$": 7 }] }, "k": "http", "m": "GET", "o": "/api/v4/runners/all", "q": { "exist": ["page", "paused", "per_page", "scope", "status", "tag_list", "type", "version_prefix"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "runners" }, { "lit": "all" }], "t": { "req": "`reqdata`", "res": "`body.created_by`" }, "index$": 3 }], "key$": "load" } }, "relations": { "ancestors": [["$.main.kit.entity.group"], ["$.main.kit.entity.project"]] }, "key$": "api_entities_ci_runner", "name__orig": "api_entities_ci_runner", "Name": "ApiEntitiesCiRunner", "name_": "api_entities_ci_runner", "name-": "api-entities-ci-runner", "NAME": "API_ENTITIES_CI_RUNNER", "index$": 33 }, { "active": true, "entity": "api_entities_ci_runner", "key$": "BasicApiEntitiesCiRunnerFlow", "kind": "basic", "name": "BasicApiEntitiesCiRunnerFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "api_entities_ci_runner_ref01" }, "m": { "project_id": "project01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "api_entities_ci_runner_ref01", "srcdatavar": "api_entities_ci_runner_ref01_data", "suffix": "_dt0" }, "m": {}, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-api_entities_ci_runner_ref01" } }], "index$": 1 }] }, 'ApiEntitiesCiRunner', { "POST /api/v4/projects/{id}/runners": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project owned by the authenticated user", "type": "string", "required": true, "index$": 0 }, { "name": "postApiV4ProjectsIdRunners", "in": "body", "required": true, "schema": { "type": "object", "properties": { "runner_id": { "type": "integer", "format": "int32", "description": "The ID of a runner" } }, "required": ["runner_id"], "description": "Assign a runner to project", "x-ref": "#/definitions/postApiV4ProjectsIdRunners" }, "index$": 1 }] }, "GET /api/v4/projects/{id}/runners": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project owned by the authenticated user", "type": "string", "required": true, "index$": 0 }, { "in": "query", "name": "scope", "description": "Deprecated: Use `type` or `status` instead. The scope of runners to return", "type": "string", "enum": ["specific", "shared", "instance_type", "group_type", "project_type", "active", "paused", "online", "offline", "never_contacted", "stale"], "required": false, "index$": 1 }, { "in": "query", "name": "type", "description": "The type of runners to return", "type": "string", "enum": ["instance_type", "group_type", "project_type"], "required": false, "index$": 2 }, { "in": "query", "name": "paused", "description": "Whether to include only runners that are accepting or ignoring new jobs", "type": "boolean", "required": false, "index$": 3 }, { "in": "query", "name": "status", "description": "The status of runners to return", "type": "string", "enum": ["active", "paused", "online", "offline", "never_contacted", "stale"], "required": false, "index$": 4 }, { "in": "query", "name": "tag_list", "description": "A list of runner tags", "type": "array", "items": { "type": "string" }, "required": false, "example": "['macos', 'shell']", "index$": 5 }, { "in": "query", "name": "version_prefix", "description": "The version prefix of runners to return", "type": "string", "required": false, "example": "'15.1.' or '16.'", "index$": 6 }, { "in": "query", "name": "page", "description": "Current page number", "type": "integer", "format": "int32", "default": 1, "required": false, "example": 1, "index$": 7 }, { "in": "query", "name": "per_page", "description": "Number of items per page", "type": "integer", "format": "int32", "default": 20, "required": false, "example": 20, "index$": 8 }] }, "GET /api/v4/groups/{id}/runners": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID of a group", "type": "string", "required": true, "index$": 0 }, { "in": "query", "name": "type", "description": "The type of runners to return", "type": "string", "enum": ["instance_type", "group_type", "project_type"], "required": false, "index$": 1 }, { "in": "query", "name": "paused", "description": "Whether to include only runners that are accepting or ignoring new jobs", "type": "boolean", "required": false, "index$": 2 }, { "in": "query", "name": "status", "description": "The status of runners to return", "type": "string", "enum": ["active", "paused", "online", "offline", "never_contacted", "stale"], "required": false, "index$": 3 }, { "in": "query", "name": "tag_list", "description": "A list of runner tags", "type": "array", "items": { "type": "string" }, "required": false, "example": "['macos', 'shell']", "index$": 4 }, { "in": "query", "name": "version_prefix", "description": "The version prefix of runners to return", "type": "string", "required": false, "example": "'15.1.' or '16.'", "index$": 5 }, { "in": "query", "name": "page", "description": "Current page number", "type": "integer", "format": "int32", "default": 1, "required": false, "example": 1, "index$": 6 }, { "in": "query", "name": "per_page", "description": "Number of items per page", "type": "integer", "format": "int32", "default": 20, "required": false, "example": 20, "index$": 7 }] }, "GET /api/v4/runners": { "protocol": "http", "parameters": [{ "in": "query", "name": "scope", "description": "Deprecated: Use `type` or `status` instead. The scope of runners to return", "type": "string", "enum": ["specific", "shared", "instance_type", "group_type", "project_type", "active", "paused", "online", "offline", "never_contacted", "stale"], "required": false, "index$": 0 }, { "in": "query", "name": "type", "description": "The type of runners to return", "type": "string", "enum": ["instance_type", "group_type", "project_type"], "required": false, "index$": 1 }, { "in": "query", "name": "paused", "description": "Whether to include only runners that are accepting or ignoring new jobs", "type": "boolean", "required": false, "index$": 2 }, { "in": "query", "name": "status", "description": "The status of runners to return", "type": "string", "enum": ["active", "paused", "online", "offline", "never_contacted", "stale"], "required": false, "index$": 3 }, { "in": "query", "name": "tag_list", "description": "A list of runner tags", "type": "array", "items": { "type": "string" }, "required": false, "example": "['macos', 'shell']", "index$": 4 }, { "in": "query", "name": "version_prefix", "description": "The version prefix of runners to return", "type": "string", "required": false, "example": "'15.1.' or '16.'", "index$": 5 }, { "in": "query", "name": "page", "description": "Current page number", "type": "integer", "format": "int32", "default": 1, "required": false, "example": 1, "index$": 6 }, { "in": "query", "name": "per_page", "description": "Number of items per page", "type": "integer", "format": "int32", "default": 20, "required": false, "example": 20, "index$": 7 }] }, "GET /api/v4/runners/all": { "protocol": "http", "parameters": [{ "in": "query", "name": "scope", "description": "Deprecated: Use `type` or `status` instead. The scope of runners to return", "type": "string", "enum": ["specific", "shared", "instance_type", "group_type", "project_type", "active", "paused", "online", "offline", "never_contacted", "stale"], "required": false, "index$": 0 }, { "in": "query", "name": "type", "description": "The type of runners to return", "type": "string", "enum": ["instance_type", "group_type", "project_type"], "required": false, "index$": 1 }, { "in": "query", "name": "paused", "description": "Whether to include only runners that are accepting or ignoring new jobs", "type": "boolean", "required": false, "index$": 2 }, { "in": "query", "name": "status", "description": "The status of runners to return", "type": "string", "enum": ["active", "paused", "online", "offline", "never_contacted", "stale"], "required": false, "index$": 3 }, { "in": "query", "name": "tag_list", "description": "A list of runner tags", "type": "array", "items": { "type": "string" }, "required": false, "example": "['macos', 'shell']", "index$": 4 }, { "in": "query", "name": "version_prefix", "description": "The version prefix of runners to return", "type": "string", "required": false, "example": "'15.1.' or '16.'", "index$": 5 }, { "in": "query", "name": "page", "description": "Current page number", "type": "integer", "format": "int32", "default": 1, "required": false, "example": 1, "index$": 6 }, { "in": "query", "name": "per_page", "description": "Number of items per page", "type": "integer", "format": "int32", "default": 20, "required": false, "example": 20, "index$": 7 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const api_entities_ci_runner_ref01_ent = client.ApiEntitiesCiRunner();
        let api_entities_ci_runner_ref01_data = setup.data.new.api_entities_ci_runner['api_entities_ci_runner_ref01'];
        api_entities_ci_runner_ref01_data['project_id'] = setup.idmap['project01'];
        api_entities_ci_runner_ref01_data = (await api_entities_ci_runner_ref01_ent.create(api_entities_ci_runner_ref01_data)).data();
        (0, node_assert_1.default)(null != api_entities_ci_runner_ref01_data.id);
        // LOAD
        const api_entities_ci_runner_ref01_match_dt0 = {};
        api_entities_ci_runner_ref01_match_dt0.id = api_entities_ci_runner_ref01_data.id;
        const api_entities_ci_runner_ref01_data_dt0 = (await api_entities_ci_runner_ref01_ent.load(api_entities_ci_runner_ref01_match_dt0)).data();
        (0, node_assert_1.default)(api_entities_ci_runner_ref01_data_dt0.id === api_entities_ci_runner_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/api_entities_ci_runner/ApiEntitiesCiRunnerTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['api_entities_ci_runner01', 'api_entities_ci_runner02', 'api_entities_ci_runner03', 'group01', 'group02', 'group03', 'project01', 'project02', 'project03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_API_ENTITIES_CI_RUNNER_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_API_ENTITIES_CI_RUNNER_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_API_ENTITIES_CI_RUNNER_ENTID'];
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
//# sourceMappingURL=ApiEntitiesCiRunnerEntity.test.js.map