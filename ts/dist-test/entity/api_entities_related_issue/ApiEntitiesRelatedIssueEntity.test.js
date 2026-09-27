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
(0, node_test_1.describe)('ApiEntitiesRelatedIssueEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.ApiEntitiesRelatedIssue();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'api_entities_related_issue.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "assignee": { "a": true, "h": "Assignee", "n": "assignee", "r": false, "sh": "API_Entities_UserBasic model", "t": "`$OBJECT`", "key$": "assignee", "index$": 0 }, "assignees": { "a": true, "h": "Assignees", "n": "assignees", "r": false, "sh": "API_Entities_UserBasic model", "t": "`$OBJECT`", "key$": "assignees", "index$": 1 }, "author": { "a": true, "h": "Author", "n": "author", "r": false, "sh": "API_Entities_UserBasic model", "t": "`$OBJECT`", "key$": "author", "index$": 2 }, "blocking_issues_count": { "a": true, "h": "Blocking Issues Count", "n": "blocking_issues_count", "r": false, "t": "`$STRING`", "key$": "blocking_issues_count", "index$": 3 }, "closed_at": { "a": true, "fo": "date-time", "h": "Closed At", "n": "closed_at", "r": false, "t": "`$STRING`", "key$": "closed_at", "index$": 4 }, "closed_by": { "a": true, "h": "Closed By", "n": "closed_by", "r": false, "sh": "API_Entities_UserBasic model", "t": "`$OBJECT`", "key$": "closed_by", "index$": 5 }, "confidential": { "a": true, "h": "Confidential", "n": "confidential", "r": false, "t": "`$BOOLEAN`", "key$": "confidential", "index$": 6 }, "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": false, "t": "`$STRING`", "key$": "created_at", "index$": 7 }, "description": { "a": true, "h": "Description", "n": "description", "r": false, "t": "`$STRING`", "key$": "description", "index$": 8 }, "discussion_locked": { "a": true, "h": "Discussion Locked", "n": "discussion_locked", "r": false, "t": "`$BOOLEAN`", "key$": "discussion_locked", "index$": 9 }, "downvotes": { "a": true, "h": "Downvotes", "n": "downvotes", "r": false, "t": "`$STRING`", "key$": "downvotes", "index$": 10 }, "due_date": { "a": true, "fo": "date", "h": "Due Date", "n": "due_date", "r": false, "t": "`$STRING`", "key$": "due_date", "index$": 11 }, "epic": { "a": true, "h": "Epic", "n": "epic", "r": false, "t": "`$OBJECT`", "key$": "epic", "index$": 12 }, "epic_iid": { "a": true, "h": "Epic Iid", "n": "epic_iid", "r": false, "t": "`$STRING`", "key$": "epic_iid", "index$": 13 }, "has_tasks": { "a": true, "h": "Has Tasks", "n": "has_tasks", "r": false, "t": "`$BOOLEAN`", "key$": "has_tasks", "index$": 14 }, "health_status": { "a": true, "h": "Health Status", "n": "health_status", "r": false, "t": "`$STRING`", "key$": "health_status", "index$": 15 }, "id": { "a": true, "fo": "int32", "h": "Id", "n": "id", "r": false, "t": "`$INTEGER`", "key$": "id", "index$": 16 }, "iid": { "a": true, "fo": "int32", "h": "Iid", "n": "iid", "r": false, "t": "`$INTEGER`", "key$": "iid", "index$": 17 }, "imported": { "a": true, "h": "Imported", "n": "imported", "r": false, "t": "`$STRING`", "key$": "imported", "index$": 18 }, "imported_from": { "a": true, "h": "Imported From", "n": "imported_from", "r": false, "t": "`$STRING`", "key$": "imported_from", "index$": 19 }, "issue_link_id": { "a": true, "h": "Issue Link Id", "n": "issue_link_id", "r": false, "t": "`$STRING`", "key$": "issue_link_id", "index$": 20 }, "issue_type": { "a": true, "h": "Issue Type", "n": "issue_type", "r": false, "t": "`$STRING`", "key$": "issue_type", "index$": 21 }, "iteration": { "a": true, "h": "Iteration", "n": "iteration", "r": false, "t": "`$OBJECT`", "key$": "iteration", "index$": 22 }, "labels": { "a": true, "h": "Labels", "n": "labels", "r": false, "t": "`$ARRAY`", "key$": "labels", "index$": 23 }, "link_created_at": { "a": true, "h": "Link Created At", "n": "link_created_at", "r": false, "t": "`$STRING`", "key$": "link_created_at", "index$": 24 }, "link_type": { "a": true, "h": "Link Type", "n": "link_type", "r": false, "t": "`$STRING`", "key$": "link_type", "index$": 25 }, "link_updated_at": { "a": true, "h": "Link Updated At", "n": "link_updated_at", "r": false, "t": "`$STRING`", "key$": "link_updated_at", "index$": 26 }, "links": { "a": true, "h": "Links", "n": "links", "r": false, "t": "`$OBJECT`", "key$": "links", "index$": 27 }, "merge_requests_count": { "a": true, "h": "Merge Requests Count", "n": "merge_requests_count", "r": false, "t": "`$STRING`", "key$": "merge_requests_count", "index$": 28 }, "milestone": { "a": true, "h": "Milestone", "n": "milestone", "r": false, "t": "`$OBJECT`", "key$": "milestone", "index$": 29 }, "moved_to_id": { "a": true, "h": "Moved To Id", "n": "moved_to_id", "r": false, "t": "`$STRING`", "key$": "moved_to_id", "index$": 30 }, "project_id": { "a": true, "fo": "int32", "h": "Project Id", "n": "project_id", "r": false, "t": "`$INTEGER`", "key$": "project_id", "index$": 31 }, "references": { "a": true, "h": "References", "n": "references", "r": false, "t": "`$OBJECT`", "key$": "references", "index$": 32 }, "service_desk_reply_to": { "a": true, "h": "Service Desk Reply To", "n": "service_desk_reply_to", "r": false, "t": "`$STRING`", "key$": "service_desk_reply_to", "index$": 33 }, "severity": { "a": true, "h": "Severity", "n": "severity", "r": false, "sh": "One of [\"UNKNOWN\", \"LOW\", \"MEDIUM\", \"HIGH\", \"CRITICAL\"]", "t": "`$STRING`", "key$": "severity", "index$": 34 }, "state": { "a": true, "h": "State", "n": "state", "r": false, "t": "`$STRING`", "key$": "state", "index$": 35 }, "subscribed": { "a": true, "h": "Subscribed", "n": "subscribed", "r": false, "t": "`$STRING`", "key$": "subscribed", "index$": 36 }, "task_completion_status": { "a": true, "h": "Task Completion Status", "n": "task_completion_status", "r": false, "t": "`$STRING`", "key$": "task_completion_status", "index$": 37 }, "task_status": { "a": true, "h": "Task Status", "n": "task_status", "r": false, "t": "`$STRING`", "key$": "task_status", "index$": 38 }, "time_stats": { "a": true, "h": "Time Stats", "n": "time_stats", "r": false, "sh": "API_Entities_IssuableTimeStats model", "t": "`$OBJECT`", "key$": "time_stats", "index$": 39 }, "title": { "a": true, "h": "Title", "n": "title", "r": false, "t": "`$STRING`", "key$": "title", "index$": 40 }, "type": { "a": true, "h": "Type", "n": "type", "r": false, "sh": "One of [\"ISSUE\", \"INCIDENT\", \"TEST_CASE\", \"REQUIREMENT\", \"TASK\", \"TICKET\"]", "t": "`$STRING`", "key$": "type", "index$": 41 }, "updated_at": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updated_at", "r": false, "t": "`$STRING`", "key$": "updated_at", "index$": 42 }, "upvotes": { "a": true, "h": "Upvotes", "n": "upvotes", "r": false, "t": "`$STRING`", "key$": "upvotes", "index$": 43 }, "user_notes_count": { "a": true, "h": "User Notes Count", "n": "user_notes_count", "r": false, "t": "`$STRING`", "key$": "user_notes_count", "index$": 44 }, "web_url": { "a": true, "h": "Web Url", "n": "web_url", "r": false, "t": "`$STRING`", "key$": "web_url", "index$": 45 }, "weight": { "a": true, "h": "Weight", "n": "weight", "r": false, "t": "`$STRING`", "key$": "weight", "index$": 46 } }, "id": { "field": "id", "name": "id" }, "name": "api_entities_related_issue", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /api/v4/projects/{id}/issues/{issue_iid}/links", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "issue_id", "or": "issue_iid", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/api/v4/projects/{id}/issues/{issue_iid}/links", "q": { "exist": ["issue_id", "project_id"] }, "r": { "param": { "id": "project_id", "issue_iid": "issue_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "issues" }, { "var": "issue_id" }, { "lit": "links" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [["$.main.kit.entity.project"]] }, "key$": "api_entities_related_issue", "name__orig": "api_entities_related_issue", "Name": "ApiEntitiesRelatedIssue", "name_": "api_entities_related_issue", "name-": "api-entities-related-issue", "NAME": "API_ENTITIES_RELATED_ISSUE", "index$": 147 }, { "active": true, "entity": "api_entities_related_issue", "key$": "BasicApiEntitiesRelatedIssueFlow", "kind": "basic", "name": "BasicApiEntitiesRelatedIssueFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "issue_id": "issue01", "project_id": "project01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "api_entities_related_issue_ref01" } }], "index$": 0 }] }, 'ApiEntitiesRelatedIssue', { "GET /api/v4/projects/{id}/issues/{issue_iid}/links": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project owned by the authenticated user", "type": "string", "required": true, "index$": 0 }, { "in": "path", "name": "issue_iid", "description": "The internal ID of a project’s issue", "type": "integer", "format": "int32", "required": true, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let api_entities_related_issue_ref01_data = Object.values(setup.data.existing.api_entities_related_issue)[0];
        // LIST
        const api_entities_related_issue_ref01_ent = client.ApiEntitiesRelatedIssue();
        const api_entities_related_issue_ref01_match = {};
        api_entities_related_issue_ref01_match['issue_id'] = setup.idmap['issue01'];
        api_entities_related_issue_ref01_match['project_id'] = setup.idmap['project01'];
        const api_entities_related_issue_ref01_list = (await api_entities_related_issue_ref01_ent.list(api_entities_related_issue_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/api_entities_related_issue/ApiEntitiesRelatedIssueTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['api_entities_related_issue01', 'api_entities_related_issue02', 'api_entities_related_issue03', 'project01', 'project02', 'project03', 'issue01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_API_ENTITIES_RELATED_ISSUE_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_API_ENTITIES_RELATED_ISSUE_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_API_ENTITIES_RELATED_ISSUE_ENTID'];
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
//# sourceMappingURL=ApiEntitiesRelatedIssueEntity.test.js.map