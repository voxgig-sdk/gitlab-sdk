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
(0, node_test_1.describe)('ApiEntitiesPackageEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.ApiEntitiesPackage();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'api_entities_package.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "conan_package_name": { "a": true, "h": "Conan Package Name", "n": "conan_package_name", "r": false, "t": "`$STRING`", "key$": "conan_package_name", "index$": 0 }, "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": false, "t": "`$STRING`", "key$": "created_at", "index$": 1 }, "id": { "a": true, "fo": "int32", "h": "Id", "n": "id", "r": false, "t": "`$INTEGER`", "key$": "id", "index$": 2 }, "last_downloaded_at": { "a": true, "fo": "date-time", "h": "Last Downloaded At", "n": "last_downloaded_at", "r": false, "t": "`$STRING`", "key$": "last_downloaded_at", "index$": 3 }, "links": { "a": true, "h": "Links", "n": "links", "r": false, "t": "`$OBJECT`", "key$": "links", "index$": 4 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "t": "`$STRING`", "key$": "name", "index$": 5 }, "package_type": { "a": true, "h": "Package Type", "n": "package_type", "r": false, "t": "`$STRING`", "key$": "package_type", "index$": 6 }, "pipeline": { "a": true, "h": "Pipeline", "n": "pipeline", "r": false, "sh": "API_Entities_Package_Pipeline model", "t": "`$OBJECT`", "key$": "pipeline", "index$": 7 }, "pipelines": { "a": true, "h": "Pipelines", "n": "pipelines", "r": false, "sh": "API_Entities_Package_Pipeline model", "t": "`$OBJECT`", "key$": "pipelines", "index$": 8 }, "project_id": { "a": true, "fo": "int32", "h": "Project Id", "n": "project_id", "r": false, "t": "`$INTEGER`", "key$": "project_id", "index$": 9 }, "project_path": { "a": true, "h": "Project Path", "n": "project_path", "r": false, "t": "`$STRING`", "key$": "project_path", "index$": 10 }, "status": { "a": true, "h": "Status", "n": "status", "r": false, "t": "`$STRING`", "key$": "status", "index$": 11 }, "tags": { "a": true, "h": "Tags", "n": "tags", "r": false, "t": "`$STRING`", "key$": "tags", "index$": 12 }, "version": { "a": true, "h": "Version", "n": "version", "r": false, "t": "`$STRING`", "key$": "version", "index$": 13 }, "versions": { "a": true, "h": "Versions", "n": "versions", "r": false, "t": "`$OBJECT`", "key$": "versions", "index$": 14 } }, "id": { "field": "id", "name": "id" }, "name": "api_entities_package", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /api/v4/groups/{id}/packages", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "group_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "exclude_subgroup", "or": "exclude_subgroup", "r": false, "t": "`$ANY`", "index$": 0 }, { "a": true, "k": "query", "n": "include_versionless", "or": "include_versionless", "r": false, "t": "`$ANY`", "index$": 1 }, { "a": true, "k": "query", "n": "order_by", "or": "order_by", "r": false, "t": "`$ANY`", "index$": 2 }, { "a": true, "k": "query", "n": "package_name", "or": "package_name", "r": false, "t": "`$ANY`", "index$": 3 }, { "a": true, "k": "query", "n": "package_type", "or": "package_type", "r": false, "t": "`$ANY`", "index$": 4 }, { "a": true, "k": "query", "n": "package_version", "or": "package_version", "r": false, "t": "`$ANY`", "index$": 5 }, { "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 6 }, { "a": true, "ex": 20, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$INTEGER`", "index$": 7 }, { "a": true, "k": "query", "n": "sort", "or": "sort", "r": false, "t": "`$ANY`", "index$": 8 }, { "a": true, "k": "query", "n": "status", "or": "status", "r": false, "t": "`$ANY`", "index$": 9 }] }, "k": "http", "m": "GET", "o": "/api/v4/groups/{id}/packages", "q": { "exist": ["exclude_subgroup", "group_id", "include_versionless", "order_by", "package_name", "package_type", "package_version", "page", "per_page", "sort", "status"] }, "r": { "param": { "id": "group_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "groups" }, { "var": "group_id" }, { "lit": "packages" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /api/v4/projects/{id}/packages", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "include_versionless", "or": "include_versionless", "r": false, "t": "`$ANY`", "index$": 0 }, { "a": true, "k": "query", "n": "order_by", "or": "order_by", "r": false, "t": "`$ANY`", "index$": 1 }, { "a": true, "k": "query", "n": "package_name", "or": "package_name", "r": false, "t": "`$ANY`", "index$": 2 }, { "a": true, "k": "query", "n": "package_type", "or": "package_type", "r": false, "t": "`$ANY`", "index$": 3 }, { "a": true, "k": "query", "n": "package_version", "or": "package_version", "r": false, "t": "`$ANY`", "index$": 4 }, { "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 5 }, { "a": true, "ex": 20, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$INTEGER`", "index$": 6 }, { "a": true, "k": "query", "n": "sort", "or": "sort", "r": false, "t": "`$ANY`", "index$": 7 }, { "a": true, "k": "query", "n": "status", "or": "status", "r": false, "t": "`$ANY`", "index$": 8 }] }, "k": "http", "m": "GET", "o": "/api/v4/projects/{id}/packages", "q": { "exist": ["include_versionless", "order_by", "package_name", "package_type", "package_version", "page", "per_page", "project_id", "sort", "status"] }, "r": { "param": { "id": "project_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "packages" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/v4/projects/{id}/packages/{package_id}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "package_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/api/v4/projects/{id}/packages/{package_id}", "q": { "exist": ["id", "project_id"] }, "r": { "param": { "id": "project_id", "package_id": "id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "packages" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [["$.main.kit.entity.group"], ["$.main.kit.entity.project"]] }, "key$": "api_entities_package", "name__orig": "api_entities_package", "Name": "ApiEntitiesPackage", "name_": "api_entities_package", "name-": "api-entities-package", "NAME": "API_ENTITIES_PACKAGE", "index$": 110 }, { "active": true, "entity": "api_entities_package", "key$": "BasicApiEntitiesPackageFlow", "kind": "basic", "name": "BasicApiEntitiesPackageFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "project_id": "project01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "api_entities_package_ref01" } }], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "api_entities_package_ref01", "srcdatavar": "api_entities_package_ref01_data", "suffix": "_dt0" }, "m": { "id": "api_entities_package01", "project_id": "project01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-api_entities_package_ref01" } }], "index$": 1 }] }, 'ApiEntitiesPackage', { "GET /api/v4/groups/{id}/packages": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "ID or URL-encoded path of the group", "type": "string", "required": true, "index$": 0 }, { "in": "query", "name": "exclude_subgroups", "description": "Determines if subgroups should be excluded", "type": "boolean", "default": false, "required": false, "index$": 1 }, { "in": "query", "name": "page", "description": "Current page number", "type": "integer", "format": "int32", "default": 1, "required": false, "example": 1, "index$": 2 }, { "in": "query", "name": "per_page", "description": "Number of items per page", "type": "integer", "format": "int32", "default": 20, "required": false, "example": 20, "index$": 3 }, { "in": "query", "name": "order_by", "description": "Return packages ordered by `created_at`, `name`, `version` or `type` fields.", "type": "string", "default": "created_at", "enum": ["created_at", "name", "version", "type", "project_path"], "required": false, "index$": 4 }, { "in": "query", "name": "sort", "description": "Return packages sorted in `asc` or `desc` order.", "type": "string", "default": "asc", "enum": ["asc", "desc"], "required": false, "index$": 5 }, { "in": "query", "name": "package_type", "description": "Return packages of a certain type", "type": "string", "enum": ["maven", "npm", "conan", "nuget", "pypi", "composer", "generic", "golang", "debian", "rubygems", "helm", "terraform_module", "rpm", "ml_model"], "required": false, "index$": 6 }, { "in": "query", "name": "package_name", "description": "Return packages with this name", "type": "string", "required": false, "index$": 7 }, { "in": "query", "name": "package_version", "description": "Return packages with this version", "type": "string", "required": false, "index$": 8 }, { "in": "query", "name": "include_versionless", "description": "Returns packages without a version", "type": "boolean", "required": false, "index$": 9 }, { "in": "query", "name": "status", "description": "Return packages with specified status", "type": "string", "enum": ["default", "hidden", "processing", "error", "pending_destruction", "deprecated"], "required": false, "index$": 10 }] }, "GET /api/v4/projects/{id}/packages": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project", "type": "string", "required": true, "index$": 0 }, { "in": "query", "name": "page", "description": "Current page number", "type": "integer", "format": "int32", "default": 1, "required": false, "example": 1, "index$": 1 }, { "in": "query", "name": "per_page", "description": "Number of items per page", "type": "integer", "format": "int32", "default": 20, "required": false, "example": 20, "index$": 2 }, { "in": "query", "name": "order_by", "description": "Return packages ordered by `created_at`, `name`, `version` or `type` fields.", "type": "string", "default": "created_at", "enum": ["created_at", "name", "version", "type"], "required": false, "index$": 3 }, { "in": "query", "name": "sort", "description": "Return packages sorted in `asc` or `desc` order.", "type": "string", "default": "asc", "enum": ["asc", "desc"], "required": false, "index$": 4 }, { "in": "query", "name": "package_type", "description": "Return packages of a certain type", "type": "string", "enum": ["maven", "npm", "conan", "nuget", "pypi", "composer", "generic", "golang", "debian", "rubygems", "helm", "terraform_module", "rpm", "ml_model"], "required": false, "index$": 5 }, { "in": "query", "name": "package_name", "description": "Return packages with this name", "type": "string", "required": false, "index$": 6 }, { "in": "query", "name": "package_version", "description": "Return packages with this version", "type": "string", "required": false, "index$": 7 }, { "in": "query", "name": "include_versionless", "description": "Returns packages without a version", "type": "boolean", "required": false, "index$": 8 }, { "in": "query", "name": "status", "description": "Return packages with specified status", "type": "string", "enum": ["default", "hidden", "processing", "error", "pending_destruction", "deprecated"], "required": false, "index$": 9 }] }, "GET /api/v4/projects/{id}/packages/{package_id}": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project", "type": "string", "required": true, "index$": 0 }, { "in": "path", "name": "package_id", "description": "The ID of a package", "type": "integer", "format": "int32", "required": true, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let api_entities_package_ref01_data = Object.values(setup.data.existing.api_entities_package)[0];
        // LIST
        const api_entities_package_ref01_ent = client.ApiEntitiesPackage();
        const api_entities_package_ref01_match = {};
        api_entities_package_ref01_match['project_id'] = setup.idmap['project01'];
        const api_entities_package_ref01_list = (await api_entities_package_ref01_ent.list(api_entities_package_ref01_match)).map((e) => e.data());
        // LOAD
        const api_entities_package_ref01_match_dt0 = {};
        api_entities_package_ref01_match_dt0.id = api_entities_package_ref01_data.id;
        const api_entities_package_ref01_data_dt0 = (await api_entities_package_ref01_ent.load(api_entities_package_ref01_match_dt0)).data();
        (0, node_assert_1.default)(api_entities_package_ref01_data_dt0.id === api_entities_package_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/api_entities_package/ApiEntitiesPackageTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['api_entities_package01', 'api_entities_package02', 'api_entities_package03', 'group01', 'group02', 'group03', 'project01', 'project02', 'project03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_API_ENTITIES_PACKAGE_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_API_ENTITIES_PACKAGE_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_API_ENTITIES_PACKAGE_ENTID'];
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
//# sourceMappingURL=ApiEntitiesPackageEntity.test.js.map