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
(0, node_test_1.describe)('JobEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.Job();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['create', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'job.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "id", "req": false, "type": "`$STRING`", "index$": 0 }], "id": { "field": "id", "name": "id" }, "name": "job", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }], "query": [{ "active": true, "kind": "query", "name": "post_api_v4_jobs_id_artifact", "orig": "post_api_v4_jobs_id_artifact", "reqd": true, "type": "`$OBJECT`", "index$": 0 }] }, "contract": { "id": "POST /api/v4/jobs/{id}/artifacts", "json": "{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4JobsIdArtifacts\",\"parameters\":[{\"description\":\"Job's ID\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"integer\"},{\"in\":\"body\",\"name\":\"postApiV4JobsIdArtifacts\",\"required\":true,\"schema\":{\"description\":\"Upload a job artifact\",\"properties\":{\"accessibility\":{\"description\":\"Specify accessibility level of artifact private/public\",\"type\":\"string\"},\"artifact_format\":{\"default\":\"zip\",\"description\":\"The format of artifact\",\"enum\":[\"raw\",\"zip\",\"gzip\"],\"type\":\"string\"},\"artifact_type\":{\"default\":\"archive\",\"description\":\"The type of artifact\",\"enum\":[\"archive\",\"metadata\",\"trace\",\"junit\",\"sast\",\"dependency_scanning\",\"container_scanning\",\"dast\",\"codequality\",\"license_scanning\",\"performance\",\"metrics\",\"metrics_referee\",\"network_referee\",\"lsif\",\"dotenv\",\"cobertura\",\"terraform\",\"accessibility\",\"cluster_applications\",\"secret_detection\",\"requirements\",\"coverage_fuzzing\",\"browser_performance\",\"load_performance\",\"api_fuzzing\",\"cluster_image_scanning\",\"cyclonedx\",\"requirements_v2\",\"annotations\",\"repository_xray\",\"jacoco\"],\"type\":\"string\"},\"expire_in\":{\"description\":\"Specify when artifact should expire\",\"type\":\"string\"},\"file\":{\"description\":\"The artifact file to store (generated by Multipart middleware)\",\"type\":\"file\"},\"metadata\":{\"description\":\"The artifact metadata to store (generated by Multipart middleware)\",\"type\":\"file\"},\"token\":{\"description\":\"Job's authentication token\",\"type\":\"string\"}},\"required\":[\"file\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"Artifact uploaded\"},\"400\":{\"description\":\"Bad request\"},\"403\":{\"description\":\"Forbidden\"},\"405\":{\"description\":\"Artifacts support not enabled\"},\"413\":{\"description\":\"File too large\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "POST", "orig": "/api/v4/jobs/{id}/artifacts", "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "jobs" }, { "var": "id" }, { "lit": "artifacts" }], "select": { "$action": "artifact", "exist": ["id", "post_api_v4_jobs_id_artifact"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }], "query": [{ "active": true, "kind": "query", "name": "post_api_v4_jobs_id_artifacts_authorize", "orig": "post_api_v4_jobs_id_artifacts_authorize", "reqd": true, "type": "`$OBJECT`", "index$": 0 }] }, "contract": { "id": "POST /api/v4/jobs/{id}/artifacts/authorize", "json": "{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4JobsIdArtifactsAuthorize\",\"parameters\":[{\"description\":\"Job's ID\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"integer\"},{\"in\":\"body\",\"name\":\"postApiV4JobsIdArtifactsAuthorize\",\"required\":true,\"schema\":{\"description\":\"Authorize uploading job artifact\",\"properties\":{\"artifact_type\":{\"default\":\"archive\",\"description\":\"The type of artifact\",\"enum\":[\"archive\",\"metadata\",\"trace\",\"junit\",\"sast\",\"dependency_scanning\",\"container_scanning\",\"dast\",\"codequality\",\"license_scanning\",\"performance\",\"metrics\",\"metrics_referee\",\"network_referee\",\"lsif\",\"dotenv\",\"cobertura\",\"terraform\",\"accessibility\",\"cluster_applications\",\"secret_detection\",\"requirements\",\"coverage_fuzzing\",\"browser_performance\",\"load_performance\",\"api_fuzzing\",\"cluster_image_scanning\",\"cyclonedx\",\"requirements_v2\",\"annotations\",\"repository_xray\",\"jacoco\"],\"type\":\"string\"},\"filesize\":{\"description\":\"Size of artifact file\",\"format\":\"int32\",\"type\":\"integer\"},\"token\":{\"description\":\"Job's authentication token\",\"type\":\"string\"}},\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Upload allowed\"},\"403\":{\"description\":\"Forbidden\"},\"405\":{\"description\":\"Artifacts support not enabled\"},\"413\":{\"description\":\"File too large\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "POST", "orig": "/api/v4/jobs/{id}/artifacts/authorize", "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "jobs" }, { "var": "id" }, { "lit": "artifacts" }, { "lit": "authorize" }], "select": { "$action": "artifact_authorize", "exist": ["id", "post_api_v4_jobs_id_artifacts_authorize"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "active": true, "args": { "query": [{ "active": true, "kind": "query", "name": "post_api_v4_jobs_request", "orig": "post_api_v4_jobs_request", "reqd": true, "type": "`$OBJECT`", "index$": 0 }] }, "contract": { "id": "POST /api/v4/jobs/request", "json": "{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4JobsRequest\",\"parameters\":[{\"in\":\"body\",\"name\":\"postApiV4JobsRequest\",\"required\":true,\"schema\":{\"description\":\"Request a job\",\"properties\":{\"info\":{\"description\":\"Runner's metadata\",\"properties\":{\"architecture\":{\"description\":\"Runner's architecture\",\"type\":\"string\"},\"config\":{\"description\":\"Runner's config\",\"properties\":{\"gpus\":{\"description\":\"GPUs enabled\",\"type\":\"string\"}},\"type\":\"object\"},\"executor\":{\"description\":\"Runner's executor\",\"type\":\"string\"},\"features\":{\"description\":\"Runner's features\",\"type\":\"object\"},\"labels\":{\"description\":\"Runner's labels\",\"type\":\"object\"},\"name\":{\"description\":\"Runner's name\",\"type\":\"string\"},\"platform\":{\"description\":\"Runner's platform\",\"type\":\"string\"},\"revision\":{\"description\":\"Runner's revision\",\"type\":\"string\"},\"version\":{\"description\":\"Runner's version\",\"type\":\"string\"}},\"type\":\"object\"},\"last_update\":{\"description\":\"Runner's queue last_update token\",\"type\":\"string\"},\"session\":{\"description\":\"Runner's session data\",\"properties\":{\"authorization\":{\"description\":\"Session's authorization\",\"type\":\"string\"},\"certificate\":{\"description\":\"Session's certificate\",\"type\":\"string\"},\"url\":{\"description\":\"Session's url\",\"type\":\"string\"}},\"type\":\"object\"},\"system_id\":{\"description\":\"Runner's system identifier\",\"type\":\"string\"},\"token\":{\"description\":\"Runner's authentication token\",\"type\":\"string\"}},\"required\":[\"token\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"Job was scheduled\"},\"204\":{\"description\":\"No job for Runner\"},\"403\":{\"description\":\"Forbidden\"},\"409\":{\"description\":\"Conflict\"},\"422\":{\"description\":\"Runner is orphaned\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "POST", "orig": "/api/v4/jobs/request", "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "jobs" }, { "lit": "request" }], "select": { "$action": "request", "exist": ["post_api_v4_jobs_request"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }], "query": [{ "active": true, "kind": "query", "name": "direct_download", "orig": "direct_download", "reqd": false, "type": "`$ANY`", "index$": 0 }, { "active": true, "kind": "query", "name": "token", "orig": "token", "reqd": false, "type": "`$STRING`", "index$": 1 }] }, "contract": { "id": "GET /api/v4/jobs/{id}/artifacts", "json": "{\"operationId\":\"getApiV4JobsIdArtifacts\",\"parameters\":[{\"description\":\"Job's ID\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"integer\"},{\"description\":\"Job's authentication token\",\"in\":\"query\",\"name\":\"token\",\"required\":false,\"type\":\"string\"},{\"default\":false,\"description\":\"Perform direct download from remote storage instead of proxying artifacts\",\"in\":\"query\",\"name\":\"direct_download\",\"required\":false,\"type\":\"boolean\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Download allowed\"},\"302\":{\"description\":\"Found\"},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Artifact not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/v4/jobs/{id}/artifacts", "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "jobs" }, { "var": "id" }, { "lit": "artifacts" }], "select": { "$action": "artifact", "exist": ["direct_download", "id", "token"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "patch": { "input": "data", "name": "patch", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`" }], "query": [{ "active": true, "kind": "query", "name": "patch_api_v4_jobs_id_trace", "orig": "patch_api_v4_jobs_id_trace", "reqd": true, "type": "`$OBJECT`" }] }, "contract": { "id": "PATCH /api/v4/jobs/{id}/trace", "json": "{\"consumes\":[\"application/json\"],\"operationId\":\"patchApiV4JobsIdTrace\",\"parameters\":[{\"description\":\"Job's ID\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"integer\"},{\"in\":\"body\",\"name\":\"patchApiV4JobsIdTrace\",\"required\":true,\"schema\":{\"description\":\"Append a patch to the job trace\",\"properties\":{\"debug_trace\":{\"description\":\"Enable or Disable the debug trace\",\"type\":\"boolean\"},\"token\":{\"description\":\"Job's authentication token\",\"type\":\"string\"}},\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"202\":{\"description\":\"Trace was patched\"},\"400\":{\"description\":\"Missing Content-Range header\"},\"403\":{\"description\":\"Forbidden\"},\"416\":{\"description\":\"Range not satisfiable\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "PATCH", "orig": "/api/v4/jobs/{id}/trace", "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "jobs" }, { "var": "id" }, { "lit": "trace" }], "select": { "$action": "trace", "exist": ["id", "patch_api_v4_jobs_id_trace"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "patch" }, "update": { "input": "data", "name": "update", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }], "query": [{ "active": true, "kind": "query", "name": "put_api_v4_jobs_id", "orig": "put_api_v4_jobs_id", "reqd": true, "type": "`$OBJECT`", "index$": 0 }] }, "contract": { "id": "PUT /api/v4/jobs/{id}", "json": "{\"consumes\":[\"application/json\"],\"operationId\":\"putApiV4JobsId\",\"parameters\":[{\"description\":\"Job's ID\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"integer\"},{\"in\":\"body\",\"name\":\"putApiV4JobsId\",\"required\":true,\"schema\":{\"description\":\"Update a job\",\"properties\":{\"checksum\":{\"description\":\"Job's trace CRC32 checksum\",\"type\":\"string\"},\"exit_code\":{\"description\":\"Job's exit code\",\"format\":\"int32\",\"type\":\"integer\"},\"failure_reason\":{\"description\":\"Job's failure_reason\",\"type\":\"string\"},\"output\":{\"description\":\"Build log state\",\"properties\":{\"bytesize\":{\"description\":\"Job's trace size in bytes\",\"format\":\"int32\",\"type\":\"integer\"},\"checksum\":{\"description\":\"Job's trace CRC32 checksum\",\"type\":\"string\"}},\"type\":\"object\"},\"state\":{\"description\":\"Job's status: success, failed\",\"type\":\"string\"},\"token\":{\"description\":\"Job token\",\"type\":\"string\"}},\"required\":[\"token\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Job was updated\"},\"202\":{\"description\":\"Update accepted\"},\"400\":{\"description\":\"Unknown parameters\"},\"403\":{\"description\":\"Forbidden\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "PUT", "orig": "/api/v4/jobs/{id}", "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "jobs" }, { "var": "id" }], "select": { "exist": ["id", "put_api_v4_jobs_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "job", "name__orig": "job", "Name": "Job", "name_": "job", "name-": "job", "NAME": "JOB", "index$": 222 }, { "active": true, "entity": "job", "key$": "BasicJobFlow", "kind": "basic", "name": "BasicJobFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "job_ref01" }, "match": {}, "op": "create", "spec": [], "valid": [], "index$": 0 }, { "active": true, "data": {}, "input": { "ref": "job_ref01", "srcdatavar": "job_ref01_data", "suffix": "_up0" }, "match": {}, "op": "update", "spec": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-job_ref01" } }], "valid": [], "index$": 1 }, { "active": true, "data": {}, "input": { "ref": "job_ref01", "srcdatavar": "job_ref01_data", "suffix": "_dt0" }, "match": { "id": "job01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-job_ref01" } }], "index$": 2 }] }, 'Job');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const job_ref01_ent = client.Job();
        let job_ref01_data = setup.data.new.job['job_ref01'];
        job_ref01_data = (await job_ref01_ent.create(job_ref01_data)).data();
        (0, node_assert_1.default)(null != job_ref01_data.id);
        // UPDATE
        const job_ref01_data_up0 = {};
        job_ref01_data_up0.id = job_ref01_data.id;
        const job_ref01_resdata_up0 = (await job_ref01_ent.update(job_ref01_data_up0)).data();
        (0, node_assert_1.default)(job_ref01_resdata_up0.id === job_ref01_data_up0.id);
        // LOAD
        const job_ref01_match_dt0 = {};
        job_ref01_match_dt0.id = job_ref01_data.id;
        const job_ref01_data_dt0 = (await job_ref01_ent.load(job_ref01_match_dt0)).data();
        (0, node_assert_1.default)(job_ref01_data_dt0.id === job_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/job/JobTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['job01', 'job02', 'job03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_JOB_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_JOB_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_JOB_ENTID'];
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
//# sourceMappingURL=JobEntity.test.js.map