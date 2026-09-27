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
(0, node_test_1.describe)('ApiEntitiesFeatureFlagEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.ApiEntitiesFeatureFlag();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'api_entities_feature_flag.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "active": { "a": true, "h": "Active", "n": "active", "r": false, "t": "`$BOOLEAN`", "key$": "active", "index$": 0 }, "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": false, "t": "`$STRING`", "key$": "created_at", "index$": 1 }, "description": { "a": true, "h": "Description", "n": "description", "r": false, "t": "`$STRING`", "key$": "description", "index$": 2 }, "id": { "a": true, "fo": "int32", "h": "Id", "n": "id", "r": false, "t": "`$INTEGER`", "key$": "id", "index$": 3 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "t": "`$STRING`", "key$": "name", "index$": 4 }, "parameters": { "a": true, "h": "Parameters", "n": "parameters", "r": false, "t": "`$STRING`", "key$": "parameters", "index$": 5 }, "scopes": { "a": true, "h": "Scopes", "n": "scopes", "r": false, "t": "`$OBJECT`", "key$": "scopes", "index$": 6 }, "strategies": { "a": true, "h": "Strategies", "n": "strategies", "r": false, "t": "`$OBJECT`", "key$": "strategies", "index$": 7 }, "updated_at": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updated_at", "r": false, "t": "`$STRING`", "key$": "updated_at", "index$": 8 }, "user_list": { "a": true, "h": "User List", "n": "user_list", "r": false, "t": "`$OBJECT`", "key$": "user_list", "index$": 9 }, "version": { "a": true, "h": "Version", "n": "version", "r": false, "t": "`$STRING`", "key$": "version", "index$": 10 } }, "id": { "field": "id", "name": "id" }, "name": "api_entities_feature_flag", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /api/v4/projects/{id}/feature_flags", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "post_api_v4_projects_id_feature_flag", "or": "post_api_v4_projects_id_feature_flag", "r": true, "t": "`$OBJECT`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/v4/projects/{id}/feature_flags", "q": { "exist": ["post_api_v4_projects_id_feature_flag", "project_id"] }, "r": { "param": { "id": "project_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "feature_flags" }], "t": { "req": "`reqdata`", "res": "`body.strategies`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /api/v4/projects/{id}/feature_flags", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "ex": 20, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$INTEGER`", "index$": 1 }, { "a": true, "k": "query", "n": "scope", "or": "scope", "r": false, "t": "`$ANY`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/api/v4/projects/{id}/feature_flags", "q": { "exist": ["page", "per_page", "project_id", "scope"] }, "r": { "param": { "id": "project_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "feature_flags" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/v4/projects/{id}/feature_flags/{feature_flag_name}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "feature_flag_name", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/api/v4/projects/{id}/feature_flags/{feature_flag_name}", "q": { "exist": ["id", "project_id"] }, "r": { "param": { "feature_flag_name": "id", "id": "project_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "feature_flags" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.strategies`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /api/v4/projects/{id}/feature_flags/{feature_flag_name}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "feature_flag_name", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "k": "query", "n": "put_api_v4_projects_id_feature_flags_feature_flag_name", "or": "put_api_v4_projects_id_feature_flags_feature_flag_name", "r": true, "t": "`$OBJECT`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/api/v4/projects/{id}/feature_flags/{feature_flag_name}", "q": { "exist": ["id", "project_id", "put_api_v4_projects_id_feature_flags_feature_flag_name"] }, "r": { "param": { "feature_flag_name": "id", "id": "project_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "feature_flags" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.strategies`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.project"]] }, "key$": "api_entities_feature_flag", "name__orig": "api_entities_feature_flag", "Name": "ApiEntitiesFeatureFlag", "name_": "api_entities_feature_flag", "name-": "api-entities-feature-flag", "NAME": "API_ENTITIES_FEATURE_FLAG", "index$": 74 }, { "active": true, "entity": "api_entities_feature_flag", "key$": "BasicApiEntitiesFeatureFlagFlow", "kind": "basic", "name": "BasicApiEntitiesFeatureFlagFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "api_entities_feature_flag_ref01" }, "m": { "project_id": "project01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "project_id": "project01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "api_entities_feature_flag_ref01" } }], "index$": 1 }, { "a": true, "d": { "project_id": "project01" }, "i": { "ref": "api_entities_feature_flag_ref01", "srcdatavar": "api_entities_feature_flag_ref01_data", "suffix": "_up0", "textfield": "created_at" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-api_entities_feature_flag_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "api_entities_feature_flag_ref01", "srcdatavar": "api_entities_feature_flag_ref01_data", "suffix": "_dt0" }, "m": { "id": "api_entities_feature_flag01", "project_id": "project01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-api_entities_feature_flag_ref01" } }], "index$": 3 }] }, 'ApiEntitiesFeatureFlag', { "POST /api/v4/projects/{id}/feature_flags": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project", "type": "string", "required": true, "index$": 0 }, { "name": "postApiV4ProjectsIdFeatureFlags", "in": "body", "required": true, "schema": { "type": "object", "properties": { "name": { "type": "string", "description": "The name of the feature flag" }, "description": { "type": "string", "description": "The description of the feature flag" }, "active": { "type": "boolean", "description": "The active state of the flag. Defaults to `true`. Supported in GitLab 13.3 and later" }, "version": { "type": "string", "description": "The version of the feature flag. Must be `new_version_flag`. Omit to create a Legacy feature flag." }, "strategies": { "type": "array", "items": { "type": "object", "properties": { "name": { "type": "string", "description": "The strategy name. Can be `default`, `gradualRolloutUserId`, `userWithId`, or `gitlabUserList`. In GitLab 13.5 and later, can be `flexibleRollout`" }, "parameters": { "type": "string", "description": "The strategy parameters as a JSON-formatted string e.g. `{\"userIds\":\"user1\"}`" }, "user_list_id": { "type": "integer", "format": "int32", "description": "The ID of the feature flag user list. If strategy is `gitlabUserList`." }, "scopes": { "type": "array", "items": { "type": "object", "properties": {}, "required": [] } } }, "required": ["name"] } } }, "required": ["name"], "description": "Create a new feature flag", "x-ref": "#/definitions/postApiV4ProjectsIdFeatureFlags" }, "index$": 1 }] }, "GET /api/v4/projects/{id}/feature_flags": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project", "type": "string", "required": true, "index$": 0 }, { "in": "query", "name": "scope", "description": "The scope of feature flags, one of: `enabled`, `disabled`", "type": "string", "enum": ["enabled", "disabled"], "required": false, "index$": 1 }, { "in": "query", "name": "page", "description": "Current page number", "type": "integer", "format": "int32", "default": 1, "required": false, "example": 1, "index$": 2 }, { "in": "query", "name": "per_page", "description": "Number of items per page", "type": "integer", "format": "int32", "default": 20, "required": false, "example": 20, "index$": 3 }] }, "GET /api/v4/projects/{id}/feature_flags/{feature_flag_name}": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project", "type": "string", "required": true, "index$": 0 }, { "in": "path", "name": "feature_flag_name", "description": "The name of the feature flag", "type": "string", "required": true, "index$": 1 }] }, "PUT /api/v4/projects/{id}/feature_flags/{feature_flag_name}": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project", "type": "string", "required": true, "index$": 0 }, { "in": "path", "name": "feature_flag_name", "description": "The name of the feature flag", "type": "string", "required": true, "index$": 1 }, { "name": "putApiV4ProjectsIdFeatureFlagsFeatureFlagName", "in": "body", "required": true, "schema": { "type": "object", "properties": { "name": { "type": "string", "description": "The new name of the feature flag. Supported in GitLab 13.3 and later" }, "description": { "type": "string", "description": "The description of the feature flag" }, "active": { "type": "boolean", "description": "The active state of the flag. Supported in GitLab 13.3 and later" }, "strategies": { "type": "array", "items": { "type": "object", "properties": { "id": { "type": "integer", "format": "int32", "description": "The feature flag strategy ID" }, "name": { "type": "string", "description": "The strategy name" }, "parameters": { "type": "string", "description": "The strategy parameters as a JSON-formatted string e.g. `{\"userIds\":\"user1\"}`" }, "user_list_id": { "type": "integer", "format": "int32", "description": "The ID of the feature flag user list" }, "_destroy": { "type": "boolean", "description": "Delete the strategy when true" }, "scopes": { "type": "array", "items": { "type": "object", "properties": {} } } } } } }, "description": "Update a feature flag", "x-ref": "#/definitions/putApiV4ProjectsIdFeatureFlagsFeatureFlagName" }, "index$": 2 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const api_entities_feature_flag_ref01_ent = client.ApiEntitiesFeatureFlag();
        let api_entities_feature_flag_ref01_data = setup.data.new.api_entities_feature_flag['api_entities_feature_flag_ref01'];
        api_entities_feature_flag_ref01_data['project_id'] = setup.idmap['project01'];
        api_entities_feature_flag_ref01_data = (await api_entities_feature_flag_ref01_ent.create(api_entities_feature_flag_ref01_data)).data();
        (0, node_assert_1.default)(null != api_entities_feature_flag_ref01_data.id);
        // LIST
        const api_entities_feature_flag_ref01_match = {};
        api_entities_feature_flag_ref01_match['project_id'] = setup.idmap['project01'];
        const api_entities_feature_flag_ref01_list = (await api_entities_feature_flag_ref01_ent.list(api_entities_feature_flag_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(api_entities_feature_flag_ref01_list, { id: api_entities_feature_flag_ref01_data.id })));
        // UPDATE
        const api_entities_feature_flag_ref01_data_up0 = {};
        api_entities_feature_flag_ref01_data_up0.id = api_entities_feature_flag_ref01_data.id;
        api_entities_feature_flag_ref01_data_up0['project_id'] = setup.idmap['project_id'];
        const api_entities_feature_flag_ref01_markdef_up0 = { name: 'created_at', value: 'Mark01-api_entities_feature_flag_ref01_' + setup.now };
        api_entities_feature_flag_ref01_data_up0[api_entities_feature_flag_ref01_markdef_up0.name] = api_entities_feature_flag_ref01_markdef_up0.value;
        const api_entities_feature_flag_ref01_resdata_up0 = (await api_entities_feature_flag_ref01_ent.update(api_entities_feature_flag_ref01_data_up0)).data();
        (0, node_assert_1.default)(api_entities_feature_flag_ref01_resdata_up0.id === api_entities_feature_flag_ref01_data_up0.id);
        (0, node_assert_1.default)(api_entities_feature_flag_ref01_resdata_up0[api_entities_feature_flag_ref01_markdef_up0.name] === api_entities_feature_flag_ref01_markdef_up0.value);
        // LOAD
        const api_entities_feature_flag_ref01_match_dt0 = {};
        api_entities_feature_flag_ref01_match_dt0.id = api_entities_feature_flag_ref01_data.id;
        const api_entities_feature_flag_ref01_data_dt0 = (await api_entities_feature_flag_ref01_ent.load(api_entities_feature_flag_ref01_match_dt0)).data();
        (0, node_assert_1.default)(api_entities_feature_flag_ref01_data_dt0.id === api_entities_feature_flag_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/api_entities_feature_flag/ApiEntitiesFeatureFlagTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['api_entities_feature_flag01', 'api_entities_feature_flag02', 'api_entities_feature_flag03', 'project01', 'project02', 'project03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_API_ENTITIES_FEATURE_FLAG_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_API_ENTITIES_FEATURE_FLAG_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_API_ENTITIES_FEATURE_FLAG_ENTID'];
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
//# sourceMappingURL=ApiEntitiesFeatureFlagEntity.test.js.map