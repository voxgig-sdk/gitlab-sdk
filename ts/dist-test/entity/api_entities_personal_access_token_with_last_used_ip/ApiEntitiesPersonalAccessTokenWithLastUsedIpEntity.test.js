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
(0, node_test_1.describe)('ApiEntitiesPersonalAccessTokenWithLastUsedIpEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.ApiEntitiesPersonalAccessTokenWithLastUsedIp();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'api_entities_personal_access_token_with_last_used_ip.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "active": { "a": true, "h": "Active", "n": "active", "r": false, "t": "`$BOOLEAN`", "key$": "active", "index$": 0 }, "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": false, "t": "`$STRING`", "key$": "created_at", "index$": 1 }, "description": { "a": true, "h": "Description", "n": "description", "r": false, "t": "`$STRING`", "key$": "description", "index$": 2 }, "expires_at": { "a": true, "fo": "date-time", "h": "Expires At", "n": "expires_at", "r": false, "t": "`$STRING`", "key$": "expires_at", "index$": 3 }, "id": { "a": true, "fo": "int32", "h": "Id", "n": "id", "r": false, "t": "`$INTEGER`", "key$": "id", "index$": 4 }, "last_used_at": { "a": true, "fo": "date-time", "h": "Last Used At", "n": "last_used_at", "r": false, "t": "`$STRING`", "key$": "last_used_at", "index$": 5 }, "last_used_ips": { "a": true, "h": "Last Used Ips", "n": "last_used_ips", "r": false, "t": "`$ARRAY`", "key$": "last_used_ips", "index$": 6 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "t": "`$STRING`", "key$": "name", "index$": 7 }, "revoked": { "a": true, "h": "Revoked", "n": "revoked", "r": false, "t": "`$BOOLEAN`", "key$": "revoked", "index$": 8 }, "scopes": { "a": true, "h": "Scopes", "n": "scopes", "r": false, "t": "`$ARRAY`", "key$": "scopes", "index$": 9 }, "user_id": { "a": true, "fo": "int32", "h": "User Id", "n": "user_id", "r": false, "t": "`$INTEGER`", "key$": "user_id", "index$": 10 } }, "id": { "field": "id", "name": "id" }, "name": "api_entities_personal_access_token_with_last_used_ip", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /api/v4/personal_access_tokens", "source": "swagger2", "version": 2 }, "g": { "query": [{ "a": true, "ex": "2021-01-01", "k": "query", "n": "created_after", "or": "created_after", "r": false, "t": "`$ANY`", "index$": 0 }, { "a": true, "ex": "2022-01-01", "k": "query", "n": "created_before", "or": "created_before", "r": false, "t": "`$ANY`", "index$": 1 }, { "a": true, "ex": "2021-01-01", "k": "query", "n": "expires_after", "or": "expires_after", "r": false, "t": "`$ANY`", "index$": 2 }, { "a": true, "ex": "2022-01-01", "k": "query", "n": "expires_before", "or": "expires_before", "r": false, "t": "`$ANY`", "index$": 3 }, { "a": true, "ex": "2022-01-01", "k": "query", "n": "last_used_after", "or": "last_used_after", "r": false, "t": "`$ANY`", "index$": 4 }, { "a": true, "ex": "2021-01-01", "k": "query", "n": "last_used_before", "or": "last_used_before", "r": false, "t": "`$ANY`", "index$": 5 }, { "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 6 }, { "a": true, "ex": 20, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$INTEGER`", "index$": 7 }, { "a": true, "k": "query", "n": "revoked", "or": "revoked", "r": false, "t": "`$ANY`", "index$": 8 }, { "a": true, "ex": "token", "k": "query", "n": "search", "or": "search", "r": false, "t": "`$ANY`", "index$": 9 }, { "a": true, "ex": "created_at_desc", "k": "query", "n": "sort", "or": "sort", "r": false, "t": "`$ANY`", "index$": 10 }, { "a": true, "ex": "active", "k": "query", "n": "state", "or": "state", "r": false, "t": "`$ANY`", "index$": 11 }, { "a": true, "ex": 2, "k": "query", "n": "user_id", "or": "user_id", "r": false, "t": "`$STRING`", "index$": 12 }] }, "k": "http", "m": "GET", "o": "/api/v4/personal_access_tokens", "q": { "exist": ["created_after", "created_before", "expires_after", "expires_before", "last_used_after", "last_used_before", "page", "per_page", "revoked", "search", "sort", "state", "user_id"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "personal_access_tokens" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /api/v4/personal_access_tokens/self", "source": "swagger2", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/api/v4/personal_access_tokens/self", "q": {}, "r": {}, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "personal_access_tokens" }, { "lit": "self" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/v4/personal_access_tokens/{id}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/v4/personal_access_tokens/{id}", "q": { "exist": ["id"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "personal_access_tokens" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "api_entities_personal_access_token_with_last_used_ip", "name__orig": "api_entities_personal_access_token_with_last_used_ip", "Name": "ApiEntitiesPersonalAccessTokenWithLastUsedIp", "name_": "api_entities_personal_access_token_with_last_used_ip", "name-": "api-entities-personal-access-token-with-last-used-ip", "NAME": "API_ENTITIES_PERSONAL_ACCESS_TOKEN_WITH_LAST_USED_IP", "index$": 126 }, { "active": true, "entity": "api_entities_personal_access_token_with_last_used_ip", "key$": "BasicApiEntitiesPersonalAccessTokenWithLastUsedIpFlow", "kind": "basic", "name": "BasicApiEntitiesPersonalAccessTokenWithLastUsedIpFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "api_entities_personal_access_token_with_last_used_ip_ref01" } }], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "api_entities_personal_access_token_with_last_used_ip_ref01", "srcdatavar": "api_entities_personal_access_token_with_last_used_ip_ref01_data", "suffix": "_dt0" }, "m": { "id": "api_entities_personal_access_token_with_last_used_ip01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-api_entities_personal_access_token_with_last_used_ip_ref01" } }], "index$": 1 }] }, 'ApiEntitiesPersonalAccessTokenWithLastUsedIp', { "GET /api/v4/personal_access_tokens": { "protocol": "http", "parameters": [{ "in": "query", "name": "user_id", "description": "Filter PATs by User ID", "type": "integer", "format": "int32", "required": false, "example": 2, "index$": 0 }, { "in": "query", "name": "revoked", "description": "Filter tokens where revoked state matches parameter", "type": "boolean", "required": false, "index$": 1 }, { "in": "query", "name": "state", "description": "Filter tokens which are either active or not", "type": "string", "enum": ["active", "inactive"], "required": false, "example": "active", "index$": 2 }, { "in": "query", "name": "created_before", "description": "Filter tokens which were created before given datetime", "type": "string", "format": "date-time", "required": false, "example": "2022-01-01", "index$": 3 }, { "in": "query", "name": "created_after", "description": "Filter tokens which were created after given datetime", "type": "string", "format": "date-time", "required": false, "example": "2021-01-01", "index$": 4 }, { "in": "query", "name": "last_used_before", "description": "Filter tokens which were used before given datetime", "type": "string", "format": "date-time", "required": false, "example": "2021-01-01", "index$": 5 }, { "in": "query", "name": "last_used_after", "description": "Filter tokens which were used after given datetime", "type": "string", "format": "date-time", "required": false, "example": "2022-01-01", "index$": 6 }, { "in": "query", "name": "expires_before", "description": "Filter tokens which expire before given datetime", "type": "string", "format": "date", "required": false, "example": "2022-01-01", "index$": 7 }, { "in": "query", "name": "expires_after", "description": "Filter tokens which expire after given datetime", "type": "string", "format": "date", "required": false, "example": "2021-01-01", "index$": 8 }, { "in": "query", "name": "search", "description": "Filters tokens by name", "type": "string", "required": false, "example": "token", "index$": 9 }, { "in": "query", "name": "sort", "description": "Sort tokens", "type": "string", "required": false, "example": "created_at_desc", "index$": 10 }, { "in": "query", "name": "page", "description": "Current page number", "type": "integer", "format": "int32", "default": 1, "required": false, "example": 1, "index$": 11 }, { "in": "query", "name": "per_page", "description": "Number of items per page", "type": "integer", "format": "int32", "default": 20, "required": false, "example": 20, "index$": 12 }] }, "GET /api/v4/personal_access_tokens/self": { "protocol": "http", "parameters": [] }, "GET /api/v4/personal_access_tokens/{id}": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "type": "integer", "format": "int32", "required": true, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let api_entities_personal_access_token_with_last_used_ip_ref01_data = Object.values(setup.data.existing.api_entities_personal_access_token_with_last_used_ip)[0];
        // LIST
        const api_entities_personal_access_token_with_last_used_ip_ref01_ent = client.ApiEntitiesPersonalAccessTokenWithLastUsedIp();
        const api_entities_personal_access_token_with_last_used_ip_ref01_match = {};
        const api_entities_personal_access_token_with_last_used_ip_ref01_list = (await api_entities_personal_access_token_with_last_used_ip_ref01_ent.list(api_entities_personal_access_token_with_last_used_ip_ref01_match)).map((e) => e.data());
        // LOAD
        const api_entities_personal_access_token_with_last_used_ip_ref01_match_dt0 = {};
        api_entities_personal_access_token_with_last_used_ip_ref01_match_dt0.id = api_entities_personal_access_token_with_last_used_ip_ref01_data.id;
        const api_entities_personal_access_token_with_last_used_ip_ref01_data_dt0 = (await api_entities_personal_access_token_with_last_used_ip_ref01_ent.load(api_entities_personal_access_token_with_last_used_ip_ref01_match_dt0)).data();
        (0, node_assert_1.default)(api_entities_personal_access_token_with_last_used_ip_ref01_data_dt0.id === api_entities_personal_access_token_with_last_used_ip_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/api_entities_personal_access_token_with_last_used_ip/ApiEntitiesPersonalAccessTokenWithLastUsedIpTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['api_entities_personal_access_token_with_last_used_ip01', 'api_entities_personal_access_token_with_last_used_ip02', 'api_entities_personal_access_token_with_last_used_ip03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_API_ENTITIES_PERSONAL_ACCESS_TOKEN_WITH_LAST_USED_IP_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_API_ENTITIES_PERSONAL_ACCESS_TOKEN_WITH_LAST_USED_IP_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_API_ENTITIES_PERSONAL_ACCESS_TOKEN_WITH_LAST_USED_IP_ENTID'];
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
//# sourceMappingURL=ApiEntitiesPersonalAccessTokenWithLastUsedIpEntity.test.js.map