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
(0, node_test_1.describe)('ApiEntitiesProjectsContainerRegistryProtectionRuleEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.ApiEntitiesProjectsContainerRegistryProtectionRule();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['create', 'list', 'update']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'api_entities_projects_container_registry_protection_rule.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "format": "int32", "name": "id", "req": false, "type": "`$INTEGER`", "index$": 0 }, { "active": true, "name": "minimum_access_level_for_delete", "req": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "minimum_access_level_for_push", "req": false, "type": "`$STRING`", "index$": 2 }, { "active": true, "format": "int32", "name": "project_id", "req": false, "type": "`$INTEGER`", "index$": 3 }, { "active": true, "name": "repository_path_pattern", "req": false, "type": "`$STRING`", "index$": 4 }], "id": { "field": "id", "name": "id" }, "name": "api_entities_projects_container_registry_protection_rule", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "project_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }], "query": [{ "active": true, "kind": "query", "name": "post_api_v4_projects_id_registry_protection_repository_rule", "orig": "post_api_v4_projects_id_registry_protection_repository_rule", "reqd": true, "type": "`$OBJECT`", "index$": 0 }] }, "contract": { "id": "POST /api/v4/projects/{id}/registry/protection/repository/rules", "json": "{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4ProjectsIdRegistryProtectionRepositoryRules\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"in\":\"body\",\"name\":\"postApiV4ProjectsIdRegistryProtectionRepositoryRules\",\"required\":true,\"schema\":{\"description\":\"Create a container protection rule for a project\",\"properties\":{\"minimum_access_level_for_delete\":{\"description\":\"Minimum GitLab access level to allow to delete container images in the container registry.\\n            For example maintainer, owner or admin.\",\"enum\":[\"maintainer\",\"owner\",\"admin\"],\"type\":\"string\"},\"minimum_access_level_for_push\":{\"description\":\"Minimum GitLab access level to allow to push container images to the container registry.\\n            For example maintainer, owner or admin.\",\"enum\":[\"maintainer\",\"owner\",\"admin\"],\"type\":\"string\"},\"repository_path_pattern\":{\"description\":\"Container repository path pattern protected by the protection rule.\\n            For example `flight/flight-*`. Wildcard character `*` allowed.\",\"type\":\"string\"}},\"required\":[\"repository_path_pattern\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"Create a container protection rule for a project\",\"schema\":{\"description\":\"API_Entities_Projects_ContainerRegistry_Protection_Rule model\",\"properties\":{\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"minimum_access_level_for_delete\":{\"example\":\"maintainer\",\"type\":\"string\"},\"minimum_access_level_for_push\":{\"example\":\"maintainer\",\"type\":\"string\"},\"project_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"repository_path_pattern\":{\"example\":\"flightjs/flight0\",\"type\":\"string\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Bad Request\"},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not Found\"},\"422\":{\"description\":\"Unprocessable Entity\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "POST", "orig": "/api/v4/projects/{id}/registry/protection/repository/rules", "rename": { "param": { "id": "project_id" } }, "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "registry" }, { "lit": "protection" }, { "lit": "repository" }, { "lit": "rules" }], "select": { "exist": ["post_api_v4_projects_id_registry_protection_repository_rule", "project_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "project_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /api/v4/projects/{id}/registry/protection/repository/rules", "json": "{\"operationId\":\"getApiV4ProjectsIdRegistryProtectionRepositoryRules\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get list of container registry protection rules for a project\",\"schema\":{\"items\":{\"description\":\"API_Entities_Projects_ContainerRegistry_Protection_Rule model\",\"properties\":{\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"minimum_access_level_for_delete\":{\"example\":\"maintainer\",\"type\":\"string\"},\"minimum_access_level_for_push\":{\"example\":\"maintainer\",\"type\":\"string\"},\"project_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"repository_path_pattern\":{\"example\":\"flightjs/flight0\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/v4/projects/{id}/registry/protection/repository/rules", "rename": { "param": { "id": "project_id" } }, "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "registry" }, { "lit": "protection" }, { "lit": "repository" }, { "lit": "rules" }], "select": { "exist": ["project_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "update": { "input": "data", "name": "update", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "protection_rule_id", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "param", "name": "project_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 1 }], "query": [{ "active": true, "kind": "query", "name": "patch_api_v4_projects_id_registry_protection_repository_rules_protection_rule_id", "orig": "patch_api_v4_projects_id_registry_protection_repository_rules_protection_rule_id", "reqd": true, "type": "`$OBJECT`", "index$": 0 }] }, "contract": { "id": "PATCH /api/v4/projects/{id}/registry/protection/repository/rules/{protection_rule_id}", "json": "{\"consumes\":[\"application/json\"],\"operationId\":\"patchApiV4ProjectsIdRegistryProtectionRepositoryRulesProtectionRuleId\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The ID of the container protection rule\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"protection_rule_id\",\"required\":true,\"type\":\"integer\"},{\"in\":\"body\",\"name\":\"patchApiV4ProjectsIdRegistryProtectionRepositoryRulesProtectionRuleId\",\"required\":true,\"schema\":{\"description\":\"Update a container protection rule for a project\",\"properties\":{\"minimum_access_level_for_delete\":{\"description\":\"Minimum GitLab access level to allow to delete container images in the container registry.\\n              For example maintainer, owner or admin. To unset the value, use an empty string `\\\"\\\"`.\",\"enum\":[\"maintainer\",\"owner\",\"admin\",\"\"],\"type\":\"string\"},\"minimum_access_level_for_push\":{\"description\":\"Minimum GitLab access level to allow to push container images to the container registry.\\n              For example maintainer, owner or admin. To unset the value, use an empty string `\\\"\\\"`.\",\"enum\":[\"maintainer\",\"owner\",\"admin\",\"\"],\"type\":\"string\"},\"repository_path_pattern\":{\"description\":\"Container repository path pattern protected by the protection rule.\\n              For example `flight/flight-*`. Wildcard character `*` allowed.\",\"type\":\"string\"}},\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Update a container protection rule for a project\",\"schema\":{\"description\":\"API_Entities_Projects_ContainerRegistry_Protection_Rule model\",\"properties\":{\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"minimum_access_level_for_delete\":{\"example\":\"maintainer\",\"type\":\"string\"},\"minimum_access_level_for_push\":{\"example\":\"maintainer\",\"type\":\"string\"},\"project_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"repository_path_pattern\":{\"example\":\"flightjs/flight0\",\"type\":\"string\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Bad Request\"},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not Found\"},\"422\":{\"description\":\"Unprocessable Entity\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "PATCH", "orig": "/api/v4/projects/{id}/registry/protection/repository/rules/{protection_rule_id}", "rename": { "param": { "id": "project_id", "protection_rule_id": "id" } }, "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "registry" }, { "lit": "protection" }, { "lit": "repository" }, { "lit": "rules" }, { "var": "id" }], "select": { "exist": ["id", "patch_api_v4_projects_id_registry_protection_repository_rules_protection_rule_id", "project_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["project"]] }, "key$": "api_entities_projects_container_registry_protection_rule", "name__orig": "api_entities_projects_container_registry_protection_rule", "Name": "ApiEntitiesProjectsContainerRegistryProtectionRule", "name_": "api_entities_projects_container_registry_protection_rule", "name-": "api-entities-projects-container-registry-protection-rule", "NAME": "API_ENTITIES_PROJECTS_CONTAINER_REGISTRY_PROTECTION_RULE", "index$": 141 }, { "active": true, "entity": "api_entities_projects_container_registry_protection_rule", "key$": "BasicApiEntitiesProjectsContainerRegistryProtectionRuleFlow", "kind": "basic", "name": "BasicApiEntitiesProjectsContainerRegistryProtectionRuleFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "api_entities_projects_container_registry_protection_rule_ref01" }, "match": { "project_id": "project01" }, "op": "create", "spec": [], "valid": [], "index$": 0 }, { "active": true, "data": {}, "input": {}, "match": { "project_id": "project01" }, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "api_entities_projects_container_registry_protection_rule_ref01" } }], "index$": 1 }, { "active": true, "data": { "project_id": "project01" }, "input": { "ref": "api_entities_projects_container_registry_protection_rule_ref01", "srcdatavar": "api_entities_projects_container_registry_protection_rule_ref01_data", "suffix": "_up0", "textfield": "minimum_access_level_for_delete" }, "match": {}, "op": "update", "spec": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-api_entities_projects_container_registry_protection_rule_ref01" } }], "valid": [], "index$": 2 }] }, 'ApiEntitiesProjectsContainerRegistryProtectionRule');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const api_entities_projects_container_registry_protection_rule_ref01_ent = client.ApiEntitiesProjectsContainerRegistryProtectionRule();
        let api_entities_projects_container_registry_protection_rule_ref01_data = setup.data.new.api_entities_projects_container_registry_protection_rule['api_entities_projects_container_registry_protection_rule_ref01'];
        api_entities_projects_container_registry_protection_rule_ref01_data['project_id'] = setup.idmap['project01'];
        api_entities_projects_container_registry_protection_rule_ref01_data = (await api_entities_projects_container_registry_protection_rule_ref01_ent.create(api_entities_projects_container_registry_protection_rule_ref01_data)).data();
        (0, node_assert_1.default)(null != api_entities_projects_container_registry_protection_rule_ref01_data.id);
        // LIST
        const api_entities_projects_container_registry_protection_rule_ref01_match = {};
        api_entities_projects_container_registry_protection_rule_ref01_match['project_id'] = setup.idmap['project01'];
        const api_entities_projects_container_registry_protection_rule_ref01_list = (await api_entities_projects_container_registry_protection_rule_ref01_ent.list(api_entities_projects_container_registry_protection_rule_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(api_entities_projects_container_registry_protection_rule_ref01_list, { id: api_entities_projects_container_registry_protection_rule_ref01_data.id })));
        // UPDATE
        const api_entities_projects_container_registry_protection_rule_ref01_data_up0 = {};
        api_entities_projects_container_registry_protection_rule_ref01_data_up0.id = api_entities_projects_container_registry_protection_rule_ref01_data.id;
        api_entities_projects_container_registry_protection_rule_ref01_data_up0['project_id'] = setup.idmap['project_id'];
        const api_entities_projects_container_registry_protection_rule_ref01_markdef_up0 = { name: 'minimum_access_level_for_delete', value: 'Mark01-api_entities_projects_container_registry_protection_rule_ref01_' + setup.now };
        api_entities_projects_container_registry_protection_rule_ref01_data_up0[api_entities_projects_container_registry_protection_rule_ref01_markdef_up0.name] = api_entities_projects_container_registry_protection_rule_ref01_markdef_up0.value;
        const api_entities_projects_container_registry_protection_rule_ref01_resdata_up0 = (await api_entities_projects_container_registry_protection_rule_ref01_ent.update(api_entities_projects_container_registry_protection_rule_ref01_data_up0)).data();
        (0, node_assert_1.default)(api_entities_projects_container_registry_protection_rule_ref01_resdata_up0.id === api_entities_projects_container_registry_protection_rule_ref01_data_up0.id);
        (0, node_assert_1.default)(api_entities_projects_container_registry_protection_rule_ref01_resdata_up0[api_entities_projects_container_registry_protection_rule_ref01_markdef_up0.name] === api_entities_projects_container_registry_protection_rule_ref01_markdef_up0.value);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/api_entities_projects_container_registry_protection_rule/ApiEntitiesProjectsContainerRegistryProtectionRuleTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['api_entities_projects_container_registry_protection_rule01', 'api_entities_projects_container_registry_protection_rule02', 'api_entities_projects_container_registry_protection_rule03', 'project01', 'project02', 'project03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_API_ENTITIES_PROJECTS_CONTAINER_REGISTRY_PROTECTION_RULE_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_API_ENTITIES_PROJECTS_CONTAINER_REGISTRY_PROTECTION_RULE_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_API_ENTITIES_PROJECTS_CONTAINER_REGISTRY_PROTECTION_RULE_ENTID'];
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
//# sourceMappingURL=ApiEntitiesProjectsContainerRegistryProtectionRuleEntity.test.js.map