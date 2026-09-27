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
(0, node_test_1.describe)('ApiEntitiesContainerRegistryRepositoryEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.ApiEntitiesContainerRegistryRepository();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'api_entities_container_registry_repository.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "cleanup_policy_started_at": { "a": true, "fo": "date-time", "h": "Cleanup Policy Started At", "n": "cleanup_policy_started_at", "r": false, "t": "`$STRING`", "key$": "cleanup_policy_started_at", "index$": 0 }, "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": false, "t": "`$STRING`", "key$": "created_at", "index$": 1 }, "delete_api_path": { "a": true, "h": "Delete Api Path", "n": "delete_api_path", "r": false, "t": "`$STRING`", "key$": "delete_api_path", "index$": 2 }, "id": { "a": true, "fo": "int32", "h": "Id", "n": "id", "r": false, "t": "`$INTEGER`", "key$": "id", "index$": 3 }, "location": { "a": true, "h": "Location", "n": "location", "r": false, "t": "`$STRING`", "key$": "location", "index$": 4 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "t": "`$STRING`", "key$": "name", "index$": 5 }, "path": { "a": true, "h": "Path", "n": "path", "r": false, "t": "`$STRING`", "key$": "path", "index$": 6 }, "project_id": { "a": true, "fo": "int32", "h": "Project Id", "n": "project_id", "r": false, "t": "`$INTEGER`", "key$": "project_id", "index$": 7 }, "size": { "a": true, "fo": "int32", "h": "Size", "n": "size", "r": false, "t": "`$INTEGER`", "key$": "size", "index$": 8 }, "status": { "a": true, "h": "Status", "n": "status", "r": false, "t": "`$STRING`", "key$": "status", "index$": 9 }, "tags": { "a": true, "h": "Tags", "n": "tags", "r": false, "sh": "API_Entities_ContainerRegistry_Tag model", "t": "`$OBJECT`", "key$": "tags", "index$": 10 }, "tags_count": { "a": true, "fo": "int32", "h": "Tags Count", "n": "tags_count", "r": false, "t": "`$INTEGER`", "key$": "tags_count", "index$": 11 } }, "id": { "field": "id", "name": "id" }, "name": "api_entities_container_registry_repository", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /api/v4/projects/{id}/registry/repositories", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "ex": 20, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$INTEGER`", "index$": 1 }, { "a": true, "k": "query", "n": "tag", "or": "tag", "r": false, "t": "`$ANY`", "index$": 2 }, { "a": true, "k": "query", "n": "tags_count", "or": "tags_count", "r": false, "t": "`$INTEGER`", "index$": 3 }] }, "k": "http", "m": "GET", "o": "/api/v4/projects/{id}/registry/repositories", "q": { "exist": ["page", "per_page", "project_id", "tag", "tags_count"] }, "r": { "param": { "id": "project_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "registry" }, { "lit": "repositories" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /api/v4/groups/{id}/registry/repositories", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "group_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "ex": 20, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$INTEGER`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/api/v4/groups/{id}/registry/repositories", "q": { "exist": ["group_id", "page", "per_page"] }, "r": { "param": { "id": "group_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "groups" }, { "var": "group_id" }, { "lit": "registry" }, { "lit": "repositories" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/v4/registry/repositories/{id}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "size", "or": "size", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "k": "query", "n": "tag", "or": "tag", "r": false, "t": "`$ANY`", "index$": 1 }, { "a": true, "k": "query", "n": "tags_count", "or": "tags_count", "r": false, "t": "`$INTEGER`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/api/v4/registry/repositories/{id}", "q": { "exist": ["id", "size", "tag", "tags_count"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "registry" }, { "lit": "repositories" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.tags`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [["$.main.kit.entity.group"], ["$.main.kit.entity.project"]] }, "key$": "api_entities_container_registry_repository", "name__orig": "api_entities_container_registry_repository", "Name": "ApiEntitiesContainerRegistryRepository", "name_": "api_entities_container_registry_repository", "name-": "api-entities-container-registry-repository", "NAME": "API_ENTITIES_CONTAINER_REGISTRY_REPOSITORY", "index$": 53 }, { "active": true, "entity": "api_entities_container_registry_repository", "key$": "BasicApiEntitiesContainerRegistryRepositoryFlow", "kind": "basic", "name": "BasicApiEntitiesContainerRegistryRepositoryFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "group_id": "group01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "api_entities_container_registry_repository_ref01" } }], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "api_entities_container_registry_repository_ref01", "srcdatavar": "api_entities_container_registry_repository_ref01_data", "suffix": "_dt0" }, "m": { "id": "api_entities_container_registry_repository01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-api_entities_container_registry_repository_ref01" } }], "index$": 1 }] }, 'ApiEntitiesContainerRegistryRepository', { "GET /api/v4/projects/{id}/registry/repositories": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project", "type": "string", "required": true, "index$": 0 }, { "in": "query", "name": "page", "description": "Current page number", "type": "integer", "format": "int32", "default": 1, "required": false, "example": 1, "index$": 1 }, { "in": "query", "name": "per_page", "description": "Number of items per page", "type": "integer", "format": "int32", "default": 20, "required": false, "example": 20, "index$": 2 }, { "in": "query", "name": "tags", "description": "Determines if tags should be included", "type": "boolean", "default": false, "required": false, "index$": 3 }, { "in": "query", "name": "tags_count", "description": "Determines if the tags count should be included", "type": "boolean", "default": false, "required": false, "index$": 4 }] }, "GET /api/v4/groups/{id}/registry/repositories": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the group accessible by the authenticated user", "type": "string", "required": true, "index$": 0 }, { "in": "query", "name": "page", "description": "Current page number", "type": "integer", "format": "int32", "default": 1, "required": false, "example": 1, "index$": 1 }, { "in": "query", "name": "per_page", "description": "Number of items per page", "type": "integer", "format": "int32", "default": 20, "required": false, "example": 20, "index$": 2 }] }, "GET /api/v4/registry/repositories/{id}": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID of the repository", "type": "string", "required": true, "index$": 0 }, { "in": "query", "name": "tags", "description": "Determines if tags should be included", "type": "boolean", "default": false, "required": false, "index$": 1 }, { "in": "query", "name": "tags_count", "description": "Determines if the tags count should be included", "type": "boolean", "default": false, "required": false, "index$": 2 }, { "in": "query", "name": "size", "description": "Determines if the size should be included", "type": "boolean", "default": false, "required": false, "index$": 3 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let api_entities_container_registry_repository_ref01_data = Object.values(setup.data.existing.api_entities_container_registry_repository)[0];
        // LIST
        const api_entities_container_registry_repository_ref01_ent = client.ApiEntitiesContainerRegistryRepository();
        const api_entities_container_registry_repository_ref01_match = {};
        api_entities_container_registry_repository_ref01_match['group_id'] = setup.idmap['group01'];
        const api_entities_container_registry_repository_ref01_list = (await api_entities_container_registry_repository_ref01_ent.list(api_entities_container_registry_repository_ref01_match)).map((e) => e.data());
        // LOAD
        const api_entities_container_registry_repository_ref01_match_dt0 = {};
        api_entities_container_registry_repository_ref01_match_dt0.id = api_entities_container_registry_repository_ref01_data.id;
        const api_entities_container_registry_repository_ref01_data_dt0 = (await api_entities_container_registry_repository_ref01_ent.load(api_entities_container_registry_repository_ref01_match_dt0)).data();
        (0, node_assert_1.default)(api_entities_container_registry_repository_ref01_data_dt0.id === api_entities_container_registry_repository_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/api_entities_container_registry_repository/ApiEntitiesContainerRegistryRepositoryTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['api_entities_container_registry_repository01', 'api_entities_container_registry_repository02', 'api_entities_container_registry_repository03', 'group01', 'group02', 'group03', 'project01', 'project02', 'project03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_API_ENTITIES_CONTAINER_REGISTRY_REPOSITORY_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_API_ENTITIES_CONTAINER_REGISTRY_REPOSITORY_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_API_ENTITIES_CONTAINER_REGISTRY_REPOSITORY_ENTID'];
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
//# sourceMappingURL=ApiEntitiesContainerRegistryRepositoryEntity.test.js.map