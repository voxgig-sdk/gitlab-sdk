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
(0, node_test_1.describe)('ApiEntitiesCiBridgeEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.ApiEntitiesCiBridge();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'api_entities_ci_bridge.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "allow_failure": { "a": true, "h": "Allow Failure", "n": "allow_failure", "r": false, "t": "`$BOOLEAN`", "key$": "allow_failure", "index$": 0 }, "commit": { "a": true, "h": "Commit", "n": "commit", "r": false, "sh": "API_Entities_Commit model", "t": "`$OBJECT`", "key$": "commit", "index$": 1 }, "coverage": { "a": true, "fo": "float", "h": "Coverage", "n": "coverage", "r": false, "t": "`$NUMBER`", "key$": "coverage", "index$": 2 }, "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": false, "t": "`$STRING`", "key$": "created_at", "index$": 3 }, "downstream_pipeline": { "a": true, "h": "Downstream Pipeline", "n": "downstream_pipeline", "r": false, "sh": "API_Entities_Ci_PipelineBasic model", "t": "`$OBJECT`", "key$": "downstream_pipeline", "index$": 4 }, "duration": { "a": true, "fo": "float", "h": "Duration", "n": "duration", "r": false, "sh": "Time spent running", "t": "`$NUMBER`", "key$": "duration", "index$": 5 }, "erased_at": { "a": true, "fo": "date-time", "h": "Erased At", "n": "erased_at", "r": false, "t": "`$STRING`", "key$": "erased_at", "index$": 6 }, "failure_reason": { "a": true, "h": "Failure Reason", "n": "failure_reason", "r": false, "t": "`$STRING`", "key$": "failure_reason", "index$": 7 }, "finished_at": { "a": true, "fo": "date-time", "h": "Finished At", "n": "finished_at", "r": false, "t": "`$STRING`", "key$": "finished_at", "index$": 8 }, "id": { "a": true, "fo": "int32", "h": "Id", "n": "id", "r": false, "t": "`$INTEGER`", "key$": "id", "index$": 9 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "t": "`$STRING`", "key$": "name", "index$": 10 }, "pipeline": { "a": true, "h": "Pipeline", "n": "pipeline", "r": false, "sh": "API_Entities_Ci_PipelineBasic model", "t": "`$OBJECT`", "key$": "pipeline", "index$": 11 }, "project": { "a": true, "h": "Project", "n": "project", "r": false, "t": "`$OBJECT`", "key$": "project", "index$": 12 }, "queued_duration": { "a": true, "fo": "float", "h": "Queued Duration", "n": "queued_duration", "r": false, "sh": "Time spent enqueued", "t": "`$NUMBER`", "key$": "queued_duration", "index$": 13 }, "ref": { "a": true, "h": "Ref", "n": "ref", "r": false, "t": "`$STRING`", "key$": "ref", "index$": 14 }, "stage": { "a": true, "h": "Stage", "n": "stage", "r": false, "t": "`$STRING`", "key$": "stage", "index$": 15 }, "started_at": { "a": true, "fo": "date-time", "h": "Started At", "n": "started_at", "r": false, "t": "`$STRING`", "key$": "started_at", "index$": 16 }, "status": { "a": true, "h": "Status", "n": "status", "r": false, "t": "`$STRING`", "key$": "status", "index$": 17 }, "tag": { "a": true, "h": "Tag", "n": "tag", "r": false, "t": "`$BOOLEAN`", "key$": "tag", "index$": 18 }, "user": { "a": true, "h": "User", "n": "user", "r": false, "t": "`$OBJECT`", "key$": "user", "index$": 19 }, "web_url": { "a": true, "h": "Web Url", "n": "web_url", "r": false, "t": "`$STRING`", "key$": "web_url", "index$": 20 } }, "id": { "field": "id", "name": "id" }, "name": "api_entities_ci_bridge", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /api/v4/projects/{id}/pipelines/{pipeline_id}/bridges", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "ex": 18, "k": "param", "n": "pipeline_id", "or": "pipeline_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": 11, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "ex": 20, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$INTEGER`", "index$": 1 }, { "a": true, "ex": ["pending", "running"], "k": "query", "n": "scope", "or": "scope", "r": false, "t": "`$ANY`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/api/v4/projects/{id}/pipelines/{pipeline_id}/bridges", "q": { "exist": ["page", "per_page", "pipeline_id", "project_id", "scope"] }, "r": { "param": { "id": "project_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "pipelines" }, { "var": "pipeline_id" }, { "lit": "bridges" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [["$.main.kit.entity.project"]] }, "key$": "api_entities_ci_bridge", "name__orig": "api_entities_ci_bridge", "Name": "ApiEntitiesCiBridge", "name_": "api_entities_ci_bridge", "name-": "api-entities-ci-bridge", "NAME": "API_ENTITIES_CI_BRIDGE", "index$": 21 }, { "active": true, "entity": "api_entities_ci_bridge", "key$": "BasicApiEntitiesCiBridgeFlow", "kind": "basic", "name": "BasicApiEntitiesCiBridgeFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "pipeline_id": "pipeline01", "project_id": "project01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "api_entities_ci_bridge_ref01" } }], "index$": 0 }] }, 'ApiEntitiesCiBridge', { "GET /api/v4/projects/{id}/pipelines/{pipeline_id}/bridges": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The project ID or URL-encoded path", "type": "string", "required": true, "example": 11, "index$": 0 }, { "in": "path", "name": "pipeline_id", "description": "The pipeline ID", "type": "integer", "format": "int32", "required": true, "example": 18, "index$": 1 }, { "in": "query", "name": "scope", "description": "The scope of builds to show", "type": "string", "enum": ["created", "waiting_for_resource", "preparing", "waiting_for_callback", "pending", "running", "success", "failed", "canceling", "canceled", "skipped", "manual", "scheduled"], "required": false, "example": ["pending", "running"], "index$": 2 }, { "in": "query", "name": "page", "description": "Current page number", "type": "integer", "format": "int32", "default": 1, "required": false, "example": 1, "index$": 3 }, { "in": "query", "name": "per_page", "description": "Number of items per page", "type": "integer", "format": "int32", "default": 20, "required": false, "example": 20, "index$": 4 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let api_entities_ci_bridge_ref01_data = Object.values(setup.data.existing.api_entities_ci_bridge)[0];
        // LIST
        const api_entities_ci_bridge_ref01_ent = client.ApiEntitiesCiBridge();
        const api_entities_ci_bridge_ref01_match = {};
        api_entities_ci_bridge_ref01_match['pipeline_id'] = setup.idmap['pipeline01'];
        api_entities_ci_bridge_ref01_match['project_id'] = setup.idmap['project01'];
        const api_entities_ci_bridge_ref01_list = (await api_entities_ci_bridge_ref01_ent.list(api_entities_ci_bridge_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/api_entities_ci_bridge/ApiEntitiesCiBridgeTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['api_entities_ci_bridge01', 'api_entities_ci_bridge02', 'api_entities_ci_bridge03', 'project01', 'project02', 'project03', 'pipeline01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_API_ENTITIES_CI_BRIDGE_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_API_ENTITIES_CI_BRIDGE_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_API_ENTITIES_CI_BRIDGE_ENTID'];
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
//# sourceMappingURL=ApiEntitiesCiBridgeEntity.test.js.map