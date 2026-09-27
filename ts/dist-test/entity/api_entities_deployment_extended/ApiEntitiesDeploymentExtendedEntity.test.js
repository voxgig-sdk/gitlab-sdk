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
(0, node_test_1.describe)('ApiEntitiesDeploymentExtendedEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.ApiEntitiesDeploymentExtended();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['create', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'api_entities_deployment_extended.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "approval_summary": { "a": true, "h": "Approval Summary", "n": "approval_summary", "r": false, "t": "`$OBJECT`", "key$": "approval_summary", "index$": 0 }, "approvals": { "a": true, "h": "Approvals", "n": "approvals", "r": false, "sh": "API_Entities_Deployments_Approval model", "t": "`$OBJECT`", "key$": "approvals", "index$": 1 }, "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": false, "t": "`$STRING`", "key$": "created_at", "index$": 2 }, "deployable": { "a": true, "h": "Deployable", "n": "deployable", "r": false, "sh": "API_Entities_Ci_Job model", "t": "`$OBJECT`", "key$": "deployable", "index$": 3 }, "environment": { "a": true, "h": "Environment", "n": "environment", "r": false, "sh": "API_Entities_EnvironmentBasic model", "t": "`$OBJECT`", "key$": "environment", "index$": 4 }, "id": { "a": true, "fo": "int32", "h": "Id", "n": "id", "r": false, "t": "`$INTEGER`", "key$": "id", "index$": 5 }, "iid": { "a": true, "fo": "int32", "h": "Iid", "n": "iid", "r": false, "t": "`$INTEGER`", "key$": "iid", "index$": 6 }, "pending_approval_count": { "a": true, "fo": "int32", "h": "Pending Approval Count", "n": "pending_approval_count", "r": false, "t": "`$INTEGER`", "key$": "pending_approval_count", "index$": 7 }, "ref": { "a": true, "h": "Ref", "n": "ref", "r": false, "t": "`$STRING`", "key$": "ref", "index$": 8 }, "sha": { "a": true, "h": "Sha", "n": "sha", "r": false, "t": "`$STRING`", "key$": "sha", "index$": 9 }, "status": { "a": true, "h": "Status", "n": "status", "r": false, "t": "`$STRING`", "key$": "status", "index$": 10 }, "updated_at": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updated_at", "r": false, "t": "`$STRING`", "key$": "updated_at", "index$": 11 }, "user": { "a": true, "h": "User", "n": "user", "r": false, "sh": "API_Entities_UserBasic model", "t": "`$OBJECT`", "key$": "user", "index$": 12 } }, "id": { "field": "id", "name": "id" }, "name": "api_entities_deployment_extended", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /api/v4/projects/{id}/deployments", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "post_api_v4_projects_id_deployment", "or": "post_api_v4_projects_id_deployment", "r": true, "t": "`$OBJECT`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/v4/projects/{id}/deployments", "q": { "exist": ["post_api_v4_projects_id_deployment", "project_id"] }, "r": { "param": { "id": "project_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "deployments" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/v4/projects/{id}/deployments/{deployment_id}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "deployment_id", "or": "deployment_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/api/v4/projects/{id}/deployments/{deployment_id}", "q": { "exist": ["deployment_id", "project_id"] }, "r": { "param": { "id": "project_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "deployments" }, { "var": "deployment_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /api/v4/projects/{id}/deployments/{deployment_id}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "deployment_id", "or": "deployment_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "k": "query", "n": "put_api_v4_projects_id_deployments_deployment_id", "or": "put_api_v4_projects_id_deployments_deployment_id", "r": true, "t": "`$OBJECT`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/api/v4/projects/{id}/deployments/{deployment_id}", "q": { "exist": ["deployment_id", "project_id", "put_api_v4_projects_id_deployments_deployment_id"] }, "r": { "param": { "id": "project_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "deployments" }, { "var": "deployment_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.project"], ["$.main.kit.entity.project", "$.main.kit.entity.deployment"]] }, "key$": "api_entities_deployment_extended", "name__orig": "api_entities_deployment_extended", "Name": "ApiEntitiesDeploymentExtended", "name_": "api_entities_deployment_extended", "name-": "api-entities-deployment-extended", "NAME": "API_ENTITIES_DEPLOYMENT_EXTENDED", "index$": 62 }, { "active": true, "entity": "api_entities_deployment_extended", "key$": "BasicApiEntitiesDeploymentExtendedFlow", "kind": "basic", "name": "BasicApiEntitiesDeploymentExtendedFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "api_entities_deployment_extended_ref01" }, "m": { "project_id": "project01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": { "project_id": "project01" }, "i": { "ref": "api_entities_deployment_extended_ref01", "srcdatavar": "api_entities_deployment_extended_ref01_data", "suffix": "_up0", "textfield": "created_at" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-api_entities_deployment_extended_ref01" } }], "v": [], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "api_entities_deployment_extended_ref01", "srcdatavar": "api_entities_deployment_extended_ref01_data", "suffix": "_dt0" }, "m": { "id": "api_entities_deployment_extended01", "project_id": "project01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-api_entities_deployment_extended_ref01" } }], "index$": 2 }] }, 'ApiEntitiesDeploymentExtended', { "POST /api/v4/projects/{id}/deployments": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project owned by the authenticated user", "type": "string", "required": true, "index$": 0 }, { "name": "postApiV4ProjectsIdDeployments", "in": "body", "required": true, "schema": { "type": "object", "properties": { "environment": { "type": "string", "description": "The name of the environment to create the deployment for" }, "sha": { "type": "string", "description": "The SHA of the commit that is deployed" }, "ref": { "type": "string", "description": "The name of the branch or tag that is deployed" }, "tag": { "type": "boolean", "description": "A boolean that indicates if the deployed ref is a tag (`true`) or not (`false`)" }, "status": { "type": "string", "description": "The status of the deployment that is created. One of `running`, `success`, `failed`, or `canceled`", "enum": ["running", "success", "failed", "canceled"] } }, "required": ["environment", "sha", "ref", "tag", "status"], "description": "Create a deployment", "x-ref": "#/definitions/postApiV4ProjectsIdDeployments" }, "index$": 1 }] }, "GET /api/v4/projects/{id}/deployments/{deployment_id}": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project owned by the authenticated user", "type": "string", "required": true, "index$": 0 }, { "in": "path", "name": "deployment_id", "description": "The ID of the deployment", "type": "integer", "format": "int32", "required": true, "index$": 1 }] }, "PUT /api/v4/projects/{id}/deployments/{deployment_id}": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project owned by the authenticated user", "type": "string", "required": true, "index$": 0 }, { "in": "path", "name": "deployment_id", "type": "integer", "format": "int32", "required": true, "index$": 1 }, { "name": "putApiV4ProjectsIdDeploymentsDeploymentId", "in": "body", "required": true, "schema": { "type": "object", "properties": { "status": { "type": "string", "description": "The new status of the deployment. One of `running`, `success`, `failed`, or `canceled`", "enum": ["running", "success", "failed", "canceled"] } }, "required": ["status"], "description": "Update a deployment", "x-ref": "#/definitions/putApiV4ProjectsIdDeploymentsDeploymentId" }, "index$": 2 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const api_entities_deployment_extended_ref01_ent = client.ApiEntitiesDeploymentExtended();
        let api_entities_deployment_extended_ref01_data = setup.data.new.api_entities_deployment_extended['api_entities_deployment_extended_ref01'];
        api_entities_deployment_extended_ref01_data['project_id'] = setup.idmap['project01'];
        api_entities_deployment_extended_ref01_data = (await api_entities_deployment_extended_ref01_ent.create(api_entities_deployment_extended_ref01_data)).data();
        (0, node_assert_1.default)(null != api_entities_deployment_extended_ref01_data.id);
        // UPDATE
        const api_entities_deployment_extended_ref01_data_up0 = {};
        api_entities_deployment_extended_ref01_data_up0.id = api_entities_deployment_extended_ref01_data.id;
        api_entities_deployment_extended_ref01_data_up0['project_id'] = setup.idmap['project_id'];
        const api_entities_deployment_extended_ref01_markdef_up0 = { name: 'created_at', value: 'Mark01-api_entities_deployment_extended_ref01_' + setup.now };
        api_entities_deployment_extended_ref01_data_up0[api_entities_deployment_extended_ref01_markdef_up0.name] = api_entities_deployment_extended_ref01_markdef_up0.value;
        const api_entities_deployment_extended_ref01_resdata_up0 = (await api_entities_deployment_extended_ref01_ent.update(api_entities_deployment_extended_ref01_data_up0)).data();
        (0, node_assert_1.default)(api_entities_deployment_extended_ref01_resdata_up0.id === api_entities_deployment_extended_ref01_data_up0.id);
        (0, node_assert_1.default)(api_entities_deployment_extended_ref01_resdata_up0[api_entities_deployment_extended_ref01_markdef_up0.name] === api_entities_deployment_extended_ref01_markdef_up0.value);
        // LOAD
        const api_entities_deployment_extended_ref01_match_dt0 = {};
        api_entities_deployment_extended_ref01_match_dt0.id = api_entities_deployment_extended_ref01_data.id;
        const api_entities_deployment_extended_ref01_data_dt0 = (await api_entities_deployment_extended_ref01_ent.load(api_entities_deployment_extended_ref01_match_dt0)).data();
        (0, node_assert_1.default)(api_entities_deployment_extended_ref01_data_dt0.id === api_entities_deployment_extended_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/api_entities_deployment_extended/ApiEntitiesDeploymentExtendedTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['api_entities_deployment_extended01', 'api_entities_deployment_extended02', 'api_entities_deployment_extended03', 'project01', 'project02', 'project03', 'deployment01', 'deployment02', 'deployment03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_API_ENTITIES_DEPLOYMENT_EXTENDED_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_API_ENTITIES_DEPLOYMENT_EXTENDED_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_API_ENTITIES_DEPLOYMENT_EXTENDED_ENTID'];
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
//# sourceMappingURL=ApiEntitiesDeploymentExtendedEntity.test.js.map