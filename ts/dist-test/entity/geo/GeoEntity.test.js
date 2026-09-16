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
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "id", "req": false, "type": "`$STRING`", "index$": 0 }], "id": { "field": "id", "name": "id", "parts": ["replicable_name", "replicable_id"], "sep": "/" }, "name": "geo", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "node_proxy_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "POST /api/v4/geo/node_proxy/{id}/graphql", "json": "{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4GeoNodeProxyIdGraphql\",\"parameters\":[{\"description\":\"The ID of the Geo node\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Query the GraphQL endpoint of an existing Geo node\"},\"404\":{\"description\":\"404 GeoNode Not Found\"},\"500\":{\"description\":\"500 Internal Server Error\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "POST", "orig": "/api/v4/geo/node_proxy/{id}/graphql", "rename": { "param": { "id": "node_proxy_id" } }, "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "geo" }, { "lit": "node_proxy" }, { "var": "node_proxy_id" }, { "lit": "graphql" }], "select": { "exist": ["node_proxy_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "active": true, "args": { "query": [{ "active": true, "kind": "query", "name": "post_api_v4_geo_proxy_git_ssh_info_refs_receive_pack", "orig": "post_api_v4_geo_proxy_git_ssh_info_refs_receive_pack", "reqd": true, "type": "`$OBJECT`", "index$": 0 }] }, "contract": { "id": "POST /api/v4/geo/proxy_git_ssh/info_refs_receive_pack", "json": "{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4GeoProxyGitSshInfoRefsReceivePack\",\"parameters\":[{\"in\":\"body\",\"name\":\"postApiV4GeoProxyGitSshInfoRefsReceivePack\",\"required\":true,\"schema\":{\"description\":\"Responsible for making HTTP GET /repo.git/info/refs?service=git-receive-pack\\n                  request from secondary gitlab-shell to primary\",\"properties\":{\"data\":{\"properties\":{\"gl_id\":{\"type\":\"string\"},\"primary_repo\":{\"type\":\"string\"}},\"required\":[\"gl_id\",\"primary_repo\"],\"type\":\"object\"},\"secret_token\":{\"type\":\"string\"}},\"required\":[\"secret_token\",\"data\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Responsible for making HTTP GET /repo.git/info/refs?service=git-receive-pack\\n                  request from secondary gitlab-shell to primary\"},\"401\":{\"description\":\"401 Unauthorized\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "POST", "orig": "/api/v4/geo/proxy_git_ssh/info_refs_receive_pack", "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "geo" }, { "lit": "proxy_git_ssh" }, { "lit": "info_refs_receive_pack" }], "select": { "exist": ["post_api_v4_geo_proxy_git_ssh_info_refs_receive_pack"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "active": true, "args": { "query": [{ "active": true, "kind": "query", "name": "post_api_v4_geo_proxy_git_ssh_info_refs_upload_pack", "orig": "post_api_v4_geo_proxy_git_ssh_info_refs_upload_pack", "reqd": true, "type": "`$OBJECT`", "index$": 0 }] }, "contract": { "id": "POST /api/v4/geo/proxy_git_ssh/info_refs_upload_pack", "json": "{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4GeoProxyGitSshInfoRefsUploadPack\",\"parameters\":[{\"in\":\"body\",\"name\":\"postApiV4GeoProxyGitSshInfoRefsUploadPack\",\"required\":true,\"schema\":{\"description\":\"Responsible for making HTTP GET /repo.git/info/refs?service=git-upload-pack\\n                  request from secondary gitlab-shell to primary\",\"properties\":{\"data\":{\"properties\":{\"gl_id\":{\"description\":\"GitLab identifier of user that initiated the clone/pull\",\"type\":\"string\"},\"primary_repo\":{\"description\":\"Primary repository to clone/pull\",\"type\":\"string\"}},\"required\":[\"gl_id\",\"primary_repo\"],\"type\":\"object\"},\"secret_token\":{\"description\":\"Secret token to authenticate by gitlab shell\",\"type\":\"string\"}},\"required\":[\"secret_token\",\"data\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Responsible for making HTTP GET /repo.git/info/refs?service=git-upload-pack\\n                  request from secondary gitlab-shell to primary\"},\"401\":{\"description\":\"401 Unauthorized\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "POST", "orig": "/api/v4/geo/proxy_git_ssh/info_refs_upload_pack", "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "geo" }, { "lit": "proxy_git_ssh" }, { "lit": "info_refs_upload_pack" }], "select": { "exist": ["post_api_v4_geo_proxy_git_ssh_info_refs_upload_pack"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }, { "active": true, "args": { "query": [{ "active": true, "kind": "query", "name": "post_api_v4_geo_proxy_git_ssh_receive_pack", "orig": "post_api_v4_geo_proxy_git_ssh_receive_pack", "reqd": true, "type": "`$OBJECT`", "index$": 0 }] }, "contract": { "id": "POST /api/v4/geo/proxy_git_ssh/receive_pack", "json": "{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4GeoProxyGitSshReceivePack\",\"parameters\":[{\"in\":\"body\",\"name\":\"postApiV4GeoProxyGitSshReceivePack\",\"required\":true,\"schema\":{\"description\":\"Responsible for making HTTP POST /repo.git/info/refs?service=git-receive-pack\\n                  request from secondary gitlab-shell to primary\",\"properties\":{\"data\":{\"properties\":{\"gl_id\":{\"type\":\"string\"},\"primary_repo\":{\"type\":\"string\"}},\"required\":[\"gl_id\",\"primary_repo\"],\"type\":\"object\"},\"output\":{\"description\":\"Output from git-receive-pack\",\"type\":\"string\"},\"secret_token\":{\"type\":\"string\"}},\"required\":[\"secret_token\",\"data\",\"output\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Responsible for making HTTP POST /repo.git/info/refs?service=git-receive-pack\\n                  request from secondary gitlab-shell to primary\"},\"401\":{\"description\":\"401 Unauthorized\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "POST", "orig": "/api/v4/geo/proxy_git_ssh/receive_pack", "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "geo" }, { "lit": "proxy_git_ssh" }, { "lit": "receive_pack" }], "select": { "exist": ["post_api_v4_geo_proxy_git_ssh_receive_pack"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 3 }, { "active": true, "args": { "query": [{ "active": true, "kind": "query", "name": "post_api_v4_geo_proxy_git_ssh_upload_pack", "orig": "post_api_v4_geo_proxy_git_ssh_upload_pack", "reqd": true, "type": "`$OBJECT`", "index$": 0 }] }, "contract": { "id": "POST /api/v4/geo/proxy_git_ssh/upload_pack", "json": "{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4GeoProxyGitSshUploadPack\",\"parameters\":[{\"in\":\"body\",\"name\":\"postApiV4GeoProxyGitSshUploadPack\",\"required\":true,\"schema\":{\"description\":\"Responsible for making HTTP POST /repo.git/git-upload-pack\\n                  request from secondary gitlab-shell to primary\",\"properties\":{\"data\":{\"properties\":{\"gl_id\":{\"type\":\"string\"},\"primary_repo\":{\"type\":\"string\"}},\"required\":[\"gl_id\",\"primary_repo\"],\"type\":\"object\"},\"output\":{\"description\":\"Output from git-upload-pack\",\"type\":\"string\"},\"secret_token\":{\"type\":\"string\"}},\"required\":[\"secret_token\",\"data\",\"output\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Responsible for making HTTP POST /repo.git/git-upload-pack\\n                  request from secondary gitlab-shell to primary\"},\"401\":{\"description\":\"401 Unauthorized\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "POST", "orig": "/api/v4/geo/proxy_git_ssh/upload_pack", "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "geo" }, { "lit": "proxy_git_ssh" }, { "lit": "upload_pack" }], "select": { "exist": ["post_api_v4_geo_proxy_git_ssh_upload_pack"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 4 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "replicable_id", "orig": "replicable_id", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": "package_file", "kind": "param", "name": "replicable_name", "orig": "replicable_name", "reqd": true, "type": "`$ANY`", "index$": 1 }] }, "contract": { "id": "GET /api/v4/geo/retrieve/{replicable_name}/{replicable_id}", "json": "{\"operationId\":\"getApiV4GeoRetrieveReplicableNameReplicableId\",\"parameters\":[{\"description\":\"The replicable name of a replicator instance\",\"example\":\"package_file\",\"in\":\"path\",\"name\":\"replicable_name\",\"required\":true,\"type\":\"string\"},{\"description\":\"The replicable ID of a replicable instance\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"replicable_id\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Returns a replicable file from store (via CDN or sendfile)\"},\"401\":{\"description\":\"401 Unauthorized\"},\"404\":{\"description\":\"404 Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/v4/geo/retrieve/{replicable_name}/{replicable_id}", "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "geo" }, { "lit": "retrieve" }, { "var": "replicable_name" }, { "var": "replicable_id" }], "select": { "exist": ["replicable_id", "replicable_name"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "active": true, "args": {}, "contract": { "id": "GET /api/v4/geo/proxy", "json": "{\"operationId\":\"getApiV4GeoProxy\",\"parameters\":[],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Returns a Geo proxy response\"},\"403\":{\"description\":\"Forbidden\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/v4/geo/proxy", "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "geo" }, { "lit": "proxy" }], "select": { "$action": "proxy" }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "load" } }, "relations": { "ancestors": [["node_proxy"], ["retrieve"]] }, "key$": "geo", "name__orig": "geo", "Name": "Geo", "name_": "geo", "name-": "geo", "NAME": "GEO", "index$": 209 }, { "active": true, "entity": "geo", "key$": "BasicGeoFlow", "kind": "basic", "name": "BasicGeoFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "geo_ref01" }, "match": { "replicable_name": "replicable_name01" }, "op": "create", "spec": [], "valid": [], "index$": 0 }, { "active": true, "data": {}, "input": { "ref": "geo_ref01", "srcdatavar": "geo_ref01_data", "suffix": "_dt0" }, "match": {}, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-geo_ref01" } }], "index$": 1 }] }, 'Geo');
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
    let idmap = transform(['geo01', 'geo02', 'geo03', 'node_proxy01', 'node_proxy02', 'node_proxy03', 'retrieve01', 'retrieve02', 'retrieve03'], {
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