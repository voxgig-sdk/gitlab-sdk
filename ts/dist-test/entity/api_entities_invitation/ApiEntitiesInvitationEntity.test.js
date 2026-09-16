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
(0, node_test_1.describe)('ApiEntitiesInvitationEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.ApiEntitiesInvitation();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['create', 'list', 'update']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'api_entities_invitation.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "access_level", "req": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "created_at", "req": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "created_by_name", "req": false, "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "expires_at", "req": false, "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "id", "req": false, "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "invite_email", "req": false, "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "invite_token", "req": false, "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "user_name", "req": false, "type": "`$STRING`", "index$": 7 }], "id": { "field": "id", "name": "id" }, "name": "api_entities_invitation", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "group_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }], "query": [{ "active": true, "kind": "query", "name": "post_api_v4_groups_id_invitation", "orig": "post_api_v4_groups_id_invitation", "reqd": true, "type": "`$OBJECT`", "index$": 0 }] }, "contract": { "id": "POST /api/v4/groups/{id}/invitations", "json": "{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4GroupsIdInvitations\",\"parameters\":[{\"description\":\"The group ID\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"in\":\"body\",\"name\":\"postApiV4GroupsIdInvitations\",\"required\":true,\"schema\":{\"description\":\"Invite non-members by email address to a group or project.\",\"properties\":{\"access_level\":{\"description\":\"A valid access level (defaults: `30`, developer access level)\",\"enum\":[10,15,20,30,40,50,5],\"format\":\"int32\",\"type\":\"integer\"},\"email\":{\"description\":\"The email address to invite, or multiple emails separated by comma\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"expires_at\":{\"description\":\"Date string in the format YEAR-MONTH-DAY\",\"format\":\"date-time\",\"type\":\"string\"},\"invite_source\":{\"default\":\"invitations-api\",\"description\":\"Source that triggered the member creation process\",\"type\":\"string\"},\"member_role_id\":{\"description\":\"The ID of a member role for the invited user\",\"format\":\"int32\",\"type\":\"integer\"},\"user_id\":{\"description\":\"The user ID of the new member or multiple IDs separated by commas.\",\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"required\":[\"access_level\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"Invite non-members by email address to a group or project.\",\"schema\":{\"description\":\"API_Entities_Invitation model\",\"properties\":{\"access_level\":{\"type\":\"string\"},\"created_at\":{\"type\":\"string\"},\"created_by_name\":{\"type\":\"string\"},\"expires_at\":{\"type\":\"string\"},\"invite_email\":{\"type\":\"string\"},\"invite_token\":{\"type\":\"string\"},\"user_name\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "POST", "orig": "/api/v4/groups/{id}/invitations", "rename": { "param": { "id": "group_id" } }, "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "groups" }, { "var": "group_id" }, { "lit": "invitations" }], "select": { "exist": ["group_id", "post_api_v4_groups_id_invitation"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "project_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }], "query": [{ "active": true, "kind": "query", "name": "post_api_v4_projects_id_invitation", "orig": "post_api_v4_projects_id_invitation", "reqd": true, "type": "`$OBJECT`", "index$": 0 }] }, "contract": { "id": "POST /api/v4/projects/{id}/invitations", "json": "{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4ProjectsIdInvitations\",\"parameters\":[{\"description\":\"The project ID\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"in\":\"body\",\"name\":\"postApiV4ProjectsIdInvitations\",\"required\":true,\"schema\":{\"description\":\"Invite non-members by email address to a group or project.\",\"properties\":{\"access_level\":{\"description\":\"A valid access level (defaults: `30`, developer access level)\",\"enum\":[10,15,20,30,40,50,5],\"format\":\"int32\",\"type\":\"integer\"},\"email\":{\"description\":\"The email address to invite, or multiple emails separated by comma\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"expires_at\":{\"description\":\"Date string in the format YEAR-MONTH-DAY\",\"format\":\"date-time\",\"type\":\"string\"},\"invite_source\":{\"default\":\"invitations-api\",\"description\":\"Source that triggered the member creation process\",\"type\":\"string\"},\"member_role_id\":{\"description\":\"The ID of a member role for the invited user\",\"format\":\"int32\",\"type\":\"integer\"},\"user_id\":{\"description\":\"The user ID of the new member or multiple IDs separated by commas.\",\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"required\":[\"access_level\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"Invite non-members by email address to a group or project.\",\"schema\":{\"description\":\"API_Entities_Invitation model\",\"properties\":{\"access_level\":{\"type\":\"string\"},\"created_at\":{\"type\":\"string\"},\"created_by_name\":{\"type\":\"string\"},\"expires_at\":{\"type\":\"string\"},\"invite_email\":{\"type\":\"string\"},\"invite_token\":{\"type\":\"string\"},\"user_name\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "POST", "orig": "/api/v4/projects/{id}/invitations", "rename": { "param": { "id": "project_id" } }, "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "invitations" }], "select": { "exist": ["post_api_v4_projects_id_invitation", "project_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "group_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }], "query": [{ "active": true, "example": 1, "kind": "query", "name": "page", "orig": "page", "reqd": false, "type": "`$INTEGER`", "index$": 0 }, { "active": true, "example": 20, "kind": "query", "name": "per_page", "orig": "per_page", "reqd": false, "type": "`$INTEGER`", "index$": 1 }, { "active": true, "kind": "query", "name": "query", "orig": "query", "reqd": false, "type": "`$ANY`", "index$": 2 }] }, "contract": { "id": "GET /api/v4/groups/{id}/invitations", "json": "{\"operationId\":\"getApiV4GroupsIdInvitations\",\"parameters\":[{\"description\":\"The group ID\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"default\":1,\"description\":\"Current page number\",\"example\":1,\"format\":\"int32\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"type\":\"integer\"},{\"default\":20,\"description\":\"Number of items per page\",\"example\":20,\"format\":\"int32\",\"in\":\"query\",\"name\":\"per_page\",\"required\":false,\"type\":\"integer\"},{\"description\":\"A query string to search for members\",\"in\":\"query\",\"name\":\"query\",\"required\":false,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get a list of group or project invitations viewable by the authenticated user\",\"schema\":{\"items\":{\"description\":\"API_Entities_Invitation model\",\"properties\":{\"access_level\":{\"type\":\"string\"},\"created_at\":{\"type\":\"string\"},\"created_by_name\":{\"type\":\"string\"},\"expires_at\":{\"type\":\"string\"},\"invite_email\":{\"type\":\"string\"},\"invite_token\":{\"type\":\"string\"},\"user_name\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/v4/groups/{id}/invitations", "rename": { "param": { "id": "group_id" } }, "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "groups" }, { "var": "group_id" }, { "lit": "invitations" }], "select": { "exist": ["group_id", "page", "per_page", "query"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "project_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }], "query": [{ "active": true, "example": 1, "kind": "query", "name": "page", "orig": "page", "reqd": false, "type": "`$INTEGER`", "index$": 0 }, { "active": true, "example": 20, "kind": "query", "name": "per_page", "orig": "per_page", "reqd": false, "type": "`$INTEGER`", "index$": 1 }, { "active": true, "kind": "query", "name": "query", "orig": "query", "reqd": false, "type": "`$ANY`", "index$": 2 }] }, "contract": { "id": "GET /api/v4/projects/{id}/invitations", "json": "{\"operationId\":\"getApiV4ProjectsIdInvitations\",\"parameters\":[{\"description\":\"The project ID\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"default\":1,\"description\":\"Current page number\",\"example\":1,\"format\":\"int32\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"type\":\"integer\"},{\"default\":20,\"description\":\"Number of items per page\",\"example\":20,\"format\":\"int32\",\"in\":\"query\",\"name\":\"per_page\",\"required\":false,\"type\":\"integer\"},{\"description\":\"A query string to search for members\",\"in\":\"query\",\"name\":\"query\",\"required\":false,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get a list of group or project invitations viewable by the authenticated user\",\"schema\":{\"items\":{\"description\":\"API_Entities_Invitation model\",\"properties\":{\"access_level\":{\"type\":\"string\"},\"created_at\":{\"type\":\"string\"},\"created_by_name\":{\"type\":\"string\"},\"expires_at\":{\"type\":\"string\"},\"invite_email\":{\"type\":\"string\"},\"invite_token\":{\"type\":\"string\"},\"user_name\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/v4/projects/{id}/invitations", "rename": { "param": { "id": "project_id" } }, "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "invitations" }], "select": { "exist": ["page", "per_page", "project_id", "query"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "list" }, "update": { "input": "data", "name": "update", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "group_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "param", "name": "id", "orig": "email", "reqd": true, "type": "`$STRING`", "index$": 1 }], "query": [{ "active": true, "kind": "query", "name": "put_api_v4_groups_id_invitations_email", "orig": "put_api_v4_groups_id_invitations_email", "reqd": true, "type": "`$OBJECT`", "index$": 0 }] }, "contract": { "id": "PUT /api/v4/groups/{id}/invitations/{email}", "json": "{\"consumes\":[\"application/json\"],\"operationId\":\"putApiV4GroupsIdInvitationsEmail\",\"parameters\":[{\"description\":\"The group ID\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The email address of the invitation\",\"in\":\"path\",\"name\":\"email\",\"required\":true,\"type\":\"string\"},{\"in\":\"body\",\"name\":\"putApiV4GroupsIdInvitationsEmail\",\"required\":true,\"schema\":{\"description\":\"Updates a group or project invitation.\",\"properties\":{\"access_level\":{\"description\":\"A valid access level (defaults: `30`, developer access level)\",\"enum\":[10,15,20,30,40,50],\"format\":\"int32\",\"type\":\"integer\"},\"expires_at\":{\"description\":\"Date string in ISO 8601 format (`YYYY-MM-DDTHH:MM:SSZ`)\",\"format\":\"date-time\",\"type\":\"string\"},\"member_role_id\":{\"description\":\"The ID of a member role for the invited user\",\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Updates a group or project invitation.\",\"schema\":{\"description\":\"API_Entities_Invitation model\",\"properties\":{\"access_level\":{\"type\":\"string\"},\"created_at\":{\"type\":\"string\"},\"created_by_name\":{\"type\":\"string\"},\"expires_at\":{\"type\":\"string\"},\"invite_email\":{\"type\":\"string\"},\"invite_token\":{\"type\":\"string\"},\"user_name\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "PUT", "orig": "/api/v4/groups/{id}/invitations/{email}", "rename": { "param": { "email": "id", "id": "group_id" } }, "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "groups" }, { "var": "group_id" }, { "lit": "invitations" }, { "var": "id" }], "select": { "exist": ["group_id", "id", "put_api_v4_groups_id_invitations_email"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "email", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "param", "name": "project_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 1 }], "query": [{ "active": true, "kind": "query", "name": "put_api_v4_projects_id_invitations_email", "orig": "put_api_v4_projects_id_invitations_email", "reqd": true, "type": "`$OBJECT`", "index$": 0 }] }, "contract": { "id": "PUT /api/v4/projects/{id}/invitations/{email}", "json": "{\"consumes\":[\"application/json\"],\"operationId\":\"putApiV4ProjectsIdInvitationsEmail\",\"parameters\":[{\"description\":\"The project ID\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The email address of the invitation\",\"in\":\"path\",\"name\":\"email\",\"required\":true,\"type\":\"string\"},{\"in\":\"body\",\"name\":\"putApiV4ProjectsIdInvitationsEmail\",\"required\":true,\"schema\":{\"description\":\"Updates a group or project invitation.\",\"properties\":{\"access_level\":{\"description\":\"A valid access level (defaults: `30`, developer access level)\",\"enum\":[10,15,20,30,40,50],\"format\":\"int32\",\"type\":\"integer\"},\"expires_at\":{\"description\":\"Date string in ISO 8601 format (`YYYY-MM-DDTHH:MM:SSZ`)\",\"format\":\"date-time\",\"type\":\"string\"},\"member_role_id\":{\"description\":\"The ID of a member role for the invited user\",\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Updates a group or project invitation.\",\"schema\":{\"description\":\"API_Entities_Invitation model\",\"properties\":{\"access_level\":{\"type\":\"string\"},\"created_at\":{\"type\":\"string\"},\"created_by_name\":{\"type\":\"string\"},\"expires_at\":{\"type\":\"string\"},\"invite_email\":{\"type\":\"string\"},\"invite_token\":{\"type\":\"string\"},\"user_name\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "PUT", "orig": "/api/v4/projects/{id}/invitations/{email}", "rename": { "param": { "email": "id", "id": "project_id" } }, "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "invitations" }, { "var": "id" }], "select": { "exist": ["id", "project_id", "put_api_v4_projects_id_invitations_email"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "update" } }, "relations": { "ancestors": [["group"], ["project"]] }, "key$": "api_entities_invitation", "name__orig": "api_entities_invitation", "Name": "ApiEntitiesInvitation", "name_": "api_entities_invitation", "name-": "api-entities-invitation", "NAME": "API_ENTITIES_INVITATION", "index$": 84 }, { "active": true, "entity": "api_entities_invitation", "key$": "BasicApiEntitiesInvitationFlow", "kind": "basic", "name": "BasicApiEntitiesInvitationFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "api_entities_invitation_ref01" }, "match": { "group_id": "group01", "project_id": "project01" }, "op": "create", "spec": [], "valid": [], "index$": 0 }, { "active": true, "data": {}, "input": {}, "match": { "project_id": "project01" }, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "api_entities_invitation_ref01" } }], "index$": 1 }, { "active": true, "data": { "project_id": "project01" }, "input": { "ref": "api_entities_invitation_ref01", "srcdatavar": "api_entities_invitation_ref01_data", "suffix": "_up0", "textfield": "access_level" }, "match": {}, "op": "update", "spec": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-api_entities_invitation_ref01" } }], "valid": [], "index$": 2 }] }, 'ApiEntitiesInvitation');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const api_entities_invitation_ref01_ent = client.ApiEntitiesInvitation();
        let api_entities_invitation_ref01_data = setup.data.new.api_entities_invitation['api_entities_invitation_ref01'];
        api_entities_invitation_ref01_data['group_id'] = setup.idmap['group01'];
        api_entities_invitation_ref01_data['project_id'] = setup.idmap['project01'];
        api_entities_invitation_ref01_data = (await api_entities_invitation_ref01_ent.create(api_entities_invitation_ref01_data)).data();
        (0, node_assert_1.default)(null != api_entities_invitation_ref01_data.id);
        // LIST
        const api_entities_invitation_ref01_match = {};
        api_entities_invitation_ref01_match['project_id'] = setup.idmap['project01'];
        const api_entities_invitation_ref01_list = (await api_entities_invitation_ref01_ent.list(api_entities_invitation_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(api_entities_invitation_ref01_list, { id: api_entities_invitation_ref01_data.id })));
        // UPDATE
        const api_entities_invitation_ref01_data_up0 = {};
        api_entities_invitation_ref01_data_up0.id = api_entities_invitation_ref01_data.id;
        api_entities_invitation_ref01_data_up0['project_id'] = setup.idmap['project_id'];
        const api_entities_invitation_ref01_markdef_up0 = { name: 'access_level', value: 'Mark01-api_entities_invitation_ref01_' + setup.now };
        api_entities_invitation_ref01_data_up0[api_entities_invitation_ref01_markdef_up0.name] = api_entities_invitation_ref01_markdef_up0.value;
        const api_entities_invitation_ref01_resdata_up0 = (await api_entities_invitation_ref01_ent.update(api_entities_invitation_ref01_data_up0)).data();
        (0, node_assert_1.default)(api_entities_invitation_ref01_resdata_up0.id === api_entities_invitation_ref01_data_up0.id);
        (0, node_assert_1.default)(api_entities_invitation_ref01_resdata_up0[api_entities_invitation_ref01_markdef_up0.name] === api_entities_invitation_ref01_markdef_up0.value);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/api_entities_invitation/ApiEntitiesInvitationTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['api_entities_invitation01', 'api_entities_invitation02', 'api_entities_invitation03', 'group01', 'group02', 'group03', 'project01', 'project02', 'project03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_API_ENTITIES_INVITATION_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_API_ENTITIES_INVITATION_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_API_ENTITIES_INVITATION_ENTID'];
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
//# sourceMappingURL=ApiEntitiesInvitationEntity.test.js.map