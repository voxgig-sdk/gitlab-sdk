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
(0, node_test_1.describe)('ApiEntitiesPackagesConanRecipeSnapshotEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.ApiEntitiesPackagesConanRecipeSnapshot();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'api_entities_packages_conan_recipe_snapshot.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "id", "req": false, "type": "`$STRING`", "index$": 0 }], "id": { "field": "id", "name": "id", "parts": ["package_name", "package_version", "package_username", "package_channel"], "sep": "/" }, "name": "api_entities_packages_conan_recipe_snapshot", "op": { "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": "stable", "kind": "param", "name": "package_channel", "orig": "package_channel", "reqd": true, "type": "`$ANY`", "index$": 1 }, { "active": true, "example": "my-package", "kind": "param", "name": "package_name", "orig": "package_name", "reqd": true, "type": "`$ANY`", "index$": 2 }, { "active": true, "example": "my-group+my-project", "kind": "param", "name": "package_username", "orig": "package_username", "reqd": true, "type": "`$ANY`", "index$": 3 }, { "active": true, "example": "1.0", "kind": "param", "name": "package_version", "orig": "package_version", "reqd": true, "type": "`$ANY`", "index$": 4 }] }, "contract": { "id": "GET /api/v4/projects/{id}/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}", "json": "{\"operationId\":\"getApiV4ProjectsIdPackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannel\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package name\",\"example\":\"my-package\",\"in\":\"path\",\"name\":\"package_name\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package version\",\"example\":\"1.0\",\"in\":\"path\",\"name\":\"package_version\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package username\",\"example\":\"my-group+my-project\",\"in\":\"path\",\"name\":\"package_username\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package channel\",\"example\":\"stable\",\"in\":\"path\",\"name\":\"package_channel\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Recipe Snapshot\",\"schema\":{\"description\":\"API_Entities_Packages_Conan_RecipeSnapshot model\",\"properties\":{\"recipe_snapshot\":{\"example\":\"{ \\\"conan_sources.tgz\\\": \\\"eadf19b33f4c3c7e113faabf26e76277\\\" }\",\"type\":\"object\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Bad Request\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/v4/projects/{id}/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}", "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "id" }, { "lit": "packages" }, { "lit": "conan" }, { "lit": "v1" }, { "lit": "conans" }, { "var": "package_name" }, { "var": "package_version" }, { "var": "package_username" }, { "var": "package_channel" }], "select": { "exist": ["id", "package_channel", "package_name", "package_username", "package_version"] }, "transform": { "req": "`reqdata`", "res": "`body.recipe_snapshot`" }, "index$": 0 }, { "active": true, "args": { "params": [{ "active": true, "example": "stable", "kind": "param", "name": "package_channel", "orig": "package_channel", "reqd": true, "type": "`$ANY`", "index$": 0 }, { "active": true, "example": "my-package", "kind": "param", "name": "package_name", "orig": "package_name", "reqd": true, "type": "`$ANY`", "index$": 1 }, { "active": true, "example": "my-group+my-project", "kind": "param", "name": "package_username", "orig": "package_username", "reqd": true, "type": "`$ANY`", "index$": 2 }, { "active": true, "example": "1.0", "kind": "param", "name": "package_version", "orig": "package_version", "reqd": true, "type": "`$ANY`", "index$": 3 }] }, "contract": { "id": "GET /api/v4/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}", "json": "{\"operationId\":\"getApiV4PackagesConanV1ConansPackageNamePackageVersionPackageUsernamePackageChannel\",\"parameters\":[{\"description\":\"Package name\",\"example\":\"my-package\",\"in\":\"path\",\"name\":\"package_name\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package version\",\"example\":\"1.0\",\"in\":\"path\",\"name\":\"package_version\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package username\",\"example\":\"my-group+my-project\",\"in\":\"path\",\"name\":\"package_username\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package channel\",\"example\":\"stable\",\"in\":\"path\",\"name\":\"package_channel\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Recipe Snapshot\",\"schema\":{\"description\":\"API_Entities_Packages_Conan_RecipeSnapshot model\",\"properties\":{\"recipe_snapshot\":{\"example\":\"{ \\\"conan_sources.tgz\\\": \\\"eadf19b33f4c3c7e113faabf26e76277\\\" }\",\"type\":\"object\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Bad Request\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/v4/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}", "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "packages" }, { "lit": "conan" }, { "lit": "v1" }, { "lit": "conans" }, { "var": "package_name" }, { "var": "package_version" }, { "var": "package_username" }, { "var": "package_channel" }], "select": { "exist": ["package_channel", "package_name", "package_username", "package_version"] }, "transform": { "req": "`reqdata`", "res": "`body.recipe_snapshot`" }, "index$": 1 }], "key$": "load" } }, "relations": { "ancestors": [["conan"]] }, "key$": "api_entities_packages_conan_recipe_snapshot", "name__orig": "api_entities_packages_conan_recipe_snapshot", "Name": "ApiEntitiesPackagesConanRecipeSnapshot", "name_": "api_entities_packages_conan_recipe_snapshot", "name-": "api-entities-packages-conan-recipe-snapshot", "NAME": "API_ENTITIES_PACKAGES_CONAN_RECIPE_SNAPSHOT", "index$": 119 }, { "active": true, "entity": "api_entities_packages_conan_recipe_snapshot", "key$": "BasicApiEntitiesPackagesConanRecipeSnapshotFlow", "kind": "basic", "name": "BasicApiEntitiesPackagesConanRecipeSnapshotFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "api_entities_packages_conan_recipe_snapshot_ref01", "srcdatavar": "api_entities_packages_conan_recipe_snapshot_ref01_data", "suffix": "_dt0" }, "match": { "id": "api_entities_packages_conan_recipe_snapshot01", "package_name": "package_name01", "package_username": "package_username01", "package_version": "package_version01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-api_entities_packages_conan_recipe_snapshot_ref01" } }], "index$": 0 }] }, 'ApiEntitiesPackagesConanRecipeSnapshot');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let api_entities_packages_conan_recipe_snapshot_ref01_data = Object.values(setup.data.existing.api_entities_packages_conan_recipe_snapshot)[0];
        // LOAD
        const api_entities_packages_conan_recipe_snapshot_ref01_ent = client.ApiEntitiesPackagesConanRecipeSnapshot();
        const api_entities_packages_conan_recipe_snapshot_ref01_match_dt0 = {};
        api_entities_packages_conan_recipe_snapshot_ref01_match_dt0.id = api_entities_packages_conan_recipe_snapshot_ref01_data.id;
        const api_entities_packages_conan_recipe_snapshot_ref01_data_dt0 = (await api_entities_packages_conan_recipe_snapshot_ref01_ent.load(api_entities_packages_conan_recipe_snapshot_ref01_match_dt0)).data();
        (0, node_assert_1.default)(api_entities_packages_conan_recipe_snapshot_ref01_data_dt0.id === api_entities_packages_conan_recipe_snapshot_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/api_entities_packages_conan_recipe_snapshot/ApiEntitiesPackagesConanRecipeSnapshotTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['api_entities_packages_conan_recipe_snapshot01', 'api_entities_packages_conan_recipe_snapshot02', 'api_entities_packages_conan_recipe_snapshot03', 'conan01', 'conan02', 'conan03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_API_ENTITIES_PACKAGES_CONAN_RECIPE_SNAPSHOT_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_API_ENTITIES_PACKAGES_CONAN_RECIPE_SNAPSHOT_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_API_ENTITIES_PACKAGES_CONAN_RECIPE_SNAPSHOT_ENTID'];
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
//# sourceMappingURL=ApiEntitiesPackagesConanRecipeSnapshotEntity.test.js.map