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
(0, node_test_1.describe)('ApiEntitiesCiJobEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.ApiEntitiesCiJob();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['create', 'list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'api_entities_ci_job.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "allow_failure": { "a": true, "h": "Allow Failure", "n": "allow_failure", "r": false, "t": "`$BOOLEAN`", "key$": "allow_failure", "index$": 0 }, "archived": { "a": true, "h": "Archived", "n": "archived", "r": false, "t": "`$BOOLEAN`", "key$": "archived", "index$": 1 }, "artifacts": { "a": true, "h": "Artifacts", "n": "artifacts", "r": false, "t": "`$ARRAY`", "key$": "artifacts", "index$": 2 }, "artifacts_expire_at": { "a": true, "fo": "date-time", "h": "Artifacts Expire At", "n": "artifacts_expire_at", "r": false, "t": "`$STRING`", "key$": "artifacts_expire_at", "index$": 3 }, "artifacts_file": { "a": true, "h": "Artifacts File", "n": "artifacts_file", "r": false, "t": "`$OBJECT`", "key$": "artifacts_file", "index$": 4 }, "commit": { "a": true, "h": "Commit", "n": "commit", "r": false, "sh": "API_Entities_Commit model", "t": "`$OBJECT`", "key$": "commit", "index$": 5 }, "coverage": { "a": true, "fo": "float", "h": "Coverage", "n": "coverage", "r": false, "t": "`$NUMBER`", "key$": "coverage", "index$": 6 }, "created_at": { "a": true, "fo": "date-time", "h": "Created At", "n": "created_at", "r": false, "t": "`$STRING`", "key$": "created_at", "index$": 7 }, "duration": { "a": true, "fo": "float", "h": "Duration", "n": "duration", "r": false, "sh": "Time spent running", "t": "`$NUMBER`", "key$": "duration", "index$": 8 }, "erased_at": { "a": true, "fo": "date-time", "h": "Erased At", "n": "erased_at", "r": false, "t": "`$STRING`", "key$": "erased_at", "index$": 9 }, "failure_reason": { "a": true, "h": "Failure Reason", "n": "failure_reason", "r": false, "t": "`$STRING`", "key$": "failure_reason", "index$": 10 }, "file_format": { "a": true, "h": "File Format", "n": "file_format", "r": false, "t": "`$STRING`", "key$": "file_format", "index$": 11 }, "file_type": { "a": true, "h": "File Type", "n": "file_type", "r": false, "t": "`$STRING`", "key$": "file_type", "index$": 12 }, "filename": { "a": true, "h": "Filename", "n": "filename", "r": false, "t": "`$STRING`", "key$": "filename", "index$": 13 }, "finished_at": { "a": true, "fo": "date-time", "h": "Finished At", "n": "finished_at", "r": false, "t": "`$STRING`", "key$": "finished_at", "index$": 14 }, "id": { "a": true, "fo": "int32", "h": "Id", "n": "id", "r": false, "t": "`$INTEGER`", "key$": "id", "index$": 15 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "t": "`$STRING`", "key$": "name", "index$": 16 }, "pipeline": { "a": true, "h": "Pipeline", "n": "pipeline", "r": false, "sh": "API_Entities_Ci_PipelineBasic model", "t": "`$OBJECT`", "key$": "pipeline", "index$": 17 }, "project": { "a": true, "h": "Project", "n": "project", "r": false, "t": "`$OBJECT`", "key$": "project", "index$": 18 }, "queued_duration": { "a": true, "fo": "float", "h": "Queued Duration", "n": "queued_duration", "r": false, "sh": "Time spent enqueued", "t": "`$NUMBER`", "key$": "queued_duration", "index$": 19 }, "ref": { "a": true, "h": "Ref", "n": "ref", "r": false, "t": "`$STRING`", "key$": "ref", "index$": 20 }, "runner": { "a": true, "h": "Runner", "n": "runner", "r": false, "sh": "API_Entities_Ci_Runner model", "t": "`$OBJECT`", "key$": "runner", "index$": 21 }, "runner_manager": { "a": true, "h": "Runner Manager", "n": "runner_manager", "r": false, "sh": "API_Entities_Ci_RunnerManager model", "t": "`$OBJECT`", "key$": "runner_manager", "index$": 22 }, "size": { "a": true, "fo": "int32", "h": "Size", "n": "size", "r": false, "t": "`$INTEGER`", "key$": "size", "index$": 23 }, "stage": { "a": true, "h": "Stage", "n": "stage", "r": false, "t": "`$STRING`", "key$": "stage", "index$": 24 }, "started_at": { "a": true, "fo": "date-time", "h": "Started At", "n": "started_at", "r": false, "t": "`$STRING`", "key$": "started_at", "index$": 25 }, "status": { "a": true, "h": "Status", "n": "status", "r": false, "t": "`$STRING`", "key$": "status", "index$": 26 }, "tag": { "a": true, "h": "Tag", "n": "tag", "r": false, "t": "`$BOOLEAN`", "key$": "tag", "index$": 27 }, "tag_list": { "a": true, "h": "Tag List", "n": "tag_list", "r": false, "t": "`$ARRAY`", "key$": "tag_list", "index$": 28 }, "user": { "a": true, "h": "User", "n": "user", "r": false, "t": "`$OBJECT`", "key$": "user", "index$": 29 }, "web_url": { "a": true, "h": "Web Url", "n": "web_url", "r": false, "t": "`$STRING`", "key$": "web_url", "index$": 30 } }, "id": { "field": "id", "name": "id" }, "name": "api_entities_ci_job", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /api/v4/projects/{id}/jobs/{job_id}/cancel", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "ex": 88, "k": "param", "n": "job_id", "or": "job_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "k": "query", "n": "post_api_v4_projects_id_jobs_job_id_cancel", "or": "post_api_v4_projects_id_jobs_job_id_cancel", "r": true, "t": "`$OBJECT`", "index$": 0 }] }, "k": "http", "m": "POST", "o": "/api/v4/projects/{id}/jobs/{job_id}/cancel", "q": { "exist": ["job_id", "post_api_v4_projects_id_jobs_job_id_cancel", "project_id"] }, "r": { "param": { "id": "project_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "jobs" }, { "var": "job_id" }, { "lit": "cancel" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "POST /api/v4/projects/{id}/jobs/{job_id}/artifacts/keep", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "job_id", "or": "job_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "POST", "o": "/api/v4/projects/{id}/jobs/{job_id}/artifacts/keep", "q": { "exist": ["job_id", "project_id"] }, "r": { "param": { "id": "project_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "jobs" }, { "var": "job_id" }, { "lit": "artifacts" }, { "lit": "keep" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "POST /api/v4/projects/{id}/jobs/{job_id}/erase", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "ex": 88, "k": "param", "n": "job_id", "or": "job_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "POST", "o": "/api/v4/projects/{id}/jobs/{job_id}/erase", "q": { "exist": ["job_id", "project_id"] }, "r": { "param": { "id": "project_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "jobs" }, { "var": "job_id" }, { "lit": "erase" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }, { "a": true, "co": { "id": "POST /api/v4/projects/{id}/jobs/{job_id}/retry", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "ex": 88, "k": "param", "n": "job_id", "or": "job_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "POST", "o": "/api/v4/projects/{id}/jobs/{job_id}/retry", "q": { "exist": ["job_id", "project_id"] }, "r": { "param": { "id": "project_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "jobs" }, { "var": "job_id" }, { "lit": "retry" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 3 }], "key$": "create" }, "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /api/v4/projects/{id}/pipelines/{pipeline_id}/jobs", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "ex": 18, "k": "param", "n": "pipeline_id", "or": "pipeline_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": 11, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }], "query": [{ "a": true, "k": "query", "n": "include_retried", "or": "include_retried", "r": false, "t": "`$ANY`", "index$": 0 }, { "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 1 }, { "a": true, "ex": 20, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$INTEGER`", "index$": 2 }, { "a": true, "ex": ["pending", "running"], "k": "query", "n": "scope", "or": "scope", "r": false, "t": "`$ANY`", "index$": 3 }] }, "k": "http", "m": "GET", "o": "/api/v4/projects/{id}/pipelines/{pipeline_id}/jobs", "q": { "exist": ["include_retried", "page", "per_page", "pipeline_id", "project_id", "scope"] }, "r": { "param": { "id": "project_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "pipelines" }, { "var": "pipeline_id" }, { "lit": "jobs" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /api/v4/projects/{id}/jobs", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 0 }], "query": [{ "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "ex": 20, "k": "query", "n": "per_page", "or": "per_page", "r": false, "t": "`$INTEGER`", "index$": 1 }, { "a": true, "ex": ["pending", "running"], "k": "query", "n": "scope", "or": "scope", "r": false, "t": "`$ANY`", "index$": 2 }] }, "k": "http", "m": "GET", "o": "/api/v4/projects/{id}/jobs", "q": { "exist": ["page", "per_page", "project_id", "scope"] }, "r": { "param": { "id": "project_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "jobs" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }, { "a": true, "co": { "id": "GET /api/v4/projects/{id}/jobs/{job_id}/trace", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "ex": 88, "k": "param", "n": "job_id", "or": "job_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/api/v4/projects/{id}/jobs/{job_id}/trace", "q": { "exist": ["job_id", "project_id"] }, "r": { "param": { "id": "project_id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "jobs" }, { "var": "job_id" }, { "lit": "trace" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 2 }, { "a": true, "co": { "id": "GET /api/v4/job", "source": "swagger2", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/api/v4/job", "q": {}, "r": {}, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "job" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /api/v4/job/allowed_agents", "source": "swagger2", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/api/v4/job/allowed_agents", "q": {}, "r": {}, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "job" }, { "lit": "allowed_agents" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 4 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /api/v4/projects/{id}/jobs/{job_id}", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "ex": 88, "k": "param", "n": "id", "or": "job_id", "r": true, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "param", "n": "project_id", "or": "id", "r": true, "t": "`$STRING`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/api/v4/projects/{id}/jobs/{job_id}", "q": { "exist": ["id", "project_id"] }, "r": { "param": { "id": "project_id", "job_id": "id" } }, "s": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "jobs" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [["$.main.kit.entity.project"], ["$.main.kit.entity.project", "$.main.kit.entity.job"], ["$.main.kit.entity.project"]] }, "key$": "api_entities_ci_job", "name__orig": "api_entities_ci_job", "Name": "ApiEntitiesCiJob", "name_": "api_entities_ci_job", "name-": "api-entities-ci-job", "NAME": "API_ENTITIES_CI_JOB", "index$": 23 }, { "active": true, "entity": "api_entities_ci_job", "key$": "BasicApiEntitiesCiJobFlow", "kind": "basic", "name": "BasicApiEntitiesCiJobFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "api_entities_ci_job_ref01" }, "m": { "job_id": "job01", "pipeline_id": "pipeline01", "project_id": "project01" }, "o": "create", "s": [], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "api_entities_ci_job_ref01" } }], "index$": 1 }, { "a": true, "d": {}, "i": { "ref": "api_entities_ci_job_ref01", "srcdatavar": "api_entities_ci_job_ref01_data", "suffix": "_dt0" }, "m": { "id": "api_entities_ci_job01", "project_id": "project01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-api_entities_ci_job_ref01" } }], "index$": 2 }] }, 'ApiEntitiesCiJob', { "POST /api/v4/projects/{id}/jobs/{job_id}/cancel": { "protocol": "http", "parameters": [{ "in": "path", "name": "job_id", "description": "The ID of a job", "type": "integer", "format": "int32", "required": true, "example": 88, "index$": 0 }, { "in": "path", "name": "id", "type": "integer", "format": "int32", "required": true, "index$": 1 }, { "name": "postApiV4ProjectsIdJobsJobIdCancel", "in": "body", "required": true, "schema": { "type": "object", "properties": { "force": { "type": "boolean", "description": "Force cancellation for a job with a state of `canceling`", "example": true } }, "description": "Cancel a specific job of a project", "x-ref": "#/definitions/postApiV4ProjectsIdJobsJobIdCancel" }, "index$": 2 }] }, "POST /api/v4/projects/{id}/jobs/{job_id}/artifacts/keep": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project", "type": "string", "required": true, "index$": 0 }, { "in": "path", "name": "job_id", "description": "The ID of a job", "type": "integer", "format": "int32", "required": true, "index$": 1 }] }, "POST /api/v4/projects/{id}/jobs/{job_id}/erase": { "protocol": "http", "parameters": [{ "in": "path", "name": "job_id", "description": "The ID of a build", "type": "integer", "format": "int32", "required": true, "example": 88, "index$": 0 }, { "in": "path", "name": "id", "type": "integer", "format": "int32", "required": true, "index$": 1 }] }, "POST /api/v4/projects/{id}/jobs/{job_id}/retry": { "protocol": "http", "parameters": [{ "in": "path", "name": "job_id", "description": "The ID of a job", "type": "integer", "format": "int32", "required": true, "example": 88, "index$": 0 }, { "in": "path", "name": "id", "type": "integer", "format": "int32", "required": true, "index$": 1 }] }, "GET /api/v4/projects/{id}/pipelines/{pipeline_id}/jobs": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The project ID or URL-encoded path", "type": "string", "required": true, "example": 11, "index$": 0 }, { "in": "path", "name": "pipeline_id", "description": "The pipeline ID", "type": "integer", "format": "int32", "required": true, "example": 18, "index$": 1 }, { "in": "query", "name": "include_retried", "description": "Includes retried jobs", "type": "boolean", "default": false, "required": false, "index$": 2 }, { "in": "query", "name": "scope", "description": "The scope of builds to show", "type": "string", "enum": ["created", "waiting_for_resource", "preparing", "waiting_for_callback", "pending", "running", "success", "failed", "canceling", "canceled", "skipped", "manual", "scheduled"], "required": false, "example": ["pending", "running"], "index$": 3 }, { "in": "query", "name": "page", "description": "Current page number", "type": "integer", "format": "int32", "default": 1, "required": false, "example": 1, "index$": 4 }, { "in": "query", "name": "per_page", "description": "Number of items per page", "type": "integer", "format": "int32", "default": 20, "required": false, "example": 20, "index$": 5 }] }, "GET /api/v4/projects/{id}/jobs": { "protocol": "http", "parameters": [{ "in": "path", "name": "id", "description": "The ID or URL-encoded path of the project", "type": "string", "required": true, "index$": 0 }, { "in": "query", "name": "scope", "description": "The scope of builds to show", "type": "array", "items": { "type": "string", "enum": ["created", "waiting_for_resource", "preparing", "waiting_for_callback", "pending", "running", "success", "failed", "canceling", "canceled", "skipped", "manual", "scheduled"] }, "required": false, "example": ["pending", "running"], "index$": 1 }, { "in": "query", "name": "page", "description": "Current page number", "type": "integer", "format": "int32", "default": 1, "required": false, "example": 1, "index$": 2 }, { "in": "query", "name": "per_page", "description": "Number of items per page", "type": "integer", "format": "int32", "default": 20, "required": false, "example": 20, "index$": 3 }] }, "GET /api/v4/projects/{id}/jobs/{job_id}/trace": { "protocol": "http", "parameters": [{ "in": "path", "name": "job_id", "description": "The ID of a job", "type": "integer", "format": "int32", "required": true, "example": 88, "index$": 0 }, { "in": "path", "name": "id", "type": "integer", "format": "int32", "required": true, "index$": 1 }] }, "GET /api/v4/job": { "protocol": "http", "parameters": [] }, "GET /api/v4/job/allowed_agents": { "protocol": "http", "parameters": [] }, "GET /api/v4/projects/{id}/jobs/{job_id}": { "protocol": "http", "parameters": [{ "in": "path", "name": "job_id", "description": "The ID of a job", "type": "integer", "format": "int32", "required": true, "example": 88, "index$": 0 }, { "in": "path", "name": "id", "type": "integer", "format": "int32", "required": true, "index$": 1 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const api_entities_ci_job_ref01_ent = client.ApiEntitiesCiJob();
        let api_entities_ci_job_ref01_data = setup.data.new.api_entities_ci_job['api_entities_ci_job_ref01'];
        api_entities_ci_job_ref01_data['job_id'] = setup.idmap['job01'];
        api_entities_ci_job_ref01_data['pipeline_id'] = setup.idmap['pipeline01'];
        api_entities_ci_job_ref01_data['project_id'] = setup.idmap['project01'];
        api_entities_ci_job_ref01_data = (await api_entities_ci_job_ref01_ent.create(api_entities_ci_job_ref01_data)).data();
        (0, node_assert_1.default)(null != api_entities_ci_job_ref01_data.id);
        // LIST
        const api_entities_ci_job_ref01_match = {};
        const api_entities_ci_job_ref01_list = (await api_entities_ci_job_ref01_ent.list(api_entities_ci_job_ref01_match)).map((e) => e.data());
        (0, node_assert_1.default)(!isempty(select(api_entities_ci_job_ref01_list, { id: api_entities_ci_job_ref01_data.id })));
        // LOAD
        const api_entities_ci_job_ref01_match_dt0 = {};
        api_entities_ci_job_ref01_match_dt0.id = api_entities_ci_job_ref01_data.id;
        const api_entities_ci_job_ref01_data_dt0 = (await api_entities_ci_job_ref01_ent.load(api_entities_ci_job_ref01_match_dt0)).data();
        (0, node_assert_1.default)(api_entities_ci_job_ref01_data_dt0.id === api_entities_ci_job_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/api_entities_ci_job/ApiEntitiesCiJobTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['api_entities_ci_job01', 'api_entities_ci_job02', 'api_entities_ci_job03', 'project01', 'project02', 'project03', 'job01', 'job02', 'job03', 'pipeline01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_API_ENTITIES_CI_JOB_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_API_ENTITIES_CI_JOB_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_API_ENTITIES_CI_JOB_ENTID'];
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
//# sourceMappingURL=ApiEntitiesCiJobEntity.test.js.map