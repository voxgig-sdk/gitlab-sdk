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
(0, node_test_1.describe)('TestReportEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.TestReport();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'test_report.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "format": "int32", "name": "error_count", "req": false, "type": "`$INTEGER`", "index$": 0 }, { "active": true, "format": "int32", "name": "failed_count", "req": false, "type": "`$INTEGER`", "index$": 1 }, { "active": true, "name": "name", "req": false, "type": "`$STRING`", "index$": 2 }, { "active": true, "format": "int32", "name": "skipped_count", "req": false, "type": "`$INTEGER`", "index$": 3 }, { "active": true, "format": "int32", "name": "success_count", "req": false, "type": "`$INTEGER`", "index$": 4 }, { "active": true, "name": "suite_error", "req": false, "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "test_cases", "req": false, "type": "`$ARRAY`", "index$": 6 }, { "active": true, "format": "int32", "name": "total_count", "req": false, "type": "`$INTEGER`", "index$": 7 }, { "active": true, "format": "int32", "name": "total_time", "req": false, "type": "`$INTEGER`", "index$": 8 }], "name": "test_report", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "params": [{ "active": true, "example": 18, "kind": "param", "name": "pipeline_id", "orig": "pipeline_id", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": 11, "kind": "param", "name": "project_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 1 }] }, "contract": { "id": "GET /api/v4/projects/{id}/pipelines/{pipeline_id}/test_report", "json": "{\"operationId\":\"getApiV4ProjectsIdPipelinesPipelineIdTestReport\",\"parameters\":[{\"description\":\"The project ID or URL-encoded path\",\"example\":11,\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The pipeline ID\",\"example\":18,\"format\":\"int32\",\"in\":\"path\",\"name\":\"pipeline_id\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Gets the test report for a given pipeline\",\"schema\":{\"description\":\"TestReportEntity model\",\"properties\":{\"error_count\":{\"example\":0,\"format\":\"int32\",\"type\":\"integer\"},\"failed_count\":{\"example\":0,\"format\":\"int32\",\"type\":\"integer\"},\"skipped_count\":{\"example\":0,\"format\":\"int32\",\"type\":\"integer\"},\"success_count\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"test_suites\":{\"items\":{\"properties\":{\"error_count\":{\"example\":0,\"format\":\"int32\",\"type\":\"integer\"},\"failed_count\":{\"example\":0,\"format\":\"int32\",\"type\":\"integer\"},\"name\":{\"example\":\"test\",\"type\":\"string\"},\"skipped_count\":{\"example\":12,\"format\":\"int32\",\"type\":\"integer\"},\"success_count\":{\"example\":3351,\"format\":\"int32\",\"type\":\"integer\"},\"suite_error\":{\"example\":\"JUnit XML parsing failed: 1:1: FATAL: Document is empty\",\"type\":\"string\"},\"test_cases\":{\"items\":{\"properties\":{\"attachment_url\":{\"example\":\"http://localhost/namespace1/project1/-/jobs/1/artifacts/file/some/path.png\",\"type\":\"string\"},\"classname\":{\"example\":\"vulnerability_management_spec\",\"type\":\"string\"},\"execution_time\":{\"example\":180,\"format\":\"int32\",\"type\":\"integer\"},\"file\":{\"example\":\"./spec/test_spec.rb\",\"type\":\"string\"},\"name\":{\"example\":\"Security Reports can create an auto-remediation MR\",\"type\":\"string\"},\"recent_failures\":{\"example\":{\"base_branch\":\"develop\",\"count\":3},\"type\":\"string\"},\"stack_trace\":{\"example\":\"Failure/Error: is_expected.to eq(3)\",\"type\":\"string\"},\"status\":{\"example\":\"success\",\"type\":\"string\"},\"system_output\":{\"example\":\"Failure/Error: is_expected.to eq(3)\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"total_count\":{\"example\":3363,\"format\":\"int32\",\"type\":\"integer\"},\"total_time\":{\"example\":1904,\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"},\"total_count\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"total_time\":{\"example\":180,\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"}},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/v4/projects/{id}/pipelines/{pipeline_id}/test_report", "rename": { "param": { "id": "project_id" } }, "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "pipelines" }, { "var": "pipeline_id" }, { "lit": "test_report" }], "select": { "exist": ["pipeline_id", "project_id"] }, "transform": { "req": "`reqdata`", "res": "`body.test_suites`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [["project", "pipeline"]] }, "key$": "test_report", "name__orig": "test_report", "Name": "TestReport", "name_": "test_report", "name-": "test-report", "NAME": "TEST_REPORT", "index$": 268 }, { "active": true, "entity": "test_report", "key$": "BasicTestReportFlow", "kind": "basic", "name": "BasicTestReportFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": { "pipeline_id": "pipeline01", "project_id": "project01" }, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "test_report_ref01" } }], "index$": 0 }] }, 'TestReport');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let test_report_ref01_data = Object.values(setup.data.existing.test_report)[0];
        // LIST
        const test_report_ref01_ent = client.TestReport();
        const test_report_ref01_match = {};
        test_report_ref01_match['pipeline_id'] = setup.idmap['pipeline01'];
        test_report_ref01_match['project_id'] = setup.idmap['project01'];
        const test_report_ref01_list = (await test_report_ref01_ent.list(test_report_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/test_report/TestReportTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['test_report01', 'test_report02', 'test_report03', 'project01', 'project02', 'project03', 'pipeline01', 'pipeline02', 'pipeline03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_TEST_REPORT_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_TEST_REPORT_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_TEST_REPORT_ENTID'];
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
//# sourceMappingURL=TestReportEntity.test.js.map