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
(0, node_test_1.describe)('ApiEntitiesLicenseEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.ApiEntitiesLicense();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'api_entities_license.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "conditions": { "a": true, "h": "Conditions", "n": "conditions", "r": false, "t": "`$ARRAY`", "key$": "conditions", "index$": 0 }, "content": { "a": true, "h": "Content", "n": "content", "r": false, "t": "`$STRING`", "key$": "content", "index$": 1 }, "description": { "a": true, "h": "Description", "n": "description", "r": false, "t": "`$STRING`", "key$": "description", "index$": 2 }, "html_url": { "a": true, "h": "Html Url", "n": "html_url", "r": false, "t": "`$STRING`", "key$": "html_url", "index$": 3 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 4 }, "key": { "a": true, "h": "Key", "n": "key", "r": false, "t": "`$STRING`", "key$": "key", "index$": 5 }, "limitations": { "a": true, "h": "Limitations", "n": "limitations", "r": false, "t": "`$ARRAY`", "key$": "limitations", "index$": 6 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "t": "`$STRING`", "key$": "name", "index$": 7 }, "nickname": { "a": true, "h": "Nickname", "n": "nickname", "r": false, "t": "`$STRING`", "key$": "nickname", "index$": 8 }, "permissions": { "a": true, "h": "Permissions", "n": "permissions", "r": false, "t": "`$ARRAY`", "key$": "permissions", "index$": 9 }, "popular": { "a": true, "h": "Popular", "n": "popular", "r": false, "t": "`$BOOLEAN`", "key$": "popular", "index$": 10 }, "source_url": { "a": true, "h": "Source Url", "n": "source_url", "r": false, "t": "`$STRING`", "key$": "source_url", "index$": 11 } }, "id": { "field": "id", "from": { "name": "name" }, "name": "id", "parts": ["type", "name"], "sep": "/" }, "name": "api_entities_license", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/v4/projects/{id}/templates/{type}/{name}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "MIT", "k": "param", "n": "name", "or": "name", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "type", "or": "type", "r": true, "t": "`$ANY`", "index$": 2 }], "query": [{ "a": true, "ex": "GitLab B.V.", "k": "query", "n": "fullname", "or": "fullname", "r": false, "t": "`$ANY`", "index$": 0 }, { "a": true, "ex": "GitLab", "k": "query", "n": "project", "or": "project", "r": false, "t": "`$ANY`", "index$": 1 }, { "a": true, "ex": 1, "k": "query", "n": "source_template_project_id", "or": "source_template_project_id", "r": false, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/api/v4/projects/{id}/templates/{type}/{name}", "q": { "exist": ["fullname", "id", "name", "project", "source_template_project_id", "type"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "id" }, { "lit": "templates" }, { "var": "type" }, { "var": "name" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "api_entities_license", "name__orig": "api_entities_license", "Name": "ApiEntitiesLicense", "name_": "api_entities_license", "name-": "api-entities-license", "NAME": "API_ENTITIES_LICENSE", "index$": 88 }, { "active": true, "entity": "api_entities_license", "key$": "BasicApiEntitiesLicenseFlow", "kind": "basic", "name": "BasicApiEntitiesLicenseFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "api_entities_license_ref01", "srcdatavar": "api_entities_license_ref01_data", "suffix": "_dt0" }, "m": { "id": "api_entities_license01", "type": "type01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-api_entities_license_ref01" } }], "index$": 0 }] }, 'ApiEntitiesLicense', { "GET /api/v4/projects/{id}/templates/{type}/{name}": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project", "type": "string", "required": true, "index$": 0 }, { "in": "path", "name": "type", "description": "The type (dockerfiles|gitignores|gitlab_ci_ymls|licenses|issues|merge_requests) of the template", "type": "string", "enum": ["dockerfiles", "gitignores", "gitlab_ci_ymls", "licenses", "issues", "merge_requests"], "required": true, "index$": 1 }, { "in": "path", "name": "name", "description": "The key of the template, as obtained from the collection endpoint.", "type": "string", "required": true, "example": "MIT", "index$": 2 }, { "in": "query", "name": "source_template_project_id", "description": "The project id where a given template is being stored. This is useful when multiple templates from different projects have the same name", "type": "integer", "format": "int32", "required": false, "example": 1, "index$": 3 }, { "in": "query", "name": "project", "description": "The project name to use when expanding placeholders in the template. Only affects licenses", "type": "string", "required": false, "example": "GitLab", "index$": 4 }, { "in": "query", "name": "fullname", "description": "The full name of the copyright holder to use when expanding placeholders in the template. Only affects licenses", "type": "string", "required": false, "example": "GitLab B.V.", "index$": 5 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let api_entities_license_ref01_data = Object.values(setup.data.existing.api_entities_license)[0];
        // LOAD
        const api_entities_license_ref01_ent = client.ApiEntitiesLicense();
        const api_entities_license_ref01_match_dt0 = {};
        api_entities_license_ref01_match_dt0.id = api_entities_license_ref01_data.id;
        const api_entities_license_ref01_data_dt0 = (await api_entities_license_ref01_ent.load(api_entities_license_ref01_match_dt0)).data();
        (0, node_assert_1.default)(api_entities_license_ref01_data_dt0.id === api_entities_license_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/api_entities_license/ApiEntitiesLicenseTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['api_entities_license01', 'api_entities_license02', 'api_entities_license03', 'type01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_API_ENTITIES_LICENSE_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_API_ENTITIES_LICENSE_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_API_ENTITIES_LICENSE_ENTID'];
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
//# sourceMappingURL=ApiEntitiesLicenseEntity.test.js.map