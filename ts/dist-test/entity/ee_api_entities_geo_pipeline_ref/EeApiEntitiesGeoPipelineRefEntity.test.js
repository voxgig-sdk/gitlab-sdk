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
(0, node_test_1.describe)('EeApiEntitiesGeoPipelineRefEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.EeApiEntitiesGeoPipelineRef();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'ee_api_entities_geo_pipeline_ref.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "pipeline_refs": { "a": true, "h": "Pipeline Refs", "n": "pipeline_refs", "r": false, "t": "`$ARRAY`", "key$": "pipeline_refs", "index$": 0 } }, "name": "ee_api_entities_geo_pipeline_ref", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /api/v4/geo/repositories/{gl_repository}/pipeline_refs", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "gl_repository", "or": "gl_repository", "r": true, "t": "`$ANY`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/api/v4/geo/repositories/{gl_repository}/pipeline_refs", "q": { "exist": ["gl_repository"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "geo" }, { "lit": "repositories" }, { "var": "gl_repository" }, { "lit": "pipeline_refs" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "ee_api_entities_geo_pipeline_ref", "name__orig": "ee_api_entities_geo_pipeline_ref", "Name": "EeApiEntitiesGeoPipelineRef", "name_": "ee_api_entities_geo_pipeline_ref", "name-": "ee-api-entities-geo-pipeline-ref", "NAME": "EE_API_ENTITIES_GEO_PIPELINE_REF", "index$": 198 }, { "active": true, "entity": "ee_api_entities_geo_pipeline_ref", "key$": "BasicEeApiEntitiesGeoPipelineRefFlow", "kind": "basic", "name": "BasicEeApiEntitiesGeoPipelineRefFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": { "gl_repository": "gl_repository01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "ee_api_entities_geo_pipeline_ref_ref01" } }], "index$": 0 }] }, 'EeApiEntitiesGeoPipelineRef', { "GET /api/v4/geo/repositories/{gl_repository}/pipeline_refs": { "protocol": "http", "parameters": [{ "in": "path", "name": "gl_repository", "description": "The repository to check", "type": "string", "required": true, "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let ee_api_entities_geo_pipeline_ref_ref01_data = Object.values(setup.data.existing.ee_api_entities_geo_pipeline_ref)[0];
        // LIST
        const ee_api_entities_geo_pipeline_ref_ref01_ent = client.EeApiEntitiesGeoPipelineRef();
        const ee_api_entities_geo_pipeline_ref_ref01_match = {};
        ee_api_entities_geo_pipeline_ref_ref01_match['gl_repository'] = setup.idmap['gl_repository01'];
        const ee_api_entities_geo_pipeline_ref_ref01_list = (await ee_api_entities_geo_pipeline_ref_ref01_ent.list(ee_api_entities_geo_pipeline_ref_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/ee_api_entities_geo_pipeline_ref/EeApiEntitiesGeoPipelineRefTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['ee_api_entities_geo_pipeline_ref01', 'ee_api_entities_geo_pipeline_ref02', 'ee_api_entities_geo_pipeline_ref03', 'gl_repository01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_EE_API_ENTITIES_GEO_PIPELINE_REF_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_EE_API_ENTITIES_GEO_PIPELINE_REF_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_EE_API_ENTITIES_GEO_PIPELINE_REF_ENTID'];
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
//# sourceMappingURL=EeApiEntitiesGeoPipelineRefEntity.test.js.map