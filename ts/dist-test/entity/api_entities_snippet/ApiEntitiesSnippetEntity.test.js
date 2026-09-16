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
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "author", "req": false, "short": "API_Entities_UserBasic model", "type": "`$OBJECT`", "index$": 0 }, { "active": true, "format": "date-time", "name": "created_at", "req": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "description", "req": false, "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "file_name", "req": false, "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "files", "req": false, "type": "`$ARRAY`", "index$": 4 }, { "active": true, "name": "http_url_to_repo", "req": false, "type": "`$STRING`", "index$": 5 }, { "active": true, "format": "int32", "name": "id", "req": false, "type": "`$INTEGER`", "index$": 6 }, { "active": true, "name": "imported", "req": false, "type": "`$BOOLEAN`", "index$": 7 }, { "active": true, "name": "imported_from", "req": false, "type": "`$STRING`", "index$": 8 }, { "active": true, "format": "int32", "name": "project_id", "req": false, "type": "`$INTEGER`", "index$": 9 }, { "active": true, "name": "raw_url", "req": false, "type": "`$STRING`", "index$": 10 }, { "active": true, "name": "repository_storage", "req": false, "type": "`$STRING`", "index$": 11 }, { "active": true, "name": "ssh_url_to_repo", "req": false, "type": "`$STRING`", "index$": 12 }, { "active": true, "name": "title", "req": false, "type": "`$STRING`", "index$": 13 }, { "active": true, "format": "date-time", "name": "updated_at", "req": false, "type": "`$STRING`", "index$": 14 }, { "active": true, "name": "visibility", "req": false, "type": "`$STRING`", "index$": 15 }, { "active": true, "name": "web_url", "req": false, "type": "`$STRING`", "index$": 16 }], "id": { "field": "id", "name": "id" }, "name": "api_entities_snippet", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "query": [{ "active": true, "kind": "query", "name": "created_after", "orig": "created_after", "reqd": false, "type": "`$ANY`", "index$": 0 }, { "active": true, "kind": "query", "name": "created_before", "orig": "created_before", "reqd": false, "type": "`$ANY`", "index$": 1 }, { "active": true, "example": 1, "kind": "query", "name": "page", "orig": "page", "reqd": false, "type": "`$INTEGER`", "index$": 2 }, { "active": true, "example": 20, "kind": "query", "name": "per_page", "orig": "per_page", "reqd": false, "type": "`$INTEGER`", "index$": 3 }, { "active": true, "kind": "query", "name": "repository_storage", "orig": "repository_storage", "reqd": false, "type": "`$ANY`", "index$": 4 }] }, "contract": { "id": "GET /api/v4/snippets/all", "json": "{\"operationId\":\"getApiV4SnippetsAll\",\"parameters\":[{\"description\":\"Return snippets created after the specified time\",\"format\":\"date-time\",\"in\":\"query\",\"name\":\"created_after\",\"required\":false,\"type\":\"string\"},{\"description\":\"Return snippets created before the specified time\",\"format\":\"date-time\",\"in\":\"query\",\"name\":\"created_before\",\"required\":false,\"type\":\"string\"},{\"default\":1,\"description\":\"Current page number\",\"example\":1,\"format\":\"int32\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"type\":\"integer\"},{\"default\":20,\"description\":\"Number of items per page\",\"example\":20,\"format\":\"int32\",\"in\":\"query\",\"name\":\"per_page\",\"required\":false,\"type\":\"integer\"},{\"description\":\"Filter by repository storage used by the snippet\",\"in\":\"query\",\"name\":\"repository_storage\",\"required\":false,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"List all snippets current_user has access to\",\"schema\":{\"items\":{\"description\":\"API_Entities_Snippet model\",\"properties\":{\"author\":{\"description\":\"API_Entities_UserBasic model\",\"properties\":{\"avatar_path\":{\"example\":\"/user/avatar/28/The-Big-Lebowski-400-400.png\",\"type\":\"string\"},\"avatar_url\":{\"example\":\"https://gravatar.com/avatar/1\",\"type\":\"string\"},\"custom_attributes\":{\"items\":{\"description\":\"API_Entities_CustomAttribute model\",\"properties\":{\"key\":{\"example\":\"foo\",\"type\":\"string\"},\"value\":{\"example\":\"bar\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"locked\":{\"type\":\"boolean\"},\"name\":{\"example\":\"Administrator\",\"type\":\"string\"},\"public_email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"state\":{\"example\":\"active\",\"type\":\"string\"},\"username\":{\"example\":\"admin\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/root\",\"type\":\"string\"}},\"type\":\"object\"},\"created_at\":{\"example\":\"2012-06-28T10:52:04Z\",\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"example\":\"Ruby test snippet\",\"type\":\"string\"},\"file_name\":{\"example\":\"add.rb\",\"type\":\"string\"},\"files\":{\"example\":\"e0d123e5f316bef78bfdf5a008837577\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"http_url_to_repo\":{\"example\":\"https://gitlab.example.com/snippets/65.git\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"imported\":{\"example\":false,\"type\":\"boolean\"},\"imported_from\":{\"example\":\"none\",\"type\":\"string\"},\"project_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"raw_url\":{\"example\":\"http://example.com/example/example/snippets/1/raw\",\"type\":\"string\"},\"repository_storage\":{\"type\":\"string\"},\"ssh_url_to_repo\":{\"example\":\"ssh://user@gitlab.example.com/snippets/65.git\",\"type\":\"string\"},\"title\":{\"example\":\"test\",\"type\":\"string\"},\"updated_at\":{\"example\":\"2012-06-28T10:52:04Z\",\"format\":\"date-time\",\"type\":\"string\"},\"visibility\":{\"example\":\"public\",\"type\":\"string\"},\"web_url\":{\"example\":\"http://example.com/example/example/snippets/1\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/v4/snippets/all", "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "snippets" }, { "lit": "all" }], "select": { "exist": ["created_after", "created_before", "page", "per_page", "repository_storage"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "active": true, "args": { "query": [{ "active": true, "kind": "query", "name": "created_after", "orig": "created_after", "reqd": false, "type": "`$ANY`", "index$": 0 }, { "active": true, "kind": "query", "name": "created_before", "orig": "created_before", "reqd": false, "type": "`$ANY`", "index$": 1 }, { "active": true, "example": 1, "kind": "query", "name": "page", "orig": "page", "reqd": false, "type": "`$INTEGER`", "index$": 2 }, { "active": true, "example": 20, "kind": "query", "name": "per_page", "orig": "per_page", "reqd": false, "type": "`$INTEGER`", "index$": 3 }] }, "contract": { "id": "GET /api/v4/snippets", "json": "{\"operationId\":\"getApiV4Snippets\",\"parameters\":[{\"description\":\"Return snippets created after the specified time\",\"format\":\"date-time\",\"in\":\"query\",\"name\":\"created_after\",\"required\":false,\"type\":\"string\"},{\"description\":\"Return snippets created before the specified time\",\"format\":\"date-time\",\"in\":\"query\",\"name\":\"created_before\",\"required\":false,\"type\":\"string\"},{\"default\":1,\"description\":\"Current page number\",\"example\":1,\"format\":\"int32\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"type\":\"integer\"},{\"default\":20,\"description\":\"Number of items per page\",\"example\":20,\"format\":\"int32\",\"in\":\"query\",\"name\":\"per_page\",\"required\":false,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get a snippets list for an authenticated user\",\"schema\":{\"items\":{\"description\":\"API_Entities_Snippet model\",\"properties\":{\"author\":{\"description\":\"API_Entities_UserBasic model\",\"properties\":{\"avatar_path\":{\"example\":\"/user/avatar/28/The-Big-Lebowski-400-400.png\",\"type\":\"string\"},\"avatar_url\":{\"example\":\"https://gravatar.com/avatar/1\",\"type\":\"string\"},\"custom_attributes\":{\"items\":{\"description\":\"API_Entities_CustomAttribute model\",\"properties\":{\"key\":{\"example\":\"foo\",\"type\":\"string\"},\"value\":{\"example\":\"bar\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"locked\":{\"type\":\"boolean\"},\"name\":{\"example\":\"Administrator\",\"type\":\"string\"},\"public_email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"state\":{\"example\":\"active\",\"type\":\"string\"},\"username\":{\"example\":\"admin\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/root\",\"type\":\"string\"}},\"type\":\"object\"},\"created_at\":{\"example\":\"2012-06-28T10:52:04Z\",\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"example\":\"Ruby test snippet\",\"type\":\"string\"},\"file_name\":{\"example\":\"add.rb\",\"type\":\"string\"},\"files\":{\"example\":\"e0d123e5f316bef78bfdf5a008837577\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"http_url_to_repo\":{\"example\":\"https://gitlab.example.com/snippets/65.git\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"imported\":{\"example\":false,\"type\":\"boolean\"},\"imported_from\":{\"example\":\"none\",\"type\":\"string\"},\"project_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"raw_url\":{\"example\":\"http://example.com/example/example/snippets/1/raw\",\"type\":\"string\"},\"repository_storage\":{\"type\":\"string\"},\"ssh_url_to_repo\":{\"example\":\"ssh://user@gitlab.example.com/snippets/65.git\",\"type\":\"string\"},\"title\":{\"example\":\"test\",\"type\":\"string\"},\"updated_at\":{\"example\":\"2012-06-28T10:52:04Z\",\"format\":\"date-time\",\"type\":\"string\"},\"visibility\":{\"example\":\"public\",\"type\":\"string\"},\"web_url\":{\"example\":\"http://example.com/example/example/snippets/1\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/v4/snippets", "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "snippets" }], "select": { "exist": ["created_after", "created_before", "page", "per_page"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "api_entities_snippet", "name__orig": "api_entities_snippet", "Name": "ApiEntitiesSnippet", "name_": "api_entities_snippet", "name-": "api-entities-snippet", "NAME": "API_ENTITIES_SNIPPET", "index$": 155 }, { "active": true, "entity": "api_entities_snippet", "key$": "BasicApiEntitiesSnippetFlow", "kind": "basic", "name": "BasicApiEntitiesSnippetFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "api_entities_snippet_ref01" } }], "index$": 0 }] }, 'ApiEntitiesSnippet');
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