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
(0, node_test_1.describe)('ApiEntitiesPublicGroupDetailEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.ApiEntitiesPublicGroupDetail();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'api_entities_public_group_detail.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "avatar_url", "req": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "full_name", "req": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "full_path", "req": false, "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "id", "req": false, "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "name", "req": false, "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "web_url", "req": false, "type": "`$STRING`", "index$": 5 }], "id": { "field": "id", "name": "id" }, "name": "api_entities_public_group_detail", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "project_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }], "query": [{ "active": true, "example": 1, "kind": "query", "name": "page", "orig": "page", "reqd": false, "type": "`$INTEGER`", "index$": 0 }, { "active": true, "example": 20, "kind": "query", "name": "per_page", "orig": "per_page", "reqd": false, "type": "`$INTEGER`", "index$": 1 }, { "active": true, "example": "group", "kind": "query", "name": "search", "orig": "search", "reqd": false, "type": "`$ANY`", "index$": 2 }, { "active": true, "kind": "query", "name": "shared_min_access_level", "orig": "shared_min_access_level", "reqd": false, "type": "`$ANY`", "index$": 3 }, { "active": true, "kind": "query", "name": "shared_visible_only", "orig": "shared_visible_only", "reqd": false, "type": "`$ANY`", "index$": 4 }, { "active": true, "kind": "query", "name": "skip_group", "orig": "skip_group", "reqd": false, "type": "`$ANY`", "index$": 5 }, { "active": true, "kind": "query", "name": "with_shared", "orig": "with_shared", "reqd": false, "type": "`$ANY`", "index$": 6 }] }, "contract": { "id": "GET /api/v4/projects/{id}/groups", "json": "{\"operationId\":\"getApiV4ProjectsIdGroups\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"Return list of groups matching the search criteria\",\"example\":\"group\",\"in\":\"query\",\"name\":\"search\",\"required\":false,\"type\":\"string\"},{\"description\":\"Array of group ids to exclude from list\",\"in\":\"query\",\"items\":{\"format\":\"int32\",\"type\":\"integer\"},\"name\":\"skip_groups\",\"required\":false,\"type\":\"array\"},{\"default\":false,\"description\":\"Include shared groups\",\"in\":\"query\",\"name\":\"with_shared\",\"required\":false,\"type\":\"boolean\"},{\"default\":false,\"description\":\"Limit to shared groups user has access to\",\"in\":\"query\",\"name\":\"shared_visible_only\",\"required\":false,\"type\":\"boolean\"},{\"description\":\"Limit returned shared groups by minimum access level to the project\",\"enum\":[10,15,20,30,40,50],\"format\":\"int32\",\"in\":\"query\",\"name\":\"shared_min_access_level\",\"required\":false,\"type\":\"integer\"},{\"default\":1,\"description\":\"Current page number\",\"example\":1,\"format\":\"int32\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"type\":\"integer\"},{\"default\":20,\"description\":\"Number of items per page\",\"example\":20,\"format\":\"int32\",\"in\":\"query\",\"name\":\"per_page\",\"required\":false,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get ancestor and shared groups for a project\",\"schema\":{\"items\":{\"description\":\"API_Entities_PublicGroupDetails model\",\"properties\":{\"avatar_url\":{\"type\":\"string\"},\"full_name\":{\"type\":\"string\"},\"full_path\":{\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"web_url\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"403\":{\"description\":\"Unauthenticated\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/v4/projects/{id}/groups", "rename": { "param": { "id": "project_id" } }, "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "groups" }], "select": { "exist": ["page", "per_page", "project_id", "search", "shared_min_access_level", "shared_visible_only", "skip_group", "with_shared"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "project_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }], "query": [{ "active": true, "example": 1, "kind": "query", "name": "page", "orig": "page", "reqd": false, "type": "`$INTEGER`", "index$": 0 }, { "active": true, "example": 20, "kind": "query", "name": "per_page", "orig": "per_page", "reqd": false, "type": "`$INTEGER`", "index$": 1 }, { "active": true, "example": "search", "kind": "query", "name": "search", "orig": "search", "reqd": false, "type": "`$ANY`", "index$": 2 }] }, "contract": { "id": "GET /api/v4/projects/{id}/transfer_locations", "json": "{\"operationId\":\"getApiV4ProjectsIdTransferLocations\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"Return list of namespaces matching the search criteria\",\"example\":\"search\",\"in\":\"query\",\"name\":\"search\",\"required\":false,\"type\":\"string\"},{\"default\":1,\"description\":\"Current page number\",\"example\":1,\"format\":\"int32\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"type\":\"integer\"},{\"default\":20,\"description\":\"Number of items per page\",\"example\":20,\"format\":\"int32\",\"in\":\"query\",\"name\":\"per_page\",\"required\":false,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get the namespaces to where the project can be transferred\",\"schema\":{\"items\":{\"description\":\"API_Entities_PublicGroupDetails model\",\"properties\":{\"avatar_url\":{\"type\":\"string\"},\"full_name\":{\"type\":\"string\"},\"full_path\":{\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"web_url\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"403\":{\"description\":\"Unauthenticated\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/v4/projects/{id}/transfer_locations", "rename": { "param": { "id": "project_id" } }, "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "transfer_locations" }], "select": { "exist": ["page", "per_page", "project_id", "search"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "list" } }, "relations": { "ancestors": [["project"]] }, "key$": "api_entities_public_group_detail", "name__orig": "api_entities_public_group_detail", "Name": "ApiEntitiesPublicGroupDetail", "name_": "api_entities_public_group_detail", "name-": "api-entities-public-group-detail", "NAME": "API_ENTITIES_PUBLIC_GROUP_DETAIL", "index$": 146 }, { "active": true, "entity": "api_entities_public_group_detail", "key$": "BasicApiEntitiesPublicGroupDetailFlow", "kind": "basic", "name": "BasicApiEntitiesPublicGroupDetailFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": { "project_id": "project01" }, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "api_entities_public_group_detail_ref01" } }], "index$": 0 }] }, 'ApiEntitiesPublicGroupDetail');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let api_entities_public_group_detail_ref01_data = Object.values(setup.data.existing.api_entities_public_group_detail)[0];
        // LIST
        const api_entities_public_group_detail_ref01_ent = client.ApiEntitiesPublicGroupDetail();
        const api_entities_public_group_detail_ref01_match = {};
        api_entities_public_group_detail_ref01_match['project_id'] = setup.idmap['project01'];
        const api_entities_public_group_detail_ref01_list = (await api_entities_public_group_detail_ref01_ent.list(api_entities_public_group_detail_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/api_entities_public_group_detail/ApiEntitiesPublicGroupDetailTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['api_entities_public_group_detail01', 'api_entities_public_group_detail02', 'api_entities_public_group_detail03', 'project01', 'project02', 'project03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_API_ENTITIES_PUBLIC_GROUP_DETAIL_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_API_ENTITIES_PUBLIC_GROUP_DETAIL_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_API_ENTITIES_PUBLIC_GROUP_DETAIL_ENTID'];
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
//# sourceMappingURL=ApiEntitiesPublicGroupDetailEntity.test.js.map