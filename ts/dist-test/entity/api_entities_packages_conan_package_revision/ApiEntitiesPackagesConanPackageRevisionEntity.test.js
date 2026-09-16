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
(0, node_test_1.describe)('ApiEntitiesPackagesConanPackageRevisionEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.ApiEntitiesPackagesConanPackageRevision();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'api_entities_packages_conan_package_revision.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "revision", "req": false, "short": "The revision hash of the Conan recipe or package", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "time", "req": false, "short": "The UTC timestamp when the revision was created", "type": "`$STRING`", "index$": 1 }], "name": "api_entities_packages_conan_package_revision", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "params": [{ "active": true, "example": "my-package", "kind": "param", "name": "conan_id", "orig": "package_name", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": "5ab84d6acfe1f23c4fae0ab88f26e3a396351ac9", "kind": "param", "name": "conan_package_reference", "orig": "conan_package_reference", "reqd": true, "type": "`$ANY`", "index$": 1 }, { "active": true, "example": "stable", "kind": "param", "name": "package_channel", "orig": "package_channel", "reqd": true, "type": "`$ANY`", "index$": 2 }, { "active": true, "example": "my-group+my-project", "kind": "param", "name": "package_username", "orig": "package_username", "reqd": true, "type": "`$ANY`", "index$": 3 }, { "active": true, "example": "1.0", "kind": "param", "name": "package_version", "orig": "package_version", "reqd": true, "type": "`$ANY`", "index$": 4 }, { "active": true, "kind": "param", "name": "project_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 5 }, { "active": true, "example": "df28fd816be3a119de5ce4d374436b25", "kind": "param", "name": "revision_id", "orig": "recipe_revision", "reqd": true, "type": "`$STRING`", "index$": 6 }] }, "contract": { "id": "GET /api/v4/projects/{id}/packages/conan/v2/conans/{package_name}/{package_version}/{package_username}/{package_channel}/revisions/{recipe_revision}/packages/{conan_package_reference}/revisions", "json": "{\"operationId\":\"getApiV4ProjectsIdPackagesConanV2ConansPackageNamePackageVersionPackageUsernamePackageChannelRevisionsRecipeRevisionPackagesConanPackageReferenceRevisions\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package name\",\"example\":\"my-package\",\"in\":\"path\",\"name\":\"package_name\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package version\",\"example\":\"1.0\",\"in\":\"path\",\"name\":\"package_version\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package username\",\"example\":\"my-group+my-project\",\"in\":\"path\",\"name\":\"package_username\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package channel\",\"example\":\"stable\",\"in\":\"path\",\"name\":\"package_channel\",\"required\":true,\"type\":\"string\"},{\"description\":\"Recipe revision\",\"example\":\"df28fd816be3a119de5ce4d374436b25\",\"in\":\"path\",\"name\":\"recipe_revision\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package reference\",\"example\":\"5ab84d6acfe1f23c4fae0ab88f26e3a396351ac9\",\"in\":\"path\",\"name\":\"conan_package_reference\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get the list of package revisions\",\"schema\":{\"description\":\"API_Entities_Packages_Conan_PackageRevisions model\",\"properties\":{\"packageReference\":{\"description\":\"The Conan package reference\",\"example\":\"packageTest/1.2.3@gitlab-org+conan/stable#1883c9f810f2d6e5b59d5285c7141970:133a1f2158ff2cf69739f316ec21143785be54c7\",\"type\":\"string\"},\"revisions\":{\"description\":\"List of package revisions\",\"items\":{\"description\":\"API_Entities_Packages_Conan_Revision model\",\"properties\":{\"revision\":{\"description\":\"The revision hash of the Conan recipe or package\",\"example\":\"75151329520e7685dcf5da49ded2fec0\",\"type\":\"string\"},\"time\":{\"description\":\"The UTC timestamp when the revision was created\",\"example\":\"2024-12-17T09:16:40.334Z\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Bad Request\"},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/v4/projects/{id}/packages/conan/v2/conans/{package_name}/{package_version}/{package_username}/{package_channel}/revisions/{recipe_revision}/packages/{conan_package_reference}/revisions", "rename": { "param": { "id": "project_id", "package_name": "conan_id", "recipe_revision": "revision_id" } }, "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "packages" }, { "lit": "conan" }, { "lit": "v2" }, { "lit": "conans" }, { "var": "conan_id" }, { "var": "package_version" }, { "var": "package_username" }, { "var": "package_channel" }, { "lit": "revisions" }, { "var": "revision_id" }, { "lit": "packages" }, { "var": "conan_package_reference" }, { "lit": "revisions" }], "select": { "exist": ["conan_id", "conan_package_reference", "package_channel", "package_username", "package_version", "project_id", "revision_id"] }, "transform": { "req": "`reqdata`", "res": "`body.revisions`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [["project", "conan", "revision", "package"]] }, "key$": "api_entities_packages_conan_package_revision", "name__orig": "api_entities_packages_conan_package_revision", "Name": "ApiEntitiesPackagesConanPackageRevision", "name_": "api_entities_packages_conan_package_revision", "name-": "api-entities-packages-conan-package-revision", "NAME": "API_ENTITIES_PACKAGES_CONAN_PACKAGE_REVISION", "index$": 115 }, { "active": true, "entity": "api_entities_packages_conan_package_revision", "key$": "BasicApiEntitiesPackagesConanPackageRevisionFlow", "kind": "basic", "name": "BasicApiEntitiesPackagesConanPackageRevisionFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": { "conan_id": "conan01", "conan_package_reference": "conan_package_reference01", "package_channel": "package_channel01", "package_username": "package_username01", "package_version": "package_version01", "project_id": "project01", "revision_id": "revision01" }, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "api_entities_packages_conan_package_revision_ref01" } }], "index$": 0 }] }, 'ApiEntitiesPackagesConanPackageRevision');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let api_entities_packages_conan_package_revision_ref01_data = Object.values(setup.data.existing.api_entities_packages_conan_package_revision)[0];
        // LIST
        const api_entities_packages_conan_package_revision_ref01_ent = client.ApiEntitiesPackagesConanPackageRevision();
        const api_entities_packages_conan_package_revision_ref01_match = {};
        api_entities_packages_conan_package_revision_ref01_match['conan_id'] = setup.idmap['conan01'];
        api_entities_packages_conan_package_revision_ref01_match['conan_package_reference'] = setup.idmap['conan_package_reference01'];
        api_entities_packages_conan_package_revision_ref01_match['package_channel'] = setup.idmap['package_channel01'];
        api_entities_packages_conan_package_revision_ref01_match['package_username'] = setup.idmap['package_username01'];
        api_entities_packages_conan_package_revision_ref01_match['package_version'] = setup.idmap['package_version01'];
        api_entities_packages_conan_package_revision_ref01_match['project_id'] = setup.idmap['project01'];
        api_entities_packages_conan_package_revision_ref01_match['revision_id'] = setup.idmap['revision01'];
        const api_entities_packages_conan_package_revision_ref01_list = (await api_entities_packages_conan_package_revision_ref01_ent.list(api_entities_packages_conan_package_revision_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/api_entities_packages_conan_package_revision/ApiEntitiesPackagesConanPackageRevisionTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['api_entities_packages_conan_package_revision01', 'api_entities_packages_conan_package_revision02', 'api_entities_packages_conan_package_revision03', 'project01', 'project02', 'project03', 'conan01', 'conan02', 'conan03', 'revision01', 'revision02', 'revision03', 'package01', 'package02', 'package03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_API_ENTITIES_PACKAGES_CONAN_PACKAGE_REVISION_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_API_ENTITIES_PACKAGES_CONAN_PACKAGE_REVISION_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_API_ENTITIES_PACKAGES_CONAN_PACKAGE_REVISION_ENTID'];
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
//# sourceMappingURL=ApiEntitiesPackagesConanPackageRevisionEntity.test.js.map