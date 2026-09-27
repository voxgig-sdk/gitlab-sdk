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
(0, node_test_1.describe)('ApiEntitiesMetricImageEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.ApiEntitiesMetricImage();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['create', 'list', 'update']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'api_entities_metric_image.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": false, "t": "`$STRING`", "key$": "created_at", "index$": 0 }, "file_path": { "a": true, "h": "File Path", "n": "file_path", "r": false, "t": "`$STRING`", "key$": "file_path", "index$": 1 }, "filename": { "a": true, "h": "Filename", "n": "filename", "r": false, "t": "`$STRING`", "key$": "filename", "index$": 2 }, "id": { "a": true, "fo": "int32", "h": "Id", "n": "id", "r": false, "t": "`$INTEGER`", "key$": "id", "index$": 3 }, "url": { "a": true, "h": "Url", "n": "url", "r": false, "t": "`$STRING`", "key$": "url", "index$": 4 }, "url_text": { "a": true, "h": "Url Text", "n": "url_text", "r": false, "t": "`$STRING`", "key$": "url_text", "index$": 5 } }, "id": { "field": "id", "name": "id" }, "name": "api_entities_metric_image", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /api/v4/projects/{id}/alert_management_alerts/{alert_iid}/metric_images", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "ex": 23, "k": "param", "n": "alert_management_alert_id", "or": "alert_iid", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": 17, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "k": "query", "n": "file", "or": "file", "r": true, "t": "`$ANY`", "index$": 0 }, { "a": true, "ex": "https://example.com/metric", "k": "query", "n": "url", "or": "url", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": "An example metric", "k": "query", "n": "url_text", "or": "url_text", "r": false, "t": "`$ANY`", "index$": 2 }] }, "k": "http", "m": "POST", "o": "/api/v4/projects/{id}/alert_management_alerts/{alert_iid}/metric_images", "q": { "exist": ["alert_management_alert_id", "file", "project_id", "url", "url_text"] }, "r": { "param": { "alert_iid": "alert_management_alert_id", "id": "project_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "alert_management_alerts" }, { "var": "alert_management_alert_id" }, { "lit": "metric_images" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /api/v4/projects/{id}/alert_management_alerts/{alert_iid}/metric_images", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "ex": 23, "k": "param", "n": "alert_management_alert_id", "or": "alert_iid", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": 17, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/api/v4/projects/{id}/alert_management_alerts/{alert_iid}/metric_images", "q": { "exist": ["alert_management_alert_id", "project_id"] }, "r": { "param": { "alert_iid": "alert_management_alert_id", "id": "project_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "alert_management_alerts" }, { "var": "alert_management_alert_id" }, { "lit": "metric_images" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /api/v4/projects/{id}/alert_management_alerts/{alert_iid}/metric_images/{metric_image_id}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "ex": 23, "k": "param", "n": "alert_management_alert_id", "or": "alert_iid", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": 42, "k": "param", "n": "id", "or": "metric_image_id", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": 17, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 2 }], "query": [{ "a": true, "ex": "https://example.com/metric", "k": "query", "n": "url", "or": "url", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "An example metric", "k": "query", "n": "url_text", "or": "url_text", "r": false, "t": "`$ANY`", "index$": 1 }] }, "k": "http", "m": "PUT", "o": "/api/v4/projects/{id}/alert_management_alerts/{alert_iid}/metric_images/{metric_image_id}", "q": { "exist": ["alert_management_alert_id", "id", "project_id", "url", "url_text"] }, "r": { "param": { "alert_iid": "alert_management_alert_id", "id": "project_id", "metric_image_id": "id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "alert_management_alerts" }, { "var": "alert_management_alert_id" }, { "lit": "metric_images" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.project"]] }, "key$": "api_entities_metric_image", "name__orig": "api_entities_metric_image", "Name": "ApiEntitiesMetricImage", "name_": "api_entities_metric_image", "name-": "api-entities-metric-image", "NAME": "API_ENTITIES_METRIC_IMAGE", "index$": 99 }, { "active": true, "entity": "api_entities_metric_image", "key$": "BasicApiEntitiesMetricImageFlow", "kind": "basic", "name": "BasicApiEntitiesMetricImageFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "api_entities_metric_image_ref01" }, "m": { "alert_management_alert_id": "alert_management_alert01", "project_id": "project01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": { "alert_management_alert_id": "alert_management_alert01", "project_id": "project01" }, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "api_entities_metric_image_ref01" } }], "index$": 1 }, { "a": true, "d": { "alert_management_alert_id": "alert_management_alert01", "project_id": "project01" }, "i": { "ref": "api_entities_metric_image_ref01", "srcdatavar": "api_entities_metric_image_ref01_data", "suffix": "_up0", "textfield": "created_at" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-api_entities_metric_image_ref01" } }], "v": [], "index$": 2 }] }, 'ApiEntitiesMetricImage', { "POST /api/v4/projects/{id}/alert_management_alerts/{alert_iid}/metric_images": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project", "type": "string", "required": true, "example": 17, "index$": 0 }, { "in": "path", "name": "alert_iid", "description": "The IID of the Alert", "type": "integer", "format": "int32", "required": true, "example": 23, "index$": 1 }, { "in": "formData", "name": "file", "description": "The image file to be uploaded", "type": "file", "required": true, "index$": 2 }, { "in": "formData", "name": "url", "description": "The url to view more metric info", "type": "string", "required": false, "example": "https://example.com/metric", "index$": 3 }, { "in": "formData", "name": "url_text", "description": "A description of the image or URL", "type": "string", "required": false, "example": "An example metric", "index$": 4 }] }, "GET /api/v4/projects/{id}/alert_management_alerts/{alert_iid}/metric_images": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project", "type": "string", "required": true, "example": 17, "index$": 0 }, { "in": "path", "name": "alert_iid", "description": "The IID of the Alert", "type": "integer", "format": "int32", "required": true, "example": 23, "index$": 1 }] }, "PUT /api/v4/projects/{id}/alert_management_alerts/{alert_iid}/metric_images/{metric_image_id}": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project", "type": "string", "required": true, "example": 17, "index$": 0 }, { "in": "path", "name": "alert_iid", "description": "The IID of the Alert", "type": "integer", "format": "int32", "required": true, "example": 23, "index$": 1 }, { "in": "path", "name": "metric_image_id", "description": "The ID of metric image", "type": "integer", "format": "int32", "required": true, "example": 42, "index$": 2 }, { "in": "formData", "name": "url", "description": "The url to view more metric info", "type": "string", "required": false, "example": "https://example.com/metric", "index$": 3 }, { "in": "formData", "name": "url_text", "description": "A description of the image or URL", "type": "string", "required": false, "example": "An example metric", "index$": 4 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const api_entities_metric_image_ref01_ent = client.ApiEntitiesMetricImage();
        let api_entities_metric_image_ref01_data = setup.data.new.api_entities_metric_image['api_entities_metric_image_ref01'];
        api_entities_metric_image_ref01_data['alert_management_alert_id'] = setup.idmap['alert_management_alert01'];
        api_entities_metric_image_ref01_data['project_id'] = setup.idmap['project01'];
        api_entities_metric_image_ref01_data = (await api_entities_metric_image_ref01_ent.create(api_entities_metric_image_ref01_data)).data();
        (0, node_assert_1.default)(null != api_entities_metric_image_ref01_data.id);
        // LIST
        const api_entities_metric_image_ref01_match = {};
        api_entities_metric_image_ref01_match['alert_management_alert_id'] = setup.idmap['alert_management_alert01'];
        api_entities_metric_image_ref01_match['project_id'] = setup.idmap['project01'];
        const api_entities_metric_image_ref01_list = (await api_entities_metric_image_ref01_ent.list(api_entities_metric_image_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(api_entities_metric_image_ref01_list, { id: api_entities_metric_image_ref01_data.id })));
        // UPDATE
        const api_entities_metric_image_ref01_data_up0 = {};
        api_entities_metric_image_ref01_data_up0.id = api_entities_metric_image_ref01_data.id;
        api_entities_metric_image_ref01_data_up0['alert_management_alert_id'] = setup.idmap['alert_management_alert_id'];
        api_entities_metric_image_ref01_data_up0['project_id'] = setup.idmap['project_id'];
        const api_entities_metric_image_ref01_markdef_up0 = { name: 'created_at', value: 'Mark01-api_entities_metric_image_ref01_' + setup.now };
        api_entities_metric_image_ref01_data_up0[api_entities_metric_image_ref01_markdef_up0.name] = api_entities_metric_image_ref01_markdef_up0.value;
        const api_entities_metric_image_ref01_resdata_up0 = (await api_entities_metric_image_ref01_ent.update(api_entities_metric_image_ref01_data_up0)).data();
        (0, node_assert_1.default)(api_entities_metric_image_ref01_resdata_up0.id === api_entities_metric_image_ref01_data_up0.id);
        (0, node_assert_1.default)(api_entities_metric_image_ref01_resdata_up0[api_entities_metric_image_ref01_markdef_up0.name] === api_entities_metric_image_ref01_markdef_up0.value);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/api_entities_metric_image/ApiEntitiesMetricImageTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['api_entities_metric_image01', 'api_entities_metric_image02', 'api_entities_metric_image03', 'project01', 'project02', 'project03', 'alert_management_alert01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_API_ENTITIES_METRIC_IMAGE_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_API_ENTITIES_METRIC_IMAGE_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_API_ENTITIES_METRIC_IMAGE_ENTID'];
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
//# sourceMappingURL=ApiEntitiesMetricImageEntity.test.js.map