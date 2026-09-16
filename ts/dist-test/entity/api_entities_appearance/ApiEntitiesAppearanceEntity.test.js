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
(0, node_test_1.describe)('ApiEntitiesAppearanceEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.ApiEntitiesAppearance();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'api_entities_appearance.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "description", "req": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "email_header_and_footer_enabled", "req": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "favicon", "req": false, "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "footer_message", "req": false, "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "header_logo", "req": false, "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "header_message", "req": false, "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "logo", "req": false, "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "member_guidelines", "req": false, "type": "`$STRING`", "index$": 7 }, { "active": true, "name": "message_background_color", "req": false, "type": "`$STRING`", "index$": 8 }, { "active": true, "name": "message_font_color", "req": false, "type": "`$STRING`", "index$": 9 }, { "active": true, "name": "new_project_guidelines", "req": false, "type": "`$STRING`", "index$": 10 }, { "active": true, "name": "profile_image_guidelines", "req": false, "type": "`$STRING`", "index$": 11 }, { "active": true, "name": "pwa_description", "req": false, "type": "`$STRING`", "index$": 12 }, { "active": true, "name": "pwa_icon", "req": false, "type": "`$STRING`", "index$": 13 }, { "active": true, "name": "pwa_name", "req": false, "type": "`$STRING`", "index$": 14 }, { "active": true, "name": "pwa_short_name", "req": false, "type": "`$STRING`", "index$": 15 }, { "active": true, "name": "title", "req": false, "type": "`$STRING`", "index$": 16 }], "name": "api_entities_appearance", "op": { "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": {}, "contract": { "id": "GET /api/v4/application/appearance", "json": "{\"operationId\":\"getApiV4ApplicationAppearance\",\"parameters\":[],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get the current appearance\",\"schema\":{\"description\":\"API_Entities_Appearance model\",\"properties\":{\"description\":{\"type\":\"string\"},\"email_header_and_footer_enabled\":{\"type\":\"string\"},\"favicon\":{\"type\":\"string\"},\"footer_message\":{\"type\":\"string\"},\"header_logo\":{\"type\":\"string\"},\"header_message\":{\"type\":\"string\"},\"logo\":{\"type\":\"string\"},\"member_guidelines\":{\"type\":\"string\"},\"message_background_color\":{\"type\":\"string\"},\"message_font_color\":{\"type\":\"string\"},\"new_project_guidelines\":{\"type\":\"string\"},\"profile_image_guidelines\":{\"type\":\"string\"},\"pwa_description\":{\"type\":\"string\"},\"pwa_icon\":{\"type\":\"string\"},\"pwa_name\":{\"type\":\"string\"},\"pwa_short_name\":{\"type\":\"string\"},\"title\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/v4/application/appearance", "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "application" }, { "lit": "appearance" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "update": { "input": "data", "name": "update", "points": [{ "active": true, "args": { "query": [{ "active": true, "kind": "query", "name": "description", "orig": "description", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "query", "name": "email_header_and_footer_enabled", "orig": "email_header_and_footer_enabled", "reqd": false, "type": "`$ANY`", "index$": 1 }, { "active": true, "kind": "query", "name": "favicon", "orig": "favicon", "reqd": false, "type": "`$ANY`", "index$": 2 }, { "active": true, "kind": "query", "name": "footer_message", "orig": "footer_message", "reqd": false, "type": "`$ANY`", "index$": 3 }, { "active": true, "kind": "query", "name": "header_logo", "orig": "header_logo", "reqd": false, "type": "`$ANY`", "index$": 4 }, { "active": true, "kind": "query", "name": "header_message", "orig": "header_message", "reqd": false, "type": "`$ANY`", "index$": 5 }, { "active": true, "kind": "query", "name": "logo", "orig": "logo", "reqd": false, "type": "`$ANY`", "index$": 6 }, { "active": true, "kind": "query", "name": "member_guideline", "orig": "member_guideline", "reqd": false, "type": "`$ANY`", "index$": 7 }, { "active": true, "kind": "query", "name": "message_background_color", "orig": "message_background_color", "reqd": false, "type": "`$ANY`", "index$": 8 }, { "active": true, "kind": "query", "name": "message_font_color", "orig": "message_font_color", "reqd": false, "type": "`$ANY`", "index$": 9 }, { "active": true, "kind": "query", "name": "new_project_guideline", "orig": "new_project_guideline", "reqd": false, "type": "`$ANY`", "index$": 10 }, { "active": true, "kind": "query", "name": "profile_image_guideline", "orig": "profile_image_guideline", "reqd": false, "type": "`$ANY`", "index$": 11 }, { "active": true, "kind": "query", "name": "pwa_description", "orig": "pwa_description", "reqd": false, "type": "`$ANY`", "index$": 12 }, { "active": true, "kind": "query", "name": "pwa_icon", "orig": "pwa_icon", "reqd": false, "type": "`$ANY`", "index$": 13 }, { "active": true, "kind": "query", "name": "pwa_name", "orig": "pwa_name", "reqd": false, "type": "`$ANY`", "index$": 14 }, { "active": true, "kind": "query", "name": "pwa_short_name", "orig": "pwa_short_name", "reqd": false, "type": "`$ANY`", "index$": 15 }, { "active": true, "kind": "query", "name": "title", "orig": "title", "reqd": false, "type": "`$STRING`", "index$": 16 }] }, "contract": { "id": "PUT /api/v4/application/appearance", "json": "{\"consumes\":[\"multipart/form-data\"],\"operationId\":\"putApiV4ApplicationAppearance\",\"parameters\":[{\"description\":\"Instance title on the sign in / sign up page\",\"in\":\"formData\",\"name\":\"title\",\"required\":false,\"type\":\"string\"},{\"description\":\"Markdown text shown on the sign in / sign up page\",\"in\":\"formData\",\"name\":\"description\",\"required\":false,\"type\":\"string\"},{\"description\":\"Name of the Progressive Web App\",\"in\":\"formData\",\"name\":\"pwa_name\",\"required\":false,\"type\":\"string\"},{\"description\":\"Optional, short name for Progressive Web App\",\"in\":\"formData\",\"name\":\"pwa_short_name\",\"required\":false,\"type\":\"string\"},{\"description\":\"An explanation of what the Progressive Web App does\",\"in\":\"formData\",\"name\":\"pwa_description\",\"required\":false,\"type\":\"string\"},{\"description\":\"Instance image used on the sign in / sign up page\",\"in\":\"formData\",\"name\":\"logo\",\"required\":false,\"type\":\"file\"},{\"description\":\"Icon used for Progressive Web App\",\"in\":\"formData\",\"name\":\"pwa_icon\",\"required\":false,\"type\":\"file\"},{\"description\":\"Instance image used for the main navigation bar\",\"in\":\"formData\",\"name\":\"header_logo\",\"required\":false,\"type\":\"file\"},{\"description\":\"Instance favicon in .ico/.png format\",\"in\":\"formData\",\"name\":\"favicon\",\"required\":false,\"type\":\"file\"},{\"description\":\"Markdown text shown on the members page of a group or project\",\"in\":\"formData\",\"name\":\"member_guidelines\",\"required\":false,\"type\":\"string\"},{\"description\":\"Markdown text shown on the new project page\",\"in\":\"formData\",\"name\":\"new_project_guidelines\",\"required\":false,\"type\":\"string\"},{\"description\":\"Markdown text shown on the profile page below Public Avatar\",\"in\":\"formData\",\"name\":\"profile_image_guidelines\",\"required\":false,\"type\":\"string\"},{\"description\":\"Message within the system header bar\",\"in\":\"formData\",\"name\":\"header_message\",\"required\":false,\"type\":\"string\"},{\"description\":\"Message within the system footer bar\",\"in\":\"formData\",\"name\":\"footer_message\",\"required\":false,\"type\":\"string\"},{\"description\":\"Background color for the system header / footer bar\",\"in\":\"formData\",\"name\":\"message_background_color\",\"required\":false,\"type\":\"string\"},{\"description\":\"Font color for the system header / footer bar\",\"in\":\"formData\",\"name\":\"message_font_color\",\"required\":false,\"type\":\"string\"},{\"description\":\"Add header and footer to all outgoing emails if enabled\",\"in\":\"formData\",\"name\":\"email_header_and_footer_enabled\",\"required\":false,\"type\":\"boolean\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Modify appearance\",\"schema\":{\"description\":\"API_Entities_Appearance model\",\"properties\":{\"description\":{\"type\":\"string\"},\"email_header_and_footer_enabled\":{\"type\":\"string\"},\"favicon\":{\"type\":\"string\"},\"footer_message\":{\"type\":\"string\"},\"header_logo\":{\"type\":\"string\"},\"header_message\":{\"type\":\"string\"},\"logo\":{\"type\":\"string\"},\"member_guidelines\":{\"type\":\"string\"},\"message_background_color\":{\"type\":\"string\"},\"message_font_color\":{\"type\":\"string\"},\"new_project_guidelines\":{\"type\":\"string\"},\"profile_image_guidelines\":{\"type\":\"string\"},\"pwa_description\":{\"type\":\"string\"},\"pwa_icon\":{\"type\":\"string\"},\"pwa_name\":{\"type\":\"string\"},\"pwa_short_name\":{\"type\":\"string\"},\"title\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "PUT", "orig": "/api/v4/application/appearance", "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "application" }, { "lit": "appearance" }], "select": { "exist": ["description", "email_header_and_footer_enabled", "favicon", "footer_message", "header_logo", "header_message", "logo", "member_guideline", "message_background_color", "message_font_color", "new_project_guideline", "profile_image_guideline", "pwa_description", "pwa_icon", "pwa_name", "pwa_short_name", "title"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [] }, "key$": "api_entities_appearance", "name__orig": "api_entities_appearance", "Name": "ApiEntitiesAppearance", "name_": "api_entities_appearance", "name-": "api-entities-appearance", "NAME": "API_ENTITIES_APPEARANCE", "index$": 3 }, { "active": true, "entity": "api_entities_appearance", "key$": "BasicApiEntitiesAppearanceFlow", "kind": "basic", "name": "BasicApiEntitiesAppearanceFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "api_entities_appearance_ref01", "srcdatavar": "api_entities_appearance_ref01_data", "suffix": "_up0", "textfield": "description" }, "match": {}, "op": "update", "spec": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-api_entities_appearance_ref01" } }], "valid": [], "index$": 0 }, { "active": true, "data": {}, "input": { "ref": "api_entities_appearance_ref01", "srcdatavar": "api_entities_appearance_ref01_data", "suffix": "_dt0" }, "match": {}, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-api_entities_appearance_ref01" } }], "index$": 1 }] }, 'ApiEntitiesAppearance');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let api_entities_appearance_ref01_data = Object.values(setup.data.existing.api_entities_appearance)[0];
        // UPDATE
        const api_entities_appearance_ref01_ent = client.ApiEntitiesAppearance();
        const api_entities_appearance_ref01_data_up0 = {};
        const api_entities_appearance_ref01_markdef_up0 = { name: 'description', value: 'Mark01-api_entities_appearance_ref01_' + setup.now };
        api_entities_appearance_ref01_data_up0[api_entities_appearance_ref01_markdef_up0.name] = api_entities_appearance_ref01_markdef_up0.value;
        const api_entities_appearance_ref01_resdata_up0 = (await api_entities_appearance_ref01_ent.update(api_entities_appearance_ref01_data_up0)).data();
        (0, node_assert_1.default)(null != api_entities_appearance_ref01_resdata_up0);
        (0, node_assert_1.default)(api_entities_appearance_ref01_resdata_up0[api_entities_appearance_ref01_markdef_up0.name] === api_entities_appearance_ref01_markdef_up0.value);
        // LOAD
        const api_entities_appearance_ref01_match_dt0 = {};
        const api_entities_appearance_ref01_data_dt0 = (await api_entities_appearance_ref01_ent.load(api_entities_appearance_ref01_match_dt0)).data();
        (0, node_assert_1.default)(null != api_entities_appearance_ref01_data_dt0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/api_entities_appearance/ApiEntitiesAppearanceTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['api_entities_appearance01', 'api_entities_appearance02', 'api_entities_appearance03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_API_ENTITIES_APPEARANCE_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_API_ENTITIES_APPEARANCE_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_API_ENTITIES_APPEARANCE_ENTID'];
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
//# sourceMappingURL=ApiEntitiesAppearanceEntity.test.js.map