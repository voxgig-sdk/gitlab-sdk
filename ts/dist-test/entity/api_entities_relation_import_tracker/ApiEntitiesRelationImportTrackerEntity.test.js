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
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [], "name": "api_entities_relation_import_tracker", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": { "query": [{ "active": true, "kind": "query", "name": "file", "orig": "file", "reqd": true, "type": "`$ANY`", "index$": 0 }, { "active": true, "kind": "query", "name": "file_etag", "orig": "file_etag", "reqd": false, "type": "`$ANY`", "index$": 1 }, { "active": true, "kind": "query", "name": "file_md5", "orig": "file_md5", "reqd": false, "type": "`$ANY`", "index$": 2 }, { "active": true, "kind": "query", "name": "file_name", "orig": "file_name", "reqd": false, "type": "`$ANY`", "index$": 3 }, { "active": true, "kind": "query", "name": "file_path", "orig": "file_path", "reqd": false, "type": "`$ANY`", "index$": 4 }, { "active": true, "kind": "query", "name": "file_remote_id", "orig": "file_remote_id", "reqd": false, "type": "`$STRING`", "index$": 5 }, { "active": true, "kind": "query", "name": "file_remote_url", "orig": "file_remote_url", "reqd": false, "type": "`$ANY`", "index$": 6 }, { "active": true, "kind": "query", "name": "file_sha1", "orig": "file_sha1", "reqd": false, "type": "`$ANY`", "index$": 7 }, { "active": true, "kind": "query", "name": "file_sha256", "orig": "file_sha256", "reqd": false, "type": "`$ANY`", "index$": 8 }, { "active": true, "kind": "query", "name": "file_size", "orig": "file_size", "reqd": false, "type": "`$ANY`", "index$": 9 }, { "active": true, "kind": "query", "name": "file_type", "orig": "file_type", "reqd": false, "type": "`$ANY`", "index$": 10 }, { "active": true, "kind": "query", "name": "path", "orig": "path", "reqd": true, "type": "`$STRING`", "index$": 11 }, { "active": true, "kind": "query", "name": "relation", "orig": "relation", "reqd": true, "type": "`$ANY`", "index$": 12 }] }, "contract": { "id": "POST /api/v4/projects/import-relation", "json": "{\"consumes\":[\"multipart/form-data\"],\"operationId\":\"postApiV4ProjectsImportRelation\",\"parameters\":[{\"description\":\"The project path and name\",\"in\":\"formData\",\"name\":\"path\",\"required\":true,\"type\":\"string\"},{\"description\":\"The project export file from which to extract the relation.\",\"in\":\"formData\",\"name\":\"file\",\"required\":true,\"type\":\"file\"},{\"description\":\"The relation to import. Must be one of issues, merge_requests, ci_pipelines, or milestones.\",\"in\":\"formData\",\"name\":\"relation\",\"required\":true,\"type\":\"string\"},{\"description\":\"Path to locally stored body (generated by Workhorse)\",\"in\":\"formData\",\"name\":\"file.path\",\"required\":false,\"type\":\"string\"},{\"description\":\"Real filename as sent in Content-Disposition (generated by Workhorse)\",\"in\":\"formData\",\"name\":\"file.name\",\"required\":false,\"type\":\"string\"},{\"description\":\"Real content type as send in Content-Type (generated by Workhorse)\",\"in\":\"formData\",\"name\":\"file.type\",\"required\":false,\"type\":\"string\"},{\"description\":\"Real size of file (generated by Workhorse)\",\"format\":\"int32\",\"in\":\"formData\",\"name\":\"file.size\",\"required\":false,\"type\":\"integer\"},{\"description\":\"MD5 checksum of the file (generated by Workhorse)\",\"in\":\"formData\",\"name\":\"file.md5\",\"required\":false,\"type\":\"string\"},{\"description\":\"SHA1 checksum of the file (generated by Workhorse)\",\"in\":\"formData\",\"name\":\"file.sha1\",\"required\":false,\"type\":\"string\"},{\"description\":\"SHA256 checksum of the file (generated by Workhorse)\",\"in\":\"formData\",\"name\":\"file.sha256\",\"required\":false,\"type\":\"string\"},{\"description\":\"Etag of the file (generated by Workhorse)\",\"in\":\"formData\",\"name\":\"file.etag\",\"required\":false,\"type\":\"string\"},{\"description\":\"Remote_id of the file (generated by Workhorse)\",\"in\":\"formData\",\"name\":\"file.remote_id\",\"required\":false,\"type\":\"string\"},{\"description\":\"Remote_url of the file (generated by Workhorse)\",\"in\":\"formData\",\"name\":\"file.remote_url\",\"required\":false,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"Re-import a relation into a project\",\"schema\":{\"description\":\"API_Entities_RelationImportTracker model\",\"properties\":{\"created_at\":{\"example\":\"2022-01-31T15:10:45.080Z\",\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"project_path\":{\"example\":\"namespace1/project1\",\"type\":\"string\"},\"relation\":{\"example\":\"issues\",\"type\":\"string\"},\"status\":{\"example\":\"pending\",\"type\":\"string\"},\"updated_at\":{\"example\":\"2022-01-31T15:10:45.080Z\",\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Bad request\"},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not found\"},\"503\":{\"description\":\"Service unavailable\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "POST", "orig": "/api/v4/projects/import-relation", "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "lit": "import-relation" }], "select": { "exist": ["file", "file_etag", "file_md5", "file_name", "file_path", "file_remote_id", "file_remote_url", "file_sha1", "file_sha256", "file_size", "file_type", "path", "relation"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "api_entities_relation_import_tracker", "name__orig": "api_entities_relation_import_tracker", "Name": "ApiEntitiesRelationImportTracker", "name_": "api_entities_relation_import_tracker", "name-": "api-entities-relation-import-tracker", "NAME": "API_ENTITIES_RELATION_IMPORT_TRACKER", "index$": 148 }, { "active": true, "entity": "api_entities_relation_import_tracker", "key$": "BasicApiEntitiesRelationImportTrackerFlow", "kind": "basic", "name": "BasicApiEntitiesRelationImportTrackerFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "api_entities_relation_import_tracker_ref01" }, "match": {}, "op": "create", "spec": [], "valid": [], "index$": 0 }] }, 'ApiEntitiesRelationImportTracker');
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