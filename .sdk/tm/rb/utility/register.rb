# Gitlab SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

GitlabUtility.registrar = ->(u) {
  u.clean = GitlabUtilities::Clean
  u.done = GitlabUtilities::Done
  u.make_error = GitlabUtilities::MakeError
  u.feature_add = GitlabUtilities::FeatureAdd
  u.feature_hook = GitlabUtilities::FeatureHook
  u.feature_init = GitlabUtilities::FeatureInit
  u.fetcher = GitlabUtilities::Fetcher
  u.make_fetch_def = GitlabUtilities::MakeFetchDef
  u.make_context = GitlabUtilities::MakeContext
  u.make_options = GitlabUtilities::MakeOptions
  u.make_request = GitlabUtilities::MakeRequest
  u.make_response = GitlabUtilities::MakeResponse
  u.make_result = GitlabUtilities::MakeResult
  u.make_point = GitlabUtilities::MakePoint
  u.make_spec = GitlabUtilities::MakeSpec
  u.make_url = GitlabUtilities::MakeUrl
  u.param = GitlabUtilities::Param
  u.prepare_auth = GitlabUtilities::PrepareAuth
  u.prepare_body = GitlabUtilities::PrepareBody
  u.prepare_headers = GitlabUtilities::PrepareHeaders
  u.prepare_method = GitlabUtilities::PrepareMethod
  u.prepare_params = GitlabUtilities::PrepareParams
  u.prepare_path = GitlabUtilities::PreparePath
  u.prepare_query = GitlabUtilities::PrepareQuery
  u.result_basic = GitlabUtilities::ResultBasic
  u.result_body = GitlabUtilities::ResultBody
  u.result_headers = GitlabUtilities::ResultHeaders
  u.transform_request = GitlabUtilities::TransformRequest
  u.transform_response = GitlabUtilities::TransformResponse
}
