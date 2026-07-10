<?php
declare(strict_types=1);

// Gitlab SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

GitlabUtility::setRegistrar(function (GitlabUtility $u): void {
    $u->clean = [GitlabClean::class, 'call'];
    $u->done = [GitlabDone::class, 'call'];
    $u->make_error = [GitlabMakeError::class, 'call'];
    $u->feature_add = [GitlabFeatureAdd::class, 'call'];
    $u->feature_hook = [GitlabFeatureHook::class, 'call'];
    $u->feature_init = [GitlabFeatureInit::class, 'call'];
    $u->fetcher = [GitlabFetcher::class, 'call'];
    $u->make_fetch_def = [GitlabMakeFetchDef::class, 'call'];
    $u->make_context = [GitlabMakeContext::class, 'call'];
    $u->make_options = [GitlabMakeOptions::class, 'call'];
    $u->make_request = [GitlabMakeRequest::class, 'call'];
    $u->make_response = [GitlabMakeResponse::class, 'call'];
    $u->make_result = [GitlabMakeResult::class, 'call'];
    $u->make_point = [GitlabMakePoint::class, 'call'];
    $u->make_spec = [GitlabMakeSpec::class, 'call'];
    $u->make_url = [GitlabMakeUrl::class, 'call'];
    $u->param = [GitlabParam::class, 'call'];
    $u->prepare_auth = [GitlabPrepareAuth::class, 'call'];
    $u->prepare_body = [GitlabPrepareBody::class, 'call'];
    $u->prepare_headers = [GitlabPrepareHeaders::class, 'call'];
    $u->prepare_method = [GitlabPrepareMethod::class, 'call'];
    $u->prepare_params = [GitlabPrepareParams::class, 'call'];
    $u->prepare_path = [GitlabPreparePath::class, 'call'];
    $u->prepare_query = [GitlabPrepareQuery::class, 'call'];
    $u->result_basic = [GitlabResultBasic::class, 'call'];
    $u->result_body = [GitlabResultBody::class, 'call'];
    $u->result_headers = [GitlabResultHeaders::class, 'call'];
    $u->transform_request = [GitlabTransformRequest::class, 'call'];
    $u->transform_response = [GitlabTransformResponse::class, 'call'];
});
