

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


describe('ApiEntitiesCommitDetailEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesCommitDetail()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_commit_detail.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"author_email","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"author_name","req":false,"type":"`$STRING`","index$":1},{"active":true,"format":"date-time","name":"authored_date","req":false,"type":"`$STRING`","index$":2},{"active":true,"format":"date-time","name":"committed_date","req":false,"type":"`$STRING`","index$":3},{"active":true,"name":"committer_email","req":false,"type":"`$STRING`","index$":4},{"active":true,"name":"committer_name","req":false,"type":"`$STRING`","index$":5},{"active":true,"format":"date-time","name":"created_at","req":false,"type":"`$STRING`","index$":6},{"active":true,"name":"extended_trailers","req":false,"type":"`$OBJECT`","index$":7},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":8},{"active":true,"name":"last_pipeline","req":false,"short":"API_Entities_Ci_PipelineBasic model","type":"`$OBJECT`","index$":9},{"active":true,"name":"message","req":false,"type":"`$STRING`","index$":10},{"active":true,"name":"parent_ids","req":false,"type":"`$ARRAY`","index$":11},{"active":true,"format":"int32","name":"project_id","req":false,"type":"`$INTEGER`","index$":12},{"active":true,"name":"short_id","req":false,"type":"`$STRING`","index$":13},{"active":true,"name":"stats","req":false,"type":"`$OBJECT`","index$":14},{"active":true,"name":"status","req":false,"type":"`$STRING`","index$":15},{"active":true,"name":"title","req":false,"type":"`$STRING`","index$":16},{"active":true,"name":"trailers","req":false,"type":"`$OBJECT`","index$":17},{"active":true,"name":"web_url","req":false,"type":"`$STRING`","index$":18}],"id":{"field":"id","name":"id"},"name":"api_entities_commit_detail","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"post_api_v4_projects_id_repository_commit","orig":"post_api_v4_projects_id_repository_commit","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"POST /api/v4/projects/{id}/repository/commits","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4ProjectsIdRepositoryCommits\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"in\":\"body\",\"name\":\"postApiV4ProjectsIdRepositoryCommits\",\"required\":true,\"schema\":{\"description\":\"Commit multiple file changes as one commit\",\"properties\":{\"actions\":{\"description\":\"Actions to perform in commit\",\"items\":{\"properties\":{\"action\":{\"description\":\"The action to perform, `create`, `delete`, `move`, `update`, `chmod`\",\"enum\":[\"create\",\"update\",\"move\",\"delete\",\"chmod\"],\"type\":\"string\"},\"content\":{\"description\":\"File content\",\"example\":\"Some file content\",\"type\":\"string\"},\"encoding\":{\"default\":\"text\",\"description\":\"`text` or `base64`\",\"enum\":[\"text\",\"base64\"],\"type\":\"string\"},\"execute_filemode\":{\"description\":\"When `true/false` enables/disables the execute flag on the file.\",\"type\":\"boolean\"},\"file_path\":{\"description\":\"Full path to the file.\",\"example\":\"lib/class.rb\",\"type\":\"string\"},\"last_commit_id\":{\"description\":\"Last known file commit id\",\"example\":\"2695effb5807a22ff3d138d593fd856244e155e7\",\"type\":\"string\"},\"previous_path\":{\"description\":\"Original full path to the file being moved.\",\"example\":\"lib/class.rb\",\"type\":\"string\"}},\"required\":[\"action\",\"file_path\",\"previous_path\",\"content\",\"execute_filemode\"],\"type\":\"object\"},\"type\":\"array\"},\"author_email\":{\"description\":\"Author email for commit\",\"example\":\"janedoe@example.com\",\"type\":\"string\"},\"author_name\":{\"description\":\"Author name for commit\",\"example\":\"Jane Doe\",\"type\":\"string\"},\"branch\":{\"description\":\"Name of the branch to commit into. To create a new branch, also provide either `start_branch` or `start_sha`, and optionally `start_project`.\",\"example\":\"master\",\"type\":\"string\"},\"commit_message\":{\"description\":\"Commit message\",\"example\":\"initial commit\",\"type\":\"string\"},\"force\":{\"default\":false,\"description\":\"When `true` overwrites the target branch with a new commit based on the `start_branch` or `start_sha`\",\"type\":\"boolean\"},\"start_branch\":{\"description\":\"Name of the branch to start the new branch from\",\"example\":\"staging\",\"type\":\"string\"},\"start_project\":{\"description\":\"The ID or path of the project to start the new branch from\",\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"start_sha\":{\"description\":\"SHA of the commit to start the new branch from\",\"example\":\"2695effb5807a22ff3d138d593fd856244e155e7\",\"type\":\"string\"},\"stats\":{\"default\":true,\"description\":\"Include commit stats\",\"type\":\"boolean\"}},\"required\":[\"branch\",\"commit_message\",\"actions\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Commit multiple file changes as one commit\",\"schema\":{\"description\":\"API_Entities_CommitDetail model\",\"properties\":{\"author_email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"author_name\":{\"example\":\"John Smith\",\"type\":\"string\"},\"authored_date\":{\"example\":\"2012-05-28T04:42:42-07:00\",\"format\":\"date-time\",\"type\":\"string\"},\"committed_date\":{\"example\":\"2012-05-28T04:42:42-07:00\",\"format\":\"date-time\",\"type\":\"string\"},\"committer_email\":{\"example\":\"jack@example.com\",\"type\":\"string\"},\"committer_name\":{\"example\":\"Jack Smith\",\"type\":\"string\"},\"created_at\":{\"example\":\"2017-07-26T11:08:53.000+02:00\",\"format\":\"date-time\",\"type\":\"string\"},\"extended_trailers\":{\"example\":\"{ \\\"Signed-off-by\\\": [\\\"John Doe <johndoe@gitlab.com>\\\", \\\"Jane Doe <janedoe@gitlab.com>\\\"] }\",\"type\":\"object\"},\"id\":{\"example\":\"2695effb5807a22ff3d138d593fd856244e155e7\",\"type\":\"string\"},\"last_pipeline\":{\"description\":\"API_Entities_Ci_PipelineBasic model\",\"properties\":{\"created_at\":{\"example\":\"2022-10-21T16:49:48.000+02:00\",\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"iid\":{\"example\":2,\"format\":\"int32\",\"type\":\"integer\"},\"project_id\":{\"example\":3,\"format\":\"int32\",\"type\":\"integer\"},\"ref\":{\"example\":\"feature-branch\",\"type\":\"string\"},\"sha\":{\"example\":\"0ec9e58fdfca6cdd6652c083c9edb53abc0bad52\",\"type\":\"string\"},\"source\":{\"example\":\"push\",\"type\":\"string\"},\"status\":{\"example\":\"success\",\"type\":\"string\"},\"updated_at\":{\"example\":\"2022-10-21T16:49:48.000+02:00\",\"format\":\"date-time\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/gitlab-org/gitlab-foss/-/pipelines/61\",\"type\":\"string\"}},\"type\":\"object\"},\"message\":{\"example\":\"Initial commit\",\"type\":\"string\"},\"parent_ids\":{\"example\":\"2a4b78934375d7f53875269ffd4f45fd83a84ebe\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"project_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"short_id\":{\"example\":\"2695effb\",\"type\":\"string\"},\"stats\":{\"properties\":{\"additions\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"deletions\":{\"example\":0,\"format\":\"int32\",\"type\":\"integer\"},\"total\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"},\"status\":{\"example\":\"success\",\"type\":\"string\"},\"title\":{\"example\":\"Initial commit\",\"type\":\"string\"},\"trailers\":{\"example\":\"{ \\\"Merged-By\\\": \\\"Jane Doe janedoe@gitlab.com\\\" }\",\"type\":\"object\"},\"web_url\":{\"example\":\"https://gitlab.example.com/janedoe/gitlab-foss/-/commit/ed899a2f4b50b4370feeea94676502b42383c746\",\"type\":\"string\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Bad request\"},\"401\":{\"description\":\"Unauthorized\"},\"403\":{\"description\":\"Forbidden\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/projects/{id}/repository/commits","rename":{"param":{"id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"repository"},{"lit":"commits"}],"select":{"exist":["post_api_v4_projects_id_repository_commit","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"sha","orig":"sha","reqd":true,"type":"`$ANY`","index$":1}],"query":[{"active":true,"kind":"query","name":"stat","orig":"stat","reqd":false,"type":"`$ANY`","index$":0}]},"contract":{"id":"GET /api/v4/projects/{id}/repository/commits/{sha}","json":"{\"operationId\":\"getApiV4ProjectsIdRepositoryCommitsSha\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"A commit sha, or the name of a branch or tag\",\"in\":\"path\",\"name\":\"sha\",\"required\":true,\"type\":\"string\"},{\"default\":true,\"description\":\"Include commit stats\",\"in\":\"query\",\"name\":\"stats\",\"required\":false,\"type\":\"boolean\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Get a specific commit of a project\",\"schema\":{\"description\":\"API_Entities_CommitDetail model\",\"properties\":{\"author_email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"author_name\":{\"example\":\"John Smith\",\"type\":\"string\"},\"authored_date\":{\"example\":\"2012-05-28T04:42:42-07:00\",\"format\":\"date-time\",\"type\":\"string\"},\"committed_date\":{\"example\":\"2012-05-28T04:42:42-07:00\",\"format\":\"date-time\",\"type\":\"string\"},\"committer_email\":{\"example\":\"jack@example.com\",\"type\":\"string\"},\"committer_name\":{\"example\":\"Jack Smith\",\"type\":\"string\"},\"created_at\":{\"example\":\"2017-07-26T11:08:53.000+02:00\",\"format\":\"date-time\",\"type\":\"string\"},\"extended_trailers\":{\"example\":\"{ \\\"Signed-off-by\\\": [\\\"John Doe <johndoe@gitlab.com>\\\", \\\"Jane Doe <janedoe@gitlab.com>\\\"] }\",\"type\":\"object\"},\"id\":{\"example\":\"2695effb5807a22ff3d138d593fd856244e155e7\",\"type\":\"string\"},\"last_pipeline\":{\"description\":\"API_Entities_Ci_PipelineBasic model\",\"properties\":{\"created_at\":{\"example\":\"2022-10-21T16:49:48.000+02:00\",\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"iid\":{\"example\":2,\"format\":\"int32\",\"type\":\"integer\"},\"project_id\":{\"example\":3,\"format\":\"int32\",\"type\":\"integer\"},\"ref\":{\"example\":\"feature-branch\",\"type\":\"string\"},\"sha\":{\"example\":\"0ec9e58fdfca6cdd6652c083c9edb53abc0bad52\",\"type\":\"string\"},\"source\":{\"example\":\"push\",\"type\":\"string\"},\"status\":{\"example\":\"success\",\"type\":\"string\"},\"updated_at\":{\"example\":\"2022-10-21T16:49:48.000+02:00\",\"format\":\"date-time\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/gitlab-org/gitlab-foss/-/pipelines/61\",\"type\":\"string\"}},\"type\":\"object\"},\"message\":{\"example\":\"Initial commit\",\"type\":\"string\"},\"parent_ids\":{\"example\":\"2a4b78934375d7f53875269ffd4f45fd83a84ebe\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"project_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"short_id\":{\"example\":\"2695effb\",\"type\":\"string\"},\"stats\":{\"properties\":{\"additions\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"deletions\":{\"example\":0,\"format\":\"int32\",\"type\":\"integer\"},\"total\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"},\"status\":{\"example\":\"success\",\"type\":\"string\"},\"title\":{\"example\":\"Initial commit\",\"type\":\"string\"},\"trailers\":{\"example\":\"{ \\\"Merged-By\\\": \\\"Jane Doe janedoe@gitlab.com\\\" }\",\"type\":\"object\"},\"web_url\":{\"example\":\"https://gitlab.example.com/janedoe/gitlab-foss/-/commit/ed899a2f4b50b4370feeea94676502b42383c746\",\"type\":\"string\"}},\"type\":\"object\"}},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/api/v4/projects/{id}/repository/commits/{sha}","rename":{"param":{"id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"repository"},{"lit":"commits"},{"var":"sha"}],"select":{"exist":["project_id","sha","stat"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"example":"gitlab-org/gitlab","kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"example":"gitlab-org/gitlab-shell","kind":"param","name":"submodule","orig":"submodule","reqd":true,"type":"`$ANY`","index$":1}],"query":[{"active":true,"kind":"query","name":"put_api_v4_projects_id_repository_submodules_submodule","orig":"put_api_v4_projects_id_repository_submodules_submodule","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"PUT /api/v4/projects/{id}/repository/submodules/{submodule}","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"putApiV4ProjectsIdRepositorySubmodulesSubmodule\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of a project\",\"example\":\"gitlab-org/gitlab\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"description\":\"URL-encoded full path to submodule.\",\"example\":\"gitlab-org/gitlab-shell\",\"in\":\"path\",\"name\":\"submodule\",\"required\":true,\"type\":\"string\"},{\"in\":\"body\",\"name\":\"putApiV4ProjectsIdRepositorySubmodulesSubmodule\",\"required\":true,\"schema\":{\"description\":\"Update existing submodule reference in repository\",\"properties\":{\"branch\":{\"description\":\"Name of the branch to commit into.\",\"example\":\"main\",\"type\":\"string\"},\"commit_message\":{\"description\":\"Commit message. If no message is provided a default one will be set.\",\"example\":\"Commit message\",\"type\":\"string\"},\"commit_sha\":{\"description\":\"Commit sha to update the submodule to.\",\"example\":\"ed899a2f4b50b4370feeea94676502b42383c746\",\"type\":\"string\"}},\"required\":[\"commit_sha\",\"branch\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Update existing submodule reference in repository\",\"schema\":{\"description\":\"API_Entities_CommitDetail model\",\"properties\":{\"author_email\":{\"example\":\"john@example.com\",\"type\":\"string\"},\"author_name\":{\"example\":\"John Smith\",\"type\":\"string\"},\"authored_date\":{\"example\":\"2012-05-28T04:42:42-07:00\",\"format\":\"date-time\",\"type\":\"string\"},\"committed_date\":{\"example\":\"2012-05-28T04:42:42-07:00\",\"format\":\"date-time\",\"type\":\"string\"},\"committer_email\":{\"example\":\"jack@example.com\",\"type\":\"string\"},\"committer_name\":{\"example\":\"Jack Smith\",\"type\":\"string\"},\"created_at\":{\"example\":\"2017-07-26T11:08:53.000+02:00\",\"format\":\"date-time\",\"type\":\"string\"},\"extended_trailers\":{\"example\":\"{ \\\"Signed-off-by\\\": [\\\"John Doe <johndoe@gitlab.com>\\\", \\\"Jane Doe <janedoe@gitlab.com>\\\"] }\",\"type\":\"object\"},\"id\":{\"example\":\"2695effb5807a22ff3d138d593fd856244e155e7\",\"type\":\"string\"},\"last_pipeline\":{\"description\":\"API_Entities_Ci_PipelineBasic model\",\"properties\":{\"created_at\":{\"example\":\"2022-10-21T16:49:48.000+02:00\",\"format\":\"date-time\",\"type\":\"string\"},\"id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"iid\":{\"example\":2,\"format\":\"int32\",\"type\":\"integer\"},\"project_id\":{\"example\":3,\"format\":\"int32\",\"type\":\"integer\"},\"ref\":{\"example\":\"feature-branch\",\"type\":\"string\"},\"sha\":{\"example\":\"0ec9e58fdfca6cdd6652c083c9edb53abc0bad52\",\"type\":\"string\"},\"source\":{\"example\":\"push\",\"type\":\"string\"},\"status\":{\"example\":\"success\",\"type\":\"string\"},\"updated_at\":{\"example\":\"2022-10-21T16:49:48.000+02:00\",\"format\":\"date-time\",\"type\":\"string\"},\"web_url\":{\"example\":\"https://gitlab.example.com/gitlab-org/gitlab-foss/-/pipelines/61\",\"type\":\"string\"}},\"type\":\"object\"},\"message\":{\"example\":\"Initial commit\",\"type\":\"string\"},\"parent_ids\":{\"example\":\"2a4b78934375d7f53875269ffd4f45fd83a84ebe\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"project_id\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"short_id\":{\"example\":\"2695effb\",\"type\":\"string\"},\"stats\":{\"properties\":{\"additions\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"},\"deletions\":{\"example\":0,\"format\":\"int32\",\"type\":\"integer\"},\"total\":{\"example\":1,\"format\":\"int32\",\"type\":\"integer\"}},\"type\":\"object\"},\"status\":{\"example\":\"success\",\"type\":\"string\"},\"title\":{\"example\":\"Initial commit\",\"type\":\"string\"},\"trailers\":{\"example\":\"{ \\\"Merged-By\\\": \\\"Jane Doe janedoe@gitlab.com\\\" }\",\"type\":\"object\"},\"web_url\":{\"example\":\"https://gitlab.example.com/janedoe/gitlab-foss/-/commit/ed899a2f4b50b4370feeea94676502b42383c746\",\"type\":\"string\"}},\"type\":\"object\"}},\"400\":{\"description\":\"The repository is empty\"},\"401\":{\"description\":\"401 Unauthorized\"},\"404\":{\"description\":\"404 Project Not Found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"PUT","orig":"/api/v4/projects/{id}/repository/submodules/{submodule}","rename":{"param":{"id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"repository"},{"lit":"submodules"},{"var":"submodule"}],"select":{"exist":["project_id","put_api_v4_projects_id_repository_submodules_submodule","submodule"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["project"],["project","commit"],["project","submodule"]]},"key$":"api_entities_commit_detail","name__orig":"api_entities_commit_detail","Name":"ApiEntitiesCommitDetail","name_":"api_entities_commit_detail","name-":"api-entities-commit-detail","NAME":"API_ENTITIES_COMMIT_DETAIL","index$":47}, {"active":true,"entity":"api_entities_commit_detail","key$":"BasicApiEntitiesCommitDetailFlow","kind":"basic","name":"BasicApiEntitiesCommitDetailFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"api_entities_commit_detail_ref01"},"match":{"project_id":"project01"},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{"project_id":"project01"},"input":{"ref":"api_entities_commit_detail_ref01","srcdatavar":"api_entities_commit_detail_ref01_data","suffix":"_up0","textfield":"author_email"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_commit_detail_ref01"}}],"valid":[],"index$":1},{"active":true,"data":{},"input":{"ref":"api_entities_commit_detail_ref01","srcdatavar":"api_entities_commit_detail_ref01_data","suffix":"_dt0"},"match":{"id":"api_entities_commit_detail01","project_id":"project01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-api_entities_commit_detail_ref01"}}],"index$":2}]}, 'ApiEntitiesCommitDetail')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const api_entities_commit_detail_ref01_ent = client.ApiEntitiesCommitDetail()
    let api_entities_commit_detail_ref01_data = setup.data.new.api_entities_commit_detail['api_entities_commit_detail_ref01']
    api_entities_commit_detail_ref01_data['project_id'] = setup.idmap['project01']

    api_entities_commit_detail_ref01_data = (await api_entities_commit_detail_ref01_ent.create(api_entities_commit_detail_ref01_data)).data()
    assert(null != api_entities_commit_detail_ref01_data.id)


    // UPDATE
    const api_entities_commit_detail_ref01_data_up0: any = {}
    api_entities_commit_detail_ref01_data_up0.id = api_entities_commit_detail_ref01_data.id
    api_entities_commit_detail_ref01_data_up0 ['project_id'] = setup.idmap['project_id']

    const api_entities_commit_detail_ref01_markdef_up0 = { name: 'author_email', value: 'Mark01-api_entities_commit_detail_ref01_' + setup.now }
    ;(api_entities_commit_detail_ref01_data_up0 as any)[api_entities_commit_detail_ref01_markdef_up0.name] = api_entities_commit_detail_ref01_markdef_up0.value

    const api_entities_commit_detail_ref01_resdata_up0 = (await api_entities_commit_detail_ref01_ent.update(api_entities_commit_detail_ref01_data_up0)).data()
    assert(api_entities_commit_detail_ref01_resdata_up0.id === api_entities_commit_detail_ref01_data_up0.id)

    assert((api_entities_commit_detail_ref01_resdata_up0 as any)[api_entities_commit_detail_ref01_markdef_up0.name] === api_entities_commit_detail_ref01_markdef_up0.value)


    // LOAD
    const api_entities_commit_detail_ref01_match_dt0: any = {}
    api_entities_commit_detail_ref01_match_dt0.id = api_entities_commit_detail_ref01_data.id
    const api_entities_commit_detail_ref01_data_dt0 = (await api_entities_commit_detail_ref01_ent.load(api_entities_commit_detail_ref01_match_dt0)).data()
    assert(api_entities_commit_detail_ref01_data_dt0.id === api_entities_commit_detail_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_commit_detail/ApiEntitiesCommitDetailTestData.json')

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
    ['api_entities_commit_detail01','api_entities_commit_detail02','api_entities_commit_detail03','project01','project02','project03','project01','project02','project03','commit01','commit02','commit03','project01','project02','project03','submodule01','submodule02','submodule03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_COMMIT_DETAIL_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_COMMIT_DETAIL_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_COMMIT_DETAIL_ENTID']
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
  
