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
(0, node_test_1.describe)('UsageDataEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.UsageData();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['create', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'usage_data.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [], "name": "usage_data", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": { "query": [{ "active": true, "kind": "query", "name": "post_api_v4_usage_data_increment_counter", "orig": "post_api_v4_usage_data_increment_counter", "reqd": true, "type": "`$OBJECT`", "index$": 0 }] }, "contract": { "id": "POST /api/v4/usage_data/increment_counter", "json": "{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4UsageDataIncrementCounter\",\"parameters\":[{\"in\":\"body\",\"name\":\"postApiV4UsageDataIncrementCounter\",\"required\":true,\"schema\":{\"description\":\"Track usage data event\",\"properties\":{\"event\":{\"description\":\"The event name that should be tracked\",\"example\":\"i_quickactions_page\",\"type\":\"string\"}},\"required\":[\"event\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Track usage data event\"},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "POST", "orig": "/api/v4/usage_data/increment_counter", "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "usage_data" }, { "lit": "increment_counter" }], "select": { "$action": "increment_counter", "exist": ["post_api_v4_usage_data_increment_counter"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "active": true, "args": { "query": [{ "active": true, "kind": "query", "name": "post_api_v4_usage_data_increment_unique_user", "orig": "post_api_v4_usage_data_increment_unique_user", "reqd": true, "type": "`$OBJECT`", "index$": 0 }] }, "contract": { "id": "POST /api/v4/usage_data/increment_unique_users", "json": "{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4UsageDataIncrementUniqueUsers\",\"parameters\":[{\"in\":\"body\",\"name\":\"postApiV4UsageDataIncrementUniqueUsers\",\"required\":true,\"schema\":{\"description\":\"Track usage data event for the current user\",\"properties\":{\"event\":{\"description\":\"The event name that should be tracked\",\"example\":\"i_quickactions_page\",\"type\":\"string\"}},\"required\":[\"event\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Track usage data event for the current user\"},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "POST", "orig": "/api/v4/usage_data/increment_unique_users", "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "usage_data" }, { "lit": "increment_unique_users" }], "select": { "$action": "increment_unique_user", "exist": ["post_api_v4_usage_data_increment_unique_user"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "active": true, "args": { "query": [{ "active": true, "kind": "query", "name": "post_api_v4_usage_data_track_event", "orig": "post_api_v4_usage_data_track_event", "reqd": true, "type": "`$OBJECT`", "index$": 0 }] }, "contract": { "id": "POST /api/v4/usage_data/track_event", "json": "{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4UsageDataTrackEvent\",\"parameters\":[{\"in\":\"body\",\"name\":\"postApiV4UsageDataTrackEvent\",\"required\":true,\"schema\":{\"description\":\"Track gitlab internal events\",\"properties\":{\"additional_properties\":{\"description\":\"Additional properties to be tracked\",\"example\":{\"label\":\"login_button\",\"value\":1},\"type\":\"object\"},\"event\":{\"description\":\"The event name that should be tracked\",\"example\":\"i_quickactions_page\",\"type\":\"string\"},\"namespace_id\":{\"description\":\"Namespace ID\",\"example\":1234,\"format\":\"int32\",\"type\":\"integer\"},\"project_id\":{\"description\":\"Project ID\",\"example\":1234,\"format\":\"int32\",\"type\":\"integer\"},\"send_to_snowplow\":{\"default\":false,\"description\":\"Send the tracked event to Snowplow\",\"example\":true,\"type\":\"boolean\"}},\"required\":[\"event\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Track gitlab internal events\"},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "POST", "orig": "/api/v4/usage_data/track_event", "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "usage_data" }, { "lit": "track_event" }], "select": { "$action": "track_event", "exist": ["post_api_v4_usage_data_track_event"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }, { "active": true, "args": { "query": [{ "active": true, "kind": "query", "name": "post_api_v4_usage_data_track_event", "orig": "post_api_v4_usage_data_track_event", "reqd": true, "type": "`$OBJECT`", "index$": 0 }] }, "contract": { "id": "POST /api/v4/usage_data/track_events", "json": "{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4UsageDataTrackEvents\",\"parameters\":[{\"in\":\"body\",\"name\":\"postApiV4UsageDataTrackEvents\",\"required\":true,\"schema\":{\"description\":\"Track multiple gitlab internal events\",\"properties\":{\"events\":{\"description\":\"An array of internal events. Maximum 50 events allowed.\",\"items\":{\"properties\":{\"additional_properties\":{\"description\":\"Additional properties to be tracked\",\"example\":{\"label\":\"login_button\",\"value\":1},\"type\":\"object\"},\"event\":{\"description\":\"The event name that should be tracked\",\"example\":\"i_quickactions_page\",\"type\":\"string\"},\"namespace_id\":{\"description\":\"Namespace ID\",\"example\":1234,\"format\":\"int32\",\"type\":\"integer\"},\"project_id\":{\"description\":\"Project ID\",\"example\":1234,\"format\":\"int32\",\"type\":\"integer\"},\"send_to_snowplow\":{\"default\":false,\"description\":\"Send the tracked event to Snowplow\",\"example\":true,\"type\":\"boolean\"}},\"required\":[\"event\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"events\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Track multiple gitlab internal events\"},\"400\":{\"description\":\"Validation error\"},\"401\":{\"description\":\"Unauthorized\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "POST", "orig": "/api/v4/usage_data/track_events", "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "usage_data" }, { "lit": "track_events" }], "select": { "$action": "track_event", "exist": ["post_api_v4_usage_data_track_event"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 3 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "query": [{ "active": true, "example": true, "kind": "query", "name": "include_path", "orig": "include_path", "reqd": false, "type": "`$ANY`", "index$": 0 }] }, "contract": { "id": "GET /api/v4/usage_data/metric_definitions", "json": "{\"operationId\":\"getApiV4UsageDataMetricDefinitions\",\"parameters\":[{\"default\":false,\"description\":\"Include file paths in the metric definitions\",\"example\":true,\"in\":\"query\",\"name\":\"include_paths\",\"required\":false,\"type\":\"boolean\"}],\"produces\":[\"application/yaml\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get a list of all metric definitions\"},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/v4/usage_data/metric_definitions", "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "usage_data" }, { "lit": "metric_definitions" }], "select": { "$action": "metric_definition", "exist": ["include_path"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "active": true, "args": {}, "contract": { "id": "GET /api/v4/usage_data/non_sql_metrics", "json": "{\"operationId\":\"getApiV4UsageDataNonSqlMetrics\",\"parameters\":[],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get Non SQL usage ping metrics\"},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/v4/usage_data/non_sql_metrics", "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "usage_data" }, { "lit": "non_sql_metrics" }], "select": { "$action": "non_sql_metric" }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "active": true, "args": {}, "contract": { "id": "GET /api/v4/usage_data/queries", "json": "{\"operationId\":\"getApiV4UsageDataQueries\",\"parameters\":[],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get raw SQL queries for usage data SQL metrics\"},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/v4/usage_data/queries", "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "usage_data" }, { "lit": "queries" }], "select": { "$action": "query" }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }, { "active": true, "args": {}, "contract": { "id": "GET /api/v4/usage_data/service_ping", "json": "{\"operationId\":\"getApiV4UsageDataServicePing\",\"parameters\":[],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get the latest ServicePing payload\"},\"401\":{\"description\":\"401 Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/v4/usage_data/service_ping", "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "usage_data" }, { "lit": "service_ping" }], "select": { "$action": "service_ping" }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 3 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "usage_data", "name__orig": "usage_data", "Name": "UsageData", "name_": "usage_data", "name-": "usage-data", "NAME": "USAGE_DATA", "index$": 272 }, { "active": true, "entity": "usage_data", "key$": "BasicUsageDataFlow", "kind": "basic", "name": "BasicUsageDataFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "usage_data_ref01" }, "match": {}, "op": "create", "spec": [], "valid": [], "index$": 0 }, { "active": true, "data": {}, "input": { "ref": "usage_data_ref01", "srcdatavar": "usage_data_ref01_data", "suffix": "_dt0" }, "match": {}, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-usage_data_ref01" } }], "index$": 1 }] }, 'UsageData');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const usage_data_ref01_ent = client.UsageData();
        let usage_data_ref01_data = setup.data.new.usage_data['usage_data_ref01'];
        usage_data_ref01_data = (await usage_data_ref01_ent.create(usage_data_ref01_data)).data();
        (0, node_assert_1.default)(null != usage_data_ref01_data);
        // LOAD
        const usage_data_ref01_match_dt0 = {};
        const usage_data_ref01_data_dt0 = (await usage_data_ref01_ent.load(usage_data_ref01_match_dt0)).data();
        (0, node_assert_1.default)(null != usage_data_ref01_data_dt0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/usage_data/UsageDataTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['usage_data01', 'usage_data02', 'usage_data03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_USAGE_DATA_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_USAGE_DATA_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_USAGE_DATA_ENTID'];
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
//# sourceMappingURL=UsageDataEntity.test.js.map