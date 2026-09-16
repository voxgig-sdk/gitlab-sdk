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
(0, node_test_1.describe)('ApiEntitiesIntegrationEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.ApiEntitiesIntegration();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'api_entities_integration.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "id", "req": false, "type": "`$STRING`", "index$": 0 }], "id": { "field": "id", "name": "id" }, "name": "api_entities_integration", "op": { "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "group_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "param", "name": "id", "orig": "slug", "reqd": true, "type": "`$STRING`", "index$": 1 }] }, "contract": { "id": "GET /api/v4/groups/{id}/integrations/{slug}", "json": "{\"operationId\":\"getApiV4GroupsIdIntegrationsSlug\",\"parameters\":[{\"description\":\"The name of the integration\",\"enum\":[\"apple-app-store\",\"asana\",\"assembla\",\"bamboo\",\"bugzilla\",\"buildkite\",\"campfire\",\"confluence\",\"custom-issue-tracker\",\"datadog\",\"diffblue-cover\",\"discord\",\"drone-ci\",\"emails-on-push\",\"external-wiki\",\"gitlab-slack-application\",\"google-play\",\"hangouts-chat\",\"harbor\",\"irker\",\"jenkins\",\"jira\",\"jira-cloud-app\",\"linear\",\"matrix\",\"mattermost-slash-commands\",\"slack-slash-commands\",\"packagist\",\"phorge\",\"pipelines-email\",\"pivotaltracker\",\"pumble\",\"pushover\",\"redmine\",\"ewm\",\"youtrack\",\"clickup\",\"slack\",\"microsoft-teams\",\"mattermost\",\"teamcity\",\"telegram\",\"unify-circuit\",\"webex-teams\",\"zentao\",\"squash-tm\",\"github\",\"git-guardian\",\"google-cloud-platform-artifact-registry\",\"google-cloud-platform-workload-identity-federation\",\"mock-ci\",\"mock-monitoring\"],\"in\":\"path\",\"name\":\"slug\",\"required\":true,\"type\":\"string\"},{\"format\":\"int32\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get an integration settings\",\"schema\":{\"description\":\"API_Entities_Integration model\",\"properties\":{\"active\":{\"type\":\"boolean\"},\"alert_events\":{\"type\":\"boolean\"},\"comment_on_event_enabled\":{\"type\":\"boolean\"},\"commit_events\":{\"type\":\"boolean\"},\"confidential_issues_events\":{\"type\":\"boolean\"},\"confidential_note_events\":{\"type\":\"boolean\"},\"created_at\":{\"example\":\"2019-11-20T11:20:25.297Z\",\"format\":\"date-time\",\"type\":\"string\"},\"deployment_events\":{\"type\":\"boolean\"},\"id\":{\"example\":75,\"format\":\"int32\",\"type\":\"integer\"},\"incident_events\":{\"type\":\"boolean\"},\"inherited\":{\"type\":\"boolean\"},\"issues_events\":{\"type\":\"boolean\"},\"job_events\":{\"type\":\"boolean\"},\"merge_requests_events\":{\"type\":\"boolean\"},\"note_events\":{\"type\":\"boolean\"},\"pipeline_events\":{\"type\":\"boolean\"},\"properties\":{\"example\":{\"token\":\"secr3t\"},\"type\":\"object\"},\"push_events\":{\"type\":\"boolean\"},\"slug\":{\"example\":\"jenkins\",\"format\":\"int32\",\"type\":\"integer\"},\"tag_push_events\":{\"type\":\"boolean\"},\"title\":{\"example\":\"Jenkins CI\",\"type\":\"string\"},\"updated_at\":{\"example\":\"2019-11-20T12:24:37.498Z\",\"format\":\"date-time\",\"type\":\"string\"},\"vulnerability_events\":{\"type\":\"boolean\"},\"wiki_page_events\":{\"type\":\"boolean\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Bad request\"},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/v4/groups/{id}/integrations/{slug}", "rename": { "param": { "id": "group_id", "slug": "id" } }, "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "groups" }, { "var": "group_id" }, { "lit": "integrations" }, { "var": "id" }], "select": { "exist": ["group_id", "id"] }, "transform": { "req": "`reqdata`", "res": "`body.properties`" }, "index$": 0 }, { "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "slug", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "param", "name": "project_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 1 }] }, "contract": { "id": "GET /api/v4/projects/{id}/integrations/{slug}", "json": "{\"operationId\":\"getApiV4ProjectsIdIntegrationsSlug\",\"parameters\":[{\"description\":\"The name of the integration\",\"enum\":[\"apple-app-store\",\"asana\",\"assembla\",\"bamboo\",\"bugzilla\",\"buildkite\",\"campfire\",\"confluence\",\"custom-issue-tracker\",\"datadog\",\"diffblue-cover\",\"discord\",\"drone-ci\",\"emails-on-push\",\"external-wiki\",\"gitlab-slack-application\",\"google-play\",\"hangouts-chat\",\"harbor\",\"irker\",\"jenkins\",\"jira\",\"jira-cloud-app\",\"linear\",\"matrix\",\"mattermost-slash-commands\",\"slack-slash-commands\",\"packagist\",\"phorge\",\"pipelines-email\",\"pivotaltracker\",\"pumble\",\"pushover\",\"redmine\",\"ewm\",\"youtrack\",\"clickup\",\"slack\",\"microsoft-teams\",\"mattermost\",\"teamcity\",\"telegram\",\"unify-circuit\",\"webex-teams\",\"zentao\",\"squash-tm\",\"github\",\"git-guardian\",\"google-cloud-platform-artifact-registry\",\"google-cloud-platform-workload-identity-federation\",\"mock-ci\",\"mock-monitoring\"],\"in\":\"path\",\"name\":\"slug\",\"required\":true,\"type\":\"string\"},{\"format\":\"int32\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get an integration settings\",\"schema\":{\"description\":\"API_Entities_Integration model\",\"properties\":{\"active\":{\"type\":\"boolean\"},\"alert_events\":{\"type\":\"boolean\"},\"comment_on_event_enabled\":{\"type\":\"boolean\"},\"commit_events\":{\"type\":\"boolean\"},\"confidential_issues_events\":{\"type\":\"boolean\"},\"confidential_note_events\":{\"type\":\"boolean\"},\"created_at\":{\"example\":\"2019-11-20T11:20:25.297Z\",\"format\":\"date-time\",\"type\":\"string\"},\"deployment_events\":{\"type\":\"boolean\"},\"id\":{\"example\":75,\"format\":\"int32\",\"type\":\"integer\"},\"incident_events\":{\"type\":\"boolean\"},\"inherited\":{\"type\":\"boolean\"},\"issues_events\":{\"type\":\"boolean\"},\"job_events\":{\"type\":\"boolean\"},\"merge_requests_events\":{\"type\":\"boolean\"},\"note_events\":{\"type\":\"boolean\"},\"pipeline_events\":{\"type\":\"boolean\"},\"properties\":{\"example\":{\"token\":\"secr3t\"},\"type\":\"object\"},\"push_events\":{\"type\":\"boolean\"},\"slug\":{\"example\":\"jenkins\",\"format\":\"int32\",\"type\":\"integer\"},\"tag_push_events\":{\"type\":\"boolean\"},\"title\":{\"example\":\"Jenkins CI\",\"type\":\"string\"},\"updated_at\":{\"example\":\"2019-11-20T12:24:37.498Z\",\"format\":\"date-time\",\"type\":\"string\"},\"vulnerability_events\":{\"type\":\"boolean\"},\"wiki_page_events\":{\"type\":\"boolean\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Bad request\"},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/v4/projects/{id}/integrations/{slug}", "rename": { "param": { "id": "project_id", "slug": "id" } }, "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "integrations" }, { "var": "id" }], "select": { "exist": ["id", "project_id"] }, "transform": { "req": "`reqdata`", "res": "`body.properties`" }, "index$": 1 }, { "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "project_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "param", "name": "slug", "orig": "slug", "reqd": true, "type": "`$STRING`", "index$": 1 }] }, "contract": { "id": "GET /api/v4/projects/{id}/services/{slug}", "json": "{\"operationId\":\"getApiV4ProjectsIdServicesSlug\",\"parameters\":[{\"description\":\"The name of the integration\",\"enum\":[\"apple-app-store\",\"asana\",\"assembla\",\"bamboo\",\"bugzilla\",\"buildkite\",\"campfire\",\"confluence\",\"custom-issue-tracker\",\"datadog\",\"diffblue-cover\",\"discord\",\"drone-ci\",\"emails-on-push\",\"external-wiki\",\"gitlab-slack-application\",\"google-play\",\"hangouts-chat\",\"harbor\",\"irker\",\"jenkins\",\"jira\",\"jira-cloud-app\",\"linear\",\"matrix\",\"mattermost-slash-commands\",\"slack-slash-commands\",\"packagist\",\"phorge\",\"pipelines-email\",\"pivotaltracker\",\"pumble\",\"pushover\",\"redmine\",\"ewm\",\"youtrack\",\"clickup\",\"slack\",\"microsoft-teams\",\"mattermost\",\"teamcity\",\"telegram\",\"unify-circuit\",\"webex-teams\",\"zentao\",\"squash-tm\",\"github\",\"git-guardian\",\"google-cloud-platform-artifact-registry\",\"google-cloud-platform-workload-identity-federation\",\"mock-ci\",\"mock-monitoring\"],\"in\":\"path\",\"name\":\"slug\",\"required\":true,\"type\":\"string\"},{\"format\":\"int32\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get an integration settings\",\"schema\":{\"description\":\"API_Entities_Integration model\",\"properties\":{\"active\":{\"type\":\"boolean\"},\"alert_events\":{\"type\":\"boolean\"},\"comment_on_event_enabled\":{\"type\":\"boolean\"},\"commit_events\":{\"type\":\"boolean\"},\"confidential_issues_events\":{\"type\":\"boolean\"},\"confidential_note_events\":{\"type\":\"boolean\"},\"created_at\":{\"example\":\"2019-11-20T11:20:25.297Z\",\"format\":\"date-time\",\"type\":\"string\"},\"deployment_events\":{\"type\":\"boolean\"},\"id\":{\"example\":75,\"format\":\"int32\",\"type\":\"integer\"},\"incident_events\":{\"type\":\"boolean\"},\"inherited\":{\"type\":\"boolean\"},\"issues_events\":{\"type\":\"boolean\"},\"job_events\":{\"type\":\"boolean\"},\"merge_requests_events\":{\"type\":\"boolean\"},\"note_events\":{\"type\":\"boolean\"},\"pipeline_events\":{\"type\":\"boolean\"},\"properties\":{\"example\":{\"token\":\"secr3t\"},\"type\":\"object\"},\"push_events\":{\"type\":\"boolean\"},\"slug\":{\"example\":\"jenkins\",\"format\":\"int32\",\"type\":\"integer\"},\"tag_push_events\":{\"type\":\"boolean\"},\"title\":{\"example\":\"Jenkins CI\",\"type\":\"string\"},\"updated_at\":{\"example\":\"2019-11-20T12:24:37.498Z\",\"format\":\"date-time\",\"type\":\"string\"},\"vulnerability_events\":{\"type\":\"boolean\"},\"wiki_page_events\":{\"type\":\"boolean\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Bad request\"},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/v4/projects/{id}/services/{slug}", "rename": { "param": { "id": "project_id" } }, "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "services" }, { "var": "slug" }], "select": { "exist": ["project_id", "slug"] }, "transform": { "req": "`reqdata`", "res": "`body.properties`" }, "index$": 2 }], "key$": "load" } }, "relations": { "ancestors": [["group"], ["project"], ["project", "service"]] }, "key$": "api_entities_integration", "name__orig": "api_entities_integration", "Name": "ApiEntitiesIntegration", "name_": "api_entities_integration", "name-": "api-entities-integration", "NAME": "API_ENTITIES_INTEGRATION", "index$": 82 }, { "active": true, "entity": "api_entities_integration", "key$": "BasicApiEntitiesIntegrationFlow", "kind": "basic", "name": "BasicApiEntitiesIntegrationFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "api_entities_integration_ref01", "srcdatavar": "api_entities_integration_ref01_data", "suffix": "_dt0" }, "match": { "id": "api_entities_integration01", "project_id": "project01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-api_entities_integration_ref01" } }], "index$": 0 }] }, 'ApiEntitiesIntegration');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let api_entities_integration_ref01_data = Object.values(setup.data.existing.api_entities_integration)[0];
        // LOAD
        const api_entities_integration_ref01_ent = client.ApiEntitiesIntegration();
        const api_entities_integration_ref01_match_dt0 = {};
        api_entities_integration_ref01_match_dt0.id = api_entities_integration_ref01_data.id;
        const api_entities_integration_ref01_data_dt0 = (await api_entities_integration_ref01_ent.load(api_entities_integration_ref01_match_dt0)).data();
        (0, node_assert_1.default)(api_entities_integration_ref01_data_dt0.id === api_entities_integration_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/api_entities_integration/ApiEntitiesIntegrationTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['api_entities_integration01', 'api_entities_integration02', 'api_entities_integration03', 'group01', 'group02', 'group03', 'project01', 'project02', 'project03', 'project01', 'project02', 'project03', 'service01', 'service02', 'service03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_API_ENTITIES_INTEGRATION_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_API_ENTITIES_INTEGRATION_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_API_ENTITIES_INTEGRATION_ENTID'];
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
//# sourceMappingURL=ApiEntitiesIntegrationEntity.test.js.map