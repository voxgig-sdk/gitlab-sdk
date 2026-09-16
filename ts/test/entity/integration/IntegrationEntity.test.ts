

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


describe('IntegrationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.Integration()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'integration.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":0}],"id":{"field":"id","name":"id"},"name":"integration","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"post_api_v4_projects_id_integrations_mattermost_slash_commands_trigger","orig":"post_api_v4_projects_id_integrations_mattermost_slash_commands_trigger","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"POST /api/v4/projects/{id}/integrations/mattermost_slash_commands/trigger","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4ProjectsIdIntegrationsMattermostSlashCommandsTrigger\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"in\":\"body\",\"name\":\"postApiV4ProjectsIdIntegrationsMattermostSlashCommandsTrigger\",\"required\":true,\"schema\":{\"description\":\"Trigger a slash command for mattermost-slash-commands\",\"properties\":{\"token\":{\"description\":\"The Mattermost token.\",\"type\":\"string\"}},\"required\":[\"token\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"Trigger a slash command for mattermost-slash-commands\"},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/projects/{id}/integrations/mattermost_slash_commands/trigger","rename":{"param":{"id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"integrations"},{"lit":"mattermost_slash_commands"},{"lit":"trigger"}],"select":{"exist":["post_api_v4_projects_id_integrations_mattermost_slash_commands_trigger","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"post_api_v4_projects_id_integrations_slack_slash_commands_trigger","orig":"post_api_v4_projects_id_integrations_slack_slash_commands_trigger","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"POST /api/v4/projects/{id}/integrations/slack_slash_commands/trigger","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4ProjectsIdIntegrationsSlackSlashCommandsTrigger\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"in\":\"body\",\"name\":\"postApiV4ProjectsIdIntegrationsSlackSlashCommandsTrigger\",\"required\":true,\"schema\":{\"description\":\"Trigger a slash command for slack-slash-commands\",\"properties\":{\"token\":{\"description\":\"The Slack token.\",\"type\":\"string\"}},\"required\":[\"token\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"Trigger a slash command for slack-slash-commands\"},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/projects/{id}/integrations/slack_slash_commands/trigger","rename":{"param":{"id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"integrations"},{"lit":"slack_slash_commands"},{"lit":"trigger"}],"select":{"exist":["post_api_v4_projects_id_integrations_slack_slash_commands_trigger","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"post_api_v4_projects_id_services_mattermost_slash_commands_trigger","orig":"post_api_v4_projects_id_services_mattermost_slash_commands_trigger","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"POST /api/v4/projects/{id}/services/mattermost_slash_commands/trigger","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4ProjectsIdServicesMattermostSlashCommandsTrigger\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"in\":\"body\",\"name\":\"postApiV4ProjectsIdServicesMattermostSlashCommandsTrigger\",\"required\":true,\"schema\":{\"description\":\"Trigger a slash command for mattermost-slash-commands\",\"properties\":{\"token\":{\"description\":\"The Mattermost token.\",\"type\":\"string\"}},\"required\":[\"token\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"Trigger a slash command for mattermost-slash-commands\"},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/projects/{id}/services/mattermost_slash_commands/trigger","rename":{"param":{"id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"services"},{"lit":"mattermost_slash_commands"},{"lit":"trigger"}],"select":{"exist":["post_api_v4_projects_id_services_mattermost_slash_commands_trigger","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":2},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"post_api_v4_projects_id_services_slack_slash_commands_trigger","orig":"post_api_v4_projects_id_services_slack_slash_commands_trigger","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"POST /api/v4/projects/{id}/services/slack_slash_commands/trigger","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4ProjectsIdServicesSlackSlashCommandsTrigger\",\"parameters\":[{\"description\":\"The ID or URL-encoded path of the project\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"string\"},{\"in\":\"body\",\"name\":\"postApiV4ProjectsIdServicesSlackSlashCommandsTrigger\",\"required\":true,\"schema\":{\"description\":\"Trigger a slash command for slack-slash-commands\",\"properties\":{\"token\":{\"description\":\"The Slack token.\",\"type\":\"string\"}},\"required\":[\"token\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"Trigger a slash command for slack-slash-commands\"},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/projects/{id}/services/slack_slash_commands/trigger","rename":{"param":{"id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"services"},{"lit":"slack_slash_commands"},{"lit":"trigger"}],"select":{"exist":["post_api_v4_projects_id_services_slack_slash_commands_trigger","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":3},{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"post_api_v4_integrations_slack_event","orig":"post_api_v4_integrations_slack_event","reqd":true,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"POST /api/v4/integrations/slack/events","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4IntegrationsSlackEvents\",\"parameters\":[{\"in\":\"body\",\"name\":\"postApiV4IntegrationsSlackEvents\",\"required\":true,\"schema\":{\"description\":\"Receive Slack events\",\"properties\":{\"api_app_id\":{\"description\":\"The Slack app ID\",\"type\":\"string\"},\"authed_users\":{\"description\":\"(Deprecated by Slack) An array of Slack user IDs\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"event\":{\"description\":\"The event object with variable properties\",\"type\":\"object\"},\"event_id\":{\"description\":\"A unique identifier for this specific event\",\"type\":\"string\"},\"event_time\":{\"description\":\"The epoch timestamp in seconds when this event was dispatched\",\"format\":\"int32\",\"type\":\"integer\"},\"team_id\":{\"description\":\"The Slack workspace ID of where the event occurred\",\"type\":\"string\"},\"token\":{\"description\":\"(Deprecated by Slack) The request token, unused by GitLab\",\"type\":\"string\"},\"type\":{\"description\":\"The kind of event this is, usually `event_callback`\",\"type\":\"string\"}},\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Successfully processed event\"},\"204\":{\"description\":\"Failed to process event\"},\"401\":{\"description\":\"Unauthorized\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/integrations/slack/events","segments":[{"lit":"api"},{"lit":"v4"},{"lit":"integrations"},{"lit":"slack"},{"lit":"events"}],"select":{"exist":["post_api_v4_integrations_slack_event"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{},"contract":{"id":"POST /api/v4/integrations/slack/interactions","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4IntegrationsSlackInteractions\",\"parameters\":[],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"created Interaction\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/integrations/slack/interactions","segments":[{"lit":"api"},{"lit":"v4"},{"lit":"integrations"},{"lit":"slack"},{"lit":"interactions"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":5},{"active":true,"args":{},"contract":{"id":"POST /api/v4/integrations/slack/options","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"postApiV4IntegrationsSlackOptions\",\"parameters\":[],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"created Option\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/api/v4/integrations/slack/options","segments":[{"lit":"api"},{"lit":"v4"},{"lit":"integrations"},{"lit":"slack"},{"lit":"options"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":6}],"key$":"create"},"remove":{"input":"data","name":"remove","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"group_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"id","orig":"slug","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"DELETE /api/v4/groups/{id}/integrations/{slug}","json":"{\"operationId\":\"deleteApiV4GroupsIdIntegrationsSlug\",\"parameters\":[{\"description\":\"The name of the integration\",\"enum\":[\"apple-app-store\",\"asana\",\"assembla\",\"bamboo\",\"bugzilla\",\"buildkite\",\"campfire\",\"confluence\",\"custom-issue-tracker\",\"datadog\",\"diffblue-cover\",\"discord\",\"drone-ci\",\"emails-on-push\",\"external-wiki\",\"gitlab-slack-application\",\"google-play\",\"hangouts-chat\",\"harbor\",\"irker\",\"jenkins\",\"jira\",\"jira-cloud-app\",\"linear\",\"matrix\",\"mattermost-slash-commands\",\"slack-slash-commands\",\"packagist\",\"phorge\",\"pipelines-email\",\"pivotaltracker\",\"pumble\",\"pushover\",\"redmine\",\"ewm\",\"youtrack\",\"clickup\",\"slack\",\"microsoft-teams\",\"mattermost\",\"teamcity\",\"telegram\",\"unify-circuit\",\"webex-teams\",\"zentao\",\"squash-tm\",\"github\",\"git-guardian\",\"google-cloud-platform-artifact-registry\",\"google-cloud-platform-workload-identity-federation\",\"mock-ci\",\"mock-monitoring\"],\"in\":\"path\",\"name\":\"slug\",\"required\":true,\"type\":\"string\"},{\"format\":\"int32\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"204\":{\"description\":\"Disable an integration\"},\"400\":{\"description\":\"Bad request\"},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"DELETE","orig":"/api/v4/groups/{id}/integrations/{slug}","rename":{"param":{"id":"group_id","slug":"id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"integrations"},{"var":"id"}],"select":{"exist":["group_id","id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"slug","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"DELETE /api/v4/projects/{id}/integrations/{slug}","json":"{\"operationId\":\"deleteApiV4ProjectsIdIntegrationsSlug\",\"parameters\":[{\"description\":\"The name of the integration\",\"enum\":[\"apple-app-store\",\"asana\",\"assembla\",\"bamboo\",\"bugzilla\",\"buildkite\",\"campfire\",\"confluence\",\"custom-issue-tracker\",\"datadog\",\"diffblue-cover\",\"discord\",\"drone-ci\",\"emails-on-push\",\"external-wiki\",\"gitlab-slack-application\",\"google-play\",\"hangouts-chat\",\"harbor\",\"irker\",\"jenkins\",\"jira\",\"jira-cloud-app\",\"linear\",\"matrix\",\"mattermost-slash-commands\",\"slack-slash-commands\",\"packagist\",\"phorge\",\"pipelines-email\",\"pivotaltracker\",\"pumble\",\"pushover\",\"redmine\",\"ewm\",\"youtrack\",\"clickup\",\"slack\",\"microsoft-teams\",\"mattermost\",\"teamcity\",\"telegram\",\"unify-circuit\",\"webex-teams\",\"zentao\",\"squash-tm\",\"github\",\"git-guardian\",\"google-cloud-platform-artifact-registry\",\"google-cloud-platform-workload-identity-federation\",\"mock-ci\",\"mock-monitoring\"],\"in\":\"path\",\"name\":\"slug\",\"required\":true,\"type\":\"string\"},{\"format\":\"int32\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"204\":{\"description\":\"Disable an integration\"},\"400\":{\"description\":\"Bad request\"},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"DELETE","orig":"/api/v4/projects/{id}/integrations/{slug}","rename":{"param":{"id":"project_id","slug":"id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"integrations"},{"var":"id"}],"select":{"exist":["id","project_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"project_id","orig":"id","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"slug","orig":"slug","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"DELETE /api/v4/projects/{id}/services/{slug}","json":"{\"operationId\":\"deleteApiV4ProjectsIdServicesSlug\",\"parameters\":[{\"description\":\"The name of the integration\",\"enum\":[\"apple-app-store\",\"asana\",\"assembla\",\"bamboo\",\"bugzilla\",\"buildkite\",\"campfire\",\"confluence\",\"custom-issue-tracker\",\"datadog\",\"diffblue-cover\",\"discord\",\"drone-ci\",\"emails-on-push\",\"external-wiki\",\"gitlab-slack-application\",\"google-play\",\"hangouts-chat\",\"harbor\",\"irker\",\"jenkins\",\"jira\",\"jira-cloud-app\",\"linear\",\"matrix\",\"mattermost-slash-commands\",\"slack-slash-commands\",\"packagist\",\"phorge\",\"pipelines-email\",\"pivotaltracker\",\"pumble\",\"pushover\",\"redmine\",\"ewm\",\"youtrack\",\"clickup\",\"slack\",\"microsoft-teams\",\"mattermost\",\"teamcity\",\"telegram\",\"unify-circuit\",\"webex-teams\",\"zentao\",\"squash-tm\",\"github\",\"git-guardian\",\"google-cloud-platform-artifact-registry\",\"google-cloud-platform-workload-identity-federation\",\"mock-ci\",\"mock-monitoring\"],\"in\":\"path\",\"name\":\"slug\",\"required\":true,\"type\":\"string\"},{\"format\":\"int32\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"204\":{\"description\":\"Disable an integration\"},\"400\":{\"description\":\"Bad request\"},\"401\":{\"description\":\"Unauthorized\"},\"404\":{\"description\":\"Not found\"}},\"securitySchemes\":{\"access_token_header\":{\"in\":\"header\",\"name\":\"PRIVATE-TOKEN\",\"type\":\"apiKey\"},\"access_token_query\":{\"in\":\"query\",\"name\":\"private_token\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"swagger2","version":1},"kind":"http","method":"DELETE","orig":"/api/v4/projects/{id}/services/{slug}","rename":{"param":{"id":"project_id"}},"segments":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"services"},{"var":"slug"}],"select":{"exist":["project_id","slug"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"remove"}},"relations":{"ancestors":[["group"],["project"],["project","service"]]},"key$":"integration","name__orig":"integration","Name":"Integration","name_":"integration","name-":"integration","NAME":"INTEGRATION","index$":218}, {"active":true,"entity":"integration","key$":"BasicIntegrationFlow","kind":"basic","name":"BasicIntegrationFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"integration_ref01"},"match":{"group_id":"group01","project_id":"project01"},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{"ref":"integration_ref01","suffix":"_rm0"},"match":{"id":"integration01","project_id":"project01"},"op":"remove","spec":[],"valid":[],"index$":1}]}, 'Integration')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const integration_ref01_ent = client.Integration()
    let integration_ref01_data = setup.data.new.integration['integration_ref01']
    integration_ref01_data['group_id'] = setup.idmap['group01']
    integration_ref01_data['project_id'] = setup.idmap['project01']

    integration_ref01_data = (await integration_ref01_ent.create(integration_ref01_data)).data()
    assert(null != integration_ref01_data.id)


    // REMOVE
    const integration_ref01_match_rm0: any = { id: integration_ref01_data.id }
    await integration_ref01_ent.remove(integration_ref01_match_rm0)
  

  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/integration/IntegrationTestData.json')

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
    ['integration01','integration02','integration03','group01','group02','group03','project01','project02','project03','project01','project02','project03','service01','service02','service03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_INTEGRATION_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_INTEGRATION_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_INTEGRATION_ENTID']
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
  
