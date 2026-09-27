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
(0, node_test_1.describe)('ApiEntitiesMergeRequestChangeEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.ApiEntitiesMergeRequestChange();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'api_entities_merge_request_change.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "allow_collaboration": { "a": true, "h": "Allow Collaboration", "n": "allow_collaboration", "r": false, "t": "`$BOOLEAN`", "key$": "allow_collaboration", "index$": 0 }, "allow_maintainer_to_push": { "a": true, "h": "Allow Maintainer To Push", "n": "allow_maintainer_to_push", "r": false, "t": "`$BOOLEAN`", "key$": "allow_maintainer_to_push", "index$": 1 }, "approvals_before_merge": { "a": true, "h": "Approvals Before Merge", "n": "approvals_before_merge", "r": false, "t": "`$STRING`", "key$": "approvals_before_merge", "index$": 2 }, "assignee": { "a": true, "h": "Assignee", "n": "assignee", "r": false, "sh": "API_Entities_UserBasic model", "t": "`$OBJECT`", "key$": "assignee", "index$": 3 }, "assignees": { "a": true, "h": "Assignees", "n": "assignees", "r": false, "sh": "API_Entities_UserBasic model", "t": "`$OBJECT`", "key$": "assignees", "index$": 4 }, "author": { "a": true, "h": "Author", "n": "author", "r": false, "sh": "API_Entities_UserBasic model", "t": "`$OBJECT`", "key$": "author", "index$": 5 }, "blocking_discussions_resolved": { "a": true, "h": "Blocking Discussions Resolved", "n": "blocking_discussions_resolved", "r": false, "t": "`$STRING`", "key$": "blocking_discussions_resolved", "index$": 6 }, "changes": { "a": true, "h": "Changes", "n": "changes", "r": false, "sh": "API_Entities_Diff model", "t": "`$OBJECT`", "key$": "changes", "index$": 7 }, "changes_count": { "a": true, "h": "Changes Count", "n": "changes_count", "r": false, "t": "`$STRING`", "key$": "changes_count", "index$": 8 }, "closed_at": { "a": true, "h": "Closed At", "n": "closed_at", "r": false, "t": "`$STRING`", "key$": "closed_at", "index$": 9 }, "closed_by": { "a": true, "h": "Closed By", "n": "closed_by", "r": false, "sh": "API_Entities_UserBasic model", "t": "`$OBJECT`", "key$": "closed_by", "index$": 10 }, "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": false, "t": "`$STRING`", "key$": "created_at", "index$": 11 }, "description": { "a": true, "h": "Description", "n": "description", "r": false, "t": "`$STRING`", "key$": "description", "index$": 12 }, "description_html": { "a": true, "h": "Description Html", "n": "description_html", "r": false, "t": "`$STRING`", "key$": "description_html", "index$": 13 }, "detailed_merge_status": { "a": true, "h": "Detailed Merge Status", "n": "detailed_merge_status", "r": false, "t": "`$STRING`", "key$": "detailed_merge_status", "index$": 14 }, "diff_refs": { "a": true, "h": "Diff Refs", "n": "diff_refs", "r": false, "t": "`$OBJECT`", "key$": "diff_refs", "index$": 15 }, "discussion_locked": { "a": true, "h": "Discussion Locked", "n": "discussion_locked", "r": false, "t": "`$STRING`", "key$": "discussion_locked", "index$": 16 }, "diverged_commits_count": { "a": true, "h": "Diverged Commits Count", "n": "diverged_commits_count", "r": false, "t": "`$STRING`", "key$": "diverged_commits_count", "index$": 17 }, "downvotes": { "a": true, "h": "Downvotes", "n": "downvotes", "r": false, "t": "`$STRING`", "key$": "downvotes", "index$": 18 }, "draft": { "a": true, "h": "Draft", "n": "draft", "r": false, "t": "`$STRING`", "key$": "draft", "index$": 19 }, "first_contribution": { "a": true, "h": "First Contribution", "n": "first_contribution", "r": false, "t": "`$STRING`", "key$": "first_contribution", "index$": 20 }, "first_deployed_to_production_at": { "a": true, "h": "First Deployed To Production At", "n": "first_deployed_to_production_at", "r": false, "t": "`$STRING`", "key$": "first_deployed_to_production_at", "index$": 21 }, "force_remove_source_branch": { "a": true, "h": "Force Remove Source Branch", "n": "force_remove_source_branch", "r": false, "t": "`$STRING`", "key$": "force_remove_source_branch", "index$": 22 }, "has_conflicts": { "a": true, "h": "Has Conflicts", "n": "has_conflicts", "r": false, "t": "`$BOOLEAN`", "key$": "has_conflicts", "index$": 23 }, "head_pipeline": { "a": true, "h": "Head Pipeline", "n": "head_pipeline", "r": false, "sh": "API_Entities_Ci_Pipeline model", "t": "`$OBJECT`", "key$": "head_pipeline", "index$": 24 }, "id": { "a": true, "fo": "int32", "h": "Id", "n": "id", "r": false, "t": "`$INTEGER`", "key$": "id", "index$": 25 }, "iid": { "a": true, "fo": "int32", "h": "Iid", "n": "iid", "r": false, "t": "`$INTEGER`", "key$": "iid", "index$": 26 }, "imported": { "a": true, "h": "Imported", "n": "imported", "r": false, "t": "`$STRING`", "key$": "imported", "index$": 27 }, "imported_from": { "a": true, "h": "Imported From", "n": "imported_from", "r": false, "t": "`$STRING`", "key$": "imported_from", "index$": 28 }, "labels": { "a": true, "h": "Labels", "n": "labels", "r": false, "t": "`$STRING`", "key$": "labels", "index$": 29 }, "latest_build_finished_at": { "a": true, "h": "Latest Build Finished At", "n": "latest_build_finished_at", "r": false, "t": "`$STRING`", "key$": "latest_build_finished_at", "index$": 30 }, "latest_build_started_at": { "a": true, "h": "Latest Build Started At", "n": "latest_build_started_at", "r": false, "t": "`$STRING`", "key$": "latest_build_started_at", "index$": 31 }, "merge_after": { "a": true, "h": "Merge After", "n": "merge_after", "r": false, "t": "`$STRING`", "key$": "merge_after", "index$": 32 }, "merge_commit_sha": { "a": true, "h": "Merge Commit Sha", "n": "merge_commit_sha", "r": false, "t": "`$STRING`", "key$": "merge_commit_sha", "index$": 33 }, "merge_error": { "a": true, "h": "Merge Error", "n": "merge_error", "r": false, "t": "`$STRING`", "key$": "merge_error", "index$": 34 }, "merge_status": { "a": true, "h": "Merge Status", "n": "merge_status", "r": false, "t": "`$STRING`", "key$": "merge_status", "index$": 35 }, "merge_user": { "a": true, "h": "Merge User", "n": "merge_user", "r": false, "sh": "API_Entities_UserBasic model", "t": "`$OBJECT`", "key$": "merge_user", "index$": 36 }, "merge_when_pipeline_succeeds": { "a": true, "h": "Merge When Pipeline Succeeds", "n": "merge_when_pipeline_succeeds", "r": false, "t": "`$STRING`", "key$": "merge_when_pipeline_succeeds", "index$": 37 }, "merged_at": { "a": true, "h": "Merged At", "n": "merged_at", "r": false, "t": "`$STRING`", "key$": "merged_at", "index$": 38 }, "merged_by": { "a": true, "h": "Merged By", "n": "merged_by", "r": false, "sh": "API_Entities_UserBasic model", "t": "`$OBJECT`", "key$": "merged_by", "index$": 39 }, "milestone": { "a": true, "h": "Milestone", "n": "milestone", "r": false, "t": "`$OBJECT`", "key$": "milestone", "index$": 40 }, "overflow": { "a": true, "h": "Overflow", "n": "overflow", "r": false, "t": "`$STRING`", "key$": "overflow", "index$": 41 }, "pipeline": { "a": true, "h": "Pipeline", "n": "pipeline", "r": false, "sh": "API_Entities_Ci_PipelineBasic model", "t": "`$OBJECT`", "key$": "pipeline", "index$": 42 }, "prepared_at": { "a": true, "h": "Prepared At", "n": "prepared_at", "r": false, "t": "`$STRING`", "key$": "prepared_at", "index$": 43 }, "project_id": { "a": true, "fo": "int32", "h": "Project Id", "n": "project_id", "r": false, "t": "`$INTEGER`", "key$": "project_id", "index$": 44 }, "rebase_in_progress": { "a": true, "h": "Rebase In Progress", "n": "rebase_in_progress", "r": false, "t": "`$STRING`", "key$": "rebase_in_progress", "index$": 45 }, "reference": { "a": true, "h": "Reference", "n": "reference", "r": false, "t": "`$STRING`", "key$": "reference", "index$": 46 }, "references": { "a": true, "h": "References", "n": "references", "r": false, "t": "`$OBJECT`", "key$": "references", "index$": 47 }, "reviewers": { "a": true, "h": "Reviewers", "n": "reviewers", "r": false, "sh": "API_Entities_UserBasic model", "t": "`$OBJECT`", "key$": "reviewers", "index$": 48 }, "sha": { "a": true, "h": "Sha", "n": "sha", "r": false, "t": "`$STRING`", "key$": "sha", "index$": 49 }, "should_remove_source_branch": { "a": true, "h": "Should Remove Source Branch", "n": "should_remove_source_branch", "r": false, "t": "`$BOOLEAN`", "key$": "should_remove_source_branch", "index$": 50 }, "source_branch": { "a": true, "h": "Source Branch", "n": "source_branch", "r": false, "t": "`$STRING`", "key$": "source_branch", "index$": 51 }, "source_project_id": { "a": true, "h": "Source Project Id", "n": "source_project_id", "r": false, "t": "`$STRING`", "key$": "source_project_id", "index$": 52 }, "squash": { "a": true, "h": "Squash", "n": "squash", "r": false, "t": "`$STRING`", "key$": "squash", "index$": 53 }, "squash_commit_sha": { "a": true, "h": "Squash Commit Sha", "n": "squash_commit_sha", "r": false, "t": "`$STRING`", "key$": "squash_commit_sha", "index$": 54 }, "squash_on_merge": { "a": true, "h": "Squash On Merge", "n": "squash_on_merge", "r": false, "t": "`$STRING`", "key$": "squash_on_merge", "index$": 55 }, "state": { "a": true, "h": "State", "n": "state", "r": false, "t": "`$STRING`", "key$": "state", "index$": 56 }, "subscribed": { "a": true, "h": "Subscribed", "n": "subscribed", "r": false, "t": "`$STRING`", "key$": "subscribed", "index$": 57 }, "target_branch": { "a": true, "h": "Target Branch", "n": "target_branch", "r": false, "t": "`$STRING`", "key$": "target_branch", "index$": 58 }, "target_project_id": { "a": true, "h": "Target Project Id", "n": "target_project_id", "r": false, "t": "`$STRING`", "key$": "target_project_id", "index$": 59 }, "task_completion_status": { "a": true, "h": "Task Completion Status", "n": "task_completion_status", "r": false, "t": "`$STRING`", "key$": "task_completion_status", "index$": 60 }, "time_stats": { "a": true, "h": "Time Stats", "n": "time_stats", "r": false, "sh": "API_Entities_IssuableTimeStats model", "t": "`$OBJECT`", "key$": "time_stats", "index$": 61 }, "title": { "a": true, "h": "Title", "n": "title", "r": false, "t": "`$STRING`", "key$": "title", "index$": 62 }, "title_html": { "a": true, "h": "Title Html", "n": "title_html", "r": false, "t": "`$STRING`", "key$": "title_html", "index$": 63 }, "updated_at": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updated_at", "r": false, "t": "`$STRING`", "key$": "updated_at", "index$": 64 }, "upvotes": { "a": true, "h": "Upvotes", "n": "upvotes", "r": false, "t": "`$STRING`", "key$": "upvotes", "index$": 65 }, "user": { "a": true, "h": "User", "n": "user", "r": false, "t": "`$OBJECT`", "key$": "user", "index$": 66 }, "user_notes_count": { "a": true, "h": "User Notes Count", "n": "user_notes_count", "r": false, "t": "`$STRING`", "key$": "user_notes_count", "index$": 67 }, "web_url": { "a": true, "h": "Web Url", "n": "web_url", "r": false, "t": "`$STRING`", "key$": "web_url", "index$": 68 }, "work_in_progress": { "a": true, "h": "Work In Progress", "n": "work_in_progress", "r": false, "t": "`$STRING`", "key$": "work_in_progress", "index$": 69 } }, "id": { "field": "id", "name": "id" }, "name": "api_entities_merge_request_change", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/v4/projects/{id}/merge_requests/{merge_request_iid}/changes", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "merge_request_id", "or": "merge_request_iid", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "k": "query", "n": "unidiff", "or": "unidiff", "r": false, "t": "`$ANY`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/v4/projects/{id}/merge_requests/{merge_request_iid}/changes", "q": { "exist": ["merge_request_id", "project_id", "unidiff"] }, "r": { "param": { "id": "project_id", "merge_request_iid": "merge_request_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "merge_requests" }, { "var": "merge_request_id" }, { "lit": "changes" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [["$.main.kit.entity.project", "$.main.kit.entity.merge_request"]] }, "key$": "api_entities_merge_request_change", "name__orig": "api_entities_merge_request_change", "Name": "ApiEntitiesMergeRequestChange", "name_": "api_entities_merge_request_change", "name-": "api-entities-merge-request-change", "NAME": "API_ENTITIES_MERGE_REQUEST_CHANGE", "index$": 95 }, { "active": true, "entity": "api_entities_merge_request_change", "key$": "BasicApiEntitiesMergeRequestChangeFlow", "kind": "basic", "name": "BasicApiEntitiesMergeRequestChangeFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "api_entities_merge_request_change_ref01", "srcdatavar": "api_entities_merge_request_change_ref01_data", "suffix": "_dt0" }, "m": { "id": "api_entities_merge_request_change01", "project_id": "project01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-api_entities_merge_request_change_ref01" } }], "index$": 0 }] }, 'ApiEntitiesMergeRequestChange', { "GET /api/v4/projects/{id}/merge_requests/{merge_request_iid}/changes": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project.", "type": "string", "required": true, "index$": 0 }, { "in": "query", "name": "unidiff", "description": "A diff in a Unified diff format", "type": "boolean", "default": false, "required": false, "index$": 1 }, { "in": "path", "name": "merge_request_iid", "type": "integer", "format": "int32", "required": true, "index$": 2 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let api_entities_merge_request_change_ref01_data = Object.values(setup.data.existing.api_entities_merge_request_change)[0];
        // LOAD
        const api_entities_merge_request_change_ref01_ent = client.ApiEntitiesMergeRequestChange();
        const api_entities_merge_request_change_ref01_match_dt0 = {};
        api_entities_merge_request_change_ref01_match_dt0.id = api_entities_merge_request_change_ref01_data.id;
        const api_entities_merge_request_change_ref01_data_dt0 = (await api_entities_merge_request_change_ref01_ent.load(api_entities_merge_request_change_ref01_match_dt0)).data();
        (0, node_assert_1.default)(api_entities_merge_request_change_ref01_data_dt0.id === api_entities_merge_request_change_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/api_entities_merge_request_change/ApiEntitiesMergeRequestChangeTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['api_entities_merge_request_change01', 'api_entities_merge_request_change02', 'api_entities_merge_request_change03', 'project01', 'project02', 'project03', 'merge_request01', 'merge_request02', 'merge_request03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_API_ENTITIES_MERGE_REQUEST_CHANGE_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_API_ENTITIES_MERGE_REQUEST_CHANGE_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_API_ENTITIES_MERGE_REQUEST_CHANGE_ENTID'];
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
//# sourceMappingURL=ApiEntitiesMergeRequestChangeEntity.test.js.map