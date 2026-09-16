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
(0, node_test_1.describe)('EeApiEntitiesBillableMembershipEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.EeApiEntitiesBillableMembership();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'ee_api_entities_billable_membership.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "custom_role", "req": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "integer_value", "req": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "string_value", "req": false, "type": "`$STRING`", "index$": 2 }], "name": "ee_api_entities_billable_membership", "op": { "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "billable_member_id", "orig": "user_id", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "param", "name": "group_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 1 }], "query": [{ "active": true, "example": 1, "kind": "query", "name": "page", "orig": "page", "reqd": false, "type": "`$INTEGER`", "index$": 0 }, { "active": true, "example": 20, "kind": "query", "name": "per_page", "orig": "per_page", "reqd": false, "type": "`$INTEGER`", "index$": 1 }] }, "contract": { "id": "GET /api/v4/groups/{id}/billable_members/{user_id}/indirect", "json": "{\"operationId\":\"getApiV4GroupsIdBillableMembersUserIdIndirect\",\"parameters\":[{\"description\":\"The ID of a group\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The user ID of the member\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"user_id\",\"required\":true,\"type\":\"integer\"},{\"default\":1,\"description\":\"Current page number\",\"example\":1,\"format\":\"int32\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"type\":\"integer\"},{\"default\":20,\"description\":\"Number of items per page\",\"example\":20,\"format\":\"int32\",\"in\":\"query\",\"name\":\"per_page\",\"required\":false,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get the indirect memberships of a billable user of a top-level group.\",\"schema\":{\"description\":\"EE_API_Entities_BillableMembership model\",\"properties\":{\"access_level\":{\"properties\":{\"custom_role\":{\"type\":\"string\"},\"integer_value\":{\"type\":\"string\"},\"string_value\":{\"type\":\"string\"}},\"type\":\"object\"},\"created_at\":{\"type\":\"string\"},\"expires_at\":{\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"source_full_name\":{\"type\":\"string\"},\"source_id\":{\"type\":\"string\"},\"source_members_url\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/v4/groups/{id}/billable_members/{user_id}/indirect", "rename": { "param": { "id": "group_id", "user_id": "billable_member_id" } }, "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "groups" }, { "var": "group_id" }, { "lit": "billable_members" }, { "var": "billable_member_id" }, { "lit": "indirect" }], "select": { "exist": ["billable_member_id", "group_id", "page", "per_page"] }, "transform": { "req": "`reqdata`", "res": "`body.access_level`" }, "index$": 0 }, { "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "billable_member_id", "orig": "user_id", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "param", "name": "group_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 1 }], "query": [{ "active": true, "example": 1, "kind": "query", "name": "page", "orig": "page", "reqd": false, "type": "`$INTEGER`", "index$": 0 }, { "active": true, "example": 20, "kind": "query", "name": "per_page", "orig": "per_page", "reqd": false, "type": "`$INTEGER`", "index$": 1 }] }, "contract": { "id": "GET /api/v4/groups/{id}/billable_members/{user_id}/memberships", "json": "{\"operationId\":\"getApiV4GroupsIdBillableMembersUserIdMemberships\",\"parameters\":[{\"description\":\"The ID of a group\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The user ID of the member\",\"format\":\"int32\",\"in\":\"path\",\"name\":\"user_id\",\"required\":true,\"type\":\"integer\"},{\"default\":1,\"description\":\"Current page number\",\"example\":1,\"format\":\"int32\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"type\":\"integer\"},{\"default\":20,\"description\":\"Number of items per page\",\"example\":20,\"format\":\"int32\",\"in\":\"query\",\"name\":\"per_page\",\"required\":false,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get the direct memberships of a billable user of a top-level group.\",\"schema\":{\"description\":\"EE_API_Entities_BillableMembership model\",\"properties\":{\"access_level\":{\"properties\":{\"custom_role\":{\"type\":\"string\"},\"integer_value\":{\"type\":\"string\"},\"string_value\":{\"type\":\"string\"}},\"type\":\"object\"},\"created_at\":{\"type\":\"string\"},\"expires_at\":{\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"source_full_name\":{\"type\":\"string\"},\"source_id\":{\"type\":\"string\"},\"source_members_url\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/v4/groups/{id}/billable_members/{user_id}/memberships", "rename": { "param": { "id": "group_id", "user_id": "billable_member_id" } }, "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "groups" }, { "var": "group_id" }, { "lit": "billable_members" }, { "var": "billable_member_id" }, { "lit": "memberships" }], "select": { "exist": ["billable_member_id", "group_id", "page", "per_page"] }, "transform": { "req": "`reqdata`", "res": "`body.access_level`" }, "index$": 1 }], "key$": "load" } }, "relations": { "ancestors": [["group", "billable_member"]] }, "key$": "ee_api_entities_billable_membership", "name__orig": "ee_api_entities_billable_membership", "Name": "EeApiEntitiesBillableMembership", "name_": "ee_api_entities_billable_membership", "name-": "ee-api-entities-billable-membership", "NAME": "EE_API_ENTITIES_BILLABLE_MEMBERSHIP", "index$": 196 }, { "active": true, "entity": "ee_api_entities_billable_membership", "key$": "BasicEeApiEntitiesBillableMembershipFlow", "kind": "basic", "name": "BasicEeApiEntitiesBillableMembershipFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "ee_api_entities_billable_membership_ref01", "srcdatavar": "ee_api_entities_billable_membership_ref01_data", "suffix": "_dt0" }, "match": { "group_id": "group01", "id": "ee_api_entities_billable_membership01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-ee_api_entities_billable_membership_ref01" } }], "index$": 0 }] }, 'EeApiEntitiesBillableMembership');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let ee_api_entities_billable_membership_ref01_data = Object.values(setup.data.existing.ee_api_entities_billable_membership)[0];
        // LOAD: skipped — no entity id field and load requires path params.
        // Entity-var is declared here so later flow steps still compile.
        const ee_api_entities_billable_membership_ref01_ent = client.EeApiEntitiesBillableMembership();
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/ee_api_entities_billable_membership/EeApiEntitiesBillableMembershipTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['ee_api_entities_billable_membership01', 'ee_api_entities_billable_membership02', 'ee_api_entities_billable_membership03', 'group01', 'group02', 'group03', 'billable_member01', 'billable_member02', 'billable_member03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_EE_API_ENTITIES_BILLABLE_MEMBERSHIP_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_EE_API_ENTITIES_BILLABLE_MEMBERSHIP_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_EE_API_ENTITIES_BILLABLE_MEMBERSHIP_ENTID'];
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
//# sourceMappingURL=EeApiEntitiesBillableMembershipEntity.test.js.map