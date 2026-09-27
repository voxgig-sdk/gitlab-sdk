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
(0, node_test_1.describe)('IssuesStatisticEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.IssuesStatistic();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'issues_statistic.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": {}, "name": "issues_statistic", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/v4/issues_statistics", "source": "swagger2", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "assignee_id", "or": "assignee_id", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "assignee_username", "or": "assignee_username", "r": false, "t": "`$ANY`", "index$": 1 }, { "a": true, "k": "query", "n": "author_id", "or": "author_id", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "query", "n": "author_username", "or": "author_username", "r": false, "t": "`$ANY`", "index$": 3 }, { "a": true, "k": "query", "n": "confidential", "or": "confidential", "r": false, "t": "`$ANY`", "index$": 4 }, { "a": true, "k": "query", "n": "created_after", "or": "created_after", "r": false, "t": "`$ANY`", "index$": 5 }, { "a": true, "k": "query", "n": "created_before", "or": "created_before", "r": false, "t": "`$ANY`", "index$": 6 }, { "a": true, "k": "query", "n": "epic_id", "or": "epic_id", "r": false, "t": "`$STRING`", "index$": 7 }, { "a": true, "k": "query", "n": "health_status", "or": "health_status", "r": false, "t": "`$ANY`", "index$": 8 }, { "a": true, "k": "query", "n": "iid", "or": "iid", "r": false, "t": "`$ANY`", "index$": 9 }, { "a": true, "k": "query", "n": "in", "or": "in", "r": false, "t": "`$ANY`", "index$": 10 }, { "a": true, "k": "query", "n": "iteration_id", "or": "iteration_id", "r": false, "t": "`$STRING`", "index$": 11 }, { "a": true, "k": "query", "n": "iteration_title", "or": "iteration_title", "r": false, "t": "`$ANY`", "index$": 12 }, { "a": true, "k": "query", "n": "label", "or": "label", "r": false, "t": "`$STRING`", "index$": 13 }, { "a": true, "k": "query", "n": "milestone", "or": "milestone", "r": false, "t": "`$ANY`", "index$": 14 }, { "a": true, "k": "query", "n": "milestone_id", "or": "milestone_id", "r": false, "t": "`$STRING`", "index$": 15 }, { "a": true, "k": "query", "n": "my_reaction_emoji", "or": "my_reaction_emoji", "r": false, "t": "`$ANY`", "index$": 16 }, { "a": true, "k": "query", "n": "not_assignee_id", "or": "not_assignee_id", "r": false, "t": "`$STRING`", "index$": 17 }, { "a": true, "k": "query", "n": "not_assignee_username", "or": "not_assignee_username", "r": false, "t": "`$ANY`", "index$": 18 }, { "a": true, "k": "query", "n": "not_author_id", "or": "not_author_id", "r": false, "t": "`$STRING`", "index$": 19 }, { "a": true, "k": "query", "n": "not_author_username", "or": "not_author_username", "r": false, "t": "`$ANY`", "index$": 20 }, { "a": true, "k": "query", "n": "not_iid", "or": "not_iid", "r": false, "t": "`$ANY`", "index$": 21 }, { "a": true, "k": "query", "n": "not_iteration_id", "or": "not_iteration_id", "r": false, "t": "`$STRING`", "index$": 22 }, { "a": true, "k": "query", "n": "not_iteration_title", "or": "not_iteration_title", "r": false, "t": "`$ANY`", "index$": 23 }, { "a": true, "k": "query", "n": "not_label", "or": "not_label", "r": false, "t": "`$ANY`", "index$": 24 }, { "a": true, "k": "query", "n": "not_milestone", "or": "not_milestone", "r": false, "t": "`$ANY`", "index$": 25 }, { "a": true, "k": "query", "n": "not_milestone_id", "or": "not_milestone_id", "r": false, "t": "`$STRING`", "index$": 26 }, { "a": true, "k": "query", "n": "not_weight", "or": "not_weight", "r": false, "t": "`$ANY`", "index$": 27 }, { "a": true, "k": "query", "n": "scope", "or": "scope", "r": false, "t": "`$ANY`", "index$": 28 }, { "a": true, "k": "query", "n": "search", "or": "search", "r": false, "t": "`$ANY`", "index$": 29 }, { "a": true, "k": "query", "n": "updated_after", "or": "updated_after", "r": false, "t": "`$ANY`", "index$": 30 }, { "a": true, "k": "query", "n": "updated_before", "or": "updated_before", "r": false, "t": "`$ANY`", "index$": 31 }, { "a": true, "k": "query", "n": "weight", "or": "weight", "r": false, "t": "`$NUMBER`", "index$": 32 }] }, "k": "http", "m": "GET", "o": "/api/v4/issues_statistics", "q": { "exist": ["assignee_id", "assignee_username", "author_id", "author_username", "confidential", "created_after", "created_before", "epic_id", "health_status", "iid", "in", "iteration_id", "iteration_title", "label", "milestone", "milestone_id", "my_reaction_emoji", "not_assignee_id", "not_assignee_username", "not_author_id", "not_author_username", "not_iid", "not_iteration_id", "not_iteration_title", "not_label", "not_milestone", "not_milestone_id", "not_weight", "scope", "search", "updated_after", "updated_before", "weight"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "issues_statistics" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "issues_statistic", "name__orig": "issues_statistic", "Name": "IssuesStatistic", "name_": "issues_statistic", "name-": "issues-statistic", "NAME": "ISSUES_STATISTIC", "index$": 221 }, { "active": true, "entity": "issues_statistic", "key$": "BasicIssuesStatisticFlow", "kind": "basic", "name": "BasicIssuesStatisticFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "issues_statistic_ref01", "srcdatavar": "issues_statistic_ref01_data", "suffix": "_dt0" }, "m": {}, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-issues_statistic_ref01" } }], "index$": 0 }] }, 'IssuesStatistic', { "GET /api/v4/issues_statistics": { "protocol": "http", "parameters": [{ "in": "query", "name": "labels", "description": "Comma-separated list of label names", "type": "array", "items": { "type": "string" }, "required": false, "index$": 0 }, { "in": "query", "name": "milestone", "description": "Milestone title", "type": "string", "required": false, "index$": 1 }, { "in": "query", "name": "milestone_id", "description": "Return issues assigned to milestones with the specified timebox value (\"Any\", \"None\", \"Upcoming\" or \"Started\")", "type": "string", "enum": ["Any", "None", "Upcoming", "Started"], "required": false, "index$": 2 }, { "in": "query", "name": "iids", "description": "The IID array of issues", "type": "array", "items": { "type": "integer", "format": "int32" }, "required": false, "index$": 3 }, { "in": "query", "name": "search", "description": "Search issues for text present in the title, description, or any combination of these", "type": "string", "required": false, "index$": 4 }, { "in": "query", "name": "in", "description": "`title`, `description`, or a string joining them with comma", "type": "string", "required": false, "index$": 5 }, { "in": "query", "name": "author_id", "description": "Return issues which are authored by the user with the given ID", "type": "integer", "format": "int32", "required": false, "index$": 6 }, { "in": "query", "name": "author_username", "description": "Return issues which are authored by the user with the given username", "type": "string", "required": false, "index$": 7 }, { "in": "query", "name": "assignee_id", "description": "Return issues which are assigned to the user with the given ID", "type": "integer", "format": "int32", "required": false, "index$": 8 }, { "in": "query", "name": "assignee_username", "description": "Return issues which are assigned to the user with the given username", "type": "array", "items": { "type": "string" }, "required": false, "index$": 9 }, { "in": "query", "name": "created_after", "description": "Return issues created after the specified time", "type": "string", "format": "date-time", "required": false, "index$": 10 }, { "in": "query", "name": "created_before", "description": "Return issues created before the specified time", "type": "string", "format": "date-time", "required": false, "index$": 11 }, { "in": "query", "name": "updated_after", "description": "Return issues updated after the specified time", "type": "string", "format": "date-time", "required": false, "index$": 12 }, { "in": "query", "name": "updated_before", "description": "Return issues updated before the specified time", "type": "string", "format": "date-time", "required": false, "index$": 13 }, { "in": "query", "name": "not[labels]", "description": "Comma-separated list of label names", "type": "array", "items": { "type": "string" }, "required": false, "index$": 14 }, { "in": "query", "name": "not[milestone]", "description": "Milestone title", "type": "string", "required": false, "index$": 15 }, { "in": "query", "name": "not[milestone_id]", "description": "Return issues assigned to milestones without the specified timebox value (\"Any\", \"None\", \"Upcoming\" or \"Started\")", "type": "string", "enum": ["Any", "None", "Upcoming", "Started"], "required": false, "index$": 16 }, { "in": "query", "name": "not[iids]", "description": "The IID array of issues", "type": "array", "items": { "type": "integer", "format": "int32" }, "required": false, "index$": 17 }, { "in": "query", "name": "not[author_id]", "description": "Return issues which are not authored by the user with the given ID", "type": "integer", "format": "int32", "required": false, "index$": 18 }, { "in": "query", "name": "not[author_username]", "description": "Return issues which are not authored by the user with the given username", "type": "string", "required": false, "index$": 19 }, { "in": "query", "name": "not[assignee_id]", "description": "Return issues which are not assigned to the user with the given ID", "type": "integer", "format": "int32", "required": false, "index$": 20 }, { "in": "query", "name": "not[assignee_username]", "description": "Return issues which are not assigned to the user with the given username", "type": "array", "items": { "type": "string" }, "required": false, "index$": 21 }, { "in": "query", "name": "not[weight]", "description": "Return issues without the specified weight", "type": "integer", "format": "int32", "required": false, "index$": 22 }, { "in": "query", "name": "not[iteration_id]", "description": "Return issues which are not assigned to the iteration with the given ID", "type": "integer", "format": "int32", "required": false, "index$": 23 }, { "in": "query", "name": "not[iteration_title]", "description": "Return issues which are not assigned to the iteration with the given title", "type": "string", "required": false, "index$": 24 }, { "in": "query", "name": "scope", "description": "Return issues for the given scope: `created_by_me`, `assigned_to_me` or `all`", "type": "string", "default": "created_by_me", "enum": ["created_by_me", "assigned_to_me", "all"], "required": false, "index$": 25 }, { "in": "query", "name": "my_reaction_emoji", "description": "Return issues reacted by the authenticated user by the given emoji", "type": "string", "required": false, "index$": 26 }, { "in": "query", "name": "confidential", "description": "Filter confidential or public issues", "type": "boolean", "required": false, "index$": 27 }, { "in": "query", "name": "weight", "description": "The weight of the issue", "type": "integer", "format": "int32", "required": false, "index$": 28 }, { "in": "query", "name": "epic_id", "description": "The ID of an epic associated with the issues", "type": "integer", "format": "int32", "required": false, "index$": 29 }, { "in": "query", "name": "health_status", "description": "The health status of the issue. Must be one of: on_track, needs_attention, at_risk, none, any", "type": "string", "enum": ["on_track", "needs_attention", "at_risk", "none", "any"], "required": false, "index$": 30 }, { "in": "query", "name": "iteration_id", "description": "Return issues which are assigned to the iteration with the given ID", "type": "integer", "format": "int32", "required": false, "index$": 31 }, { "in": "query", "name": "iteration_title", "description": "Return issues which are assigned to the iteration with the given title", "type": "string", "required": false, "index$": 32 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let issues_statistic_ref01_data = Object.values(setup.data.existing.issues_statistic)[0];
        // LOAD
        const issues_statistic_ref01_ent = client.IssuesStatistic();
        const issues_statistic_ref01_match_dt0 = {};
        const issues_statistic_ref01_data_dt0 = (await issues_statistic_ref01_ent.load(issues_statistic_ref01_match_dt0)).data();
        (0, node_assert_1.default)(null != issues_statistic_ref01_data_dt0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/issues_statistic/IssuesStatisticTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['issues_statistic01', 'issues_statistic02', 'issues_statistic03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_ISSUES_STATISTIC_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_ISSUES_STATISTIC_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_ISSUES_STATISTIC_ENTID'];
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
//# sourceMappingURL=IssuesStatisticEntity.test.js.map