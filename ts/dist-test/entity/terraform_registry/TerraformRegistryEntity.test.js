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
(0, node_test_1.describe)('TerraformRegistryEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.TerraformRegistry();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'terraform_registry.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 0 } }, "id": { "field": "id", "name": "id", "parts": ["module_name", "module_system"], "sep": "/" }, "name": "terraform_registry", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/v4/projects/{id}/packages/terraform/modules/{module_name}/{module_system}/*module_version", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "ex": "infra-registry", "k": "param", "n": "module_id", "or": "module_name", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "aws", "k": "param", "n": "module_system", "or": "module_system", "r": true, "t": "`$ANY`", "index$": 1 }, { "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 2 }], "query": [{ "a": true, "k": "query", "n": "module_version", "or": "module_version", "r": true, "t": "`$ANY`", "index$": 0 }, { "a": true, "k": "query", "n": "terraform_get", "or": "terraform_get", "r": false, "t": "`$ANY`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/api/v4/projects/{id}/packages/terraform/modules/{module_name}/{module_system}/*module_version", "q": { "exist": ["module_id", "module_system", "module_version", "project_id", "terraform_get"] }, "r": { "param": { "id": "project_id", "module_name": "module_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "packages" }, { "lit": "terraform" }, { "lit": "modules" }, { "var": "module_id" }, { "var": "module_system" }, { "lit": "*module_version" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /api/v4/projects/{id}/packages/terraform/modules/{module_name}/{module_system}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "infra-registry", "k": "param", "n": "module_name", "or": "module_name", "r": true, "t": "`$ANY`", "index$": 1 }, { "a": true, "ex": "aws", "k": "param", "n": "module_system", "or": "module_system", "r": true, "t": "`$ANY`", "index$": 2 }], "query": [{ "a": true, "k": "query", "n": "terraform_get", "or": "terraform_get", "r": false, "t": "`$ANY`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/v4/projects/{id}/packages/terraform/modules/{module_name}/{module_system}", "q": { "exist": ["id", "module_name", "module_system", "terraform_get"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "id" }, { "lit": "packages" }, { "lit": "terraform" }, { "lit": "modules" }, { "var": "module_name" }, { "var": "module_system" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "GET /api/v4/packages/terraform/modules/v1/{module_namespace}/{module_name}/{module_system}/*module_version/download", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "module_name", "or": "module_name", "r": true, "t": "`$ANY`", "index$": 0 }, { "a": true, "k": "param", "n": "module_system", "or": "module_system", "r": true, "t": "`$ANY`", "index$": 1 }, { "a": true, "k": "param", "n": "v1_id", "or": "module_namespace", "r": true, "t": "`$STRING`", "index$": 2 }], "query": [{ "a": true, "k": "query", "n": "module_version", "or": "module_version", "r": true, "t": "`$ANY`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/v4/packages/terraform/modules/v1/{module_namespace}/{module_name}/{module_system}/*module_version/download", "q": { "exist": ["module_name", "module_system", "module_version", "v1_id"] }, "r": { "param": { "module_namespace": "v1_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "packages" }, { "lit": "terraform" }, { "lit": "modules" }, { "lit": "v1" }, { "var": "v1_id" }, { "var": "module_name" }, { "var": "module_system" }, { "lit": "*module_version" }, { "lit": "download" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }, { "a": true, "co": { "id": "GET /api/v4/packages/terraform/modules/v1/{module_namespace}/{module_name}/{module_system}/*module_version/file", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "module_name", "or": "module_name", "r": true, "t": "`$ANY`", "index$": 0 }, { "a": true, "k": "param", "n": "module_system", "or": "module_system", "r": true, "t": "`$ANY`", "index$": 1 }, { "a": true, "k": "param", "n": "v1_id", "or": "module_namespace", "r": true, "t": "`$STRING`", "index$": 2 }], "query": [{ "a": true, "k": "query", "n": "module_version", "or": "module_version", "r": true, "t": "`$ANY`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/v4/packages/terraform/modules/v1/{module_namespace}/{module_name}/{module_system}/*module_version/file", "q": { "exist": ["module_name", "module_system", "module_version", "v1_id"] }, "r": { "param": { "module_namespace": "v1_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "packages" }, { "lit": "terraform" }, { "lit": "modules" }, { "lit": "v1" }, { "var": "v1_id" }, { "var": "module_name" }, { "var": "module_system" }, { "lit": "*module_version" }, { "lit": "file" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 3 }, { "a": true, "co": { "id": "GET /api/v4/packages/terraform/modules/v1/{module_namespace}/{module_name}/{module_system}/download", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "module_name", "or": "module_name", "r": true, "t": "`$ANY`", "index$": 0 }, { "a": true, "k": "param", "n": "module_system", "or": "module_system", "r": true, "t": "`$ANY`", "index$": 1 }, { "a": true, "k": "param", "n": "v1_id", "or": "module_namespace", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/api/v4/packages/terraform/modules/v1/{module_namespace}/{module_name}/{module_system}/download", "q": { "exist": ["module_name", "module_system", "v1_id"] }, "r": { "param": { "module_namespace": "v1_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "packages" }, { "lit": "terraform" }, { "lit": "modules" }, { "lit": "v1" }, { "var": "v1_id" }, { "var": "module_name" }, { "var": "module_system" }, { "lit": "download" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 4 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /api/v4/projects/{id}/packages/terraform/modules/{module_name}/{module_system}/*module_version/file", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "ex": "infra-registry", "k": "param", "n": "module_id", "or": "module_name", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "aws", "k": "param", "n": "module_system", "or": "module_system", "r": true, "t": "`$ANY`", "index$": 1 }, { "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 2 }], "query": [{ "a": true, "k": "query", "n": "file", "or": "file", "r": true, "t": "`$ANY`", "index$": 0 }, { "a": true, "k": "query", "n": "module_version", "or": "module_version", "r": true, "t": "`$ANY`", "index$": 1 }] }, "k": "http", "m": "PUT", "o": "/api/v4/projects/{id}/packages/terraform/modules/{module_name}/{module_system}/*module_version/file", "q": { "exist": ["file", "module_id", "module_system", "module_version", "project_id"] }, "r": { "param": { "id": "project_id", "module_name": "module_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "packages" }, { "lit": "terraform" }, { "lit": "modules" }, { "var": "module_id" }, { "var": "module_system" }, { "lit": "*module_version" }, { "lit": "file" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "PUT /api/v4/projects/{id}/packages/terraform/modules/{module_name}/{module_system}/*module_version/file/authorize", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "ex": "infra-registry", "k": "param", "n": "module_id", "or": "module_name", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "aws", "k": "param", "n": "module_system", "or": "module_system", "r": true, "t": "`$ANY`", "index$": 1 }, { "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 2 }], "query": [{ "a": true, "k": "query", "n": "put_api_v4_projects_id_packages_terraform_modules_module_name_module_system*module_version_file_authorize", "or": "put_api_v4_projects_id_packages_terraform_modules_module_name_module_system*module_version_file_authorize", "r": true, "t": "`$OBJECT`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/api/v4/projects/{id}/packages/terraform/modules/{module_name}/{module_system}/*module_version/file/authorize", "q": { "exist": ["module_id", "module_system", "project_id", "put_api_v4_projects_id_packages_terraform_modules_module_name_module_system*module_version_file_authorize"] }, "r": { "param": { "id": "project_id", "module_name": "module_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "packages" }, { "lit": "terraform" }, { "lit": "modules" }, { "var": "module_id" }, { "var": "module_system" }, { "lit": "*module_version" }, { "lit": "file" }, { "lit": "authorize" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.project"]] }, "key$": "terraform_registry", "name__orig": "terraform_registry", "Name": "TerraformRegistry", "name_": "terraform_registry", "name-": "terraform-registry", "NAME": "TERRAFORM_REGISTRY", "index$": 266 }, { "active": true, "entity": "terraform_registry", "key$": "BasicTerraformRegistryFlow", "kind": "basic", "name": "BasicTerraformRegistryFlow", "param": {}, "step": [{ "a": true, "d": { "module_id": "module01", "project_id": "project01" }, "i": { "ref": "terraform_registry_ref01", "srcdatavar": "terraform_registry_ref01_data", "suffix": "_up0" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-terraform_registry_ref01" } }], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "terraform_registry_ref01", "srcdatavar": "terraform_registry_ref01_data", "suffix": "_dt0" }, "m": { "id": "terraform_registry01", "module_name": "module_name01", "v1_id": "v101" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-terraform_registry_ref01" } }], "index$": 1 }] }, 'TerraformRegistry', { "GET /api/v4/projects/{id}/packages/terraform/modules/{module_name}/{module_system}/*module_version": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or full path of a project", "type": "string", "required": true, "index$": 0 }, { "in": "path", "name": "module_name", "description": "Module name", "type": "string", "required": true, "example": "infra-registry", "index$": 1 }, { "in": "path", "name": "module_system", "description": "Module system", "type": "string", "required": true, "example": "aws", "index$": 2 }, { "in": "query", "name": "module_version", "description": "Module version", "type": "string", "required": true, "index$": 3 }, { "in": "query", "name": "terraform-get", "description": "Terraform get redirection flag", "type": "string", "enum": ["1"], "required": false, "index$": 4 }] }, "GET /api/v4/projects/{id}/packages/terraform/modules/{module_name}/{module_system}": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or full path of a project", "type": "string", "required": true, "index$": 0 }, { "in": "path", "name": "module_name", "description": "Module name", "type": "string", "required": true, "example": "infra-registry", "index$": 1 }, { "in": "path", "name": "module_system", "description": "Module system", "type": "string", "required": true, "example": "aws", "index$": 2 }, { "in": "query", "name": "terraform-get", "description": "Terraform get redirection flag", "type": "string", "enum": ["1"], "required": false, "index$": 3 }] }, "GET /api/v4/packages/terraform/modules/v1/{module_namespace}/{module_name}/{module_system}/*module_version/download": { "protocol": "http", "parameters": [{ "in": "path", "name": "module_namespace", "description": "Group's ID or slug", "type": "string", "required": true, "index$": 0 }, { "in": "path", "name": "module_name", "description": "", "type": "string", "required": true, "index$": 1 }, { "in": "path", "name": "module_system", "type": "string", "required": true, "index$": 2 }, { "in": "query", "name": "module_version", "description": "Module version", "type": "string", "required": true, "index$": 3 }] }, "GET /api/v4/packages/terraform/modules/v1/{module_namespace}/{module_name}/{module_system}/*module_version/file": { "protocol": "http", "parameters": [{ "in": "path", "name": "module_namespace", "description": "Group's ID or slug", "type": "string", "required": true, "index$": 0 }, { "in": "path", "name": "module_name", "description": "", "type": "string", "required": true, "index$": 1 }, { "in": "path", "name": "module_system", "type": "string", "required": true, "index$": 2 }, { "in": "query", "name": "module_version", "description": "Module version", "type": "string", "required": true, "index$": 3 }] }, "GET /api/v4/packages/terraform/modules/v1/{module_namespace}/{module_name}/{module_system}/download": { "protocol": "http", "parameters": [{ "in": "path", "name": "module_namespace", "description": "Group's ID or slug", "type": "string", "required": true, "index$": 0 }, { "in": "path", "name": "module_name", "description": "", "type": "string", "required": true, "index$": 1 }, { "in": "path", "name": "module_system", "type": "string", "required": true, "index$": 2 }] }, "PUT /api/v4/projects/{id}/packages/terraform/modules/{module_name}/{module_system}/*module_version/file": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or full path of a project", "type": "string", "required": true, "index$": 0 }, { "in": "path", "name": "module_name", "description": "Module name", "type": "string", "required": true, "example": "infra-registry", "index$": 1 }, { "in": "path", "name": "module_system", "description": "Module system", "type": "string", "required": true, "example": "aws", "index$": 2 }, { "in": "formData", "name": "module_version", "description": "Module version", "type": "string", "required": true, "index$": 3 }, { "in": "formData", "name": "file", "description": "The package file to be published (generated by Multipart middleware)", "type": "file", "required": true, "index$": 4 }] }, "PUT /api/v4/projects/{id}/packages/terraform/modules/{module_name}/{module_system}/*module_version/file/authorize": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or full path of a project", "type": "string", "required": true, "index$": 0 }, { "in": "path", "name": "module_name", "description": "Module name", "type": "string", "required": true, "example": "infra-registry", "index$": 1 }, { "in": "path", "name": "module_system", "description": "Module system", "type": "string", "required": true, "example": "aws", "index$": 2 }, { "name": "putApiV4ProjectsIdPackagesTerraformModulesModuleNameModuleSystem*moduleVersionFileAuthorize", "in": "body", "required": true, "schema": { "type": "object", "properties": { "module_version": { "type": "string", "description": "Module version" } }, "required": ["module_version"], "description": "Workhorse authorize Terraform Module package file", "x-ref": "#/definitions/putApiV4ProjectsIdPackagesTerraformModulesModuleNameModuleSystem*moduleVersionFileAuthorize" }, "index$": 3 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let terraform_registry_ref01_data = Object.values(setup.data.existing.terraform_registry)[0];
        // UPDATE
        const terraform_registry_ref01_ent = client.TerraformRegistry();
        const terraform_registry_ref01_data_up0 = {};
        terraform_registry_ref01_data_up0.id = terraform_registry_ref01_data.id;
        terraform_registry_ref01_data_up0['module_id'] = setup.idmap['module_id'];
        terraform_registry_ref01_data_up0['project_id'] = setup.idmap['project_id'];
        const terraform_registry_ref01_resdata_up0 = (await terraform_registry_ref01_ent.update(terraform_registry_ref01_data_up0)).data();
        (0, node_assert_1.default)(terraform_registry_ref01_resdata_up0.id === terraform_registry_ref01_data_up0.id);
        // LOAD
        const terraform_registry_ref01_match_dt0 = {};
        terraform_registry_ref01_match_dt0.id = terraform_registry_ref01_data.id;
        const terraform_registry_ref01_data_dt0 = (await terraform_registry_ref01_ent.load(terraform_registry_ref01_match_dt0)).data();
        (0, node_assert_1.default)(terraform_registry_ref01_data_dt0.id === terraform_registry_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/terraform_registry/TerraformRegistryTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['terraform_registry01', 'terraform_registry02', 'terraform_registry03', 'project01', 'project02', 'project03', 'module01', 'module_name01', 'v101'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_TERRAFORM_REGISTRY_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_TERRAFORM_REGISTRY_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_TERRAFORM_REGISTRY_ENTID'];
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
//# sourceMappingURL=TerraformRegistryEntity.test.js.map