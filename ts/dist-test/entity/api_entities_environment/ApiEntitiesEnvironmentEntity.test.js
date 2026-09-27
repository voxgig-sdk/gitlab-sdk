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
(0, node_test_1.describe)('ApiEntitiesEnvironmentEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.ApiEntitiesEnvironment();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'api_entities_environment.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "auto_stop_at": { "a": true, "fo": "date-time", "h": "Auto Stop At", "n": "auto_stop_at", "r": false, "t": "`$STRING`", "key$": "auto_stop_at", "index$": 0 }, "auto_stop_setting": { "a": true, "h": "Auto Stop Setting", "n": "auto_stop_setting", "r": false, "t": "`$STRING`", "key$": "auto_stop_setting", "index$": 1 }, "cluster_agent": { "a": true, "h": "Cluster Agent", "n": "cluster_agent", "r": false, "sh": "API_Entities_Clusters_Agent model", "t": "`$OBJECT`", "key$": "cluster_agent", "index$": 2 }, "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": false, "t": "`$STRING`", "key$": "created_at", "index$": 3 }, "description": { "a": true, "h": "Description", "n": "description", "r": false, "t": "`$STRING`", "key$": "description", "index$": 4 }, "external_url": { "a": true, "h": "External Url", "n": "external_url", "r": false, "t": "`$STRING`", "key$": "external_url", "index$": 5 }, "flux_resource_path": { "a": true, "h": "Flux Resource Path", "n": "flux_resource_path", "r": false, "t": "`$STRING`", "key$": "flux_resource_path", "index$": 6 }, "id": { "a": true, "fo": "int32", "h": "Id", "n": "id", "r": false, "t": "`$INTEGER`", "key$": "id", "index$": 7 }, "kubernetes_namespace": { "a": true, "h": "Kubernetes Namespace", "n": "kubernetes_namespace", "r": false, "t": "`$STRING`", "key$": "kubernetes_namespace", "index$": 8 }, "last_deployment": { "a": true, "h": "Last Deployment", "n": "last_deployment", "r": false, "sh": "API_Entities_Deployment model", "t": "`$OBJECT`", "key$": "last_deployment", "index$": 9 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "t": "`$STRING`", "key$": "name", "index$": 10 }, "project": { "a": true, "h": "Project", "n": "project", "r": false, "sh": "API_Entities_BasicProjectDetails model", "t": "`$OBJECT`", "key$": "project", "index$": 11 }, "slug": { "a": true, "h": "Slug", "n": "slug", "r": false, "t": "`$STRING`", "key$": "slug", "index$": 12 }, "state": { "a": true, "h": "State", "n": "state", "r": false, "t": "`$STRING`", "key$": "state", "index$": 13 }, "tier": { "a": true, "h": "Tier", "n": "tier", "r": false, "t": "`$STRING`", "key$": "tier", "index$": 14 }, "updated_at": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updated_at", "r": false, "t": "`$STRING`", "key$": "updated_at", "index$": 15 } }, "id": { "field": "id", "name": "id" }, "name": "api_entities_environment", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /api/v4/projects/{id}/environments/{environment_id}/stop", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "environment_id", "or": "environment_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "k": "query", "n": "post_api_v4_projects_id_environments_environment_id_stop", "or": "post_api_v4_projects_id_environments_environment_id_stop", "r": true, "t": "`$OBJECT`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/v4/projects/{id}/environments/{environment_id}/stop", "q": { "exist": ["environment_id", "post_api_v4_projects_id_environments_environment_id_stop", "project_id"] }, "r": { "param": { "id": "project_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "environments" }, { "var": "environment_id" }, { "lit": "stop" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /api/v4/projects/{id}/environments", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "post_api_v4_projects_id_environment", "or": "post_api_v4_projects_id_environment", "r": true, "t": "`$OBJECT`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/v4/projects/{id}/environments", "q": { "exist": ["post_api_v4_projects_id_environment", "project_id"] }, "r": { "param": { "id": "project_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "environments" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /api/v4/projects/{id}/environments", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "name", "or": "name", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 1 }, { "a": true, "ex": 20, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "k": "query", "n": "search", "or": "search", "r": false, "t": "`$ANY`", "index$": 3 }, { "a": true, "k": "query", "n": "state", "or": "state", "r": false, "t": "`$ANY`", "index$": 4 }] }, "k": "http", "m": "GET", "o": "/api/v4/projects/{id}/environments", "q": { "exist": ["name", "page", "per_page", "project_id", "search", "state"] }, "r": { "param": { "id": "project_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "environments" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/v4/projects/{id}/environments/{environment_id}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "environment_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/api/v4/projects/{id}/environments/{environment_id}", "q": { "exist": ["id", "project_id"] }, "r": { "param": { "environment_id": "id", "id": "project_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "environments" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /api/v4/projects/{id}/environments/{environment_id}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "environment_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "k": "query", "n": "put_api_v4_projects_id_environments_environment_id", "or": "put_api_v4_projects_id_environments_environment_id", "r": true, "t": "`$OBJECT`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/api/v4/projects/{id}/environments/{environment_id}", "q": { "exist": ["id", "project_id", "put_api_v4_projects_id_environments_environment_id"] }, "r": { "param": { "environment_id": "id", "id": "project_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "environments" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.project"], ["$.main.kit.entity.project", "$.main.kit.entity.environment"]] }, "key$": "api_entities_environment", "name__orig": "api_entities_environment", "Name": "ApiEntitiesEnvironment", "name_": "api_entities_environment", "name-": "api-entities-environment", "NAME": "API_ENTITIES_ENVIRONMENT", "index$": 68 }, { "active": true, "entity": "api_entities_environment", "key$": "BasicApiEntitiesEnvironmentFlow", "kind": "basic", "name": "BasicApiEntitiesEnvironmentFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "api_entities_environment_ref01" }, "m": { "project_id": "project01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "project_id": "project01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "api_entities_environment_ref01" } }], "index$": 1 }, { "a": true, "d": { "project_id": "project01" }, "i": { "ref": "api_entities_environment_ref01", "srcdatavar": "api_entities_environment_ref01_data", "suffix": "_up0", "textfield": "auto_stop_at" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-api_entities_environment_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "api_entities_environment_ref01", "srcdatavar": "api_entities_environment_ref01_data", "suffix": "_dt0" }, "m": { "id": "api_entities_environment01", "project_id": "project01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-api_entities_environment_ref01" } }], "index$": 3 }] }, 'ApiEntitiesEnvironment', { "POST /api/v4/projects/{id}/environments/{environment_id}/stop": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project owned by the authenticated user", "type": "string", "required": true, "index$": 0 }, { "in": "path", "name": "environment_id", "description": "The ID of the environment", "type": "integer", "format": "int32", "required": true, "index$": 1 }, { "name": "postApiV4ProjectsIdEnvironmentsEnvironmentIdStop", "in": "body", "required": true, "schema": { "type": "object", "properties": { "force": { "type": "boolean", "description": "Force environment to stop without executing `on_stop` actions", "default": false } }, "description": "Stop an environment", "x-ref": "#/definitions/postApiV4ProjectsIdEnvironmentsEnvironmentIdStop" }, "index$": 2 }] }, "POST /api/v4/projects/{id}/environments": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project owned by the authenticated user", "type": "string", "required": true, "index$": 0 }, { "name": "postApiV4ProjectsIdEnvironments", "in": "body", "required": true, "schema": { "type": "object", "properties": { "name": { "type": "string", "description": "The name of the environment" }, "external_url": { "type": "string", "description": "Place to link to for this environment" }, "tier": { "type": "string", "description": "The tier of the new environment. Allowed values are `production`, `staging`, `testing`, `development`, and `other`", "enum": ["production", "staging", "testing", "development", "other"] }, "cluster_agent_id": { "type": "integer", "format": "int32", "description": "The ID of the Cluster Agent to associate with this environment" }, "kubernetes_namespace": { "type": "string", "description": "The Kubernetes namespace to associate with this environment" }, "flux_resource_path": { "type": "string", "description": "The Flux resource path to associate with this environment" }, "description": { "type": "string", "description": "The description of the environment" }, "auto_stop_setting": { "type": "string", "description": "The auto stop setting for the environment. Allowed values are `always` and `with_action`", "enum": ["always", "with_action"] } }, "required": ["name"], "description": "Create a new environment", "x-ref": "#/definitions/postApiV4ProjectsIdEnvironments" }, "index$": 1 }] }, "GET /api/v4/projects/{id}/environments": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project owned by the authenticated user", "type": "string", "required": true, "index$": 0 }, { "in": "query", "name": "page", "description": "Current page number", "type": "integer", "format": "int32", "default": 1, "required": false, "example": 1, "index$": 1 }, { "in": "query", "name": "per_page", "description": "Number of items per page", "type": "integer", "format": "int32", "default": 20, "required": false, "example": 20, "index$": 2 }, { "in": "query", "name": "name", "description": "Return the environment with this name. Mutually exclusive with search", "type": "string", "required": false, "index$": 3 }, { "in": "query", "name": "search", "description": "Return list of environments matching the search criteria. Mutually exclusive with name. Must be at least 3 characters.", "type": "string", "required": false, "index$": 4 }, { "in": "query", "name": "states", "description": "List all environments that match a specific state. Accepted values: `available`, `stopping`, or `stopped`. If no state value given, returns all environments", "type": "string", "enum": ["stopped", "stopping", "available"], "required": false, "index$": 5 }] }, "GET /api/v4/projects/{id}/environments/{environment_id}": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project owned by the authenticated user", "type": "string", "required": true, "index$": 0 }, { "in": "path", "name": "environment_id", "description": "The ID of the environment", "type": "integer", "format": "int32", "required": true, "index$": 1 }] }, "PUT /api/v4/projects/{id}/environments/{environment_id}": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project owned by the authenticated user", "type": "string", "required": true, "index$": 0 }, { "in": "path", "name": "environment_id", "description": "The ID of the environment", "type": "integer", "format": "int32", "required": true, "index$": 1 }, { "name": "putApiV4ProjectsIdEnvironmentsEnvironmentId", "in": "body", "required": true, "schema": { "type": "object", "properties": { "external_url": { "type": "string", "description": "The new URL on which this deployment is viewable" }, "tier": { "type": "string", "description": "The tier of the new environment. Allowed values are `production`, `staging`, `testing`, `development`, and `other`", "enum": ["production", "staging", "testing", "development", "other"] }, "cluster_agent_id": { "type": "integer", "format": "int32", "description": "The ID of the Cluster Agent to associate with this environment" }, "kubernetes_namespace": { "type": "string", "description": "The Kubernetes namespace to associate with this environment" }, "flux_resource_path": { "type": "string", "description": "The Flux resource path to associate with this environment" }, "description": { "type": "string", "description": "The description of the environment" }, "auto_stop_setting": { "type": "string", "description": "The auto stop setting for the environment. Allowed values are `always` and `with_action`", "enum": ["always", "with_action"] } }, "description": "Update an existing environment", "x-ref": "#/definitions/putApiV4ProjectsIdEnvironmentsEnvironmentId" }, "index$": 2 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const api_entities_environment_ref01_ent = client.ApiEntitiesEnvironment();
        let api_entities_environment_ref01_data = setup.data.new.api_entities_environment['api_entities_environment_ref01'];
        api_entities_environment_ref01_data['project_id'] = setup.idmap['project01'];
        api_entities_environment_ref01_data = (await api_entities_environment_ref01_ent.create(api_entities_environment_ref01_data)).data();
        (0, node_assert_1.default)(null != api_entities_environment_ref01_data.id);
        // LIST
        const api_entities_environment_ref01_match = {};
        api_entities_environment_ref01_match['project_id'] = setup.idmap['project01'];
        const api_entities_environment_ref01_list = (await api_entities_environment_ref01_ent.list(api_entities_environment_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(api_entities_environment_ref01_list, { id: api_entities_environment_ref01_data.id })));
        // UPDATE
        const api_entities_environment_ref01_data_up0 = {};
        api_entities_environment_ref01_data_up0.id = api_entities_environment_ref01_data.id;
        api_entities_environment_ref01_data_up0['project_id'] = setup.idmap['project_id'];
        const api_entities_environment_ref01_markdef_up0 = { name: 'auto_stop_at', value: 'Mark01-api_entities_environment_ref01_' + setup.now };
        api_entities_environment_ref01_data_up0[api_entities_environment_ref01_markdef_up0.name] = api_entities_environment_ref01_markdef_up0.value;
        const api_entities_environment_ref01_resdata_up0 = (await api_entities_environment_ref01_ent.update(api_entities_environment_ref01_data_up0)).data();
        (0, node_assert_1.default)(api_entities_environment_ref01_resdata_up0.id === api_entities_environment_ref01_data_up0.id);
        (0, node_assert_1.default)(api_entities_environment_ref01_resdata_up0[api_entities_environment_ref01_markdef_up0.name] === api_entities_environment_ref01_markdef_up0.value);
        // LOAD
        const api_entities_environment_ref01_match_dt0 = {};
        api_entities_environment_ref01_match_dt0.id = api_entities_environment_ref01_data.id;
        const api_entities_environment_ref01_data_dt0 = (await api_entities_environment_ref01_ent.load(api_entities_environment_ref01_match_dt0)).data();
        (0, node_assert_1.default)(api_entities_environment_ref01_data_dt0.id === api_entities_environment_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/api_entities_environment/ApiEntitiesEnvironmentTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['api_entities_environment01', 'api_entities_environment02', 'api_entities_environment03', 'project01', 'project02', 'project03', 'environment01', 'environment02', 'environment03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_API_ENTITIES_ENVIRONMENT_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_API_ENTITIES_ENVIRONMENT_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_API_ENTITIES_ENVIRONMENT_ENTID'];
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
//# sourceMappingURL=ApiEntitiesEnvironmentEntity.test.js.map