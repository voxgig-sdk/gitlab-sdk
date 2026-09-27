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
(0, node_test_1.describe)('ApiEntitiesGroupDetailEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.ApiEntitiesGroupDetail();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['create', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'api_entities_group_detail.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "allowed_email_domains_list": { "a": true, "h": "Allowed Email Domains List", "n": "allowed_email_domains_list", "r": false, "t": "`$STRING`", "key$": "allowed_email_domains_list", "index$": 0 }, "archived": { "a": true, "h": "Archived", "n": "archived", "r": false, "t": "`$BOOLEAN`", "key$": "archived", "index$": 1 }, "auto_ban_user_on_excessive_projects_download": { "a": true, "h": "Auto Ban User On Excessive Projects Download", "n": "auto_ban_user_on_excessive_projects_download", "r": false, "t": "`$STRING`", "key$": "auto_ban_user_on_excessive_projects_download", "index$": 2 }, "auto_devops_enabled": { "a": true, "h": "Auto Devops Enabled", "n": "auto_devops_enabled", "r": false, "t": "`$STRING`", "key$": "auto_devops_enabled", "index$": 3 }, "auto_duo_code_review_enabled": { "a": true, "h": "Auto Duo Code Review Enabled", "n": "auto_duo_code_review_enabled", "r": false, "t": "`$STRING`", "key$": "auto_duo_code_review_enabled", "index$": 4 }, "avatar_url": { "a": true, "h": "Avatar Url", "n": "avatar_url", "r": false, "t": "`$STRING`", "key$": "avatar_url", "index$": 5 }, "created_at": { "a": true, "h": "Created At", "n": "created_at", "r": false, "t": "`$STRING`", "key$": "created_at", "index$": 6 }, "custom_attributes": { "a": true, "h": "Custom Attributes", "n": "custom_attributes", "r": false, "sh": "API_Entities_CustomAttribute model", "t": "`$OBJECT`", "key$": "custom_attributes", "index$": 7 }, "default_branch": { "a": true, "h": "Default Branch", "n": "default_branch", "r": false, "t": "`$STRING`", "key$": "default_branch", "index$": 8 }, "default_branch_protection": { "a": true, "h": "Default Branch Protection", "n": "default_branch_protection", "r": false, "t": "`$STRING`", "key$": "default_branch_protection", "index$": 9 }, "default_branch_protection_defaults": { "a": true, "h": "Default Branch Protection Defaults", "n": "default_branch_protection_defaults", "r": false, "t": "`$STRING`", "key$": "default_branch_protection_defaults", "index$": 10 }, "description": { "a": true, "h": "Description", "n": "description", "r": false, "t": "`$STRING`", "key$": "description", "index$": 11 }, "duo_core_features_enabled": { "a": true, "h": "Duo Core Features Enabled", "n": "duo_core_features_enabled", "r": false, "sh": "[Experimental] Indicates whether GitLab Duo Core features are enabled for the group", "t": "`$BOOLEAN`", "key$": "duo_core_features_enabled", "index$": 12 }, "duo_features_enabled": { "a": true, "h": "Duo Features Enabled", "n": "duo_features_enabled", "r": false, "t": "`$STRING`", "key$": "duo_features_enabled", "index$": 13 }, "emails_disabled": { "a": true, "h": "Emails Disabled", "n": "emails_disabled", "r": false, "t": "`$BOOLEAN`", "key$": "emails_disabled", "index$": 14 }, "emails_enabled": { "a": true, "h": "Emails Enabled", "n": "emails_enabled", "r": false, "t": "`$BOOLEAN`", "key$": "emails_enabled", "index$": 15 }, "enabled_git_access_protocol": { "a": true, "h": "Enabled Git Access Protocol", "n": "enabled_git_access_protocol", "r": false, "t": "`$STRING`", "key$": "enabled_git_access_protocol", "index$": 16 }, "extra_shared_runners_minutes_limit": { "a": true, "h": "Extra Shared Runners Minutes Limit", "n": "extra_shared_runners_minutes_limit", "r": false, "t": "`$STRING`", "key$": "extra_shared_runners_minutes_limit", "index$": 17 }, "file_template_project_id": { "a": true, "h": "File Template Project Id", "n": "file_template_project_id", "r": false, "t": "`$STRING`", "key$": "file_template_project_id", "index$": 18 }, "full_name": { "a": true, "h": "Full Name", "n": "full_name", "r": false, "t": "`$STRING`", "key$": "full_name", "index$": 19 }, "full_path": { "a": true, "h": "Full Path", "n": "full_path", "r": false, "t": "`$STRING`", "key$": "full_path", "index$": 20 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 21 }, "ip_restriction_ranges": { "a": true, "h": "Ip Restriction Ranges", "n": "ip_restriction_ranges", "r": false, "t": "`$STRING`", "key$": "ip_restriction_ranges", "index$": 22 }, "ldap_access": { "a": true, "h": "Ldap Access", "n": "ldap_access", "r": false, "t": "`$STRING`", "key$": "ldap_access", "index$": 23 }, "ldap_cn": { "a": true, "h": "Ldap Cn", "n": "ldap_cn", "r": false, "t": "`$STRING`", "key$": "ldap_cn", "index$": 24 }, "ldap_group_links": { "a": true, "h": "Ldap Group Links", "n": "ldap_group_links", "r": false, "t": "`$OBJECT`", "key$": "ldap_group_links", "index$": 25 }, "lfs_enabled": { "a": true, "h": "Lfs Enabled", "n": "lfs_enabled", "r": false, "t": "`$STRING`", "key$": "lfs_enabled", "index$": 26 }, "lock_duo_features_enabled": { "a": true, "h": "Lock Duo Features Enabled", "n": "lock_duo_features_enabled", "r": false, "t": "`$STRING`", "key$": "lock_duo_features_enabled", "index$": 27 }, "lock_math_rendering_limits_enabled": { "a": true, "h": "Lock Math Rendering Limits Enabled", "n": "lock_math_rendering_limits_enabled", "r": false, "t": "`$BOOLEAN`", "key$": "lock_math_rendering_limits_enabled", "index$": 28 }, "marked_for_deletion_on": { "a": true, "h": "Marked For Deletion On", "n": "marked_for_deletion_on", "r": false, "t": "`$STRING`", "key$": "marked_for_deletion_on", "index$": 29 }, "math_rendering_limits_enabled": { "a": true, "h": "Math Rendering Limits Enabled", "n": "math_rendering_limits_enabled", "r": false, "t": "`$BOOLEAN`", "key$": "math_rendering_limits_enabled", "index$": 30 }, "max_artifacts_size": { "a": true, "fo": "int32", "h": "Max Artifacts Size", "n": "max_artifacts_size", "r": false, "t": "`$INTEGER`", "key$": "max_artifacts_size", "index$": 31 }, "membership_lock": { "a": true, "h": "Membership Lock", "n": "membership_lock", "r": false, "t": "`$STRING`", "key$": "membership_lock", "index$": 32 }, "mentions_disabled": { "a": true, "h": "Mentions Disabled", "n": "mentions_disabled", "r": false, "t": "`$STRING`", "key$": "mentions_disabled", "index$": 33 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "t": "`$STRING`", "key$": "name", "index$": 34 }, "organization_id": { "a": true, "h": "Organization Id", "n": "organization_id", "r": false, "t": "`$STRING`", "key$": "organization_id", "index$": 35 }, "parent_id": { "a": true, "h": "Parent Id", "n": "parent_id", "r": false, "t": "`$STRING`", "key$": "parent_id", "index$": 36 }, "path": { "a": true, "h": "Path", "n": "path", "r": false, "t": "`$STRING`", "key$": "path", "index$": 37 }, "prevent_forking_outside_group": { "a": true, "h": "Prevent Forking Outside Group", "n": "prevent_forking_outside_group", "r": false, "t": "`$STRING`", "key$": "prevent_forking_outside_group", "index$": 38 }, "prevent_sharing_groups_outside_hierarchy": { "a": true, "h": "Prevent Sharing Groups Outside Hierarchy", "n": "prevent_sharing_groups_outside_hierarchy", "r": false, "t": "`$STRING`", "key$": "prevent_sharing_groups_outside_hierarchy", "index$": 39 }, "project_creation_level": { "a": true, "h": "Project Creation Level", "n": "project_creation_level", "r": false, "t": "`$STRING`", "key$": "project_creation_level", "index$": 40 }, "projects": { "a": true, "h": "Projects", "n": "projects", "r": false, "sh": "API_Entities_Project model", "t": "`$OBJECT`", "key$": "projects", "index$": 41 }, "repository_storage": { "a": true, "h": "Repository Storage", "n": "repository_storage", "r": false, "t": "`$STRING`", "key$": "repository_storage", "index$": 42 }, "request_access_enabled": { "a": true, "h": "Request Access Enabled", "n": "request_access_enabled", "r": false, "t": "`$STRING`", "key$": "request_access_enabled", "index$": 43 }, "require_two_factor_authentication": { "a": true, "h": "Require Two Factor Authentication", "n": "require_two_factor_authentication", "r": false, "t": "`$STRING`", "key$": "require_two_factor_authentication", "index$": 44 }, "root_storage_statistics": { "a": true, "h": "Root Storage Statistics", "n": "root_storage_statistics", "r": false, "t": "`$OBJECT`", "key$": "root_storage_statistics", "index$": 45 }, "runners_token": { "a": true, "h": "Runners Token", "n": "runners_token", "r": false, "t": "`$STRING`", "key$": "runners_token", "index$": 46 }, "saml_group_links": { "a": true, "h": "Saml Group Links", "n": "saml_group_links", "r": false, "t": "`$OBJECT`", "key$": "saml_group_links", "index$": 47 }, "service_access_tokens_expiration_enforced": { "a": true, "h": "Service Access Tokens Expiration Enforced", "n": "service_access_tokens_expiration_enforced", "r": false, "t": "`$STRING`", "key$": "service_access_tokens_expiration_enforced", "index$": 48 }, "share_with_group_lock": { "a": true, "h": "Share With Group Lock", "n": "share_with_group_lock", "r": false, "t": "`$STRING`", "key$": "share_with_group_lock", "index$": 49 }, "shared_projects": { "a": true, "h": "Shared Projects", "n": "shared_projects", "r": false, "sh": "API_Entities_Project model", "t": "`$OBJECT`", "key$": "shared_projects", "index$": 50 }, "shared_runners_minutes_limit": { "a": true, "h": "Shared Runners Minutes Limit", "n": "shared_runners_minutes_limit", "r": false, "t": "`$STRING`", "key$": "shared_runners_minutes_limit", "index$": 51 }, "shared_runners_setting": { "a": true, "h": "Shared Runners Setting", "n": "shared_runners_setting", "r": false, "t": "`$STRING`", "key$": "shared_runners_setting", "index$": 52 }, "shared_with_groups": { "a": true, "h": "Shared With Groups", "n": "shared_with_groups", "r": false, "t": "`$STRING`", "key$": "shared_with_groups", "index$": 53 }, "show_diff_preview_in_email": { "a": true, "h": "Show Diff Preview In Email", "n": "show_diff_preview_in_email", "r": false, "t": "`$BOOLEAN`", "key$": "show_diff_preview_in_email", "index$": 54 }, "statistics": { "a": true, "h": "Statistics", "n": "statistics", "r": false, "t": "`$OBJECT`", "key$": "statistics", "index$": 55 }, "subgroup_creation_level": { "a": true, "h": "Subgroup Creation Level", "n": "subgroup_creation_level", "r": false, "t": "`$STRING`", "key$": "subgroup_creation_level", "index$": 56 }, "two_factor_grace_period": { "a": true, "h": "Two Factor Grace Period", "n": "two_factor_grace_period", "r": false, "t": "`$STRING`", "key$": "two_factor_grace_period", "index$": 57 }, "unique_project_download_limit": { "a": true, "h": "Unique Project Download Limit", "n": "unique_project_download_limit", "r": false, "t": "`$STRING`", "key$": "unique_project_download_limit", "index$": 58 }, "unique_project_download_limit_alertlist": { "a": true, "h": "Unique Project Download Limit Alertlist", "n": "unique_project_download_limit_alertlist", "r": false, "t": "`$STRING`", "key$": "unique_project_download_limit_alertlist", "index$": 59 }, "unique_project_download_limit_allowlist": { "a": true, "h": "Unique Project Download Limit Allowlist", "n": "unique_project_download_limit_allowlist", "r": false, "t": "`$STRING`", "key$": "unique_project_download_limit_allowlist", "index$": 60 }, "unique_project_download_limit_interval_in_seconds": { "a": true, "h": "Unique Project Download Limit Interval In Seconds", "n": "unique_project_download_limit_interval_in_seconds", "r": false, "t": "`$STRING`", "key$": "unique_project_download_limit_interval_in_seconds", "index$": 61 }, "visibility": { "a": true, "h": "Visibility", "n": "visibility", "r": false, "t": "`$STRING`", "key$": "visibility", "index$": 62 }, "web_based_commit_signing_enabled": { "a": true, "h": "Web Based Commit Signing Enabled", "n": "web_based_commit_signing_enabled", "r": false, "t": "`$STRING`", "key$": "web_based_commit_signing_enabled", "index$": 63 }, "web_url": { "a": true, "h": "Web Url", "n": "web_url", "r": false, "t": "`$STRING`", "key$": "web_url", "index$": 64 }, "wiki_access_level": { "a": true, "h": "Wiki Access Level", "n": "wiki_access_level", "r": false, "t": "`$STRING`", "key$": "wiki_access_level", "index$": 65 } }, "id": { "field": "id", "name": "id" }, "name": "api_entities_group_detail", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /api/v4/groups/{id}/share", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "group_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "post_api_v4_groups_id_share", "or": "post_api_v4_groups_id_share", "r": true, "t": "`$OBJECT`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/v4/groups/{id}/share", "q": { "exist": ["group_id", "post_api_v4_groups_id_share"] }, "r": { "param": { "id": "group_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "groups" }, { "var": "group_id" }, { "lit": "share" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /api/v4/groups/{id}/transfer", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "group_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "post_api_v4_groups_id_transfer", "or": "post_api_v4_groups_id_transfer", "r": true, "t": "`$OBJECT`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/v4/groups/{id}/transfer", "q": { "$action": "transfer", "exist": ["group_id", "post_api_v4_groups_id_transfer"] }, "r": { "param": { "id": "group_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "groups" }, { "var": "group_id" }, { "lit": "transfer" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "POST /api/v4/groups/{id}/projects/{project_id}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "group_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "project_id", "or": "project_id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "POST", "o": "/api/v4/groups/{id}/projects/{project_id}", "q": { "exist": ["group_id", "project_id"] }, "r": { "param": { "id": "group_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "groups" }, { "var": "group_id" }, { "lit": "projects" }, { "var": "project_id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }, { "a": true, "co": { "id": "POST /api/v4/groups/{id}/ldap_sync", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "group_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/v4/groups/{id}/ldap_sync", "q": { "$action": "ldap_sync", "exist": ["group_id"] }, "r": { "param": { "id": "group_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "groups" }, { "var": "group_id" }, { "lit": "ldap_sync" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 3 }, { "a": true, "co": { "id": "POST /api/v4/groups/{id}/restore", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "group_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/v4/groups/{id}/restore", "q": { "$action": "restore", "exist": ["group_id"] }, "r": { "param": { "id": "group_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "groups" }, { "var": "group_id" }, { "lit": "restore" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 4 }], "key$": "create" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/v4/groups/{id}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "k": "query", "n": "with_custom_attribute", "or": "with_custom_attribute", "r": false, "t": "`$ANY`", "index$": 0 }, { "a": true, "k": "query", "n": "with_project", "or": "with_project", "r": false, "t": "`$ANY`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/api/v4/groups/{id}", "q": { "exist": ["id", "with_custom_attribute", "with_project"] }, "r": {}, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "groups" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [["$.main.kit.entity.group"], ["$.main.kit.entity.group", "$.main.kit.entity.project"]] }, "key$": "api_entities_group_detail", "name__orig": "api_entities_group_detail", "Name": "ApiEntitiesGroupDetail", "name_": "api_entities_group_detail", "name-": "api-entities-group-detail", "NAME": "API_ENTITIES_GROUP_DETAIL", "index$": 80 }, { "active": true, "entity": "api_entities_group_detail", "key$": "BasicApiEntitiesGroupDetailFlow", "kind": "basic", "name": "BasicApiEntitiesGroupDetailFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "api_entities_group_detail_ref01" }, "m": { "group_id": "group01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "api_entities_group_detail_ref01", "srcdatavar": "api_entities_group_detail_ref01_data", "suffix": "_dt0" }, "m": { "id": "api_entities_group_detail01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-api_entities_group_detail_ref01" } }], "index$": 1 }] }, 'ApiEntitiesGroupDetail', { "POST /api/v4/groups/{id}/share": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID of a group", "type": "string", "required": true, "index$": 0 }, { "name": "postApiV4GroupsIdShare", "in": "body", "required": true, "schema": { "type": "object", "properties": { "group_id": { "type": "integer", "format": "int32", "description": "The ID of the group to share" }, "group_access": { "type": "integer", "format": "int32", "description": "The group access level", "enum": [10, 15, 20, 30, 40, 50] }, "expires_at": { "type": "string", "format": "date", "description": "Share expiration date" }, "member_role_id": { "type": "integer", "format": "int32", "description": "The ID of the Member Role to be assigned to the group" } }, "required": ["group_id", "group_access"], "description": "Share a group with a group", "x-ref": "#/definitions/postApiV4GroupsIdShare" }, "index$": 1 }] }, "POST /api/v4/groups/{id}/transfer": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID of a group", "type": "string", "required": true, "index$": 0 }, { "name": "postApiV4GroupsIdTransfer", "in": "body", "required": true, "schema": { "type": "object", "properties": { "group_id": { "type": "integer", "format": "int32", "description": "The ID of the target group to which the group needs to be transferred to.If not provided, the source group will be promoted to a top-level group." } }, "description": "Transfer a group to a new parent group or promote a subgroup to a top-level group", "x-ref": "#/definitions/postApiV4GroupsIdTransfer" }, "index$": 1 }] }, "POST /api/v4/groups/{id}/projects/{project_id}": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID of a group", "type": "string", "required": true, "index$": 0 }, { "in": "path", "name": "project_id", "description": "The ID or path of the project", "type": "string", "required": true, "index$": 1 }] }, "POST /api/v4/groups/{id}/ldap_sync": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "type": "integer", "format": "int32", "required": true, "index$": 0 }] }, "POST /api/v4/groups/{id}/restore": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID of a group", "type": "string", "required": true, "index$": 0 }] }, "GET /api/v4/groups/{id}": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID of a group", "type": "string", "required": true, "index$": 0 }, { "in": "query", "name": "with_custom_attributes", "description": "Include custom attributes in the response", "type": "boolean", "default": false, "required": false, "index$": 1 }, { "in": "query", "name": "with_projects", "description": "Omit project details", "type": "boolean", "default": true, "required": false, "index$": 2 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const api_entities_group_detail_ref01_ent = client.ApiEntitiesGroupDetail();
        let api_entities_group_detail_ref01_data = setup.data.new.api_entities_group_detail['api_entities_group_detail_ref01'];
        api_entities_group_detail_ref01_data['group_id'] = setup.idmap['group01'];
        api_entities_group_detail_ref01_data = (await api_entities_group_detail_ref01_ent.create(api_entities_group_detail_ref01_data)).data();
        (0, node_assert_1.default)(null != api_entities_group_detail_ref01_data.id);
        // LOAD
        const api_entities_group_detail_ref01_match_dt0 = {};
        api_entities_group_detail_ref01_match_dt0.id = api_entities_group_detail_ref01_data.id;
        const api_entities_group_detail_ref01_data_dt0 = (await api_entities_group_detail_ref01_ent.load(api_entities_group_detail_ref01_match_dt0)).data();
        (0, node_assert_1.default)(api_entities_group_detail_ref01_data_dt0.id === api_entities_group_detail_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/api_entities_group_detail/ApiEntitiesGroupDetailTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['api_entities_group_detail01', 'api_entities_group_detail02', 'api_entities_group_detail03', 'group01', 'group02', 'group03', 'project01', 'project02', 'project03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_API_ENTITIES_GROUP_DETAIL_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_API_ENTITIES_GROUP_DETAIL_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_API_ENTITIES_GROUP_DETAIL_ENTID'];
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
//# sourceMappingURL=ApiEntitiesGroupDetailEntity.test.js.map