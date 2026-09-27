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
(0, node_test_1.describe)('ApiEntitiesMergeRequestDiffFullEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.ApiEntitiesMergeRequestDiffFull();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'api_entities_merge_request_diff_full.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "base_commit_sha": { "a": true, "h": "Base Commit Sha", "n": "base_commit_sha", "r": false, "t": "`$STRING`", "key$": "base_commit_sha", "index$": 0 }, "commits": { "a": true, "h": "Commits", "n": "commits", "r": false, "sh": "API_Entities_Commit model", "t": "`$OBJECT`", "key$": "commits", "index$": 1 }, "created_at": { "a": true, "h": "Created At", "n": "created_at", "r": false, "t": "`$STRING`", "key$": "created_at", "index$": 2 }, "diffs": { "a": true, "h": "Diffs", "n": "diffs", "r": false, "sh": "API_Entities_Diff model", "t": "`$OBJECT`", "key$": "diffs", "index$": 3 }, "head_commit_sha": { "a": true, "h": "Head Commit Sha", "n": "head_commit_sha", "r": false, "t": "`$STRING`", "key$": "head_commit_sha", "index$": 4 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 5 }, "merge_request_id": { "a": true, "h": "Merge Request Id", "n": "merge_request_id", "r": false, "t": "`$STRING`", "key$": "merge_request_id", "index$": 6 }, "patch_id_sha": { "a": true, "h": "Patch Id Sha", "n": "patch_id_sha", "r": false, "t": "`$STRING`", "key$": "patch_id_sha", "index$": 7 }, "real_size": { "a": true, "h": "Real Size", "n": "real_size", "r": false, "t": "`$STRING`", "key$": "real_size", "index$": 8 }, "start_commit_sha": { "a": true, "h": "Start Commit Sha", "n": "start_commit_sha", "r": false, "t": "`$STRING`", "key$": "start_commit_sha", "index$": 9 }, "state": { "a": true, "h": "State", "n": "state", "r": false, "t": "`$STRING`", "key$": "state", "index$": 10 } }, "id": { "field": "id", "name": "id" }, "name": "api_entities_merge_request_diff_full", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/v4/projects/{id}/merge_requests/{merge_request_iid}/versions/{version_id}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "merge_request_id", "or": "merge_request_iid", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "version_id", "or": "version_id", "r": true, "t": "`$STRING`", "index$": 2 }], "query": [{ "a": true, "k": "query", "n": "unidiff", "or": "unidiff", "r": false, "t": "`$ANY`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/v4/projects/{id}/merge_requests/{merge_request_iid}/versions/{version_id}", "q": { "exist": ["merge_request_id", "project_id", "unidiff", "version_id"] }, "r": { "param": { "id": "project_id", "merge_request_iid": "merge_request_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "merge_requests" }, { "var": "merge_request_id" }, { "lit": "versions" }, { "var": "version_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [["$.main.kit.entity.project", "$.main.kit.entity.merge_request"]] }, "key$": "api_entities_merge_request_diff_full", "name__orig": "api_entities_merge_request_diff_full", "Name": "ApiEntitiesMergeRequestDiffFull", "name_": "api_entities_merge_request_diff_full", "name-": "api-entities-merge-request-diff-full", "NAME": "API_ENTITIES_MERGE_REQUEST_DIFF_FULL", "index$": 97 }, { "active": true, "entity": "api_entities_merge_request_diff_full", "key$": "BasicApiEntitiesMergeRequestDiffFullFlow", "kind": "basic", "name": "BasicApiEntitiesMergeRequestDiffFullFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "api_entities_merge_request_diff_full_ref01", "srcdatavar": "api_entities_merge_request_diff_full_ref01_data", "suffix": "_dt0" }, "m": { "id": "api_entities_merge_request_diff_full01", "merge_request_id": "merge_request01", "project_id": "project01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-api_entities_merge_request_diff_full_ref01" } }], "index$": 0 }] }, 'ApiEntitiesMergeRequestDiffFull', { "GET /api/v4/projects/{id}/merge_requests/{merge_request_iid}/versions/{version_id}": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project", "type": "string", "required": true, "index$": 0 }, { "in": "path", "name": "merge_request_iid", "description": "The internal ID of the merge request", "type": "integer", "format": "int32", "required": true, "index$": 1 }, { "in": "path", "name": "version_id", "description": "The ID of the merge request diff version", "type": "integer", "format": "int32", "required": true, "index$": 2 }, { "in": "query", "name": "unidiff", "description": "A diff in a Unified diff format", "type": "boolean", "default": false, "required": false, "index$": 3 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let api_entities_merge_request_diff_full_ref01_data = Object.values(setup.data.existing.api_entities_merge_request_diff_full)[0];
        // LOAD
        const api_entities_merge_request_diff_full_ref01_ent = client.ApiEntitiesMergeRequestDiffFull();
        const api_entities_merge_request_diff_full_ref01_match_dt0 = {};
        api_entities_merge_request_diff_full_ref01_match_dt0.id = api_entities_merge_request_diff_full_ref01_data.id;
        const api_entities_merge_request_diff_full_ref01_data_dt0 = (await api_entities_merge_request_diff_full_ref01_ent.load(api_entities_merge_request_diff_full_ref01_match_dt0)).data();
        (0, node_assert_1.default)(api_entities_merge_request_diff_full_ref01_data_dt0.id === api_entities_merge_request_diff_full_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/api_entities_merge_request_diff_full/ApiEntitiesMergeRequestDiffFullTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['api_entities_merge_request_diff_full01', 'api_entities_merge_request_diff_full02', 'api_entities_merge_request_diff_full03', 'project01', 'project02', 'project03', 'merge_request01', 'merge_request02', 'merge_request03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_API_ENTITIES_MERGE_REQUEST_DIFF_FULL_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_API_ENTITIES_MERGE_REQUEST_DIFF_FULL_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_API_ENTITIES_MERGE_REQUEST_DIFF_FULL_ENTID'];
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
//# sourceMappingURL=ApiEntitiesMergeRequestDiffFullEntity.test.js.map