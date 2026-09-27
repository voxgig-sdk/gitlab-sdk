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
(0, node_test_1.describe)('ApiEntitiesEventEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.ApiEntitiesEvent();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'api_entities_event.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "action_name": { "a": true, "h": "Action Name", "n": "action_name", "r": false, "t": "`$STRING`", "key$": "action_name", "index$": 0 }, "author": { "a": true, "h": "Author", "n": "author", "r": false, "sh": "API_Entities_UserBasic model", "t": "`$OBJECT`", "key$": "author", "index$": 1 }, "author_id": { "a": true, "fo": "int32", "h": "Author Id", "n": "author_id", "r": false, "t": "`$INTEGER`", "key$": "author_id", "index$": 2 }, "author_username": { "a": true, "h": "Author Username", "n": "author_username", "r": false, "t": "`$STRING`", "key$": "author_username", "index$": 3 }, "created_at": { "a": true, "h": "Created At", "n": "created_at", "r": false, "t": "`$STRING`", "key$": "created_at", "index$": 4 }, "id": { "a": true, "fo": "int32", "h": "Id", "n": "id", "r": false, "t": "`$INTEGER`", "key$": "id", "index$": 5 }, "imported": { "a": true, "h": "Imported", "n": "imported", "r": false, "t": "`$BOOLEAN`", "key$": "imported", "index$": 6 }, "imported_from": { "a": true, "h": "Imported From", "n": "imported_from", "r": false, "t": "`$STRING`", "key$": "imported_from", "index$": 7 }, "note": { "a": true, "h": "Note", "n": "note", "r": false, "t": "`$OBJECT`", "key$": "note", "index$": 8 }, "project_id": { "a": true, "fo": "int32", "h": "Project Id", "n": "project_id", "r": false, "t": "`$INTEGER`", "key$": "project_id", "index$": 9 }, "push_data": { "a": true, "h": "Push Data", "n": "push_data", "r": false, "t": "`$OBJECT`", "key$": "push_data", "index$": 10 }, "target_id": { "a": true, "fo": "int32", "h": "Target Id", "n": "target_id", "r": false, "t": "`$INTEGER`", "key$": "target_id", "index$": 11 }, "target_iid": { "a": true, "fo": "int32", "h": "Target Iid", "n": "target_iid", "r": false, "t": "`$INTEGER`", "key$": "target_iid", "index$": 12 }, "target_title": { "a": true, "h": "Target Title", "n": "target_title", "r": false, "t": "`$STRING`", "key$": "target_title", "index$": 13 }, "target_type": { "a": true, "h": "Target Type", "n": "target_type", "r": false, "t": "`$STRING`", "key$": "target_type", "index$": 14 }, "wiki_page": { "a": true, "h": "Wiki Page", "n": "wiki_page", "r": false, "sh": "API_Entities_WikiPageBasic model", "t": "`$OBJECT`", "key$": "wiki_page", "index$": 15 } }, "id": { "field": "id", "name": "id" }, "name": "api_entities_event", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /api/v4/events", "source": "swagger2", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "action", "or": "action", "r": false, "t": "`$ANY`", "index$": 0 }, { "a": true, "k": "query", "n": "after", "or": "after", "r": false, "t": "`$ANY`", "index$": 1 }, { "a": true, "k": "query", "n": "before", "or": "before", "r": false, "t": "`$ANY`", "index$": 2 }, { "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 3 }, { "a": true, "ex": 20, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$INTEGER`", "index$": 4 }, { "a": true, "ex": "all", "k": "query", "n": "scope", "or": "scope", "r": false, "t": "`$ANY`", "index$": 5 }, { "a": true, "k": "query", "n": "sort", "or": "sort", "r": false, "t": "`$ANY`", "index$": 6 }, { "a": true, "k": "query", "n": "target_type", "or": "target_type", "r": false, "t": "`$ANY`", "index$": 7 }] }, "k": "http", "m": "GET", "o": "/api/v4/events", "q": { "exist": ["action", "after", "before", "page", "per_page", "scope", "sort", "target_type"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "events" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /api/v4/users/{id}/events", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "user_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "action", "or": "action", "r": false, "t": "`$ANY`", "index$": 0 }, { "a": true, "k": "query", "n": "after", "or": "after", "r": false, "t": "`$ANY`", "index$": 1 }, { "a": true, "k": "query", "n": "before", "or": "before", "r": false, "t": "`$ANY`", "index$": 2 }, { "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 3 }, { "a": true, "ex": 20, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$INTEGER`", "index$": 4 }, { "a": true, "k": "query", "n": "sort", "or": "sort", "r": false, "t": "`$ANY`", "index$": 5 }, { "a": true, "k": "query", "n": "target_type", "or": "target_type", "r": false, "t": "`$ANY`", "index$": 6 }] }, "k": "http", "m": "GET", "o": "/api/v4/users/{id}/events", "q": { "exist": ["action", "after", "before", "page", "per_page", "sort", "target_type", "user_id"] }, "r": { "param": { "id": "user_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "users" }, { "var": "user_id" }, { "lit": "events" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/v4/projects/{id}/events", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "action", "or": "action", "r": false, "t": "`$ANY`", "index$": 0 }, { "a": true, "k": "query", "n": "after", "or": "after", "r": false, "t": "`$ANY`", "index$": 1 }, { "a": true, "k": "query", "n": "before", "or": "before", "r": false, "t": "`$ANY`", "index$": 2 }, { "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 3 }, { "a": true, "ex": 20, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$INTEGER`", "index$": 4 }, { "a": true, "k": "query", "n": "sort", "or": "sort", "r": false, "t": "`$ANY`", "index$": 5 }, { "a": true, "k": "query", "n": "target_type", "or": "target_type", "r": false, "t": "`$ANY`", "index$": 6 }] }, "k": "http", "m": "GET", "o": "/api/v4/projects/{id}/events", "q": { "exist": ["action", "after", "before", "page", "per_page", "project_id", "sort", "target_type"] }, "r": { "param": { "id": "project_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "events" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [["$.main.kit.entity.project"], ["$.main.kit.entity.user"]] }, "key$": "api_entities_event", "name__orig": "api_entities_event", "Name": "ApiEntitiesEvent", "name_": "api_entities_event", "name-": "api-entities-event", "NAME": "API_ENTITIES_EVENT", "index$": 71 }, { "active": true, "entity": "api_entities_event", "key$": "BasicApiEntitiesEventFlow", "kind": "basic", "name": "BasicApiEntitiesEventFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "user_id": "user01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "api_entities_event_ref01" } }], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "api_entities_event_ref01", "srcdatavar": "api_entities_event_ref01_data", "suffix": "_dt0" }, "m": { "id": "api_entities_event01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-api_entities_event_ref01" } }], "index$": 1 }] }, 'ApiEntitiesEvent', { "GET /api/v4/events": { "protocol": "http", "parameters": [{ "in": "query", "name": "scope", "description": "Include all events across a user’s projects", "type": "string", "required": false, "example": "all", "index$": 0 }, { "in": "query", "name": "page", "description": "Current page number", "type": "integer", "format": "int32", "default": 1, "required": false, "example": 1, "index$": 1 }, { "in": "query", "name": "per_page", "description": "Number of items per page", "type": "integer", "format": "int32", "default": 20, "required": false, "example": 20, "index$": 2 }, { "in": "query", "name": "action", "description": "Event action to filter on", "type": "string", "required": false, "index$": 3 }, { "in": "query", "name": "target_type", "description": "Event target type to filter on", "type": "string", "enum": ["issue", "milestone", "merge_request", "note", "project", "snippet", "user", "wiki", "design"], "required": false, "index$": 4 }, { "in": "query", "name": "before", "description": "Include only events created before this date", "type": "string", "format": "date", "required": false, "index$": 5 }, { "in": "query", "name": "after", "description": "Include only events created after this date", "type": "string", "format": "date", "required": false, "index$": 6 }, { "in": "query", "name": "sort", "description": "Return events sorted in ascending and descending order", "type": "string", "default": "desc", "enum": ["asc", "desc"], "required": false, "index$": 7 }] }, "GET /api/v4/users/{id}/events": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or username of the user", "type": "string", "required": true, "index$": 0 }, { "in": "query", "name": "page", "description": "Current page number", "type": "integer", "format": "int32", "default": 1, "required": false, "example": 1, "index$": 1 }, { "in": "query", "name": "per_page", "description": "Number of items per page", "type": "integer", "format": "int32", "default": 20, "required": false, "example": 20, "index$": 2 }, { "in": "query", "name": "action", "description": "Event action to filter on", "type": "string", "required": false, "index$": 3 }, { "in": "query", "name": "target_type", "description": "Event target type to filter on", "type": "string", "enum": ["issue", "milestone", "merge_request", "note", "project", "snippet", "user", "wiki", "design"], "required": false, "index$": 4 }, { "in": "query", "name": "before", "description": "Include only events created before this date", "type": "string", "format": "date", "required": false, "index$": 5 }, { "in": "query", "name": "after", "description": "Include only events created after this date", "type": "string", "format": "date", "required": false, "index$": 6 }, { "in": "query", "name": "sort", "description": "Return events sorted in ascending and descending order", "type": "string", "default": "desc", "enum": ["asc", "desc"], "required": false, "index$": 7 }] }, "GET /api/v4/projects/{id}/events": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project", "type": "string", "required": true, "index$": 0 }, { "in": "query", "name": "action", "description": "Event action to filter on", "type": "string", "required": false, "index$": 1 }, { "in": "query", "name": "target_type", "description": "Event target type to filter on", "type": "string", "enum": ["issue", "milestone", "merge_request", "note", "project", "snippet", "user", "wiki", "design"], "required": false, "index$": 2 }, { "in": "query", "name": "before", "description": "Include only events created before this date", "type": "string", "format": "date", "required": false, "index$": 3 }, { "in": "query", "name": "after", "description": "Include only events created after this date", "type": "string", "format": "date", "required": false, "index$": 4 }, { "in": "query", "name": "sort", "description": "Return events sorted in ascending and descending order", "type": "string", "default": "desc", "enum": ["asc", "desc"], "required": false, "index$": 5 }, { "in": "query", "name": "page", "description": "Current page number", "type": "integer", "format": "int32", "default": 1, "required": false, "example": 1, "index$": 6 }, { "in": "query", "name": "per_page", "description": "Number of items per page", "type": "integer", "format": "int32", "default": 20, "required": false, "example": 20, "index$": 7 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let api_entities_event_ref01_data = Object.values(setup.data.existing.api_entities_event)[0];
        // LIST
        const api_entities_event_ref01_ent = client.ApiEntitiesEvent();
        const api_entities_event_ref01_match = {};
        api_entities_event_ref01_match['user_id'] = setup.idmap['user01'];
        const api_entities_event_ref01_list = (await api_entities_event_ref01_ent.list(api_entities_event_ref01_match)).map((e) => e.data());
        // LOAD
        const api_entities_event_ref01_match_dt0 = {};
        api_entities_event_ref01_match_dt0.id = api_entities_event_ref01_data.id;
        const api_entities_event_ref01_data_dt0 = (await api_entities_event_ref01_ent.load(api_entities_event_ref01_match_dt0)).data();
        (0, node_assert_1.default)(api_entities_event_ref01_data_dt0.id === api_entities_event_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/api_entities_event/ApiEntitiesEventTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['api_entities_event01', 'api_entities_event02', 'api_entities_event03', 'project01', 'project02', 'project03', 'user01', 'user02', 'user03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_API_ENTITIES_EVENT_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_API_ENTITIES_EVENT_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_API_ENTITIES_EVENT_ENTID'];
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
//# sourceMappingURL=ApiEntitiesEventEntity.test.js.map