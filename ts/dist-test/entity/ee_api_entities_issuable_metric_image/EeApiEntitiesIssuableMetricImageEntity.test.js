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
(0, node_test_1.describe)('EeApiEntitiesIssuableMetricImageEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.EeApiEntitiesIssuableMetricImage();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['create', 'update', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'ee_api_entities_issuable_metric_image.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "created_at": { "a": true, "h": "Created At", "n": "created_at", "r": false, "t": "`$STRING`", "key$": "created_at", "index$": 0 }, "file_path": { "a": true, "h": "File Path", "n": "file_path", "r": false, "t": "`$STRING`", "key$": "file_path", "index$": 1 }, "filename": { "a": true, "h": "Filename", "n": "filename", "r": false, "t": "`$STRING`", "key$": "filename", "index$": 2 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 3 }, "url": { "a": true, "h": "Url", "n": "url", "r": false, "t": "`$STRING`", "key$": "url", "index$": 4 }, "url_text": { "a": true, "h": "Url Text", "n": "url_text", "r": false, "t": "`$STRING`", "key$": "url_text", "index$": 5 } }, "id": { "field": "id", "name": "id" }, "name": "ee_api_entities_issuable_metric_image", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /api/v4/projects/{id}/issues/{issue_iid}/metric_images", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "issue_id", "or": "issue_iid", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "k": "query", "n": "post_api_v4_projects_id_issues_issue_iid_metric_image", "or": "post_api_v4_projects_id_issues_issue_iid_metric_image", "r": true, "t": "`$OBJECT`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/v4/projects/{id}/issues/{issue_iid}/metric_images", "q": { "exist": ["issue_id", "post_api_v4_projects_id_issues_issue_iid_metric_image", "project_id"] }, "r": { "param": { "id": "project_id", "issue_iid": "issue_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "issues" }, { "var": "issue_id" }, { "lit": "metric_images" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /api/v4/projects/{id}/issues/{issue_iid}/metric_images/{metric_image_id}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "metric_image_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "issue_id", "or": "issue_iid", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 2 }] }, "k": "http", "m": "DELETE", "o": "/api/v4/projects/{id}/issues/{issue_iid}/metric_images/{metric_image_id}", "q": { "exist": ["id", "issue_id", "project_id"] }, "r": { "param": { "id": "project_id", "issue_iid": "issue_id", "metric_image_id": "id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "issues" }, { "var": "issue_id" }, { "lit": "metric_images" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /api/v4/projects/{id}/issues/{issue_iid}/metric_images/{metric_image_id}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "metric_image_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "issue_id", "or": "issue_iid", "r": true, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 2 }], "query": [{ "a": true, "k": "query", "n": "put_api_v4_projects_id_issues_issue_iid_metric_images_metric_image_id", "or": "put_api_v4_projects_id_issues_issue_iid_metric_images_metric_image_id", "r": true, "t": "`$OBJECT`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/api/v4/projects/{id}/issues/{issue_iid}/metric_images/{metric_image_id}", "q": { "exist": ["id", "issue_id", "project_id", "put_api_v4_projects_id_issues_issue_iid_metric_images_metric_image_id"] }, "r": { "param": { "id": "project_id", "issue_iid": "issue_id", "metric_image_id": "id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "issues" }, { "var": "issue_id" }, { "lit": "metric_images" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.project"]] }, "key$": "ee_api_entities_issuable_metric_image", "name__orig": "ee_api_entities_issuable_metric_image", "Name": "EeApiEntitiesIssuableMetricImage", "name_": "ee_api_entities_issuable_metric_image", "name-": "ee-api-entities-issuable-metric-image", "NAME": "EE_API_ENTITIES_ISSUABLE_METRIC_IMAGE", "index$": 199 }, { "active": true, "entity": "ee_api_entities_issuable_metric_image", "key$": "BasicEeApiEntitiesIssuableMetricImageFlow", "kind": "basic", "name": "BasicEeApiEntitiesIssuableMetricImageFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "ee_api_entities_issuable_metric_image_ref01" }, "m": { "issue_id": "issue01", "project_id": "project01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": { "issue_id": "issue01", "project_id": "project01" }, "i": { "ref": "ee_api_entities_issuable_metric_image_ref01", "srcdatavar": "ee_api_entities_issuable_metric_image_ref01_data", "suffix": "_up0", "textfield": "created_at" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-ee_api_entities_issuable_metric_image_ref01" } }], "v": [], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "ee_api_entities_issuable_metric_image_ref01", "suffix": "_rm0" }, "m": { "id": "ee_api_entities_issuable_metric_image01", "issue_id": "issue01", "project_id": "project01" }, "o": "remove", "s": [], "v": [], "index$": 2 }] }, 'EeApiEntitiesIssuableMetricImage', { "POST /api/v4/projects/{id}/issues/{issue_iid}/metric_images": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project", "type": "string", "required": true, "index$": 0 }, { "in": "path", "name": "issue_iid", "type": "integer", "format": "int32", "required": true, "index$": 1 }, { "name": "postApiV4ProjectsIdIssuesIssueIidMetricImages", "in": "body", "required": true, "schema": { "type": "object", "properties": { "file": { "type": "file", "description": "The image file to be uploaded" }, "url": { "type": "string", "description": "The url to view more metric info" }, "url_text": { "type": "string", "description": "A description of the image or URL" } }, "required": ["file"], "description": "Upload a metric image for an issue", "x-ref": "#/definitions/postApiV4ProjectsIdIssuesIssueIidMetricImages" }, "index$": 2 }] }, "DELETE /api/v4/projects/{id}/issues/{issue_iid}/metric_images/{metric_image_id}": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project", "type": "string", "required": true, "index$": 0 }, { "in": "path", "name": "metric_image_id", "description": "The ID of metric image", "type": "integer", "format": "int32", "required": true, "index$": 1 }, { "in": "path", "name": "issue_iid", "type": "integer", "format": "int32", "required": true, "index$": 2 }] }, "PUT /api/v4/projects/{id}/issues/{issue_iid}/metric_images/{metric_image_id}": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project", "type": "string", "required": true, "index$": 0 }, { "in": "path", "name": "metric_image_id", "description": "The ID of metric image", "type": "integer", "format": "int32", "required": true, "index$": 1 }, { "in": "path", "name": "issue_iid", "type": "integer", "format": "int32", "required": true, "index$": 2 }, { "name": "putApiV4ProjectsIdIssuesIssueIidMetricImagesMetricImageId", "in": "body", "required": true, "schema": { "type": "object", "properties": { "url": { "type": "string", "description": "The url to view more metric info" }, "url_text": { "type": "string", "description": "A description of the image or URL" } }, "description": "Update a metric image for an issue", "x-ref": "#/definitions/putApiV4ProjectsIdIssuesIssueIidMetricImagesMetricImageId" }, "index$": 3 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const ee_api_entities_issuable_metric_image_ref01_ent = client.EeApiEntitiesIssuableMetricImage();
        let ee_api_entities_issuable_metric_image_ref01_data = setup.data.new.ee_api_entities_issuable_metric_image['ee_api_entities_issuable_metric_image_ref01'];
        ee_api_entities_issuable_metric_image_ref01_data['issue_id'] = setup.idmap['issue01'];
        ee_api_entities_issuable_metric_image_ref01_data['project_id'] = setup.idmap['project01'];
        ee_api_entities_issuable_metric_image_ref01_data = (await ee_api_entities_issuable_metric_image_ref01_ent.create(ee_api_entities_issuable_metric_image_ref01_data)).data();
        (0, node_assert_1.default)(null != ee_api_entities_issuable_metric_image_ref01_data.id);
        // UPDATE
        const ee_api_entities_issuable_metric_image_ref01_data_up0 = {};
        ee_api_entities_issuable_metric_image_ref01_data_up0.id = ee_api_entities_issuable_metric_image_ref01_data.id;
        ee_api_entities_issuable_metric_image_ref01_data_up0['issue_id'] = setup.idmap['issue_id'];
        ee_api_entities_issuable_metric_image_ref01_data_up0['project_id'] = setup.idmap['project_id'];
        const ee_api_entities_issuable_metric_image_ref01_markdef_up0 = { name: 'created_at', value: 'Mark01-ee_api_entities_issuable_metric_image_ref01_' + setup.now };
        ee_api_entities_issuable_metric_image_ref01_data_up0[ee_api_entities_issuable_metric_image_ref01_markdef_up0.name] = ee_api_entities_issuable_metric_image_ref01_markdef_up0.value;
        const ee_api_entities_issuable_metric_image_ref01_resdata_up0 = (await ee_api_entities_issuable_metric_image_ref01_ent.update(ee_api_entities_issuable_metric_image_ref01_data_up0)).data();
        (0, node_assert_1.default)(ee_api_entities_issuable_metric_image_ref01_resdata_up0.id === ee_api_entities_issuable_metric_image_ref01_data_up0.id);
        (0, node_assert_1.default)(ee_api_entities_issuable_metric_image_ref01_resdata_up0[ee_api_entities_issuable_metric_image_ref01_markdef_up0.name] === ee_api_entities_issuable_metric_image_ref01_markdef_up0.value);
        // REMOVE
        const ee_api_entities_issuable_metric_image_ref01_match_rm0 = { id: ee_api_entities_issuable_metric_image_ref01_data.id };
        await ee_api_entities_issuable_metric_image_ref01_ent.remove(ee_api_entities_issuable_metric_image_ref01_match_rm0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/ee_api_entities_issuable_metric_image/EeApiEntitiesIssuableMetricImageTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['ee_api_entities_issuable_metric_image01', 'ee_api_entities_issuable_metric_image02', 'ee_api_entities_issuable_metric_image03', 'project01', 'project02', 'project03', 'issue01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_EE_API_ENTITIES_ISSUABLE_METRIC_IMAGE_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_EE_API_ENTITIES_ISSUABLE_METRIC_IMAGE_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_EE_API_ENTITIES_ISSUABLE_METRIC_IMAGE_ENTID'];
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
//# sourceMappingURL=EeApiEntitiesIssuableMetricImageEntity.test.js.map