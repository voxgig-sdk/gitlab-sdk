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
(0, node_test_1.describe)('ApiEntitiesClustersAgentTokenBasicEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.ApiEntitiesClustersAgentTokenBasic();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'api_entities_clusters_agent_token_basic.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "agent_id": { "a": true, "h": "Agent Id", "n": "agent_id", "r": false, "t": "`$STRING`", "key$": "agent_id", "index$": 0 }, "created_at": { "a": true, "h": "Created At", "n": "created_at", "r": false, "t": "`$STRING`", "key$": "created_at", "index$": 1 }, "created_by_user_id": { "a": true, "h": "Created By User Id", "n": "created_by_user_id", "r": false, "t": "`$STRING`", "key$": "created_by_user_id", "index$": 2 }, "description": { "a": true, "h": "Description", "n": "description", "r": false, "t": "`$STRING`", "key$": "description", "index$": 3 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 4 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "t": "`$STRING`", "key$": "name", "index$": 5 }, "status": { "a": true, "h": "Status", "n": "status", "r": false, "t": "`$STRING`", "key$": "status", "index$": 6 } }, "id": { "field": "id", "name": "id" }, "name": "api_entities_clusters_agent_token_basic", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/v4/projects/{id}/cluster_agents/{agent_id}/tokens", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "cluster_agent_id", "or": "agent_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "ex": 20, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$INTEGER`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/api/v4/projects/{id}/cluster_agents/{agent_id}/tokens", "q": { "exist": ["cluster_agent_id", "page", "per_page", "project_id"] }, "r": { "param": { "agent_id": "cluster_agent_id", "id": "project_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "cluster_agents" }, { "var": "cluster_agent_id" }, { "lit": "tokens" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [["$.main.kit.entity.project", "$.main.kit.entity.cluster_agent"]] }, "key$": "api_entities_clusters_agent_token_basic", "name__orig": "api_entities_clusters_agent_token_basic", "Name": "ApiEntitiesClustersAgentTokenBasic", "name_": "api_entities_clusters_agent_token_basic", "name-": "api-entities-clusters-agent-token-basic", "NAME": "API_ENTITIES_CLUSTERS_AGENT_TOKEN_BASIC", "index$": 44 }, { "active": true, "entity": "api_entities_clusters_agent_token_basic", "key$": "BasicApiEntitiesClustersAgentTokenBasicFlow", "kind": "basic", "name": "BasicApiEntitiesClustersAgentTokenBasicFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "api_entities_clusters_agent_token_basic_ref01", "srcdatavar": "api_entities_clusters_agent_token_basic_ref01_data", "suffix": "_dt0" }, "m": { "id": "api_entities_clusters_agent_token_basic01", "project_id": "project01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-api_entities_clusters_agent_token_basic_ref01" } }], "index$": 0 }] }, 'ApiEntitiesClustersAgentTokenBasic', { "GET /api/v4/projects/{id}/cluster_agents/{agent_id}/tokens": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project", "type": "string", "required": true, "index$": 0 }, { "in": "path", "name": "agent_id", "description": "The ID of an agent", "type": "integer", "format": "int32", "required": true, "index$": 1 }, { "in": "query", "name": "page", "description": "Current page number", "type": "integer", "format": "int32", "default": 1, "required": false, "example": 1, "index$": 2 }, { "in": "query", "name": "per_page", "description": "Number of items per page", "type": "integer", "format": "int32", "default": 20, "required": false, "example": 20, "index$": 3 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let api_entities_clusters_agent_token_basic_ref01_data = Object.values(setup.data.existing.api_entities_clusters_agent_token_basic)[0];
        // LOAD
        const api_entities_clusters_agent_token_basic_ref01_ent = client.ApiEntitiesClustersAgentTokenBasic();
        const api_entities_clusters_agent_token_basic_ref01_match_dt0 = {};
        api_entities_clusters_agent_token_basic_ref01_match_dt0.id = api_entities_clusters_agent_token_basic_ref01_data.id;
        const api_entities_clusters_agent_token_basic_ref01_data_dt0 = (await api_entities_clusters_agent_token_basic_ref01_ent.load(api_entities_clusters_agent_token_basic_ref01_match_dt0)).data();
        (0, node_assert_1.default)(api_entities_clusters_agent_token_basic_ref01_data_dt0.id === api_entities_clusters_agent_token_basic_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/api_entities_clusters_agent_token_basic/ApiEntitiesClustersAgentTokenBasicTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['api_entities_clusters_agent_token_basic01', 'api_entities_clusters_agent_token_basic02', 'api_entities_clusters_agent_token_basic03', 'project01', 'project02', 'project03', 'cluster_agent01', 'cluster_agent02', 'cluster_agent03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_API_ENTITIES_CLUSTERS_AGENT_TOKEN_BASIC_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_API_ENTITIES_CLUSTERS_AGENT_TOKEN_BASIC_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_API_ENTITIES_CLUSTERS_AGENT_TOKEN_BASIC_ENTID'];
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
//# sourceMappingURL=ApiEntitiesClustersAgentTokenBasicEntity.test.js.map