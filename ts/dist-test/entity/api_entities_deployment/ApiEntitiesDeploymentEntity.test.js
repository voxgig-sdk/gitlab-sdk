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
(0, node_test_1.describe)('ApiEntitiesDeploymentEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.ApiEntitiesDeployment();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'api_entities_deployment.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "format": "date-time", "name": "created_at", "req": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "deployable", "req": false, "short": "API_Entities_Ci_Job model", "type": "`$OBJECT`", "index$": 1 }, { "active": true, "name": "environment", "req": false, "short": "API_Entities_EnvironmentBasic model", "type": "`$OBJECT`", "index$": 2 }, { "active": true, "format": "int32", "name": "id", "req": false, "type": "`$INTEGER`", "index$": 3 }, { "active": true, "format": "int32", "name": "iid", "req": false, "type": "`$INTEGER`", "index$": 4 }, { "active": true, "name": "ref", "req": false, "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "sha", "req": false, "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "status", "req": false, "type": "`$STRING`", "index$": 7 }, { "active": true, "format": "date-time", "name": "updated_at", "req": false, "type": "`$STRING`", "index$": 8 }, { "active": true, "name": "user", "req": false, "short": "API_Entities_UserBasic model", "type": "`$OBJECT`", "index$": 9 }], "id": { "field": "id", "name": "id" }, "name": "api_entities_deployment", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "project_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }], "query": [{ "active": true, "kind": "query", "name": "environment", "orig": "environment", "reqd": false, "type": "`$ANY`", "index$": 0 }, { "active": true, "kind": "query", "name": "finished_after", "orig": "finished_after", "reqd": false, "type": "`$ANY`", "index$": 1 }, { "active": true, "kind": "query", "name": "finished_before", "orig": "finished_before", "reqd": false, "type": "`$ANY`", "index$": 2 }, { "active": true, "kind": "query", "name": "order_by", "orig": "order_by", "reqd": false, "type": "`$ANY`", "index$": 3 }, { "active": true, "example": 1, "kind": "query", "name": "page", "orig": "page", "reqd": false, "type": "`$INTEGER`", "index$": 4 }, { "active": true, "example": 20, "kind": "query", "name": "per_page", "orig": "per_page", "reqd": false, "type": "`$INTEGER`", "index$": 5 }, { "active": true, "kind": "query", "name": "sort", "orig": "sort", "reqd": false, "type": "`$ANY`", "index$": 6 }, { "active": true, "kind": "query", "name": "status", "orig": "status", "reqd": false, "type": "`$ANY`", "index$": 7 }, { "active": true, "kind": "query", "name": "updated_after", "orig": "updated_after", "reqd": false, "type": "`$ANY`", "index$": 8 }, { "active": true, "kind": "query", "name": "updated_before", "orig": "updated_before", "reqd": false, "type": "`$ANY`", "index$": 9 }] }, "contract": { "id": "GET /api/v4/projects/{id}/deployments", "json": "{\"operationId\":\"getApiV4ProjectsIdDeployments\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project owned by the authenticated user\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"default\":1,\"description\":\"Current page number\",\"example\":1,\"format\":\"int32\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"type\":\"integer\"},{\"default\":20,\"description\":\"Number of items per page\",\"example\":20,\"format\":\"int32\",\"in\":\"query\",\"name\":\"per_page\",\"required\":false,\"type\":\"integer\"},{\"default\":\"id\",\"description\":\"Return deployments ordered by either one of `id`, `iid`, `created_at`, `updated_at` or `ref` fields. Default is `id`\",\"enum\":[\"id\",\"iid\",\"created_at\",\"updated_at\",\"finished_at\"],\"in\":\"query\",\"name\":\"order_by\",\"required\":false,\"type\":\"string\"},{\"default\":\"asc\",\"description\":\"Return deployments sorted in `asc` or `desc` order. Default is `asc`\",\"enum\":[\"asc\",\"desc\"],\"in\":\"query\",\"name\":\"sort\",\"required\":false,\"type\":\"string\"},{\"description\":\"Return deployments updated after the specified date. Expected in ISO 8601 format (`2019-03-15T08:00:00Z`)\",\"format\":\"date-time\",\"in\":\"query\",\"name\":\"updated_after\",\"required\":false,\"type\":\"string\"},{\"description\":\"Return deployments updated before the specified date. Expected in ISO 8601 format (`2019-03-15T08:00:00Z`)\",\"format\":\"date-time\",\"in\":\"query\",\"name\":\"updated_before\",\"required\":false,\"type\":\"string\"},{\"description\":\"Return deployments finished after the specified date. Expected in ISO 8601 format (`2019-03-15T08:00:00Z`)\",\"format\":\"date-time\",\"in\":\"query\",\"name\":\"finished_after\",\"required\":false,\"type\":\"string\"},{\"description\":\"Return deployments finished before the specified date. Expected in ISO 8601 format (`2019-03-15T08:00:00Z`)\",\"format\":\"date-time\",\"in\":\"query\",\"name\":\"finished_before\",\"required\":false,\"type\":\"string\"},{\"description\":\"The name of the environment to filter deployments by\",\"in\":\"query\",\"name\":\"environment\",\"required\":false,\"type\":\"string\"},{\"description\":\"The status to filter deployments by. One of `created`, `running`, `success`, `failed`, `canceled`, or `blocked`\",\"enum\":[\"created\",\"running\",\"success\",\"failed\",\"canceled\",\"skipped\",\"blocked\"],\"in\":\"query\",\"name\":\"status\",\"required\":false,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"List project deployments\",\"schema\":{\"items\":{\"description\":\"API_Entities_Deployment model\",\"properties\":{\"created_at\":{\"example\":\"2016-08-11T11:32:35.444Z\",\"format\":\"date-time\",\"type\":\"string\"},\"deployable\":{\"description\":\"API_Entities_Ci_Job model\",\"properties\":{\"allow_failure\":{\"type\":\"boolean\"},\"archived\":{\"example\":false,\"type\":\"boolean\"},\"artifacts\":{\"items\":{\"properties\":{\"file_format\":{\"enum\":[\"raw\",\"zip\",\"gzip\"],\"example\":\"zip\",\"type\":\"string\"},\"file_type\":{\"enum\":[\"archive\",\"metadata\",\"trace\",\"junit\",\"sast\",\"dependency_scanning\",\"container_scanning\",\"dast\",\"codequality\",\"license_scanning\",\"performance\",\"metrics\",\"metrics_referee\",\"network_referee\",\"lsif\",\"dotenv\",\"cobertura\",\"terraform\",\"accessibility\",\"cluster_applications\",\"secret_detection\",\"requirements\",\"coverage_fuzzing\",\"browser_performance\",\"load_performance\",\"api_fuzzing\",\"cluster_image_scanning\",\"cyclonedx\",\"requirements_v2\",\"annotations\",\"repository_xray\",\"jacoco\"],\"example\":\"archive\",\"type\":\"string\"},\"filename\":{\"example\":\"artifacts.zip\",\"type\":\"string\"},\"size\":{\"example\":1000,\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"},\"artifacts_expire_at\":{\"example\":\"2016-01-19T09:05:50.355Z\",\"format\":\"date-time\",\"type\":\"string\"},\"artifacts_file\":{\"properties\":{\"filename\":{\"example\":\"artifacts.zip\",\"type\":\"string\"},\"size\":{\"example\":1000,\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"},\"commit\":{\"description\":\"API_Entities_Commit model\",\"properties\":{\"author_email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"author_name\":{\"example\":\"John Smith\",\"type\":\"string\"},\"authored_date\":{\"example\":\"2012-05-28T04:42:42-07:00\",\"format\":\"date-time\",\"type\":\"string\"},\"committed_date\":{\"example\":\"2012-05-28T04:42:42-07:00\",\"format\":\"date-time\",\"type\":\"string\"},\"committer_email\":{\"example\":\"jack@example.com\",\"type\":\"string\"},\"committer_name\":{\"example\":\"Jack Smith\",\"type\":\"string\"},\"created_at\":{\"example\":\"2017-07-26T11:08:53.000+02:00\",\"format\":\"date-time\",\"type\":\"string\"},\"extended_trailers\":{\"example\":\"{ \\\"Signed-off-by\\\": [\\\"John Doe <johndoe@gitlab.com>\\\", \\\"Jane Doe <janedoe@gitlab.com>\\\"] }\",\"type\":\"object\"},\"id\":{\"example\":\"2695effb5807a22ff3d138d593fd856244e155e7\",\"type\":\"string\"},\"message\":{\"example\":\"Initial commit\",\"type\":\"string\"},\"parent_ids\":{\"example\":\"2a4b78934375d7f53875269ffd4f45fd83a84ebe\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"short_id\":{\"example\":\"2695effb\",\"type\":\"string\"},\"title\":{\"example\":\"Initial commit\",\"type\":\"string\"},\"trailers\":{\"example\":\"{ \\\"Merged-By\\\": \\\"Jane Doe janedoe@gitlab.com\\\" }\",\"type\":\"object\"},\"web_url\":{\"example\":\"https://gitlab.example.com/janedoe/gitlab-foss/-/commit/ed899a2f4b50b4370feeea94676502b42383c746\",\"type\":\"string\"}},\"type\":\"object\"},\"coverage\":{\"example\":98.29,\"format\":\"float\",\"type\":\"number\"},\"created_at\":{\"example\":\"2015-12-24T15:51:21.880Z\",\"format\":\"date-time\",\"type\":\"string\"},\"duration\":{\"description\":\"Time spent running\",\"example\":0.465,\"format\":\"float\",\"type\":\"number\"},\"erased_at\":{\"example\":\"2015-12-24T18:00:29.728Z\",\"format\":\"date-time\",\"type\":\"string\"},\"failure_reason\":{\"example\":\"script_failure\",\"type\":\"string\"},\"finished_at\":{\"example\":\"2015-12-24T17:54:31.198Z\",\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"name\":{\"example\":\"deploy_to_production\",\"type\":\"string\"},\"pipeline\":{\"description\":\"API_Entities_Ci_PipelineBasic model\",\"properties\":{\"created_at\":{\"example\":\"2022-10-21T16:49:48.000+02:00\",\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"iid\":{\"example\":2,\"format\":\"int32\",\"type\":\"integer\"},\"project_id\":{\"example\":3,\"format\":\"int32\",\"type\":\"integer\"},\"ref\":{\"example\":\"feature-branch\",\"type\":\"string\"},\"sha\":{\"example\":\"0ec9e58fdfca6cdd6652c083c9edb53abc0bad52\",\"type\":\"string\"},\"source\":{\"example\":\"push\",\"type\":\"string\"},\"status\":{\"example\":\"success\",\"type\":\"string\"},\"updated_at\":{\"example\":\"2022-10-21T16:49:48.000+02:00\",\"format\":\"date-time\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/gitlab-org/gitlab-foss/-/pipelines/61\",\"type\":\"string\"}},\"type\":\"object\"},\"project\":{\"properties\":{\"ci_job_token_scope_enabled\":{\"example\":false,\"type\":\"string\"}},\"type\":\"object\"},\"queued_duration\":{\"description\":\"Time spent enqueued\",\"example\":0.123,\"format\":\"float\",\"type\":\"number\"},\"ref\":{\"example\":\"main\",\"type\":\"string\"},\"runner\":{\"description\":\"API_Entities_Ci_Runner model\",\"properties\":{\"active\":{\"example\":true,\"type\":\"boolean\"},\"created_at\":{\"example\":\"2025-05-03T00:00:00.000Z\",\"format\":\"date-time\",\"type\":\"string\"},\"created_by\":{\"description\":\"API_Entities_UserBasic model\",\"properties\":{\"avatar_path\":{\"example\":\"/user/avatar/28/The-Big-Lebowski-400-400.png\",\"type\":\"string\"},\"avatar_url\":{\"example\":\"https://gravatar.com/avatar/1\",\"type\":\"string\"},\"custom_attributes\":{\"items\":{\"description\":\"API_Entities_CustomAttribute model\",\"properties\":{\"key\":{\"example\":\"foo\",\"type\":\"string\"},\"value\":{\"example\":\"bar\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"locked\":{\"type\":\"boolean\"},\"name\":{\"example\":\"Administrator\",\"type\":\"string\"},\"public_email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"state\":{\"example\":\"active\",\"type\":\"string\"},\"username\":{\"example\":\"admin\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/root\",\"type\":\"string\"}},\"type\":\"object\"},\"description\":{\"example\":\"test-1-20150125\",\"type\":\"string\"},\"id\":{\"example\":8,\"format\":\"int32\",\"type\":\"integer\"},\"ip_address\":{\"example\":\"127.0.0.1\",\"type\":\"string\"},\"is_shared\":{\"example\":true,\"type\":\"boolean\"},\"job_execution_status\":{\"enum\":[\"active\",\"idle\"],\"example\":\"idle\",\"type\":\"string\"},\"name\":{\"example\":\"test\",\"type\":\"string\"},\"online\":{\"example\":true,\"type\":\"boolean\"},\"paused\":{\"example\":false,\"type\":\"boolean\"},\"runner_type\":{\"enum\":[\"instance_type\",\"group_type\",\"project_type\"],\"example\":\"instance_type\",\"type\":\"string\"},\"status\":{\"example\":\"online\",\"type\":\"string\"}},\"type\":\"object\"},\"runner_manager\":{\"description\":\"API_Entities_Ci_RunnerManager model\",\"properties\":{\"architecture\":{\"example\":\"amd64\",\"type\":\"string\"},\"contacted_at\":{\"example\":\"2023-10-24T01:27:06.549Z\",\"type\":\"string\"},\"created_at\":{\"example\":\"2023-10-24T01:27:06.549Z\",\"type\":\"string\"},\"id\":{\"example\":8,\"format\":\"int32\",\"type\":\"integer\"},\"ip_address\":{\"example\":\"127.0.0.1\",\"type\":\"string\"},\"job_execution_status\":{\"enum\":[\"active\",\"idle\"],\"example\":\"idle\",\"type\":\"string\"},\"platform\":{\"example\":\"linux\",\"type\":\"string\"},\"revision\":{\"example\":\"91a27b2a\",\"type\":\"string\"},\"status\":{\"example\":\"online\",\"type\":\"string\"},\"system_id\":{\"example\":\"runner-1\",\"type\":\"string\"},\"version\":{\"example\":\"16.11.0\",\"type\":\"string\"}},\"type\":\"object\"},\"stage\":{\"example\":\"deploy\",\"type\":\"string\"},\"started_at\":{\"example\":\"2015-12-24T17:54:30.733Z\",\"format\":\"date-time\",\"type\":\"string\"},\"status\":{\"example\":\"waiting_for_resource\",\"type\":\"string\"},\"tag\":{\"type\":\"boolean\"},\"tag_list\":{\"example\":[\"ubuntu18\",\"docker runner\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"user\":{\"properties\":{\"avatar_path\":{\"example\":\"/user/avatar/28/The-Big-Lebowski-400-400.png\",\"type\":\"string\"},\"avatar_url\":{\"example\":\"https://gravatar.com/avatar/1\",\"type\":\"string\"},\"bio\":{\"type\":\"string\"},\"bot\":{\"type\":\"string\"},\"created_at\":{\"type\":\"string\"},\"custom_attributes\":{\"items\":{\"description\":\"API_Entities_CustomAttribute model\",\"properties\":{\"key\":{\"example\":\"foo\",\"type\":\"string\"},\"value\":{\"example\":\"bar\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"discord\":{\"type\":\"string\"},\"followers\":{\"type\":\"string\"},\"following\":{\"type\":\"string\"},\"github\":{\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"is_followed\":{\"type\":\"string\"},\"job_title\":{\"type\":\"string\"},\"linkedin\":{\"type\":\"string\"},\"local_time\":{\"type\":\"string\"},\"location\":{\"type\":\"string\"},\"locked\":{\"type\":\"boolean\"},\"name\":{\"example\":\"Administrator\",\"type\":\"string\"},\"organization\":{\"type\":\"string\"},\"pronouns\":{\"type\":\"string\"},\"public_email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"state\":{\"example\":\"active\",\"type\":\"string\"},\"twitter\":{\"type\":\"string\"},\"username\":{\"example\":\"admin\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/root\",\"type\":\"string\"},\"website_url\":{\"type\":\"string\"},\"work_information\":{\"type\":\"string\"}},\"type\":\"object\"},\"web_url\":{\"example\":\"https://example.com/foo/bar/-/jobs/1\",\"type\":\"string\"}},\"type\":\"object\"},\"environment\":{\"description\":\"API_Entities_EnvironmentBasic model\",\"properties\":{\"created_at\":{\"example\":\"2019-05-25T18:55:13.252Z\",\"format\":\"date-time\",\"type\":\"string\"},\"external_url\":{\"example\":\"https://deploy.gitlab.example.com\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"name\":{\"example\":\"deploy\",\"type\":\"string\"},\"slug\":{\"example\":\"deploy\",\"type\":\"string\"},\"updated_at\":{\"example\":\"2019-05-25T18:55:13.252Z\",\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"},\"id\":{\"example\":41,\"format\":\"int32\",\"type\":\"integer\"},\"iid\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"ref\":{\"example\":\"main\",\"type\":\"string\"},\"sha\":{\"example\":\"99d03678b90d914dbb1b109132516d71a4a03ea8\",\"type\":\"string\"},\"status\":{\"example\":\"created\",\"type\":\"string\"},\"updated_at\":{\"example\":\"2016-08-11T11:32:35.444Z\",\"format\":\"date-time\",\"type\":\"string\"},\"user\":{\"description\":\"API_Entities_UserBasic model\",\"properties\":{\"avatar_path\":{\"example\":\"/user/avatar/28/The-Big-Lebowski-400-400.png\",\"type\":\"string\"},\"avatar_url\":{\"example\":\"https://gravatar.com/avatar/1\",\"type\":\"string\"},\"custom_attributes\":{\"items\":{\"description\":\"API_Entities_CustomAttribute model\",\"properties\":{\"key\":{\"example\":\"foo\",\"type\":\"string\"},\"value\":{\"example\":\"bar\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"locked\":{\"type\":\"boolean\"},\"name\":{\"example\":\"Administrator\",\"type\":\"string\"},\"public_email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"state\":{\"example\":\"active\",\"type\":\"string\"},\"username\":{\"example\":\"admin\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/root\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"type\":\"array\"}},\"400\":{\"description\":\"Bad request\"},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/v4/projects/{id}/deployments", "rename": { "param": { "id": "project_id" } }, "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "deployments" }], "select": { "exist": ["environment", "finished_after", "finished_before", "order_by", "page", "per_page", "project_id", "sort", "status", "updated_after", "updated_before"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [["project"]] }, "key$": "api_entities_deployment", "name__orig": "api_entities_deployment", "Name": "ApiEntitiesDeployment", "name_": "api_entities_deployment", "name-": "api-entities-deployment", "NAME": "API_ENTITIES_DEPLOYMENT", "index$": 61 }, { "active": true, "entity": "api_entities_deployment", "key$": "BasicApiEntitiesDeploymentFlow", "kind": "basic", "name": "BasicApiEntitiesDeploymentFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": { "project_id": "project01" }, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "api_entities_deployment_ref01" } }], "index$": 0 }] }, 'ApiEntitiesDeployment');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let api_entities_deployment_ref01_data = Object.values(setup.data.existing.api_entities_deployment)[0];
        // LIST
        const api_entities_deployment_ref01_ent = client.ApiEntitiesDeployment();
        const api_entities_deployment_ref01_match = {};
        api_entities_deployment_ref01_match['project_id'] = setup.idmap['project01'];
        const api_entities_deployment_ref01_list = (await api_entities_deployment_ref01_ent.list(api_entities_deployment_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/api_entities_deployment/ApiEntitiesDeploymentTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['api_entities_deployment01', 'api_entities_deployment02', 'api_entities_deployment03', 'project01', 'project02', 'project03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_API_ENTITIES_DEPLOYMENT_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_API_ENTITIES_DEPLOYMENT_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_API_ENTITIES_DEPLOYMENT_ENTID'];
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
//# sourceMappingURL=ApiEntitiesDeploymentEntity.test.js.map