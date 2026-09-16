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
(0, node_test_1.describe)('ApiEntitiesApplicationStatisticEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.ApiEntitiesApplicationStatistic();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'api_entities_application_statistic.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "format": "int32", "name": "active_users", "req": false, "short": "Number of active users", "type": "`$INTEGER`", "index$": 0 }, { "active": true, "format": "int32", "name": "forks", "req": false, "short": "Approximate number of repo forks", "type": "`$INTEGER`", "index$": 1 }, { "active": true, "format": "int32", "name": "groups", "req": false, "short": "Approximate number of projects", "type": "`$INTEGER`", "index$": 2 }, { "active": true, "format": "int32", "name": "issues", "req": false, "short": "Approximate number of issues", "type": "`$INTEGER`", "index$": 3 }, { "active": true, "format": "int32", "name": "merge_requests", "req": false, "short": "Approximate number of merge requests", "type": "`$INTEGER`", "index$": 4 }, { "active": true, "format": "int32", "name": "milestones", "req": false, "short": "Approximate number of milestones", "type": "`$INTEGER`", "index$": 5 }, { "active": true, "format": "int32", "name": "notes", "req": false, "short": "Approximate number of notes", "type": "`$INTEGER`", "index$": 6 }, { "active": true, "format": "int32", "name": "projects", "req": false, "short": "Approximate number of projects", "type": "`$INTEGER`", "index$": 7 }, { "active": true, "format": "int32", "name": "snippets", "req": false, "short": "Approximate number of snippets", "type": "`$INTEGER`", "index$": 8 }, { "active": true, "format": "int32", "name": "ssh_keys", "req": false, "short": "Approximate number of SSH keys", "type": "`$INTEGER`", "index$": 9 }, { "active": true, "format": "int32", "name": "users", "req": false, "short": "Approximate number of users", "type": "`$INTEGER`", "index$": 10 }], "name": "api_entities_application_statistic", "op": { "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": {}, "contract": { "id": "GET /api/v4/application/statistics", "json": "{\"operationId\":\"getApiV4ApplicationStatistics\",\"parameters\":[],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get the current application statistics\",\"schema\":{\"description\":\"API_Entities_ApplicationStatistics model\",\"properties\":{\"active_users\":{\"description\":\"Number of active users\",\"example\":21,\"format\":\"int32\",\"type\":\"integer\"},\"forks\":{\"description\":\"Approximate number of repo forks\",\"example\":6,\"format\":\"int32\",\"type\":\"integer\"},\"groups\":{\"description\":\"Approximate number of projects\",\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"issues\":{\"description\":\"Approximate number of issues\",\"example\":121,\"format\":\"int32\",\"type\":\"integer\"},\"merge_requests\":{\"description\":\"Approximate number of merge requests\",\"example\":49,\"format\":\"int32\",\"type\":\"integer\"},\"milestones\":{\"description\":\"Approximate number of milestones\",\"example\":3,\"format\":\"int32\",\"type\":\"integer\"},\"notes\":{\"description\":\"Approximate number of notes\",\"example\":6,\"format\":\"int32\",\"type\":\"integer\"},\"projects\":{\"description\":\"Approximate number of projects\",\"example\":4,\"format\":\"int32\",\"type\":\"integer\"},\"snippets\":{\"description\":\"Approximate number of snippets\",\"example\":4,\"format\":\"int32\",\"type\":\"integer\"},\"ssh_keys\":{\"description\":\"Approximate number of SSH keys\",\"example\":11,\"format\":\"int32\",\"type\":\"integer\"},\"users\":{\"description\":\"Approximate number of users\",\"example\":22,\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"}}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/v4/application/statistics", "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "application" }, { "lit": "statistics" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "api_entities_application_statistic", "name__orig": "api_entities_application_statistic", "Name": "ApiEntitiesApplicationStatistic", "name_": "api_entities_application_statistic", "name-": "api-entities-application-statistic", "NAME": "API_ENTITIES_APPLICATION_STATISTIC", "index$": 5 }, { "active": true, "entity": "api_entities_application_statistic", "key$": "BasicApiEntitiesApplicationStatisticFlow", "kind": "basic", "name": "BasicApiEntitiesApplicationStatisticFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "api_entities_application_statistic_ref01", "srcdatavar": "api_entities_application_statistic_ref01_data", "suffix": "_dt0" }, "match": {}, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-api_entities_application_statistic_ref01" } }], "index$": 0 }] }, 'ApiEntitiesApplicationStatistic');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let api_entities_application_statistic_ref01_data = Object.values(setup.data.existing.api_entities_application_statistic)[0];
        // LOAD
        const api_entities_application_statistic_ref01_ent = client.ApiEntitiesApplicationStatistic();
        const api_entities_application_statistic_ref01_match_dt0 = {};
        const api_entities_application_statistic_ref01_data_dt0 = (await api_entities_application_statistic_ref01_ent.load(api_entities_application_statistic_ref01_match_dt0)).data();
        (0, node_assert_1.default)(null != api_entities_application_statistic_ref01_data_dt0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/api_entities_application_statistic/ApiEntitiesApplicationStatisticTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['api_entities_application_statistic01', 'api_entities_application_statistic02', 'api_entities_application_statistic03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_API_ENTITIES_APPLICATION_STATISTIC_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_API_ENTITIES_APPLICATION_STATISTIC_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_API_ENTITIES_APPLICATION_STATISTIC_ENTID'];
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
//# sourceMappingURL=ApiEntitiesApplicationStatisticEntity.test.js.map