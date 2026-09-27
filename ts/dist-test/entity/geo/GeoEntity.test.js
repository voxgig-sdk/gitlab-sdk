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
(0, node_test_1.describe)('GeoEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.Geo();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['create', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'geo.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 0 } }, "id": { "field": "id", "name": "id", "parts": ["replicable_name", "replicable_id"], "sep": "/" }, "name": "geo", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /api/v4/geo/node_proxy/{id}/graphql", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "node_proxy_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/v4/geo/node_proxy/{id}/graphql", "q": { "exist": ["node_proxy_id"] }, "r": { "param": { "id": "node_proxy_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "geo" }, { "lit": "node_proxy" }, { "var": "node_proxy_id" }, { "lit": "graphql" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /api/v4/geo/proxy_git_ssh/info_refs_receive_pack", "source": "swagger2", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "post_api_v4_geo_proxy_git_ssh_info_refs_receive_pack", "or": "post_api_v4_geo_proxy_git_ssh_info_refs_receive_pack", "r": true, "t": "`$OBJECT`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/v4/geo/proxy_git_ssh/info_refs_receive_pack", "q": { "exist": ["post_api_v4_geo_proxy_git_ssh_info_refs_receive_pack"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "geo" }, { "lit": "proxy_git_ssh" }, { "lit": "info_refs_receive_pack" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /api/v4/geo/proxy_git_ssh/info_refs_upload_pack", "source": "swagger2", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "post_api_v4_geo_proxy_git_ssh_info_refs_upload_pack", "or": "post_api_v4_geo_proxy_git_ssh_info_refs_upload_pack", "r": true, "t": "`$OBJECT`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/v4/geo/proxy_git_ssh/info_refs_upload_pack", "q": { "exist": ["post_api_v4_geo_proxy_git_ssh_info_refs_upload_pack"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "geo" }, { "lit": "proxy_git_ssh" }, { "lit": "info_refs_upload_pack" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }, { "a": true, "co": { "id": "POST /api/v4/geo/proxy_git_ssh/receive_pack", "source": "swagger2", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "post_api_v4_geo_proxy_git_ssh_receive_pack", "or": "post_api_v4_geo_proxy_git_ssh_receive_pack", "r": true, "t": "`$OBJECT`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/v4/geo/proxy_git_ssh/receive_pack", "q": { "exist": ["post_api_v4_geo_proxy_git_ssh_receive_pack"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "geo" }, { "lit": "proxy_git_ssh" }, { "lit": "receive_pack" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 3 }, { "a": true, "co": { "id": "POST /api/v4/geo/proxy_git_ssh/upload_pack", "source": "swagger2", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "post_api_v4_geo_proxy_git_ssh_upload_pack", "or": "post_api_v4_geo_proxy_git_ssh_upload_pack", "r": true, "t": "`$OBJECT`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/v4/geo/proxy_git_ssh/upload_pack", "q": { "exist": ["post_api_v4_geo_proxy_git_ssh_upload_pack"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "geo" }, { "lit": "proxy_git_ssh" }, { "lit": "upload_pack" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 4 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/v4/geo/retrieve/{replicable_name}/{replicable_id}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "replicable_id", "or": "replicable_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "package_file", "k": "param", "n": "replicable_name", "or": "replicable_name", "r": true, "t": "`$ANY`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/api/v4/geo/retrieve/{replicable_name}/{replicable_id}", "q": { "exist": ["replicable_id", "replicable_name"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "geo" }, { "lit": "retrieve" }, { "var": "replicable_name" }, { "var": "replicable_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /api/v4/geo/proxy", "source": "swagger2", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/api/v4/geo/proxy", "q": { "$action": "proxy" }, "r": {}, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "geo" }, { "lit": "proxy" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "geo", "name__orig": "geo", "Name": "Geo", "name_": "geo", "name-": "geo", "NAME": "GEO", "index$": 209 }, { "active": true, "entity": "geo", "key$": "BasicGeoFlow", "kind": "basic", "name": "BasicGeoFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "geo_ref01" }, "m": { "replicable_name": "replicable_name01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "geo_ref01", "srcdatavar": "geo_ref01_data", "suffix": "_dt0" }, "m": {}, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-geo_ref01" } }], "index$": 1 }] }, 'Geo', { "POST /api/v4/geo/node_proxy/{id}/graphql": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID of the Geo node", "type": "integer", "format": "int32", "required": true, "index$": 0 }] }, "POST /api/v4/geo/proxy_git_ssh/info_refs_receive_pack": { "protocol": "http", "parameters": [{ "name": "postApiV4GeoProxyGitSshInfoRefsReceivePack", "in": "body", "required": true, "schema": { "type": "object", "properties": { "secret_token": { "type": "string" }, "data": { "type": "object", "properties": { "gl_id": { "type": "string" }, "primary_repo": { "type": "string" } }, "required": ["gl_id", "primary_repo"] } }, "required": ["secret_token", "data"], "description": "Responsible for making HTTP GET /repo.git/info/refs?service=git-receive-pack\n                  request from secondary gitlab-shell to primary", "x-ref": "#/definitions/postApiV4GeoProxyGitSshInfoRefsReceivePack" }, "index$": 0 }] }, "POST /api/v4/geo/proxy_git_ssh/info_refs_upload_pack": { "protocol": "http", "parameters": [{ "name": "postApiV4GeoProxyGitSshInfoRefsUploadPack", "in": "body", "required": true, "schema": { "type": "object", "properties": { "secret_token": { "type": "string", "description": "Secret token to authenticate by gitlab shell" }, "data": { "type": "object", "properties": { "gl_id": { "type": "string", "description": "GitLab identifier of user that initiated the clone/pull" }, "primary_repo": { "type": "string", "description": "Primary repository to clone/pull" } }, "required": ["gl_id", "primary_repo"] } }, "required": ["secret_token", "data"], "description": "Responsible for making HTTP GET /repo.git/info/refs?service=git-upload-pack\n                  request from secondary gitlab-shell to primary", "x-ref": "#/definitions/postApiV4GeoProxyGitSshInfoRefsUploadPack" }, "index$": 0 }] }, "POST /api/v4/geo/proxy_git_ssh/receive_pack": { "protocol": "http", "parameters": [{ "name": "postApiV4GeoProxyGitSshReceivePack", "in": "body", "required": true, "schema": { "type": "object", "properties": { "secret_token": { "type": "string" }, "data": { "type": "object", "properties": { "gl_id": { "type": "string" }, "primary_repo": { "type": "string" } }, "required": ["gl_id", "primary_repo"] }, "output": { "type": "string", "description": "Output from git-receive-pack" } }, "required": ["secret_token", "data", "output"], "description": "Responsible for making HTTP POST /repo.git/info/refs?service=git-receive-pack\n                  request from secondary gitlab-shell to primary", "x-ref": "#/definitions/postApiV4GeoProxyGitSshReceivePack" }, "index$": 0 }] }, "POST /api/v4/geo/proxy_git_ssh/upload_pack": { "protocol": "http", "parameters": [{ "name": "postApiV4GeoProxyGitSshUploadPack", "in": "body", "required": true, "schema": { "type": "object", "properties": { "secret_token": { "type": "string" }, "data": { "type": "object", "properties": { "gl_id": { "type": "string" }, "primary_repo": { "type": "string" } }, "required": ["gl_id", "primary_repo"] }, "output": { "type": "string", "description": "Output from git-upload-pack" } }, "required": ["secret_token", "data", "output"], "description": "Responsible for making HTTP POST /repo.git/git-upload-pack\n                  request from secondary gitlab-shell to primary", "x-ref": "#/definitions/postApiV4GeoProxyGitSshUploadPack" }, "index$": 0 }] }, "GET /api/v4/geo/retrieve/{replicable_name}/{replicable_id}": { "protocol": "http", "parameters": [{ "in": "path", "name": "replicable_name", "description": "The replicable name of a replicator instance", "type": "string", "required": true, "example": "package_file", "index$": 0 }, { "in": "path", "name": "replicable_id", "description": "The replicable ID of a replicable instance", "type": "integer", "format": "int32", "required": true, "index$": 1 }] }, "GET /api/v4/geo/proxy": { "protocol": "http", "parameters": [] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const geo_ref01_ent = client.Geo();
        let geo_ref01_data = setup.data.new.geo['geo_ref01'];
        geo_ref01_data['replicable_name'] = setup.idmap['replicable_name01'];
        geo_ref01_data = (await geo_ref01_ent.create(geo_ref01_data)).data();
        (0, node_assert_1.default)(null != geo_ref01_data.id);
        // LOAD
        const geo_ref01_match_dt0 = {};
        geo_ref01_match_dt0.id = geo_ref01_data.id;
        const geo_ref01_data_dt0 = (await geo_ref01_ent.load(geo_ref01_match_dt0)).data();
        (0, node_assert_1.default)(geo_ref01_data_dt0.id === geo_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/geo/GeoTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['geo01', 'geo02', 'geo03', 'replicable_name01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_GEO_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_GEO_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_GEO_ENTID'];
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
//# sourceMappingURL=GeoEntity.test.js.map