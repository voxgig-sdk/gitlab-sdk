

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { GitlabSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('ApiEntitiesMergeRequestChangeEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesMergeRequestChange()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_merge_request_change.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"allow_collaboration","req":false,"type":"`$BOOLEAN`","index$":0},{"active":true,"name":"allow_maintainer_to_push","req":false,"type":"`$BOOLEAN`","index$":1},{"active":true,"name":"approvals_before_merge","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"assignee","req":false,"short":"API_Entities_UserBasic model","type":"`$OBJECT`","index$":3},{"active":true,"name":"assignees","req":false,"short":"API_Entities_UserBasic model","type":"`$OBJECT`","index$":4},{"active":true,"name":"author","req":false,"short":"API_Entities_UserBasic model","type":"`$OBJECT`","index$":5},{"active":true,"name":"blocking_discussions_resolved","req":false,"type":"`$STRING`","index$":6},{"active":true,"name":"changes","req":false,"short":"API_Entities_Diff model","type":"`$OBJECT`","index$":7},{"active":true,"name":"changes_count","req":false,"type":"`$STRING`","index$":8},{"active":true,"name":"closed_at","req":false,"type":"`$STRING`","index$":9},{"active":true,"name":"closed_by","req":false,"short":"API_Entities_UserBasic model","type":"`$OBJECT`","index$":10},{"active":true,"format":"date-time","name":"created_at","req":false,"type":"`$STRING`","index$":11},{"active":true,"name":"description","req":false,"type":"`$STRING`","index$":12},{"active":true,"name":"description_html","req":false,"type":"`$STRING`","index$":13},{"active":true,"name":"detailed_merge_status","req":false,"type":"`$STRING`","index$":14},{"active":true,"name":"diff_refs","req":false,"type":"`$OBJECT`","index$":15},{"active":true,"name":"discussion_locked","req":false,"type":"`$STRING`","index$":16},{"active":true,"name":"diverged_commits_count","req":false,"type":"`$STRING`","index$":17},{"active":true,"name":"downvotes","req":false,"type":"`$STRING`","index$":18},{"active":true,"name":"draft","req":false,"type":"`$STRING`","index$":19},{"active":true,"name":"first_contribution","req":false,"type":"`$STRING`","index$":20},{"active":true,"name":"first_deployed_to_production_at","req":false,"type":"`$STRING`","index$":21},{"active":true,"name":"force_remove_source_branch","req":false,"type":"`$STRING`","index$":22},{"active":true,"name":"has_conflicts","req":false,"type":"`$BOOLEAN`","index$":23},{"active":true,"name":"head_pipeline","req":false,"short":"API_Entities_Ci_Pipeline model","type":"`$OBJECT`","index$":24},{"active":true,"format":"int32","name":"id","req":false,"type":"`$INTEGER`","index$":25},{"active":true,"format":"int32","name":"iid","req":false,"type":"`$INTEGER`","index$":26},{"active":true,"name":"imported","req":false,"type":"`$STRING`","index$":27},{"active":true,"name":"imported_from","req":false,"type":"`$STRING`","index$":28},{"active":true,"name":"labels","req":false,"type":"`$STRING`","index$":29},{"active":true,"name":"latest_build_finished_at","req":false,"type":"`$STRING`","index$":30},{"active":true,"name":"latest_build_started_at","req":false,"type":"`$STRING`","index$":31},{"active":true,"name":"merge_after","req":false,"type":"`$STRING`","index$":32},{"active":true,"name":"merge_commit_sha","req":false,"type":"`$STRING`","index$":33},{"active":true,"name":"merge_error","req":false,"type":"`$STRING`","index$":34},{"active":true,"name":"merge_status","req":false,"type":"`$STRING`","index$":35},{"active":true,"name":"merge_user","req":false,"short":"API_Entities_UserBasic model","type":"`$OBJECT`","index$":36},{"active":true,"name":"merge_when_pipeline_succeeds","req":false,"type":"`$STRING`","index$":37},{"active":true,"name":"merged_at","req":false,"type":"`$STRING`","index$":38},{"active":true,"name":"merged_by","req":false,"short":"API_Entities_UserBasic model","type":"`$OBJECT`","index$":39},{"active":true,"name":"milestone","req":false,"type":"`$OBJECT`","index$":40},{"active":true,"name":"overflow","req":false,"type":"`$STRING`","index$":41},{"active":true,"name":"pipeline","req":false,"short":"API_Entities_Ci_PipelineBasic model","type":"`$OBJECT`","index$":42},{"active":true,"name":"prepared_at","req":false,"type":"`$STRING`","index$":43},{"active":true,"format":"int32","name":"project_id","req":false,"type":"`$INTEGER`","index$":44},{"active":true,"name":"rebase_in_progress","req":false,"type":"`$STRING`","index$":45},{"active":true,"name":"reference","req":false,"type":"`$STRING`","index$":46},{"active":true,"name":"references","req":false,"type":"`$OBJECT`","index$":47},{"active":true,"name":"reviewers","req":false,"short":"API_Entities_UserBasic model","type":"`$OBJECT`","index$":48},{"active":true,"name":"sha","req":false,"type":"`$STRING`","index$":49},{"active":true,"name":"should_remove_source_branch","req":false,"type":"`$BOOLEAN`","index$":50},{"active":true,"name":"source_branch","req":false,"type":"`$STRING`","index$":51},{"active":true,"name":"source_project_id","req":false,"type":"`$STRING`","index$":52},{"active":true,"name":"squash","req":false,"type":"`$STRING`","index$":53},{"active":true,"name":"squash_commit_sha","req":false,"type":"`$STRING`","index$":54},{"active":true,"name":"squash_on_merge","req":false,"type":"`$STRING`","index$":55},{"active":true,"name":"state","req":false,"type":"`$STRING`","index$":56},{"active":true,"name":"subscribed","req":false,"type":"`$STRING`","index$":57},{"active":true,"name":"target_branch","req":false,"type":"`$STRING`","index$":58},{"active":true,"name":"target_project_id","req":false,"type":"`$STRING`","index$":59},{"active":true,"name":"task_completion_status","req":false,"type":"`$STRING`","index$":60},{"active":true,"name":"time_stats","req":false,"short":"API_Entities_IssuableTimeStats model","type":"`$OBJECT`","index$":61},{"active":true,"name":"title","req":false,"type":"`$STRING`","index$":62},{"active":true,"name":"title_html","req":false,"type":"`$STRING`","index$":63},{"active":true,"format":"date-time","name":"updated_at","req":false,"type":"`$STRING`","index$":64},{"active":true,"name":"upvotes","req":false,"type":"`$STRING`","index$":65},{"active":true,"name":"user","req":false,"type":"`$OBJECT`","index$":66},{"active":true,"name":"user_notes_count","req":false,"type":"`$STRING`","index$":67},{"active":true,"name":"web_url","req":false,"type":"`$STRING`","index$":68},{"active":true,"name":"work_in_progress","req":false,"type":"`$STRING`","index$":69}],"id":{"field":"id","name":"id"},"name":"api_entities_merge_request_change","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"merge_request_id","orig":"merge_request_iid","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}],"query":[{"active":true,"kind":"query","name":"unidiff","orig":"unidiff","reqd":false,"type":"`$ANY`","index$":0}]},"contract":{"id":"GET /api/v4/projects/{id}/merge_requests/{merge_request_iid}/changes","json":"{\"operationId\":\"getApiV4ProjectsIdMergeRequestsMergeRequestIidChanges\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project.\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"default\":false,\"description\":\"A diff in a Unified diff format\",\"in\":\"query\",\"name\":\"unidiff\",\"required\":false,\"type\":\"boolean\"},{\"format\":\"int32\",\"in\":\"path\",\"name\":\"merge_request_iid\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get single merge request changes\",\"schema\":{\"description\":\"API_Entities_MergeRequestChanges model\",\"properties\":{\"allow_collaboration\":{\"type\":\"string\"},\"allow_maintainer_to_push\":{\"type\":\"string\"},\"approvals_before_merge\":{\"type\":\"string\"},\"assignee\":{\"description\":\"API_Entities_UserBasic model\",\"properties\":{\"avatar_path\":{\"example\":\"/user/avatar/28/The-Big-Lebowski-400-400.png\",\"type\":\"string\"},\"avatar_url\":{\"example\":\"https://gravatar.com/avatar/1\",\"type\":\"string\"},\"custom_attributes\":{\"items\":{\"description\":\"API_Entities_CustomAttribute model\",\"properties\":{\"key\":{\"example\":\"foo\",\"type\":\"string\"},\"value\":{\"example\":\"bar\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"locked\":{\"type\":\"boolean\"},\"name\":{\"example\":\"Administrator\",\"type\":\"string\"},\"public_email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"state\":{\"example\":\"active\",\"type\":\"string\"},\"username\":{\"example\":\"admin\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/root\",\"type\":\"string\"}},\"type\":\"object\"},\"assignees\":{\"description\":\"API_Entities_UserBasic model\",\"properties\":{\"avatar_path\":{\"example\":\"/user/avatar/28/The-Big-Lebowski-400-400.png\",\"type\":\"string\"},\"avatar_url\":{\"example\":\"https://gravatar.com/avatar/1\",\"type\":\"string\"},\"custom_attributes\":{\"items\":{\"description\":\"API_Entities_CustomAttribute model\",\"properties\":{\"key\":{\"example\":\"foo\",\"type\":\"string\"},\"value\":{\"example\":\"bar\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"locked\":{\"type\":\"boolean\"},\"name\":{\"example\":\"Administrator\",\"type\":\"string\"},\"public_email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"state\":{\"example\":\"active\",\"type\":\"string\"},\"username\":{\"example\":\"admin\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/root\",\"type\":\"string\"}},\"type\":\"object\"},\"author\":{\"description\":\"API_Entities_UserBasic model\",\"properties\":{\"avatar_path\":{\"example\":\"/user/avatar/28/The-Big-Lebowski-400-400.png\",\"type\":\"string\"},\"avatar_url\":{\"example\":\"https://gravatar.com/avatar/1\",\"type\":\"string\"},\"custom_attributes\":{\"items\":{\"description\":\"API_Entities_CustomAttribute model\",\"properties\":{\"key\":{\"example\":\"foo\",\"type\":\"string\"},\"value\":{\"example\":\"bar\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"locked\":{\"type\":\"boolean\"},\"name\":{\"example\":\"Administrator\",\"type\":\"string\"},\"public_email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"state\":{\"example\":\"active\",\"type\":\"string\"},\"username\":{\"example\":\"admin\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/root\",\"type\":\"string\"}},\"type\":\"object\"},\"blocking_discussions_resolved\":{\"type\":\"string\"},\"changes\":{\"description\":\"API_Entities_Diff model\",\"properties\":{\"a_mode\":{\"example\":\"100755\",\"type\":\"string\"},\"b_mode\":{\"example\":\"100644\",\"type\":\"string\"},\"collapsed\":{\"type\":\"boolean\"},\"deleted_file\":{\"type\":\"boolean\"},\"diff\":{\"example\":\"@@ -71,6 +71,8 @@\\\\n...\",\"type\":\"string\"},\"generated_file\":{\"type\":\"boolean\"},\"new_file\":{\"type\":\"boolean\"},\"new_path\":{\"example\":\"doc/update/5.4-to-6.0.md\",\"type\":\"string\"},\"old_path\":{\"example\":\"doc/update/5.4-to-6.0.md\",\"type\":\"string\"},\"renamed_file\":{\"type\":\"boolean\"},\"too_large\":{\"type\":\"boolean\"}},\"type\":\"object\"},\"changes_count\":{\"type\":\"string\"},\"closed_at\":{\"type\":\"string\"},\"closed_by\":{\"description\":\"API_Entities_UserBasic model\",\"properties\":{\"avatar_path\":{\"example\":\"/user/avatar/28/The-Big-Lebowski-400-400.png\",\"type\":\"string\"},\"avatar_url\":{\"example\":\"https://gravatar.com/avatar/1\",\"type\":\"string\"},\"custom_attributes\":{\"items\":{\"description\":\"API_Entities_CustomAttribute model\",\"properties\":{\"key\":{\"example\":\"foo\",\"type\":\"string\"},\"value\":{\"example\":\"bar\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"locked\":{\"type\":\"boolean\"},\"name\":{\"example\":\"Administrator\",\"type\":\"string\"},\"public_email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"state\":{\"example\":\"active\",\"type\":\"string\"},\"username\":{\"example\":\"admin\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/root\",\"type\":\"string\"}},\"type\":\"object\"},\"created_at\":{\"example\":\"2022-08-17T12:46:35.053Z\",\"format\":\"date-time\",\"type\":\"string\"},\"description\":{\"example\":\"Repellendus impedit et vel velit dignissimos.\",\"type\":\"string\"},\"description_html\":{\"type\":\"string\"},\"detailed_merge_status\":{\"type\":\"string\"},\"diff_refs\":{\"properties\":{\"base_sha\":{\"type\":\"string\"},\"head_sha\":{\"type\":\"string\"},\"start_sha\":{\"type\":\"string\"}},\"type\":\"object\"},\"discussion_locked\":{\"type\":\"string\"},\"diverged_commits_count\":{\"type\":\"string\"},\"downvotes\":{\"type\":\"string\"},\"draft\":{\"type\":\"string\"},\"first_contribution\":{\"type\":\"string\"},\"first_deployed_to_production_at\":{\"type\":\"string\"},\"force_remove_source_branch\":{\"type\":\"string\"},\"has_conflicts\":{\"type\":\"string\"},\"head_pipeline\":{\"description\":\"API_Entities_Ci_Pipeline model\",\"properties\":{\"before_sha\":{\"example\":\"a91957a858320c0e17f3a0eca7cfacbff50ea29a\",\"type\":\"string\"},\"committed_at\":{\"example\":\"2015-12-24T15:51:21.880Z\",\"format\":\"date-time\",\"type\":\"string\"},\"coverage\":{\"example\":98.29,\"format\":\"float\",\"type\":\"number\"},\"created_at\":{\"example\":\"2015-12-24T15:51:21.880Z\",\"format\":\"date-time\",\"type\":\"string\"},\"detailed_status\":{\"properties\":{\"action\":{\"properties\":{\"button_title\":{\"example\":\"Cancel this job\",\"type\":\"string\"},\"confirmation_message\":{\"example\":\"Are you sure?\",\"type\":\"string\"},\"icon\":{\"example\":\"cancel\",\"type\":\"string\"},\"method\":{\"example\":\"post\",\"type\":\"string\"},\"path\":{\"example\":\"/namespace1/project1/-/jobs/2/cancel\",\"type\":\"string\"},\"title\":{\"example\":\"Cancel\",\"type\":\"string\"}},\"type\":\"object\"},\"details_path\":{\"example\":\"/test-group/test-project/-/pipelines/287\",\"type\":\"string\"},\"favicon\":{\"example\":\"/assets/ci_favicons/favicon_status_success.png\",\"type\":\"string\"},\"group\":{\"example\":\"success\",\"type\":\"string\"},\"has_details\":{\"example\":true,\"type\":\"boolean\"},\"icon\":{\"example\":\"status_success\",\"type\":\"string\"},\"illustration\":{\"example\":\"{\\n  \\\"image\\\": \\\"illustrations/empty-state/empty-job-not-triggered-md.svg\\\",\\n  \\\"size\\\": \\\"\\\",\\n  \\\"title\\\": \\\"This job has not been triggered yet\\\",\\n  \\\"content\\\": \\\"This job depends on upstream jobs that need to succeed in order for this job to be triggered\\\"\\n}\\n\",\"type\":\"object\"},\"label\":{\"example\":\"passed\",\"type\":\"string\"},\"text\":{\"example\":\"passed\",\"type\":\"string\"},\"tooltip\":{\"example\":\"passed\",\"type\":\"string\"}},\"type\":\"object\"},\"duration\":{\"description\":\"Time spent running in seconds\",\"example\":127,\"format\":\"int32\",\"type\":\"integer\"},\"finished_at\":{\"example\":\"2015-12-24T17:54:31.198Z\",\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"iid\":{\"example\":2,\"format\":\"int32\",\"type\":\"integer\"},\"project_id\":{\"example\":3,\"format\":\"int32\",\"type\":\"integer\"},\"queued_duration\":{\"description\":\"Time spent enqueued in seconds\",\"example\":63,\"format\":\"int32\",\"type\":\"integer\"},\"ref\":{\"example\":\"feature-branch\",\"type\":\"string\"},\"sha\":{\"example\":\"0ec9e58fdfca6cdd6652c083c9edb53abc0bad52\",\"type\":\"string\"},\"source\":{\"example\":\"push\",\"type\":\"string\"},\"started_at\":{\"example\":\"2015-12-24T17:54:30.733Z\",\"format\":\"date-time\",\"type\":\"string\"},\"status\":{\"example\":\"success\",\"type\":\"string\"},\"tag\":{\"example\":false,\"type\":\"boolean\"},\"updated_at\":{\"example\":\"2015-12-24T17:54:31.198Z\",\"format\":\"date-time\",\"type\":\"string\"},\"user\":{\"description\":\"API_Entities_UserBasic model\",\"properties\":{\"avatar_path\":{\"example\":\"/user/avatar/28/The-Big-Lebowski-400-400.png\",\"type\":\"string\"},\"avatar_url\":{\"example\":\"https://gravatar.com/avatar/1\",\"type\":\"string\"},\"custom_attributes\":{\"items\":{\"description\":\"API_Entities_CustomAttribute model\",\"properties\":{\"key\":{\"example\":\"foo\",\"type\":\"string\"},\"value\":{\"example\":\"bar\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"locked\":{\"type\":\"boolean\"},\"name\":{\"example\":\"Administrator\",\"type\":\"string\"},\"public_email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"state\":{\"example\":\"active\",\"type\":\"string\"},\"username\":{\"example\":\"admin\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/root\",\"type\":\"string\"}},\"type\":\"object\"},\"web_url\":{\"example\":\"https://gitlab.example.com/gitlab-org/gitlab-foss/-/pipelines/61\",\"type\":\"string\"},\"yaml_errors\":{\"example\":\"widgets:build: needs 'widgets:test'\",\"type\":\"string\"}},\"type\":\"object\"},\"id\":{\"example\":84,\"format\":\"int32\",\"type\":\"integer\"},\"iid\":{\"example\":14,\"format\":\"int32\",\"type\":\"integer\"},\"imported\":{\"type\":\"string\"},\"imported_from\":{\"example\":\"bitbucket\",\"type\":\"string\"},\"labels\":{\"type\":\"string\"},\"latest_build_finished_at\":{\"type\":\"string\"},\"latest_build_started_at\":{\"type\":\"string\"},\"merge_after\":{\"type\":\"string\"},\"merge_commit_sha\":{\"type\":\"string\"},\"merge_error\":{\"type\":\"string\"},\"merge_status\":{\"type\":\"string\"},\"merge_user\":{\"description\":\"API_Entities_UserBasic model\",\"properties\":{\"avatar_path\":{\"example\":\"/user/avatar/28/The-Big-Lebowski-400-400.png\",\"type\":\"string\"},\"avatar_url\":{\"example\":\"https://gravatar.com/avatar/1\",\"type\":\"string\"},\"custom_attributes\":{\"items\":{\"description\":\"API_Entities_CustomAttribute model\",\"properties\":{\"key\":{\"example\":\"foo\",\"type\":\"string\"},\"value\":{\"example\":\"bar\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"locked\":{\"type\":\"boolean\"},\"name\":{\"example\":\"Administrator\",\"type\":\"string\"},\"public_email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"state\":{\"example\":\"active\",\"type\":\"string\"},\"username\":{\"example\":\"admin\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/root\",\"type\":\"string\"}},\"type\":\"object\"},\"merge_when_pipeline_succeeds\":{\"type\":\"string\"},\"merged_at\":{\"type\":\"string\"},\"merged_by\":{\"description\":\"API_Entities_UserBasic model\",\"properties\":{\"avatar_path\":{\"example\":\"/user/avatar/28/The-Big-Lebowski-400-400.png\",\"type\":\"string\"},\"avatar_url\":{\"example\":\"https://gravatar.com/avatar/1\",\"type\":\"string\"},\"custom_attributes\":{\"items\":{\"description\":\"API_Entities_CustomAttribute model\",\"properties\":{\"key\":{\"example\":\"foo\",\"type\":\"string\"},\"value\":{\"example\":\"bar\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"locked\":{\"type\":\"boolean\"},\"name\":{\"example\":\"Administrator\",\"type\":\"string\"},\"public_email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"state\":{\"example\":\"active\",\"type\":\"string\"},\"username\":{\"example\":\"admin\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/root\",\"type\":\"string\"}},\"type\":\"object\"},\"milestone\":{\"properties\":{\"created_at\":{\"type\":\"string\"},\"description\":{\"type\":\"string\"},\"due_date\":{\"type\":\"string\"},\"expired\":{\"type\":\"string\"},\"group_id\":{\"type\":\"string\"},\"id\":{\"type\":\"string\"},\"iid\":{\"type\":\"string\"},\"project_id\":{\"type\":\"string\"},\"start_date\":{\"type\":\"string\"},\"state\":{\"type\":\"string\"},\"title\":{\"type\":\"string\"},\"updated_at\":{\"type\":\"string\"},\"web_url\":{\"type\":\"string\"}},\"type\":\"object\"},\"overflow\":{\"type\":\"string\"},\"pipeline\":{\"description\":\"API_Entities_Ci_PipelineBasic model\",\"properties\":{\"created_at\":{\"example\":\"2022-10-21T16:49:48.000+02:00\",\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"iid\":{\"example\":2,\"format\":\"int32\",\"type\":\"integer\"},\"project_id\":{\"example\":3,\"format\":\"int32\",\"type\":\"integer\"},\"ref\":{\"example\":\"feature-branch\",\"type\":\"string\"},\"sha\":{\"example\":\"0ec9e58fdfca6cdd6652c083c9edb53abc0bad52\",\"type\":\"string\"},\"source\":{\"example\":\"push\",\"type\":\"string\"},\"status\":{\"example\":\"success\",\"type\":\"string\"},\"updated_at\":{\"example\":\"2022-10-21T16:49:48.000+02:00\",\"format\":\"date-time\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/gitlab-org/gitlab-foss/-/pipelines/61\",\"type\":\"string\"}},\"type\":\"object\"},\"prepared_at\":{\"type\":\"string\"},\"project_id\":{\"example\":4,\"format\":\"int32\",\"type\":\"integer\"},\"rebase_in_progress\":{\"type\":\"string\"},\"reference\":{\"type\":\"string\"},\"references\":{\"properties\":{\"full\":{\"example\":\"test&6\",\"type\":\"string\"},\"relative\":{\"example\":\"&6\",\"type\":\"string\"},\"short\":{\"example\":\"&6\",\"type\":\"string\"}},\"type\":\"object\"},\"reviewers\":{\"description\":\"API_Entities_UserBasic model\",\"properties\":{\"avatar_path\":{\"example\":\"/user/avatar/28/The-Big-Lebowski-400-400.png\",\"type\":\"string\"},\"avatar_url\":{\"example\":\"https://gravatar.com/avatar/1\",\"type\":\"string\"},\"custom_attributes\":{\"items\":{\"description\":\"API_Entities_CustomAttribute model\",\"properties\":{\"key\":{\"example\":\"foo\",\"type\":\"string\"},\"value\":{\"example\":\"bar\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"locked\":{\"type\":\"boolean\"},\"name\":{\"example\":\"Administrator\",\"type\":\"string\"},\"public_email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"state\":{\"example\":\"active\",\"type\":\"string\"},\"username\":{\"example\":\"admin\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/root\",\"type\":\"string\"}},\"type\":\"object\"},\"sha\":{\"type\":\"string\"},\"should_remove_source_branch\":{\"type\":\"string\"},\"source_branch\":{\"type\":\"string\"},\"source_project_id\":{\"type\":\"string\"},\"squash\":{\"type\":\"string\"},\"squash_commit_sha\":{\"type\":\"string\"},\"squash_on_merge\":{\"type\":\"string\"},\"state\":{\"example\":\"closed\",\"type\":\"string\"},\"subscribed\":{\"type\":\"string\"},\"target_branch\":{\"type\":\"string\"},\"target_project_id\":{\"type\":\"string\"},\"task_completion_status\":{\"type\":\"string\"},\"time_stats\":{\"description\":\"API_Entities_IssuableTimeStats model\",\"properties\":{\"human_time_estimate\":{\"example\":\"3h 30m\",\"type\":\"string\"},\"human_total_time_spent\":{\"example\":\"1h\",\"type\":\"string\"},\"time_estimate\":{\"example\":12600,\"format\":\"int32\",\"type\":\"integer\"},\"total_time_spent\":{\"example\":3600,\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"},\"title\":{\"example\":\"Impedit et ut et dolores vero provident ullam est\",\"type\":\"string\"},\"title_html\":{\"type\":\"string\"},\"updated_at\":{\"example\":\"2022-11-14T17:22:01.470Z\",\"format\":\"date-time\",\"type\":\"string\"},\"upvotes\":{\"type\":\"string\"},\"user\":{\"properties\":{\"can_merge\":{\"type\":\"string\"}},\"type\":\"object\"},\"user_notes_count\":{\"type\":\"string\"},\"web_url\":{\"type\":\"string\"},\"work_in_progress\":{\"type\":\"string\"}},\"type\":\"object\"}},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/merge_requests/{merge_request_iid}/changes","rename":{"param":{"id":"project_id","merge_request_iid":"merge_request_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"merge_requests"},{"var":"merge_request_id"},{"lit":"changes"}],"select":{"exist":["merge_request_id","project_id","unidiff"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["project","merge_request"]]},"key$":"api_entities_merge_request_change","name__orig":"api_entities_merge_request_change","Name":"ApiEntitiesMergeRequestChange","name_":"api_entities_merge_request_change","name-":"api-entities-merge-request-change","NAME":"API_ENTITIES_MERGE_REQUEST_CHANGE","index$":95}, {"active":true,"entity":"api_entities_merge_request_change","key$":"BasicApiEntitiesMergeRequestChangeFlow","kind":"basic","name":"BasicApiEntitiesMergeRequestChangeFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"api_entities_merge_request_change_ref01","srcdatavar":"api_entities_merge_request_change_ref01_data","suffix":"_dt0"},"match":{"id":"api_entities_merge_request_change01","project_id":"project01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_merge_request_change_ref01"}}],"index$":0}]}, 'ApiEntitiesMergeRequestChange')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let api_entities_merge_request_change_ref01_data = Object.values(setup.data.existing.api_entities_merge_request_change)[0] as any

    // LOAD
    const api_entities_merge_request_change_ref01_ent = client.ApiEntitiesMergeRequestChange()
    const api_entities_merge_request_change_ref01_match_dt0: any = {}
    api_entities_merge_request_change_ref01_match_dt0.id = api_entities_merge_request_change_ref01_data.id
    const api_entities_merge_request_change_ref01_data_dt0 = (await api_entities_merge_request_change_ref01_ent.load(api_entities_merge_request_change_ref01_match_dt0)).data()
    assert(api_entities_merge_request_change_ref01_data_dt0.id === api_entities_merge_request_change_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_merge_request_change/ApiEntitiesMergeRequestChangeTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = GitlabSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['api_entities_merge_request_change01','api_entities_merge_request_change02','api_entities_merge_request_change03','project01','project02','project03','merge_request01','merge_request02','merge_request03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_MERGE_REQUEST_CHANGE_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_MERGE_REQUEST_CHANGE_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_MERGE_REQUEST_CHANGE_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new GitlabSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
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
    ]))
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
  }

  return setup
}
  
