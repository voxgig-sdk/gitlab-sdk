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
(0, node_test_1.describe)('ApiEntitiesGitlabSubscriptionEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.ApiEntitiesGitlabSubscription();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'api_entities_gitlab_subscription.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "billing", "req": false, "type": "`$OBJECT`", "index$": 0 }, { "active": true, "name": "plan", "req": false, "type": "`$OBJECT`", "index$": 1 }, { "active": true, "name": "usage", "req": false, "type": "`$OBJECT`", "index$": 2 }], "name": "api_entities_gitlab_subscription", "op": { "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "namespace_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /api/v4/namespaces/{id}/gitlab_subscription", "json": "{\"operationId\":\"getApiV4NamespacesIdGitlabSubscription\",\"parameters\":[{\"format\":\"int32\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Returns the subscription for the namespace\",\"schema\":{\"description\":\"API_Entities_GitlabSubscription model\",\"properties\":{\"billing\":{\"properties\":{\"subscription_end_date\":{\"type\":\"string\"},\"subscription_start_date\":{\"type\":\"string\"},\"trial_ends_on\":{\"type\":\"string\"}},\"type\":\"object\"},\"plan\":{\"properties\":{\"auto_renew\":{\"type\":\"string\"},\"code\":{\"type\":\"string\"},\"exclude_guests\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"trial\":{\"type\":\"string\"},\"upgradable\":{\"type\":\"string\"}},\"type\":\"object\"},\"usage\":{\"properties\":{\"max_seats_used\":{\"type\":\"string\"},\"seats_in_subscription\":{\"type\":\"string\"},\"seats_in_use\":{\"type\":\"string\"},\"seats_owed\":{\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/v4/namespaces/{id}/gitlab_subscription", "rename": { "param": { "id": "namespace_id" } }, "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "namespaces" }, { "var": "namespace_id" }, { "lit": "gitlab_subscription" }], "select": { "exist": ["namespace_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [["namespace"]] }, "key$": "api_entities_gitlab_subscription", "name__orig": "api_entities_gitlab_subscription", "Name": "ApiEntitiesGitlabSubscription", "name_": "api_entities_gitlab_subscription", "name-": "api-entities-gitlab-subscription", "NAME": "API_ENTITIES_GITLAB_SUBSCRIPTION", "index$": 77 }, { "active": true, "entity": "api_entities_gitlab_subscription", "key$": "BasicApiEntitiesGitlabSubscriptionFlow", "kind": "basic", "name": "BasicApiEntitiesGitlabSubscriptionFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "api_entities_gitlab_subscription_ref01", "srcdatavar": "api_entities_gitlab_subscription_ref01_data", "suffix": "_dt0" }, "match": { "id": "api_entities_gitlab_subscription01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-api_entities_gitlab_subscription_ref01" } }], "index$": 0 }] }, 'ApiEntitiesGitlabSubscription');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let api_entities_gitlab_subscription_ref01_data = Object.values(setup.data.existing.api_entities_gitlab_subscription)[0];
        // LOAD: skipped — no entity id field and load requires path params.
        // Entity-var is declared here so later flow steps still compile.
        const api_entities_gitlab_subscription_ref01_ent = client.ApiEntitiesGitlabSubscription();
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/api_entities_gitlab_subscription/ApiEntitiesGitlabSubscriptionTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['api_entities_gitlab_subscription01', 'api_entities_gitlab_subscription02', 'api_entities_gitlab_subscription03', 'namespace01', 'namespace02', 'namespace03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_API_ENTITIES_GITLAB_SUBSCRIPTION_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_API_ENTITIES_GITLAB_SUBSCRIPTION_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_API_ENTITIES_GITLAB_SUBSCRIPTION_ENTID'];
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
//# sourceMappingURL=ApiEntitiesGitlabSubscriptionEntity.test.js.map