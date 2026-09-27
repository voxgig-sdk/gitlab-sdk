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
(0, node_test_1.describe)('ApiEntitiesPagesDomainEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.ApiEntitiesPagesDomain();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['create', 'list', 'update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'api_entities_pages_domain.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "auto_ssl_enabled": { "a": true, "h": "Auto Ssl Enabled", "n": "auto_ssl_enabled", "r": false, "t": "`$STRING`", "key$": "auto_ssl_enabled", "index$": 0 }, "certificate": { "a": true, "h": "Certificate", "n": "certificate", "r": false, "t": "`$STRING`", "key$": "certificate", "index$": 1 }, "certificate_text": { "a": true, "h": "Certificate Text", "n": "certificate_text", "r": false, "t": "`$STRING`", "key$": "certificate_text", "index$": 2 }, "domain": { "a": true, "h": "Domain", "n": "domain", "r": false, "t": "`$STRING`", "key$": "domain", "index$": 3 }, "enabled_until": { "a": true, "h": "Enabled Until", "n": "enabled_until", "r": false, "t": "`$STRING`", "key$": "enabled_until", "index$": 4 }, "expired": { "a": true, "h": "Expired", "n": "expired", "r": false, "t": "`$STRING`", "key$": "expired", "index$": 5 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 6 }, "subject": { "a": true, "h": "Subject", "n": "subject", "r": false, "t": "`$STRING`", "key$": "subject", "index$": 7 }, "url": { "a": true, "h": "Url", "n": "url", "r": false, "t": "`$STRING`", "key$": "url", "index$": 8 }, "verification_code": { "a": true, "h": "Verification Code", "n": "verification_code", "r": false, "t": "`$STRING`", "key$": "verification_code", "index$": 9 }, "verified": { "a": true, "h": "Verified", "n": "verified", "r": false, "t": "`$BOOLEAN`", "key$": "verified", "index$": 10 } }, "id": { "field": "id", "name": "id" }, "name": "api_entities_pages_domain", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /api/v4/projects/{id}/pages/domains", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "post_api_v4_projects_id_pages_domain", "or": "post_api_v4_projects_id_pages_domain", "r": true, "t": "`$OBJECT`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/v4/projects/{id}/pages/domains", "q": { "exist": ["post_api_v4_projects_id_pages_domain", "project_id"] }, "r": { "param": { "id": "project_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "pages" }, { "lit": "domains" }], "t": { "req": "`reqdata`", "res": "`body.certificate`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /api/v4/projects/{id}/pages/domains", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "ex": 20, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$INTEGER`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/api/v4/projects/{id}/pages/domains", "q": { "exist": ["page", "per_page", "project_id"] }, "r": { "param": { "id": "project_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "pages" }, { "lit": "domains" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/v4/projects/{id}/pages/domains/{domain}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "domain", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/api/v4/projects/{id}/pages/domains/{domain}", "q": { "exist": ["id", "project_id"] }, "r": { "param": { "domain": "id", "id": "project_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "pages" }, { "lit": "domains" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body.certificate`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /api/v4/projects/{id}/pages/domains/{domain}/verify", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "domain_id", "or": "domain", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "PUT", "o": "/api/v4/projects/{id}/pages/domains/{domain}/verify", "q": { "exist": ["domain_id", "project_id"] }, "r": { "param": { "domain": "domain_id", "id": "project_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "pages" }, { "lit": "domains" }, { "var": "domain_id" }, { "lit": "verify" }], "t": { "req": "`reqdata`", "res": "`body.certificate`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.project"], ["$.main.kit.entity.project"]] }, "key$": "api_entities_pages_domain", "name__orig": "api_entities_pages_domain", "Name": "ApiEntitiesPagesDomain", "name_": "api_entities_pages_domain", "name-": "api-entities-pages-domain", "NAME": "API_ENTITIES_PAGES_DOMAIN", "index$": 123 }, { "active": true, "entity": "api_entities_pages_domain", "key$": "BasicApiEntitiesPagesDomainFlow", "kind": "basic", "name": "BasicApiEntitiesPagesDomainFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "api_entities_pages_domain_ref01" }, "m": { "project_id": "project01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "project_id": "project01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "api_entities_pages_domain_ref01" } }], "index$": 1 }, { "a": true, "d": { "project_id": "project01" }, "i": { "ref": "api_entities_pages_domain_ref01", "srcdatavar": "api_entities_pages_domain_ref01_data", "suffix": "_up0", "textfield": "auto_ssl_enabled" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-api_entities_pages_domain_ref01" } }], "v": [], "index$": 2 }, { "a": true, "d": {}, "i": { "ref": "api_entities_pages_domain_ref01", "srcdatavar": "api_entities_pages_domain_ref01_data", "suffix": "_dt0" }, "m": { "id": "api_entities_pages_domain01", "project_id": "project01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-api_entities_pages_domain_ref01" } }], "index$": 3 }] }, 'ApiEntitiesPagesDomain', { "POST /api/v4/projects/{id}/pages/domains": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project owned by the authenticated user", "type": "string", "required": true, "index$": 0 }, { "name": "postApiV4ProjectsIdPagesDomains", "in": "body", "required": true, "schema": { "type": "object", "properties": { "domain": { "type": "string", "description": "The domain" }, "certificate": { "type": "file", "description": "The certificate" }, "key": { "type": "file", "description": "The key" }, "auto_ssl_enabled": { "type": "boolean", "description": "Enables automatic generation of SSL certificates issued by Let's Encrypt for custom domains.", "default": false }, "user_provided_certificate": { "type": "string" }, "user_provided_key": { "type": "string" } }, "required": ["domain"], "description": "Create a new pages domain", "x-ref": "#/definitions/postApiV4ProjectsIdPagesDomains" }, "index$": 1 }] }, "GET /api/v4/projects/{id}/pages/domains": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project owned by the authenticated user", "type": "string", "required": true, "index$": 0 }, { "in": "query", "name": "page", "description": "Current page number", "type": "integer", "format": "int32", "default": 1, "required": false, "example": 1, "index$": 1 }, { "in": "query", "name": "per_page", "description": "Number of items per page", "type": "integer", "format": "int32", "default": 20, "required": false, "example": 20, "index$": 2 }] }, "GET /api/v4/projects/{id}/pages/domains/{domain}": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project owned by the authenticated user", "type": "string", "required": true, "index$": 0 }, { "in": "path", "name": "domain", "description": "The domain", "type": "string", "required": true, "index$": 1 }] }, "PUT /api/v4/projects/{id}/pages/domains/{domain}/verify": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project owned by the authenticated user", "type": "string", "required": true, "index$": 0 }, { "in": "path", "name": "domain", "description": "The domain to verify", "type": "string", "required": true, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const api_entities_pages_domain_ref01_ent = client.ApiEntitiesPagesDomain();
        let api_entities_pages_domain_ref01_data = setup.data.new.api_entities_pages_domain['api_entities_pages_domain_ref01'];
        api_entities_pages_domain_ref01_data['project_id'] = setup.idmap['project01'];
        api_entities_pages_domain_ref01_data = (await api_entities_pages_domain_ref01_ent.create(api_entities_pages_domain_ref01_data)).data();
        (0, node_assert_1.default)(null != api_entities_pages_domain_ref01_data.id);
        // LIST
        const api_entities_pages_domain_ref01_match = {};
        api_entities_pages_domain_ref01_match['project_id'] = setup.idmap['project01'];
        const api_entities_pages_domain_ref01_list = (await api_entities_pages_domain_ref01_ent.list(api_entities_pages_domain_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(api_entities_pages_domain_ref01_list, { id: api_entities_pages_domain_ref01_data.id })));
        // UPDATE
        const api_entities_pages_domain_ref01_data_up0 = {};
        api_entities_pages_domain_ref01_data_up0.id = api_entities_pages_domain_ref01_data.id;
        api_entities_pages_domain_ref01_data_up0['project_id'] = setup.idmap['project_id'];
        const api_entities_pages_domain_ref01_markdef_up0 = { name: 'auto_ssl_enabled', value: 'Mark01-api_entities_pages_domain_ref01_' + setup.now };
        api_entities_pages_domain_ref01_data_up0[api_entities_pages_domain_ref01_markdef_up0.name] = api_entities_pages_domain_ref01_markdef_up0.value;
        const api_entities_pages_domain_ref01_resdata_up0 = (await api_entities_pages_domain_ref01_ent.update(api_entities_pages_domain_ref01_data_up0)).data();
        (0, node_assert_1.default)(api_entities_pages_domain_ref01_resdata_up0.id === api_entities_pages_domain_ref01_data_up0.id);
        (0, node_assert_1.default)(api_entities_pages_domain_ref01_resdata_up0[api_entities_pages_domain_ref01_markdef_up0.name] === api_entities_pages_domain_ref01_markdef_up0.value);
        // LOAD
        const api_entities_pages_domain_ref01_match_dt0 = {};
        api_entities_pages_domain_ref01_match_dt0.id = api_entities_pages_domain_ref01_data.id;
        const api_entities_pages_domain_ref01_data_dt0 = (await api_entities_pages_domain_ref01_ent.load(api_entities_pages_domain_ref01_match_dt0)).data();
        (0, node_assert_1.default)(api_entities_pages_domain_ref01_data_dt0.id === api_entities_pages_domain_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/api_entities_pages_domain/ApiEntitiesPagesDomainTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['api_entities_pages_domain01', 'api_entities_pages_domain02', 'api_entities_pages_domain03', 'project01', 'project02', 'project03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_API_ENTITIES_PAGES_DOMAIN_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_API_ENTITIES_PAGES_DOMAIN_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_API_ENTITIES_PAGES_DOMAIN_ENTID'];
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
//# sourceMappingURL=ApiEntitiesPagesDomainEntity.test.js.map