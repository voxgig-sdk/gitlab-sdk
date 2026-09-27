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
(0, node_test_1.describe)('ApiEntitiesChangelogEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.ApiEntitiesChangelog();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'api_entities_changelog.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "notes": { "a": true, "h": "Notes", "n": "notes", "r": false, "t": "`$STRING`", "key$": "notes", "index$": 0 } }, "name": "api_entities_changelog", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/v4/projects/{id}/repository/changelog", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "ex": 1, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": ".gitlab/changelog_config.yml", "k": "query", "n": "config_file", "or": "config_file", "r": false, "t": "`$ANY`", "index$": 0 }, { "a": true, "ex": "main", "k": "query", "n": "config_file_ref", "or": "config_file_ref", "r": false, "t": "`$ANY`", "index$": 1 }, { "a": true, "ex": "2021-09-20T11:50:22.001+00:00", "k": "query", "n": "date", "or": "date", "r": false, "t": "`$ANY`", "index$": 2 }, { "a": true, "ex": "ed899a2f4b50b4370feeea94676502b42383c746", "k": "query", "n": "from", "or": "from", "r": false, "t": "`$ANY`", "index$": 3 }, { "a": true, "ex": "6104942438c14ec7bd21c6cd5bd995272b3faff6", "k": "query", "n": "to", "or": "to", "r": false, "t": "`$ANY`", "index$": 4 }, { "a": true, "ex": "Changelog", "k": "query", "n": "trailer", "or": "trailer", "r": false, "t": "`$ANY`", "index$": 5 }, { "a": true, "ex": "1.0.0", "k": "query", "n": "version", "or": "version", "r": true, "t": "`$ANY`", "index$": 6 }] }, "k": "http", "m": "GET", "o": "/api/v4/projects/{id}/repository/changelog", "q": { "exist": ["config_file", "config_file_ref", "date", "from", "project_id", "to", "trailer", "version"] }, "r": { "param": { "id": "project_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "repository" }, { "lit": "changelog" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [["$.main.kit.entity.project"]] }, "key$": "api_entities_changelog", "name__orig": "api_entities_changelog", "Name": "ApiEntitiesChangelog", "name_": "api_entities_changelog", "name-": "api-entities-changelog", "NAME": "API_ENTITIES_CHANGELOG", "index$": 20 }, { "active": true, "entity": "api_entities_changelog", "key$": "BasicApiEntitiesChangelogFlow", "kind": "basic", "name": "BasicApiEntitiesChangelogFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "api_entities_changelog_ref01", "srcdatavar": "api_entities_changelog_ref01_data", "suffix": "_dt0" }, "m": { "id": "api_entities_changelog01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-api_entities_changelog_ref01" } }], "index$": 0 }] }, 'ApiEntitiesChangelog', { "GET /api/v4/projects/{id}/repository/changelog": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project", "type": "string", "required": true, "example": 1, "index$": 0 }, { "in": "query", "name": "version", "description": "The version of the release, using the semantic versioning format", "type": "string", "required": true, "example": "1.0.0", "index$": 1 }, { "in": "query", "name": "from", "description": "The first commit in the range of commits to use for the changelog", "type": "string", "required": false, "example": "ed899a2f4b50b4370feeea94676502b42383c746", "index$": 2 }, { "in": "query", "name": "to", "description": "The last commit in the range of commits to use for the changelog", "type": "string", "required": false, "example": "6104942438c14ec7bd21c6cd5bd995272b3faff6", "index$": 3 }, { "in": "query", "name": "date", "description": "The date and time of the release", "type": "string", "format": "date-time", "required": false, "example": "2021-09-20T11:50:22.001+00:00", "index$": 4 }, { "in": "query", "name": "trailer", "description": "The Git trailer to use for determining if commits are to be included in the changelog", "type": "string", "default": "Changelog", "required": false, "example": "Changelog", "index$": 5 }, { "in": "query", "name": "config_file", "description": "The file path to the configuration file as stored in the project's Git repository. Defaults to '.gitlab/changelog_config.yml'", "type": "string", "required": false, "example": ".gitlab/changelog_config.yml", "index$": 6 }, { "in": "query", "name": "config_file_ref", "description": "The git reference (for example, branch) where the changelog configuration file is defined. Defaults to the default repository branch.", "type": "string", "required": false, "example": "main", "index$": 7 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let api_entities_changelog_ref01_data = Object.values(setup.data.existing.api_entities_changelog)[0];
        // LOAD: skipped — no entity id field and load requires path params.
        // Entity-var is declared here so later flow steps still compile.
        const api_entities_changelog_ref01_ent = client.ApiEntitiesChangelog();
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/api_entities_changelog/ApiEntitiesChangelogTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['api_entities_changelog01', 'api_entities_changelog02', 'api_entities_changelog03', 'project01', 'project02', 'project03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_API_ENTITIES_CHANGELOG_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_API_ENTITIES_CHANGELOG_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_API_ENTITIES_CHANGELOG_ENTID'];
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
//# sourceMappingURL=ApiEntitiesChangelogEntity.test.js.map