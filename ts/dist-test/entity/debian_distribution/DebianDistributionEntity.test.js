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
(0, node_test_1.describe)('DebianDistributionEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.DebianDistribution();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of []) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'debian_distribution.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 0 } }, "id": { "field": "id", "name": "id" }, "name": "debian_distribution", "op": { "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /api/v4/groups/{id}/-/debian_distributions/{codename}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "group_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "sid", "k": "param", "n": "id", "or": "codename", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "ex": "amd64", "k": "query", "n": "architecture", "or": "architecture", "r": false, "t": "`$ANY`", "index$": 0 }, { "a": true, "ex": "main", "k": "query", "n": "component", "or": "component", "r": false, "t": "`$ANY`", "index$": 1 }, { "a": true, "ex": "My description", "k": "query", "n": "description", "or": "description", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "ex": "grep.be", "k": "query", "n": "label", "or": "label", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "ex": "Grep", "k": "query", "n": "origin", "or": "origin", "r": false, "t": "`$ANY`", "index$": 4 }, { "a": true, "ex": "unstable", "k": "query", "n": "suite", "or": "suite", "r": false, "t": "`$ANY`", "index$": 5 }, { "a": true, "ex": 604800, "k": "query", "n": "valid_time_duration_second", "or": "valid_time_duration_second", "r": false, "t": "`$ANY`", "index$": 6 }, { "a": true, "ex": "12", "k": "query", "n": "version", "or": "version", "r": false, "t": "`$ANY`", "index$": 7 }] }, "k": "http", "m": "DELETE", "o": "/api/v4/groups/{id}/-/debian_distributions/{codename}", "q": { "exist": ["architecture", "component", "description", "group_id", "id", "label", "origin", "suite", "valid_time_duration_second", "version"] }, "r": { "param": { "codename": "id", "id": "group_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "groups" }, { "var": "group_id" }, { "lit": "-" }, { "lit": "debian_distributions" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "DELETE /api/v4/projects/{id}/debian_distributions/{codename}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "ex": "sid", "k": "param", "n": "id", "or": "codename", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "ex": "amd64", "k": "query", "n": "architecture", "or": "architecture", "r": false, "t": "`$ANY`", "index$": 0 }, { "a": true, "ex": "main", "k": "query", "n": "component", "or": "component", "r": false, "t": "`$ANY`", "index$": 1 }, { "a": true, "ex": "My description", "k": "query", "n": "description", "or": "description", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "ex": "grep.be", "k": "query", "n": "label", "or": "label", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "ex": "Grep", "k": "query", "n": "origin", "or": "origin", "r": false, "t": "`$ANY`", "index$": 4 }, { "a": true, "ex": "unstable", "k": "query", "n": "suite", "or": "suite", "r": false, "t": "`$ANY`", "index$": 5 }, { "a": true, "ex": 604800, "k": "query", "n": "valid_time_duration_second", "or": "valid_time_duration_second", "r": false, "t": "`$ANY`", "index$": 6 }, { "a": true, "ex": "12", "k": "query", "n": "version", "or": "version", "r": false, "t": "`$ANY`", "index$": 7 }] }, "k": "http", "m": "DELETE", "o": "/api/v4/projects/{id}/debian_distributions/{codename}", "q": { "exist": ["architecture", "component", "description", "id", "label", "origin", "project_id", "suite", "valid_time_duration_second", "version"] }, "r": { "param": { "codename": "id", "id": "project_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "debian_distributions" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "remove" } }, "relations": { "ancestors": [["$.main.kit.entity.group"], ["$.main.kit.entity.project"]] }, "key$": "debian_distribution", "name__orig": "debian_distribution", "Name": "DebianDistribution", "name_": "debian_distribution", "name-": "debian-distribution", "NAME": "DEBIAN_DISTRIBUTION", "index$": 188 }, { "active": true, "entity": "debian_distribution", "key$": "BasicDebianDistributionFlow", "kind": "basic", "name": "BasicDebianDistributionFlow", "param": {}, "step": [] }, 'DebianDistribution', { "DELETE /api/v4/groups/{id}/-/debian_distributions/{codename}": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the group", "type": "string", "required": true, "index$": 0 }, { "in": "path", "name": "codename", "description": "The Debian Codename", "type": "string", "required": true, "example": "sid", "index$": 1 }, { "in": "query", "name": "suite", "description": "The Debian Suite", "type": "string", "required": false, "example": "unstable", "index$": 2 }, { "in": "query", "name": "origin", "description": "The Debian Origin", "type": "string", "required": false, "example": "Grep", "index$": 3 }, { "in": "query", "name": "label", "description": "The Debian Label", "type": "string", "required": false, "example": "grep.be", "index$": 4 }, { "in": "query", "name": "version", "description": "The Debian Version", "type": "string", "required": false, "example": "12", "index$": 5 }, { "in": "query", "name": "description", "description": "The Debian Description", "type": "string", "required": false, "example": "My description", "index$": 6 }, { "in": "query", "name": "valid_time_duration_seconds", "description": "The duration before the Release file should be considered expired by the client", "type": "integer", "format": "int32", "required": false, "example": 604800, "index$": 7 }, { "in": "query", "name": "components", "description": "The list of Components", "type": "array", "items": { "type": "string" }, "required": false, "example": "main", "index$": 8 }, { "in": "query", "name": "architectures", "description": "The list of Architectures", "type": "array", "items": { "type": "string" }, "required": false, "example": "amd64", "index$": 9 }] }, "DELETE /api/v4/projects/{id}/debian_distributions/{codename}": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project", "type": "string", "required": true, "index$": 0 }, { "in": "path", "name": "codename", "description": "The Debian Codename", "type": "string", "required": true, "example": "sid", "index$": 1 }, { "in": "query", "name": "suite", "description": "The Debian Suite", "type": "string", "required": false, "example": "unstable", "index$": 2 }, { "in": "query", "name": "origin", "description": "The Debian Origin", "type": "string", "required": false, "example": "Grep", "index$": 3 }, { "in": "query", "name": "label", "description": "The Debian Label", "type": "string", "required": false, "example": "grep.be", "index$": 4 }, { "in": "query", "name": "version", "description": "The Debian Version", "type": "string", "required": false, "example": "12", "index$": 5 }, { "in": "query", "name": "description", "description": "The Debian Description", "type": "string", "required": false, "example": "My description", "index$": 6 }, { "in": "query", "name": "valid_time_duration_seconds", "description": "The duration before the Release file should be considered expired by the client", "type": "integer", "format": "int32", "required": false, "example": 604800, "index$": 7 }, { "in": "query", "name": "components", "description": "The list of Components", "type": "array", "items": { "type": "string" }, "required": false, "example": "main", "index$": 8 }, { "in": "query", "name": "architectures", "description": "The list of Architectures", "type": "array", "items": { "type": "string" }, "required": false, "example": "amd64", "index$": 9 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let debian_distribution_ref01_data = Object.values(setup.data.existing.debian_distribution)[0];
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/debian_distribution/DebianDistributionTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['debian_distribution01', 'debian_distribution02', 'debian_distribution03', 'group01', 'group02', 'group03', 'project01', 'project02', 'project03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_DEBIAN_DISTRIBUTION_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_DEBIAN_DISTRIBUTION_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_DEBIAN_DISTRIBUTION_ENTID'];
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
//# sourceMappingURL=DebianDistributionEntity.test.js.map