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
(0, node_test_1.describe)('ApiEntitiesCiLintResultEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.ApiEntitiesCiLintResult();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['create', 'list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'api_entities_ci_lint_result.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "blob", "req": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "context_project", "req": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "context_sha", "req": false, "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "errors", "req": false, "type": "`$ARRAY`", "index$": 3 }, { "active": true, "name": "extra", "req": false, "type": "`$OBJECT`", "index$": 4 }, { "active": true, "name": "includes", "req": false, "type": "`$ARRAY`", "index$": 5 }, { "active": true, "name": "jobs", "req": false, "type": "`$ARRAY`", "index$": 6 }, { "active": true, "name": "location", "req": false, "type": "`$STRING`", "index$": 7 }, { "active": true, "name": "merged_yaml", "req": false, "type": "`$STRING`", "index$": 8 }, { "active": true, "name": "raw", "req": false, "type": "`$STRING`", "index$": 9 }, { "active": true, "name": "type", "req": false, "type": "`$STRING`", "index$": 10 }, { "active": true, "name": "valid", "req": false, "type": "`$BOOLEAN`", "index$": 11 }, { "active": true, "name": "warnings", "req": false, "type": "`$ARRAY`", "index$": 12 }], "name": "api_entities_ci_lint_result", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "project_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }], "query": [{ "active": true, "kind": "query", "name": "post_api_v4_projects_id_ci_lint", "orig": "post_api_v4_projects_id_ci_lint", "reqd": true, "type": "`$OBJECT`", "index$": 0 }] }, "contract": { "id": "POST /api/v4/projects/{id}/ci/lint", "json": "{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4ProjectsIdCiLint\",\"parameters\":[{\"format\":\"int32\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"integer\"},{\"in\":\"body\",\"name\":\"postApiV4ProjectsIdCiLint\",\"required\":true,\"schema\":{\"description\":\"Validate a CI YAML configuration with a namespace\",\"properties\":{\"content\":{\"description\":\"Content of .gitlab-ci.yml\",\"type\":\"string\"},\"dry_run\":{\"default\":false,\"description\":\"Run pipeline creation simulation, or only do static check. This is false by default\",\"type\":\"boolean\"},\"include_jobs\":{\"description\":\"If the list of jobs that would exist in a static check or pipeline\\n        simulation should be included in the response. This is false by default\",\"type\":\"boolean\"},\"ref\":{\"description\":\"When dry_run is true, sets the branch or tag to use. Defaults to the project’s default branch when not set\",\"type\":\"string\"}},\"required\":[\"content\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Validate a CI YAML configuration with a namespace\",\"schema\":{\"description\":\"API_Entities_Ci_Lint_Result model\",\"properties\":{\"errors\":{\"example\":\"variables config should be a hash of key value pairs\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"includes\":{\"example\":\"{ \\\"blob\\\": \\\"https://gitlab.com/root/example-project/-/blob/...\",\"items\":{\"properties\":{\"blob\":{\"example\":\"https://gitlab.com/gitlab-org/gitlab/-/blob/e52d6d0246d7375291850e61f0abc101fbda9dc2/.gitlab/ci/build-images.gitlab-ci.yml\",\"type\":\"string\"},\"context_project\":{\"example\":\"gitlab-org/gitlab\",\"type\":\"string\"},\"context_sha\":{\"example\":\"e52d6d0246d7375291850e61f0abc101fbda9dc2\",\"type\":\"string\"},\"extra\":{\"example\":\"{ \\\"job_name\\\": \\\"test\\\", \\\"project\\\": \\\"gitlab-org/gitlab\\\", \\\"ref\\\": \\\"master\\\" }\",\"type\":\"object\"},\"location\":{\"example\":\".gitlab/ci/build-images.gitlab-ci.yml\",\"type\":\"string\"},\"raw\":{\"example\":\"https://gitlab.com/gitlab-org/gitlab/-/raw/e52d6d0246d7375291850e61f0abc101fbda9dc2/.gitlab/ci/build-images.gitlab-ci.yml\",\"type\":\"string\"},\"type\":{\"example\":\"local\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"jobs\":{\"example\":\"{ \\\"name\\\": \\\"test: .... }\",\"items\":{\"type\":\"object\"},\"type\":\"array\"},\"merged_yaml\":{\"example\":\"---\\\\n:another_test:\\\\n  :stage: test\\\\n\\n          :script: echo 2\\\\n:test:\\\\n  :stage: test\\\\n  :script: echo 1\\\\n\",\"type\":\"string\"},\"valid\":{\"type\":\"boolean\"},\"warnings\":{\"example\":\"jobs:job may allow multiple pipelines ...\",\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "POST", "orig": "/api/v4/projects/{id}/ci/lint", "rename": { "param": { "id": "project_id" } }, "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "ci" }, { "lit": "lint" }], "select": { "exist": ["post_api_v4_projects_id_ci_lint", "project_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "project_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }], "query": [{ "active": true, "kind": "query", "name": "content_ref", "orig": "content_ref", "reqd": false, "type": "`$ANY`", "index$": 0 }, { "active": true, "kind": "query", "name": "dry_run", "orig": "dry_run", "reqd": false, "type": "`$ANY`", "index$": 1 }, { "active": true, "kind": "query", "name": "dry_run_ref", "orig": "dry_run_ref", "reqd": false, "type": "`$ANY`", "index$": 2 }, { "active": true, "kind": "query", "name": "include_job", "orig": "include_job", "reqd": false, "type": "`$ANY`", "index$": 3 }, { "active": true, "kind": "query", "name": "ref", "orig": "ref", "reqd": false, "type": "`$ANY`", "index$": 4 }, { "active": true, "kind": "query", "name": "sha", "orig": "sha", "reqd": false, "type": "`$ANY`", "index$": 5 }] }, "contract": { "id": "GET /api/v4/projects/{id}/ci/lint", "json": "{\"operationId\":\"getApiV4ProjectsIdCiLint\",\"parameters\":[{\"description\":\"Deprecated: Use content_ref instead\",\"in\":\"query\",\"name\":\"sha\",\"required\":false,\"type\":\"string\"},{\"description\":\"The CI/CD configuration content is taken from this commit SHA, branch or tag. Defaults to the HEAD of the project's default branch\",\"in\":\"query\",\"name\":\"content_ref\",\"required\":false,\"type\":\"string\"},{\"default\":false,\"description\":\"Run pipeline creation simulation, or only do static check. This is false by default\",\"in\":\"query\",\"name\":\"dry_run\",\"required\":false,\"type\":\"boolean\"},{\"description\":\"If the list of jobs that would exist in a static check or pipeline\\n        simulation should be included in the response. This is false by default\",\"in\":\"query\",\"name\":\"include_jobs\",\"required\":false,\"type\":\"boolean\"},{\"description\":\"Deprecated: Use dry_run_ref instead\",\"in\":\"query\",\"name\":\"ref\",\"required\":false,\"type\":\"string\"},{\"description\":\"Branch or tag used as context when executing a dry run. Defaults to the default branch of the project. Only used when dry_run is true\",\"in\":\"query\",\"name\":\"dry_run_ref\",\"required\":false,\"type\":\"string\"},{\"format\":\"int32\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Validates a CI YAML configuration with a namespace\",\"schema\":{\"description\":\"API_Entities_Ci_Lint_Result model\",\"properties\":{\"errors\":{\"example\":\"variables config should be a hash of key value pairs\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"includes\":{\"example\":\"{ \\\"blob\\\": \\\"https://gitlab.com/root/example-project/-/blob/...\",\"items\":{\"properties\":{\"blob\":{\"example\":\"https://gitlab.com/gitlab-org/gitlab/-/blob/e52d6d0246d7375291850e61f0abc101fbda9dc2/.gitlab/ci/build-images.gitlab-ci.yml\",\"type\":\"string\"},\"context_project\":{\"example\":\"gitlab-org/gitlab\",\"type\":\"string\"},\"context_sha\":{\"example\":\"e52d6d0246d7375291850e61f0abc101fbda9dc2\",\"type\":\"string\"},\"extra\":{\"example\":\"{ \\\"job_name\\\": \\\"test\\\", \\\"project\\\": \\\"gitlab-org/gitlab\\\", \\\"ref\\\": \\\"master\\\" }\",\"type\":\"object\"},\"location\":{\"example\":\".gitlab/ci/build-images.gitlab-ci.yml\",\"type\":\"string\"},\"raw\":{\"example\":\"https://gitlab.com/gitlab-org/gitlab/-/raw/e52d6d0246d7375291850e61f0abc101fbda9dc2/.gitlab/ci/build-images.gitlab-ci.yml\",\"type\":\"string\"},\"type\":{\"example\":\"local\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"jobs\":{\"example\":\"{ \\\"name\\\": \\\"test: .... }\",\"items\":{\"type\":\"object\"},\"type\":\"array\"},\"merged_yaml\":{\"example\":\"---\\\\n:another_test:\\\\n  :stage: test\\\\n\\n          :script: echo 2\\\\n:test:\\\\n  :stage: test\\\\n  :script: echo 1\\\\n\",\"type\":\"string\"},\"valid\":{\"type\":\"boolean\"},\"warnings\":{\"example\":\"jobs:job may allow multiple pipelines ...\",\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"type\":\"object\"}},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/v4/projects/{id}/ci/lint", "rename": { "param": { "id": "project_id" } }, "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "ci" }, { "lit": "lint" }], "select": { "exist": ["content_ref", "dry_run", "dry_run_ref", "include_job", "project_id", "ref", "sha"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [["project"]] }, "key$": "api_entities_ci_lint_result", "name__orig": "api_entities_ci_lint_result", "Name": "ApiEntitiesCiLintResult", "name_": "api_entities_ci_lint_result", "name-": "api-entities-ci-lint-result", "NAME": "API_ENTITIES_CI_LINT_RESULT", "index$": 26 }, { "active": true, "entity": "api_entities_ci_lint_result", "key$": "BasicApiEntitiesCiLintResultFlow", "kind": "basic", "name": "BasicApiEntitiesCiLintResultFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "api_entities_ci_lint_result_ref01" }, "match": { "project_id": "project01" }, "op": "create", "spec": [], "valid": [], "index$": 0 }, { "active": true, "data": {}, "input": {}, "match": { "project_id": "project01" }, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "api_entities_ci_lint_result_ref01" } }], "index$": 1 }] }, 'ApiEntitiesCiLintResult');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const api_entities_ci_lint_result_ref01_ent = client.ApiEntitiesCiLintResult();
        let api_entities_ci_lint_result_ref01_data = setup.data.new.api_entities_ci_lint_result['api_entities_ci_lint_result_ref01'];
        api_entities_ci_lint_result_ref01_data['project_id'] = setup.idmap['project01'];
        api_entities_ci_lint_result_ref01_data = (await api_entities_ci_lint_result_ref01_ent.create(api_entities_ci_lint_result_ref01_data)).data();
        (0, node_assert_1.default)(null != api_entities_ci_lint_result_ref01_data);
        // LIST
        const api_entities_ci_lint_result_ref01_match = {};
        api_entities_ci_lint_result_ref01_match['project_id'] = setup.idmap['project01'];
        const api_entities_ci_lint_result_ref01_list = (await api_entities_ci_lint_result_ref01_ent.list(api_entities_ci_lint_result_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/api_entities_ci_lint_result/ApiEntitiesCiLintResultTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['api_entities_ci_lint_result01', 'api_entities_ci_lint_result02', 'api_entities_ci_lint_result03', 'project01', 'project02', 'project03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_API_ENTITIES_CI_LINT_RESULT_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_API_ENTITIES_CI_LINT_RESULT_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_API_ENTITIES_CI_LINT_RESULT_ENTID'];
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
//# sourceMappingURL=ApiEntitiesCiLintResultEntity.test.js.map