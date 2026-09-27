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
(0, node_test_1.describe)('ApiEntitiesBulkImportEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.ApiEntitiesBulkImport();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['create', 'list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'api_entities_bulk_import.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "bulk_import_id": { "a": true, "fo": "int32", "h": "Bulk Import Id", "n": "bulk_import_id", "r": false, "t": "`$INTEGER`", "key$": "bulk_import_id", "index$": 0 }, "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": false, "t": "`$STRING`", "key$": "created_at", "index$": 1 }, "destination_full_path": { "a": true, "h": "Destination Full Path", "n": "destination_full_path", "r": false, "t": "`$STRING`", "key$": "destination_full_path", "index$": 2 }, "destination_name": { "a": true, "h": "Destination Name", "n": "destination_name", "r": false, "t": "`$STRING`", "key$": "destination_name", "index$": 3 }, "destination_namespace": { "a": true, "h": "Destination Namespace", "n": "destination_namespace", "r": false, "t": "`$STRING`", "key$": "destination_namespace", "index$": 4 }, "destination_slug": { "a": true, "h": "Destination Slug", "n": "destination_slug", "r": false, "t": "`$STRING`", "key$": "destination_slug", "index$": 5 }, "entity_type": { "a": true, "h": "Entity Type", "n": "entity_type", "r": false, "t": "`$STRING`", "key$": "entity_type", "index$": 6 }, "failures": { "a": true, "h": "Failures", "n": "failures", "r": false, "t": "`$ARRAY`", "key$": "failures", "index$": 7 }, "has_failures": { "a": true, "h": "Has Failures", "n": "has_failures", "r": false, "t": "`$BOOLEAN`", "key$": "has_failures", "index$": 8 }, "id": { "a": true, "fo": "int32", "h": "Id", "n": "id", "r": false, "t": "`$INTEGER`", "key$": "id", "index$": 9 }, "migrate_memberships": { "a": true, "h": "Migrate Memberships", "n": "migrate_memberships", "r": false, "t": "`$BOOLEAN`", "key$": "migrate_memberships", "index$": 10 }, "migrate_projects": { "a": true, "h": "Migrate Projects", "n": "migrate_projects", "r": false, "t": "`$BOOLEAN`", "key$": "migrate_projects", "index$": 11 }, "namespace_id": { "a": true, "fo": "int32", "h": "Namespace Id", "n": "namespace_id", "r": false, "t": "`$INTEGER`", "key$": "namespace_id", "index$": 12 }, "parent_id": { "a": true, "fo": "int32", "h": "Parent Id", "n": "parent_id", "r": false, "t": "`$INTEGER`", "key$": "parent_id", "index$": 13 }, "project_id": { "a": true, "fo": "int32", "h": "Project Id", "n": "project_id", "r": false, "t": "`$INTEGER`", "key$": "project_id", "index$": 14 }, "source_full_path": { "a": true, "h": "Source Full Path", "n": "source_full_path", "r": false, "t": "`$STRING`", "key$": "source_full_path", "index$": 15 }, "source_type": { "a": true, "h": "Source Type", "n": "source_type", "r": false, "t": "`$STRING`", "key$": "source_type", "index$": 16 }, "source_url": { "a": true, "h": "Source Url", "n": "source_url", "r": false, "t": "`$STRING`", "key$": "source_url", "index$": 17 }, "stats": { "a": true, "h": "Stats", "n": "stats", "r": false, "t": "`$OBJECT`", "key$": "stats", "index$": 18 }, "status": { "a": true, "h": "Status", "n": "status", "r": false, "t": "`$STRING`", "key$": "status", "index$": 19 }, "updated_at": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updated_at", "r": false, "t": "`$STRING`", "key$": "updated_at", "index$": 20 } }, "id": { "field": "id", "name": "id" }, "name": "api_entities_bulk_import", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /api/v4/bulk_imports", "source": "swagger2", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "configuration_access_token", "or": "configuration_access_token", "r": true, "t": "`$ANY`", "index$": 0 }, { "a": true, "k": "query", "n": "configuration_url", "or": "configuration_url", "r": true, "t": "`$ANY`", "index$": 1 }, { "a": true, "ex": "'destination_slug' not 'destination/slug'", "k": "query", "n": "entities_destination_name", "or": "entities_destination_name", "r": false, "t": "`$ANY`", "index$": 2 }, { "a": true, "ex": "'destination_namespace' or 'destination/namespace'", "k": "query", "n": "entities_destination_namespace", "or": "entities_destination_namespace", "r": true, "t": "`$ANY`", "index$": 3 }, { "a": true, "ex": "'destination_slug' not 'destination/slug'", "k": "query", "n": "entities_destination_slug", "or": "entities_destination_slug", "r": false, "t": "`$ANY`", "index$": 4 }, { "a": true, "k": "query", "n": "entities_migrate_membership", "or": "entities_migrate_membership", "r": false, "t": "`$ANY`", "index$": 5 }, { "a": true, "k": "query", "n": "entities_migrate_project", "or": "entities_migrate_project", "r": false, "t": "`$ANY`", "index$": 6 }, { "a": true, "ex": "'source/full/path' not 'https://example.com/source/full/path'", "k": "query", "n": "entities_source_full_path", "or": "entities_source_full_path", "r": true, "t": "`$ANY`", "index$": 7 }, { "a": true, "k": "query", "n": "entities_source_type", "or": "entities_source_type", "r": true, "t": "`$ANY`", "index$": 8 }] }, "k": "http", "m": "POST", "o": "/api/v4/bulk_imports", "q": { "exist": ["configuration_access_token", "configuration_url", "entities_destination_name", "entities_destination_namespace", "entities_destination_slug", "entities_migrate_membership", "entities_migrate_project", "entities_source_full_path", "entities_source_type"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "bulk_imports" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /api/v4/bulk_imports/{import_id}/cancel", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "bulk_import_id", "or": "import_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/v4/bulk_imports/{import_id}/cancel", "q": { "exist": ["bulk_import_id"] }, "r": { "param": { "import_id": "bulk_import_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "bulk_imports" }, { "var": "bulk_import_id" }, { "lit": "cancel" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /api/v4/bulk_imports/{import_id}/entities", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "bulk_import_id", "or": "import_id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "ex": 20, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$INTEGER`", "index$": 1 }, { "a": true, "k": "query", "n": "status", "or": "status", "r": false, "t": "`$ANY`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/api/v4/bulk_imports/{import_id}/entities", "q": { "exist": ["bulk_import_id", "page", "per_page", "status"] }, "r": { "param": { "import_id": "bulk_import_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "bulk_imports" }, { "var": "bulk_import_id" }, { "lit": "entities" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /api/v4/bulk_imports", "source": "swagger2", "version": 2 }, "g": { "query": [{ "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "ex": 20, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$INTEGER`", "index$": 1 }, { "a": true, "k": "query", "n": "sort", "or": "sort", "r": false, "t": "`$ANY`", "index$": 2 }, { "a": true, "k": "query", "n": "status", "or": "status", "r": false, "t": "`$ANY`", "index$": 3 }] }, "k": "http", "m": "GET", "o": "/api/v4/bulk_imports", "q": { "exist": ["page", "per_page", "sort", "status"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "bulk_imports" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /api/v4/bulk_imports/entities", "source": "swagger2", "version": 2 }, "g": { "query": [{ "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "ex": 20, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$INTEGER`", "index$": 1 }, { "a": true, "k": "query", "n": "sort", "or": "sort", "r": false, "t": "`$ANY`", "index$": 2 }, { "a": true, "k": "query", "n": "status", "or": "status", "r": false, "t": "`$ANY`", "index$": 3 }] }, "k": "http", "m": "GET", "o": "/api/v4/bulk_imports/entities", "q": { "exist": ["page", "per_page", "sort", "status"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "bulk_imports" }, { "lit": "entities" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/v4/bulk_imports/{import_id}/entities/{entity_id}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "bulk_import_id", "or": "import_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "entity_id", "or": "entity_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/api/v4/bulk_imports/{import_id}/entities/{entity_id}", "q": { "exist": ["bulk_import_id", "entity_id"] }, "r": { "param": { "import_id": "bulk_import_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "bulk_imports" }, { "var": "bulk_import_id" }, { "lit": "entities" }, { "var": "entity_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /api/v4/bulk_imports/{import_id}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "import_id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/v4/bulk_imports/{import_id}", "q": { "exist": ["id"] }, "r": { "param": { "import_id": "id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "bulk_imports" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "api_entities_bulk_import", "name__orig": "api_entities_bulk_import", "Name": "ApiEntitiesBulkImport", "name_": "api_entities_bulk_import", "name-": "api-entities-bulk-import", "NAME": "API_ENTITIES_BULK_IMPORT", "index$": 17 }, { "active": true, "entity": "api_entities_bulk_import", "key$": "BasicApiEntitiesBulkImportFlow", "kind": "basic", "name": "BasicApiEntitiesBulkImportFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "api_entities_bulk_import_ref01" }, "m": { "bulk_import_id": "bulk_import01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "api_entities_bulk_import_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "api_entities_bulk_import_ref01", "srcdatavar": "api_entities_bulk_import_ref01_data", "suffix": "_dt0" }, "m": { "id": "api_entities_bulk_import01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-api_entities_bulk_import_ref01" } }], "index$": 2 }] }, 'ApiEntitiesBulkImport', { "POST /api/v4/bulk_imports": { "protocol": "http", "parameters": [{ "in": "formData", "name": "configuration[url]", "description": "Source GitLab instance URL", "type": "string", "required": true, "index$": 0 }, { "in": "formData", "name": "configuration[access_token]", "description": "Access token to the source GitLab instance", "type": "string", "required": true, "index$": 1 }, { "in": "formData", "name": "entities[source_type]", "description": "Source entity type", "type": "array", "required": true, "items": { "type": "string", "enum": ["group_entity", "project_entity"] }, "index$": 2 }, { "in": "formData", "name": "entities[source_full_path]", "description": "Relative path of the source entity to import", "type": "array", "required": true, "example": "'source/full/path' not 'https://example.com/source/full/path'", "items": { "type": "string" }, "index$": 3 }, { "in": "formData", "name": "entities[destination_namespace]", "description": "Destination namespace for the entity", "type": "array", "required": true, "example": "'destination_namespace' or 'destination/namespace'", "items": { "type": "string" }, "index$": 4 }, { "in": "formData", "name": "entities[destination_slug]", "description": "Destination slug for the entity", "type": "array", "required": false, "example": "'destination_slug' not 'destination/slug'", "items": { "type": "string" }, "index$": 5 }, { "in": "formData", "name": "entities[destination_name]", "description": "Deprecated: Use :destination_slug instead. Destination slug for the entity", "type": "array", "required": false, "example": "'destination_slug' not 'destination/slug'", "items": { "type": "string" }, "index$": 6 }, { "in": "formData", "name": "entities[migrate_projects]", "description": "Indicates group migration should include nested projects", "type": "array", "default": true, "required": false, "items": { "type": "boolean" }, "index$": 7 }, { "in": "formData", "name": "entities[migrate_memberships]", "description": "The option to migrate memberships or not", "type": "array", "default": true, "required": false, "items": { "type": "boolean" }, "index$": 8 }] }, "POST /api/v4/bulk_imports/{import_id}/cancel": { "protocol": "http", "parameters": [{ "in": "path", "name": "import_id", "description": "The ID of user's GitLab Migration", "type": "integer", "format": "int32", "required": true, "index$": 0 }] }, "GET /api/v4/bulk_imports/{import_id}/entities": { "protocol": "http", "parameters": [{ "in": "path", "name": "import_id", "description": "The ID of user's GitLab Migration", "type": "integer", "format": "int32", "required": true, "index$": 0 }, { "in": "query", "name": "status", "description": "Return import entities with specified status", "type": "string", "enum": ["created", "started", "finished", "timeout", "failed", "canceled"], "required": false, "index$": 1 }, { "in": "query", "name": "page", "description": "Current page number", "type": "integer", "format": "int32", "default": 1, "required": false, "example": 1, "index$": 2 }, { "in": "query", "name": "per_page", "description": "Number of items per page", "type": "integer", "format": "int32", "default": 20, "required": false, "example": 20, "index$": 3 }] }, "GET /api/v4/bulk_imports": { "protocol": "http", "parameters": [{ "in": "query", "name": "page", "description": "Current page number", "type": "integer", "format": "int32", "default": 1, "required": false, "example": 1, "index$": 0 }, { "in": "query", "name": "per_page", "description": "Number of items per page", "type": "integer", "format": "int32", "default": 20, "required": false, "example": 20, "index$": 1 }, { "in": "query", "name": "sort", "description": "Return GitLab Migrations sorted in created by `asc` or `desc` order.", "type": "string", "default": "desc", "enum": ["asc", "desc"], "required": false, "index$": 2 }, { "in": "query", "name": "status", "description": "Return GitLab Migrations with specified status", "type": "string", "enum": ["created", "started", "finished", "timeout", "failed", "canceled"], "required": false, "index$": 3 }] }, "GET /api/v4/bulk_imports/entities": { "protocol": "http", "parameters": [{ "in": "query", "name": "page", "description": "Current page number", "type": "integer", "format": "int32", "default": 1, "required": false, "example": 1, "index$": 0 }, { "in": "query", "name": "per_page", "description": "Number of items per page", "type": "integer", "format": "int32", "default": 20, "required": false, "example": 20, "index$": 1 }, { "in": "query", "name": "sort", "description": "Return GitLab Migrations sorted in created by `asc` or `desc` order.", "type": "string", "default": "desc", "enum": ["asc", "desc"], "required": false, "index$": 2 }, { "in": "query", "name": "status", "description": "Return all GitLab Migrations' entities with specified status", "type": "string", "enum": ["created", "started", "finished", "timeout", "failed", "canceled"], "required": false, "index$": 3 }] }, "GET /api/v4/bulk_imports/{import_id}/entities/{entity_id}": { "protocol": "http", "parameters": [{ "in": "path", "name": "import_id", "description": "The ID of user's GitLab Migration", "type": "integer", "format": "int32", "required": true, "index$": 0 }, { "in": "path", "name": "entity_id", "description": "The ID of GitLab Migration entity", "type": "integer", "format": "int32", "required": true, "index$": 1 }] }, "GET /api/v4/bulk_imports/{import_id}": { "protocol": "http", "parameters": [{ "in": "path", "name": "import_id", "description": "The ID of user's GitLab Migration", "type": "integer", "format": "int32", "required": true, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const api_entities_bulk_import_ref01_ent = client.ApiEntitiesBulkImport();
        let api_entities_bulk_import_ref01_data = setup.data.new.api_entities_bulk_import['api_entities_bulk_import_ref01'];
        api_entities_bulk_import_ref01_data['bulk_import_id'] = setup.idmap['bulk_import01'];
        api_entities_bulk_import_ref01_data = (await api_entities_bulk_import_ref01_ent.create(api_entities_bulk_import_ref01_data)).data();
        (0, node_assert_1.default)(null != api_entities_bulk_import_ref01_data.id);
        // LIST
        const api_entities_bulk_import_ref01_match = {};
        const api_entities_bulk_import_ref01_list = (await api_entities_bulk_import_ref01_ent.list(api_entities_bulk_import_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(api_entities_bulk_import_ref01_list, { id: api_entities_bulk_import_ref01_data.id })));
        // LOAD
        const api_entities_bulk_import_ref01_match_dt0 = {};
        api_entities_bulk_import_ref01_match_dt0.id = api_entities_bulk_import_ref01_data.id;
        const api_entities_bulk_import_ref01_data_dt0 = (await api_entities_bulk_import_ref01_ent.load(api_entities_bulk_import_ref01_match_dt0)).data();
        (0, node_assert_1.default)(api_entities_bulk_import_ref01_data_dt0.id === api_entities_bulk_import_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/api_entities_bulk_import/ApiEntitiesBulkImportTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['api_entities_bulk_import01', 'api_entities_bulk_import02', 'api_entities_bulk_import03', 'bulk_import01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_API_ENTITIES_BULK_IMPORT_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_API_ENTITIES_BULK_IMPORT_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_API_ENTITIES_BULK_IMPORT_ENTID'];
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
//# sourceMappingURL=ApiEntitiesBulkImportEntity.test.js.map