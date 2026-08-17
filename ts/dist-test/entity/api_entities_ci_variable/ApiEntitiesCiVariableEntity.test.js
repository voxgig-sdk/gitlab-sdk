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
const envlocal = __dirname + '/../../../.env.local';
require('dotenv').config({ quiet: true, path: [envlocal] });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, node_test_1.describe)('ApiEntitiesCiVariableEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.ApiEntitiesCiVariable();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load']) {
            if ((0, utility_1.maybeSkipControl)(t, 'entityOp', 'api_entities_ci_variable.' + op, live))
                return;
        }
        const setup = basicSetup();
        // The basic flow consumes synthetic IDs and field values from the
        // fixture (entity TestData.json). Those don't exist on the live API.
        // Skip live runs unless the user provided a real ENTID env override.
        if (setup.syntheticOnly) {
            t.skip('live entity test uses synthetic IDs from fixture — set GITLAB_TEST_API_ENTITIES_CI_VARIABLE_ENTID JSON to run live');
            return;
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const api_entities_ci_variable_ref01_ent = client.ApiEntitiesCiVariable();
        let api_entities_ci_variable_ref01_data = setup.data.new.api_entities_ci_variable['api_entities_ci_variable_ref01'];
        api_entities_ci_variable_ref01_data['group_id'] = setup.idmap['group01'];
        api_entities_ci_variable_ref01_data['pipeline_id'] = setup.idmap['pipeline01'];
        api_entities_ci_variable_ref01_data['pipeline_schedule_id'] = setup.idmap['pipeline_schedule01'];
        api_entities_ci_variable_ref01_data['project_id'] = setup.idmap['project01'];
        api_entities_ci_variable_ref01_data = (await api_entities_ci_variable_ref01_ent.create(api_entities_ci_variable_ref01_data)).data();
        (0, node_assert_1.default)(null != api_entities_ci_variable_ref01_data);
        // LIST
        const api_entities_ci_variable_ref01_match = {};
        api_entities_ci_variable_ref01_match['pipeline_id'] = setup.idmap['pipeline01'];
        api_entities_ci_variable_ref01_match['project_id'] = setup.idmap['project01'];
        const api_entities_ci_variable_ref01_list = (await api_entities_ci_variable_ref01_ent.list(api_entities_ci_variable_ref01_match)).map((e) => e.data());
        // UPDATE
        const api_entities_ci_variable_ref01_data_up0 = {};
        const api_entities_ci_variable_ref01_markdef_up0 = { name: 'description', value: 'Mark01-api_entities_ci_variable_ref01_' + setup.now };
        api_entities_ci_variable_ref01_data_up0[api_entities_ci_variable_ref01_markdef_up0.name] = api_entities_ci_variable_ref01_markdef_up0.value;
        const api_entities_ci_variable_ref01_resdata_up0 = (await api_entities_ci_variable_ref01_ent.update(api_entities_ci_variable_ref01_data_up0)).data();
        (0, node_assert_1.default)(null != api_entities_ci_variable_ref01_resdata_up0);
        (0, node_assert_1.default)(api_entities_ci_variable_ref01_resdata_up0[api_entities_ci_variable_ref01_markdef_up0.name] === api_entities_ci_variable_ref01_markdef_up0.value);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/api_entities_ci_variable/ApiEntitiesCiVariableTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['api_entities_ci_variable01', 'api_entities_ci_variable02', 'api_entities_ci_variable03', 'group01', 'group02', 'group03', 'project01', 'project02', 'project03', 'project01', 'project02', 'project03', 'pipeline_schedule01', 'pipeline_schedule02', 'pipeline_schedule03', 'project01', 'project02', 'project03', 'pipeline01', 'pipeline02', 'pipeline03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    // Detect whether the user provided a real ENTID JSON via env var. The
    // basic flow consumes synthetic IDs from the fixture file; without an
    // override those synthetic IDs reach the live API and 4xx. Surface this
    // to the test so it can skip rather than fail.
    const idmapEnvVal = process.env['GITLAB_TEST_API_ENTITIES_CI_VARIABLE_ENTID'];
    const idmapOverridden = null != idmapEnvVal && idmapEnvVal.trim().startsWith('{');
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_API_ENTITIES_CI_VARIABLE_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': 'NONE',
    });
    idmap = env['GITLAB_TEST_API_ENTITIES_CI_VARIABLE_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    if (live) {
        client = new __1.GitlabSDK(merge([
            {
                apikey: env.GITLAB_APIKEY,
            },
            extra
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
        syntheticOnly: live && !idmapOverridden,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=ApiEntitiesCiVariableEntity.test.js.map