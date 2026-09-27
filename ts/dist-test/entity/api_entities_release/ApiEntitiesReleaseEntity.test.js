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
(0, node_test_1.describe)('ApiEntitiesReleaseEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.ApiEntitiesRelease();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'api_entities_release.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "assets": { "a": true, "h": "Assets", "n": "assets", "r": false, "t": "`$OBJECT`", "key$": "assets", "index$": 0 }, "author": { "a": true, "h": "Author", "n": "author", "r": false, "sh": "API_Entities_UserBasic model", "t": "`$OBJECT`", "key$": "author", "index$": 1 }, "commit": { "a": true, "h": "Commit", "n": "commit", "r": false, "sh": "API_Entities_Commit model", "t": "`$OBJECT`", "key$": "commit", "index$": 2 }, "commit_path": { "a": true, "h": "Commit Path", "n": "commit_path", "r": false, "t": "`$STRING`", "key$": "commit_path", "index$": 3 }, "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": false, "t": "`$STRING`", "key$": "created_at", "index$": 4 }, "description": { "a": true, "h": "Description", "n": "description", "r": false, "t": "`$STRING`", "key$": "description", "index$": 5 }, "description_html": { "a": true, "h": "Description Html", "n": "description_html", "r": false, "t": "`$STRING`", "key$": "description_html", "index$": 6 }, "evidences": { "a": true, "h": "Evidences", "n": "evidences", "r": false, "t": "`$OBJECT`", "key$": "evidences", "index$": 7 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 8 }, "links": { "a": true, "h": "Links", "n": "links", "r": false, "t": "`$OBJECT`", "key$": "links", "index$": 9 }, "milestones": { "a": true, "h": "Milestones", "n": "milestones", "r": false, "t": "`$OBJECT`", "key$": "milestones", "index$": 10 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "t": "`$STRING`", "key$": "name", "index$": 11 }, "released_at": { "a": true, "fo": "date-time", "h": "Released At", "n": "released_at", "r": false, "t": "`$STRING`", "key$": "released_at", "index$": 12 }, "tag_name": { "a": true, "h": "Tag Name", "n": "tag_name", "r": false, "t": "`$STRING`", "key$": "tag_name", "index$": 13 }, "tag_path": { "a": true, "h": "Tag Path", "n": "tag_path", "r": false, "t": "`$STRING`", "key$": "tag_path", "index$": 14 }, "upcoming_release": { "a": true, "h": "Upcoming Release", "n": "upcoming_release", "r": false, "t": "`$BOOLEAN`", "key$": "upcoming_release", "index$": 15 } }, "id": { "field": "id", "name": "id" }, "name": "api_entities_release", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /api/v4/projects/{id}/releases", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "post_api_v4_projects_id_release", "or": "post_api_v4_projects_id_release", "r": true, "t": "`$OBJECT`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/v4/projects/{id}/releases", "q": { "exist": ["post_api_v4_projects_id_release", "project_id"] }, "r": { "param": { "id": "project_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "releases" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /api/v4/projects/{id}/releases/{tag_name}/evidence", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "tag_name", "or": "tag_name", "r": true, "t": "`$ANY`", "index$": 1 }] }, "k": "http", "m": "POST", "o": "/api/v4/projects/{id}/releases/{tag_name}/evidence", "q": { "exist": ["project_id", "tag_name"] }, "r": { "param": { "id": "project_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "releases" }, { "var": "tag_name" }, { "lit": "evidence" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /api/v4/projects/{id}/releases", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "include_html_description", "or": "include_html_description", "r": false, "t": "`$ANY`", "index$": 0 }, { "a": true, "k": "query", "n": "order_by", "or": "order_by", "r": false, "t": "`$ANY`", "index$": 1 }, { "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "ex": 20, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$INTEGER`", "index$": 3 }, { "a": true, "k": "query", "n": "sort", "or": "sort", "r": false, "t": "`$ANY`", "index$": 4 }, { "a": true, "k": "query", "n": "updated_after", "or": "updated_after", "r": false, "t": "`$ANY`", "index$": 5 }, { "a": true, "k": "query", "n": "updated_before", "or": "updated_before", "r": false, "t": "`$ANY`", "index$": 6 }] }, "k": "http", "m": "GET", "o": "/api/v4/projects/{id}/releases", "q": { "exist": ["include_html_description", "order_by", "page", "per_page", "project_id", "sort", "updated_after", "updated_before"] }, "r": { "param": { "id": "project_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "releases" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /api/v4/groups/{id}/releases", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "group_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "ex": 20, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$INTEGER`", "index$": 1 }, { "a": true, "k": "query", "n": "simple", "or": "simple", "r": false, "t": "`$ANY`", "index$": 2 }, { "a": true, "k": "query", "n": "sort", "or": "sort", "r": false, "t": "`$ANY`", "index$": 3 }] }, "k": "http", "m": "GET", "o": "/api/v4/groups/{id}/releases", "q": { "exist": ["group_id", "page", "per_page", "simple", "sort"] }, "r": { "param": { "id": "group_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "groups" }, { "var": "group_id" }, { "lit": "releases" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/v4/projects/{id}/releases/{tag_name}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "tag_name", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "k": "query", "n": "include_html_description", "or": "include_html_description", "r": false, "t": "`$ANY`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/v4/projects/{id}/releases/{tag_name}", "q": { "exist": ["id", "include_html_description", "project_id"] }, "r": { "param": { "id": "project_id", "tag_name": "id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "releases" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /api/v4/projects/{id}/releases/{tag_name}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "tag_name", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "k": "query", "n": "put_api_v4_projects_id_releases_tag_name", "or": "put_api_v4_projects_id_releases_tag_name", "r": true, "t": "`$OBJECT`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/api/v4/projects/{id}/releases/{tag_name}", "q": { "exist": ["id", "project_id", "put_api_v4_projects_id_releases_tag_name"] }, "r": { "param": { "id": "project_id", "tag_name": "id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "releases" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.group"], ["$.main.kit.entity.project"], ["$.main.kit.entity.project", "$.main.kit.entity.release"]] }, "key$": "api_entities_release", "name__orig": "api_entities_release", "Name": "ApiEntitiesRelease", "name_": "api_entities_release", "name-": "api-entities-release", "NAME": "API_ENTITIES_RELEASE", "index$": 149 }, { "active": true, "entity": "api_entities_release", "key$": "BasicApiEntitiesReleaseFlow", "kind": "basic", "name": "BasicApiEntitiesReleaseFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "api_entities_release_ref01" }, "m": { "group_id": "group01", "project_id": "project01", "tag_name": "tag_name01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "group_id": "group01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "api_entities_release_ref01" } }], "index$": 1 }, { "a": true, "d": { "project_id": "project01" }, "i": { "ref": "api_entities_release_ref01", "srcdatavar": "api_entities_release_ref01_data", "suffix": "_up0", "textfield": "commit_path" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-api_entities_release_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "api_entities_release_ref01", "srcdatavar": "api_entities_release_ref01_data", "suffix": "_dt0" }, "m": { "id": "api_entities_release01", "project_id": "project01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-api_entities_release_ref01" } }], "index$": 3 }] }, 'ApiEntitiesRelease', { "POST /api/v4/projects/{id}/releases": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project", "type": "string", "required": true, "index$": 0 }, { "name": "postApiV4ProjectsIdReleases", "in": "body", "required": true, "schema": { "type": "object", "properties": { "tag_name": { "type": "string", "description": "The tag where the release is created from" }, "tag_message": { "type": "string", "description": "Message to use if creating a new annotated tag" }, "name": { "type": "string", "description": "The release name" }, "description": { "type": "string", "description": "The description of the release. You can use Markdown" }, "ref": { "type": "string", "description": "If a tag specified in `tag_name` doesn't exist, the release is created from `ref` and tagged with `tag_name`. It can be a commit SHA, another tag name, or a branch name." }, "assets": { "type": "object", "properties": { "links": { "type": "array", "items": { "type": "object", "properties": { "name": {}, "url": {}, "direct_asset_path": {}, "filepath": {}, "link_type": {} }, "required": ["name", "url"] } } } }, "milestones": { "type": "array", "description": "The title of each milestone the release is associated with. GitLab Premium customers can specify group milestones. Cannot be combined with `milestone_ids` parameter.", "items": { "type": "string" } }, "milestone_ids": { "type": "string", "description": "The ID of each milestone the release is associated with. GitLab Premium customers can specify group milestones. Cannot be combined with `milestones` parameter." }, "released_at": { "type": "string", "format": "date-time", "description": "Date and time for the release. Defaults to the current time. Expected in ISO 8601 format (`2019-03-15T08:00:00Z`). Only provide this field if creating an upcoming or historical release." }, "legacy_catalog_publish": { "type": "boolean", "description": "If true, the release will be published to the CI catalog. This parameter is for internal use only and will be removed in a future release. If the feature flag ci_release_cli_catalog_publish_option is disabled, this parameter will be ignored and the release will published to the CI catalog as it was before this parameter was introduced." } }, "required": ["tag_name"], "description": "Create a release", "x-ref": "#/definitions/postApiV4ProjectsIdReleases" }, "index$": 1 }] }, "POST /api/v4/projects/{id}/releases/{tag_name}/evidence": { "protocol": "http", "parameters": [{ "in": "path", "name": "tag_name", "description": "The Git tag the release is associated with", "type": "string", "required": true, "index$": 0 }, { "in": "path", "name": "id", "type": "integer", "format": "int32", "required": true, "index$": 1 }] }, "GET /api/v4/projects/{id}/releases": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project", "type": "string", "required": true, "index$": 0 }, { "in": "query", "name": "page", "description": "Current page number", "type": "integer", "format": "int32", "default": 1, "required": false, "example": 1, "index$": 1 }, { "in": "query", "name": "per_page", "description": "Number of items per page", "type": "integer", "format": "int32", "default": 20, "required": false, "example": 20, "index$": 2 }, { "in": "query", "name": "order_by", "description": "The field to use as order. Either `released_at` (default) or `created_at`", "type": "string", "default": "released_at", "enum": ["released_at", "created_at"], "required": false, "index$": 3 }, { "in": "query", "name": "sort", "description": "The direction of the order. Either `desc` (default) for descending order or `asc` for ascending order", "type": "string", "default": "desc", "enum": ["asc", "desc"], "required": false, "index$": 4 }, { "in": "query", "name": "include_html_description", "description": "If `true`, a response includes HTML rendered markdown of the release description", "type": "boolean", "required": false, "index$": 5 }, { "in": "query", "name": "updated_before", "description": "Return releases updated before the specified datetime. Format: ISO 8601 YYYY-MM-DDTHH:MM:SSZ", "type": "string", "format": "date-time", "required": false, "index$": 6 }, { "in": "query", "name": "updated_after", "description": "Return releases updated after the specified datetime. Format: ISO 8601 YYYY-MM-DDTHH:MM:SSZ", "type": "string", "format": "date-time", "required": false, "index$": 7 }] }, "GET /api/v4/groups/{id}/releases": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the group owned by the authenticated user", "type": "string", "required": true, "index$": 0 }, { "in": "query", "name": "sort", "description": "The direction of the order. Either `desc` (default) for descending order or `asc` for ascending order", "type": "string", "default": "desc", "enum": ["asc", "desc"], "required": false, "index$": 1 }, { "in": "query", "name": "simple", "description": "Return only limited fields for each release", "type": "boolean", "default": false, "required": false, "index$": 2 }, { "in": "query", "name": "page", "description": "Current page number", "type": "integer", "format": "int32", "default": 1, "required": false, "example": 1, "index$": 3 }, { "in": "query", "name": "per_page", "description": "Number of items per page", "type": "integer", "format": "int32", "default": 20, "required": false, "example": 20, "index$": 4 }] }, "GET /api/v4/projects/{id}/releases/{tag_name}": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project", "type": "string", "required": true, "index$": 0 }, { "in": "path", "name": "tag_name", "description": "The Git tag the release is associated with", "type": "string", "required": true, "index$": 1 }, { "in": "query", "name": "include_html_description", "description": "If `true`, a response includes HTML rendered markdown of the release description", "type": "boolean", "required": false, "index$": 2 }] }, "PUT /api/v4/projects/{id}/releases/{tag_name}": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project", "type": "string", "required": true, "index$": 0 }, { "in": "path", "name": "tag_name", "description": "The Git tag the release is associated with", "type": "string", "required": true, "index$": 1 }, { "name": "putApiV4ProjectsIdReleasesTagName", "in": "body", "required": true, "schema": { "type": "object", "properties": { "name": { "type": "string", "description": "The release name" }, "description": { "type": "string", "description": "The description of the release. You can use Markdown" }, "released_at": { "type": "string", "format": "date-time", "description": "The date when the release is/was ready. Expected in ISO 8601 format (`2019-03-15T08:00:00Z`)" }, "milestones": { "type": "array", "description": "The title of each milestone to associate with the release. GitLab Premium customers can specify group milestones. Cannot be combined with `milestone_ids` parameter. To remove all milestones from the release, specify `[]`", "items": { "type": "string" } }, "milestone_ids": { "type": "string", "description": "The ID of each milestone the release is associated with. GitLab Premium customers can specify group milestones. Cannot be combined with `milestones` parameter. To remove all milestones from the release, specify `[]`" } }, "description": "Update a release", "x-ref": "#/definitions/putApiV4ProjectsIdReleasesTagName" }, "index$": 2 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const api_entities_release_ref01_ent = client.ApiEntitiesRelease();
        let api_entities_release_ref01_data = setup.data.new.api_entities_release['api_entities_release_ref01'];
        api_entities_release_ref01_data['group_id'] = setup.idmap['group01'];
        api_entities_release_ref01_data['project_id'] = setup.idmap['project01'];
        api_entities_release_ref01_data['tag_name'] = setup.idmap['tag_name01'];
        api_entities_release_ref01_data = (await api_entities_release_ref01_ent.create(api_entities_release_ref01_data)).data();
        (0, node_assert_1.default)(null != api_entities_release_ref01_data.id);
        // LIST
        const api_entities_release_ref01_match = {};
        api_entities_release_ref01_match['group_id'] = setup.idmap['group01'];
        const api_entities_release_ref01_list = (await api_entities_release_ref01_ent.list(api_entities_release_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(api_entities_release_ref01_list, { id: api_entities_release_ref01_data.id })));
        // UPDATE
        const api_entities_release_ref01_data_up0 = {};
        api_entities_release_ref01_data_up0.id = api_entities_release_ref01_data.id;
        api_entities_release_ref01_data_up0['project_id'] = setup.idmap['project_id'];
        const api_entities_release_ref01_markdef_up0 = { name: 'commit_path', value: 'Mark01-api_entities_release_ref01_' + setup.now };
        api_entities_release_ref01_data_up0[api_entities_release_ref01_markdef_up0.name] = api_entities_release_ref01_markdef_up0.value;
        const api_entities_release_ref01_resdata_up0 = (await api_entities_release_ref01_ent.update(api_entities_release_ref01_data_up0)).data();
        (0, node_assert_1.default)(api_entities_release_ref01_resdata_up0.id === api_entities_release_ref01_data_up0.id);
        (0, node_assert_1.default)(api_entities_release_ref01_resdata_up0[api_entities_release_ref01_markdef_up0.name] === api_entities_release_ref01_markdef_up0.value);
        // LOAD
        const api_entities_release_ref01_match_dt0 = {};
        api_entities_release_ref01_match_dt0.id = api_entities_release_ref01_data.id;
        const api_entities_release_ref01_data_dt0 = (await api_entities_release_ref01_ent.load(api_entities_release_ref01_match_dt0)).data();
        (0, node_assert_1.default)(api_entities_release_ref01_data_dt0.id === api_entities_release_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/api_entities_release/ApiEntitiesReleaseTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['api_entities_release01', 'api_entities_release02', 'api_entities_release03', 'group01', 'group02', 'group03', 'project01', 'project02', 'project03', 'release01', 'release02', 'release03', 'tag_name01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_API_ENTITIES_RELEASE_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_API_ENTITIES_RELEASE_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_API_ENTITIES_RELEASE_ENTID'];
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
//# sourceMappingURL=ApiEntitiesReleaseEntity.test.js.map