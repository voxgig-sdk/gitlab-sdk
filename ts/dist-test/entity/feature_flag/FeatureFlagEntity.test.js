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
(0, node_test_1.describe)('FeatureFlagEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.FeatureFlag();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['create', 'load', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'feature_flag.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 0 } }, "id": { "field": "id", "name": "id" }, "name": "feature_flag", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /api/v4/feature_flags/unleash/{project_id}/client/metrics", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "unleash_id", "or": "project_id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "post_api_v4_feature_flags_unleash_project_id_client_metric", "or": "post_api_v4_feature_flags_unleash_project_id_client_metric", "r": true, "t": "`$OBJECT`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/v4/feature_flags/unleash/{project_id}/client/metrics", "q": { "exist": ["post_api_v4_feature_flags_unleash_project_id_client_metric", "unleash_id"] }, "r": { "param": { "project_id": "unleash_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "feature_flags" }, { "lit": "unleash" }, { "var": "unleash_id" }, { "lit": "client" }, { "lit": "metrics" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /api/v4/feature_flags/unleash/{project_id}/client/register", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "unleash_id", "or": "project_id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "post_api_v4_feature_flags_unleash_project_id_client_register", "or": "post_api_v4_feature_flags_unleash_project_id_client_register", "r": true, "t": "`$OBJECT`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/v4/feature_flags/unleash/{project_id}/client/register", "q": { "exist": ["post_api_v4_feature_flags_unleash_project_id_client_register", "unleash_id"] }, "r": { "param": { "project_id": "unleash_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "feature_flags" }, { "lit": "unleash" }, { "var": "unleash_id" }, { "lit": "client" }, { "lit": "register" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/v4/feature_flags/unleash/{project_id}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "project_id", "or": "project_id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "app_name", "or": "app_name", "r": false, "t": "`$ANY`", "index$": 0 }, { "a": true, "k": "query", "n": "instance_id", "or": "instance_id", "r": false, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/api/v4/feature_flags/unleash/{project_id}", "q": { "exist": ["app_name", "instance_id", "project_id"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "feature_flags" }, { "lit": "unleash" }, { "var": "project_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /api/v4/projects/{id}/feature_flags/{feature_flag_name}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "feature_flag_name", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "DELETE", "o": "/api/v4/projects/{id}/feature_flags/{feature_flag_name}", "q": { "exist": ["id", "project_id"] }, "r": { "param": { "feature_flag_name": "id", "id": "project_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "feature_flags" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" } }, "relations": { "ancestors": [["$.main.kit.entity.project"]] }, "key$": "feature_flag", "name__orig": "feature_flag", "Name": "FeatureFlag", "name_": "feature_flag", "name-": "feature-flag", "NAME": "FEATURE_FLAG", "index$": 205 }, { "active": true, "entity": "feature_flag", "key$": "BasicFeatureFlagFlow", "kind": "basic", "name": "BasicFeatureFlagFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "feature_flag_ref01" }, "m": { "project_id": "project01", "unleash_id": "unleash01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "feature_flag_ref01", "srcdatavar": "feature_flag_ref01_data", "suffix": "_dt0" }, "m": { "id": "feature_flag01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-feature_flag_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "feature_flag_ref01", "suffix": "_rm0" }, "m": { "id": "feature_flag01", "project_id": "project01" }, "o": "remove", "s": [], "v": [], "index$": 2 }] }, 'FeatureFlag', { "POST /api/v4/feature_flags/unleash/{project_id}/client/metrics": { "protocol": "http", "parameters": [{ "in": "path", "name": "project_id", "description": "The ID of a project", "type": "string", "required": true, "index$": 0 }, { "name": "postApiV4FeatureFlagsUnleashProjectIdClientMetrics", "in": "body", "required": true, "schema": { "type": "object", "properties": { "instance_id": { "type": "string", "description": "The instance ID of Unleash Client" }, "app_name": { "type": "string", "description": "The application name of Unleash Client" } }, "x-ref": "#/definitions/postApiV4FeatureFlagsUnleashProjectIdClientMetrics" }, "index$": 1 }] }, "POST /api/v4/feature_flags/unleash/{project_id}/client/register": { "protocol": "http", "parameters": [{ "in": "path", "name": "project_id", "description": "The ID of a project", "type": "string", "required": true, "index$": 0 }, { "name": "postApiV4FeatureFlagsUnleashProjectIdClientRegister", "in": "body", "required": true, "schema": { "type": "object", "properties": { "instance_id": { "type": "string", "description": "The instance ID of Unleash Client" }, "app_name": { "type": "string", "description": "The application name of Unleash Client" } }, "x-ref": "#/definitions/postApiV4FeatureFlagsUnleashProjectIdClientRegister" }, "index$": 1 }] }, "GET /api/v4/feature_flags/unleash/{project_id}": { "protocol": "http", "parameters": [{ "in": "path", "name": "project_id", "description": "The ID of a project", "type": "string", "required": true, "index$": 0 }, { "in": "query", "name": "instance_id", "description": "The instance ID of Unleash Client", "type": "string", "required": false, "index$": 1 }, { "in": "query", "name": "app_name", "description": "The application name of Unleash Client", "type": "string", "required": false, "index$": 2 }] }, "DELETE /api/v4/projects/{id}/feature_flags/{feature_flag_name}": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project", "type": "string", "required": true, "index$": 0 }, { "in": "path", "name": "feature_flag_name", "description": "The name of the feature flag", "type": "string", "required": true, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const feature_flag_ref01_ent = client.FeatureFlag();
        let feature_flag_ref01_data = setup.data.new.feature_flag['feature_flag_ref01'];
        feature_flag_ref01_data['project_id'] = setup.idmap['project01'];
        feature_flag_ref01_data['unleash_id'] = setup.idmap['unleash01'];
        feature_flag_ref01_data = (await feature_flag_ref01_ent.create(feature_flag_ref01_data)).data();
        (0, node_assert_1.default)(null != feature_flag_ref01_data.id);
        // LOAD
        const feature_flag_ref01_match_dt0 = {};
        feature_flag_ref01_match_dt0.id = feature_flag_ref01_data.id;
        const feature_flag_ref01_data_dt0 = (await feature_flag_ref01_ent.load(feature_flag_ref01_match_dt0)).data();
        (0, node_assert_1.default)(feature_flag_ref01_data_dt0.id === feature_flag_ref01_data.id);
        // REMOVE
        const feature_flag_ref01_match_rm0 = { id: feature_flag_ref01_data.id };
        await feature_flag_ref01_ent.remove(feature_flag_ref01_match_rm0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/feature_flag/FeatureFlagTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['feature_flag01', 'feature_flag02', 'feature_flag03', 'project01', 'project02', 'project03', 'unleash01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_FEATURE_FLAG_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_FEATURE_FLAG_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_FEATURE_FLAG_ENTID'];
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
//# sourceMappingURL=FeatureFlagEntity.test.js.map