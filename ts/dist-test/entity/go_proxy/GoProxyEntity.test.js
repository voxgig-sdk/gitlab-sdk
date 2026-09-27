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
(0, node_test_1.describe)('GoProxyEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.GoProxy();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'go_proxy.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": {}, "name": "go_proxy", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/v4/projects/{id}/packages/go/*module_name/@v/{module_version}.mod", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "module_version", "or": "module_version", "r": true, "t": "`$ANY`", "index$": 0 }, { "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "k": "query", "n": "module_name", "or": "module_name", "r": true, "t": "`$ANY`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/v4/projects/{id}/packages/go/*module_name/@v/{module_version}.mod", "q": { "exist": ["module_name", "module_version", "project_id"] }, "r": { "param": { "id": "project_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "packages" }, { "lit": "go" }, { "lit": "*module_name" }, { "lit": "@v" }, { "lit": "{module_version}.mod" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /api/v4/projects/{id}/packages/go/*module_name/@v/{module_version}.zip", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "module_version", "or": "module_version", "r": true, "t": "`$ANY`", "index$": 0 }, { "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "k": "query", "n": "module_name", "or": "module_name", "r": true, "t": "`$ANY`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/v4/projects/{id}/packages/go/*module_name/@v/{module_version}.zip", "q": { "exist": ["module_name", "module_version", "project_id"] }, "r": { "param": { "id": "project_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "packages" }, { "lit": "go" }, { "lit": "*module_name" }, { "lit": "@v" }, { "lit": "{module_version}.zip" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "GET /api/v4/projects/{id}/packages/go/*module_name/@v/list", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "module_name", "or": "module_name", "r": true, "t": "`$ANY`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/v4/projects/{id}/packages/go/*module_name/@v/list", "q": { "exist": ["module_name", "project_id"] }, "r": { "param": { "id": "project_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "packages" }, { "lit": "go" }, { "lit": "*module_name" }, { "lit": "@v" }, { "lit": "list" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }], "key$": "load" } }, "relations": { "ancestors": [["$.main.kit.entity.project"]] }, "key$": "go_proxy", "name__orig": "go_proxy", "Name": "GoProxy", "name_": "go_proxy", "name-": "go-proxy", "NAME": "GO_PROXY", "index$": 210 }, { "active": true, "entity": "go_proxy", "key$": "BasicGoProxyFlow", "kind": "basic", "name": "BasicGoProxyFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "go_proxy_ref01", "srcdatavar": "go_proxy_ref01_data", "suffix": "_dt0" }, "m": { "id": "go_proxy01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-go_proxy_ref01" } }], "index$": 0 }] }, 'GoProxy', { "GET /api/v4/projects/{id}/packages/go/*module_name/@v/{module_version}.mod": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The project ID or full path of a project", "type": "string", "required": true, "index$": 0 }, { "in": "query", "name": "module_name", "description": "The name of the Go module", "type": "string", "required": true, "index$": 1 }, { "in": "path", "name": "module_version", "description": "The version of the Go module", "type": "string", "required": true, "index$": 2 }] }, "GET /api/v4/projects/{id}/packages/go/*module_name/@v/{module_version}.zip": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The project ID or full path of a project", "type": "string", "required": true, "index$": 0 }, { "in": "query", "name": "module_name", "description": "The name of the Go module", "type": "string", "required": true, "index$": 1 }, { "in": "path", "name": "module_version", "description": "The version of the Go module", "type": "string", "required": true, "index$": 2 }] }, "GET /api/v4/projects/{id}/packages/go/*module_name/@v/list": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The project ID or full path of a project", "type": "string", "required": true, "index$": 0 }, { "in": "query", "name": "module_name", "description": "The name of the Go module", "type": "string", "required": true, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let go_proxy_ref01_data = Object.values(setup.data.existing.go_proxy)[0];
        // LOAD: skipped — no entity id field and load requires path params.
        // Entity-var is declared here so later flow steps still compile.
        const go_proxy_ref01_ent = client.GoProxy();
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/go_proxy/GoProxyTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['go_proxy01', 'go_proxy02', 'go_proxy03', 'project01', 'project02', 'project03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_GO_PROXY_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_GO_PROXY_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_GO_PROXY_ENTID'];
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
//# sourceMappingURL=GoProxyEntity.test.js.map