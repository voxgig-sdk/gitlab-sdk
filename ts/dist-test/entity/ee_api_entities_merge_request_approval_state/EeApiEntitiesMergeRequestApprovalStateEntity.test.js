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
(0, node_test_1.describe)('EeApiEntitiesMergeRequestApprovalStateEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.EeApiEntitiesMergeRequestApprovalState();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'ee_api_entities_merge_request_approval_state.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "approvals_required": { "a": true, "fo": "int32", "h": "Approvals Required", "n": "approvals_required", "r": false, "t": "`$INTEGER`", "key$": "approvals_required", "index$": 0 }, "approved": { "a": true, "h": "Approved", "n": "approved", "r": false, "t": "`$BOOLEAN`", "key$": "approved", "index$": 1 }, "approved_by": { "a": true, "h": "Approved By", "n": "approved_by", "r": false, "t": "`$ARRAY`", "key$": "approved_by", "index$": 2 }, "code_owner": { "a": true, "h": "Code Owner", "n": "code_owner", "r": false, "t": "`$BOOLEAN`", "key$": "code_owner", "index$": 3 }, "contains_hidden_groups": { "a": true, "h": "Contains Hidden Groups", "n": "contains_hidden_groups", "r": false, "t": "`$BOOLEAN`", "key$": "contains_hidden_groups", "index$": 4 }, "eligible_approvers": { "a": true, "h": "Eligible Approvers", "n": "eligible_approvers", "r": false, "t": "`$ARRAY`", "key$": "eligible_approvers", "index$": 5 }, "groups": { "a": true, "h": "Groups", "n": "groups", "r": false, "t": "`$ARRAY`", "key$": "groups", "index$": 6 }, "id": { "a": true, "fo": "int32", "h": "Id", "n": "id", "r": false, "t": "`$INTEGER`", "key$": "id", "index$": 7 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "t": "`$STRING`", "key$": "name", "index$": 8 }, "overridden": { "a": true, "h": "Overridden", "n": "overridden", "r": false, "t": "`$BOOLEAN`", "key$": "overridden", "index$": 9 }, "report_type": { "a": true, "h": "Report Type", "n": "report_type", "r": false, "t": "`$STRING`", "key$": "report_type", "index$": 10 }, "rule_type": { "a": true, "h": "Rule Type", "n": "rule_type", "r": false, "t": "`$STRING`", "key$": "rule_type", "index$": 11 }, "section": { "a": true, "h": "Section", "n": "section", "r": false, "t": "`$STRING`", "key$": "section", "index$": 12 }, "source_rule": { "a": true, "h": "Source Rule", "n": "source_rule", "r": false, "t": "`$OBJECT`", "key$": "source_rule", "index$": 13 }, "users": { "a": true, "h": "Users", "n": "users", "r": false, "t": "`$ARRAY`", "key$": "users", "index$": 14 } }, "id": { "field": "id", "name": "id" }, "name": "ee_api_entities_merge_request_approval_state", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /api/v4/projects/{id}/merge_requests/{merge_request_iid}/approval_state", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "merge_request_id", "or": "merge_request_iid", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/api/v4/projects/{id}/merge_requests/{merge_request_iid}/approval_state", "q": { "exist": ["merge_request_id", "project_id"] }, "r": { "param": { "id": "project_id", "merge_request_iid": "merge_request_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "merge_requests" }, { "var": "merge_request_id" }, { "lit": "approval_state" }], "t": { "req": "`reqdata`", "res": "`body.rules`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [["$.main.kit.entity.project", "$.main.kit.entity.merge_request"]] }, "key$": "ee_api_entities_merge_request_approval_state", "name__orig": "ee_api_entities_merge_request_approval_state", "Name": "EeApiEntitiesMergeRequestApprovalState", "name_": "ee_api_entities_merge_request_approval_state", "name-": "ee-api-entities-merge-request-approval-state", "NAME": "EE_API_ENTITIES_MERGE_REQUEST_APPROVAL_STATE", "index$": 200 }, { "active": true, "entity": "ee_api_entities_merge_request_approval_state", "key$": "BasicEeApiEntitiesMergeRequestApprovalStateFlow", "kind": "basic", "name": "BasicEeApiEntitiesMergeRequestApprovalStateFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "merge_request_id": "merge_request01", "project_id": "project01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "ee_api_entities_merge_request_approval_state_ref01" } }], "index$": 0 }] }, 'EeApiEntitiesMergeRequestApprovalState', { "GET /api/v4/projects/{id}/merge_requests/{merge_request_iid}/approval_state": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project", "type": "string", "required": true, "index$": 0 }, { "in": "path", "name": "merge_request_iid", "description": "The IID of a merge request", "type": "integer", "format": "int32", "required": true, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let ee_api_entities_merge_request_approval_state_ref01_data = Object.values(setup.data.existing.ee_api_entities_merge_request_approval_state)[0];
        // LIST
        const ee_api_entities_merge_request_approval_state_ref01_ent = client.EeApiEntitiesMergeRequestApprovalState();
        const ee_api_entities_merge_request_approval_state_ref01_match = {};
        ee_api_entities_merge_request_approval_state_ref01_match['merge_request_id'] = setup.idmap['merge_request01'];
        ee_api_entities_merge_request_approval_state_ref01_match['project_id'] = setup.idmap['project01'];
        const ee_api_entities_merge_request_approval_state_ref01_list = (await ee_api_entities_merge_request_approval_state_ref01_ent.list(ee_api_entities_merge_request_approval_state_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/ee_api_entities_merge_request_approval_state/EeApiEntitiesMergeRequestApprovalStateTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['ee_api_entities_merge_request_approval_state01', 'ee_api_entities_merge_request_approval_state02', 'ee_api_entities_merge_request_approval_state03', 'project01', 'project02', 'project03', 'merge_request01', 'merge_request02', 'merge_request03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_EE_API_ENTITIES_MERGE_REQUEST_APPROVAL_STATE_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_EE_API_ENTITIES_MERGE_REQUEST_APPROVAL_STATE_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_EE_API_ENTITIES_MERGE_REQUEST_APPROVAL_STATE_ENTID'];
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
//# sourceMappingURL=EeApiEntitiesMergeRequestApprovalStateEntity.test.js.map