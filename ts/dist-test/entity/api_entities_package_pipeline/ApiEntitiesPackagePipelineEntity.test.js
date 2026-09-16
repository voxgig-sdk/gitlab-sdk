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
(0, node_test_1.describe)('ApiEntitiesPackagePipelineEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.ApiEntitiesPackagePipeline();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'api_entities_package_pipeline.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "avatar_path", "req": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "avatar_url", "req": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "custom_attributes", "req": false, "type": "`$ARRAY`", "index$": 2 }, { "active": true, "format": "int32", "name": "id", "req": false, "type": "`$INTEGER`", "index$": 3 }, { "active": true, "name": "locked", "req": false, "type": "`$BOOLEAN`", "index$": 4 }, { "active": true, "name": "name", "req": false, "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "public_email", "req": false, "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "state", "req": false, "type": "`$STRING`", "index$": 7 }, { "active": true, "name": "username", "req": false, "type": "`$STRING`", "index$": 8 }, { "active": true, "name": "web_url", "req": false, "type": "`$STRING`", "index$": 9 }], "id": { "field": "id", "name": "id" }, "name": "api_entities_package_pipeline", "op": { "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "package_id", "orig": "package_id", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "param", "name": "project_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 1 }], "query": [{ "active": true, "kind": "query", "name": "cursor", "orig": "cursor", "reqd": false, "type": "`$ANY`", "index$": 0 }, { "active": true, "example": 1, "kind": "query", "name": "page", "orig": "page", "reqd": false, "type": "`$INTEGER`", "index$": 1 }, { "active": true, "example": 20, "kind": "query", "name": "per_page", "orig": "per_page", "reqd": false, "type": "`$INTEGER`", "index$": 2 }] }, "contract": { "id": "GET /api/v4/projects/{id}/packages/{package_id}/pipelines", "json": "{\"operationId\":\"getApiV4ProjectsIdPackagesPackageIdPipelines\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"default\":1,\"description\":\"Current page number\",\"example\":1,\"format\":\"int32\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"type\":\"integer\"},{\"default\":20,\"description\":\"Number of items per page\",\"example\":20,\"format\":\"int32\",\"in\":\"query\",\"maximum\":20,\"minimum\":1,\"name\":\"per_page\",\"required\":false,\"type\":\"integer\"},{\"description\":\"The ID of a package\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"package_id\",\"required\":true,\"type\":\"integer\"},{\"description\":\"Cursor for obtaining the next set of records\",\"in\":\"query\",\"name\":\"cursor\",\"required\":false,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get the pipelines for a single project package\",\"schema\":{\"description\":\"API_Entities_Package_Pipeline model\",\"properties\":{\"created_at\":{\"example\":\"2022-10-21T16:49:48.000+02:00\",\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"iid\":{\"example\":2,\"format\":\"int32\",\"type\":\"integer\"},\"project_id\":{\"example\":3,\"format\":\"int32\",\"type\":\"integer\"},\"ref\":{\"example\":\"feature-branch\",\"type\":\"string\"},\"sha\":{\"example\":\"0ec9e58fdfca6cdd6652c083c9edb53abc0bad52\",\"type\":\"string\"},\"source\":{\"example\":\"push\",\"type\":\"string\"},\"status\":{\"example\":\"success\",\"type\":\"string\"},\"updated_at\":{\"example\":\"2022-10-21T16:49:48.000+02:00\",\"format\":\"date-time\",\"type\":\"string\"},\"user\":{\"description\":\"API_Entities_UserBasic model\",\"properties\":{\"avatar_path\":{\"example\":\"/user/avatar/28/The-Big-Lebowski-400-400.png\",\"type\":\"string\"},\"avatar_url\":{\"example\":\"https://gravatar.com/avatar/1\",\"type\":\"string\"},\"custom_attributes\":{\"items\":{\"description\":\"API_Entities_CustomAttribute model\",\"properties\":{\"key\":{\"example\":\"foo\",\"type\":\"string\"},\"value\":{\"example\":\"bar\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"locked\":{\"type\":\"boolean\"},\"name\":{\"example\":\"Administrator\",\"type\":\"string\"},\"public_email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"state\":{\"example\":\"active\",\"type\":\"string\"},\"username\":{\"example\":\"admin\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/root\",\"type\":\"string\"}},\"type\":\"object\"},\"web_url\":{\"example\":\"https://gitlab.example.com/gitlab-org/gitlab-foss/-/pipelines/61\",\"type\":\"string\"}},\"type\":\"object\"}},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/v4/projects/{id}/packages/{package_id}/pipelines", "rename": { "param": { "id": "project_id" } }, "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "packages" }, { "var": "package_id" }, { "lit": "pipelines" }], "select": { "exist": ["cursor", "package_id", "page", "per_page", "project_id"] }, "transform": { "req": "`reqdata`", "res": "`body.user`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [["project", "package"]] }, "key$": "api_entities_package_pipeline", "name__orig": "api_entities_package_pipeline", "Name": "ApiEntitiesPackagePipeline", "name_": "api_entities_package_pipeline", "name-": "api-entities-package-pipeline", "NAME": "API_ENTITIES_PACKAGE_PIPELINE", "index$": 112 }, { "active": true, "entity": "api_entities_package_pipeline", "key$": "BasicApiEntitiesPackagePipelineFlow", "kind": "basic", "name": "BasicApiEntitiesPackagePipelineFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "api_entities_package_pipeline_ref01", "srcdatavar": "api_entities_package_pipeline_ref01_data", "suffix": "_dt0" }, "match": { "id": "api_entities_package_pipeline01", "project_id": "project01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-api_entities_package_pipeline_ref01" } }], "index$": 0 }] }, 'ApiEntitiesPackagePipeline');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let api_entities_package_pipeline_ref01_data = Object.values(setup.data.existing.api_entities_package_pipeline)[0];
        // LOAD
        const api_entities_package_pipeline_ref01_ent = client.ApiEntitiesPackagePipeline();
        const api_entities_package_pipeline_ref01_match_dt0 = {};
        api_entities_package_pipeline_ref01_match_dt0.id = api_entities_package_pipeline_ref01_data.id;
        const api_entities_package_pipeline_ref01_data_dt0 = (await api_entities_package_pipeline_ref01_ent.load(api_entities_package_pipeline_ref01_match_dt0)).data();
        (0, node_assert_1.default)(api_entities_package_pipeline_ref01_data_dt0.id === api_entities_package_pipeline_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/api_entities_package_pipeline/ApiEntitiesPackagePipelineTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['api_entities_package_pipeline01', 'api_entities_package_pipeline02', 'api_entities_package_pipeline03', 'project01', 'project02', 'project03', 'package01', 'package02', 'package03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_API_ENTITIES_PACKAGE_PIPELINE_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_API_ENTITIES_PACKAGE_PIPELINE_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_API_ENTITIES_PACKAGE_PIPELINE_ENTID'];
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
//# sourceMappingURL=ApiEntitiesPackagePipelineEntity.test.js.map