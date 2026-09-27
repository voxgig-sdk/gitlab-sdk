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
(0, node_test_1.describe)('ApiEntitiesAccessRequesterEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.ApiEntitiesAccessRequester();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['create', 'list', 'update']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'api_entities_access_requester.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "avatar_path": { "a": true, "h": "Avatar Path", "n": "avatar_path", "r": false, "t": "`$STRING`", "key$": "avatar_path", "index$": 0 }, "avatar_url": { "a": true, "h": "Avatar Url", "n": "avatar_url", "r": false, "t": "`$STRING`", "key$": "avatar_url", "index$": 1 }, "custom_attributes": { "a": true, "h": "Custom Attributes", "n": "custom_attributes", "r": false, "t": "`$ARRAY`", "key$": "custom_attributes", "index$": 2 }, "id": { "a": true, "fo": "int32", "h": "Id", "n": "id", "r": false, "t": "`$INTEGER`", "key$": "id", "index$": 3 }, "key": { "a": true, "h": "Key", "n": "key", "r": false, "t": "`$STRING`", "key$": "key", "index$": 4 }, "locked": { "a": true, "h": "Locked", "n": "locked", "r": false, "t": "`$BOOLEAN`", "key$": "locked", "index$": 5 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "t": "`$STRING`", "key$": "name", "index$": 6 }, "public_email": { "a": true, "h": "Public Email", "n": "public_email", "r": false, "t": "`$STRING`", "key$": "public_email", "index$": 7 }, "requested_at": { "a": true, "h": "Requested At", "n": "requested_at", "r": false, "t": "`$STRING`", "key$": "requested_at", "index$": 8 }, "state": { "a": true, "h": "State", "n": "state", "r": false, "t": "`$STRING`", "key$": "state", "index$": 9 }, "username": { "a": true, "h": "Username", "n": "username", "r": false, "t": "`$STRING`", "key$": "username", "index$": 10 }, "value": { "a": true, "h": "Value", "n": "value", "r": false, "t": "`$STRING`", "key$": "value", "index$": 11 }, "web_url": { "a": true, "h": "Web Url", "n": "web_url", "r": false, "t": "`$STRING`", "key$": "web_url", "index$": 12 } }, "id": { "field": "id", "name": "id" }, "name": "api_entities_access_requester", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /api/v4/groups/{id}/access_requests", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "group_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/v4/groups/{id}/access_requests", "q": { "exist": ["group_id"] }, "r": { "param": { "id": "group_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "groups" }, { "var": "group_id" }, { "lit": "access_requests" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /api/v4/projects/{id}/access_requests", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/v4/projects/{id}/access_requests", "q": { "exist": ["project_id"] }, "r": { "param": { "id": "project_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "access_requests" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /api/v4/groups/{id}/access_requests", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "group_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "ex": 20, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$INTEGER`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/api/v4/groups/{id}/access_requests", "q": { "exist": ["group_id", "page", "per_page"] }, "r": { "param": { "id": "group_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "groups" }, { "var": "group_id" }, { "lit": "access_requests" }], "t": { "req": "`reqdata`", "res": "`body.custom_attributes`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /api/v4/projects/{id}/access_requests", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "ex": 20, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$INTEGER`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/api/v4/projects/{id}/access_requests", "q": { "exist": ["page", "per_page", "project_id"] }, "r": { "param": { "id": "project_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "access_requests" }], "t": { "req": "`reqdata`", "res": "`body.custom_attributes`" }, "index$": 1 }], "key$": "list" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /api/v4/groups/{id}/access_requests/{user_id}/approve", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "access_request_id", "or": "user_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "group_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "k": "query", "n": "put_api_v4_groups_id_access_requests_user_id_approve", "or": "put_api_v4_groups_id_access_requests_user_id_approve", "r": true, "t": "`$OBJECT`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/api/v4/groups/{id}/access_requests/{user_id}/approve", "q": { "exist": ["access_request_id", "group_id", "put_api_v4_groups_id_access_requests_user_id_approve"] }, "r": { "param": { "id": "group_id", "user_id": "access_request_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "groups" }, { "var": "group_id" }, { "lit": "access_requests" }, { "var": "access_request_id" }, { "lit": "approve" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "PUT /api/v4/projects/{id}/access_requests/{user_id}/approve", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "access_request_id", "or": "user_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "k": "query", "n": "put_api_v4_projects_id_access_requests_user_id_approve", "or": "put_api_v4_projects_id_access_requests_user_id_approve", "r": true, "t": "`$OBJECT`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/api/v4/projects/{id}/access_requests/{user_id}/approve", "q": { "exist": ["access_request_id", "project_id", "put_api_v4_projects_id_access_requests_user_id_approve"] }, "r": { "param": { "id": "project_id", "user_id": "access_request_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "access_requests" }, { "var": "access_request_id" }, { "lit": "approve" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.group"], ["$.main.kit.entity.project"], ["$.main.kit.entity.group", "$.main.kit.entity.access_request"], ["$.main.kit.entity.project", "$.main.kit.entity.access_request"]] }, "key$": "api_entities_access_requester", "name__orig": "api_entities_access_requester", "Name": "ApiEntitiesAccessRequester", "name_": "api_entities_access_requester", "name-": "api-entities-access-requester", "NAME": "API_ENTITIES_ACCESS_REQUESTER", "index$": 2 }, { "active": true, "entity": "api_entities_access_requester", "key$": "BasicApiEntitiesAccessRequesterFlow", "kind": "basic", "name": "BasicApiEntitiesAccessRequesterFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "api_entities_access_requester_ref01" }, "m": { "group_id": "group01", "project_id": "project01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "project_id": "project01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "api_entities_access_requester_ref01" } }], "index$": 1 }, { "a": true, "d": { "project_id": "project01" }, "i": { "ref": "api_entities_access_requester_ref01", "srcdatavar": "api_entities_access_requester_ref01_data", "suffix": "_up0", "textfield": "avatar_path" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-api_entities_access_requester_ref01" } }], "v": [], "index$": 2 }] }, 'ApiEntitiesAccessRequester', { "POST /api/v4/groups/{id}/access_requests": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the group owned by the authenticated user", "type": "string", "required": true, "index$": 0 }] }, "POST /api/v4/projects/{id}/access_requests": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project owned by the authenticated user", "type": "string", "required": true, "index$": 0 }] }, "GET /api/v4/groups/{id}/access_requests": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the group owned by the authenticated user", "type": "string", "required": true, "index$": 0 }, { "in": "query", "name": "page", "description": "Current page number", "type": "integer", "format": "int32", "default": 1, "required": false, "example": 1, "index$": 1 }, { "in": "query", "name": "per_page", "description": "Number of items per page", "type": "integer", "format": "int32", "default": 20, "required": false, "example": 20, "index$": 2 }] }, "GET /api/v4/projects/{id}/access_requests": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project owned by the authenticated user", "type": "string", "required": true, "index$": 0 }, { "in": "query", "name": "page", "description": "Current page number", "type": "integer", "format": "int32", "default": 1, "required": false, "example": 1, "index$": 1 }, { "in": "query", "name": "per_page", "description": "Number of items per page", "type": "integer", "format": "int32", "default": 20, "required": false, "example": 20, "index$": 2 }] }, "PUT /api/v4/groups/{id}/access_requests/{user_id}/approve": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the group owned by the authenticated user", "type": "string", "required": true, "index$": 0 }, { "in": "path", "name": "user_id", "description": "The user ID of the access requester", "type": "integer", "format": "int32", "required": true, "index$": 1 }, { "name": "putApiV4GroupsIdAccessRequestsUserIdApprove", "in": "body", "required": true, "schema": { "type": "object", "properties": { "access_level": { "type": "integer", "format": "int32", "description": "A valid access level (defaults: `30`, the Developer role)", "default": 30 } }, "description": "Approves an access request for the given user.", "x-ref": "#/definitions/putApiV4GroupsIdAccessRequestsUserIdApprove" }, "index$": 2 }] }, "PUT /api/v4/projects/{id}/access_requests/{user_id}/approve": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project owned by the authenticated user", "type": "string", "required": true, "index$": 0 }, { "in": "path", "name": "user_id", "description": "The user ID of the access requester", "type": "integer", "format": "int32", "required": true, "index$": 1 }, { "name": "putApiV4ProjectsIdAccessRequestsUserIdApprove", "in": "body", "required": true, "schema": { "type": "object", "properties": { "access_level": { "type": "integer", "format": "int32", "description": "A valid access level (defaults: `30`, the Developer role)", "default": 30 } }, "description": "Approves an access request for the given user.", "x-ref": "#/definitions/putApiV4ProjectsIdAccessRequestsUserIdApprove" }, "index$": 2 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const api_entities_access_requester_ref01_ent = client.ApiEntitiesAccessRequester();
        let api_entities_access_requester_ref01_data = setup.data.new.api_entities_access_requester['api_entities_access_requester_ref01'];
        api_entities_access_requester_ref01_data['group_id'] = setup.idmap['group01'];
        api_entities_access_requester_ref01_data['project_id'] = setup.idmap['project01'];
        api_entities_access_requester_ref01_data = (await api_entities_access_requester_ref01_ent.create(api_entities_access_requester_ref01_data)).data();
        (0, node_assert_1.default)(null != api_entities_access_requester_ref01_data.id);
        // LIST
        const api_entities_access_requester_ref01_match = {};
        api_entities_access_requester_ref01_match['project_id'] = setup.idmap['project01'];
        const api_entities_access_requester_ref01_list = (await api_entities_access_requester_ref01_ent.list(api_entities_access_requester_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(api_entities_access_requester_ref01_list, { id: api_entities_access_requester_ref01_data.id })));
        // UPDATE
        const api_entities_access_requester_ref01_data_up0 = {};
        api_entities_access_requester_ref01_data_up0.id = api_entities_access_requester_ref01_data.id;
        api_entities_access_requester_ref01_data_up0['project_id'] = setup.idmap['project_id'];
        const api_entities_access_requester_ref01_markdef_up0 = { name: 'avatar_path', value: 'Mark01-api_entities_access_requester_ref01_' + setup.now };
        api_entities_access_requester_ref01_data_up0[api_entities_access_requester_ref01_markdef_up0.name] = api_entities_access_requester_ref01_markdef_up0.value;
        const api_entities_access_requester_ref01_resdata_up0 = (await api_entities_access_requester_ref01_ent.update(api_entities_access_requester_ref01_data_up0)).data();
        (0, node_assert_1.default)(api_entities_access_requester_ref01_resdata_up0.id === api_entities_access_requester_ref01_data_up0.id);
        (0, node_assert_1.default)(api_entities_access_requester_ref01_resdata_up0[api_entities_access_requester_ref01_markdef_up0.name] === api_entities_access_requester_ref01_markdef_up0.value);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/api_entities_access_requester/ApiEntitiesAccessRequesterTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['api_entities_access_requester01', 'api_entities_access_requester02', 'api_entities_access_requester03', 'group01', 'group02', 'group03', 'project01', 'project02', 'project03', 'access_request01', 'access_request02', 'access_request03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_API_ENTITIES_ACCESS_REQUESTER_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_API_ENTITIES_ACCESS_REQUESTER_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_API_ENTITIES_ACCESS_REQUESTER_ENTID'];
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
//# sourceMappingURL=ApiEntitiesAccessRequesterEntity.test.js.map