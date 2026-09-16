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
(0, node_test_1.describe)('ApiEntitiesClustersAgentEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.ApiEntitiesClustersAgent();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['create', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'api_entities_clusters_agent.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "format": "date-time", "name": "created_at", "req": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "description", "req": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "format": "int32", "name": "id", "req": false, "type": "`$INTEGER`", "index$": 2 }, { "active": true, "name": "name", "req": false, "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "name_with_namespace", "req": false, "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "path", "req": false, "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "path_with_namespace", "req": false, "type": "`$STRING`", "index$": 6 }], "id": { "field": "id", "name": "id" }, "name": "api_entities_clusters_agent", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "project_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }], "query": [{ "active": true, "kind": "query", "name": "post_api_v4_projects_id_cluster_agent", "orig": "post_api_v4_projects_id_cluster_agent", "reqd": true, "type": "`$OBJECT`", "index$": 0 }] }, "contract": { "id": "POST /api/v4/projects/{id}/cluster_agents", "json": "{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4ProjectsIdClusterAgents\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"in\":\"body\",\"name\":\"postApiV4ProjectsIdClusterAgents\",\"required\":true,\"schema\":{\"description\":\"Register an agent with a project\",\"properties\":{\"name\":{\"description\":\"The name of the agent\",\"type\":\"string\"}},\"required\":[\"name\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"Register an agent with a project\",\"schema\":{\"description\":\"API_Entities_Clusters_Agent model\",\"properties\":{\"config_project\":{\"properties\":{\"created_at\":{\"example\":\"2020-05-07T04:27:17.016Z\",\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"example\":\"desc\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"name\":{\"example\":\"project1\",\"type\":\"string\"},\"name_with_namespace\":{\"example\":\"John Doe / project1\",\"type\":\"string\"},\"path\":{\"example\":\"project1\",\"type\":\"string\"},\"path_with_namespace\":{\"example\":\"namespace1/project1\",\"type\":\"string\"}},\"type\":\"object\"},\"created_at\":{\"type\":\"string\"},\"created_by_user_id\":{\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"is_receptive\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "POST", "orig": "/api/v4/projects/{id}/cluster_agents", "rename": { "param": { "id": "project_id" } }, "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "cluster_agents" }], "select": { "exist": ["post_api_v4_projects_id_cluster_agent", "project_id"] }, "transform": { "req": "`reqdata`", "res": "`body.config_project`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "project_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }], "query": [{ "active": true, "example": 1, "kind": "query", "name": "page", "orig": "page", "reqd": false, "type": "`$INTEGER`", "index$": 0 }, { "active": true, "example": 20, "kind": "query", "name": "per_page", "orig": "per_page", "reqd": false, "type": "`$INTEGER`", "index$": 1 }] }, "contract": { "id": "GET /api/v4/projects/{id}/cluster_agents", "json": "{\"operationId\":\"getApiV4ProjectsIdClusterAgents\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"default\":1,\"description\":\"Current page number\",\"example\":1,\"format\":\"int32\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"type\":\"integer\"},{\"default\":20,\"description\":\"Number of items per page\",\"example\":20,\"format\":\"int32\",\"in\":\"query\",\"name\":\"per_page\",\"required\":false,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"List the agents for a project\",\"schema\":{\"description\":\"API_Entities_Clusters_Agent model\",\"properties\":{\"config_project\":{\"properties\":{\"created_at\":{\"example\":\"2020-05-07T04:27:17.016Z\",\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"example\":\"desc\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"name\":{\"example\":\"project1\",\"type\":\"string\"},\"name_with_namespace\":{\"example\":\"John Doe / project1\",\"type\":\"string\"},\"path\":{\"example\":\"project1\",\"type\":\"string\"},\"path_with_namespace\":{\"example\":\"namespace1/project1\",\"type\":\"string\"}},\"type\":\"object\"},\"created_at\":{\"type\":\"string\"},\"created_by_user_id\":{\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"is_receptive\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/v4/projects/{id}/cluster_agents", "rename": { "param": { "id": "project_id" } }, "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "cluster_agents" }], "select": { "exist": ["page", "per_page", "project_id"] }, "transform": { "req": "`reqdata`", "res": "`body.config_project`" }, "index$": 0 }, { "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "agent_id", "orig": "agent_id", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "param", "name": "project_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 1 }] }, "contract": { "id": "GET /api/v4/projects/{id}/cluster_agents/{agent_id}", "json": "{\"operationId\":\"getApiV4ProjectsIdClusterAgentsAgentId\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The ID of an agent\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"agent_id\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get details about an agent\",\"schema\":{\"description\":\"API_Entities_Clusters_Agent model\",\"properties\":{\"config_project\":{\"properties\":{\"created_at\":{\"example\":\"2020-05-07T04:27:17.016Z\",\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"example\":\"desc\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"name\":{\"example\":\"project1\",\"type\":\"string\"},\"name_with_namespace\":{\"example\":\"John Doe / project1\",\"type\":\"string\"},\"path\":{\"example\":\"project1\",\"type\":\"string\"},\"path_with_namespace\":{\"example\":\"namespace1/project1\",\"type\":\"string\"}},\"type\":\"object\"},\"created_at\":{\"type\":\"string\"},\"created_by_user_id\":{\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"is_receptive\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/v4/projects/{id}/cluster_agents/{agent_id}", "rename": { "param": { "id": "project_id" } }, "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "cluster_agents" }, { "var": "agent_id" }], "select": { "exist": ["agent_id", "project_id"] }, "transform": { "req": "`reqdata`", "res": "`body.config_project`" }, "index$": 1 }], "key$": "load" } }, "relations": { "ancestors": [["project"], ["project", "cluster_agent"]] }, "key$": "api_entities_clusters_agent", "name__orig": "api_entities_clusters_agent", "Name": "ApiEntitiesClustersAgent", "name_": "api_entities_clusters_agent", "name-": "api-entities-clusters-agent", "NAME": "API_ENTITIES_CLUSTERS_AGENT", "index$": 42 }, { "active": true, "entity": "api_entities_clusters_agent", "key$": "BasicApiEntitiesClustersAgentFlow", "kind": "basic", "name": "BasicApiEntitiesClustersAgentFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "api_entities_clusters_agent_ref01" }, "match": { "project_id": "project01" }, "op": "create", "spec": [], "valid": [], "index$": 0 }, { "active": true, "data": {}, "input": { "ref": "api_entities_clusters_agent_ref01", "srcdatavar": "api_entities_clusters_agent_ref01_data", "suffix": "_dt0" }, "match": { "id": "api_entities_clusters_agent01", "project_id": "project01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-api_entities_clusters_agent_ref01" } }], "index$": 1 }] }, 'ApiEntitiesClustersAgent');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const api_entities_clusters_agent_ref01_ent = client.ApiEntitiesClustersAgent();
        let api_entities_clusters_agent_ref01_data = setup.data.new.api_entities_clusters_agent['api_entities_clusters_agent_ref01'];
        api_entities_clusters_agent_ref01_data['project_id'] = setup.idmap['project01'];
        api_entities_clusters_agent_ref01_data = (await api_entities_clusters_agent_ref01_ent.create(api_entities_clusters_agent_ref01_data)).data();
        (0, node_assert_1.default)(null != api_entities_clusters_agent_ref01_data.id);
        // LOAD
        const api_entities_clusters_agent_ref01_match_dt0 = {};
        api_entities_clusters_agent_ref01_match_dt0.id = api_entities_clusters_agent_ref01_data.id;
        const api_entities_clusters_agent_ref01_data_dt0 = (await api_entities_clusters_agent_ref01_ent.load(api_entities_clusters_agent_ref01_match_dt0)).data();
        (0, node_assert_1.default)(api_entities_clusters_agent_ref01_data_dt0.id === api_entities_clusters_agent_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/api_entities_clusters_agent/ApiEntitiesClustersAgentTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['api_entities_clusters_agent01', 'api_entities_clusters_agent02', 'api_entities_clusters_agent03', 'project01', 'project02', 'project03', 'project01', 'project02', 'project03', 'cluster_agent01', 'cluster_agent02', 'cluster_agent03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_API_ENTITIES_CLUSTERS_AGENT_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_API_ENTITIES_CLUSTERS_AGENT_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_API_ENTITIES_CLUSTERS_AGENT_ENTID'];
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
//# sourceMappingURL=ApiEntitiesClustersAgentEntity.test.js.map