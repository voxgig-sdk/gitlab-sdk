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
(0, node_test_1.describe)('ApiEntitiesDeploymentEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.ApiEntitiesDeployment();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'api_entities_deployment.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": false, "t": "`$STRING`", "key$": "created_at", "index$": 0 }, "deployable": { "a": true, "h": "Deployable", "n": "deployable", "r": false, "sh": "API_Entities_Ci_Job model", "t": "`$OBJECT`", "key$": "deployable", "index$": 1 }, "environment": { "a": true, "h": "Environment", "n": "environment", "r": false, "sh": "API_Entities_EnvironmentBasic model", "t": "`$OBJECT`", "key$": "environment", "index$": 2 }, "id": { "a": true, "fo": "int32", "h": "Id", "n": "id", "r": false, "t": "`$INTEGER`", "key$": "id", "index$": 3 }, "iid": { "a": true, "fo": "int32", "h": "Iid", "n": "iid", "r": false, "t": "`$INTEGER`", "key$": "iid", "index$": 4 }, "ref": { "a": true, "h": "Ref", "n": "ref", "r": false, "t": "`$STRING`", "key$": "ref", "index$": 5 }, "sha": { "a": true, "h": "Sha", "n": "sha", "r": false, "t": "`$STRING`", "key$": "sha", "index$": 6 }, "status": { "a": true, "h": "Status", "n": "status", "r": false, "t": "`$STRING`", "key$": "status", "index$": 7 }, "updated_at": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updated_at", "r": false, "t": "`$STRING`", "key$": "updated_at", "index$": 8 }, "user": { "a": true, "h": "User", "n": "user", "r": false, "sh": "API_Entities_UserBasic model", "t": "`$OBJECT`", "key$": "user", "index$": 9 } }, "id": { "field": "id", "name": "id" }, "name": "api_entities_deployment", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /api/v4/projects/{id}/deployments", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "environment", "or": "environment", "r": false, "t": "`$ANY`", "index$": 0 }, { "a": true, "k": "query", "n": "finished_after", "or": "finished_after", "r": false, "t": "`$ANY`", "index$": 1 }, { "a": true, "k": "query", "n": "finished_before", "or": "finished_before", "r": false, "t": "`$ANY`", "index$": 2 }, { "a": true, "k": "query", "n": "order_by", "or": "order_by", "r": false, "t": "`$ANY`", "index$": 3 }, { "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 4 }, { "a": true, "ex": 20, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$INTEGER`", "index$": 5 }, { "a": true, "k": "query", "n": "sort", "or": "sort", "r": false, "t": "`$ANY`", "index$": 6 }, { "a": true, "k": "query", "n": "status", "or": "status", "r": false, "t": "`$ANY`", "index$": 7 }, { "a": true, "k": "query", "n": "updated_after", "or": "updated_after", "r": false, "t": "`$ANY`", "index$": 8 }, { "a": true, "k": "query", "n": "updated_before", "or": "updated_before", "r": false, "t": "`$ANY`", "index$": 9 }] }, "k": "http", "m": "GET", "o": "/api/v4/projects/{id}/deployments", "q": { "exist": ["environment", "finished_after", "finished_before", "order_by", "page", "per_page", "project_id", "sort", "status", "updated_after", "updated_before"] }, "r": { "param": { "id": "project_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "deployments" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [["$.main.kit.entity.project"]] }, "key$": "api_entities_deployment", "name__orig": "api_entities_deployment", "Name": "ApiEntitiesDeployment", "name_": "api_entities_deployment", "name-": "api-entities-deployment", "NAME": "API_ENTITIES_DEPLOYMENT", "index$": 61 }, { "active": true, "entity": "api_entities_deployment", "key$": "BasicApiEntitiesDeploymentFlow", "kind": "basic", "name": "BasicApiEntitiesDeploymentFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "project_id": "project01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "api_entities_deployment_ref01" } }], "index$": 0 }] }, 'ApiEntitiesDeployment', { "GET /api/v4/projects/{id}/deployments": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project owned by the authenticated user", "type": "string", "required": true, "index$": 0 }, { "in": "query", "name": "page", "description": "Current page number", "type": "integer", "format": "int32", "default": 1, "required": false, "example": 1, "index$": 1 }, { "in": "query", "name": "per_page", "description": "Number of items per page", "type": "integer", "format": "int32", "default": 20, "required": false, "example": 20, "index$": 2 }, { "in": "query", "name": "order_by", "description": "Return deployments ordered by either one of `id`, `iid`, `created_at`, `updated_at` or `ref` fields. Default is `id`", "type": "string", "default": "id", "enum": ["id", "iid", "created_at", "updated_at", "finished_at"], "required": false, "index$": 3 }, { "in": "query", "name": "sort", "description": "Return deployments sorted in `asc` or `desc` order. Default is `asc`", "type": "string", "default": "asc", "enum": ["asc", "desc"], "required": false, "index$": 4 }, { "in": "query", "name": "updated_after", "description": "Return deployments updated after the specified date. Expected in ISO 8601 format (`2019-03-15T08:00:00Z`)", "type": "string", "format": "date-time", "required": false, "index$": 5 }, { "in": "query", "name": "updated_before", "description": "Return deployments updated before the specified date. Expected in ISO 8601 format (`2019-03-15T08:00:00Z`)", "type": "string", "format": "date-time", "required": false, "index$": 6 }, { "in": "query", "name": "finished_after", "description": "Return deployments finished after the specified date. Expected in ISO 8601 format (`2019-03-15T08:00:00Z`)", "type": "string", "format": "date-time", "required": false, "index$": 7 }, { "in": "query", "name": "finished_before", "description": "Return deployments finished before the specified date. Expected in ISO 8601 format (`2019-03-15T08:00:00Z`)", "type": "string", "format": "date-time", "required": false, "index$": 8 }, { "in": "query", "name": "environment", "description": "The name of the environment to filter deployments by", "type": "string", "required": false, "index$": 9 }, { "in": "query", "name": "status", "description": "The status to filter deployments by. One of `created`, `running`, `success`, `failed`, `canceled`, or `blocked`", "type": "string", "enum": ["created", "running", "success", "failed", "canceled", "skipped", "blocked"], "required": false, "index$": 10 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let api_entities_deployment_ref01_data = Object.values(setup.data.existing.api_entities_deployment)[0];
        // LIST
        const api_entities_deployment_ref01_ent = client.ApiEntitiesDeployment();
        const api_entities_deployment_ref01_match = {};
        api_entities_deployment_ref01_match['project_id'] = setup.idmap['project01'];
        const api_entities_deployment_ref01_list = (await api_entities_deployment_ref01_ent.list(api_entities_deployment_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/api_entities_deployment/ApiEntitiesDeploymentTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['api_entities_deployment01', 'api_entities_deployment02', 'api_entities_deployment03', 'project01', 'project02', 'project03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_API_ENTITIES_DEPLOYMENT_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_API_ENTITIES_DEPLOYMENT_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_API_ENTITIES_DEPLOYMENT_ENTID'];
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
//# sourceMappingURL=ApiEntitiesDeploymentEntity.test.js.map