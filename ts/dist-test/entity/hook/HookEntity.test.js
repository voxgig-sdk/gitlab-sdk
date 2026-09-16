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
(0, node_test_1.describe)('HookEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.Hook();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['create', 'update', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'hook.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "id", "req": false, "type": "`$STRING`", "index$": 0 }], "id": { "field": "id", "name": "id" }, "name": "hook", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "hook_id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "POST /api/v4/hooks/{hook_id}", "json": "{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4HooksHookId\",\"parameters\":[{\"description\":\"The ID of the hook\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"hook_id\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"created Hook\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "POST", "orig": "/api/v4/hooks/{hook_id}", "rename": { "param": { "hook_id": "id" } }, "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "hooks" }, { "var": "id" }], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "remove": { "input": "data", "name": "remove", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "hook_id", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "param", "name": "key", "orig": "key", "reqd": true, "type": "`$STRING`", "index$": 1 }] }, "contract": { "id": "DELETE /api/v4/hooks/{hook_id}/custom_headers/{key}", "json": "{\"operationId\":\"deleteApiV4HooksHookIdCustomHeadersKey\",\"parameters\":[{\"description\":\"The ID of the hook\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"hook_id\",\"required\":true,\"type\":\"integer\"},{\"description\":\"The key of the custom header\",\"in\":\"path\",\"name\":\"key\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"204\":{\"description\":\"Un-Set a custom header\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "DELETE", "orig": "/api/v4/hooks/{hook_id}/custom_headers/{key}", "rename": { "param": { "hook_id": "id" } }, "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "hooks" }, { "var": "id" }, { "lit": "custom_headers" }, { "var": "key" }], "select": { "exist": ["id", "key"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "hook_id", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "param", "name": "key", "orig": "key", "reqd": true, "type": "`$STRING`", "index$": 1 }] }, "contract": { "id": "DELETE /api/v4/hooks/{hook_id}/url_variables/{key}", "json": "{\"operationId\":\"deleteApiV4HooksHookIdUrlVariablesKey\",\"parameters\":[{\"description\":\"The ID of the hook\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"hook_id\",\"required\":true,\"type\":\"integer\"},{\"description\":\"The key of the variable\",\"in\":\"path\",\"name\":\"key\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"204\":{\"description\":\"Un-Set a url variable\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "DELETE", "orig": "/api/v4/hooks/{hook_id}/url_variables/{key}", "rename": { "param": { "hook_id": "id" } }, "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "hooks" }, { "var": "id" }, { "lit": "url_variables" }, { "var": "key" }], "select": { "exist": ["id", "key"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "hook_id", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "param", "name": "key", "orig": "key", "reqd": true, "type": "`$STRING`", "index$": 1 }], "query": [{ "active": true, "kind": "query", "name": "put_api_v4_hooks_hook_id_custom_headers_key", "orig": "put_api_v4_hooks_hook_id_custom_headers_key", "reqd": true, "type": "`$OBJECT`", "index$": 0 }] }, "contract": { "id": "PUT /api/v4/hooks/{hook_id}/custom_headers/{key}", "json": "{\"consumes\":[\"application/json\"],\"operationId\":\"putApiV4HooksHookIdCustomHeadersKey\",\"parameters\":[{\"description\":\"The ID of the hook\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"hook_id\",\"required\":true,\"type\":\"integer\"},{\"description\":\"The key of the custom header\",\"in\":\"path\",\"name\":\"key\",\"required\":true,\"type\":\"string\"},{\"in\":\"body\",\"name\":\"putApiV4HooksHookIdCustomHeadersKey\",\"required\":true,\"schema\":{\"description\":\"Set a custom header\",\"properties\":{\"value\":{\"description\":\"The value of the custom header\",\"type\":\"string\"}},\"required\":[\"value\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Set a custom header\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "PUT", "orig": "/api/v4/hooks/{hook_id}/custom_headers/{key}", "rename": { "param": { "hook_id": "id" } }, "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "hooks" }, { "var": "id" }, { "lit": "custom_headers" }, { "var": "key" }], "select": { "exist": ["id", "key", "put_api_v4_hooks_hook_id_custom_headers_key"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "hook_id", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "param", "name": "key", "orig": "key", "reqd": true, "type": "`$STRING`", "index$": 1 }], "query": [{ "active": true, "kind": "query", "name": "put_api_v4_hooks_hook_id_url_variables_key", "orig": "put_api_v4_hooks_hook_id_url_variables_key", "reqd": true, "type": "`$OBJECT`", "index$": 0 }] }, "contract": { "id": "PUT /api/v4/hooks/{hook_id}/url_variables/{key}", "json": "{\"consumes\":[\"application/json\"],\"operationId\":\"putApiV4HooksHookIdUrlVariablesKey\",\"parameters\":[{\"description\":\"The ID of the hook\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"hook_id\",\"required\":true,\"type\":\"integer\"},{\"description\":\"The key of the variable\",\"in\":\"path\",\"name\":\"key\",\"required\":true,\"type\":\"string\"},{\"in\":\"body\",\"name\":\"putApiV4HooksHookIdUrlVariablesKey\",\"required\":true,\"schema\":{\"description\":\"Set a url variable\",\"properties\":{\"value\":{\"description\":\"The value of the variable\",\"type\":\"string\"}},\"required\":[\"value\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Set a url variable\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "PUT", "orig": "/api/v4/hooks/{hook_id}/url_variables/{key}", "rename": { "param": { "hook_id": "id" } }, "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "hooks" }, { "var": "id" }, { "lit": "url_variables" }, { "var": "key" }], "select": { "exist": ["id", "key", "put_api_v4_hooks_hook_id_url_variables_key"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "update" } }, "relations": { "ancestors": [["custom_header"], ["url_variable"]] }, "key$": "hook", "name__orig": "hook", "Name": "Hook", "name_": "hook", "name-": "hook", "NAME": "HOOK", "index$": 216 }, { "active": true, "entity": "hook", "key$": "BasicHookFlow", "kind": "basic", "name": "BasicHookFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "hook_ref01" }, "match": { "hook_id": "hook01" }, "op": "create", "spec": [], "valid": [], "index$": 0 }, { "active": true, "data": {}, "input": { "ref": "hook_ref01", "srcdatavar": "hook_ref01_data", "suffix": "_up0" }, "match": {}, "op": "update", "spec": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-hook_ref01" } }], "valid": [], "index$": 1 }, { "active": true, "data": {}, "input": { "ref": "hook_ref01", "suffix": "_rm0" }, "match": { "id": "hook01" }, "op": "remove", "spec": [], "valid": [], "index$": 2 }] }, 'Hook');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const hook_ref01_ent = client.Hook();
        let hook_ref01_data = setup.data.new.hook['hook_ref01'];
        hook_ref01_data['hook_id'] = setup.idmap['hook01'];
        hook_ref01_data = (await hook_ref01_ent.create(hook_ref01_data)).data();
        (0, node_assert_1.default)(null != hook_ref01_data.id);
        // UPDATE
        const hook_ref01_data_up0 = {};
        hook_ref01_data_up0.id = hook_ref01_data.id;
        const hook_ref01_resdata_up0 = (await hook_ref01_ent.update(hook_ref01_data_up0)).data();
        (0, node_assert_1.default)(hook_ref01_resdata_up0.id === hook_ref01_data_up0.id);
        // REMOVE
        const hook_ref01_match_rm0 = { id: hook_ref01_data.id };
        await hook_ref01_ent.remove(hook_ref01_match_rm0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/hook/HookTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['hook01', 'hook02', 'hook03', 'custom_header01', 'custom_header02', 'custom_header03', 'url_variable01', 'url_variable02', 'url_variable03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_HOOK_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_HOOK_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_HOOK_ENTID'];
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
//# sourceMappingURL=HookEntity.test.js.map