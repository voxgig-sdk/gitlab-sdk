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
(0, node_test_1.describe)('IntegrationEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.Integration();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['create', 'remove']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'integration.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 0 } }, "id": { "field": "id", "name": "id" }, "name": "integration", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /api/v4/projects/{id}/integrations/mattermost_slash_commands/trigger", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "post_api_v4_projects_id_integrations_mattermost_slash_commands_trigger", "or": "post_api_v4_projects_id_integrations_mattermost_slash_commands_trigger", "r": true, "t": "`$OBJECT`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/v4/projects/{id}/integrations/mattermost_slash_commands/trigger", "q": { "exist": ["post_api_v4_projects_id_integrations_mattermost_slash_commands_trigger", "project_id"] }, "r": { "param": { "id": "project_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "integrations" }, { "lit": "mattermost_slash_commands" }, { "lit": "trigger" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /api/v4/projects/{id}/integrations/slack_slash_commands/trigger", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "post_api_v4_projects_id_integrations_slack_slash_commands_trigger", "or": "post_api_v4_projects_id_integrations_slack_slash_commands_trigger", "r": true, "t": "`$OBJECT`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/v4/projects/{id}/integrations/slack_slash_commands/trigger", "q": { "exist": ["post_api_v4_projects_id_integrations_slack_slash_commands_trigger", "project_id"] }, "r": { "param": { "id": "project_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "integrations" }, { "lit": "slack_slash_commands" }, { "lit": "trigger" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "POST /api/v4/projects/{id}/services/mattermost_slash_commands/trigger", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "post_api_v4_projects_id_services_mattermost_slash_commands_trigger", "or": "post_api_v4_projects_id_services_mattermost_slash_commands_trigger", "r": true, "t": "`$OBJECT`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/v4/projects/{id}/services/mattermost_slash_commands/trigger", "q": { "exist": ["post_api_v4_projects_id_services_mattermost_slash_commands_trigger", "project_id"] }, "r": { "param": { "id": "project_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "services" }, { "lit": "mattermost_slash_commands" }, { "lit": "trigger" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }, { "a": true, "co": { "id": "POST /api/v4/projects/{id}/services/slack_slash_commands/trigger", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "post_api_v4_projects_id_services_slack_slash_commands_trigger", "or": "post_api_v4_projects_id_services_slack_slash_commands_trigger", "r": true, "t": "`$OBJECT`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/v4/projects/{id}/services/slack_slash_commands/trigger", "q": { "exist": ["post_api_v4_projects_id_services_slack_slash_commands_trigger", "project_id"] }, "r": { "param": { "id": "project_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "services" }, { "lit": "slack_slash_commands" }, { "lit": "trigger" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 3 }, { "a": true, "co": { "id": "POST /api/v4/integrations/slack/events", "source": "swagger2", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "post_api_v4_integrations_slack_event", "or": "post_api_v4_integrations_slack_event", "r": true, "t": "`$OBJECT`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/v4/integrations/slack/events", "q": { "exist": ["post_api_v4_integrations_slack_event"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "integrations" }, { "lit": "slack" }, { "lit": "events" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /api/v4/integrations/slack/interactions", "source": "swagger2", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/v4/integrations/slack/interactions", "q": {}, "r": {}, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "integrations" }, { "lit": "slack" }, { "lit": "interactions" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 5 }, { "a": true, "co": { "id": "POST /api/v4/integrations/slack/options", "source": "swagger2", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/v4/integrations/slack/options", "q": {}, "r": {}, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "integrations" }, { "lit": "slack" }, { "lit": "options" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 6 }], "key$": "create" }, "remove": { "input": "data", "name": "remove", "points": [{ "a": true, "co": { "id": "DELETE /api/v4/groups/{id}/integrations/{slug}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "group_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "id", "or": "slug", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "DELETE", "o": "/api/v4/groups/{id}/integrations/{slug}", "q": { "exist": ["group_id", "id"] }, "r": { "param": { "id": "group_id", "slug": "id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "groups" }, { "var": "group_id" }, { "lit": "integrations" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "DELETE /api/v4/projects/{id}/integrations/{slug}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "slug", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "DELETE", "o": "/api/v4/projects/{id}/integrations/{slug}", "q": { "exist": ["id", "project_id"] }, "r": { "param": { "id": "project_id", "slug": "id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "integrations" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "DELETE /api/v4/projects/{id}/services/{slug}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "slug", "or": "slug", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "DELETE", "o": "/api/v4/projects/{id}/services/{slug}", "q": { "exist": ["project_id", "slug"] }, "r": { "param": { "id": "project_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "services" }, { "var": "slug" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }], "key$": "remove" } }, "relations": { "ancestors": [["$.main.kit.entity.group"], ["$.main.kit.entity.project"], ["$.main.kit.entity.project"]] }, "key$": "integration", "name__orig": "integration", "Name": "Integration", "name_": "integration", "name-": "integration", "NAME": "INTEGRATION", "index$": 218 }, { "active": true, "entity": "integration", "key$": "BasicIntegrationFlow", "kind": "basic", "name": "BasicIntegrationFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "integration_ref01" }, "m": { "group_id": "group01", "project_id": "project01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "integration_ref01", "suffix": "_rm0" }, "m": { "id": "integration01", "project_id": "project01" }, "o": "remove", "s": [], "v": [], "index$": 1 }] }, 'Integration', { "POST /api/v4/projects/{id}/integrations/mattermost_slash_commands/trigger": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project", "type": "string", "required": true, "index$": 0 }, { "name": "postApiV4ProjectsIdIntegrationsMattermostSlashCommandsTrigger", "in": "body", "required": true, "schema": { "type": "object", "properties": { "token": { "type": "string", "description": "The Mattermost token." } }, "required": ["token"], "description": "Trigger a slash command for mattermost-slash-commands", "x-ref": "#/definitions/postApiV4ProjectsIdIntegrationsMattermostSlashCommandsTrigger" }, "index$": 1 }] }, "POST /api/v4/projects/{id}/integrations/slack_slash_commands/trigger": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project", "type": "string", "required": true, "index$": 0 }, { "name": "postApiV4ProjectsIdIntegrationsSlackSlashCommandsTrigger", "in": "body", "required": true, "schema": { "type": "object", "properties": { "token": { "type": "string", "description": "The Slack token." } }, "required": ["token"], "description": "Trigger a slash command for slack-slash-commands", "x-ref": "#/definitions/postApiV4ProjectsIdIntegrationsSlackSlashCommandsTrigger" }, "index$": 1 }] }, "POST /api/v4/projects/{id}/services/mattermost_slash_commands/trigger": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project", "type": "string", "required": true, "index$": 0 }, { "name": "postApiV4ProjectsIdServicesMattermostSlashCommandsTrigger", "in": "body", "required": true, "schema": { "type": "object", "properties": { "token": { "type": "string", "description": "The Mattermost token." } }, "required": ["token"], "description": "Trigger a slash command for mattermost-slash-commands", "x-ref": "#/definitions/postApiV4ProjectsIdServicesMattermostSlashCommandsTrigger" }, "index$": 1 }] }, "POST /api/v4/projects/{id}/services/slack_slash_commands/trigger": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project", "type": "string", "required": true, "index$": 0 }, { "name": "postApiV4ProjectsIdServicesSlackSlashCommandsTrigger", "in": "body", "required": true, "schema": { "type": "object", "properties": { "token": { "type": "string", "description": "The Slack token." } }, "required": ["token"], "description": "Trigger a slash command for slack-slash-commands", "x-ref": "#/definitions/postApiV4ProjectsIdServicesSlackSlashCommandsTrigger" }, "index$": 1 }] }, "POST /api/v4/integrations/slack/events": { "protocol": "http", "parameters": [{ "name": "postApiV4IntegrationsSlackEvents", "in": "body", "required": true, "schema": { "type": "object", "properties": { "token": { "type": "string", "description": "(Deprecated by Slack) The request token, unused by GitLab" }, "team_id": { "type": "string", "description": "The Slack workspace ID of where the event occurred" }, "api_app_id": { "type": "string", "description": "The Slack app ID" }, "event": { "type": "object", "description": "The event object with variable properties" }, "type": { "type": "string", "description": "The kind of event this is, usually `event_callback`" }, "event_id": { "type": "string", "description": "A unique identifier for this specific event" }, "event_time": { "type": "integer", "format": "int32", "description": "The epoch timestamp in seconds when this event was dispatched" }, "authed_users": { "type": "array", "description": "(Deprecated by Slack) An array of Slack user IDs", "items": { "type": "string" } } }, "description": "Receive Slack events", "x-ref": "#/definitions/postApiV4IntegrationsSlackEvents" }, "index$": 0 }] }, "POST /api/v4/integrations/slack/interactions": { "protocol": "http", "parameters": [] }, "POST /api/v4/integrations/slack/options": { "protocol": "http", "parameters": [] }, "DELETE /api/v4/groups/{id}/integrations/{slug}": { "protocol": "http", "parameters": [{ "in": "path", "name": "slug", "description": "The name of the integration", "type": "string", "enum": ["apple-app-store", "asana", "assembla", "bamboo", "bugzilla", "buildkite", "campfire", "confluence", "custom-issue-tracker", "datadog", "diffblue-cover", "discord", "drone-ci", "emails-on-push", "external-wiki", "gitlab-slack-application", "google-play", "hangouts-chat", "harbor", "irker", "jenkins", "jira", "jira-cloud-app", "linear", "matrix", "mattermost-slash-commands", "slack-slash-commands", "packagist", "phorge", "pipelines-email", "pivotaltracker", "pumble", "pushover", "redmine", "ewm", "youtrack", "clickup", "slack", "microsoft-teams", "mattermost", "teamcity", "telegram", "unify-circuit", "webex-teams", "zentao", "squash-tm", "github", "git-guardian", "google-cloud-platform-artifact-registry", "google-cloud-platform-workload-identity-federation", "mock-ci", "mock-monitoring"], "required": true, "index$": 0 }, { "in": "path", "name": "id", "type": "integer", "format": "int32", "required": true, "index$": 1 }] }, "DELETE /api/v4/projects/{id}/integrations/{slug}": { "protocol": "http", "parameters": [{ "in": "path", "name": "slug", "description": "The name of the integration", "type": "string", "enum": ["apple-app-store", "asana", "assembla", "bamboo", "bugzilla", "buildkite", "campfire", "confluence", "custom-issue-tracker", "datadog", "diffblue-cover", "discord", "drone-ci", "emails-on-push", "external-wiki", "gitlab-slack-application", "google-play", "hangouts-chat", "harbor", "irker", "jenkins", "jira", "jira-cloud-app", "linear", "matrix", "mattermost-slash-commands", "slack-slash-commands", "packagist", "phorge", "pipelines-email", "pivotaltracker", "pumble", "pushover", "redmine", "ewm", "youtrack", "clickup", "slack", "microsoft-teams", "mattermost", "teamcity", "telegram", "unify-circuit", "webex-teams", "zentao", "squash-tm", "github", "git-guardian", "google-cloud-platform-artifact-registry", "google-cloud-platform-workload-identity-federation", "mock-ci", "mock-monitoring"], "required": true, "index$": 0 }, { "in": "path", "name": "id", "type": "integer", "format": "int32", "required": true, "index$": 1 }] }, "DELETE /api/v4/projects/{id}/services/{slug}": { "protocol": "http", "parameters": [{ "in": "path", "name": "slug", "description": "The name of the integration", "type": "string", "enum": ["apple-app-store", "asana", "assembla", "bamboo", "bugzilla", "buildkite", "campfire", "confluence", "custom-issue-tracker", "datadog", "diffblue-cover", "discord", "drone-ci", "emails-on-push", "external-wiki", "gitlab-slack-application", "google-play", "hangouts-chat", "harbor", "irker", "jenkins", "jira", "jira-cloud-app", "linear", "matrix", "mattermost-slash-commands", "slack-slash-commands", "packagist", "phorge", "pipelines-email", "pivotaltracker", "pumble", "pushover", "redmine", "ewm", "youtrack", "clickup", "slack", "microsoft-teams", "mattermost", "teamcity", "telegram", "unify-circuit", "webex-teams", "zentao", "squash-tm", "github", "git-guardian", "google-cloud-platform-artifact-registry", "google-cloud-platform-workload-identity-federation", "mock-ci", "mock-monitoring"], "required": true, "index$": 0 }, { "in": "path", "name": "id", "type": "integer", "format": "int32", "required": true, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const integration_ref01_ent = client.Integration();
        let integration_ref01_data = setup.data.new.integration['integration_ref01'];
        integration_ref01_data['group_id'] = setup.idmap['group01'];
        integration_ref01_data['project_id'] = setup.idmap['project01'];
        integration_ref01_data = (await integration_ref01_ent.create(integration_ref01_data)).data();
        (0, node_assert_1.default)(null != integration_ref01_data.id);
        // REMOVE
        const integration_ref01_match_rm0 = { id: integration_ref01_data.id };
        await integration_ref01_ent.remove(integration_ref01_match_rm0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/integration/IntegrationTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['integration01', 'integration02', 'integration03', 'group01', 'group02', 'group03', 'project01', 'project02', 'project03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_INTEGRATION_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_INTEGRATION_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_INTEGRATION_ENTID'];
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
//# sourceMappingURL=IntegrationEntity.test.js.map