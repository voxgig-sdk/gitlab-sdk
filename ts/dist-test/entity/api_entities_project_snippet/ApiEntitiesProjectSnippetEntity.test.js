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
(0, node_test_1.describe)('ApiEntitiesProjectSnippetEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.ApiEntitiesProjectSnippet();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'api_entities_project_snippet.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "author": { "a": true, "h": "Author", "n": "author", "r": false, "sh": "API_Entities_UserBasic model", "t": "`$OBJECT`", "key$": "author", "index$": 0 }, "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": false, "t": "`$STRING`", "key$": "created_at", "index$": 1 }, "description": { "a": true, "h": "Description", "n": "description", "r": false, "t": "`$STRING`", "key$": "description", "index$": 2 }, "file_name": { "a": true, "h": "File Name", "n": "file_name", "r": false, "t": "`$STRING`", "key$": "file_name", "index$": 3 }, "files": { "a": true, "h": "Files", "n": "files", "r": false, "t": "`$ARRAY`", "key$": "files", "index$": 4 }, "http_url_to_repo": { "a": true, "h": "Http Url To Repo", "n": "http_url_to_repo", "r": false, "t": "`$STRING`", "key$": "http_url_to_repo", "index$": 5 }, "id": { "a": true, "fo": "int32", "h": "Id", "n": "id", "r": false, "t": "`$INTEGER`", "key$": "id", "index$": 6 }, "imported": { "a": true, "h": "Imported", "n": "imported", "r": false, "t": "`$BOOLEAN`", "key$": "imported", "index$": 7 }, "imported_from": { "a": true, "h": "Imported From", "n": "imported_from", "r": false, "t": "`$STRING`", "key$": "imported_from", "index$": 8 }, "project_id": { "a": true, "fo": "int32", "h": "Project Id", "n": "project_id", "r": false, "t": "`$INTEGER`", "key$": "project_id", "index$": 9 }, "raw_url": { "a": true, "h": "Raw Url", "n": "raw_url", "r": false, "t": "`$STRING`", "key$": "raw_url", "index$": 10 }, "repository_storage": { "a": true, "h": "Repository Storage", "n": "repository_storage", "r": false, "t": "`$STRING`", "key$": "repository_storage", "index$": 11 }, "ssh_url_to_repo": { "a": true, "h": "Ssh Url To Repo", "n": "ssh_url_to_repo", "r": false, "t": "`$STRING`", "key$": "ssh_url_to_repo", "index$": 12 }, "title": { "a": true, "h": "Title", "n": "title", "r": false, "t": "`$STRING`", "key$": "title", "index$": 13 }, "updated_at": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updated_at", "r": false, "t": "`$STRING`", "key$": "updated_at", "index$": 14 }, "visibility": { "a": true, "h": "Visibility", "n": "visibility", "r": false, "t": "`$STRING`", "key$": "visibility", "index$": 15 }, "web_url": { "a": true, "h": "Web Url", "n": "web_url", "r": false, "t": "`$STRING`", "key$": "web_url", "index$": 16 } }, "id": { "field": "id", "name": "id" }, "name": "api_entities_project_snippet", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /api/v4/projects/{id}/snippets", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "post_api_v4_projects_id_snippet", "or": "post_api_v4_projects_id_snippet", "r": true, "t": "`$OBJECT`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/v4/projects/{id}/snippets", "q": { "exist": ["post_api_v4_projects_id_snippet", "project_id"] }, "r": { "param": { "id": "project_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "snippets" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /api/v4/projects/{id}/snippets/{snippet_id}/files/{ref}/{file_path}/raw", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "file_id", "or": "ref", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "file_path", "or": "file_path", "r": true, "t": "`$ANY`", "index$": 1 }, { "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "param", "n": "snippet_id", "or": "snippet_id", "r": true, "t": "`$STRING`", "index$": 3 }] }, "k": "http", "m": "GET", "o": "/api/v4/projects/{id}/snippets/{snippet_id}/files/{ref}/{file_path}/raw", "q": { "exist": ["file_id", "file_path", "project_id", "snippet_id"] }, "r": { "param": { "id": "project_id", "ref": "file_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "snippets" }, { "var": "snippet_id" }, { "lit": "files" }, { "var": "file_id" }, { "var": "file_path" }, { "lit": "raw" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /api/v4/projects/{id}/snippets", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "ex": 20, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$INTEGER`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/api/v4/projects/{id}/snippets", "q": { "exist": ["page", "per_page", "project_id"] }, "r": { "param": { "id": "project_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "snippets" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "GET /api/v4/projects/{id}/snippets/{snippet_id}/raw", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "snippet_id", "or": "snippet_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/api/v4/projects/{id}/snippets/{snippet_id}/raw", "q": { "exist": ["project_id", "snippet_id"] }, "r": { "param": { "id": "project_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "snippets" }, { "var": "snippet_id" }, { "lit": "raw" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/v4/projects/{id}/snippets/{snippet_id}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "snippet_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/api/v4/projects/{id}/snippets/{snippet_id}", "q": { "exist": ["id", "project_id"] }, "r": { "param": { "id": "project_id", "snippet_id": "id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "snippets" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /api/v4/projects/{id}/snippets/{snippet_id}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "snippet_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "k": "query", "n": "put_api_v4_projects_id_snippets_snippet_id", "or": "put_api_v4_projects_id_snippets_snippet_id", "r": true, "t": "`$OBJECT`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/api/v4/projects/{id}/snippets/{snippet_id}", "q": { "exist": ["id", "project_id", "put_api_v4_projects_id_snippets_snippet_id"] }, "r": { "param": { "id": "project_id", "snippet_id": "id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "snippets" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.project"], ["$.main.kit.entity.project", "$.main.kit.entity.snippet"], ["$.main.kit.entity.project", "$.main.kit.entity.snippet"]] }, "key$": "api_entities_project_snippet", "name__orig": "api_entities_project_snippet", "Name": "ApiEntitiesProjectSnippet", "name_": "api_entities_project_snippet", "name-": "api-entities-project-snippet", "NAME": "API_ENTITIES_PROJECT_SNIPPET", "index$": 138 }, { "active": true, "entity": "api_entities_project_snippet", "key$": "BasicApiEntitiesProjectSnippetFlow", "kind": "basic", "name": "BasicApiEntitiesProjectSnippetFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "api_entities_project_snippet_ref01" }, "m": { "file_id": "file01", "file_path": "file_path01", "project_id": "project01", "snippet_id": "snippet01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "project_id": "project01", "snippet_id": "snippet01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "api_entities_project_snippet_ref01" } }], "index$": 1 }, { "a": true, "d": { "project_id": "project01" }, "i": { "ref": "api_entities_project_snippet_ref01", "srcdatavar": "api_entities_project_snippet_ref01_data", "suffix": "_up0", "textfield": "created_at" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-api_entities_project_snippet_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "api_entities_project_snippet_ref01", "srcdatavar": "api_entities_project_snippet_ref01_data", "suffix": "_dt0" }, "m": { "id": "api_entities_project_snippet01", "project_id": "project01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-api_entities_project_snippet_ref01" } }], "index$": 3 }] }, 'ApiEntitiesProjectSnippet', { "POST /api/v4/projects/{id}/snippets": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project", "type": "string", "required": true, "index$": 0 }, { "name": "postApiV4ProjectsIdSnippets", "in": "body", "required": true, "schema": { "type": "object", "properties": { "title": { "type": "string", "description": "The title of the snippet" }, "description": { "type": "string", "description": "The description of a snippet" }, "visibility": { "type": "string", "description": "The visibility of the snippet", "enum": ["private", "internal", "public"] }, "files": { "type": "array", "description": "An array of files", "items": { "type": "object", "properties": { "file_path": { "type": "string", "description": "The path of a snippet file" }, "content": { "type": "string", "description": "The content of a snippet file" } }, "required": ["file_path", "content"] } }, "content": { "type": "string", "description": "The content of a snippet" }, "file_name": { "type": "string", "description": "The name of a snippet file" } }, "required": ["title", "visibility", "file_name"], "description": "Create a new project snippet", "x-ref": "#/definitions/postApiV4ProjectsIdSnippets" }, "index$": 1 }] }, "GET /api/v4/projects/{id}/snippets/{snippet_id}/files/{ref}/{file_path}/raw": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project", "type": "string", "required": true, "index$": 0 }, { "in": "path", "name": "file_path", "description": "The URL-encoded path to the file, like lib%2Fclass%2Erb", "type": "string", "required": true, "index$": 1 }, { "in": "path", "name": "ref", "description": "The name of branch, tag or commit", "type": "string", "required": true, "index$": 2 }, { "in": "path", "name": "snippet_id", "type": "integer", "format": "int32", "required": true, "index$": 3 }] }, "GET /api/v4/projects/{id}/snippets": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project", "type": "string", "required": true, "index$": 0 }, { "in": "query", "name": "page", "description": "Current page number", "type": "integer", "format": "int32", "default": 1, "required": false, "example": 1, "index$": 1 }, { "in": "query", "name": "per_page", "description": "Number of items per page", "type": "integer", "format": "int32", "default": 20, "required": false, "example": 20, "index$": 2 }] }, "GET /api/v4/projects/{id}/snippets/{snippet_id}/raw": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project", "type": "string", "required": true, "index$": 0 }, { "in": "path", "name": "snippet_id", "description": "The ID of a project snippet", "type": "integer", "format": "int32", "required": true, "index$": 1 }] }, "GET /api/v4/projects/{id}/snippets/{snippet_id}": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project", "type": "string", "required": true, "index$": 0 }, { "in": "path", "name": "snippet_id", "description": "The ID of a project snippet", "type": "integer", "format": "int32", "required": true, "index$": 1 }] }, "PUT /api/v4/projects/{id}/snippets/{snippet_id}": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project", "type": "string", "required": true, "index$": 0 }, { "in": "path", "name": "snippet_id", "description": "The ID of a project snippet", "type": "integer", "format": "int32", "required": true, "index$": 1 }, { "name": "putApiV4ProjectsIdSnippetsSnippetId", "in": "body", "required": true, "schema": { "type": "object", "properties": { "content": { "type": "string", "description": "The content of the snippet" }, "description": { "type": "string", "description": "The description of a snippet" }, "file_name": { "type": "string", "description": "The file name of the snippet" }, "title": { "type": "string", "description": "The title of the snippet" }, "visibility": { "type": "string", "description": "The visibility of the snippet", "enum": ["private", "internal", "public"] }, "files": { "type": "array", "description": "An array of files to update", "items": { "type": "object", "properties": { "action": { "type": "string", "description": "The type of action to perform on the file, must be one of: create, update, delete, move", "enum": ["create", "update", "delete", "move"] }, "content": { "type": "string", "description": "The content of a snippet" }, "file_path": { "type": "string", "description": "The file path of a snippet file" }, "previous_path": { "type": "string", "description": "The previous path of a snippet file" } }, "required": ["action"] } } }, "description": "Update an existing project snippet", "x-ref": "#/definitions/putApiV4ProjectsIdSnippetsSnippetId" }, "index$": 2 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const api_entities_project_snippet_ref01_ent = client.ApiEntitiesProjectSnippet();
        let api_entities_project_snippet_ref01_data = setup.data.new.api_entities_project_snippet['api_entities_project_snippet_ref01'];
        api_entities_project_snippet_ref01_data['file_id'] = setup.idmap['file01'];
        api_entities_project_snippet_ref01_data['file_path'] = setup.idmap['file_path01'];
        api_entities_project_snippet_ref01_data['project_id'] = setup.idmap['project01'];
        api_entities_project_snippet_ref01_data['snippet_id'] = setup.idmap['snippet01'];
        api_entities_project_snippet_ref01_data = (await api_entities_project_snippet_ref01_ent.create(api_entities_project_snippet_ref01_data)).data();
        (0, node_assert_1.default)(null != api_entities_project_snippet_ref01_data.id);
        // LIST
        const api_entities_project_snippet_ref01_match = {};
        api_entities_project_snippet_ref01_match['project_id'] = setup.idmap['project01'];
        api_entities_project_snippet_ref01_match['snippet_id'] = setup.idmap['snippet01'];
        const api_entities_project_snippet_ref01_list = (await api_entities_project_snippet_ref01_ent.list(api_entities_project_snippet_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(api_entities_project_snippet_ref01_list, { id: api_entities_project_snippet_ref01_data.id })));
        // UPDATE
        const api_entities_project_snippet_ref01_data_up0 = {};
        api_entities_project_snippet_ref01_data_up0.id = api_entities_project_snippet_ref01_data.id;
        api_entities_project_snippet_ref01_data_up0['project_id'] = setup.idmap['project_id'];
        const api_entities_project_snippet_ref01_markdef_up0 = { name: 'created_at', value: 'Mark01-api_entities_project_snippet_ref01_' + setup.now };
        api_entities_project_snippet_ref01_data_up0[api_entities_project_snippet_ref01_markdef_up0.name] = api_entities_project_snippet_ref01_markdef_up0.value;
        const api_entities_project_snippet_ref01_resdata_up0 = (await api_entities_project_snippet_ref01_ent.update(api_entities_project_snippet_ref01_data_up0)).data();
        (0, node_assert_1.default)(api_entities_project_snippet_ref01_resdata_up0.id === api_entities_project_snippet_ref01_data_up0.id);
        (0, node_assert_1.default)(api_entities_project_snippet_ref01_resdata_up0[api_entities_project_snippet_ref01_markdef_up0.name] === api_entities_project_snippet_ref01_markdef_up0.value);
        // LOAD
        const api_entities_project_snippet_ref01_match_dt0 = {};
        api_entities_project_snippet_ref01_match_dt0.id = api_entities_project_snippet_ref01_data.id;
        const api_entities_project_snippet_ref01_data_dt0 = (await api_entities_project_snippet_ref01_ent.load(api_entities_project_snippet_ref01_match_dt0)).data();
        (0, node_assert_1.default)(api_entities_project_snippet_ref01_data_dt0.id === api_entities_project_snippet_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/api_entities_project_snippet/ApiEntitiesProjectSnippetTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['api_entities_project_snippet01', 'api_entities_project_snippet02', 'api_entities_project_snippet03', 'project01', 'project02', 'project03', 'snippet01', 'snippet02', 'snippet03', 'file01', 'file_path01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_API_ENTITIES_PROJECT_SNIPPET_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_API_ENTITIES_PROJECT_SNIPPET_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_API_ENTITIES_PROJECT_SNIPPET_ENTID'];
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
//# sourceMappingURL=ApiEntitiesProjectSnippetEntity.test.js.map