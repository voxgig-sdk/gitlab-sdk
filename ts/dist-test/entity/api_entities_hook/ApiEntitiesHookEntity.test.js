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
(0, node_test_1.describe)('ApiEntitiesHookEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.ApiEntitiesHook();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'api_entities_hook.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "alert_status": { "a": true, "h": "Alert Status", "n": "alert_status", "r": false, "t": "Any", "key$": "alert_status", "index$": 0 }, "branch_filter_strategy": { "a": true, "h": "Branch Filter Strategy", "n": "branch_filter_strategy", "r": false, "t": "`$STRING`", "key$": "branch_filter_strategy", "index$": 1 }, "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": false, "t": "`$STRING`", "key$": "created_at", "index$": 2 }, "custom_headers": { "a": true, "h": "Custom Headers", "n": "custom_headers", "r": false, "t": "`$ARRAY`", "key$": "custom_headers", "index$": 3 }, "custom_webhook_template": { "a": true, "h": "Custom Webhook Template", "n": "custom_webhook_template", "r": false, "t": "`$STRING`", "key$": "custom_webhook_template", "index$": 4 }, "description": { "a": true, "h": "Description", "n": "description", "r": false, "t": "`$STRING`", "key$": "description", "index$": 5 }, "disabled_until": { "a": true, "fo": "date-time", "h": "Disabled Until", "n": "disabled_until", "r": false, "t": "`$STRING`", "key$": "disabled_until", "index$": 6 }, "enable_ssl_verification": { "a": true, "h": "Enable Ssl Verification", "n": "enable_ssl_verification", "r": false, "t": "`$BOOLEAN`", "key$": "enable_ssl_verification", "index$": 7 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 8 }, "merge_requests_events": { "a": true, "h": "Merge Requests Events", "n": "merge_requests_events", "r": false, "t": "`$BOOLEAN`", "key$": "merge_requests_events", "index$": 9 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "t": "`$STRING`", "key$": "name", "index$": 10 }, "push_events": { "a": true, "h": "Push Events", "n": "push_events", "r": false, "t": "`$BOOLEAN`", "key$": "push_events", "index$": 11 }, "push_events_branch_filter": { "a": true, "h": "Push Events Branch Filter", "n": "push_events_branch_filter", "r": false, "t": "`$STRING`", "key$": "push_events_branch_filter", "index$": 12 }, "repository_update_events": { "a": true, "h": "Repository Update Events", "n": "repository_update_events", "r": false, "t": "`$BOOLEAN`", "key$": "repository_update_events", "index$": 13 }, "tag_push_events": { "a": true, "h": "Tag Push Events", "n": "tag_push_events", "r": false, "t": "`$BOOLEAN`", "key$": "tag_push_events", "index$": 14 }, "url": { "a": true, "h": "Url", "n": "url", "r": false, "t": "`$STRING`", "key$": "url", "index$": 15 }, "url_variables": { "a": true, "h": "Url Variables", "n": "url_variables", "r": false, "t": "`$ARRAY`", "key$": "url_variables", "index$": 16 } }, "id": { "field": "id", "name": "id" }, "name": "api_entities_hook", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /api/v4/hooks", "source": "swagger2", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "post_api_v4_hook", "or": "post_api_v4_hook", "r": true, "t": "`$OBJECT`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/v4/hooks", "q": { "exist": ["post_api_v4_hook"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "hooks" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /api/v4/hooks", "source": "swagger2", "version": 2 }, "g": { "query": [{ "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "ex": 20, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$INTEGER`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/api/v4/hooks", "q": { "exist": ["page", "per_page"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "hooks" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/v4/hooks/{hook_id}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "hook_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/v4/hooks/{hook_id}", "q": { "exist": ["id"] }, "r": { "param": { "hook_id": "id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "hooks" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /api/v4/hooks/{hook_id}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "hook_id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "put_api_v4_hooks_hook_id", "or": "put_api_v4_hooks_hook_id", "r": true, "t": "`$OBJECT`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/api/v4/hooks/{hook_id}", "q": { "exist": ["id", "put_api_v4_hooks_hook_id"] }, "r": { "param": { "hook_id": "id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "hooks" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "api_entities_hook", "name__orig": "api_entities_hook", "Name": "ApiEntitiesHook", "name_": "api_entities_hook", "name-": "api-entities-hook", "NAME": "API_ENTITIES_HOOK", "index$": 81 }, { "active": true, "entity": "api_entities_hook", "key$": "BasicApiEntitiesHookFlow", "kind": "basic", "name": "BasicApiEntitiesHookFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "api_entities_hook_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "api_entities_hook_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "api_entities_hook_ref01", "srcdatavar": "api_entities_hook_ref01_data", "suffix": "_up0", "textfield": "branch_filter_strategy" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-api_entities_hook_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "api_entities_hook_ref01", "srcdatavar": "api_entities_hook_ref01_data", "suffix": "_dt0" }, "m": { "id": "api_entities_hook01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-api_entities_hook_ref01" } }], "index$": 3 }] }, 'ApiEntitiesHook', { "POST /api/v4/hooks": { "protocol": "http", "parameters": [{ "name": "postApiV4Hooks", "in": "body", "required": true, "schema": { "type": "object", "properties": { "url": { "type": "string", "description": "The URL to send the request to", "example": "http://example.com/hook" }, "name": { "type": "string", "description": "Name of the hook" }, "description": { "type": "string", "description": "Description of the hook" }, "token": { "type": "string", "description": "Secret token to validate received payloads; this isn't returned in the response" }, "push_events": { "type": "boolean", "description": "When true, the hook fires on push events" }, "tag_push_events": { "type": "boolean", "description": "When true, the hook fires on new tags being pushed" }, "merge_requests_events": { "type": "boolean", "description": "Trigger hook on merge requests events" }, "repository_update_events": { "type": "boolean", "description": "Trigger hook on repository update events" }, "enable_ssl_verification": { "type": "boolean", "description": "Do SSL verification when triggering the hook" }, "push_events_branch_filter": { "type": "string", "description": "Trigger hook on specified branch only" }, "branch_filter_strategy": { "type": "string", "description": "Filter push events by branch. Possible values are `wildcard` (default), `regex`, and `all_branches`", "enum": ["wildcard", "regex", "all_branches"] }, "url_variables": { "type": "array", "description": "URL variables for interpolation", "items": { "type": "object", "properties": { "key": { "type": "string", "description": "Name of the variable", "example": "token" }, "value": { "type": "string", "description": "Value of the variable", "example": "123" } }, "required": ["key", "value"] } }, "custom_headers": { "type": "array", "description": "Custom headers", "items": { "type": "object", "properties": { "key": { "type": "string", "description": "Name of the header", "example": "X-Custom-Header" }, "value": { "type": "string", "description": "Value of the header", "example": "value" } }, "required": ["key", "value"] } } }, "required": ["url"], "description": "Add new system hook", "x-ref": "#/definitions/postApiV4Hooks" }, "index$": 0 }] }, "GET /api/v4/hooks": { "protocol": "http", "parameters": [{ "in": "query", "name": "page", "description": "Current page number", "type": "integer", "format": "int32", "default": 1, "required": false, "example": 1, "index$": 0 }, { "in": "query", "name": "per_page", "description": "Number of items per page", "type": "integer", "format": "int32", "default": 20, "required": false, "example": 20, "index$": 1 }] }, "GET /api/v4/hooks/{hook_id}": { "protocol": "http", "parameters": [{ "in": "path", "name": "hook_id", "description": "The ID of the system hook", "type": "integer", "format": "int32", "required": true, "index$": 0 }] }, "PUT /api/v4/hooks/{hook_id}": { "protocol": "http", "parameters": [{ "in": "path", "name": "hook_id", "description": "The ID of the system hook", "type": "integer", "format": "int32", "required": true, "index$": 0 }, { "name": "putApiV4HooksHookId", "in": "body", "required": true, "schema": { "type": "object", "properties": { "url": { "type": "string", "description": "The URL to send the request to" }, "name": { "type": "string", "description": "Name of the hook" }, "description": { "type": "string", "description": "Description of the hook" }, "token": { "type": "string", "description": "Secret token to validate received payloads; this isn't returned in the response" }, "push_events": { "type": "boolean", "description": "When true, the hook fires on push events" }, "tag_push_events": { "type": "boolean", "description": "When true, the hook fires on new tags being pushed" }, "merge_requests_events": { "type": "boolean", "description": "Trigger hook on merge requests events" }, "repository_update_events": { "type": "boolean", "description": "Trigger hook on repository update events" }, "enable_ssl_verification": { "type": "boolean", "description": "Do SSL verification when triggering the hook" }, "push_events_branch_filter": { "type": "string", "description": "Trigger hook on specified branch only" }, "branch_filter_strategy": { "type": "string", "description": "Filter push events by branch. Possible values are `wildcard` (default), `regex`, and `all_branches`", "enum": ["wildcard", "regex", "all_branches"] }, "url_variables": { "type": "array", "description": "URL variables for interpolation", "items": { "type": "object", "properties": { "key": { "type": "string", "description": "Name of the variable", "example": "token" }, "value": { "type": "string", "description": "Value of the variable", "example": "123" } }, "required": ["key", "value"] } }, "custom_headers": { "type": "array", "description": "Custom headers", "items": { "type": "object", "properties": { "key": { "type": "string", "description": "Name of the header", "example": "X-Custom-Header" }, "value": { "type": "string", "description": "Value of the header", "example": "value" } }, "required": ["key", "value"] } } }, "description": "Edit system hook", "x-ref": "#/definitions/putApiV4HooksHookId" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const api_entities_hook_ref01_ent = client.ApiEntitiesHook();
        let api_entities_hook_ref01_data = setup.data.new.api_entities_hook['api_entities_hook_ref01'];
        api_entities_hook_ref01_data = (await api_entities_hook_ref01_ent.create(api_entities_hook_ref01_data)).data();
        (0, node_assert_1.default)(null != api_entities_hook_ref01_data.id);
        // LIST
        const api_entities_hook_ref01_match = {};
        const api_entities_hook_ref01_list = (await api_entities_hook_ref01_ent.list(api_entities_hook_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(api_entities_hook_ref01_list, { id: api_entities_hook_ref01_data.id })));
        // UPDATE
        const api_entities_hook_ref01_data_up0 = {};
        api_entities_hook_ref01_data_up0.id = api_entities_hook_ref01_data.id;
        const api_entities_hook_ref01_markdef_up0 = { name: 'branch_filter_strategy', value: 'Mark01-api_entities_hook_ref01_' + setup.now };
        api_entities_hook_ref01_data_up0[api_entities_hook_ref01_markdef_up0.name] = api_entities_hook_ref01_markdef_up0.value;
        const api_entities_hook_ref01_resdata_up0 = (await api_entities_hook_ref01_ent.update(api_entities_hook_ref01_data_up0)).data();
        (0, node_assert_1.default)(api_entities_hook_ref01_resdata_up0.id === api_entities_hook_ref01_data_up0.id);
        (0, node_assert_1.default)(api_entities_hook_ref01_resdata_up0[api_entities_hook_ref01_markdef_up0.name] === api_entities_hook_ref01_markdef_up0.value);
        // LOAD
        const api_entities_hook_ref01_match_dt0 = {};
        api_entities_hook_ref01_match_dt0.id = api_entities_hook_ref01_data.id;
        const api_entities_hook_ref01_data_dt0 = (await api_entities_hook_ref01_ent.load(api_entities_hook_ref01_match_dt0)).data();
        (0, node_assert_1.default)(api_entities_hook_ref01_data_dt0.id === api_entities_hook_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/api_entities_hook/ApiEntitiesHookTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['api_entities_hook01', 'api_entities_hook02', 'api_entities_hook03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_API_ENTITIES_HOOK_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_API_ENTITIES_HOOK_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_API_ENTITIES_HOOK_ENTID'];
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
//# sourceMappingURL=ApiEntitiesHookEntity.test.js.map