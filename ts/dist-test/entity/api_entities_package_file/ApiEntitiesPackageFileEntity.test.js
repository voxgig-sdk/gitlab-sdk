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
(0, node_test_1.describe)('ApiEntitiesPackageFileEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.ApiEntitiesPackageFile();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'api_entities_package_file.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": false, "t": "`$STRING`", "key$": "created_at", "index$": 0 }, "file_md5": { "a": true, "h": "File Md5", "n": "file_md5", "r": false, "t": "`$STRING`", "key$": "file_md5", "index$": 1 }, "file_name": { "a": true, "h": "File Name", "n": "file_name", "r": false, "t": "`$STRING`", "key$": "file_name", "index$": 2 }, "file_sha1": { "a": true, "h": "File Sha1", "n": "file_sha1", "r": false, "t": "`$STRING`", "key$": "file_sha1", "index$": 3 }, "file_sha256": { "a": true, "h": "File Sha256", "n": "file_sha256", "r": false, "t": "`$STRING`", "key$": "file_sha256", "index$": 4 }, "id": { "a": true, "fo": "int32", "h": "Id", "n": "id", "r": false, "t": "`$INTEGER`", "key$": "id", "index$": 5 }, "package_id": { "a": true, "fo": "int32", "h": "Package Id", "n": "package_id", "r": false, "t": "`$INTEGER`", "key$": "package_id", "index$": 6 }, "pipelines": { "a": true, "h": "Pipelines", "n": "pipelines", "r": false, "sh": "API_Entities_Package_Pipeline model", "t": "`$OBJECT`", "key$": "pipelines", "index$": 7 }, "size": { "a": true, "fo": "int32", "h": "Size", "n": "size", "r": false, "t": "`$INTEGER`", "key$": "size", "index$": 8 } }, "id": { "field": "id", "name": "id" }, "name": "api_entities_package_file", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /api/v4/projects/{id}/packages/{package_id}/package_files", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "package_id", "or": "package_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "k": "query", "n": "order_by", "or": "order_by", "r": false, "t": "`$ANY`", "index$": 0 }, { "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 1 }, { "a": true, "ex": 20, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "k": "query", "n": "sort", "or": "sort", "r": false, "t": "`$ANY`", "index$": 3 }] }, "k": "http", "m": "GET", "o": "/api/v4/projects/{id}/packages/{package_id}/package_files", "q": { "exist": ["order_by", "package_id", "page", "per_page", "project_id", "sort"] }, "r": { "param": { "id": "project_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "packages" }, { "var": "package_id" }, { "lit": "package_files" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [["$.main.kit.entity.project"]] }, "key$": "api_entities_package_file", "name__orig": "api_entities_package_file", "Name": "ApiEntitiesPackageFile", "name_": "api_entities_package_file", "name-": "api-entities-package-file", "NAME": "API_ENTITIES_PACKAGE_FILE", "index$": 111 }, { "active": true, "entity": "api_entities_package_file", "key$": "BasicApiEntitiesPackageFileFlow", "kind": "basic", "name": "BasicApiEntitiesPackageFileFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "package_id": "package01", "project_id": "project01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "api_entities_package_file_ref01" } }], "index$": 0 }] }, 'ApiEntitiesPackageFile', { "GET /api/v4/projects/{id}/packages/{package_id}/package_files": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "ID or URL-encoded path of the project", "type": "string", "required": true, "index$": 0 }, { "in": "path", "name": "package_id", "description": "ID of a package", "type": "integer", "format": "int32", "required": true, "index$": 1 }, { "in": "query", "name": "page", "description": "Current page number", "type": "integer", "format": "int32", "default": 1, "required": false, "example": 1, "index$": 2 }, { "in": "query", "name": "per_page", "description": "Number of items per page", "type": "integer", "format": "int32", "default": 20, "required": false, "example": 20, "index$": 3 }, { "in": "query", "name": "order_by", "description": "Return package files ordered by `id`, `created_at` or `file_name`", "type": "string", "default": "id", "enum": ["id", "created_at", "file_name"], "required": false, "index$": 4 }, { "in": "query", "name": "sort", "description": "Return package files sorted in `asc` or `desc` order.", "type": "string", "default": "asc", "enum": ["asc", "desc"], "required": false, "index$": 5 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let api_entities_package_file_ref01_data = Object.values(setup.data.existing.api_entities_package_file)[0];
        // LIST
        const api_entities_package_file_ref01_ent = client.ApiEntitiesPackageFile();
        const api_entities_package_file_ref01_match = {};
        api_entities_package_file_ref01_match['package_id'] = setup.idmap['package01'];
        api_entities_package_file_ref01_match['project_id'] = setup.idmap['project01'];
        const api_entities_package_file_ref01_list = (await api_entities_package_file_ref01_ent.list(api_entities_package_file_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/api_entities_package_file/ApiEntitiesPackageFileTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['api_entities_package_file01', 'api_entities_package_file02', 'api_entities_package_file03', 'project01', 'project02', 'project03', 'package01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_API_ENTITIES_PACKAGE_FILE_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_API_ENTITIES_PACKAGE_FILE_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_API_ENTITIES_PACKAGE_FILE_ENTID'];
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
//# sourceMappingURL=ApiEntitiesPackageFileEntity.test.js.map