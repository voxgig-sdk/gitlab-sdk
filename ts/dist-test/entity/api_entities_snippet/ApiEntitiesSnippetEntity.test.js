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
(0, node_test_1.describe)('ApiEntitiesSnippetEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.ApiEntitiesSnippet();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'api_entities_snippet.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "author": { "a": true, "h": "Author", "n": "author", "r": false, "sh": "API_Entities_UserBasic model", "t": "`$OBJECT`", "key$": "author", "index$": 0 }, "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": false, "t": "`$STRING`", "key$": "created_at", "index$": 1 }, "description": { "a": true, "h": "Description", "n": "description", "r": false, "t": "`$STRING`", "key$": "description", "index$": 2 }, "file_name": { "a": true, "h": "File Name", "n": "file_name", "r": false, "t": "`$STRING`", "key$": "file_name", "index$": 3 }, "files": { "a": true, "h": "Files", "n": "files", "r": false, "t": "`$ARRAY`", "key$": "files", "index$": 4 }, "http_url_to_repo": { "a": true, "h": "Http Url To Repo", "n": "http_url_to_repo", "r": false, "t": "`$STRING`", "key$": "http_url_to_repo", "index$": 5 }, "id": { "a": true, "fo": "int32", "h": "Id", "n": "id", "r": false, "t": "`$INTEGER`", "key$": "id", "index$": 6 }, "imported": { "a": true, "h": "Imported", "n": "imported", "r": false, "t": "`$BOOLEAN`", "key$": "imported", "index$": 7 }, "imported_from": { "a": true, "h": "Imported From", "n": "imported_from", "r": false, "t": "`$STRING`", "key$": "imported_from", "index$": 8 }, "project_id": { "a": true, "fo": "int32", "h": "Project Id", "n": "project_id", "r": false, "t": "`$INTEGER`", "key$": "project_id", "index$": 9 }, "raw_url": { "a": true, "h": "Raw Url", "n": "raw_url", "r": false, "t": "`$STRING`", "key$": "raw_url", "index$": 10 }, "repository_storage": { "a": true, "h": "Repository Storage", "n": "repository_storage", "r": false, "t": "`$STRING`", "key$": "repository_storage", "index$": 11 }, "ssh_url_to_repo": { "a": true, "h": "Ssh Url To Repo", "n": "ssh_url_to_repo", "r": false, "t": "`$STRING`", "key$": "ssh_url_to_repo", "index$": 12 }, "title": { "a": true, "h": "Title", "n": "title", "r": false, "t": "`$STRING`", "key$": "title", "index$": 13 }, "updated_at": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updated_at", "r": false, "t": "`$STRING`", "key$": "updated_at", "index$": 14 }, "visibility": { "a": true, "h": "Visibility", "n": "visibility", "r": false, "t": "`$STRING`", "key$": "visibility", "index$": 15 }, "web_url": { "a": true, "h": "Web Url", "n": "web_url", "r": false, "t": "`$STRING`", "key$": "web_url", "index$": 16 } }, "id": { "field": "id", "name": "id" }, "name": "api_entities_snippet", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /api/v4/snippets/all", "source": "swagger2", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "created_after", "or": "created_after", "r": false, "t": "`$ANY`", "index$": 0 }, { "a": true, "k": "query", "n": "created_before", "or": "created_before", "r": false, "t": "`$ANY`", "index$": 1 }, { "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "ex": 20, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$INTEGER`", "index$": 3 }, { "a": true, "k": "query", "n": "repository_storage", "or": "repository_storage", "r": false, "t": "`$ANY`", "index$": 4 }] }, "k": "http", "m": "GET", "o": "/api/v4/snippets/all", "q": { "exist": ["created_after", "created_before", "page", "per_page", "repository_storage"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "snippets" }, { "lit": "all" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /api/v4/snippets", "source": "swagger2", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "created_after", "or": "created_after", "r": false, "t": "`$ANY`", "index$": 0 }, { "a": true, "k": "query", "n": "created_before", "or": "created_before", "r": false, "t": "`$ANY`", "index$": 1 }, { "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "ex": 20, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$INTEGER`", "index$": 3 }] }, "k": "http", "m": "GET", "o": "/api/v4/snippets", "q": { "exist": ["created_after", "created_before", "page", "per_page"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "snippets" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "api_entities_snippet", "name__orig": "api_entities_snippet", "Name": "ApiEntitiesSnippet", "name_": "api_entities_snippet", "name-": "api-entities-snippet", "NAME": "API_ENTITIES_SNIPPET", "index$": 155 }, { "active": true, "entity": "api_entities_snippet", "key$": "BasicApiEntitiesSnippetFlow", "kind": "basic", "name": "BasicApiEntitiesSnippetFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "api_entities_snippet_ref01" } }], "index$": 0 }] }, 'ApiEntitiesSnippet', { "GET /api/v4/snippets/all": { "protocol": "http", "parameters": [{ "in": "query", "name": "created_after", "description": "Return snippets created after the specified time", "type": "string", "format": "date-time", "required": false, "index$": 0 }, { "in": "query", "name": "created_before", "description": "Return snippets created before the specified time", "type": "string", "format": "date-time", "required": false, "index$": 1 }, { "in": "query", "name": "page", "description": "Current page number", "type": "integer", "format": "int32", "default": 1, "required": false, "example": 1, "index$": 2 }, { "in": "query", "name": "per_page", "description": "Number of items per page", "type": "integer", "format": "int32", "default": 20, "required": false, "example": 20, "index$": 3 }, { "in": "query", "name": "repository_storage", "description": "Filter by repository storage used by the snippet", "type": "string", "required": false, "index$": 4 }] }, "GET /api/v4/snippets": { "protocol": "http", "parameters": [{ "in": "query", "name": "created_after", "description": "Return snippets created after the specified time", "type": "string", "format": "date-time", "required": false, "index$": 0 }, { "in": "query", "name": "created_before", "description": "Return snippets created before the specified time", "type": "string", "format": "date-time", "required": false, "index$": 1 }, { "in": "query", "name": "page", "description": "Current page number", "type": "integer", "format": "int32", "default": 1, "required": false, "example": 1, "index$": 2 }, { "in": "query", "name": "per_page", "description": "Number of items per page", "type": "integer", "format": "int32", "default": 20, "required": false, "example": 20, "index$": 3 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let api_entities_snippet_ref01_data = Object.values(setup.data.existing.api_entities_snippet)[0];
        // LIST
        const api_entities_snippet_ref01_ent = client.ApiEntitiesSnippet();
        const api_entities_snippet_ref01_match = {};
        const api_entities_snippet_ref01_list = (await api_entities_snippet_ref01_ent.list(api_entities_snippet_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/api_entities_snippet/ApiEntitiesSnippetTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['api_entities_snippet01', 'api_entities_snippet02', 'api_entities_snippet03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_API_ENTITIES_SNIPPET_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_API_ENTITIES_SNIPPET_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_API_ENTITIES_SNIPPET_ENTID'];
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
//# sourceMappingURL=ApiEntitiesSnippetEntity.test.js.map