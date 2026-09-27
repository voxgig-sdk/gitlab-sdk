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
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('ApiEntitiesPackagesConanUploadUrlEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.ApiEntitiesPackagesConanUploadUrl();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'api_entities_packages_conan_upload_url.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": {}, "name": "api_entities_packages_conan_upload_url", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /api/v4/projects/{id}/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}/packages/{conan_package_reference}/upload_urls", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "ex": "my-package", "k": "param", "n": "conan_id", "or": "package_name", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "103f6067a947f366ef91fc1b7da351c588d1827f", "k": "param", "n": "conan_package_reference", "or": "conan_package_reference", "r": true, "t": "`$ANY`", "index$": 1 }, { "a": true, "ex": "stable", "k": "param", "n": "package_channel", "or": "package_channel", "r": true, "t": "`$ANY`", "index$": 2 }, { "a": true, "ex": "my-group+my-project", "k": "param", "n": "package_username", "or": "package_username", "r": true, "t": "`$ANY`", "index$": 3 }, { "a": true, "ex": "1.0", "k": "param", "n": "package_version", "or": "package_version", "r": true, "t": "`$ANY`", "index$": 4 }, { "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 5 }] }, "k": "http", "m": "POST", "o": "/api/v4/projects/{id}/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}/packages/{conan_package_reference}/upload_urls", "q": { "exist": ["conan_id", "conan_package_reference", "package_channel", "package_username", "package_version", "project_id"] }, "r": { "param": { "id": "project_id", "package_name": "conan_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "packages" }, { "lit": "conan" }, { "lit": "v1" }, { "lit": "conans" }, { "var": "conan_id" }, { "var": "package_version" }, { "var": "package_username" }, { "var": "package_channel" }, { "lit": "packages" }, { "var": "conan_package_reference" }, { "lit": "upload_urls" }], "t": { "req": "`reqdata`", "res": "`body.upload_urls`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /api/v4/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}/packages/{conan_package_reference}/upload_urls", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "ex": "my-package", "k": "param", "n": "conan_id", "or": "package_name", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "103f6067a947f366ef91fc1b7da351c588d1827f", "k": "param", "n": "conan_package_reference", "or": "conan_package_reference", "r": true, "t": "`$ANY`", "index$": 1 }, { "a": true, "ex": "stable", "k": "param", "n": "package_channel", "or": "package_channel", "r": true, "t": "`$ANY`", "index$": 2 }, { "a": true, "ex": "my-group+my-project", "k": "param", "n": "package_username", "or": "package_username", "r": true, "t": "`$ANY`", "index$": 3 }, { "a": true, "ex": "1.0", "k": "param", "n": "package_version", "or": "package_version", "r": true, "t": "`$ANY`", "index$": 4 }] }, "k": "http", "m": "POST", "o": "/api/v4/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}/packages/{conan_package_reference}/upload_urls", "q": { "exist": ["conan_id", "conan_package_reference", "package_channel", "package_username", "package_version"] }, "r": { "param": { "package_name": "conan_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "packages" }, { "lit": "conan" }, { "lit": "v1" }, { "lit": "conans" }, { "var": "conan_id" }, { "var": "package_version" }, { "var": "package_username" }, { "var": "package_channel" }, { "lit": "packages" }, { "var": "conan_package_reference" }, { "lit": "upload_urls" }], "t": { "req": "`reqdata`", "res": "`body.upload_urls`" }, "index$": 1 }, { "a": true, "co": { "id": "POST /api/v4/projects/{id}/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}/upload_urls", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "ex": "my-package", "k": "param", "n": "conan_id", "or": "package_name", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "stable", "k": "param", "n": "package_channel", "or": "package_channel", "r": true, "t": "`$ANY`", "index$": 1 }, { "a": true, "ex": "my-group+my-project", "k": "param", "n": "package_username", "or": "package_username", "r": true, "t": "`$ANY`", "index$": 2 }, { "a": true, "ex": "1.0", "k": "param", "n": "package_version", "or": "package_version", "r": true, "t": "`$ANY`", "index$": 3 }, { "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 4 }] }, "k": "http", "m": "POST", "o": "/api/v4/projects/{id}/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}/upload_urls", "q": { "exist": ["conan_id", "package_channel", "package_username", "package_version", "project_id"] }, "r": { "param": { "id": "project_id", "package_name": "conan_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "packages" }, { "lit": "conan" }, { "lit": "v1" }, { "lit": "conans" }, { "var": "conan_id" }, { "var": "package_version" }, { "var": "package_username" }, { "var": "package_channel" }, { "lit": "upload_urls" }], "t": { "req": "`reqdata`", "res": "`body.upload_urls`" }, "index$": 2 }, { "a": true, "co": { "id": "POST /api/v4/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}/upload_urls", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "ex": "my-package", "k": "param", "n": "conan_id", "or": "package_name", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "stable", "k": "param", "n": "package_channel", "or": "package_channel", "r": true, "t": "`$ANY`", "index$": 1 }, { "a": true, "ex": "my-group+my-project", "k": "param", "n": "package_username", "or": "package_username", "r": true, "t": "`$ANY`", "index$": 2 }, { "a": true, "ex": "1.0", "k": "param", "n": "package_version", "or": "package_version", "r": true, "t": "`$ANY`", "index$": 3 }] }, "k": "http", "m": "POST", "o": "/api/v4/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}/upload_urls", "q": { "exist": ["conan_id", "package_channel", "package_username", "package_version"] }, "r": { "param": { "package_name": "conan_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "packages" }, { "lit": "conan" }, { "lit": "v1" }, { "lit": "conans" }, { "var": "conan_id" }, { "var": "package_version" }, { "var": "package_username" }, { "var": "package_channel" }, { "lit": "upload_urls" }], "t": { "req": "`reqdata`", "res": "`body.upload_urls`" }, "index$": 3 }], "key$": "create" } }, "relations": { "ancestors": [["$.main.kit.entity.project", "$.main.kit.entity.conan"], ["$.main.kit.entity.project", "$.main.kit.entity.conan"]] }, "key$": "api_entities_packages_conan_upload_url", "name__orig": "api_entities_packages_conan_upload_url", "Name": "ApiEntitiesPackagesConanUploadUrl", "name_": "api_entities_packages_conan_upload_url", "name-": "api-entities-packages-conan-upload-url", "NAME": "API_ENTITIES_PACKAGES_CONAN_UPLOAD_URL", "index$": 121 }, { "active": true, "entity": "api_entities_packages_conan_upload_url", "key$": "BasicApiEntitiesPackagesConanUploadUrlFlow", "kind": "basic", "name": "BasicApiEntitiesPackagesConanUploadUrlFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "api_entities_packages_conan_upload_url_ref01" }, "m": { "conan_id": "conan01", "package_channel": "package_channel01", "package_username": "package_username01", "package_version": "package_version01" }, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'ApiEntitiesPackagesConanUploadUrl', { "POST /api/v4/projects/{id}/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}/packages/{conan_package_reference}/upload_urls": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project", "type": "string", "required": true, "index$": 0 }, { "in": "path", "name": "package_name", "description": "Package name", "type": "string", "required": true, "example": "my-package", "index$": 1 }, { "in": "path", "name": "package_version", "description": "Package version", "type": "string", "required": true, "example": "1.0", "index$": 2 }, { "in": "path", "name": "package_username", "description": "Package username", "type": "string", "required": true, "example": "my-group+my-project", "index$": 3 }, { "in": "path", "name": "package_channel", "description": "Package channel", "type": "string", "required": true, "example": "stable", "index$": 4 }, { "in": "path", "name": "conan_package_reference", "description": "Conan package ID", "type": "string", "required": true, "example": "103f6067a947f366ef91fc1b7da351c588d1827f", "index$": 5 }] }, "POST /api/v4/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}/packages/{conan_package_reference}/upload_urls": { "protocol": "http", "parameters": [{ "in": "path", "name": "package_name", "description": "Package name", "type": "string", "required": true, "example": "my-package", "index$": 0 }, { "in": "path", "name": "package_version", "description": "Package version", "type": "string", "required": true, "example": "1.0", "index$": 1 }, { "in": "path", "name": "package_username", "description": "Package username", "type": "string", "required": true, "example": "my-group+my-project", "index$": 2 }, { "in": "path", "name": "package_channel", "description": "Package channel", "type": "string", "required": true, "example": "stable", "index$": 3 }, { "in": "path", "name": "conan_package_reference", "description": "Conan package ID", "type": "string", "required": true, "example": "103f6067a947f366ef91fc1b7da351c588d1827f", "index$": 4 }] }, "POST /api/v4/projects/{id}/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}/upload_urls": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project", "type": "string", "required": true, "index$": 0 }, { "in": "path", "name": "package_name", "description": "Package name", "type": "string", "required": true, "example": "my-package", "index$": 1 }, { "in": "path", "name": "package_version", "description": "Package version", "type": "string", "required": true, "example": "1.0", "index$": 2 }, { "in": "path", "name": "package_username", "description": "Package username", "type": "string", "required": true, "example": "my-group+my-project", "index$": 3 }, { "in": "path", "name": "package_channel", "description": "Package channel", "type": "string", "required": true, "example": "stable", "index$": 4 }] }, "POST /api/v4/packages/conan/v1/conans/{package_name}/{package_version}/{package_username}/{package_channel}/upload_urls": { "protocol": "http", "parameters": [{ "in": "path", "name": "package_name", "description": "Package name", "type": "string", "required": true, "example": "my-package", "index$": 0 }, { "in": "path", "name": "package_version", "description": "Package version", "type": "string", "required": true, "example": "1.0", "index$": 1 }, { "in": "path", "name": "package_username", "description": "Package username", "type": "string", "required": true, "example": "my-group+my-project", "index$": 2 }, { "in": "path", "name": "package_channel", "description": "Package channel", "type": "string", "required": true, "example": "stable", "index$": 3 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const api_entities_packages_conan_upload_url_ref01_ent = client.ApiEntitiesPackagesConanUploadUrl();
        let api_entities_packages_conan_upload_url_ref01_data = setup.data.new.api_entities_packages_conan_upload_url['api_entities_packages_conan_upload_url_ref01'];
        api_entities_packages_conan_upload_url_ref01_data['conan_id'] = setup.idmap['conan01'];
        api_entities_packages_conan_upload_url_ref01_data['package_channel'] = setup.idmap['package_channel01'];
        api_entities_packages_conan_upload_url_ref01_data['package_username'] = setup.idmap['package_username01'];
        api_entities_packages_conan_upload_url_ref01_data['package_version'] = setup.idmap['package_version01'];
        api_entities_packages_conan_upload_url_ref01_data = (await api_entities_packages_conan_upload_url_ref01_ent.create(api_entities_packages_conan_upload_url_ref01_data)).data();
        (0, node_assert_1.default)(null != api_entities_packages_conan_upload_url_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/api_entities_packages_conan_upload_url/ApiEntitiesPackagesConanUploadUrlTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['api_entities_packages_conan_upload_url01', 'api_entities_packages_conan_upload_url02', 'api_entities_packages_conan_upload_url03', 'project01', 'project02', 'project03', 'conan01', 'conan02', 'conan03', 'package_channel01', 'package_username01', 'package_version01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_API_ENTITIES_PACKAGES_CONAN_UPLOAD_URL_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_API_ENTITIES_PACKAGES_CONAN_UPLOAD_URL_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_API_ENTITIES_PACKAGES_CONAN_UPLOAD_URL_ENTID'];
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
//# sourceMappingURL=ApiEntitiesPackagesConanUploadUrlEntity.test.js.map