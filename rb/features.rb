# Gitlab SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/debug_feature'
require_relative 'feature/idempotency_feature'
require_relative 'feature/metrics_feature'
require_relative 'feature/paging_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module GitlabFeatures
  def self.make_feature(name)
    case name
    when "base"
      GitlabBaseFeature.new
    when "debug"
      GitlabDebugFeature.new
    when "idempotency"
      GitlabIdempotencyFeature.new
    when "metrics"
      GitlabMetricsFeature.new
    when "paging"
      GitlabPagingFeature.new
    when "ratelimit"
      GitlabRatelimitFeature.new
    when "retry"
      GitlabRetryFeature.new
    when "test"
      GitlabTestFeature.new
    when "timeout"
      GitlabTimeoutFeature.new
    else
      GitlabBaseFeature.new
    end
  end
end
