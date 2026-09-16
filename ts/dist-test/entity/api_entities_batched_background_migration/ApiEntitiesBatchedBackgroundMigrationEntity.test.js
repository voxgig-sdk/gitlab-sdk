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
(0, node_test_1.describe)('ApiEntitiesBatchedBackgroundMigrationEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.ApiEntitiesBatchedBackgroundMigration();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['list', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'api_entities_batched_background_migration.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "column_name", "req": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "format": "date-time", "name": "created_at", "req": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "id", "req": false, "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "job_class_name", "req": false, "type": "`$STRING`", "index$": 3 }, { "active": true, "format": "float", "name": "progress", "req": false, "type": "`$NUMBER`", "index$": 4 }, { "active": true, "name": "status", "req": false, "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "table_name", "req": false, "type": "`$STRING`", "index$": 6 }], "id": { "field": "id", "name": "id" }, "name": "api_entities_batched_background_migration", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "query": [{ "active": true, "kind": "query", "name": "database", "orig": "database", "reqd": false, "type": "`$ANY`", "index$": 0 }, { "active": true, "kind": "query", "name": "job_class_name", "orig": "job_class_name", "reqd": false, "type": "`$ANY`", "index$": 1 }] }, "contract": { "id": "GET /api/v4/admin/batched_background_migrations", "json": "{\"operationId\":\"getApiV4AdminBatchedBackgroundMigrations\",\"parameters\":[{\"default\":\"main\",\"description\":\"The name of the database, the default `main`\",\"enum\":[\"main\",\"ci\",\"sec\",\"embedding\",\"geo\"],\"in\":\"query\",\"name\":\"database\",\"required\":false,\"type\":\"string\"},{\"description\":\"Filter migrations by job class name.\",\"in\":\"query\",\"name\":\"job_class_name\",\"required\":false,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get the list of batched background migrations\",\"schema\":{\"items\":{\"description\":\"API_Entities_BatchedBackgroundMigration model\",\"properties\":{\"column_name\":{\"example\":\"id\",\"type\":\"string\"},\"created_at\":{\"example\":\"2022-11-28T16:26:39+02:00\",\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"example\":\"1234\",\"type\":\"string\"},\"job_class_name\":{\"example\":\"CopyColumnUsingBackgroundMigrationJob\",\"type\":\"string\"},\"progress\":{\"example\":50,\"format\":\"float\",\"type\":\"number\"},\"status\":{\"example\":\"active\",\"type\":\"string\"},\"table_name\":{\"example\":\"events\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"401\":{\"description\":\"401 Unauthorized\"},\"403\":{\"description\":\"403 Forbidden\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/v4/admin/batched_background_migrations", "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "admin" }, { "lit": "batched_background_migrations" }], "select": { "exist": ["database", "job_class_name"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }], "query": [{ "active": true, "kind": "query", "name": "database", "orig": "database", "reqd": false, "type": "`$ANY`", "index$": 0 }] }, "contract": { "id": "GET /api/v4/admin/batched_background_migrations/{id}", "json": "{\"operationId\":\"getApiV4AdminBatchedBackgroundMigrationsId\",\"parameters\":[{\"default\":\"main\",\"description\":\"The name of the database\",\"enum\":[\"main\",\"ci\",\"sec\",\"embedding\",\"geo\"],\"in\":\"query\",\"name\":\"database\",\"required\":false,\"type\":\"string\"},{\"description\":\"The batched background migration id\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Retrieve a batched background migration\",\"schema\":{\"description\":\"API_Entities_BatchedBackgroundMigration model\",\"properties\":{\"column_name\":{\"example\":\"id\",\"type\":\"string\"},\"created_at\":{\"example\":\"2022-11-28T16:26:39+02:00\",\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"example\":\"1234\",\"type\":\"string\"},\"job_class_name\":{\"example\":\"CopyColumnUsingBackgroundMigrationJob\",\"type\":\"string\"},\"progress\":{\"example\":50,\"format\":\"float\",\"type\":\"number\"},\"status\":{\"example\":\"active\",\"type\":\"string\"},\"table_name\":{\"example\":\"events\",\"type\":\"string\"}},\"type\":\"object\"}},\"401\":{\"description\":\"401 Unauthorized\"},\"403\":{\"description\":\"403 Forbidden\"},\"404\":{\"description\":\"404 Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/v4/admin/batched_background_migrations/{id}", "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "admin" }, { "lit": "batched_background_migrations" }, { "var": "id" }], "select": { "exist": ["database", "id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "batched_background_migration_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }], "query": [{ "active": true, "kind": "query", "name": "put_api_v4_admin_batched_background_migrations_id_pause", "orig": "put_api_v4_admin_batched_background_migrations_id_pause", "reqd": true, "type": "`$OBJECT`", "index$": 0 }] }, "contract": { "id": "PUT /api/v4/admin/batched_background_migrations/{id}/pause", "json": "{\"consumes\":[\"application/json\"],\"operationId\":\"putApiV4AdminBatchedBackgroundMigrationsIdPause\",\"parameters\":[{\"description\":\"The batched background migration id\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"integer\"},{\"in\":\"body\",\"name\":\"putApiV4AdminBatchedBackgroundMigrationsIdPause\",\"required\":true,\"schema\":{\"description\":\"Pause a batched background migration\",\"properties\":{\"database\":{\"default\":\"main\",\"description\":\"The name of the database\",\"enum\":[\"main\",\"ci\",\"sec\",\"embedding\",\"geo\"],\"type\":\"string\"}},\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Pause a batched background migration\",\"schema\":{\"description\":\"API_Entities_BatchedBackgroundMigration model\",\"properties\":{\"column_name\":{\"example\":\"id\",\"type\":\"string\"},\"created_at\":{\"example\":\"2022-11-28T16:26:39+02:00\",\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"example\":\"1234\",\"type\":\"string\"},\"job_class_name\":{\"example\":\"CopyColumnUsingBackgroundMigrationJob\",\"type\":\"string\"},\"progress\":{\"example\":50,\"format\":\"float\",\"type\":\"number\"},\"status\":{\"example\":\"active\",\"type\":\"string\"},\"table_name\":{\"example\":\"events\",\"type\":\"string\"}},\"type\":\"object\"}},\"401\":{\"description\":\"401 Unauthorized\"},\"403\":{\"description\":\"403 Forbidden\"},\"404\":{\"description\":\"404 Not found\"},\"422\":{\"description\":\"You can pause only `active` batched background migrations.\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "PUT", "orig": "/api/v4/admin/batched_background_migrations/{id}/pause", "rename": { "param": { "id": "batched_background_migration_id" } }, "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "admin" }, { "lit": "batched_background_migrations" }, { "var": "batched_background_migration_id" }, { "lit": "pause" }], "select": { "exist": ["batched_background_migration_id", "put_api_v4_admin_batched_background_migrations_id_pause"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "batched_background_migration_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }], "query": [{ "active": true, "kind": "query", "name": "put_api_v4_admin_batched_background_migrations_id_resume", "orig": "put_api_v4_admin_batched_background_migrations_id_resume", "reqd": true, "type": "`$OBJECT`", "index$": 0 }] }, "contract": { "id": "PUT /api/v4/admin/batched_background_migrations/{id}/resume", "json": "{\"consumes\":[\"application/json\"],\"operationId\":\"putApiV4AdminBatchedBackgroundMigrationsIdResume\",\"parameters\":[{\"description\":\"The batched background migration id\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"integer\"},{\"in\":\"body\",\"name\":\"putApiV4AdminBatchedBackgroundMigrationsIdResume\",\"required\":true,\"schema\":{\"description\":\"Resume a batched background migration\",\"properties\":{\"database\":{\"default\":\"main\",\"description\":\"The name of the database\",\"enum\":[\"main\",\"ci\",\"sec\",\"embedding\",\"geo\"],\"type\":\"string\"}},\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Resume a batched background migration\",\"schema\":{\"description\":\"API_Entities_BatchedBackgroundMigration model\",\"properties\":{\"column_name\":{\"example\":\"id\",\"type\":\"string\"},\"created_at\":{\"example\":\"2022-11-28T16:26:39+02:00\",\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"example\":\"1234\",\"type\":\"string\"},\"job_class_name\":{\"example\":\"CopyColumnUsingBackgroundMigrationJob\",\"type\":\"string\"},\"progress\":{\"example\":50,\"format\":\"float\",\"type\":\"number\"},\"status\":{\"example\":\"active\",\"type\":\"string\"},\"table_name\":{\"example\":\"events\",\"type\":\"string\"}},\"type\":\"object\"}},\"401\":{\"description\":\"401 Unauthorized\"},\"403\":{\"description\":\"403 Forbidden\"},\"404\":{\"description\":\"404 Not found\"},\"422\":{\"description\":\"You can resume only `paused` batched background migrations.\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "PUT", "orig": "/api/v4/admin/batched_background_migrations/{id}/resume", "rename": { "param": { "id": "batched_background_migration_id" } }, "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "admin" }, { "lit": "batched_background_migrations" }, { "var": "batched_background_migration_id" }, { "lit": "resume" }], "select": { "exist": ["batched_background_migration_id", "put_api_v4_admin_batched_background_migrations_id_resume"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "update" } }, "relations": { "ancestors": [["batched_background_migration"]] }, "key$": "api_entities_batched_background_migration", "name__orig": "api_entities_batched_background_migration", "Name": "ApiEntitiesBatchedBackgroundMigration", "name_": "api_entities_batched_background_migration", "name-": "api-entities-batched-background-migration", "NAME": "API_ENTITIES_BATCHED_BACKGROUND_MIGRATION", "index$": 15 }, { "active": true, "entity": "api_entities_batched_background_migration", "key$": "BasicApiEntitiesBatchedBackgroundMigrationFlow", "kind": "basic", "name": "BasicApiEntitiesBatchedBackgroundMigrationFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "api_entities_batched_background_migration_ref01" } }], "index$": 0 }, { "active": true, "data": {}, "input": { "ref": "api_entities_batched_background_migration_ref01", "srcdatavar": "api_entities_batched_background_migration_ref01_data", "suffix": "_up0", "textfield": "column_name" }, "match": {}, "op": "update", "spec": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-api_entities_batched_background_migration_ref01" } }], "valid": [], "index$": 1 }, { "active": true, "data": {}, "input": { "ref": "api_entities_batched_background_migration_ref01", "srcdatavar": "api_entities_batched_background_migration_ref01_data", "suffix": "_dt0" }, "match": { "id": "api_entities_batched_background_migration01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-api_entities_batched_background_migration_ref01" } }], "index$": 2 }] }, 'ApiEntitiesBatchedBackgroundMigration');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let api_entities_batched_background_migration_ref01_data = Object.values(setup.data.existing.api_entities_batched_background_migration)[0];
        // LIST
        const api_entities_batched_background_migration_ref01_ent = client.ApiEntitiesBatchedBackgroundMigration();
        const api_entities_batched_background_migration_ref01_match = {};
        const api_entities_batched_background_migration_ref01_list = (await api_entities_batched_background_migration_ref01_ent.list(api_entities_batched_background_migration_ref01_match)).map((e) => e.data());
        // UPDATE
        const api_entities_batched_background_migration_ref01_data_up0 = {};
        api_entities_batched_background_migration_ref01_data_up0.id = api_entities_batched_background_migration_ref01_data.id;
        const api_entities_batched_background_migration_ref01_markdef_up0 = { name: 'column_name', value: 'Mark01-api_entities_batched_background_migration_ref01_' + setup.now };
        api_entities_batched_background_migration_ref01_data_up0[api_entities_batched_background_migration_ref01_markdef_up0.name] = api_entities_batched_background_migration_ref01_markdef_up0.value;
        const api_entities_batched_background_migration_ref01_resdata_up0 = (await api_entities_batched_background_migration_ref01_ent.update(api_entities_batched_background_migration_ref01_data_up0)).data();
        (0, node_assert_1.default)(api_entities_batched_background_migration_ref01_resdata_up0.id === api_entities_batched_background_migration_ref01_data_up0.id);
        (0, node_assert_1.default)(api_entities_batched_background_migration_ref01_resdata_up0[api_entities_batched_background_migration_ref01_markdef_up0.name] === api_entities_batched_background_migration_ref01_markdef_up0.value);
        // LOAD
        const api_entities_batched_background_migration_ref01_match_dt0 = {};
        api_entities_batched_background_migration_ref01_match_dt0.id = api_entities_batched_background_migration_ref01_data.id;
        const api_entities_batched_background_migration_ref01_data_dt0 = (await api_entities_batched_background_migration_ref01_ent.load(api_entities_batched_background_migration_ref01_match_dt0)).data();
        (0, node_assert_1.default)(api_entities_batched_background_migration_ref01_data_dt0.id === api_entities_batched_background_migration_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/api_entities_batched_background_migration/ApiEntitiesBatchedBackgroundMigrationTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['api_entities_batched_background_migration01', 'api_entities_batched_background_migration02', 'api_entities_batched_background_migration03', 'batched_background_migration01', 'batched_background_migration02', 'batched_background_migration03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_API_ENTITIES_BATCHED_BACKGROUND_MIGRATION_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_API_ENTITIES_BATCHED_BACKGROUND_MIGRATION_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_API_ENTITIES_BATCHED_BACKGROUND_MIGRATION_ENTID'];
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
//# sourceMappingURL=ApiEntitiesBatchedBackgroundMigrationEntity.test.js.map