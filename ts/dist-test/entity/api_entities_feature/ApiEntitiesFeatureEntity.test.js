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
(0, node_test_1.describe)('ApiEntitiesFeatureEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.ApiEntitiesFeature();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['create', 'list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'api_entities_feature.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "definition", "req": false, "short": "API_Entities_Feature_Definition model", "type": "`$OBJECT`", "index$": 0 }, { "active": true, "name": "gates", "req": false, "type": "`$OBJECT`", "index$": 1 }, { "active": true, "name": "id", "req": false, "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "name", "req": false, "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "state", "req": false, "type": "`$STRING`", "index$": 4 }], "id": { "field": "id", "name": "id" }, "name": "api_entities_feature", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "name", "reqd": true, "type": "`$STRING`", "index$": 0 }], "query": [{ "active": true, "kind": "query", "name": "post_api_v4_features_name", "orig": "post_api_v4_features_name", "reqd": true, "type": "`$OBJECT`", "index$": 0 }] }, "contract": { "id": "POST /api/v4/features/{name}", "json": "{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4FeaturesName\",\"parameters\":[{\"format\":\"int32\",\"in\":\"path\",\"name\":\"name\",\"required\":true,\"type\":\"integer\"},{\"in\":\"body\",\"name\":\"postApiV4FeaturesName\",\"required\":true,\"schema\":{\"description\":\"Set or create a feature\",\"properties\":{\"feature_group\":{\"description\":\"A Feature group name\",\"type\":\"string\"},\"force\":{\"description\":\"Skip feature flag validation checks, such as a YAML definition\",\"type\":\"boolean\"},\"group\":{\"description\":\"A GitLab group's path, for example `gitlab-org`, or comma-separated multiple group paths\",\"type\":\"string\"},\"key\":{\"description\":\"`percentage_of_actors` or `percentage_of_time` (default)\",\"type\":\"string\"},\"namespace\":{\"description\":\"A GitLab group or user namespace's path, for example `john-doe`, or comma-separated multiple namespace paths. Introduced in GitLab 15.0.\",\"type\":\"string\"},\"project\":{\"description\":\"A projects path, for example `gitlab-org/gitlab-foss`, or comma-separated multiple project paths\",\"type\":\"string\"},\"repository\":{\"description\":\"A repository path, for example `gitlab-org/gitlab-test.git`, `gitlab-org/gitlab-test.wiki.git`, `snippets/21.git`, to name a few. Use comma to separate multiple repository paths\",\"type\":\"string\"},\"user\":{\"description\":\"A GitLab username or comma-separated multiple usernames\",\"type\":\"string\"},\"value\":{\"description\":\"`true` or `false` to enable/disable, or an integer for percentage of time\",\"type\":\"string\"}},\"required\":[\"value\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"Set or create a feature\",\"schema\":{\"description\":\"API_Entities_Feature model\",\"properties\":{\"definition\":{\"description\":\"API_Entities_Feature_Definition model\",\"properties\":{\"default_enabled\":{\"type\":\"string\"},\"feature_issue_url\":{\"type\":\"string\"},\"group\":{\"type\":\"string\"},\"intended_to_rollout_by\":{\"type\":\"string\"},\"introduced_by_url\":{\"type\":\"string\"},\"log_state_changes\":{\"type\":\"string\"},\"milestone\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"rollout_issue_url\":{\"type\":\"string\"},\"type\":{\"type\":\"string\"}},\"type\":\"object\"},\"gates\":{\"properties\":{\"key\":{\"example\":\"percentage_of_actors\",\"type\":\"string\"},\"value\":{\"example\":34,\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"},\"name\":{\"example\":\"experimental_feature\",\"type\":\"string\"},\"state\":{\"example\":\"off\",\"type\":\"string\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Bad request\"},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "POST", "orig": "/api/v4/features/{name}", "rename": { "param": { "name": "id" } }, "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "features" }, { "var": "id" }], "select": { "exist": ["id", "post_api_v4_features_name"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": {}, "contract": { "id": "GET /api/v4/features", "json": "{\"operationId\":\"getApiV4Features\",\"parameters\":[],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"List all features\",\"schema\":{\"items\":{\"description\":\"API_Entities_Feature model\",\"properties\":{\"definition\":{\"description\":\"API_Entities_Feature_Definition model\",\"properties\":{\"default_enabled\":{\"type\":\"string\"},\"feature_issue_url\":{\"type\":\"string\"},\"group\":{\"type\":\"string\"},\"intended_to_rollout_by\":{\"type\":\"string\"},\"introduced_by_url\":{\"type\":\"string\"},\"log_state_changes\":{\"type\":\"string\"},\"milestone\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"rollout_issue_url\":{\"type\":\"string\"},\"type\":{\"type\":\"string\"}},\"type\":\"object\"},\"gates\":{\"properties\":{\"key\":{\"example\":\"percentage_of_actors\",\"type\":\"string\"},\"value\":{\"example\":34,\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"},\"name\":{\"example\":\"experimental_feature\",\"type\":\"string\"},\"state\":{\"example\":\"off\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/v4/features", "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "features" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "api_entities_feature", "name__orig": "api_entities_feature", "Name": "ApiEntitiesFeature", "name_": "api_entities_feature", "name-": "api-entities-feature", "NAME": "API_ENTITIES_FEATURE", "index$": 72 }, { "active": true, "entity": "api_entities_feature", "key$": "BasicApiEntitiesFeatureFlow", "kind": "basic", "name": "BasicApiEntitiesFeatureFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "api_entities_feature_ref01" }, "match": { "name": "name01" }, "op": "create", "spec": [], "valid": [], "index$": 0 }, { "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "api_entities_feature_ref01" } }], "index$": 1 }] }, 'ApiEntitiesFeature');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const api_entities_feature_ref01_ent = client.ApiEntitiesFeature();
        let api_entities_feature_ref01_data = setup.data.new.api_entities_feature['api_entities_feature_ref01'];
        api_entities_feature_ref01_data['name'] = setup.idmap['name01'];
        api_entities_feature_ref01_data = (await api_entities_feature_ref01_ent.create(api_entities_feature_ref01_data)).data();
        (0, node_assert_1.default)(null != api_entities_feature_ref01_data.id);
        // LIST
        const api_entities_feature_ref01_match = {};
        const api_entities_feature_ref01_list = (await api_entities_feature_ref01_ent.list(api_entities_feature_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(api_entities_feature_ref01_list, { id: api_entities_feature_ref01_data.id })));
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/api_entities_feature/ApiEntitiesFeatureTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['api_entities_feature01', 'api_entities_feature02', 'api_entities_feature03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_API_ENTITIES_FEATURE_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_API_ENTITIES_FEATURE_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_API_ENTITIES_FEATURE_ENTID'];
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
//# sourceMappingURL=ApiEntitiesFeatureEntity.test.js.map