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
(0, node_test_1.describe)('ReleaseEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('GITLAB_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.GitlabSDK.test();
        const ent = testsdk.Release();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.GITLAB_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'release.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "id", "req": false, "type": "`$STRING`", "index$": 0 }], "id": { "field": "id", "name": "id" }, "name": "release", "op": { "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "project_id", "orig": "id", "reqd": true, "type": "`$STRING`" }, { "active": true, "kind": "param", "name": "release_id", "orig": "tag_name", "reqd": true, "type": "`$STRING`" }], "query": [{ "active": true, "kind": "query", "name": "direct_asset_path", "orig": "direct_asset_path", "reqd": true, "type": "`$ANY`" }] }, "contract": { "id": "GET /api/v4/projects/{id}/releases/{tag_name}/downloads/*direct_asset_path", "json": "{\"operationId\":\"getApiV4ProjectsIdReleasesTagNameDownloads*directAssetPath\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The Git tag the release is associated with\",\"in\":\"path\",\"name\":\"tag_name\",\"required\":true,\"type\":\"string\"},{\"description\":\"The path to the file to download, as specified when creating the release asset\",\"in\":\"query\",\"name\":\"direct_asset_path\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Download a project release asset file\"},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/v4/projects/{id}/releases/{tag_name}/downloads/*direct_asset_path", "rename": { "param": { "id": "project_id", "tag_name": "release_id" } }, "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "releases" }, { "var": "release_id" }, { "lit": "downloads" }, { "lit": "*direct_asset_path" }], "select": { "$action": "download_direct_asset_path", "exist": ["direct_asset_path", "project_id", "release_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "project_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 0 }], "query": [{ "active": true, "kind": "query", "name": "suffix_path", "orig": "suffix_path", "reqd": true, "type": "`$ANY`", "index$": 0 }] }, "contract": { "id": "GET /api/v4/projects/{id}/releases/permalink/latest(/)(*suffix_path)", "json": "{\"operationId\":\"getApiV4ProjectsIdReleasesPermalinkLatest()(*suffixPath)\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The path to be suffixed to the latest release\",\"in\":\"query\",\"name\":\"suffix_path\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get the latest project release\"},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/api/v4/projects/{id}/releases/permalink/latest(/)(*suffix_path)", "rename": { "param": { "id": "project_id" } }, "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "releases" }, { "lit": "permalink" }, { "lit": "latest(" }, { "lit": ")(*suffix_path)" }], "select": { "exist": ["project_id", "suffix_path"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "load" }, "remove": { "input": "data", "name": "remove", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "tag_name", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "param", "name": "project_id", "orig": "id", "reqd": true, "type": "`$STRING`", "index$": 1 }] }, "contract": { "id": "DELETE /api/v4/projects/{id}/releases/{tag_name}", "json": "{\"operationId\":\"deleteApiV4ProjectsIdReleasesTagName\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"The Git tag the release is associated with\",\"in\":\"path\",\"name\":\"tag_name\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"204\":{\"description\":\"Delete a release\",\"schema\":{\"description\":\"API_Entities_Release model\",\"properties\":{\"_links\":{\"properties\":{\"closed_issues_url\":{\"type\":\"string\"},\"closed_merge_requests_url\":{\"type\":\"string\"},\"edit_url\":{\"type\":\"string\"},\"merged_merge_requests_url\":{\"type\":\"string\"},\"opened_issues_url\":{\"type\":\"string\"},\"opened_merge_requests_url\":{\"type\":\"string\"},\"self\":{\"type\":\"string\"}},\"type\":\"object\"},\"assets\":{\"properties\":{\"count\":{\"example\":2,\"format\":\"int32\",\"type\":\"integer\"},\"links\":{\"description\":\"API_Entities_Releases_Link model\",\"properties\":{\"direct_asset_url\":{\"example\":\"https://gitlab.example.com/root/app/-/releases/v1.0/downloads/app-v1.0.dmg\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"link_type\":{\"example\":\"other\",\"type\":\"string\"},\"name\":{\"example\":\"app-v1.0.dmg\",\"type\":\"string\"},\"url\":{\"example\":\"https://gitlab.example.com/root/app/-/jobs/688/artifacts/raw/bin/app-v1.0.dmg\",\"type\":\"string\"}},\"type\":\"object\"},\"sources\":{\"properties\":{\"format\":{\"example\":\"zip\",\"type\":\"string\"},\"url\":{\"example\":\"https://gitlab.example.com/root/app/-/archive/v1.0/app-v1.0.zip\",\"type\":\"string\"}},\"type\":\"object\"}},\"type\":\"object\"},\"author\":{\"description\":\"API_Entities_UserBasic model\",\"properties\":{\"avatar_path\":{\"example\":\"/user/avatar/28/The-Big-Lebowski-400-400.png\",\"type\":\"string\"},\"avatar_url\":{\"example\":\"https://gravatar.com/avatar/1\",\"type\":\"string\"},\"custom_attributes\":{\"items\":{\"description\":\"API_Entities_CustomAttribute model\",\"properties\":{\"key\":{\"example\":\"foo\",\"type\":\"string\"},\"value\":{\"example\":\"bar\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"locked\":{\"type\":\"boolean\"},\"name\":{\"example\":\"Administrator\",\"type\":\"string\"},\"public_email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"state\":{\"example\":\"active\",\"type\":\"string\"},\"username\":{\"example\":\"admin\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/root\",\"type\":\"string\"}},\"type\":\"object\"},\"commit\":{\"description\":\"API_Entities_Commit model\",\"properties\":{\"author_email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"author_name\":{\"example\":\"John Smith\",\"type\":\"string\"},\"authored_date\":{\"example\":\"2012-05-28T04:42:42-07:00\",\"format\":\"date-time\",\"type\":\"string\"},\"committed_date\":{\"example\":\"2012-05-28T04:42:42-07:00\",\"format\":\"date-time\",\"type\":\"string\"},\"committer_email\":{\"example\":\"jack@example.com\",\"type\":\"string\"},\"committer_name\":{\"example\":\"Jack Smith\",\"type\":\"string\"},\"created_at\":{\"example\":\"2017-07-26T11:08:53.000+02:00\",\"format\":\"date-time\",\"type\":\"string\"},\"extended_trailers\":{\"example\":\"{ \\\"Signed-off-by\\\": [\\\"John Doe <johndoe@gitlab.com>\\\", \\\"Jane Doe <janedoe@gitlab.com>\\\"] }\",\"type\":\"object\"},\"id\":{\"example\":\"2695effb5807a22ff3d138d593fd856244e155e7\",\"type\":\"string\"},\"message\":{\"example\":\"Initial commit\",\"type\":\"string\"},\"parent_ids\":{\"example\":\"2a4b78934375d7f53875269ffd4f45fd83a84ebe\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"short_id\":{\"example\":\"2695effb\",\"type\":\"string\"},\"title\":{\"example\":\"Initial commit\",\"type\":\"string\"},\"trailers\":{\"example\":\"{ \\\"Merged-By\\\": \\\"Jane Doe janedoe@gitlab.com\\\" }\",\"type\":\"object\"},\"web_url\":{\"example\":\"https://gitlab.example.com/janedoe/gitlab-foss/-/commit/ed899a2f4b50b4370feeea94676502b42383c746\",\"type\":\"string\"}},\"type\":\"object\"},\"commit_path\":{\"example\":\"/root/app/commit/588440f66559714280628a4f9799f0c4eb880a4a\",\"type\":\"string\"},\"created_at\":{\"example\":\"2019-01-03T01:56:19.539Z\",\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"example\":\"Finally released v1.0\",\"type\":\"string\"},\"description_html\":{\"type\":\"string\"},\"evidences\":{\"properties\":{\"collected_at\":{\"example\":\"2019-01-03T01:56:19.539Z\",\"format\":\"date-time\",\"type\":\"string\"},\"filepath\":{\"example\":\"https://gitlab.example.com/root/app/-/releases/v1.0/evidence.json\",\"type\":\"string\"},\"sha\":{\"example\":\"760d6cdfb0879c3ffedec13af470e0f71cf52c6cde4d\",\"type\":\"string\"}},\"type\":\"object\"},\"milestones\":{\"properties\":{\"created_at\":{\"type\":\"string\"},\"description\":{\"type\":\"string\"},\"due_date\":{\"type\":\"string\"},\"expired\":{\"type\":\"string\"},\"group_id\":{\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"iid\":{\"type\":\"string\"},\"issue_stats\":{\"properties\":{\"closed\":{\"type\":\"string\"},\"total\":{\"type\":\"string\"}},\"type\":\"object\"},\"project_id\":{\"type\":\"string\"},\"start_date\":{\"type\":\"string\"},\"state\":{\"type\":\"string\"},\"title\":{\"type\":\"string\"},\"updated_at\":{\"type\":\"string\"},\"web_url\":{\"type\":\"string\"}},\"type\":\"object\"},\"name\":{\"example\":\"Release v1.0\",\"type\":\"string\"},\"released_at\":{\"example\":\"2019-01-03T01:56:19.539Z\",\"format\":\"date-time\",\"type\":\"string\"},\"tag_name\":{\"example\":\"v1.0\",\"type\":\"string\"},\"tag_path\":{\"example\":\"/root/app/-/tags/v1.0\",\"type\":\"string\"},\"upcoming_release\":{\"type\":\"boolean\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Bad request\"},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "DELETE", "orig": "/api/v4/projects/{id}/releases/{tag_name}", "rename": { "param": { "id": "project_id", "tag_name": "id" } }, "segments": [{ "lit": "api" }, { "lit": "v4" }, { "lit": "projects" }, { "var": "project_id" }, { "lit": "releases" }, { "var": "id" }], "select": { "exist": ["id", "project_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "remove" } }, "relations": { "ancestors": [["project"], ["project", "release"]] }, "key$": "release", "name__orig": "release", "Name": "Release", "name_": "release", "name-": "release", "NAME": "RELEASE", "index$": 251 }, { "active": true, "entity": "release", "key$": "BasicReleaseFlow", "kind": "basic", "name": "BasicReleaseFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "release_ref01", "srcdatavar": "release_ref01_data", "suffix": "_dt0" }, "match": { "id": "release01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-release_ref01" } }], "index$": 0 }] }, 'Release');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let release_ref01_data = Object.values(setup.data.existing.release)[0];
        // LOAD
        const release_ref01_ent = client.Release();
        const release_ref01_match_dt0 = {};
        release_ref01_match_dt0.id = release_ref01_data.id;
        const release_ref01_data_dt0 = (await release_ref01_ent.load(release_ref01_match_dt0)).data();
        (0, node_assert_1.default)(release_ref01_data_dt0.id === release_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/release/ReleaseTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.GitlabSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['release01', 'release02', 'release03', 'project01', 'project02', 'project03', 'project01', 'project02', 'project03', 'release01', 'release02', 'release03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'GITLAB_TEST_RELEASE_ENTID': idmap,
        'GITLAB_TEST_LIVE': 'FALSE',
        'GITLAB_TEST_EXPLAIN': 'FALSE',
        'GITLAB_APIKEY': '',
    });
    idmap = env['GITLAB_TEST_RELEASE_ENTID'];
    const live = 'TRUE' === env.GITLAB_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['GITLAB_TEST_RELEASE_ENTID'];
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
//# sourceMappingURL=ReleaseEntity.test.js.map