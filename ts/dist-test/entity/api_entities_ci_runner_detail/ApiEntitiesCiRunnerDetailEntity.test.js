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
(0, node_test_1.describe)('ApiEntitiesCiRunnerDetailEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.ApiEntitiesCiRunnerDetail();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'api_entities_ci_runner_detail.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "access_level": { "a": true, "h": "Access Level", "n": "access_level", "r": false, "t": "`$STRING`", "key$": "access_level", "index$": 0 }, "active": { "a": true, "h": "Active", "n": "active", "r": false, "t": "`$BOOLEAN`", "key$": "active", "index$": 1 }, "architecture": { "a": true, "h": "Architecture", "n": "architecture", "r": false, "t": "`$STRING`", "key$": "architecture", "index$": 2 }, "contacted_at": { "a": true, "h": "Contacted At", "n": "contacted_at", "r": false, "t": "`$STRING`", "key$": "contacted_at", "index$": 3 }, "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": false, "t": "`$STRING`", "key$": "created_at", "index$": 4 }, "created_by": { "a": true, "h": "Created By", "n": "created_by", "r": false, "sh": "API_Entities_UserBasic model", "t": "`$OBJECT`", "key$": "created_by", "index$": 5 }, "description": { "a": true, "h": "Description", "n": "description", "r": false, "t": "`$STRING`", "key$": "description", "index$": 6 }, "groups": { "a": true, "h": "Groups", "n": "groups", "r": false, "sh": "API_Entities_BasicGroupDetails model", "t": "`$OBJECT`", "key$": "groups", "index$": 7 }, "id": { "a": true, "fo": "int32", "h": "Id", "n": "id", "r": false, "t": "`$INTEGER`", "key$": "id", "index$": 8 }, "ip_address": { "a": true, "h": "Ip Address", "n": "ip_address", "r": false, "t": "`$STRING`", "key$": "ip_address", "index$": 9 }, "is_shared": { "a": true, "h": "Is Shared", "n": "is_shared", "r": false, "t": "`$BOOLEAN`", "key$": "is_shared", "index$": 10 }, "job_execution_status": { "a": true, "h": "Job Execution Status", "n": "job_execution_status", "r": false, "t": "`$STRING`", "key$": "job_execution_status", "index$": 11 }, "locked": { "a": true, "h": "Locked", "n": "locked", "r": false, "t": "`$BOOLEAN`", "key$": "locked", "index$": 12 }, "maintenance_note": { "a": true, "h": "Maintenance Note", "n": "maintenance_note", "r": false, "t": "`$STRING`", "key$": "maintenance_note", "index$": 13 }, "maximum_timeout": { "a": true, "h": "Maximum Timeout", "n": "maximum_timeout", "r": false, "t": "`$STRING`", "key$": "maximum_timeout", "index$": 14 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "t": "`$STRING`", "key$": "name", "index$": 15 }, "online": { "a": true, "h": "Online", "n": "online", "r": false, "t": "`$BOOLEAN`", "key$": "online", "index$": 16 }, "paused": { "a": true, "h": "Paused", "n": "paused", "r": false, "t": "`$BOOLEAN`", "key$": "paused", "index$": 17 }, "platform": { "a": true, "h": "Platform", "n": "platform", "r": false, "t": "`$STRING`", "key$": "platform", "index$": 18 }, "projects": { "a": true, "h": "Projects", "n": "projects", "r": false, "sh": "API_Entities_BasicProjectDetails model", "t": "`$OBJECT`", "key$": "projects", "index$": 19 }, "revision": { "a": true, "h": "Revision", "n": "revision", "r": false, "t": "`$STRING`", "key$": "revision", "index$": 20 }, "run_untagged": { "a": true, "h": "Run Untagged", "n": "run_untagged", "r": false, "t": "`$STRING`", "key$": "run_untagged", "index$": 21 }, "runner_type": { "a": true, "h": "Runner Type", "n": "runner_type", "r": false, "t": "`$STRING`", "key$": "runner_type", "index$": 22 }, "status": { "a": true, "h": "Status", "n": "status", "r": false, "t": "`$STRING`", "key$": "status", "index$": 23 }, "tag_list": { "a": true, "h": "Tag List", "n": "tag_list", "r": false, "t": "`$STRING`", "key$": "tag_list", "index$": 24 }, "version": { "a": true, "h": "Version", "n": "version", "r": false, "t": "`$STRING`", "key$": "version", "index$": 25 } }, "id": { "field": "id", "name": "id" }, "name": "api_entities_ci_runner_detail", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/v4/runners/{id}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/v4/runners/{id}", "q": { "exist": ["id"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "runners" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /api/v4/runners/{id}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "put_api_v4_runners_id", "or": "put_api_v4_runners_id", "r": true, "t": "`$OBJECT`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/api/v4/runners/{id}", "q": { "exist": ["id", "put_api_v4_runners_id"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "runners" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "api_entities_ci_runner_detail", "name__orig": "api_entities_ci_runner_detail", "Name": "ApiEntitiesCiRunnerDetail", "name_": "api_entities_ci_runner_detail", "name-": "api-entities-ci-runner-detail", "NAME": "API_ENTITIES_CI_RUNNER_DETAIL", "index$": 34 }, { "active": true, "entity": "api_entities_ci_runner_detail", "key$": "BasicApiEntitiesCiRunnerDetailFlow", "kind": "basic", "name": "BasicApiEntitiesCiRunnerDetailFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "api_entities_ci_runner_detail_ref01", "srcdatavar": "api_entities_ci_runner_detail_ref01_data", "suffix": "_up0", "textfield": "access_level" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-api_entities_ci_runner_detail_ref01" } }], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "api_entities_ci_runner_detail_ref01", "srcdatavar": "api_entities_ci_runner_detail_ref01_data", "suffix": "_dt0" }, "m": { "id": "api_entities_ci_runner_detail01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-api_entities_ci_runner_detail_ref01" } }], "index$": 1 }] }, 'ApiEntitiesCiRunnerDetail', { "GET /api/v4/runners/{id}": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID of a runner", "type": "integer", "format": "int32", "required": true, "index$": 0 }] }, "PUT /api/v4/runners/{id}": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID of a runner", "type": "integer", "format": "int32", "required": true, "index$": 0 }, { "name": "putApiV4RunnersId", "in": "body", "required": true, "schema": { "type": "object", "properties": { "description": { "type": "string", "description": "The description of the runner" }, "active": { "type": "boolean", "description": "Deprecated: Use `paused` instead. Flag indicating whether the runner is allowed to receive jobs" }, "paused": { "type": "boolean", "description": "Specifies if the runner should ignore new jobs" }, "tag_list": { "type": "array", "description": "The list of tags for a runner", "example": "['macos', 'shell']", "items": { "type": "string" } }, "run_untagged": { "type": "boolean", "description": "Specifies if the runner can execute untagged jobs" }, "locked": { "type": "boolean", "description": "Specifies if the runner is locked" }, "access_level": { "type": "string", "description": "The access level of the runner", "enum": ["not_protected", "ref_protected"] }, "maximum_timeout": { "type": "integer", "format": "int32", "description": "Maximum timeout that limits the amount of time (in seconds) that runners can run jobs" }, "maintenance_note": { "type": "string", "description": "Free-form maintenance notes for the runner (1024 characters)" } }, "description": "Update runner's details", "x-ref": "#/definitions/putApiV4RunnersId" }, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let api_entities_ci_runner_detail_ref01_data = Object.values(setup.data.existing.api_entities_ci_runner_detail)[0];
        // UPDATE
        const api_entities_ci_runner_detail_ref01_ent = client.ApiEntitiesCiRunnerDetail();
        const api_entities_ci_runner_detail_ref01_data_up0 = {};
        api_entities_ci_runner_detail_ref01_data_up0.id = api_entities_ci_runner_detail_ref01_data.id;
        const api_entities_ci_runner_detail_ref01_markdef_up0 = { name: 'access_level', value: 'Mark01-api_entities_ci_runner_detail_ref01_' + setup.now };
        api_entities_ci_runner_detail_ref01_data_up0[api_entities_ci_runner_detail_ref01_markdef_up0.name] = api_entities_ci_runner_detail_ref01_markdef_up0.value;
        const api_entities_ci_runner_detail_ref01_resdata_up0 = (await api_entities_ci_runner_detail_ref01_ent.update(api_entities_ci_runner_detail_ref01_data_up0)).data();
        (0, node_assert_1.default)(api_entities_ci_runner_detail_ref01_resdata_up0.id === api_entities_ci_runner_detail_ref01_data_up0.id);
        (0, node_assert_1.default)(api_entities_ci_runner_detail_ref01_resdata_up0[api_entities_ci_runner_detail_ref01_markdef_up0.name] === api_entities_ci_runner_detail_ref01_markdef_up0.value);
        // LOAD
        const api_entities_ci_runner_detail_ref01_match_dt0 = {};
        api_entities_ci_runner_detail_ref01_match_dt0.id = api_entities_ci_runner_detail_ref01_data.id;
        const api_entities_ci_runner_detail_ref01_data_dt0 = (await api_entities_ci_runner_detail_ref01_ent.load(api_entities_ci_runner_detail_ref01_match_dt0)).data();
        (0, node_assert_1.default)(api_entities_ci_runner_detail_ref01_data_dt0.id === api_entities_ci_runner_detail_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/api_entities_ci_runner_detail/ApiEntitiesCiRunnerDetailTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['api_entities_ci_runner_detail01', 'api_entities_ci_runner_detail02', 'api_entities_ci_runner_detail03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_API_ENTITIES_CI_RUNNER_DETAIL_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_API_ENTITIES_CI_RUNNER_DETAIL_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_API_ENTITIES_CI_RUNNER_DETAIL_ENTID'];
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
//# sourceMappingURL=ApiEntitiesCiRunnerDetailEntity.test.js.map