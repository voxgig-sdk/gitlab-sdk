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
(0, node_test_1.describe)('ApiEntitiesCommitDetailEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.ApiEntitiesCommitDetail();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['create', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'api_entities_commit_detail.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "author_email": { "a": true, "h": "Author Email", "n": "author_email", "r": false, "t": "`$STRING`", "key$": "author_email", "index$": 0 }, "author_name": { "a": true, "h": "Author Name", "n": "author_name", "r": false, "t": "`$STRING`", "key$": "author_name", "index$": 1 }, "authored_date": { "a": true, "fo": "date-time", "h": "Authored Date", "n": "authored_date", "r": false, "t": "`$STRING`", "key$": "authored_date", "index$": 2 }, "committed_date": { "a": true, "fo": "date-time", "h": "Committed Date", "n": "committed_date", "r": false, "t": "`$STRING`", "key$": "committed_date", "index$": 3 }, "committer_email": { "a": true, "h": "Committer Email", "n": "committer_email", "r": false, "t": "`$STRING`", "key$": "committer_email", "index$": 4 }, "committer_name": { "a": true, "h": "Committer Name", "n": "committer_name", "r": false, "t": "`$STRING`", "key$": "committer_name", "index$": 5 }, "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": false, "t": "`$STRING`", "key$": "created_at", "index$": 6 }, "extended_trailers": { "a": true, "h": "Extended Trailers", "n": "extended_trailers", "r": false, "t": "`$OBJECT`", "key$": "extended_trailers", "index$": 7 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 8 }, "last_pipeline": { "a": true, "h": "Last Pipeline", "n": "last_pipeline", "r": false, "sh": "API_Entities_Ci_PipelineBasic model", "t": "`$OBJECT`", "key$": "last_pipeline", "index$": 9 }, "message": { "a": true, "h": "Message", "n": "message", "r": false, "t": "`$STRING`", "key$": "message", "index$": 10 }, "parent_ids": { "a": true, "h": "Parent Ids", "n": "parent_ids", "r": false, "t": "`$ARRAY`", "key$": "parent_ids", "index$": 11 }, "project_id": { "a": true, "fo": "int32", "h": "Project Id", "n": "project_id", "r": false, "t": "`$INTEGER`", "key$": "project_id", "index$": 12 }, "short_id": { "a": true, "h": "Short Id", "n": "short_id", "r": false, "t": "`$STRING`", "key$": "short_id", "index$": 13 }, "stats": { "a": true, "h": "Stats", "n": "stats", "r": false, "t": "`$OBJECT`", "key$": "stats", "index$": 14 }, "status": { "a": true, "h": "Status", "n": "status", "r": false, "t": "`$STRING`", "key$": "status", "index$": 15 }, "title": { "a": true, "h": "Title", "n": "title", "r": false, "t": "`$STRING`", "key$": "title", "index$": 16 }, "trailers": { "a": true, "h": "Trailers", "n": "trailers", "r": false, "t": "`$OBJECT`", "key$": "trailers", "index$": 17 }, "web_url": { "a": true, "h": "Web Url", "n": "web_url", "r": false, "t": "`$STRING`", "key$": "web_url", "index$": 18 } }, "id": { "field": "id", "name": "id" }, "name": "api_entities_commit_detail", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /api/v4/projects/{id}/repository/commits", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "post_api_v4_projects_id_repository_commit", "or": "post_api_v4_projects_id_repository_commit", "r": true, "t": "`$OBJECT`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/v4/projects/{id}/repository/commits", "q": { "exist": ["post_api_v4_projects_id_repository_commit", "project_id"] }, "r": { "param": { "id": "project_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "repository" }, { "lit": "commits" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/v4/projects/{id}/repository/commits/{sha}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "sha", "or": "sha", "r": true, "t": "`$ANY`", "index$": 1 }], "query": [{ "a": true, "k": "query", "n": "stat", "or": "stat", "r": false, "t": "`$ANY`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/v4/projects/{id}/repository/commits/{sha}", "q": { "exist": ["project_id", "sha", "stat"] }, "r": { "param": { "id": "project_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "repository" }, { "lit": "commits" }, { "var": "sha" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /api/v4/projects/{id}/repository/submodules/{submodule}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "ex": "gitlab-org/gitlab", "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "gitlab-org/gitlab-shell", "k": "param", "n": "submodule", "or": "submodule", "r": true, "t": "`$ANY`", "index$": 1 }], "query": [{ "a": true, "k": "query", "n": "put_api_v4_projects_id_repository_submodules_submodule", "or": "put_api_v4_projects_id_repository_submodules_submodule", "r": true, "t": "`$OBJECT`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/api/v4/projects/{id}/repository/submodules/{submodule}", "q": { "exist": ["project_id", "put_api_v4_projects_id_repository_submodules_submodule", "submodule"] }, "r": { "param": { "id": "project_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "repository" }, { "lit": "submodules" }, { "var": "submodule" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.project"], ["$.main.kit.entity.project"], ["$.main.kit.entity.project"]] }, "key$": "api_entities_commit_detail", "name__orig": "api_entities_commit_detail", "Name": "ApiEntitiesCommitDetail", "name_": "api_entities_commit_detail", "name-": "api-entities-commit-detail", "NAME": "API_ENTITIES_COMMIT_DETAIL", "index$": 47 }, { "active": true, "entity": "api_entities_commit_detail", "key$": "BasicApiEntitiesCommitDetailFlow", "kind": "basic", "name": "BasicApiEntitiesCommitDetailFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "api_entities_commit_detail_ref01" }, "m": { "project_id": "project01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": { "project_id": "project01" }, "i": { "ref": "api_entities_commit_detail_ref01", "srcdatavar": "api_entities_commit_detail_ref01_data", "suffix": "_up0", "textfield": "author_email" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-api_entities_commit_detail_ref01" } }], "v": [], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "api_entities_commit_detail_ref01", "srcdatavar": "api_entities_commit_detail_ref01_data", "suffix": "_dt0" }, "m": { "id": "api_entities_commit_detail01", "project_id": "project01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-api_entities_commit_detail_ref01" } }], "index$": 2 }] }, 'ApiEntitiesCommitDetail', { "POST /api/v4/projects/{id}/repository/commits": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project", "type": "string", "required": true, "index$": 0 }, { "name": "postApiV4ProjectsIdRepositoryCommits", "in": "body", "required": true, "schema": { "type": "object", "properties": { "branch": { "type": "string", "description": "Name of the branch to commit into. To create a new branch, also provide either `start_branch` or `start_sha`, and optionally `start_project`.", "example": "master" }, "commit_message": { "type": "string", "description": "Commit message", "example": "initial commit" }, "actions": { "type": "array", "description": "Actions to perform in commit", "items": { "type": "object", "properties": { "action": { "type": "string", "description": "The action to perform, `create`, `delete`, `move`, `update`, `chmod`", "enum": ["create", "update", "move", "delete", "chmod"] }, "file_path": { "type": "string", "description": "Full path to the file.", "example": "lib/class.rb" }, "previous_path": { "type": "string", "description": "Original full path to the file being moved.", "example": "lib/class.rb" }, "content": { "type": "string", "description": "File content", "example": "Some file content" }, "encoding": { "type": "string", "description": "`text` or `base64`", "enum": ["text", "base64"], "default": "text" }, "last_commit_id": { "type": "string", "description": "Last known file commit id", "example": "2695effb5807a22ff3d138d593fd856244e155e7" }, "execute_filemode": { "type": "boolean", "description": "When `true/false` enables/disables the execute flag on the file." } }, "required": ["action", "file_path", "previous_path", "content", "execute_filemode"] } }, "start_branch": { "type": "string", "description": "Name of the branch to start the new branch from", "example": "staging" }, "start_sha": { "type": "string", "description": "SHA of the commit to start the new branch from", "example": "2695effb5807a22ff3d138d593fd856244e155e7" }, "start_project": { "type": "integer", "format": "int32", "description": "The ID or path of the project to start the new branch from", "example": 1 }, "author_email": { "type": "string", "description": "Author email for commit", "example": "janedoe@example.com" }, "author_name": { "type": "string", "description": "Author name for commit", "example": "Jane Doe" }, "stats": { "type": "boolean", "description": "Include commit stats", "default": true }, "force": { "type": "boolean", "description": "When `true` overwrites the target branch with a new commit based on the `start_branch` or `start_sha`", "default": false } }, "required": ["branch", "commit_message", "actions"], "description": "Commit multiple file changes as one commit", "x-ref": "#/definitions/postApiV4ProjectsIdRepositoryCommits" }, "index$": 1 }] }, "GET /api/v4/projects/{id}/repository/commits/{sha}": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project", "type": "string", "required": true, "index$": 0 }, { "in": "path", "name": "sha", "description": "A commit sha, or the name of a branch or tag", "type": "string", "required": true, "index$": 1 }, { "in": "query", "name": "stats", "description": "Include commit stats", "type": "boolean", "default": true, "required": false, "index$": 2 }] }, "PUT /api/v4/projects/{id}/repository/submodules/{submodule}": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of a project", "type": "string", "required": true, "example": "gitlab-org/gitlab", "index$": 0 }, { "in": "path", "name": "submodule", "description": "URL-encoded full path to submodule.", "type": "string", "required": true, "example": "gitlab-org/gitlab-shell", "index$": 1 }, { "name": "putApiV4ProjectsIdRepositorySubmodulesSubmodule", "in": "body", "required": true, "schema": { "type": "object", "properties": { "commit_sha": { "type": "string", "description": "Commit sha to update the submodule to.", "example": "ed899a2f4b50b4370feeea94676502b42383c746" }, "branch": { "type": "string", "description": "Name of the branch to commit into.", "example": "main" }, "commit_message": { "type": "string", "description": "Commit message. If no message is provided a default one will be set.", "example": "Commit message" } }, "required": ["commit_sha", "branch"], "description": "Update existing submodule reference in repository", "x-ref": "#/definitions/putApiV4ProjectsIdRepositorySubmodulesSubmodule" }, "index$": 2 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const api_entities_commit_detail_ref01_ent = client.ApiEntitiesCommitDetail();
        let api_entities_commit_detail_ref01_data = setup.data.new.api_entities_commit_detail['api_entities_commit_detail_ref01'];
        api_entities_commit_detail_ref01_data['project_id'] = setup.idmap['project01'];
        api_entities_commit_detail_ref01_data = (await api_entities_commit_detail_ref01_ent.create(api_entities_commit_detail_ref01_data)).data();
        (0, node_assert_1.default)(null != api_entities_commit_detail_ref01_data.id);
        // UPDATE
        const api_entities_commit_detail_ref01_data_up0 = {};
        api_entities_commit_detail_ref01_data_up0.id = api_entities_commit_detail_ref01_data.id;
        api_entities_commit_detail_ref01_data_up0['project_id'] = setup.idmap['project_id'];
        const api_entities_commit_detail_ref01_markdef_up0 = { name: 'author_email', value: 'Mark01-api_entities_commit_detail_ref01_' + setup.now };
        api_entities_commit_detail_ref01_data_up0[api_entities_commit_detail_ref01_markdef_up0.name] = api_entities_commit_detail_ref01_markdef_up0.value;
        const api_entities_commit_detail_ref01_resdata_up0 = (await api_entities_commit_detail_ref01_ent.update(api_entities_commit_detail_ref01_data_up0)).data();
        (0, node_assert_1.default)(api_entities_commit_detail_ref01_resdata_up0.id === api_entities_commit_detail_ref01_data_up0.id);
        (0, node_assert_1.default)(api_entities_commit_detail_ref01_resdata_up0[api_entities_commit_detail_ref01_markdef_up0.name] === api_entities_commit_detail_ref01_markdef_up0.value);
        // LOAD
        const api_entities_commit_detail_ref01_match_dt0 = {};
        api_entities_commit_detail_ref01_match_dt0.id = api_entities_commit_detail_ref01_data.id;
        const api_entities_commit_detail_ref01_data_dt0 = (await api_entities_commit_detail_ref01_ent.load(api_entities_commit_detail_ref01_match_dt0)).data();
        (0, node_assert_1.default)(api_entities_commit_detail_ref01_data_dt0.id === api_entities_commit_detail_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/api_entities_commit_detail/ApiEntitiesCommitDetailTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['api_entities_commit_detail01', 'api_entities_commit_detail02', 'api_entities_commit_detail03', 'project01', 'project02', 'project03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_API_ENTITIES_COMMIT_DETAIL_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_API_ENTITIES_COMMIT_DETAIL_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_API_ENTITIES_COMMIT_DETAIL_ENTID'];
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
//# sourceMappingURL=ApiEntitiesCommitDetailEntity.test.js.map