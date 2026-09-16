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
(0, node_test_1.describe)('ApiEntitiesDiffEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.ApiEntitiesDiff();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'api_entities_diff.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "a_mode", "req": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "b_mode", "req": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "collapsed", "req": false, "type": "`$BOOLEAN`", "index$": 2 }, { "active": true, "name": "deleted_file", "req": false, "type": "`$BOOLEAN`", "index$": 3 }, { "active": true, "name": "diff", "req": false, "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "generated_file", "req": false, "type": "`$BOOLEAN`", "index$": 5 }, { "active": true, "name": "new_file", "req": false, "type": "`$BOOLEAN`", "index$": 6 }, { "active": true, "name": "new_path", "req": false, "type": "`$STRING`", "index$": 7 }, { "active": true, "name": "old_path", "req": false, "type": "`$STRING`", "index$": 8 }, { "active": true, "name": "renamed_file", "req": false, "type": "`$BOOLEAN`", "index$": 9 }, { "active": true, "name": "too_large", "req": false, "type": "`$BOOLEAN`", "index$": 10 }], "name": "api_entities_diff", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "project_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "param", "name": "sha", "orig": "sha", "reqd": true, "type": "`$ANY`", "index$": 1 }], "query": [{ "active": true, "example": 1, "kind": "query", "name": "page", "orig": "page", "reqd": false, "type": "`$INTEGER`", "index$": 0 }, { "active": true, "example": 20, "kind": "query", "name": "per_page", "orig": "per_page", "reqd": false, "type": "`$INTEGER`", "index$": 1 }, { "active": true, "kind": "query", "name": "unidiff", "orig": "unidiff", "reqd": false, "type": "`$ANY`", "index$": 2 }] }, "contract": { "id": "GET /api/v4/projects/{id}/repository/commits/{sha}/diff", "json": "{\"operationId\":\"getApiV4ProjectsIdRepositoryCommitsShaDiff\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"A commit sha, or the name of a branch or tag\",\"in\":\"path\",\"name\":\"sha\",\"required\":true,\"type\":\"string\"},{\"default\":1,\"description\":\"Current page number\",\"example\":1,\"format\":\"int32\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"type\":\"integer\"},{\"default\":20,\"description\":\"Number of items per page\",\"example\":20,\"format\":\"int32\",\"in\":\"query\",\"name\":\"per_page\",\"required\":false,\"type\":\"integer\"},{\"default\":false,\"description\":\"A diff in a Unified diff format\",\"in\":\"query\",\"name\":\"unidiff\",\"required\":false,\"type\":\"boolean\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get the diff for a specific commit of a project\",\"schema\":{\"items\":{\"description\":\"API_Entities_Diff model\",\"properties\":{\"a_mode\":{\"example\":\"100755\",\"type\":\"string\"},\"b_mode\":{\"example\":\"100644\",\"type\":\"string\"},\"collapsed\":{\"type\":\"boolean\"},\"deleted_file\":{\"type\":\"boolean\"},\"diff\":{\"example\":\"@@ -71,6 +71,8 @@\\\\n...\",\"type\":\"string\"},\"generated_file\":{\"type\":\"boolean\"},\"new_file\":{\"type\":\"boolean\"},\"new_path\":{\"example\":\"doc/update/5.4-to-6.0.md\",\"type\":\"string\"},\"old_path\":{\"example\":\"doc/update/5.4-to-6.0.md\",\"type\":\"string\"},\"renamed_file\":{\"type\":\"boolean\"},\"too_large\":{\"type\":\"boolean\"}},\"type\":\"object\"},\"type\":\"array\"}},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/v4/projects/{id}/repository/commits/{sha}/diff", "rename": { "param": { "id": "project_id" } }, "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "repository" }, { "lit": "commits" }, { "var": "sha" }, { "lit": "diff" }], "select": { "exist": ["page", "per_page", "project_id", "sha", "unidiff"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "merge_request_id", "orig": "merge_request_iid", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "param", "name": "project_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 1 }], "query": [{ "active": true, "example": 1, "kind": "query", "name": "page", "orig": "page", "reqd": false, "type": "`$INTEGER`", "index$": 0 }, { "active": true, "example": 20, "kind": "query", "name": "per_page", "orig": "per_page", "reqd": false, "type": "`$INTEGER`", "index$": 1 }, { "active": true, "kind": "query", "name": "unidiff", "orig": "unidiff", "reqd": false, "type": "`$ANY`", "index$": 2 }] }, "contract": { "id": "GET /api/v4/projects/{id}/merge_requests/{merge_request_iid}/diffs", "json": "{\"operationId\":\"getApiV4ProjectsIdMergeRequestsMergeRequestIidDiffs\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project.\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The internal ID of the merge request.\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"merge_request_iid\",\"required\":true,\"type\":\"integer\"},{\"default\":1,\"description\":\"Current page number\",\"example\":1,\"format\":\"int32\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"type\":\"integer\"},{\"default\":20,\"description\":\"Number of items per page\",\"example\":20,\"format\":\"int32\",\"in\":\"query\",\"name\":\"per_page\",\"required\":false,\"type\":\"integer\"},{\"default\":false,\"description\":\"A diff in a Unified diff format\",\"in\":\"query\",\"name\":\"unidiff\",\"required\":false,\"type\":\"boolean\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get the merge request diffs\",\"schema\":{\"description\":\"API_Entities_Diff model\",\"properties\":{\"a_mode\":{\"example\":\"100755\",\"type\":\"string\"},\"b_mode\":{\"example\":\"100644\",\"type\":\"string\"},\"collapsed\":{\"type\":\"boolean\"},\"deleted_file\":{\"type\":\"boolean\"},\"diff\":{\"example\":\"@@ -71,6 +71,8 @@\\\\n...\",\"type\":\"string\"},\"generated_file\":{\"type\":\"boolean\"},\"new_file\":{\"type\":\"boolean\"},\"new_path\":{\"example\":\"doc/update/5.4-to-6.0.md\",\"type\":\"string\"},\"old_path\":{\"example\":\"doc/update/5.4-to-6.0.md\",\"type\":\"string\"},\"renamed_file\":{\"type\":\"boolean\"},\"too_large\":{\"type\":\"boolean\"}},\"type\":\"object\"}},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/v4/projects/{id}/merge_requests/{merge_request_iid}/diffs", "rename": { "param": { "id": "project_id", "merge_request_iid": "merge_request_id" } }, "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "merge_requests" }, { "var": "merge_request_id" }, { "lit": "diffs" }], "select": { "exist": ["merge_request_id", "page", "per_page", "project_id", "unidiff"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [["project", "merge_request"], ["project", "commit"]] }, "key$": "api_entities_diff", "name__orig": "api_entities_diff", "Name": "ApiEntitiesDiff", "name_": "api_entities_diff", "name-": "api-entities-diff", "NAME": "API_ENTITIES_DIFF", "index$": 65 }, { "active": true, "entity": "api_entities_diff", "key$": "BasicApiEntitiesDiffFlow", "kind": "basic", "name": "BasicApiEntitiesDiffFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": { "project_id": "project01", "sha": "sha01" }, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "api_entities_diff_ref01" } }], "index$": 0 }, { "active": true, "data": {}, "input": { "ref": "api_entities_diff_ref01", "srcdatavar": "api_entities_diff_ref01_data", "suffix": "_dt0" }, "match": { "id": "api_entities_diff01", "project_id": "project01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-api_entities_diff_ref01" } }], "index$": 1 }] }, 'ApiEntitiesDiff');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let api_entities_diff_ref01_data = Object.values(setup.data.existing.api_entities_diff)[0];
        // LIST
        const api_entities_diff_ref01_ent = client.ApiEntitiesDiff();
        const api_entities_diff_ref01_match = {};
        api_entities_diff_ref01_match['project_id'] = setup.idmap['project01'];
        api_entities_diff_ref01_match['sha'] = setup.idmap['sha01'];
        const api_entities_diff_ref01_list = (await api_entities_diff_ref01_ent.list(api_entities_diff_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/api_entities_diff/ApiEntitiesDiffTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['api_entities_diff01', 'api_entities_diff02', 'api_entities_diff03', 'project01', 'project02', 'project03', 'merge_request01', 'merge_request02', 'merge_request03', 'project01', 'project02', 'project03', 'commit01', 'commit02', 'commit03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_API_ENTITIES_DIFF_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_API_ENTITIES_DIFF_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_API_ENTITIES_DIFF_ENTID'];
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
//# sourceMappingURL=ApiEntitiesDiffEntity.test.js.map