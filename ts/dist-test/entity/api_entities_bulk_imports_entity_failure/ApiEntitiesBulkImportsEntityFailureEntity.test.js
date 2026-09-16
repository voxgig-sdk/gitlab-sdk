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
(0, node_test_1.describe)('ApiEntitiesBulkImportsEntityFailureEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.ApiEntitiesBulkImportsEntityFailure();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'api_entities_bulk_imports_entity_failure.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "correlation_id_value", "req": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "exception_class", "req": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "exception_message", "req": false, "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "relation", "req": false, "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "source_title", "req": false, "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "source_url", "req": false, "type": "`$STRING`", "index$": 5 }], "name": "api_entities_bulk_imports_entity_failure", "op": { "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "bulk_import_id", "orig": "import_id", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "param", "name": "entity_id", "orig": "entity_id", "reqd": true, "type": "`$STRING`", "index$": 1 }] }, "contract": { "id": "GET /api/v4/bulk_imports/{import_id}/entities/{entity_id}/failures", "json": "{\"operationId\":\"getApiV4BulkImportsImportIdEntitiesEntityIdFailures\",\"parameters\":[{\"description\":\"The ID of user's GitLab Migration\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"import_id\",\"required\":true,\"type\":\"integer\"},{\"description\":\"The ID of GitLab Migration entity\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"entity_id\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get GitLab Migration entity failures\",\"schema\":{\"description\":\"API_Entities_BulkImports_EntityFailure model\",\"properties\":{\"correlation_id_value\":{\"example\":\"dfcf583058ed4508e4c7c617bd7f0edd\",\"type\":\"string\"},\"exception_class\":{\"example\":\"Exception\",\"type\":\"string\"},\"exception_message\":{\"example\":\"error message\",\"type\":\"string\"},\"relation\":{\"example\":\"label\",\"type\":\"string\"},\"source_title\":{\"example\":\"title\",\"type\":\"string\"},\"source_url\":{\"example\":\"https://source.gitlab.com/group/-/epics/1\",\"type\":\"string\"}},\"type\":\"object\"}},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not found\"},\"503\":{\"description\":\"Service unavailable\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/v4/bulk_imports/{import_id}/entities/{entity_id}/failures", "rename": { "param": { "import_id": "bulk_import_id" } }, "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "bulk_imports" }, { "var": "bulk_import_id" }, { "lit": "entities" }, { "var": "entity_id" }, { "lit": "failures" }], "select": { "exist": ["bulk_import_id", "entity_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [["bulk_import", "entity"]] }, "key$": "api_entities_bulk_imports_entity_failure", "name__orig": "api_entities_bulk_imports_entity_failure", "Name": "ApiEntitiesBulkImportsEntityFailure", "name_": "api_entities_bulk_imports_entity_failure", "name-": "api-entities-bulk-imports-entity-failure", "NAME": "API_ENTITIES_BULK_IMPORTS_ENTITY_FAILURE", "index$": 18 }, { "active": true, "entity": "api_entities_bulk_imports_entity_failure", "key$": "BasicApiEntitiesBulkImportsEntityFailureFlow", "kind": "basic", "name": "BasicApiEntitiesBulkImportsEntityFailureFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "api_entities_bulk_imports_entity_failure_ref01", "srcdatavar": "api_entities_bulk_imports_entity_failure_ref01_data", "suffix": "_dt0" }, "match": { "bulk_import_id": "bulk_import01", "id": "api_entities_bulk_imports_entity_failure01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-api_entities_bulk_imports_entity_failure_ref01" } }], "index$": 0 }] }, 'ApiEntitiesBulkImportsEntityFailure');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let api_entities_bulk_imports_entity_failure_ref01_data = Object.values(setup.data.existing.api_entities_bulk_imports_entity_failure)[0];
        // LOAD: skipped — no entity id field and load requires path params.
        // Entity-var is declared here so later flow steps still compile.
        const api_entities_bulk_imports_entity_failure_ref01_ent = client.ApiEntitiesBulkImportsEntityFailure();
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/api_entities_bulk_imports_entity_failure/ApiEntitiesBulkImportsEntityFailureTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['api_entities_bulk_imports_entity_failure01', 'api_entities_bulk_imports_entity_failure02', 'api_entities_bulk_imports_entity_failure03', 'bulk_import01', 'bulk_import02', 'bulk_import03', 'entity01', 'entity02', 'entity03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_API_ENTITIES_BULK_IMPORTS_ENTITY_FAILURE_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_API_ENTITIES_BULK_IMPORTS_ENTITY_FAILURE_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_API_ENTITIES_BULK_IMPORTS_ENTITY_FAILURE_ENTID'];
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
//# sourceMappingURL=ApiEntitiesBulkImportsEntityFailureEntity.test.js.map