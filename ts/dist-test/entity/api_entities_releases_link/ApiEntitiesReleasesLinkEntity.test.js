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
(0, node_test_1.describe)('ApiEntitiesReleasesLinkEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.ApiEntitiesReleasesLink();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'api_entities_releases_link.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "direct_asset_url": { "a": true, "h": "Direct Asset Url", "n": "direct_asset_url", "r": false, "t": "`$STRING`", "key$": "direct_asset_url", "index$": 0 }, "id": { "a": true, "fo": "int32", "h": "Id", "n": "id", "r": false, "t": "`$INTEGER`", "key$": "id", "index$": 1 }, "link_type": { "a": true, "h": "Link Type", "n": "link_type", "r": false, "t": "`$STRING`", "key$": "link_type", "index$": 2 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "t": "`$STRING`", "key$": "name", "index$": 3 }, "url": { "a": true, "h": "Url", "n": "url", "r": false, "t": "`$STRING`", "key$": "url", "index$": 4 } }, "id": { "field": "id", "name": "id" }, "name": "api_entities_releases_link", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /api/v4/projects/{id}/releases/{tag_name}/assets/links", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "release_id", "or": "tag_name", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "k": "query", "n": "post_api_v4_projects_id_releases_tag_name_assets_link", "or": "post_api_v4_projects_id_releases_tag_name_assets_link", "r": true, "t": "`$OBJECT`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/v4/projects/{id}/releases/{tag_name}/assets/links", "q": { "exist": ["post_api_v4_projects_id_releases_tag_name_assets_link", "project_id", "release_id"] }, "r": { "param": { "id": "project_id", "tag_name": "release_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "releases" }, { "var": "release_id" }, { "lit": "assets" }, { "lit": "links" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /api/v4/projects/{id}/releases/{tag_name}/assets/links", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "release_id", "or": "tag_name", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "ex": 20, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$INTEGER`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/api/v4/projects/{id}/releases/{tag_name}/assets/links", "q": { "exist": ["page", "per_page", "project_id", "release_id"] }, "r": { "param": { "id": "project_id", "tag_name": "release_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "releases" }, { "var": "release_id" }, { "lit": "assets" }, { "lit": "links" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/v4/projects/{id}/releases/{tag_name}/assets/links/{link_id}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "link_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "release_id", "or": "tag_name", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/api/v4/projects/{id}/releases/{tag_name}/assets/links/{link_id}", "q": { "exist": ["id", "project_id", "release_id"] }, "r": { "param": { "id": "project_id", "link_id": "id", "tag_name": "release_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "releases" }, { "var": "release_id" }, { "lit": "assets" }, { "lit": "links" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /api/v4/projects/{id}/releases/{tag_name}/assets/links/{link_id}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "link_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "release_id", "or": "tag_name", "r": true, "t": "`$STRING`", "index$": 2 }], "query": [{ "a": true, "k": "query", "n": "put_api_v4_projects_id_releases_tag_name_assets_links_link_id", "or": "put_api_v4_projects_id_releases_tag_name_assets_links_link_id", "r": true, "t": "`$OBJECT`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/api/v4/projects/{id}/releases/{tag_name}/assets/links/{link_id}", "q": { "exist": ["id", "project_id", "put_api_v4_projects_id_releases_tag_name_assets_links_link_id", "release_id"] }, "r": { "param": { "id": "project_id", "link_id": "id", "tag_name": "release_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "releases" }, { "var": "release_id" }, { "lit": "assets" }, { "lit": "links" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.project", "$.main.kit.entity.release"]] }, "key$": "api_entities_releases_link", "name__orig": "api_entities_releases_link", "Name": "ApiEntitiesReleasesLink", "name_": "api_entities_releases_link", "name-": "api-entities-releases-link", "NAME": "API_ENTITIES_RELEASES_LINK", "index$": 150 }, { "active": true, "entity": "api_entities_releases_link", "key$": "BasicApiEntitiesReleasesLinkFlow", "kind": "basic", "name": "BasicApiEntitiesReleasesLinkFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "api_entities_releases_link_ref01" }, "m": { "project_id": "project01", "release_id": "release01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "project_id": "project01", "release_id": "release01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "api_entities_releases_link_ref01" } }], "index$": 1 }, { "a": true, "d": { "project_id": "project01", "release_id": "release01" }, "i": { "ref": "api_entities_releases_link_ref01", "srcdatavar": "api_entities_releases_link_ref01_data", "suffix": "_up0", "textfield": "direct_asset_url" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-api_entities_releases_link_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "api_entities_releases_link_ref01", "srcdatavar": "api_entities_releases_link_ref01_data", "suffix": "_dt0" }, "m": { "id": "api_entities_releases_link01", "project_id": "project01", "release_id": "release01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-api_entities_releases_link_ref01" } }], "index$": 3 }] }, 'ApiEntitiesReleasesLink', { "POST /api/v4/projects/{id}/releases/{tag_name}/assets/links": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project", "type": "string", "required": true, "index$": 0 }, { "in": "path", "name": "tag_name", "description": "The tag associated with the release", "type": "string", "required": true, "index$": 1 }, { "name": "postApiV4ProjectsIdReleasesTagNameAssetsLinks", "in": "body", "required": true, "schema": { "type": "object", "properties": { "name": { "type": "string", "description": "The name of the link. Link names must be unique in the release" }, "url": { "type": "string", "description": "The URL of the link. Link URLs must be unique in the release." }, "direct_asset_path": { "type": "string", "description": "Optional path for a direct asset link" }, "filepath": { "type": "string", "description": "Deprecated: optional path for a direct asset link" }, "link_type": { "type": "string", "description": "The type of the link: `other`, `runbook`, `image`, or `package`. Defaults to `other`", "enum": ["other", "runbook", "image", "package"], "default": "other" } }, "required": ["name", "url"], "description": "Create a release link", "x-ref": "#/definitions/postApiV4ProjectsIdReleasesTagNameAssetsLinks" }, "index$": 2 }] }, "GET /api/v4/projects/{id}/releases/{tag_name}/assets/links": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project", "type": "string", "required": true, "index$": 0 }, { "in": "path", "name": "tag_name", "description": "The tag associated with the release", "type": "string", "required": true, "index$": 1 }, { "in": "query", "name": "page", "description": "Current page number", "type": "integer", "format": "int32", "default": 1, "required": false, "example": 1, "index$": 2 }, { "in": "query", "name": "per_page", "description": "Number of items per page", "type": "integer", "format": "int32", "default": 20, "required": false, "example": 20, "index$": 3 }] }, "GET /api/v4/projects/{id}/releases/{tag_name}/assets/links/{link_id}": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project", "type": "string", "required": true, "index$": 0 }, { "in": "path", "name": "tag_name", "description": "The tag associated with the release", "type": "string", "required": true, "index$": 1 }, { "in": "path", "name": "link_id", "description": "The ID of the link", "type": "integer", "format": "int32", "required": true, "index$": 2 }] }, "PUT /api/v4/projects/{id}/releases/{tag_name}/assets/links/{link_id}": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project", "type": "string", "required": true, "index$": 0 }, { "in": "path", "name": "tag_name", "description": "The tag associated with the release", "type": "string", "required": true, "index$": 1 }, { "in": "path", "name": "link_id", "description": "The ID of the link", "type": "integer", "format": "int32", "required": true, "index$": 2 }, { "name": "putApiV4ProjectsIdReleasesTagNameAssetsLinksLinkId", "in": "body", "required": true, "schema": { "type": "object", "properties": { "name": { "type": "string", "description": "The name of the link" }, "url": { "type": "string", "description": "The URL of the link" }, "direct_asset_path": { "type": "string", "description": "Optional path for a direct asset link" }, "filepath": { "type": "string", "description": "Deprecated: optional path for a direct asset link" }, "link_type": { "type": "string", "description": "The type of the link: `other`, `runbook`, `image`, or `package`. Defaults to `other`", "enum": ["other", "runbook", "image", "package"], "default": "other" } }, "description": "Update a release link", "x-ref": "#/definitions/putApiV4ProjectsIdReleasesTagNameAssetsLinksLinkId" }, "index$": 3 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const api_entities_releases_link_ref01_ent = client.ApiEntitiesReleasesLink();
        let api_entities_releases_link_ref01_data = setup.data.new.api_entities_releases_link['api_entities_releases_link_ref01'];
        api_entities_releases_link_ref01_data['project_id'] = setup.idmap['project01'];
        api_entities_releases_link_ref01_data['release_id'] = setup.idmap['release01'];
        api_entities_releases_link_ref01_data = (await api_entities_releases_link_ref01_ent.create(api_entities_releases_link_ref01_data)).data();
        (0, node_assert_1.default)(null != api_entities_releases_link_ref01_data.id);
        // LIST
        const api_entities_releases_link_ref01_match = {};
        api_entities_releases_link_ref01_match['project_id'] = setup.idmap['project01'];
        api_entities_releases_link_ref01_match['release_id'] = setup.idmap['release01'];
        const api_entities_releases_link_ref01_list = (await api_entities_releases_link_ref01_ent.list(api_entities_releases_link_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(api_entities_releases_link_ref01_list, { id: api_entities_releases_link_ref01_data.id })));
        // UPDATE
        const api_entities_releases_link_ref01_data_up0 = {};
        api_entities_releases_link_ref01_data_up0.id = api_entities_releases_link_ref01_data.id;
        api_entities_releases_link_ref01_data_up0['project_id'] = setup.idmap['project_id'];
        api_entities_releases_link_ref01_data_up0['release_id'] = setup.idmap['release_id'];
        const api_entities_releases_link_ref01_markdef_up0 = { name: 'direct_asset_url', value: 'Mark01-api_entities_releases_link_ref01_' + setup.now };
        api_entities_releases_link_ref01_data_up0[api_entities_releases_link_ref01_markdef_up0.name] = api_entities_releases_link_ref01_markdef_up0.value;
        const api_entities_releases_link_ref01_resdata_up0 = (await api_entities_releases_link_ref01_ent.update(api_entities_releases_link_ref01_data_up0)).data();
        (0, node_assert_1.default)(api_entities_releases_link_ref01_resdata_up0.id === api_entities_releases_link_ref01_data_up0.id);
        (0, node_assert_1.default)(api_entities_releases_link_ref01_resdata_up0[api_entities_releases_link_ref01_markdef_up0.name] === api_entities_releases_link_ref01_markdef_up0.value);
        // LOAD
        const api_entities_releases_link_ref01_match_dt0 = {};
        api_entities_releases_link_ref01_match_dt0.id = api_entities_releases_link_ref01_data.id;
        const api_entities_releases_link_ref01_data_dt0 = (await api_entities_releases_link_ref01_ent.load(api_entities_releases_link_ref01_match_dt0)).data();
        (0, node_assert_1.default)(api_entities_releases_link_ref01_data_dt0.id === api_entities_releases_link_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/api_entities_releases_link/ApiEntitiesReleasesLinkTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['api_entities_releases_link01', 'api_entities_releases_link02', 'api_entities_releases_link03', 'project01', 'project02', 'project03', 'release01', 'release02', 'release03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_API_ENTITIES_RELEASES_LINK_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_API_ENTITIES_RELEASES_LINK_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_API_ENTITIES_RELEASES_LINK_ENTID'];
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
//# sourceMappingURL=ApiEntitiesReleasesLinkEntity.test.js.map