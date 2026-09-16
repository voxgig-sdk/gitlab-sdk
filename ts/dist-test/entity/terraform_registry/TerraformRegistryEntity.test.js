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
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "id", "req": false, "type": "`$STRING`", "index$": 0 }], "id": { "field": "id", "name": "id", "parts": ["module_name", "module_system"], "sep": "/" }, "name": "terraform_registry", "op": { "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "example": "infra-registry", "kind": "param", "name": "module_id", "orig": "module_name", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": "aws", "kind": "param", "name": "module_system", "orig": "module_system", "reqd": true, "type": "`$ANY`", "index$": 1 }, { "active": true, "kind": "param", "name": "project_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 2 }], "query": [{ "active": true, "kind": "query", "name": "module_version", "orig": "module_version", "reqd": true, "type": "`$ANY`", "index$": 0 }, { "active": true, "kind": "query", "name": "terraform_get", "orig": "terraform_get", "reqd": false, "type": "`$ANY`", "index$": 1 }] }, "contract": { "id": "GET /api/v4/projects/{id}/packages/terraform/modules/{module_name}/{module_system}/*module_version", "json": "{\"operationId\":\"getApiV4ProjectsIdPackagesTerraformModulesModuleNameModuleSystem*moduleVersion\",\"parameters\":[{\"description\":\"The ID or full path of a project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"Module name\",\"example\":\"infra-registry\",\"in\":\"path\",\"name\":\"module_name\",\"required\":true,\"type\":\"string\"},{\"description\":\"Module system\",\"example\":\"aws\",\"in\":\"path\",\"name\":\"module_system\",\"required\":true,\"type\":\"string\"},{\"description\":\"Module version\",\"in\":\"query\",\"name\":\"module_version\",\"required\":true,\"type\":\"string\"},{\"description\":\"Terraform get redirection flag\",\"enum\":[\"1\"],\"in\":\"query\",\"name\":\"terraform-get\",\"required\":false,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"204\":{\"description\":\"Download a specific version of a module\"},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/v4/projects/{id}/packages/terraform/modules/{module_name}/{module_system}/*module_version", "rename": { "param": { "id": "project_id", "module_name": "module_id" } }, "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "packages" }, { "lit": "terraform" }, { "lit": "modules" }, { "var": "module_id" }, { "var": "module_system" }, { "lit": "*module_version" }], "select": { "exist": ["module_id", "module_system", "module_version", "project_id", "terraform_get"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": "infra-registry", "kind": "param", "name": "module_name", "orig": "module_name", "reqd": true, "type": "`$ANY`", "index$": 1 }, { "active": true, "example": "aws", "kind": "param", "name": "module_system", "orig": "module_system", "reqd": true, "type": "`$ANY`", "index$": 2 }], "query": [{ "active": true, "kind": "query", "name": "terraform_get", "orig": "terraform_get", "reqd": false, "type": "`$ANY`", "index$": 0 }] }, "contract": { "id": "GET /api/v4/projects/{id}/packages/terraform/modules/{module_name}/{module_system}", "json": "{\"operationId\":\"getApiV4ProjectsIdPackagesTerraformModulesModuleNameModuleSystem\",\"parameters\":[{\"description\":\"The ID or full path of a project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"Module name\",\"example\":\"infra-registry\",\"in\":\"path\",\"name\":\"module_name\",\"required\":true,\"type\":\"string\"},{\"description\":\"Module system\",\"example\":\"aws\",\"in\":\"path\",\"name\":\"module_system\",\"required\":true,\"type\":\"string\"},{\"description\":\"Terraform get redirection flag\",\"enum\":[\"1\"],\"in\":\"query\",\"name\":\"terraform-get\",\"required\":false,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"204\":{\"description\":\"Download the latest version of a module\"},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/v4/projects/{id}/packages/terraform/modules/{module_name}/{module_system}", "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "id" }, { "lit": "packages" }, { "lit": "terraform" }, { "lit": "modules" }, { "var": "module_name" }, { "var": "module_system" }], "select": { "exist": ["id", "module_name", "module_system", "terraform_get"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "module_name", "orig": "module_name", "reqd": true, "type": "`$ANY`", "index$": 0 }, { "active": true, "kind": "param", "name": "module_system", "orig": "module_system", "reqd": true, "type": "`$ANY`", "index$": 1 }, { "active": true, "kind": "param", "name": "v1_id", "orig": "module_namespace", "reqd": true, "type": "`$STRING`", "index$": 2 }], "query": [{ "active": true, "kind": "query", "name": "module_version", "orig": "module_version", "reqd": true, "type": "`$ANY`", "index$": 0 }] }, "contract": { "id": "GET /api/v4/packages/terraform/modules/v1/{module_namespace}/{module_name}/{module_system}/*module_version/download", "json": "{\"operationId\":\"getApiV4PackagesTerraformModulesV1ModuleNamespaceModuleNameModuleSystem*moduleVersionDownload\",\"parameters\":[{\"description\":\"Group's ID or slug\",\"in\":\"path\",\"name\":\"module_namespace\",\"required\":true,\"type\":\"string\"},{\"description\":\"\",\"in\":\"path\",\"name\":\"module_name\",\"required\":true,\"type\":\"string\"},{\"in\":\"path\",\"name\":\"module_system\",\"required\":true,\"type\":\"string\"},{\"description\":\"Module version\",\"in\":\"query\",\"name\":\"module_version\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"204\":{\"description\":\"Get download location for specific version of a module\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/v4/packages/terraform/modules/v1/{module_namespace}/{module_name}/{module_system}/*module_version/download", "rename": { "param": { "module_namespace": "v1_id" } }, "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "packages" }, { "lit": "terraform" }, { "lit": "modules" }, { "lit": "v1" }, { "var": "v1_id" }, { "var": "module_name" }, { "var": "module_system" }, { "lit": "*module_version" }, { "lit": "download" }], "select": { "exist": ["module_name", "module_system", "module_version", "v1_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }, { "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "module_name", "orig": "module_name", "reqd": true, "type": "`$ANY`", "index$": 0 }, { "active": true, "kind": "param", "name": "module_system", "orig": "module_system", "reqd": true, "type": "`$ANY`", "index$": 1 }, { "active": true, "kind": "param", "name": "v1_id", "orig": "module_namespace", "reqd": true, "type": "`$STRING`", "index$": 2 }], "query": [{ "active": true, "kind": "query", "name": "module_version", "orig": "module_version", "reqd": true, "type": "`$ANY`", "index$": 0 }] }, "contract": { "id": "GET /api/v4/packages/terraform/modules/v1/{module_namespace}/{module_name}/{module_system}/*module_version/file", "json": "{\"operationId\":\"getApiV4PackagesTerraformModulesV1ModuleNamespaceModuleNameModuleSystem*moduleVersionFile\",\"parameters\":[{\"description\":\"Group's ID or slug\",\"in\":\"path\",\"name\":\"module_namespace\",\"required\":true,\"type\":\"string\"},{\"description\":\"\",\"in\":\"path\",\"name\":\"module_name\",\"required\":true,\"type\":\"string\"},{\"in\":\"path\",\"name\":\"module_system\",\"required\":true,\"type\":\"string\"},{\"description\":\"Module version\",\"in\":\"query\",\"name\":\"module_version\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Download specific version of a module\",\"schema\":{\"type\":\"file\"}},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/v4/packages/terraform/modules/v1/{module_namespace}/{module_name}/{module_system}/*module_version/file", "rename": { "param": { "module_namespace": "v1_id" } }, "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "packages" }, { "lit": "terraform" }, { "lit": "modules" }, { "lit": "v1" }, { "var": "v1_id" }, { "var": "module_name" }, { "var": "module_system" }, { "lit": "*module_version" }, { "lit": "file" }], "select": { "exist": ["module_name", "module_system", "module_version", "v1_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 3 }, { "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "module_name", "orig": "module_name", "reqd": true, "type": "`$ANY`", "index$": 0 }, { "active": true, "kind": "param", "name": "module_system", "orig": "module_system", "reqd": true, "type": "`$ANY`", "index$": 1 }, { "active": true, "kind": "param", "name": "v1_id", "orig": "module_namespace", "reqd": true, "type": "`$STRING`", "index$": 2 }] }, "contract": { "id": "GET /api/v4/packages/terraform/modules/v1/{module_namespace}/{module_name}/{module_system}/download", "json": "{\"operationId\":\"getApiV4PackagesTerraformModulesV1ModuleNamespaceModuleNameModuleSystemDownload\",\"parameters\":[{\"description\":\"Group's ID or slug\",\"in\":\"path\",\"name\":\"module_namespace\",\"required\":true,\"type\":\"string\"},{\"description\":\"\",\"in\":\"path\",\"name\":\"module_name\",\"required\":true,\"type\":\"string\"},{\"in\":\"path\",\"name\":\"module_system\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"302\":{\"description\":\"Get download location for the latest version of a module\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/v4/packages/terraform/modules/v1/{module_namespace}/{module_name}/{module_system}/download", "rename": { "param": { "module_namespace": "v1_id" } }, "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "packages" }, { "lit": "terraform" }, { "lit": "modules" }, { "lit": "v1" }, { "var": "v1_id" }, { "var": "module_name" }, { "var": "module_system" }, { "lit": "download" }], "select": { "exist": ["module_name", "module_system", "v1_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 4 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "active": true, "args": { "params": [{ "active": true, "example": "infra-registry", "kind": "param", "name": "module_id", "orig": "module_name", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": "aws", "kind": "param", "name": "module_system", "orig": "module_system", "reqd": true, "type": "`$ANY`", "index$": 1 }, { "active": true, "kind": "param", "name": "project_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 2 }], "query": [{ "active": true, "kind": "query", "name": "file", "orig": "file", "reqd": true, "type": "`$ANY`", "index$": 0 }, { "active": true, "kind": "query", "name": "module_version", "orig": "module_version", "reqd": true, "type": "`$ANY`", "index$": 1 }] }, "contract": { "id": "PUT /api/v4/projects/{id}/packages/terraform/modules/{module_name}/{module_system}/*module_version/file", "json": "{\"consumes\":[\"multipart/form-data\"],\"operationId\":\"putApiV4ProjectsIdPackagesTerraformModulesModuleNameModuleSystem*moduleVersionFile\",\"parameters\":[{\"description\":\"The ID or full path of a project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"Module name\",\"example\":\"infra-registry\",\"in\":\"path\",\"name\":\"module_name\",\"required\":true,\"type\":\"string\"},{\"description\":\"Module system\",\"example\":\"aws\",\"in\":\"path\",\"name\":\"module_system\",\"required\":true,\"type\":\"string\"},{\"description\":\"Module version\",\"in\":\"formData\",\"name\":\"module_version\",\"required\":true,\"type\":\"string\"},{\"description\":\"The package file to be published (generated by Multipart middleware)\",\"in\":\"formData\",\"name\":\"file\",\"required\":true,\"type\":\"file\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"Upload Terraform Module package file\"},\"400\":{\"description\":\"Invalid file\"},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "PUT", "orig": "/api/v4/projects/{id}/packages/terraform/modules/{module_name}/{module_system}/*module_version/file", "rename": { "param": { "id": "project_id", "module_name": "module_id" } }, "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "packages" }, { "lit": "terraform" }, { "lit": "modules" }, { "var": "module_id" }, { "var": "module_system" }, { "lit": "*module_version" }, { "lit": "file" }], "select": { "exist": ["file", "module_id", "module_system", "module_version", "project_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "active": true, "args": { "params": [{ "active": true, "example": "infra-registry", "kind": "param", "name": "module_id", "orig": "module_name", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": "aws", "kind": "param", "name": "module_system", "orig": "module_system", "reqd": true, "type": "`$ANY`", "index$": 1 }, { "active": true, "kind": "param", "name": "project_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 2 }], "query": [{ "active": true, "kind": "query", "name": "put_api_v4_projects_id_packages_terraform_modules_module_name_module_system*module_version_file_authorize", "orig": "put_api_v4_projects_id_packages_terraform_modules_module_name_module_system*module_version_file_authorize", "reqd": true, "type": "`$OBJECT`", "index$": 0 }] }, "contract": { "id": "PUT /api/v4/projects/{id}/packages/terraform/modules/{module_name}/{module_system}/*module_version/file/authorize", "json": "{\"consumes\":[\"application/json\"],\"operationId\":\"putApiV4ProjectsIdPackagesTerraformModulesModuleNameModuleSystem*moduleVersionFileAuthorize\",\"parameters\":[{\"description\":\"The ID or full path of a project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"Module name\",\"example\":\"infra-registry\",\"in\":\"path\",\"name\":\"module_name\",\"required\":true,\"type\":\"string\"},{\"description\":\"Module system\",\"example\":\"aws\",\"in\":\"path\",\"name\":\"module_system\",\"required\":true,\"type\":\"string\"},{\"in\":\"body\",\"name\":\"putApiV4ProjectsIdPackagesTerraformModulesModuleNameModuleSystem*moduleVersionFileAuthorize\",\"required\":true,\"schema\":{\"description\":\"Workhorse authorize Terraform Module package file\",\"properties\":{\"module_version\":{\"description\":\"Module version\",\"type\":\"string\"}},\"required\":[\"module_version\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Workhorse authorize Terraform Module package file\"},\"403\":{\"description\":\"Forbidden\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "PUT", "orig": "/api/v4/projects/{id}/packages/terraform/modules/{module_name}/{module_system}/*module_version/file/authorize", "rename": { "param": { "id": "project_id", "module_name": "module_id" } }, "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "packages" }, { "lit": "terraform" }, { "lit": "modules" }, { "var": "module_id" }, { "var": "module_system" }, { "lit": "*module_version" }, { "lit": "file" }, { "lit": "authorize" }], "select": { "exist": ["module_id", "module_system", "project_id", "put_api_v4_projects_id_packages_terraform_modules_module_name_module_system*module_version_file_authorize"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "update" } }, "relations": { "ancestors": [["v1"], ["project", "module"]] }, "key$": "terraform_registry", "name__orig": "terraform_registry", "Name": "TerraformRegistry", "name_": "terraform_registry", "name-": "terraform-registry", "NAME": "TERRAFORM_REGISTRY", "index$": 266 }, { "active": true, "entity": "terraform_registry", "key$": "BasicTerraformRegistryFlow", "kind": "basic", "name": "BasicTerraformRegistryFlow", "param": {}, "step": [{ "active": true, "data": { "module_id": "module01", "project_id": "project01" }, "input": { "ref": "terraform_registry_ref01", "srcdatavar": "terraform_registry_ref01_data", "suffix": "_up0" }, "match": {}, "op": "update", "spec": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-terraform_registry_ref01" } }], "valid": [], "index$": 0 }, { "active": true, "data": {}, "input": { "ref": "terraform_registry_ref01", "srcdatavar": "terraform_registry_ref01_data", "suffix": "_dt0" }, "match": { "id": "terraform_registry01", "module_name": "module_name01", "v1_id": "v101" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-terraform_registry_ref01" } }], "index$": 1 }] }, 'TerraformRegistry');
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
    let idmap = transform(['terraform_registry01', 'terraform_registry02', 'terraform_registry03', 'v101', 'v102', 'v103', 'project01', 'project02', 'project03', 'module01', 'module02', 'module03'], {
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