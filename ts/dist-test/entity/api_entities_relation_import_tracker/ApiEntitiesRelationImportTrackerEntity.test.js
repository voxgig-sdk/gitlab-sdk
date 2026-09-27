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
(0, node_test_1.describe)('ApiEntitiesRelationImportTrackerEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.ApiEntitiesRelationImportTracker();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'api_entities_relation_import_tracker.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": {}, "name": "api_entities_relation_import_tracker", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /api/v4/projects/import-relation", "source": "swagger2", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "file", "or": "file", "r": true, "t": "`$ANY`", "index$": 0 }, { "a": true, "k": "query", "n": "file_etag", "or": "file_etag", "r": false, "t": "`$ANY`", "index$": 1 }, { "a": true, "k": "query", "n": "file_md5", "or": "file_md5", "r": false, "t": "`$ANY`", "index$": 2 }, { "a": true, "k": "query", "n": "file_name", "or": "file_name", "r": false, "t": "`$ANY`", "index$": 3 }, { "a": true, "k": "query", "n": "file_path", "or": "file_path", "r": false, "t": "`$ANY`", "index$": 4 }, { "a": true, "k": "query", "n": "file_remote_id", "or": "file_remote_id", "r": false, "t": "`$STRING`", "index$": 5 }, { "a": true, "k": "query", "n": "file_remote_url", "or": "file_remote_url", "r": false, "t": "`$ANY`", "index$": 6 }, { "a": true, "k": "query", "n": "file_sha1", "or": "file_sha1", "r": false, "t": "`$ANY`", "index$": 7 }, { "a": true, "k": "query", "n": "file_sha256", "or": "file_sha256", "r": false, "t": "`$ANY`", "index$": 8 }, { "a": true, "k": "query", "n": "file_size", "or": "file_size", "r": false, "t": "`$ANY`", "index$": 9 }, { "a": true, "k": "query", "n": "file_type", "or": "file_type", "r": false, "t": "`$ANY`", "index$": 10 }, { "a": true, "k": "query", "n": "path", "or": "path", "r": true, "t": "`$STRING`", "index$": 11 }, { "a": true, "k": "query", "n": "relation", "or": "relation", "r": true, "t": "`$ANY`", "index$": 12 }] }, "k": "http", "m": "POST", "o": "/api/v4/projects/import-relation", "q": { "exist": ["file", "file_etag", "file_md5", "file_name", "file_path", "file_remote_id", "file_remote_url", "file_sha1", "file_sha256", "file_size", "file_type", "path", "relation"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "lit": "import-relation" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "api_entities_relation_import_tracker", "name__orig": "api_entities_relation_import_tracker", "Name": "ApiEntitiesRelationImportTracker", "name_": "api_entities_relation_import_tracker", "name-": "api-entities-relation-import-tracker", "NAME": "API_ENTITIES_RELATION_IMPORT_TRACKER", "index$": 148 }, { "active": true, "entity": "api_entities_relation_import_tracker", "key$": "BasicApiEntitiesRelationImportTrackerFlow", "kind": "basic", "name": "BasicApiEntitiesRelationImportTrackerFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "api_entities_relation_import_tracker_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'ApiEntitiesRelationImportTracker', { "POST /api/v4/projects/import-relation": { "protocol": "http", "parameters": [{ "in": "formData", "name": "path", "description": "The project path and name", "type": "string", "required": true, "index$": 0 }, { "in": "formData", "name": "file", "description": "The project export file from which to extract the relation.", "type": "file", "required": true, "index$": 1 }, { "in": "formData", "name": "relation", "description": "The relation to import. Must be one of issues, merge_requests, ci_pipelines, or milestones.", "type": "string", "required": true, "index$": 2 }, { "in": "formData", "name": "file.path", "description": "Path to locally stored body (generated by Workhorse)", "type": "string", "required": false, "index$": 3 }, { "in": "formData", "name": "file.name", "description": "Real filename as sent in Content-Disposition (generated by Workhorse)", "type": "string", "required": false, "index$": 4 }, { "in": "formData", "name": "file.type", "description": "Real content type as send in Content-Type (generated by Workhorse)", "type": "string", "required": false, "index$": 5 }, { "in": "formData", "name": "file.size", "description": "Real size of file (generated by Workhorse)", "type": "integer", "format": "int32", "required": false, "index$": 6 }, { "in": "formData", "name": "file.md5", "description": "MD5 checksum of the file (generated by Workhorse)", "type": "string", "required": false, "index$": 7 }, { "in": "formData", "name": "file.sha1", "description": "SHA1 checksum of the file (generated by Workhorse)", "type": "string", "required": false, "index$": 8 }, { "in": "formData", "name": "file.sha256", "description": "SHA256 checksum of the file (generated by Workhorse)", "type": "string", "required": false, "index$": 9 }, { "in": "formData", "name": "file.etag", "description": "Etag of the file (generated by Workhorse)", "type": "string", "required": false, "index$": 10 }, { "in": "formData", "name": "file.remote_id", "description": "Remote_id of the file (generated by Workhorse)", "type": "string", "required": false, "index$": 11 }, { "in": "formData", "name": "file.remote_url", "description": "Remote_url of the file (generated by Workhorse)", "type": "string", "required": false, "index$": 12 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const api_entities_relation_import_tracker_ref01_ent = client.ApiEntitiesRelationImportTracker();
        let api_entities_relation_import_tracker_ref01_data = setup.data.new.api_entities_relation_import_tracker['api_entities_relation_import_tracker_ref01'];
        api_entities_relation_import_tracker_ref01_data = (await api_entities_relation_import_tracker_ref01_ent.create(api_entities_relation_import_tracker_ref01_data)).data();
        (0, node_assert_1.default)(null != api_entities_relation_import_tracker_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/api_entities_relation_import_tracker/ApiEntitiesRelationImportTrackerTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['api_entities_relation_import_tracker01', 'api_entities_relation_import_tracker02', 'api_entities_relation_import_tracker03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_API_ENTITIES_RELATION_IMPORT_TRACKER_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_API_ENTITIES_RELATION_IMPORT_TRACKER_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_API_ENTITIES_RELATION_IMPORT_TRACKER_ENTID'];
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
//# sourceMappingURL=ApiEntitiesRelationImportTrackerEntity.test.js.map