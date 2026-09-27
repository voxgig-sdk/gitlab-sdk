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
(0, node_test_1.describe)('EeApiEntitiesSshCertificateEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.EeApiEntitiesSshCertificate();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['create', 'list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'ee_api_entities_ssh_certificate.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": false, "t": "`$STRING`", "key$": "created_at", "index$": 0 }, "id": { "a": true, "fo": "int32", "h": "Id", "n": "id", "r": false, "t": "`$INTEGER`", "key$": "id", "index$": 1 }, "key": { "a": true, "h": "Key", "n": "key", "r": false, "t": "`$STRING`", "key$": "key", "index$": 2 }, "title": { "a": true, "h": "Title", "n": "title", "r": false, "t": "`$STRING`", "key$": "title", "index$": 3 } }, "id": { "field": "id", "name": "id" }, "name": "ee_api_entities_ssh_certificate", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /api/v4/groups/{id}/ssh_certificates", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "group_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "post_api_v4_groups_id_ssh_certificate", "or": "post_api_v4_groups_id_ssh_certificate", "r": true, "t": "`$OBJECT`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/v4/groups/{id}/ssh_certificates", "q": { "exist": ["group_id", "post_api_v4_groups_id_ssh_certificate"] }, "r": { "param": { "id": "group_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "groups" }, { "var": "group_id" }, { "lit": "ssh_certificates" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /api/v4/groups/{id}/ssh_certificates", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "group_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "ex": 20, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$INTEGER`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/api/v4/groups/{id}/ssh_certificates", "q": { "exist": ["group_id", "page", "per_page"] }, "r": { "param": { "id": "group_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "groups" }, { "var": "group_id" }, { "lit": "ssh_certificates" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [["$.main.kit.entity.group"]] }, "key$": "ee_api_entities_ssh_certificate", "name__orig": "ee_api_entities_ssh_certificate", "Name": "EeApiEntitiesSshCertificate", "name_": "ee_api_entities_ssh_certificate", "name-": "ee-api-entities-ssh-certificate", "NAME": "EE_API_ENTITIES_SSH_CERTIFICATE", "index$": 201 }, { "active": true, "entity": "ee_api_entities_ssh_certificate", "key$": "BasicEeApiEntitiesSshCertificateFlow", "kind": "basic", "name": "BasicEeApiEntitiesSshCertificateFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "ee_api_entities_ssh_certificate_ref01" }, "m": { "group_id": "group01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "group_id": "group01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "ee_api_entities_ssh_certificate_ref01" } }], "index$": 1 }] }, 'EeApiEntitiesSshCertificate', { "POST /api/v4/groups/{id}/ssh_certificates": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "type": "integer", "format": "int32", "required": true, "index$": 0 }, { "name": "postApiV4GroupsIdSshCertificates", "in": "body", "required": true, "schema": { "type": "object", "properties": { "title": { "type": "string", "description": "The title of the ssh certificate" }, "key": { "type": "string", "description": "The key of the ssh certificate" } }, "required": ["title", "key"], "description": "Create a ssh certificate for a group.", "x-ref": "#/definitions/postApiV4GroupsIdSshCertificates" }, "index$": 1 }] }, "GET /api/v4/groups/{id}/ssh_certificates": { "protocol": "http", "parameters": [{ "in": "query", "name": "page", "description": "Current page number", "type": "integer", "format": "int32", "default": 1, "required": false, "example": 1, "index$": 0 }, { "in": "query", "name": "per_page", "description": "Number of items per page", "type": "integer", "format": "int32", "default": 20, "required": false, "example": 20, "index$": 1 }, { "in": "path", "name": "id", "type": "integer", "format": "int32", "required": true, "index$": 2 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const ee_api_entities_ssh_certificate_ref01_ent = client.EeApiEntitiesSshCertificate();
        let ee_api_entities_ssh_certificate_ref01_data = setup.data.new.ee_api_entities_ssh_certificate['ee_api_entities_ssh_certificate_ref01'];
        ee_api_entities_ssh_certificate_ref01_data['group_id'] = setup.idmap['group01'];
        ee_api_entities_ssh_certificate_ref01_data = (await ee_api_entities_ssh_certificate_ref01_ent.create(ee_api_entities_ssh_certificate_ref01_data)).data();
        (0, node_assert_1.default)(null != ee_api_entities_ssh_certificate_ref01_data.id);
        // LIST
        const ee_api_entities_ssh_certificate_ref01_match = {};
        ee_api_entities_ssh_certificate_ref01_match['group_id'] = setup.idmap['group01'];
        const ee_api_entities_ssh_certificate_ref01_list = (await ee_api_entities_ssh_certificate_ref01_ent.list(ee_api_entities_ssh_certificate_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(ee_api_entities_ssh_certificate_ref01_list, { id: ee_api_entities_ssh_certificate_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/ee_api_entities_ssh_certificate/EeApiEntitiesSshCertificateTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['ee_api_entities_ssh_certificate01', 'ee_api_entities_ssh_certificate02', 'ee_api_entities_ssh_certificate03', 'group01', 'group02', 'group03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_EE_API_ENTITIES_SSH_CERTIFICATE_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_EE_API_ENTITIES_SSH_CERTIFICATE_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_EE_API_ENTITIES_SSH_CERTIFICATE_ENTID'];
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
//# sourceMappingURL=EeApiEntitiesSshCertificateEntity.test.js.map