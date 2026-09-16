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
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [], "name": "container_registry", "op": { "remove": { "input": "data", "name": "remove", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "project_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "param", "name": "repository_id", "orig": "repository_id", "reqd": true, "type": "`$STRING`", "index$": 1 }], "query": [{ "active": true, "kind": "query", "name": "keep_n", "orig": "keep_n", "reqd": false, "type": "`$ANY`", "index$": 0 }, { "active": true, "kind": "query", "name": "name_regex", "orig": "name_regex", "reqd": false, "type": "`$ANY`", "index$": 1 }, { "active": true, "kind": "query", "name": "name_regex_delete", "orig": "name_regex_delete", "reqd": false, "type": "`$ANY`", "index$": 2 }, { "active": true, "kind": "query", "name": "name_regex_keep", "orig": "name_regex_keep", "reqd": false, "type": "`$ANY`", "index$": 3 }, { "active": true, "kind": "query", "name": "older_than", "orig": "older_than", "reqd": false, "type": "`$ANY`", "index$": 4 }] }, "contract": { "id": "DELETE /api/v4/projects/{id}/registry/repositories/{repository_id}/tags", "json": "{\"operationId\":\"deleteApiV4ProjectsIdRegistryRepositoriesRepositoryIdTags\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The ID of the repository\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"repository_id\",\"required\":true,\"type\":\"integer\"},{\"description\":\"The tag name regexp to delete, specify .* to delete all\",\"in\":\"query\",\"name\":\"name_regex_delete\",\"required\":false,\"type\":\"string\"},{\"description\":\"The tag name regexp to delete, specify .* to delete all\",\"in\":\"query\",\"name\":\"name_regex\",\"required\":false,\"type\":\"string\"},{\"description\":\"The tag name regexp to retain\",\"in\":\"query\",\"name\":\"name_regex_keep\",\"required\":false,\"type\":\"string\"},{\"description\":\"Keep n of latest tags with matching name\",\"format\":\"int32\",\"in\":\"query\",\"name\":\"keep_n\",\"required\":false,\"type\":\"integer\"},{\"description\":\"Delete older than: 1h, 1d, 1month\",\"in\":\"query\",\"name\":\"older_than\",\"required\":false,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"204\":{\"description\":\"Success\"},\"400\":{\"description\":\"Bad Request\"},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "DELETE", "orig": "/api/v4/projects/{id}/registry/repositories/{repository_id}/tags", "rename": { "param": { "id": "project_id" } }, "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "registry" }, { "lit": "repositories" }, { "var": "repository_id" }, { "lit": "tags" }], "select": { "exist": ["keep_n", "name_regex", "name_regex_delete", "name_regex_keep", "older_than", "project_id", "repository_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "project_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "param", "name": "repository_id", "orig": "repository_id", "reqd": true, "type": "`$STRING`", "index$": 1 }, { "active": true, "kind": "param", "name": "tag_name", "orig": "tag_name", "reqd": true, "type": "`$ANY`", "index$": 2 }] }, "contract": { "id": "DELETE /api/v4/projects/{id}/registry/repositories/{repository_id}/tags/{tag_name}", "json": "{\"operationId\":\"deleteApiV4ProjectsIdRegistryRepositoriesRepositoryIdTagsTagName\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The ID of the repository\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"repository_id\",\"required\":true,\"type\":\"integer\"},{\"description\":\"The name of the tag\",\"in\":\"path\",\"name\":\"tag_name\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"204\":{\"description\":\"Success\"},\"400\":{\"description\":\"Bad Request\"},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "DELETE", "orig": "/api/v4/projects/{id}/registry/repositories/{repository_id}/tags/{tag_name}", "rename": { "param": { "id": "project_id" } }, "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "registry" }, { "lit": "repositories" }, { "var": "repository_id" }, { "lit": "tags" }, { "var": "tag_name" }], "select": { "exist": ["project_id", "repository_id", "tag_name"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "project_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "param", "name": "repository_id", "orig": "repository_id", "reqd": true, "type": "`$STRING`", "index$": 1 }] }, "contract": { "id": "DELETE /api/v4/projects/{id}/registry/repositories/{repository_id}", "json": "{\"operationId\":\"deleteApiV4ProjectsIdRegistryRepositoriesRepositoryId\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The ID of the repository\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"repository_id\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"204\":{\"description\":\"Success\"},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "DELETE", "orig": "/api/v4/projects/{id}/registry/repositories/{repository_id}", "rename": { "param": { "id": "project_id" } }, "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "registry" }, { "lit": "repositories" }, { "var": "repository_id" }], "select": { "exist": ["project_id", "repository_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }], "key$": "remove" } }, "relations": { "ancestors": [["project", "repository"], ["project", "repository", "tag"]] }, "key$": "container_registry", "name__orig": "container_registry", "Name": "ContainerRegistry", "name_": "container_registry", "name-": "container-registry", "NAME": "CONTAINER_REGISTRY", "index$": 184 }, { "active": true, "entity": "container_registry", "key$": "BasicContainerRegistryFlow", "kind": "basic", "name": "BasicContainerRegistryFlow", "param": {}, "step": [] }, 'ContainerRegistry');
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
    let idmap = transform(['container_registry01', 'container_registry02', 'container_registry03', 'project01', 'project02', 'project03', 'repository01', 'repository02', 'repository03', 'project01', 'project02', 'project03', 'repository01', 'repository02', 'repository03', 'tag01', 'tag02', 'tag03'], {
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