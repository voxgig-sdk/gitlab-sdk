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
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "assignee", "req": false, "short": "API_Entities_UserBasic model", "type": "`$OBJECT`", "index$": 0 }, { "active": true, "name": "assignees", "req": false, "short": "API_Entities_UserBasic model", "type": "`$OBJECT`", "index$": 1 }, { "active": true, "name": "author", "req": false, "short": "API_Entities_UserBasic model", "type": "`$OBJECT`", "index$": 2 }, { "active": true, "name": "blocking_issues_count", "req": false, "type": "`$STRING`", "index$": 3 }, { "active": true, "format": "date-time", "name": "closed_at", "req": false, "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "closed_by", "req": false, "short": "API_Entities_UserBasic model", "type": "`$OBJECT`", "index$": 5 }, { "active": true, "name": "confidential", "req": false, "type": "`$BOOLEAN`", "index$": 6 }, { "active": true, "format": "date-time", "name": "created_at", "req": false, "type": "`$STRING`", "index$": 7 }, { "active": true, "name": "description", "req": false, "type": "`$STRING`", "index$": 8 }, { "active": true, "name": "discussion_locked", "req": false, "type": "`$BOOLEAN`", "index$": 9 }, { "active": true, "name": "downvotes", "req": false, "type": "`$STRING`", "index$": 10 }, { "active": true, "format": "date", "name": "due_date", "req": false, "type": "`$STRING`", "index$": 11 }, { "active": true, "name": "epic", "req": false, "type": "`$OBJECT`", "index$": 12 }, { "active": true, "name": "epic_iid", "req": false, "type": "`$STRING`", "index$": 13 }, { "active": true, "name": "has_tasks", "req": false, "type": "`$BOOLEAN`", "index$": 14 }, { "active": true, "name": "health_status", "req": false, "type": "`$STRING`", "index$": 15 }, { "active": true, "format": "int32", "name": "id", "req": false, "type": "`$INTEGER`", "index$": 16 }, { "active": true, "format": "int32", "name": "iid", "req": false, "type": "`$INTEGER`", "index$": 17 }, { "active": true, "name": "imported", "req": false, "type": "`$STRING`", "index$": 18 }, { "active": true, "name": "imported_from", "req": false, "type": "`$STRING`", "index$": 19 }, { "active": true, "name": "issue_link_id", "req": false, "type": "`$STRING`", "index$": 20 }, { "active": true, "name": "issue_type", "req": false, "type": "`$STRING`", "index$": 21 }, { "active": true, "name": "iteration", "req": false, "type": "`$OBJECT`", "index$": 22 }, { "active": true, "name": "labels", "req": false, "type": "`$ARRAY`", "index$": 23 }, { "active": true, "name": "link_created_at", "req": false, "type": "`$STRING`", "index$": 24 }, { "active": true, "name": "link_type", "req": false, "type": "`$STRING`", "index$": 25 }, { "active": true, "name": "link_updated_at", "req": false, "type": "`$STRING`", "index$": 26 }, { "active": true, "name": "links", "req": false, "type": "`$OBJECT`", "index$": 27 }, { "active": true, "name": "merge_requests_count", "req": false, "type": "`$STRING`", "index$": 28 }, { "active": true, "name": "milestone", "req": false, "type": "`$OBJECT`", "index$": 29 }, { "active": true, "name": "moved_to_id", "req": false, "type": "`$STRING`", "index$": 30 }, { "active": true, "format": "int32", "name": "project_id", "req": false, "type": "`$INTEGER`", "index$": 31 }, { "active": true, "name": "references", "req": false, "type": "`$OBJECT`", "index$": 32 }, { "active": true, "name": "service_desk_reply_to", "req": false, "type": "`$STRING`", "index$": 33 }, { "active": true, "name": "severity", "req": false, "short": "One of [\"UNKNOWN\", \"LOW\", \"MEDIUM\", \"HIGH\", \"CRITICAL\"]", "type": "`$STRING`", "index$": 34 }, { "active": true, "name": "state", "req": false, "type": "`$STRING`", "index$": 35 }, { "active": true, "name": "subscribed", "req": false, "type": "`$STRING`", "index$": 36 }, { "active": true, "name": "task_completion_status", "req": false, "type": "`$STRING`", "index$": 37 }, { "active": true, "name": "task_status", "req": false, "type": "`$STRING`", "index$": 38 }, { "active": true, "name": "time_stats", "req": false, "short": "API_Entities_IssuableTimeStats model", "type": "`$OBJECT`", "index$": 39 }, { "active": true, "name": "title", "req": false, "type": "`$STRING`", "index$": 40 }, { "active": true, "name": "type", "req": false, "short": "One of [\"ISSUE\", \"INCIDENT\", \"TEST_CASE\", \"REQUIREMENT\", \"TASK\", \"TICKET\"]", "type": "`$STRING`", "index$": 41 }, { "active": true, "format": "date-time", "name": "updated_at", "req": false, "type": "`$STRING`", "index$": 42 }, { "active": true, "name": "upvotes", "req": false, "type": "`$STRING`", "index$": 43 }, { "active": true, "name": "user_notes_count", "req": false, "type": "`$STRING`", "index$": 44 }, { "active": true, "name": "web_url", "req": false, "type": "`$STRING`", "index$": 45 }, { "active": true, "name": "weight", "req": false, "type": "`$STRING`", "index$": 46 }], "id": { "field": "id", "name": "id" }, "name": "api_entities_related_issue", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "issue_id", "orig": "issue_iid", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "param", "name": "project_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 1 }] }, "contract": { "id": "GET /api/v4/projects/{id}/issues/{issue_iid}/links", "json": "{\"operationId\":\"getApiV4ProjectsIdIssuesIssueIidLinks\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project owned by the authenticated user\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The internal ID of a project’s issue\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"issue_iid\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"List issue relations\",\"schema\":{\"items\":{\"description\":\"API_Entities_RelatedIssue model\",\"properties\":{\"_links\":{\"properties\":{\"award_emoji\":{\"type\":\"string\"},\"closed_as_duplicate_of\":{\"type\":\"string\"},\"notes\":{\"type\":\"string\"},\"project\":{\"type\":\"string\"},\"self\":{\"type\":\"string\"}},\"type\":\"object\"},\"assignee\":{\"description\":\"API_Entities_UserBasic model\",\"properties\":{\"avatar_path\":{\"example\":\"/user/avatar/28/The-Big-Lebowski-400-400.png\",\"type\":\"string\"},\"avatar_url\":{\"example\":\"https://gravatar.com/avatar/1\",\"type\":\"string\"},\"custom_attributes\":{\"items\":{\"description\":\"API_Entities_CustomAttribute model\",\"properties\":{\"key\":{\"example\":\"foo\",\"type\":\"string\"},\"value\":{\"example\":\"bar\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"locked\":{\"type\":\"boolean\"},\"name\":{\"example\":\"Administrator\",\"type\":\"string\"},\"public_email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"state\":{\"example\":\"active\",\"type\":\"string\"},\"username\":{\"example\":\"admin\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/root\",\"type\":\"string\"}},\"type\":\"object\"},\"assignees\":{\"description\":\"API_Entities_UserBasic model\",\"properties\":{\"avatar_path\":{\"example\":\"/user/avatar/28/The-Big-Lebowski-400-400.png\",\"type\":\"string\"},\"avatar_url\":{\"example\":\"https://gravatar.com/avatar/1\",\"type\":\"string\"},\"custom_attributes\":{\"items\":{\"description\":\"API_Entities_CustomAttribute model\",\"properties\":{\"key\":{\"example\":\"foo\",\"type\":\"string\"},\"value\":{\"example\":\"bar\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"locked\":{\"type\":\"boolean\"},\"name\":{\"example\":\"Administrator\",\"type\":\"string\"},\"public_email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"state\":{\"example\":\"active\",\"type\":\"string\"},\"username\":{\"example\":\"admin\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/root\",\"type\":\"string\"}},\"type\":\"object\"},\"author\":{\"description\":\"API_Entities_UserBasic model\",\"properties\":{\"avatar_path\":{\"example\":\"/user/avatar/28/The-Big-Lebowski-400-400.png\",\"type\":\"string\"},\"avatar_url\":{\"example\":\"https://gravatar.com/avatar/1\",\"type\":\"string\"},\"custom_attributes\":{\"items\":{\"description\":\"API_Entities_CustomAttribute model\",\"properties\":{\"key\":{\"example\":\"foo\",\"type\":\"string\"},\"value\":{\"example\":\"bar\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"locked\":{\"type\":\"boolean\"},\"name\":{\"example\":\"Administrator\",\"type\":\"string\"},\"public_email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"state\":{\"example\":\"active\",\"type\":\"string\"},\"username\":{\"example\":\"admin\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/root\",\"type\":\"string\"}},\"type\":\"object\"},\"blocking_issues_count\":{\"type\":\"string\"},\"closed_at\":{\"example\":\"2022-11-15T08:30:55.232Z\",\"format\":\"date-time\",\"type\":\"string\"},\"closed_by\":{\"description\":\"API_Entities_UserBasic model\",\"properties\":{\"avatar_path\":{\"example\":\"/user/avatar/28/The-Big-Lebowski-400-400.png\",\"type\":\"string\"},\"avatar_url\":{\"example\":\"https://gravatar.com/avatar/1\",\"type\":\"string\"},\"custom_attributes\":{\"items\":{\"description\":\"API_Entities_CustomAttribute model\",\"properties\":{\"key\":{\"example\":\"foo\",\"type\":\"string\"},\"value\":{\"example\":\"bar\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"locked\":{\"type\":\"boolean\"},\"name\":{\"example\":\"Administrator\",\"type\":\"string\"},\"public_email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"state\":{\"example\":\"active\",\"type\":\"string\"},\"username\":{\"example\":\"admin\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/root\",\"type\":\"string\"}},\"type\":\"object\"},\"confidential\":{\"type\":\"boolean\"},\"created_at\":{\"example\":\"2022-08-17T12:46:35.053Z\",\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"example\":\"Repellendus impedit et vel velit dignissimos.\",\"type\":\"string\"},\"discussion_locked\":{\"type\":\"boolean\"},\"downvotes\":{\"type\":\"string\"},\"due_date\":{\"example\":\"2022-11-20\",\"format\":\"date\",\"type\":\"string\"},\"epic\":{\"properties\":{\"group_id\":{\"type\":\"string\"},\"human_readable_end_date\":{\"type\":\"string\"},\"human_readable_timestamp\":{\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"iid\":{\"type\":\"string\"},\"title\":{\"type\":\"string\"},\"url\":{\"type\":\"string\"}},\"type\":\"object\"},\"epic_iid\":{\"type\":\"string\"},\"has_tasks\":{\"type\":\"string\"},\"health_status\":{\"type\":\"string\"},\"id\":{\"example\":84,\"format\":\"int32\",\"type\":\"integer\"},\"iid\":{\"example\":14,\"format\":\"int32\",\"type\":\"integer\"},\"imported\":{\"type\":\"string\"},\"imported_from\":{\"example\":\"github\",\"type\":\"string\"},\"issue_link_id\":{\"type\":\"string\"},\"issue_type\":{\"example\":\"issue\",\"type\":\"string\"},\"iteration\":{\"properties\":{\"created_at\":{\"type\":\"string\"},\"description\":{\"type\":\"string\"},\"due_date\":{\"type\":\"string\"},\"group_id\":{\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"iid\":{\"type\":\"string\"},\"sequence\":{\"type\":\"string\"},\"start_date\":{\"type\":\"string\"},\"state\":{\"type\":\"string\"},\"title\":{\"type\":\"string\"},\"updated_at\":{\"type\":\"string\"},\"web_url\":{\"type\":\"string\"}},\"type\":\"object\"},\"labels\":{\"example\":\"bug\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"link_created_at\":{\"type\":\"string\"},\"link_type\":{\"type\":\"string\"},\"link_updated_at\":{\"type\":\"string\"},\"merge_requests_count\":{\"type\":\"string\"},\"milestone\":{\"properties\":{\"created_at\":{\"type\":\"string\"},\"description\":{\"type\":\"string\"},\"due_date\":{\"type\":\"string\"},\"expired\":{\"type\":\"string\"},\"group_id\":{\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"iid\":{\"type\":\"string\"},\"project_id\":{\"type\":\"string\"},\"start_date\":{\"type\":\"string\"},\"state\":{\"type\":\"string\"},\"title\":{\"type\":\"string\"},\"updated_at\":{\"type\":\"string\"},\"web_url\":{\"type\":\"string\"}},\"type\":\"object\"},\"moved_to_id\":{\"type\":\"string\"},\"project_id\":{\"example\":4,\"format\":\"int32\",\"type\":\"integer\"},\"references\":{\"properties\":{\"full\":{\"example\":\"test&6\",\"type\":\"string\"},\"relative\":{\"example\":\"&6\",\"type\":\"string\"},\"short\":{\"example\":\"&6\",\"type\":\"string\"}},\"type\":\"object\"},\"service_desk_reply_to\":{\"type\":\"string\"},\"severity\":{\"description\":\"One of [\\\"UNKNOWN\\\", \\\"LOW\\\", \\\"MEDIUM\\\", \\\"HIGH\\\", \\\"CRITICAL\\\"]\",\"type\":\"string\"},\"state\":{\"example\":\"closed\",\"type\":\"string\"},\"subscribed\":{\"type\":\"string\"},\"task_completion_status\":{\"type\":\"string\"},\"task_status\":{\"type\":\"string\"},\"time_stats\":{\"description\":\"API_Entities_IssuableTimeStats model\",\"properties\":{\"human_time_estimate\":{\"example\":\"3h 30m\",\"type\":\"string\"},\"human_total_time_spent\":{\"example\":\"1h\",\"type\":\"string\"},\"time_estimate\":{\"example\":12600,\"format\":\"int32\",\"type\":\"integer\"},\"total_time_spent\":{\"example\":3600,\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"},\"title\":{\"example\":\"Impedit et ut et dolores vero provident ullam est\",\"type\":\"string\"},\"type\":{\"description\":\"One of [\\\"ISSUE\\\", \\\"INCIDENT\\\", \\\"TEST_CASE\\\", \\\"REQUIREMENT\\\", \\\"TASK\\\", \\\"TICKET\\\"]\",\"example\":\"ISSUE\",\"type\":\"string\"},\"updated_at\":{\"example\":\"2022-11-14T17:22:01.470Z\",\"format\":\"date-time\",\"type\":\"string\"},\"upvotes\":{\"type\":\"string\"},\"user_notes_count\":{\"type\":\"string\"},\"web_url\":{\"example\":\"http://example.com/example/example/issues/14\",\"type\":\"string\"},\"weight\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/v4/projects/{id}/issues/{issue_iid}/links", "rename": { "param": { "id": "project_id", "issue_iid": "issue_id" } }, "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "issues" }, { "var": "issue_id" }, { "lit": "links" }], "select": { "exist": ["issue_id", "project_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [["project", "issue"]] }, "key$": "api_entities_related_issue", "name__orig": "api_entities_related_issue", "Name": "ApiEntitiesRelatedIssue", "name_": "api_entities_related_issue", "name-": "api-entities-related-issue", "NAME": "API_ENTITIES_RELATED_ISSUE", "index$": 147 }, { "active": true, "entity": "api_entities_related_issue", "key$": "BasicApiEntitiesRelatedIssueFlow", "kind": "basic", "name": "BasicApiEntitiesRelatedIssueFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": { "issue_id": "issue01", "project_id": "project01" }, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "api_entities_related_issue_ref01" } }], "index$": 0 }] }, 'ApiEntitiesRelatedIssue');
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
    let idmap = transform(['api_entities_related_issue01', 'api_entities_related_issue02', 'api_entities_related_issue03', 'project01', 'project02', 'project03', 'issue01', 'issue02', 'issue03'], {
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