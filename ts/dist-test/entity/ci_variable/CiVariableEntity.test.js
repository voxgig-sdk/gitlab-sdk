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
(0, node_test_1.describe)('CiVariableEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.CiVariable();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of []) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'ci_variable.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "id", "req": false, "type": "`$STRING`", "index$": 0 }], "id": { "field": "id", "name": "id" }, "name": "ci_variable", "op": { "remove": { "input": "data", "name": "remove", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "key", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "param", "name": "project_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 1 }], "query": [{ "active": true, "kind": "query", "name": "filter_environment_scope", "orig": "filter_environment_scope", "reqd": false, "type": "`$ANY`", "index$": 0 }] }, "contract": { "id": "DELETE /api/v4/projects/{id}/variables/{key}", "json": "{\"operationId\":\"deleteApiV4ProjectsIdVariablesKey\",\"parameters\":[{\"description\":\"The ID of a project or URL-encoded NAMESPACE/PROJECT_NAME of the project owned by the authenticated user\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The key of a variable\",\"in\":\"path\",\"name\":\"key\",\"required\":true,\"type\":\"string\"},{\"description\":\"The environment scope of the variable\",\"in\":\"query\",\"name\":\"filter[environment_scope]\",\"required\":false,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"204\":{\"description\":\"Delete an existing variable from a project\",\"schema\":{\"description\":\"API_Entities_Ci_Variable model\",\"properties\":{\"description\":{\"example\":\"This variable is being used for ...\",\"type\":\"string\"},\"environment_scope\":{\"example\":\"*\",\"type\":\"string\"},\"hidden\":{\"type\":\"boolean\"},\"key\":{\"example\":\"TEST_VARIABLE_1\",\"type\":\"string\"},\"masked\":{\"type\":\"boolean\"},\"protected\":{\"type\":\"boolean\"},\"raw\":{\"type\":\"boolean\"},\"value\":{\"example\":\"TEST_1\",\"type\":\"string\"},\"variable_type\":{\"example\":\"env_var\",\"type\":\"string\"}},\"type\":\"object\"}},\"404\":{\"description\":\"Variable Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "DELETE", "orig": "/api/v4/projects/{id}/variables/{key}", "rename": { "param": { "id": "project_id", "key": "id" } }, "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "variables" }, { "var": "id" }], "select": { "exist": ["filter_environment_scope", "id", "project_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "group_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "param", "name": "id", "orig": "key", "reqd": true, "type": "`$STRING`", "index$": 1 }] }, "contract": { "id": "DELETE /api/v4/groups/{id}/variables/{key}", "json": "{\"operationId\":\"deleteApiV4GroupsIdVariablesKey\",\"parameters\":[{\"description\":\"The ID of a group or URL-encoded path of the group owned by the authenticated\\n      user\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The key of a variable\",\"in\":\"path\",\"name\":\"key\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"204\":{\"description\":\"Delete an existing variable from a group\",\"schema\":{\"description\":\"API_Entities_Ci_Variable model\",\"properties\":{\"description\":{\"example\":\"This variable is being used for ...\",\"type\":\"string\"},\"environment_scope\":{\"example\":\"*\",\"type\":\"string\"},\"hidden\":{\"type\":\"boolean\"},\"key\":{\"example\":\"TEST_VARIABLE_1\",\"type\":\"string\"},\"masked\":{\"type\":\"boolean\"},\"protected\":{\"type\":\"boolean\"},\"raw\":{\"type\":\"boolean\"},\"value\":{\"example\":\"TEST_1\",\"type\":\"string\"},\"variable_type\":{\"example\":\"env_var\",\"type\":\"string\"}},\"type\":\"object\"}},\"404\":{\"description\":\"Group Variable Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "DELETE", "orig": "/api/v4/groups/{id}/variables/{key}", "rename": { "param": { "id": "group_id", "key": "id" } }, "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "groups" }, { "var": "group_id" }, { "lit": "variables" }, { "var": "id" }], "select": { "exist": ["group_id", "id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "key", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "DELETE /api/v4/admin/ci/variables/{key}", "json": "{\"operationId\":\"deleteApiV4AdminCiVariablesKey\",\"parameters\":[{\"description\":\"The key of a variable\",\"in\":\"path\",\"name\":\"key\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"204\":{\"description\":\"Instance Variable Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "DELETE", "orig": "/api/v4/admin/ci/variables/{key}", "rename": { "param": { "key": "id" } }, "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "admin" }, { "lit": "ci" }, { "lit": "variables" }, { "var": "id" }], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }], "key$": "remove" } }, "relations": { "ancestors": [["group"], ["project"]] }, "key$": "ci_variable", "name__orig": "ci_variable", "Name": "CiVariable", "name_": "ci_variable", "name-": "ci-variable", "NAME": "CI_VARIABLE", "index$": 177 }, { "active": true, "entity": "ci_variable", "key$": "BasicCiVariableFlow", "kind": "basic", "name": "BasicCiVariableFlow", "param": {}, "step": [] }, 'CiVariable');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let ci_variable_ref01_data = Object.values(setup.data.existing.ci_variable)[0];
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/ci_variable/CiVariableTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['ci_variable01', 'ci_variable02', 'ci_variable03', 'group01', 'group02', 'group03', 'project01', 'project02', 'project03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_CI_VARIABLE_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_CI_VARIABLE_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_CI_VARIABLE_ENTID'];
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
//# sourceMappingURL=CiVariableEntity.test.js.map