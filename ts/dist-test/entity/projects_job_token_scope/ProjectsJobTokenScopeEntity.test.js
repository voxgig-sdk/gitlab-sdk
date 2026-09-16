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
(0, node_test_1.describe)('ProjectsJobTokenScopeEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.ProjectsJobTokenScope();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['update']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'projects_job_token_scope.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [], "name": "projects_job_token_scope", "op": { "remove": { "input": "data", "name": "remove", "points": [{ "active": true, "args": { "params": [{ "active": true, "example": 1, "kind": "param", "name": "project_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": 2, "kind": "param", "name": "target_group_id", "orig": "target_group_id", "reqd": true, "type": "`$STRING`", "index$": 1 }] }, "contract": { "id": "DELETE /api/v4/projects/{id}/job_token_scope/groups_allowlist/{target_group_id}", "json": "{\"operationId\":\"deleteApiV4ProjectsIdJobTokenScopeGroupsAllowlistTargetGroupId\",\"parameters\":[{\"description\":\"ID of user project\",\"example\":1,\"format\":\"int32\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"integer\"},{\"description\":\"ID of the group to be removed from the allowlist\",\"example\":2,\"format\":\"int32\",\"in\":\"path\",\"name\":\"target_group_id\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"204\":{\"description\":\"Delete target group from allowlist.\"},\"400\":{\"description\":\"Bad Request\"},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "DELETE", "orig": "/api/v4/projects/{id}/job_token_scope/groups_allowlist/{target_group_id}", "rename": { "param": { "id": "project_id" } }, "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "job_token_scope" }, { "lit": "groups_allowlist" }, { "var": "target_group_id" }], "select": { "exist": ["project_id", "target_group_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "active": true, "args": { "params": [{ "active": true, "example": 1, "kind": "param", "name": "project_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": 2, "kind": "param", "name": "target_project_id", "orig": "target_project_id", "reqd": true, "type": "`$STRING`", "index$": 1 }] }, "contract": { "id": "DELETE /api/v4/projects/{id}/job_token_scope/allowlist/{target_project_id}", "json": "{\"operationId\":\"deleteApiV4ProjectsIdJobTokenScopeAllowlistTargetProjectId\",\"parameters\":[{\"description\":\"ID of user project\",\"example\":1,\"format\":\"int32\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"integer\"},{\"description\":\"ID of the project to be removed from the allowlist\",\"example\":2,\"format\":\"int32\",\"in\":\"path\",\"name\":\"target_project_id\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"204\":{\"description\":\"Delete project from allowlist.\"},\"400\":{\"description\":\"Bad Request\"},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "DELETE", "orig": "/api/v4/projects/{id}/job_token_scope/allowlist/{target_project_id}", "rename": { "param": { "id": "project_id" } }, "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "job_token_scope" }, { "lit": "allowlist" }, { "var": "target_project_id" }], "select": { "exist": ["project_id", "target_project_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "project_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }], "query": [{ "active": true, "kind": "query", "name": "patch_api_v4_projects_id_job_token_scope", "orig": "patch_api_v4_projects_id_job_token_scope", "reqd": true, "type": "`$OBJECT`", "index$": 0 }] }, "contract": { "id": "PATCH /api/v4/projects/{id}/job_token_scope", "json": "{\"consumes\":[\"application/json\"],\"operationId\":\"patchApiV4ProjectsIdJobTokenScope\",\"parameters\":[{\"format\":\"int32\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"integer\"},{\"in\":\"body\",\"name\":\"patchApiV4ProjectsIdJobTokenScope\",\"required\":true,\"schema\":{\"description\":\"Patch CI_JOB_TOKEN access settings.\",\"properties\":{\"enabled\":{\"description\":\"Indicates CI/CD job tokens generated in other projects have restricted access to this project.\",\"type\":\"boolean\"}},\"required\":[\"enabled\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"204\":{\"description\":\"Patch CI_JOB_TOKEN access settings.\"},\"400\":{\"description\":\"Bad Request\"},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "PATCH", "orig": "/api/v4/projects/{id}/job_token_scope", "rename": { "param": { "id": "project_id" } }, "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "job_token_scope" }], "select": { "exist": ["patch_api_v4_projects_id_job_token_scope", "project_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["project"], ["project", "allowlist"], ["project", "groups_allowlist"]] }, "key$": "projects_job_token_scope", "name__orig": "projects_job_token_scope", "Name": "ProjectsJobTokenScope", "name_": "projects_job_token_scope", "name-": "projects-job-token-scope", "NAME": "PROJECTS_JOB_TOKEN_SCOPE", "index$": 247 }, { "active": true, "entity": "projects_job_token_scope", "key$": "BasicProjectsJobTokenScopeFlow", "kind": "basic", "name": "BasicProjectsJobTokenScopeFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "projects_job_token_scope_ref01", "srcdatavar": "projects_job_token_scope_ref01_data", "suffix": "_up0" }, "match": {}, "op": "update", "spec": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-projects_job_token_scope_ref01" } }], "valid": [], "index$": 0 }] }, 'ProjectsJobTokenScope');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let projects_job_token_scope_ref01_data = Object.values(setup.data.existing.projects_job_token_scope)[0];
        // UPDATE
        const projects_job_token_scope_ref01_ent = client.ProjectsJobTokenScope();
        const projects_job_token_scope_ref01_data_up0 = {};
        const projects_job_token_scope_ref01_resdata_up0 = (await projects_job_token_scope_ref01_ent.update(projects_job_token_scope_ref01_data_up0)).data();
        (0, node_assert_1.default)(null != projects_job_token_scope_ref01_resdata_up0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/projects_job_token_scope/ProjectsJobTokenScopeTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['projects_job_token_scope01', 'projects_job_token_scope02', 'projects_job_token_scope03', 'project01', 'project02', 'project03', 'project01', 'project02', 'project03', 'allowlist01', 'allowlist02', 'allowlist03', 'project01', 'project02', 'project03', 'groups_allowlist01', 'groups_allowlist02', 'groups_allowlist03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_PROJECTS_JOB_TOKEN_SCOPE_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_PROJECTS_JOB_TOKEN_SCOPE_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_PROJECTS_JOB_TOKEN_SCOPE_ENTID'];
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
//# sourceMappingURL=ProjectsJobTokenScopeEntity.test.js.map