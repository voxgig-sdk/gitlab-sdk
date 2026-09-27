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
(0, node_test_1.describe)('ApiEntitiesClusterGroupEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.ApiEntitiesClusterGroup();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['create', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'api_entities_cluster_group.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "cluster_type": { "a": true, "h": "Cluster Type", "n": "cluster_type", "r": false, "t": "`$STRING`", "key$": "cluster_type", "index$": 0 }, "created_at": { "a": true, "h": "Created At", "n": "created_at", "r": false, "t": "`$STRING`", "key$": "created_at", "index$": 1 }, "domain": { "a": true, "h": "Domain", "n": "domain", "r": false, "t": "`$STRING`", "key$": "domain", "index$": 2 }, "enabled": { "a": true, "h": "Enabled", "n": "enabled", "r": false, "t": "`$BOOLEAN`", "key$": "enabled", "index$": 3 }, "environment_scope": { "a": true, "h": "Environment Scope", "n": "environment_scope", "r": false, "t": "`$STRING`", "key$": "environment_scope", "index$": 4 }, "group": { "a": true, "h": "Group", "n": "group", "r": false, "sh": "API_Entities_BasicGroupDetails model", "t": "`$OBJECT`", "key$": "group", "index$": 5 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 6 }, "managed": { "a": true, "h": "Managed", "n": "managed", "r": false, "t": "`$STRING`", "key$": "managed", "index$": 7 }, "management_project": { "a": true, "h": "Management Project", "n": "management_project", "r": false, "t": "`$OBJECT`", "key$": "management_project", "index$": 8 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "t": "`$STRING`", "key$": "name", "index$": 9 }, "namespace_per_environment": { "a": true, "h": "Namespace Per Environment", "n": "namespace_per_environment", "r": false, "t": "`$STRING`", "key$": "namespace_per_environment", "index$": 10 }, "platform_kubernetes": { "a": true, "h": "Platform Kubernetes", "n": "platform_kubernetes", "r": false, "t": "`$OBJECT`", "key$": "platform_kubernetes", "index$": 11 }, "platform_type": { "a": true, "h": "Platform Type", "n": "platform_type", "r": false, "t": "`$STRING`", "key$": "platform_type", "index$": 12 }, "provider_gcp": { "a": true, "h": "Provider Gcp", "n": "provider_gcp", "r": false, "t": "`$OBJECT`", "key$": "provider_gcp", "index$": 13 }, "provider_type": { "a": true, "h": "Provider Type", "n": "provider_type", "r": false, "t": "`$STRING`", "key$": "provider_type", "index$": 14 }, "user": { "a": true, "h": "User", "n": "user", "r": false, "sh": "API_Entities_UserBasic model", "t": "`$OBJECT`", "key$": "user", "index$": 15 } }, "id": { "field": "id", "name": "id" }, "name": "api_entities_cluster_group", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /api/v4/groups/{id}/clusters/user", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "group_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "post_api_v4_groups_id_clusters_user", "or": "post_api_v4_groups_id_clusters_user", "r": true, "t": "`$OBJECT`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/v4/groups/{id}/clusters/user", "q": { "exist": ["group_id", "post_api_v4_groups_id_clusters_user"] }, "r": { "param": { "id": "group_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "groups" }, { "var": "group_id" }, { "lit": "clusters" }, { "lit": "user" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/v4/groups/{id}/clusters/{cluster_id}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "cluster_id", "or": "cluster_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "group_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/api/v4/groups/{id}/clusters/{cluster_id}", "q": { "exist": ["cluster_id", "group_id"] }, "r": { "param": { "id": "group_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "groups" }, { "var": "group_id" }, { "lit": "clusters" }, { "var": "cluster_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /api/v4/groups/{id}/clusters/{cluster_id}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "cluster_id", "or": "cluster_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "group_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "k": "query", "n": "put_api_v4_groups_id_clusters_cluster_id", "or": "put_api_v4_groups_id_clusters_cluster_id", "r": true, "t": "`$OBJECT`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/api/v4/groups/{id}/clusters/{cluster_id}", "q": { "exist": ["cluster_id", "group_id", "put_api_v4_groups_id_clusters_cluster_id"] }, "r": { "param": { "id": "group_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "groups" }, { "var": "group_id" }, { "lit": "clusters" }, { "var": "cluster_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.group"], ["$.main.kit.entity.group", "$.main.kit.entity.cluster"]] }, "key$": "api_entities_cluster_group", "name__orig": "api_entities_cluster_group", "Name": "ApiEntitiesClusterGroup", "name_": "api_entities_cluster_group", "name-": "api-entities-cluster-group", "NAME": "API_ENTITIES_CLUSTER_GROUP", "index$": 40 }, { "active": true, "entity": "api_entities_cluster_group", "key$": "BasicApiEntitiesClusterGroupFlow", "kind": "basic", "name": "BasicApiEntitiesClusterGroupFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "api_entities_cluster_group_ref01" }, "m": { "group_id": "group01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": { "group_id": "group01" }, "i": { "ref": "api_entities_cluster_group_ref01", "srcdatavar": "api_entities_cluster_group_ref01_data", "suffix": "_up0", "textfield": "cluster_type" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-api_entities_cluster_group_ref01" } }], "v": [], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "api_entities_cluster_group_ref01", "srcdatavar": "api_entities_cluster_group_ref01_data", "suffix": "_dt0" }, "m": { "group_id": "group01", "id": "api_entities_cluster_group01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-api_entities_cluster_group_ref01" } }], "index$": 2 }] }, 'ApiEntitiesClusterGroup', { "POST /api/v4/groups/{id}/clusters/user": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID of the group", "type": "string", "required": true, "index$": 0 }, { "name": "postApiV4GroupsIdClustersUser", "in": "body", "required": true, "schema": { "type": "object", "properties": { "name": { "type": "string", "description": "Cluster name" }, "enabled": { "type": "boolean", "description": "Determines if cluster is active or not, defaults to true", "default": true }, "environment_scope": { "type": "string", "description": "The associated environment to the cluster", "default": "*" }, "namespace_per_environment": { "type": "boolean", "description": "Deploy each environment to a separate Kubernetes namespace", "default": true }, "domain": { "type": "string", "description": "Cluster base domain" }, "management_project_id": { "type": "integer", "format": "int32", "description": "The ID of the management project" }, "managed": { "type": "boolean", "description": "Determines if GitLab will manage namespaces and service accounts for this cluster, defaults to true", "default": true }, "platform_kubernetes_attributes": { "type": "object", "description": "Platform Kubernetes data", "properties": { "api_url": { "type": "string", "description": "URL to access the Kubernetes API" }, "token": { "type": "string", "description": "Token to authenticate against Kubernetes" }, "ca_cert": { "type": "string", "description": "TLS certificate (needed if API is using a self-signed TLS certificate)" }, "namespace": { "type": "string", "description": "Unique namespace related to Group" }, "authorization_type": { "type": "string", "description": "Cluster authorization type, defaults to RBAC", "enum": ["unknown_authorization", "rbac", "abac"], "default": "rbac" } }, "required": ["api_url", "token"] } }, "required": ["name", "platform_kubernetes_attributes"], "description": "Add existing cluster to group", "x-ref": "#/definitions/postApiV4GroupsIdClustersUser" }, "index$": 1 }] }, "GET /api/v4/groups/{id}/clusters/{cluster_id}": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID of the group", "type": "string", "required": true, "index$": 0 }, { "in": "path", "name": "cluster_id", "description": "The cluster ID", "type": "integer", "format": "int32", "required": true, "index$": 1 }] }, "PUT /api/v4/groups/{id}/clusters/{cluster_id}": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID of the group", "type": "string", "required": true, "index$": 0 }, { "in": "path", "name": "cluster_id", "description": "The cluster ID", "type": "integer", "format": "int32", "required": true, "index$": 1 }, { "name": "putApiV4GroupsIdClustersClusterId", "in": "body", "required": true, "schema": { "type": "object", "properties": { "name": { "type": "string", "description": "Cluster name" }, "enabled": { "type": "boolean", "description": "Determines if cluster is active or not" }, "domain": { "type": "string", "description": "Cluster base domain" }, "environment_scope": { "type": "string", "description": "The associated environment to the cluster" }, "namespace_per_environment": { "type": "boolean", "description": "Deploy each environment to a separate Kubernetes namespace", "default": true }, "management_project_id": { "type": "integer", "format": "int32", "description": "The ID of the management project" }, "managed": { "type": "boolean", "description": "Determines if GitLab will manage namespaces and service accounts for this cluster" }, "platform_kubernetes_attributes": { "type": "object", "description": "Platform Kubernetes data", "properties": { "api_url": { "type": "string", "description": "URL to access the Kubernetes API" }, "token": { "type": "string", "description": "Token to authenticate against Kubernetes" }, "ca_cert": { "type": "string", "description": "TLS certificate (needed if API is using a self-signed TLS certificate)" }, "namespace": { "type": "string", "description": "Unique namespace related to Group" } } } }, "description": "Edit group cluster", "x-ref": "#/definitions/putApiV4GroupsIdClustersClusterId" }, "index$": 2 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const api_entities_cluster_group_ref01_ent = client.ApiEntitiesClusterGroup();
        let api_entities_cluster_group_ref01_data = setup.data.new.api_entities_cluster_group['api_entities_cluster_group_ref01'];
        api_entities_cluster_group_ref01_data['group_id'] = setup.idmap['group01'];
        api_entities_cluster_group_ref01_data = (await api_entities_cluster_group_ref01_ent.create(api_entities_cluster_group_ref01_data)).data();
        (0, node_assert_1.default)(null != api_entities_cluster_group_ref01_data.id);
        // UPDATE
        const api_entities_cluster_group_ref01_data_up0 = {};
        api_entities_cluster_group_ref01_data_up0.id = api_entities_cluster_group_ref01_data.id;
        api_entities_cluster_group_ref01_data_up0['group_id'] = setup.idmap['group_id'];
        const api_entities_cluster_group_ref01_markdef_up0 = { name: 'cluster_type', value: 'Mark01-api_entities_cluster_group_ref01_' + setup.now };
        api_entities_cluster_group_ref01_data_up0[api_entities_cluster_group_ref01_markdef_up0.name] = api_entities_cluster_group_ref01_markdef_up0.value;
        const api_entities_cluster_group_ref01_resdata_up0 = (await api_entities_cluster_group_ref01_ent.update(api_entities_cluster_group_ref01_data_up0)).data();
        (0, node_assert_1.default)(api_entities_cluster_group_ref01_resdata_up0.id === api_entities_cluster_group_ref01_data_up0.id);
        (0, node_assert_1.default)(api_entities_cluster_group_ref01_resdata_up0[api_entities_cluster_group_ref01_markdef_up0.name] === api_entities_cluster_group_ref01_markdef_up0.value);
        // LOAD
        const api_entities_cluster_group_ref01_match_dt0 = {};
        api_entities_cluster_group_ref01_match_dt0.id = api_entities_cluster_group_ref01_data.id;
        const api_entities_cluster_group_ref01_data_dt0 = (await api_entities_cluster_group_ref01_ent.load(api_entities_cluster_group_ref01_match_dt0)).data();
        (0, node_assert_1.default)(api_entities_cluster_group_ref01_data_dt0.id === api_entities_cluster_group_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/api_entities_cluster_group/ApiEntitiesClusterGroupTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['api_entities_cluster_group01', 'api_entities_cluster_group02', 'api_entities_cluster_group03', 'group01', 'group02', 'group03', 'cluster01', 'cluster02', 'cluster03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_API_ENTITIES_CLUSTER_GROUP_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_API_ENTITIES_CLUSTER_GROUP_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_API_ENTITIES_CLUSTER_GROUP_ENTID'];
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
//# sourceMappingURL=ApiEntitiesClusterGroupEntity.test.js.map