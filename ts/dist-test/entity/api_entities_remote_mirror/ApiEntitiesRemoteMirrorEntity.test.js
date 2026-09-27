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
(0, node_test_1.describe)('ApiEntitiesRemoteMirrorEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.ApiEntitiesRemoteMirror();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'api_entities_remote_mirror.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "auth_method": { "a": true, "h": "Auth Method", "n": "auth_method", "r": false, "t": "`$STRING`", "key$": "auth_method", "index$": 0 }, "enabled": { "a": true, "h": "Enabled", "n": "enabled", "r": false, "t": "`$BOOLEAN`", "key$": "enabled", "index$": 1 }, "host_keys": { "a": true, "h": "Host Keys", "n": "host_keys", "r": false, "t": "`$ARRAY`", "key$": "host_keys", "index$": 2 }, "id": { "a": true, "fo": "int32", "h": "Id", "n": "id", "r": false, "t": "`$INTEGER`", "key$": "id", "index$": 3 }, "keep_divergent_refs": { "a": true, "h": "Keep Divergent Refs", "n": "keep_divergent_refs", "r": false, "t": "`$BOOLEAN`", "key$": "keep_divergent_refs", "index$": 4 }, "last_error": { "a": true, "fo": "int32", "h": "Last Error", "n": "last_error", "r": false, "t": "`$INTEGER`", "key$": "last_error", "index$": 5 }, "last_successful_update_at": { "a": true, "fo": "date-time", "h": "Last Successful Update At", "n": "last_successful_update_at", "r": false, "t": "`$STRING`", "key$": "last_successful_update_at", "index$": 6 }, "last_update_at": { "a": true, "fo": "date-time", "h": "Last Update At", "n": "last_update_at", "r": false, "t": "`$STRING`", "key$": "last_update_at", "index$": 7 }, "last_update_started_at": { "a": true, "fo": "date-time", "h": "Last Update Started At", "n": "last_update_started_at", "r": false, "t": "`$STRING`", "key$": "last_update_started_at", "index$": 8 }, "mirror_branch_regex": { "a": true, "h": "Mirror Branch Regex", "n": "mirror_branch_regex", "r": false, "t": "`$STRING`", "key$": "mirror_branch_regex", "index$": 9 }, "only_protected_branches": { "a": true, "h": "Only Protected Branches", "n": "only_protected_branches", "r": false, "t": "`$BOOLEAN`", "key$": "only_protected_branches", "index$": 10 }, "update_status": { "a": true, "h": "Update Status", "n": "update_status", "r": false, "t": "`$STRING`", "key$": "update_status", "index$": 11 }, "url": { "a": true, "h": "Url", "n": "url", "r": false, "t": "`$STRING`", "key$": "url", "index$": 12 } }, "id": { "field": "id", "name": "id" }, "name": "api_entities_remote_mirror", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /api/v4/projects/{id}/remote_mirrors", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "post_api_v4_projects_id_remote_mirror", "or": "post_api_v4_projects_id_remote_mirror", "r": true, "t": "`$OBJECT`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/v4/projects/{id}/remote_mirrors", "q": { "exist": ["post_api_v4_projects_id_remote_mirror", "project_id"] }, "r": { "param": { "id": "project_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "remote_mirrors" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /api/v4/projects/{id}/remote_mirrors/{mirror_id}/sync", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "remote_mirror_id", "or": "mirror_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "POST", "o": "/api/v4/projects/{id}/remote_mirrors/{mirror_id}/sync", "q": { "$action": "sync", "exist": ["project_id", "remote_mirror_id"] }, "r": { "param": { "id": "project_id", "mirror_id": "remote_mirror_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "remote_mirrors" }, { "var": "remote_mirror_id" }, { "lit": "sync" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /api/v4/projects/{id}/remote_mirrors", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "ex": 20, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$INTEGER`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/api/v4/projects/{id}/remote_mirrors", "q": { "exist": ["page", "per_page", "project_id"] }, "r": { "param": { "id": "project_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "remote_mirrors" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/v4/projects/{id}/remote_mirrors/{mirror_id}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "mirror_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/api/v4/projects/{id}/remote_mirrors/{mirror_id}", "q": { "exist": ["id", "project_id"] }, "r": { "param": { "id": "project_id", "mirror_id": "id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "remote_mirrors" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /api/v4/projects/{id}/remote_mirrors/{mirror_id}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "mirror_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "k": "query", "n": "put_api_v4_projects_id_remote_mirrors_mirror_id", "or": "put_api_v4_projects_id_remote_mirrors_mirror_id", "r": true, "t": "`$OBJECT`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/api/v4/projects/{id}/remote_mirrors/{mirror_id}", "q": { "exist": ["id", "project_id", "put_api_v4_projects_id_remote_mirrors_mirror_id"] }, "r": { "param": { "id": "project_id", "mirror_id": "id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "remote_mirrors" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.project"], ["$.main.kit.entity.project", "$.main.kit.entity.remote_mirror"]] }, "key$": "api_entities_remote_mirror", "name__orig": "api_entities_remote_mirror", "Name": "ApiEntitiesRemoteMirror", "name_": "api_entities_remote_mirror", "name-": "api-entities-remote-mirror", "NAME": "API_ENTITIES_REMOTE_MIRROR", "index$": 151 }, { "active": true, "entity": "api_entities_remote_mirror", "key$": "BasicApiEntitiesRemoteMirrorFlow", "kind": "basic", "name": "BasicApiEntitiesRemoteMirrorFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "api_entities_remote_mirror_ref01" }, "m": { "project_id": "project01", "remote_mirror_id": "remote_mirror01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "project_id": "project01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "api_entities_remote_mirror_ref01" } }], "index$": 1 }, { "a": true, "d": { "project_id": "project01" }, "i": { "ref": "api_entities_remote_mirror_ref01", "srcdatavar": "api_entities_remote_mirror_ref01_data", "suffix": "_up0", "textfield": "auth_method" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-api_entities_remote_mirror_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "api_entities_remote_mirror_ref01", "srcdatavar": "api_entities_remote_mirror_ref01_data", "suffix": "_dt0" }, "m": { "id": "api_entities_remote_mirror01", "project_id": "project01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-api_entities_remote_mirror_ref01" } }], "index$": 3 }] }, 'ApiEntitiesRemoteMirror', { "POST /api/v4/projects/{id}/remote_mirrors": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project", "type": "string", "required": true, "index$": 0 }, { "name": "postApiV4ProjectsIdRemoteMirrors", "in": "body", "required": true, "schema": { "type": "object", "properties": { "url": { "type": "string", "description": "The URL for a remote mirror", "example": "https://*****:*****@example.com/gitlab/example.git" }, "enabled": { "type": "boolean", "description": "Determines if the mirror is enabled" }, "auth_method": { "type": "string", "description": "Determines the mirror authentication method", "enum": ["ssh_public_key", "password"] }, "keep_divergent_refs": { "type": "boolean", "description": "Determines if divergent refs are kept on the target" }, "only_protected_branches": { "type": "boolean", "description": "Determines if only protected branches are mirrored" }, "mirror_branch_regex": { "type": "string", "description": "Determines if only matched branches are mirrored" } }, "required": ["url"], "description": "Create remote mirror for a project", "x-ref": "#/definitions/postApiV4ProjectsIdRemoteMirrors" }, "index$": 1 }] }, "POST /api/v4/projects/{id}/remote_mirrors/{mirror_id}/sync": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project", "type": "string", "required": true, "index$": 0 }, { "in": "path", "name": "mirror_id", "description": "The ID of a remote mirror", "type": "string", "required": true, "index$": 1 }] }, "GET /api/v4/projects/{id}/remote_mirrors": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project", "type": "string", "required": true, "index$": 0 }, { "in": "query", "name": "page", "description": "Current page number", "type": "integer", "format": "int32", "default": 1, "required": false, "example": 1, "index$": 1 }, { "in": "query", "name": "per_page", "description": "Number of items per page", "type": "integer", "format": "int32", "default": 20, "required": false, "example": 20, "index$": 2 }] }, "GET /api/v4/projects/{id}/remote_mirrors/{mirror_id}": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project", "type": "string", "required": true, "index$": 0 }, { "in": "path", "name": "mirror_id", "description": "The ID of a remote mirror", "type": "string", "required": true, "index$": 1 }] }, "PUT /api/v4/projects/{id}/remote_mirrors/{mirror_id}": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project", "type": "string", "required": true, "index$": 0 }, { "in": "path", "name": "mirror_id", "description": "The ID of a remote mirror", "type": "string", "required": true, "index$": 1 }, { "name": "putApiV4ProjectsIdRemoteMirrorsMirrorId", "in": "body", "required": true, "schema": { "type": "object", "properties": { "enabled": { "type": "boolean", "description": "Determines if the mirror is enabled", "example": true }, "auth_method": { "type": "string", "description": "Determines the mirror authentication method" }, "keep_divergent_refs": { "type": "boolean", "description": "Determines if divergent refs are kept on the target" }, "only_protected_branches": { "type": "boolean", "description": "Determines if only protected branches are mirrored" }, "mirror_branch_regex": { "type": "string", "description": "Determines if only matched branches are mirrored" } }, "description": "Update the attributes of a single remote mirror", "x-ref": "#/definitions/putApiV4ProjectsIdRemoteMirrorsMirrorId" }, "index$": 2 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const api_entities_remote_mirror_ref01_ent = client.ApiEntitiesRemoteMirror();
        let api_entities_remote_mirror_ref01_data = setup.data.new.api_entities_remote_mirror['api_entities_remote_mirror_ref01'];
        api_entities_remote_mirror_ref01_data['project_id'] = setup.idmap['project01'];
        api_entities_remote_mirror_ref01_data['remote_mirror_id'] = setup.idmap['remote_mirror01'];
        api_entities_remote_mirror_ref01_data = (await api_entities_remote_mirror_ref01_ent.create(api_entities_remote_mirror_ref01_data)).data();
        (0, node_assert_1.default)(null != api_entities_remote_mirror_ref01_data.id);
        // LIST
        const api_entities_remote_mirror_ref01_match = {};
        api_entities_remote_mirror_ref01_match['project_id'] = setup.idmap['project01'];
        const api_entities_remote_mirror_ref01_list = (await api_entities_remote_mirror_ref01_ent.list(api_entities_remote_mirror_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(api_entities_remote_mirror_ref01_list, { id: api_entities_remote_mirror_ref01_data.id })));
        // UPDATE
        const api_entities_remote_mirror_ref01_data_up0 = {};
        api_entities_remote_mirror_ref01_data_up0.id = api_entities_remote_mirror_ref01_data.id;
        api_entities_remote_mirror_ref01_data_up0['project_id'] = setup.idmap['project_id'];
        const api_entities_remote_mirror_ref01_markdef_up0 = { name: 'auth_method', value: 'Mark01-api_entities_remote_mirror_ref01_' + setup.now };
        api_entities_remote_mirror_ref01_data_up0[api_entities_remote_mirror_ref01_markdef_up0.name] = api_entities_remote_mirror_ref01_markdef_up0.value;
        const api_entities_remote_mirror_ref01_resdata_up0 = (await api_entities_remote_mirror_ref01_ent.update(api_entities_remote_mirror_ref01_data_up0)).data();
        (0, node_assert_1.default)(api_entities_remote_mirror_ref01_resdata_up0.id === api_entities_remote_mirror_ref01_data_up0.id);
        (0, node_assert_1.default)(api_entities_remote_mirror_ref01_resdata_up0[api_entities_remote_mirror_ref01_markdef_up0.name] === api_entities_remote_mirror_ref01_markdef_up0.value);
        // LOAD
        const api_entities_remote_mirror_ref01_match_dt0 = {};
        api_entities_remote_mirror_ref01_match_dt0.id = api_entities_remote_mirror_ref01_data.id;
        const api_entities_remote_mirror_ref01_data_dt0 = (await api_entities_remote_mirror_ref01_ent.load(api_entities_remote_mirror_ref01_match_dt0)).data();
        (0, node_assert_1.default)(api_entities_remote_mirror_ref01_data_dt0.id === api_entities_remote_mirror_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/api_entities_remote_mirror/ApiEntitiesRemoteMirrorTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['api_entities_remote_mirror01', 'api_entities_remote_mirror02', 'api_entities_remote_mirror03', 'project01', 'project02', 'project03', 'remote_mirror01', 'remote_mirror02', 'remote_mirror03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_API_ENTITIES_REMOTE_MIRROR_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_API_ENTITIES_REMOTE_MIRROR_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_API_ENTITIES_REMOTE_MIRROR_ENTID'];
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
//# sourceMappingURL=ApiEntitiesRemoteMirrorEntity.test.js.map