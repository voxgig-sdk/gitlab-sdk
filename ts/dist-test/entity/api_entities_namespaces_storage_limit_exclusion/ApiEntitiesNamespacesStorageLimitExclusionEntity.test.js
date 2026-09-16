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
(0, node_test_1.describe)('ApiEntitiesNamespacesStorageLimitExclusionEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.ApiEntitiesNamespacesStorageLimitExclusion();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['create', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'api_entities_namespaces_storage_limit_exclusion.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "format": "int32", "name": "id", "req": false, "type": "`$INTEGER`", "index$": 0 }, { "active": true, "format": "int32", "name": "namespace_id", "req": false, "type": "`$INTEGER`", "index$": 1 }, { "active": true, "name": "namespace_name", "req": false, "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "reason", "req": false, "type": "`$STRING`", "index$": 3 }], "id": { "field": "id", "name": "id" }, "name": "api_entities_namespaces_storage_limit_exclusion", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "namespace_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }], "query": [{ "active": true, "kind": "query", "name": "post_api_v4_namespaces_id_storage_limit_exclusion", "orig": "post_api_v4_namespaces_id_storage_limit_exclusion", "reqd": true, "type": "`$OBJECT`", "index$": 0 }] }, "contract": { "id": "POST /api/v4/namespaces/{id}/storage/limit_exclusion", "json": "{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4NamespacesIdStorageLimitExclusion\",\"parameters\":[{\"format\":\"int32\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"integer\"},{\"in\":\"body\",\"name\":\"postApiV4NamespacesIdStorageLimitExclusion\",\"required\":true,\"schema\":{\"description\":\"Creates a storage limit exclusion for a Namespace\",\"properties\":{\"reason\":{\"description\":\"The reason the Namespace is being excluded\",\"type\":\"string\"}},\"required\":[\"reason\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"Creates a storage limit exclusion for a Namespace\",\"schema\":{\"description\":\"API_Entities_Namespaces_Storage_LimitExclusion model\",\"properties\":{\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"namespace_id\":{\"example\":123,\"format\":\"int32\",\"type\":\"integer\"},\"namespace_name\":{\"example\":\"GitLab\",\"type\":\"string\"},\"reason\":{\"example\":\"a reason\",\"type\":\"string\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Bad request\"},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "POST", "orig": "/api/v4/namespaces/{id}/storage/limit_exclusion", "rename": { "param": { "id": "namespace_id" } }, "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "namespaces" }, { "var": "namespace_id" }, { "lit": "storage" }, { "lit": "limit_exclusion" }], "select": { "exist": ["namespace_id", "post_api_v4_namespaces_id_storage_limit_exclusion"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "query": [{ "active": true, "example": 1, "kind": "query", "name": "page", "orig": "page", "reqd": false, "type": "`$INTEGER`", "index$": 0 }, { "active": true, "example": 20, "kind": "query", "name": "per_page", "orig": "per_page", "reqd": false, "type": "`$INTEGER`", "index$": 1 }] }, "contract": { "id": "GET /api/v4/namespaces/storage/limit_exclusions", "json": "{\"operationId\":\"getApiV4NamespacesStorageLimitExclusions\",\"parameters\":[{\"default\":1,\"description\":\"Current page number\",\"example\":1,\"format\":\"int32\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"type\":\"integer\"},{\"default\":20,\"description\":\"Number of items per page\",\"example\":20,\"format\":\"int32\",\"in\":\"query\",\"name\":\"per_page\",\"required\":false,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Retrieve all limit exclusions\",\"schema\":{\"description\":\"API_Entities_Namespaces_Storage_LimitExclusion model\",\"properties\":{\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"namespace_id\":{\"example\":123,\"format\":\"int32\",\"type\":\"integer\"},\"namespace_name\":{\"example\":\"GitLab\",\"type\":\"string\"},\"reason\":{\"example\":\"a reason\",\"type\":\"string\"}},\"type\":\"object\"}},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/v4/namespaces/storage/limit_exclusions", "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "namespaces" }, { "lit": "storage" }, { "lit": "limit_exclusions" }], "select": { "exist": ["page", "per_page"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [["namespace"]] }, "key$": "api_entities_namespaces_storage_limit_exclusion", "name__orig": "api_entities_namespaces_storage_limit_exclusion", "Name": "ApiEntitiesNamespacesStorageLimitExclusion", "name_": "api_entities_namespaces_storage_limit_exclusion", "name-": "api-entities-namespaces-storage-limit-exclusion", "NAME": "API_ENTITIES_NAMESPACES_STORAGE_LIMIT_EXCLUSION", "index$": 103 }, { "active": true, "entity": "api_entities_namespaces_storage_limit_exclusion", "key$": "BasicApiEntitiesNamespacesStorageLimitExclusionFlow", "kind": "basic", "name": "BasicApiEntitiesNamespacesStorageLimitExclusionFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "api_entities_namespaces_storage_limit_exclusion_ref01" }, "match": { "namespace_id": "namespace01" }, "op": "create", "spec": [], "valid": [], "index$": 0 }, { "active": true, "data": {}, "input": { "ref": "api_entities_namespaces_storage_limit_exclusion_ref01", "srcdatavar": "api_entities_namespaces_storage_limit_exclusion_ref01_data", "suffix": "_dt0" }, "match": {}, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-api_entities_namespaces_storage_limit_exclusion_ref01" } }], "index$": 1 }] }, 'ApiEntitiesNamespacesStorageLimitExclusion');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const api_entities_namespaces_storage_limit_exclusion_ref01_ent = client.ApiEntitiesNamespacesStorageLimitExclusion();
        let api_entities_namespaces_storage_limit_exclusion_ref01_data = setup.data.new.api_entities_namespaces_storage_limit_exclusion['api_entities_namespaces_storage_limit_exclusion_ref01'];
        api_entities_namespaces_storage_limit_exclusion_ref01_data['namespace_id'] = setup.idmap['namespace01'];
        api_entities_namespaces_storage_limit_exclusion_ref01_data = (await api_entities_namespaces_storage_limit_exclusion_ref01_ent.create(api_entities_namespaces_storage_limit_exclusion_ref01_data)).data();
        (0, node_assert_1.default)(null != api_entities_namespaces_storage_limit_exclusion_ref01_data.id);
        // LOAD
        const api_entities_namespaces_storage_limit_exclusion_ref01_match_dt0 = {};
        api_entities_namespaces_storage_limit_exclusion_ref01_match_dt0.id = api_entities_namespaces_storage_limit_exclusion_ref01_data.id;
        const api_entities_namespaces_storage_limit_exclusion_ref01_data_dt0 = (await api_entities_namespaces_storage_limit_exclusion_ref01_ent.load(api_entities_namespaces_storage_limit_exclusion_ref01_match_dt0)).data();
        (0, node_assert_1.default)(api_entities_namespaces_storage_limit_exclusion_ref01_data_dt0.id === api_entities_namespaces_storage_limit_exclusion_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/api_entities_namespaces_storage_limit_exclusion/ApiEntitiesNamespacesStorageLimitExclusionTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['api_entities_namespaces_storage_limit_exclusion01', 'api_entities_namespaces_storage_limit_exclusion02', 'api_entities_namespaces_storage_limit_exclusion03', 'namespace01', 'namespace02', 'namespace03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_API_ENTITIES_NAMESPACES_STORAGE_LIMIT_EXCLUSION_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_API_ENTITIES_NAMESPACES_STORAGE_LIMIT_EXCLUSION_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_API_ENTITIES_NAMESPACES_STORAGE_LIMIT_EXCLUSION_ENTID'];
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
//# sourceMappingURL=ApiEntitiesNamespacesStorageLimitExclusionEntity.test.js.map