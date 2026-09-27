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
(0, node_test_1.describe)('ApiEntitiesSuggestionEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.ApiEntitiesSuggestion();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['update']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'api_entities_suggestion.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "appliable": { "a": true, "h": "Appliable", "n": "appliable", "r": false, "t": "`$STRING`", "key$": "appliable", "index$": 0 }, "applied": { "a": true, "h": "Applied", "n": "applied", "r": false, "t": "`$STRING`", "key$": "applied", "index$": 1 }, "from_content": { "a": true, "h": "From Content", "n": "from_content", "r": false, "t": "`$STRING`", "key$": "from_content", "index$": 2 }, "from_line": { "a": true, "h": "From Line", "n": "from_line", "r": false, "t": "`$STRING`", "key$": "from_line", "index$": 3 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 4 }, "to_content": { "a": true, "h": "To Content", "n": "to_content", "r": false, "t": "`$STRING`", "key$": "to_content", "index$": 5 }, "to_line": { "a": true, "h": "To Line", "n": "to_line", "r": false, "t": "`$STRING`", "key$": "to_line", "index$": 6 } }, "id": { "field": "id", "name": "id" }, "name": "api_entities_suggestion", "op": { "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /api/v4/suggestions/{id}/apply", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "suggestion_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "put_api_v4_suggestions_id_apply", "or": "put_api_v4_suggestions_id_apply", "r": true, "t": "`$OBJECT`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/api/v4/suggestions/{id}/apply", "q": { "exist": ["put_api_v4_suggestions_id_apply", "suggestion_id"] }, "r": { "param": { "id": "suggestion_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "suggestions" }, { "var": "suggestion_id" }, { "lit": "apply" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "PUT /api/v4/suggestions/batch_apply", "source": "swagger2", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "put_api_v4_suggestions_batch_apply", "or": "put_api_v4_suggestions_batch_apply", "r": true, "t": "`$OBJECT`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/api/v4/suggestions/batch_apply", "q": { "exist": ["put_api_v4_suggestions_batch_apply"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "suggestions" }, { "lit": "batch_apply" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "api_entities_suggestion", "name__orig": "api_entities_suggestion", "Name": "ApiEntitiesSuggestion", "name_": "api_entities_suggestion", "name-": "api-entities-suggestion", "NAME": "API_ENTITIES_SUGGESTION", "index$": 157 }, { "active": true, "entity": "api_entities_suggestion", "key$": "BasicApiEntitiesSuggestionFlow", "kind": "basic", "name": "BasicApiEntitiesSuggestionFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "api_entities_suggestion_ref01", "srcdatavar": "api_entities_suggestion_ref01_data", "suffix": "_up0", "textfield": "appliable" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-api_entities_suggestion_ref01" } }], "v": [], "index$": 0 }] }, 'ApiEntitiesSuggestion', { "PUT /api/v4/suggestions/{id}/apply": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID of the suggestion", "type": "integer", "format": "int32", "required": true, "index$": 0 }, { "name": "putApiV4SuggestionsIdApply", "in": "body", "required": true, "schema": { "type": "object", "properties": { "commit_message": { "type": "string", "description": "A custom commit message to use instead of the default generated message or the project's default message" } }, "description": "Apply suggestion patch in the Merge Request it was created", "x-ref": "#/definitions/putApiV4SuggestionsIdApply" }, "index$": 1 }] }, "PUT /api/v4/suggestions/batch_apply": { "protocol": "http", "parameters": [{ "name": "putApiV4SuggestionsBatchApply", "in": "body", "required": true, "schema": { "type": "object", "properties": { "ids": { "type": "array", "description": "An array of the suggestion IDs", "items": { "type": "integer", "format": "int32" } }, "commit_message": { "type": "string", "description": "A custom commit message to use instead of the default generated message or the project's default message" } }, "required": ["ids"], "description": "Apply multiple suggestion patches in the Merge Request where they were created", "x-ref": "#/definitions/putApiV4SuggestionsBatchApply" }, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let api_entities_suggestion_ref01_data = Object.values(setup.data.existing.api_entities_suggestion)[0];
        // UPDATE
        const api_entities_suggestion_ref01_ent = client.ApiEntitiesSuggestion();
        const api_entities_suggestion_ref01_data_up0 = {};
        api_entities_suggestion_ref01_data_up0.id = api_entities_suggestion_ref01_data.id;
        const api_entities_suggestion_ref01_markdef_up0 = { name: 'appliable', value: 'Mark01-api_entities_suggestion_ref01_' + setup.now };
        api_entities_suggestion_ref01_data_up0[api_entities_suggestion_ref01_markdef_up0.name] = api_entities_suggestion_ref01_markdef_up0.value;
        const api_entities_suggestion_ref01_resdata_up0 = (await api_entities_suggestion_ref01_ent.update(api_entities_suggestion_ref01_data_up0)).data();
        (0, node_assert_1.default)(api_entities_suggestion_ref01_resdata_up0.id === api_entities_suggestion_ref01_data_up0.id);
        (0, node_assert_1.default)(api_entities_suggestion_ref01_resdata_up0[api_entities_suggestion_ref01_markdef_up0.name] === api_entities_suggestion_ref01_markdef_up0.value);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/api_entities_suggestion/ApiEntitiesSuggestionTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['api_entities_suggestion01', 'api_entities_suggestion02', 'api_entities_suggestion03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_API_ENTITIES_SUGGESTION_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_API_ENTITIES_SUGGESTION_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_API_ENTITIES_SUGGESTION_ENTID'];
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
//# sourceMappingURL=ApiEntitiesSuggestionEntity.test.js.map