

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


describe('JobEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when GITLAB_TEST_LIVE=TRUE.
  afterEach(liveDelay('GITLAB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = GitlabSDK.test()
    const ent = testsdk.Job()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.GITLAB_TEST_LIVE
    for (const op of ['create', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'job.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0}},"id":{"field":"id","name":"id"},"name":"job","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /api/v4/jobs/{id}/artifacts","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"post_api_v4_jobs_id_artifact","or":"post_api_v4_jobs_id_artifact","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/api/v4/jobs/{id}/artifacts","q":{"$action":"artifact","exist":["id","post_api_v4_jobs_id_artifact"]},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"jobs"},{"var":"id"},{"lit":"artifacts"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /api/v4/jobs/{id}/artifacts/authorize","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"post_api_v4_jobs_id_artifacts_authorize","or":"post_api_v4_jobs_id_artifacts_authorize","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/api/v4/jobs/{id}/artifacts/authorize","q":{"$action":"artifact_authorize","exist":["id","post_api_v4_jobs_id_artifacts_authorize"]},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"jobs"},{"var":"id"},{"lit":"artifacts"},{"lit":"authorize"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"POST /api/v4/jobs/request","source":"swagger2","version":2},"g":{"query":[{"a":true,"k":"query","n":"post_api_v4_jobs_request","or":"post_api_v4_jobs_request","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/api/v4/jobs/request","q":{"$action":"request","exist":["post_api_v4_jobs_request"]},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"jobs"},{"lit":"request"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/v4/jobs/{id}/artifacts","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"direct_download","or":"direct_download","r":false,"t":"`$ANY`","index$":0},{"a":true,"k":"query","n":"token","or":"token","r":false,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/api/v4/jobs/{id}/artifacts","q":{"$action":"artifact","exist":["direct_download","id","token"]},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"jobs"},{"var":"id"},{"lit":"artifacts"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"patch":{"input":"data","name":"patch","points":[{"a":true,"co":{"id":"PATCH /api/v4/jobs/{id}/trace","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"patch_api_v4_jobs_id_trace","or":"patch_api_v4_jobs_id_trace","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"PATCH","o":"/api/v4/jobs/{id}/trace","q":{"$action":"trace","exist":["id","patch_api_v4_jobs_id_trace"]},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"jobs"},{"var":"id"},{"lit":"trace"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"patch"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /api/v4/jobs/{id}","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"id","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"put_api_v4_jobs_id","or":"put_api_v4_jobs_id","r":true,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"PUT","o":"/api/v4/jobs/{id}","q":{"exist":["id","put_api_v4_jobs_id"]},"r":{},"s":[{"lit":"api"},{"lit":"v4"},{"lit":"jobs"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[]},"key$":"job","name__orig":"job","Name":"Job","name_":"job","name-":"job","NAME":"JOB","index$":222}, {"active":true,"entity":"job","key$":"BasicJobFlow","kind":"basic","name":"BasicJobFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"job_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"job_ref01","srcdatavar":"job_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-job_ref01"}}],"v":[],"index$":1},{"a":true,"d":{},"i":{"ref":"job_ref01","srcdatavar":"job_ref01_data","suffix":"_dt0"},"m":{"id":"job01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-job_ref01"}}],"index$":2}]}, 'Job', {"POST /api/v4/jobs/{id}/artifacts":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"Job's ID","type":"integer","format":"int32","required":true,"index$":0},{"name":"postApiV4JobsIdArtifacts","in":"body","required":true,"schema":{"type":"object","properties":{"file":{"type":"file","description":"The artifact file to store (generated by Multipart middleware)"},"token":{"type":"string","description":"Job's authentication token"},"expire_in":{"type":"string","description":"Specify when artifact should expire"},"artifact_type":{"type":"string","description":"The type of artifact","enum":["archive","metadata","trace","junit","sast","dependency_scanning","container_scanning","dast","codequality","license_scanning","performance","metrics","metrics_referee","network_referee","lsif","dotenv","cobertura","terraform","accessibility","cluster_applications","secret_detection","requirements","coverage_fuzzing","browser_performance","load_performance","api_fuzzing","cluster_image_scanning","cyclonedx","requirements_v2","annotations","repository_xray","jacoco"],"default":"archive"},"artifact_format":{"type":"string","description":"The format of artifact","enum":["raw","zip","gzip"],"default":"zip"},"metadata":{"type":"file","description":"The artifact metadata to store (generated by Multipart middleware)"},"accessibility":{"type":"string","description":"Specify accessibility level of artifact private/public"}},"required":["file"],"description":"Upload a job artifact","x-ref":"#/definitions/postApiV4JobsIdArtifacts"},"index$":1}]},"POST /api/v4/jobs/{id}/artifacts/authorize":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"Job's ID","type":"integer","format":"int32","required":true,"index$":0},{"name":"postApiV4JobsIdArtifactsAuthorize","in":"body","required":true,"schema":{"type":"object","properties":{"token":{"type":"string","description":"Job's authentication token"},"filesize":{"type":"integer","format":"int32","description":"Size of artifact file"},"artifact_type":{"type":"string","description":"The type of artifact","enum":["archive","metadata","trace","junit","sast","dependency_scanning","container_scanning","dast","codequality","license_scanning","performance","metrics","metrics_referee","network_referee","lsif","dotenv","cobertura","terraform","accessibility","cluster_applications","secret_detection","requirements","coverage_fuzzing","browser_performance","load_performance","api_fuzzing","cluster_image_scanning","cyclonedx","requirements_v2","annotations","repository_xray","jacoco"],"default":"archive"}},"description":"Authorize uploading job artifact","x-ref":"#/definitions/postApiV4JobsIdArtifactsAuthorize"},"index$":1}]},"POST /api/v4/jobs/request":{"protocol":"http","parameters":[{"name":"postApiV4JobsRequest","in":"body","required":true,"schema":{"type":"object","properties":{"token":{"type":"string","description":"Runner's authentication token"},"system_id":{"type":"string","description":"Runner's system identifier"},"last_update":{"type":"string","description":"Runner's queue last_update token"},"info":{"type":"object","description":"Runner's metadata","properties":{"name":{"type":"string","description":"Runner's name"},"version":{"type":"string","description":"Runner's version"},"revision":{"type":"string","description":"Runner's revision"},"platform":{"type":"string","description":"Runner's platform"},"architecture":{"type":"string","description":"Runner's architecture"},"executor":{"type":"string","description":"Runner's executor"},"features":{"type":"object","description":"Runner's features"},"config":{"type":"object","description":"Runner's config","properties":{"gpus":{"type":"string","description":"GPUs enabled"}}},"labels":{"type":"object","description":"Runner's labels"}}},"session":{"type":"object","description":"Runner's session data","properties":{"url":{"type":"string","description":"Session's url"},"certificate":{"type":"string","description":"Session's certificate"},"authorization":{"type":"string","description":"Session's authorization"}}}},"required":["token"],"description":"Request a job","x-ref":"#/definitions/postApiV4JobsRequest"},"index$":0}]},"GET /api/v4/jobs/{id}/artifacts":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"Job's ID","type":"integer","format":"int32","required":true,"index$":0},{"in":"query","name":"token","description":"Job's authentication token","type":"string","required":false,"index$":1},{"in":"query","name":"direct_download","description":"Perform direct download from remote storage instead of proxying artifacts","type":"boolean","default":false,"required":false,"index$":2}]},"PATCH /api/v4/jobs/{id}/trace":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"Job's ID","type":"integer","format":"int32","required":true,"index$":0},{"name":"patchApiV4JobsIdTrace","in":"body","required":true,"schema":{"type":"object","properties":{"token":{"type":"string","description":"Job's authentication token"},"debug_trace":{"type":"boolean","description":"Enable or Disable the debug trace"}},"description":"Append a patch to the job trace","x-ref":"#/definitions/patchApiV4JobsIdTrace"},"index$":1}]},"PUT /api/v4/jobs/{id}":{"protocol":"http","parameters":[{"in":"path","name":"id","description":"Job's ID","type":"integer","format":"int32","required":true,"index$":0},{"name":"putApiV4JobsId","in":"body","required":true,"schema":{"type":"object","properties":{"token":{"type":"string","description":"Job token"},"state":{"type":"string","description":"Job's status: success, failed"},"checksum":{"type":"string","description":"Job's trace CRC32 checksum"},"failure_reason":{"type":"string","description":"Job's failure_reason"},"output":{"type":"object","description":"Build log state","properties":{"checksum":{"type":"string","description":"Job's trace CRC32 checksum"},"bytesize":{"type":"integer","format":"int32","description":"Job's trace size in bytes"}}},"exit_code":{"type":"integer","format":"int32","description":"Job's exit code"}},"required":["token"],"description":"Update a job","x-ref":"#/definitions/putApiV4JobsId"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const job_ref01_ent = client.Job()
    let job_ref01_data = setup.data.new.job['job_ref01']

    job_ref01_data = (await job_ref01_ent.create(job_ref01_data)).data()
    assert(null != job_ref01_data.id)


    // UPDATE
    const job_ref01_data_up0: any = {}
    job_ref01_data_up0.id = job_ref01_data.id

    const job_ref01_resdata_up0 = (await job_ref01_ent.update(job_ref01_data_up0)).data()
    assert(job_ref01_resdata_up0.id === job_ref01_data_up0.id)


    // LOAD
    const job_ref01_match_dt0: any = {}
    job_ref01_match_dt0.id = job_ref01_data.id
    const job_ref01_data_dt0 = (await job_ref01_ent.load(job_ref01_match_dt0)).data()
    assert(job_ref01_data_dt0.id === job_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/job/JobTestData.json')

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
    ['job01','job02','job03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'GITLAB_TEST_JOB_ENTID': idmap,
    'GITLAB_TEST_LIVE': 'FALSE',
    'GITLAB_TEST_EXPLAIN': 'FALSE',
    'GITLAB_APIKEY': '',
  })

  idmap = env['GITLAB_TEST_JOB_ENTID']

  const live = 'TRUE' === env.GITLAB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['GITLAB_TEST_JOB_ENTID']
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
  
