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
(0, node_test_1.describe)('GenericPackageEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.GenericPackage();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'generic_package.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [], "name": "generic_package", "op": { "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "file_name", "orig": "file_name", "reqd": true, "type": "`$ANY`", "index$": 0 }, { "active": true, "kind": "param", "name": "generic_id", "orig": "package_name", "reqd": true, "type": "`$STRING`", "index$": 1 }, { "active": true, "kind": "param", "name": "project_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 2 }], "query": [{ "active": true, "kind": "query", "name": "package_version", "orig": "package_version", "reqd": true, "type": "`$ANY`", "index$": 0 }, { "active": true, "kind": "query", "name": "path", "orig": "path", "reqd": false, "type": "`$STRING`", "index$": 1 }] }, "contract": { "id": "GET /api/v4/projects/{id}/packages/generic/{package_name}/*package_version/(*path/){file_name}", "json": "{\"operationId\":\"getApiV4ProjectsIdPackagesGenericPackageName*packageVersion(*path)FileName\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package name\",\"in\":\"path\",\"name\":\"package_name\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package version\",\"in\":\"query\",\"name\":\"package_version\",\"required\":true,\"type\":\"string\"},{\"description\":\"File directory path\",\"in\":\"query\",\"name\":\"path\",\"required\":false,\"type\":\"string\"},{\"description\":\"Package file name\",\"in\":\"path\",\"name\":\"file_name\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Download package file\"},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/v4/projects/{id}/packages/generic/{package_name}/*package_version/(*path/){file_name}", "rename": { "param": { "id": "project_id", "package_name": "generic_id" } }, "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "packages" }, { "lit": "generic" }, { "var": "generic_id" }, { "lit": "*package_version" }, { "lit": "(*path" }, { "lit": "){file_name}" }], "select": { "exist": ["file_name", "generic_id", "package_version", "path", "project_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "file_name", "orig": "file_name", "reqd": true, "type": "`$ANY`", "index$": 0 }, { "active": true, "kind": "param", "name": "generic_id", "orig": "package_name", "reqd": true, "type": "`$STRING`", "index$": 1 }, { "active": true, "kind": "param", "name": "project_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 2 }], "query": [{ "active": true, "kind": "query", "name": "put_api_v4_projects_id_packages_generic_package_name*package_version(*path)_file_name", "orig": "put_api_v4_projects_id_packages_generic_package_name*package_version(*path)_file_name", "reqd": true, "type": "`$OBJECT`", "index$": 0 }] }, "contract": { "id": "PUT /api/v4/projects/{id}/packages/generic/{package_name}/*package_version/(*path/){file_name}", "json": "{\"consumes\":[\"application/json\"],\"operationId\":\"putApiV4ProjectsIdPackagesGenericPackageName*packageVersion(*path)FileName\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package name\",\"in\":\"path\",\"name\":\"package_name\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package file name\",\"in\":\"path\",\"name\":\"file_name\",\"required\":true,\"type\":\"string\"},{\"in\":\"body\",\"name\":\"putApiV4ProjectsIdPackagesGenericPackageName*packageVersion(*path)FileName\",\"required\":true,\"schema\":{\"description\":\"Upload package file\",\"properties\":{\"file\":{\"description\":\"The package file to be published (generated by Multipart middleware)\",\"type\":\"file\"},\"package_version\":{\"description\":\"Package version\",\"type\":\"string\"},\"path\":{\"description\":\"File directory path\",\"type\":\"string\"},\"select\":{\"enum\":[\"package_file\"],\"type\":\"string\"},\"status\":{\"description\":\"Package status\",\"enum\":[\"default\",\"hidden\"],\"type\":\"string\"}},\"required\":[\"package_version\",\"file\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Upload package file\"},\"201\":{\"description\":\"Upload package file\"},\"400\":{\"description\":\"Bad Request\"},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "PUT", "orig": "/api/v4/projects/{id}/packages/generic/{package_name}/*package_version/(*path/){file_name}", "rename": { "param": { "id": "project_id", "package_name": "generic_id" } }, "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "packages" }, { "lit": "generic" }, { "var": "generic_id" }, { "lit": "*package_version" }, { "lit": "(*path" }, { "lit": "){file_name}" }], "select": { "exist": ["file_name", "generic_id", "project_id", "put_api_v4_projects_id_packages_generic_package_name*package_version(*path)_file_name"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "file_name", "orig": "file_name", "reqd": true, "type": "`$ANY`", "index$": 0 }, { "active": true, "kind": "param", "name": "generic_id", "orig": "package_name", "reqd": true, "type": "`$STRING`", "index$": 1 }, { "active": true, "kind": "param", "name": "project_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 2 }], "query": [{ "active": true, "kind": "query", "name": "put_api_v4_projects_id_packages_generic_package_name*package_version(*path)_file_name_authorize", "orig": "put_api_v4_projects_id_packages_generic_package_name*package_version(*path)_file_name_authorize", "reqd": true, "type": "`$OBJECT`", "index$": 0 }] }, "contract": { "id": "PUT /api/v4/projects/{id}/packages/generic/{package_name}/*package_version/(*path/){file_name}/authorize", "json": "{\"consumes\":[\"application/json\"],\"operationId\":\"putApiV4ProjectsIdPackagesGenericPackageName*packageVersion(*path)FileNameAuthorize\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package name\",\"in\":\"path\",\"name\":\"package_name\",\"required\":true,\"type\":\"string\"},{\"description\":\"Package file name\",\"in\":\"path\",\"name\":\"file_name\",\"required\":true,\"type\":\"string\"},{\"in\":\"body\",\"name\":\"putApiV4ProjectsIdPackagesGenericPackageName*packageVersion(*path)FileNameAuthorize\",\"required\":true,\"schema\":{\"description\":\"Workhorse authorize generic package file\",\"properties\":{\"package_version\":{\"description\":\"Package version\",\"type\":\"string\"},\"path\":{\"format\":\"int32\",\"type\":\"integer\"},\"status\":{\"description\":\"Package status\",\"enum\":[\"default\",\"hidden\"],\"type\":\"string\"}},\"required\":[\"package_version\",\"path\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Workhorse authorize generic package file\"},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "PUT", "orig": "/api/v4/projects/{id}/packages/generic/{package_name}/*package_version/(*path/){file_name}/authorize", "rename": { "param": { "id": "project_id", "package_name": "generic_id" } }, "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "packages" }, { "lit": "generic" }, { "var": "generic_id" }, { "lit": "*package_version" }, { "lit": "(*path" }, { "lit": "){file_name}" }, { "lit": "authorize" }], "select": { "exist": ["file_name", "generic_id", "project_id", "put_api_v4_projects_id_packages_generic_package_name*package_version(*path)_file_name_authorize"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "update" } }, "relations": { "ancestors": [["project", "generic"]] }, "key$": "generic_package", "name__orig": "generic_package", "Name": "GenericPackage", "name_": "generic_package", "name-": "generic-package", "NAME": "GENERIC_PACKAGE", "index$": 208 }, { "active": true, "entity": "generic_package", "key$": "BasicGenericPackageFlow", "kind": "basic", "name": "BasicGenericPackageFlow", "param": {}, "step": [{ "active": true, "data": { "file_name": "file_name01", "project_id": "project01" }, "input": { "ref": "generic_package_ref01", "srcdatavar": "generic_package_ref01_data", "suffix": "_up0" }, "match": {}, "op": "update", "spec": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-generic_package_ref01" } }], "valid": [], "index$": 0 }, { "active": true, "data": {}, "input": { "ref": "generic_package_ref01", "srcdatavar": "generic_package_ref01_data", "suffix": "_dt0" }, "match": { "file_name": "file_name01", "id": "generic_package01", "project_id": "project01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-generic_package_ref01" } }], "index$": 1 }] }, 'GenericPackage');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let generic_package_ref01_data = Object.values(setup.data.existing.generic_package)[0];
        // UPDATE
        const generic_package_ref01_ent = client.GenericPackage();
        const generic_package_ref01_data_up0 = {};
        generic_package_ref01_data_up0['file_name'] = setup.idmap['file_name'];
        generic_package_ref01_data_up0['project_id'] = setup.idmap['project_id'];
        const generic_package_ref01_resdata_up0 = (await generic_package_ref01_ent.update(generic_package_ref01_data_up0)).data();
        (0, node_assert_1.default)(null != generic_package_ref01_resdata_up0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/generic_package/GenericPackageTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['generic_package01', 'generic_package02', 'generic_package03', 'project01', 'project02', 'project03', 'generic01', 'generic02', 'generic03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_GENERIC_PACKAGE_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_GENERIC_PACKAGE_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_GENERIC_PACKAGE_ENTID'];
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
//# sourceMappingURL=GenericPackageEntity.test.js.map