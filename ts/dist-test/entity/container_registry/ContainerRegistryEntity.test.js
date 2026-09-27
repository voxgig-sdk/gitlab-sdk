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
(0, node_test_1.describe)('ContainerRegistryEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.ContainerRegistry();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of []) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'container_registry.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": {}, "name": "container_registry", "op": { "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /api/v4/projects/{id}/registry/repositories/{repository_id}/tags", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "repository_id", "or": "repository_id", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "k": "query", "n": "keep_n", "or": "keep_n", "r": false, "t": "`$ANY`", "index$": 0 }, { "a": true, "k": "query", "n": "name_regex", "or": "name_regex", "r": false, "t": "`$ANY`", "index$": 1 }, { "a": true, "k": "query", "n": "name_regex_delete", "or": "name_regex_delete", "r": false, "t": "`$ANY`", "index$": 2 }, { "a": true, "k": "query", "n": "name_regex_keep", "or": "name_regex_keep", "r": false, "t": "`$ANY`", "index$": 3 }, { "a": true, "k": "query", "n": "older_than", "or": "older_than", "r": false, "t": "`$ANY`", "index$": 4 }] }, "k": "http", "m": "DELETE", "o": "/api/v4/projects/{id}/registry/repositories/{repository_id}/tags", "q": { "exist": ["keep_n", "name_regex", "name_regex_delete", "name_regex_keep", "older_than", "project_id", "repository_id"] }, "r": { "param": { "id": "project_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "registry" }, { "lit": "repositories" }, { "var": "repository_id" }, { "lit": "tags" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "DELETE /api/v4/projects/{id}/registry/repositories/{repository_id}/tags/{tag_name}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "repository_id", "or": "repository_id", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "tag_name", "or": "tag_name", "r": true, "t": "`$ANY`", "index$": 2 }] }, "k": "http", "m": "DELETE", "o": "/api/v4/projects/{id}/registry/repositories/{repository_id}/tags/{tag_name}", "q": { "exist": ["project_id", "repository_id", "tag_name"] }, "r": { "param": { "id": "project_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "registry" }, { "lit": "repositories" }, { "var": "repository_id" }, { "lit": "tags" }, { "var": "tag_name" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "DELETE /api/v4/projects/{id}/registry/repositories/{repository_id}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "repository_id", "or": "repository_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "DELETE", "o": "/api/v4/projects/{id}/registry/repositories/{repository_id}", "q": { "exist": ["project_id", "repository_id"] }, "r": { "param": { "id": "project_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "registry" }, { "lit": "repositories" }, { "var": "repository_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }], "key$": "remove" } }, "relations": { "ancestors": [["$.main.kit.entity.project"], ["$.main.kit.entity.project", "$.main.kit.entity.tag"]] }, "key$": "container_registry", "name__orig": "container_registry", "Name": "ContainerRegistry", "name_": "container_registry", "name-": "container-registry", "NAME": "CONTAINER_REGISTRY", "index$": 184 }, { "active": true, "entity": "container_registry", "key$": "BasicContainerRegistryFlow", "kind": "basic", "name": "BasicContainerRegistryFlow", "param": {}, "step": [] }, 'ContainerRegistry', { "DELETE /api/v4/projects/{id}/registry/repositories/{repository_id}/tags": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project", "type": "string", "required": true, "index$": 0 }, { "in": "path", "name": "repository_id", "description": "The ID of the repository", "type": "integer", "format": "int32", "required": true, "index$": 1 }, { "in": "query", "name": "name_regex_delete", "description": "The tag name regexp to delete, specify .* to delete all", "type": "string", "required": false, "index$": 2 }, { "in": "query", "name": "name_regex", "description": "The tag name regexp to delete, specify .* to delete all", "type": "string", "required": false, "index$": 3 }, { "in": "query", "name": "name_regex_keep", "description": "The tag name regexp to retain", "type": "string", "required": false, "index$": 4 }, { "in": "query", "name": "keep_n", "description": "Keep n of latest tags with matching name", "type": "integer", "format": "int32", "required": false, "index$": 5 }, { "in": "query", "name": "older_than", "description": "Delete older than: 1h, 1d, 1month", "type": "string", "required": false, "index$": 6 }] }, "DELETE /api/v4/projects/{id}/registry/repositories/{repository_id}/tags/{tag_name}": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project", "type": "string", "required": true, "index$": 0 }, { "in": "path", "name": "repository_id", "description": "The ID of the repository", "type": "integer", "format": "int32", "required": true, "index$": 1 }, { "in": "path", "name": "tag_name", "description": "The name of the tag", "type": "string", "required": true, "index$": 2 }] }, "DELETE /api/v4/projects/{id}/registry/repositories/{repository_id}": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project", "type": "string", "required": true, "index$": 0 }, { "in": "path", "name": "repository_id", "description": "The ID of the repository", "type": "integer", "format": "int32", "required": true, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let container_registry_ref01_data = Object.values(setup.data.existing.container_registry)[0];
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/container_registry/ContainerRegistryTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['container_registry01', 'container_registry02', 'container_registry03', 'project01', 'project02', 'project03', 'tag01', 'tag02', 'tag03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_CONTAINER_REGISTRY_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_CONTAINER_REGISTRY_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_CONTAINER_REGISTRY_ENTID'];
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
//# sourceMappingURL=ContainerRegistryEntity.test.js.map