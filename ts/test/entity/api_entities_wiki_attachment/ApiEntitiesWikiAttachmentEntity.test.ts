

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


loadEnvLocal(__dirname + '/../../../.env.local')


describe('ApiEntitiesWikiAttachmentEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.ApiEntitiesWikiAttachment()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'api_entities_wiki_attachment.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"api_entities_wiki_attachment","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/v4/groups/{id}/wikis/attachments","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"group_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"post_api_v4_groups_id_wikis_attachment","or":"post_api_v4_groups_id_wikis_attachment","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/api/v4/groups/{id}/wikis/attachments","q":{"exist":["group_id","post_api_v4_groups_id_wikis_attachment"]},"r":{"param":{"id":"group_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"groups"},{"var":"group_id"},{"lit":"wikis"},{"lit":"attachments"}],"t":{"req":"`reqdata`","res":"`body.link`"},"index$":0},{"a":true,"co":{"id":"POST /api/v4/projects/{id}/wikis/attachments","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"project_id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"post_api_v4_projects_id_wikis_attachment","or":"post_api_v4_projects_id_wikis_attachment","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/api/v4/projects/{id}/wikis/attachments","q":{"exist":["post_api_v4_projects_id_wikis_attachment","project_id"]},"r":{"param":{"id":"project_id"}},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"projects"},{"var":"project_id"},{"lit":"wikis"},{"lit":"attachments"}],"t":{"req":"`reqdata`","res":"`body.link`"},"index$":1}],"key$":"create"}},"relations":{"ancestors":[["$.main.kit.entity.group"],["$.main.kit.entity.project"]]},"key$":"api_entities_wiki_attachment","name__orig":"api_entities_wiki_attachment","Name":"ApiEntitiesWikiAttachment","name_":"api_entities_wiki_attachment","name-":"api-entities-wiki-attachment","NAME":"API_ENTITIES_WIKI_ATTACHMENT","index$":169}, {"active":true,"entity":"api_entities_wiki_attachment","key$":"BasicApiEntitiesWikiAttachmentFlow","kind":"basic","name":"BasicApiEntitiesWikiAttachmentFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"api_entities_wiki_attachment_ref01"},"m":{"project_id":"project01"},"o":"create","s":[],"v":[],"index$":0}]}, 'ApiEntitiesWikiAttachment', {"POST /api/v4/groups/{id}/wikis/attachments":{"protocol":"http","parameters":[{"in":"path","name":"id","type":"integer","format":"int32","required":true,"index$":0},{"name":"postApiV4GroupsIdWikisAttachments","in":"body","required":true,"schema":{"type":"object","properties":{"file":{"type":"file","description":"The attachment file to be uploaded"},"branch":{"type":"string","description":"The name of the branch"}},"required":["file"],"description":"Upload an attachment to the wiki repository","x-ref":"#/definitions/postApiV4GroupsIdWikisAttachments"},"index$":1}]},"POST /api/v4/projects/{id}/wikis/attachments":{"protocol":"http","parameters":[{"in":"path","name":"id","type":"integer","format":"int32","required":true,"index$":0},{"name":"postApiV4ProjectsIdWikisAttachments","in":"body","required":true,"schema":{"type":"object","properties":{"file":{"type":"file","description":"The attachment file to be uploaded"},"branch":{"type":"string","description":"The name of the branch"}},"required":["file"],"description":"Upload an attachment to the wiki repository","x-ref":"#/definitions/postApiV4ProjectsIdWikisAttachments"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const api_entities_wiki_attachment_ref01_ent = client.ApiEntitiesWikiAttachment()
    let api_entities_wiki_attachment_ref01_data = setup.data.new.api_entities_wiki_attachment['api_entities_wiki_attachment_ref01']
    api_entities_wiki_attachment_ref01_data['project_id'] = setup.idmap['project01']

    api_entities_wiki_attachment_ref01_data = (await api_entities_wiki_attachment_ref01_ent.create(api_entities_wiki_attachment_ref01_data)).data()
    assert(null != api_entities_wiki_attachment_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/api_entities_wiki_attachment/ApiEntitiesWikiAttachmentTestData.json')

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
    ['api_entities_wiki_attachment01','api_entities_wiki_attachment02','api_entities_wiki_attachment03','group01','group02','group03','project01','project02','project03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_API_ENTITIES_WIKI_ATTACHMENT_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_API_ENTITIES_WIKI_ATTACHMENT_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_API_ENTITIES_WIKI_ATTACHMENT_ENTID']
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
  
