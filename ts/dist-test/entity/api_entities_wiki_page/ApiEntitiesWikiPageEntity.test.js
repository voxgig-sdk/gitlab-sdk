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
(0, node_test_1.describe)('ApiEntitiesWikiPageEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.ApiEntitiesWikiPage();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['create', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'api_entities_wiki_page.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [], "name": "api_entities_wiki_page", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "group_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }], "query": [{ "active": true, "kind": "query", "name": "post_api_v4_groups_id_wiki", "orig": "post_api_v4_groups_id_wiki", "reqd": true, "type": "`$OBJECT`", "index$": 0 }] }, "contract": { "id": "POST /api/v4/groups/{id}/wikis", "json": "{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4GroupsIdWikis\",\"parameters\":[{\"format\":\"int32\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"integer\"},{\"in\":\"body\",\"name\":\"postApiV4GroupsIdWikis\",\"required\":true,\"schema\":{\"description\":\"Create a wiki page\",\"properties\":{\"content\":{\"description\":\"Content of a wiki page\",\"type\":\"string\"},\"format\":{\"default\":\"markdown\",\"description\":\"Format of a wiki page. Available formats are markdown, rdoc, asciidoc and org\",\"enum\":[\"markdown\",\"rdoc\",\"asciidoc\",\"org\"],\"type\":\"string\"},\"front_matter\":{\"properties\":{\"title\":{\"description\":\"Front matter title of a wiki page\",\"type\":\"string\"}},\"type\":\"object\"},\"title\":{\"description\":\"Title of a wiki page\",\"type\":\"string\"}},\"required\":[\"title\",\"content\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"Create a wiki page\",\"schema\":{\"description\":\"API_Entities_WikiPage model\",\"properties\":{\"content\":{\"example\":\"Here is an instruction how to deploy this project.\",\"type\":\"string\"},\"encoding\":{\"example\":\"UTF-8\",\"type\":\"string\"},\"format\":{\"example\":\"markdown\",\"type\":\"string\"},\"front_matter\":{\"example\":{\"title\":\"deploy\"},\"type\":\"object\"},\"slug\":{\"example\":\"deploy\",\"type\":\"string\"},\"title\":{\"example\":\"deploy\",\"type\":\"string\"},\"wiki_page_meta_id\":{\"example\":{\"wiki_page_meta_id\":123},\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Validation error\"},\"404\":{\"description\":\"Not found\"},\"422\":{\"description\":\"Unprocessable entity\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "POST", "orig": "/api/v4/groups/{id}/wikis", "rename": { "param": { "id": "group_id" } }, "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "groups" }, { "var": "group_id" }, { "lit": "wikis" }], "select": { "exist": ["group_id", "post_api_v4_groups_id_wiki"] }, "transform": { "req": "`reqdata`", "res": "`body.front_matter`" }, "index$": 0 }, { "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "project_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }], "query": [{ "active": true, "kind": "query", "name": "post_api_v4_projects_id_wiki", "orig": "post_api_v4_projects_id_wiki", "reqd": true, "type": "`$OBJECT`", "index$": 0 }] }, "contract": { "id": "POST /api/v4/projects/{id}/wikis", "json": "{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4ProjectsIdWikis\",\"parameters\":[{\"format\":\"int32\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"integer\"},{\"in\":\"body\",\"name\":\"postApiV4ProjectsIdWikis\",\"required\":true,\"schema\":{\"description\":\"Create a wiki page\",\"properties\":{\"content\":{\"description\":\"Content of a wiki page\",\"type\":\"string\"},\"format\":{\"default\":\"markdown\",\"description\":\"Format of a wiki page. Available formats are markdown, rdoc, asciidoc and org\",\"enum\":[\"markdown\",\"rdoc\",\"asciidoc\",\"org\"],\"type\":\"string\"},\"front_matter\":{\"properties\":{\"title\":{\"description\":\"Front matter title of a wiki page\",\"type\":\"string\"}},\"type\":\"object\"},\"title\":{\"description\":\"Title of a wiki page\",\"type\":\"string\"}},\"required\":[\"title\",\"content\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"Create a wiki page\",\"schema\":{\"description\":\"API_Entities_WikiPage model\",\"properties\":{\"content\":{\"example\":\"Here is an instruction how to deploy this project.\",\"type\":\"string\"},\"encoding\":{\"example\":\"UTF-8\",\"type\":\"string\"},\"format\":{\"example\":\"markdown\",\"type\":\"string\"},\"front_matter\":{\"example\":{\"title\":\"deploy\"},\"type\":\"object\"},\"slug\":{\"example\":\"deploy\",\"type\":\"string\"},\"title\":{\"example\":\"deploy\",\"type\":\"string\"},\"wiki_page_meta_id\":{\"example\":{\"wiki_page_meta_id\":123},\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Validation error\"},\"404\":{\"description\":\"Not found\"},\"422\":{\"description\":\"Unprocessable entity\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "POST", "orig": "/api/v4/projects/{id}/wikis", "rename": { "param": { "id": "project_id" } }, "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "wikis" }], "select": { "exist": ["post_api_v4_projects_id_wiki", "project_id"] }, "transform": { "req": "`reqdata`", "res": "`body.front_matter`" }, "index$": 1 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "group_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "param", "name": "slug", "orig": "slug", "reqd": true, "type": "`$STRING`", "index$": 1 }], "query": [{ "active": true, "kind": "query", "name": "render_html", "orig": "render_html", "reqd": false, "type": "`$ANY`", "index$": 0 }, { "active": true, "kind": "query", "name": "version", "orig": "version", "reqd": false, "type": "`$ANY`", "index$": 1 }] }, "contract": { "id": "GET /api/v4/groups/{id}/wikis/{slug}", "json": "{\"operationId\":\"getApiV4GroupsIdWikisSlug\",\"parameters\":[{\"description\":\"The slug of a wiki page\",\"in\":\"path\",\"name\":\"slug\",\"required\":true,\"type\":\"string\"},{\"description\":\"The version hash of a wiki page\",\"in\":\"query\",\"name\":\"version\",\"required\":false,\"type\":\"string\"},{\"default\":false,\"description\":\"Render content to HTML\",\"in\":\"query\",\"name\":\"render_html\",\"required\":false,\"type\":\"boolean\"},{\"format\":\"int32\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get a wiki page\",\"schema\":{\"description\":\"API_Entities_WikiPage model\",\"properties\":{\"content\":{\"example\":\"Here is an instruction how to deploy this project.\",\"type\":\"string\"},\"encoding\":{\"example\":\"UTF-8\",\"type\":\"string\"},\"format\":{\"example\":\"markdown\",\"type\":\"string\"},\"front_matter\":{\"example\":{\"title\":\"deploy\"},\"type\":\"object\"},\"slug\":{\"example\":\"deploy\",\"type\":\"string\"},\"title\":{\"example\":\"deploy\",\"type\":\"string\"},\"wiki_page_meta_id\":{\"example\":{\"wiki_page_meta_id\":123},\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"}},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/v4/groups/{id}/wikis/{slug}", "rename": { "param": { "id": "group_id" } }, "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "groups" }, { "var": "group_id" }, { "lit": "wikis" }, { "var": "slug" }], "select": { "exist": ["group_id", "render_html", "slug", "version"] }, "transform": { "req": "`reqdata`", "res": "`body.front_matter`" }, "index$": 0 }, { "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "project_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "param", "name": "slug", "orig": "slug", "reqd": true, "type": "`$STRING`", "index$": 1 }], "query": [{ "active": true, "kind": "query", "name": "render_html", "orig": "render_html", "reqd": false, "type": "`$ANY`", "index$": 0 }, { "active": true, "kind": "query", "name": "version", "orig": "version", "reqd": false, "type": "`$ANY`", "index$": 1 }] }, "contract": { "id": "GET /api/v4/projects/{id}/wikis/{slug}", "json": "{\"operationId\":\"getApiV4ProjectsIdWikisSlug\",\"parameters\":[{\"description\":\"The slug of a wiki page\",\"in\":\"path\",\"name\":\"slug\",\"required\":true,\"type\":\"string\"},{\"description\":\"The version hash of a wiki page\",\"in\":\"query\",\"name\":\"version\",\"required\":false,\"type\":\"string\"},{\"default\":false,\"description\":\"Render content to HTML\",\"in\":\"query\",\"name\":\"render_html\",\"required\":false,\"type\":\"boolean\"},{\"format\":\"int32\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get a wiki page\",\"schema\":{\"description\":\"API_Entities_WikiPage model\",\"properties\":{\"content\":{\"example\":\"Here is an instruction how to deploy this project.\",\"type\":\"string\"},\"encoding\":{\"example\":\"UTF-8\",\"type\":\"string\"},\"format\":{\"example\":\"markdown\",\"type\":\"string\"},\"front_matter\":{\"example\":{\"title\":\"deploy\"},\"type\":\"object\"},\"slug\":{\"example\":\"deploy\",\"type\":\"string\"},\"title\":{\"example\":\"deploy\",\"type\":\"string\"},\"wiki_page_meta_id\":{\"example\":{\"wiki_page_meta_id\":123},\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"}},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/v4/projects/{id}/wikis/{slug}", "rename": { "param": { "id": "project_id" } }, "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "wikis" }, { "var": "slug" }], "select": { "exist": ["project_id", "render_html", "slug", "version"] }, "transform": { "req": "`reqdata`", "res": "`body.front_matter`" }, "index$": 1 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "group_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "param", "name": "slug", "orig": "slug", "reqd": true, "type": "`$STRING`", "index$": 1 }], "query": [{ "active": true, "kind": "query", "name": "put_api_v4_groups_id_wikis_slug", "orig": "put_api_v4_groups_id_wikis_slug", "reqd": true, "type": "`$OBJECT`", "index$": 0 }] }, "contract": { "id": "PUT /api/v4/groups/{id}/wikis/{slug}", "json": "{\"consumes\":[\"application/json\"],\"operationId\":\"putApiV4GroupsIdWikisSlug\",\"parameters\":[{\"format\":\"int32\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"integer\"},{\"format\":\"int32\",\"in\":\"path\",\"name\":\"slug\",\"required\":true,\"type\":\"integer\"},{\"in\":\"body\",\"name\":\"putApiV4GroupsIdWikisSlug\",\"required\":true,\"schema\":{\"description\":\"Update a wiki page\",\"properties\":{\"content\":{\"description\":\"Content of a wiki page\",\"type\":\"string\"},\"format\":{\"default\":\"markdown\",\"description\":\"Format of a wiki page. Available formats are markdown, rdoc, asciidoc and org\",\"enum\":[\"markdown\",\"rdoc\",\"asciidoc\",\"org\"],\"type\":\"string\"},\"front_matter\":{\"properties\":{\"title\":{\"description\":\"Front matter title of a wiki page\",\"type\":\"string\"}},\"type\":\"object\"},\"title\":{\"description\":\"Title of a wiki page\",\"type\":\"string\"}},\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Update a wiki page\",\"schema\":{\"description\":\"API_Entities_WikiPage model\",\"properties\":{\"content\":{\"example\":\"Here is an instruction how to deploy this project.\",\"type\":\"string\"},\"encoding\":{\"example\":\"UTF-8\",\"type\":\"string\"},\"format\":{\"example\":\"markdown\",\"type\":\"string\"},\"front_matter\":{\"example\":{\"title\":\"deploy\"},\"type\":\"object\"},\"slug\":{\"example\":\"deploy\",\"type\":\"string\"},\"title\":{\"example\":\"deploy\",\"type\":\"string\"},\"wiki_page_meta_id\":{\"example\":{\"wiki_page_meta_id\":123},\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Validation error\"},\"404\":{\"description\":\"Not found\"},\"422\":{\"description\":\"Unprocessable entity\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "PUT", "orig": "/api/v4/groups/{id}/wikis/{slug}", "rename": { "param": { "id": "group_id" } }, "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "groups" }, { "var": "group_id" }, { "lit": "wikis" }, { "var": "slug" }], "select": { "exist": ["group_id", "put_api_v4_groups_id_wikis_slug", "slug"] }, "transform": { "req": "`reqdata`", "res": "`body.front_matter`" }, "index$": 0 }, { "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "project_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "param", "name": "slug", "orig": "slug", "reqd": true, "type": "`$STRING`", "index$": 1 }], "query": [{ "active": true, "kind": "query", "name": "put_api_v4_projects_id_wikis_slug", "orig": "put_api_v4_projects_id_wikis_slug", "reqd": true, "type": "`$OBJECT`", "index$": 0 }] }, "contract": { "id": "PUT /api/v4/projects/{id}/wikis/{slug}", "json": "{\"consumes\":[\"application/json\"],\"operationId\":\"putApiV4ProjectsIdWikisSlug\",\"parameters\":[{\"format\":\"int32\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"integer\"},{\"format\":\"int32\",\"in\":\"path\",\"name\":\"slug\",\"required\":true,\"type\":\"integer\"},{\"in\":\"body\",\"name\":\"putApiV4ProjectsIdWikisSlug\",\"required\":true,\"schema\":{\"description\":\"Update a wiki page\",\"properties\":{\"content\":{\"description\":\"Content of a wiki page\",\"type\":\"string\"},\"format\":{\"default\":\"markdown\",\"description\":\"Format of a wiki page. Available formats are markdown, rdoc, asciidoc and org\",\"enum\":[\"markdown\",\"rdoc\",\"asciidoc\",\"org\"],\"type\":\"string\"},\"front_matter\":{\"properties\":{\"title\":{\"description\":\"Front matter title of a wiki page\",\"type\":\"string\"}},\"type\":\"object\"},\"title\":{\"description\":\"Title of a wiki page\",\"type\":\"string\"}},\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Update a wiki page\",\"schema\":{\"description\":\"API_Entities_WikiPage model\",\"properties\":{\"content\":{\"example\":\"Here is an instruction how to deploy this project.\",\"type\":\"string\"},\"encoding\":{\"example\":\"UTF-8\",\"type\":\"string\"},\"format\":{\"example\":\"markdown\",\"type\":\"string\"},\"front_matter\":{\"example\":{\"title\":\"deploy\"},\"type\":\"object\"},\"slug\":{\"example\":\"deploy\",\"type\":\"string\"},\"title\":{\"example\":\"deploy\",\"type\":\"string\"},\"wiki_page_meta_id\":{\"example\":{\"wiki_page_meta_id\":123},\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Validation error\"},\"404\":{\"description\":\"Not found\"},\"422\":{\"description\":\"Unprocessable entity\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "PUT", "orig": "/api/v4/projects/{id}/wikis/{slug}", "rename": { "param": { "id": "project_id" } }, "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "wikis" }, { "var": "slug" }], "select": { "exist": ["project_id", "put_api_v4_projects_id_wikis_slug", "slug"] }, "transform": { "req": "`reqdata`", "res": "`body.front_matter`" }, "index$": 1 }], "key$": "update" } }, "relations": { "ancestors": [["group"], ["project"], ["group", "wiki"], ["project", "wiki"]] }, "key$": "api_entities_wiki_page", "name__orig": "api_entities_wiki_page", "Name": "ApiEntitiesWikiPage", "name_": "api_entities_wiki_page", "name-": "api-entities-wiki-page", "NAME": "API_ENTITIES_WIKI_PAGE", "index$": 170 }, { "active": true, "entity": "api_entities_wiki_page", "key$": "BasicApiEntitiesWikiPageFlow", "kind": "basic", "name": "BasicApiEntitiesWikiPageFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "api_entities_wiki_page_ref01" }, "match": { "group_id": "group01", "project_id": "project01" }, "op": "create", "spec": [], "valid": [], "index$": 0 }, { "active": true, "data": { "project_id": "project01" }, "input": { "ref": "api_entities_wiki_page_ref01", "srcdatavar": "api_entities_wiki_page_ref01_data", "suffix": "_up0" }, "match": {}, "op": "update", "spec": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-api_entities_wiki_page_ref01" } }], "valid": [], "index$": 1 }, { "active": true, "data": {}, "input": { "ref": "api_entities_wiki_page_ref01", "srcdatavar": "api_entities_wiki_page_ref01_data", "suffix": "_dt0" }, "match": { "id": "api_entities_wiki_page01", "project_id": "project01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-api_entities_wiki_page_ref01" } }], "index$": 2 }] }, 'ApiEntitiesWikiPage');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const api_entities_wiki_page_ref01_ent = client.ApiEntitiesWikiPage();
        let api_entities_wiki_page_ref01_data = setup.data.new.api_entities_wiki_page['api_entities_wiki_page_ref01'];
        api_entities_wiki_page_ref01_data['group_id'] = setup.idmap['group01'];
        api_entities_wiki_page_ref01_data['project_id'] = setup.idmap['project01'];
        api_entities_wiki_page_ref01_data = (await api_entities_wiki_page_ref01_ent.create(api_entities_wiki_page_ref01_data)).data();
        (0, node_assert_1.default)(null != api_entities_wiki_page_ref01_data);
        // UPDATE
        const api_entities_wiki_page_ref01_data_up0 = {};
        api_entities_wiki_page_ref01_data_up0['project_id'] = setup.idmap['project_id'];
        const api_entities_wiki_page_ref01_resdata_up0 = (await api_entities_wiki_page_ref01_ent.update(api_entities_wiki_page_ref01_data_up0)).data();
        (0, node_assert_1.default)(null != api_entities_wiki_page_ref01_resdata_up0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/api_entities_wiki_page/ApiEntitiesWikiPageTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['api_entities_wiki_page01', 'api_entities_wiki_page02', 'api_entities_wiki_page03', 'group01', 'group02', 'group03', 'project01', 'project02', 'project03', 'group01', 'group02', 'group03', 'wiki01', 'wiki02', 'wiki03', 'project01', 'project02', 'project03', 'wiki01', 'wiki02', 'wiki03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_API_ENTITIES_WIKI_PAGE_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_API_ENTITIES_WIKI_PAGE_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_API_ENTITIES_WIKI_PAGE_ENTID'];
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
//# sourceMappingURL=ApiEntitiesWikiPageEntity.test.js.map