# Gitlab SDK feature factory

from gitlab_sdk.feature.base_feature import GitlabBaseFeature
from gitlab_sdk.feature.debug_feature import GitlabDebugFeature
from gitlab_sdk.feature.idempotency_feature import GitlabIdempotencyFeature
from gitlab_sdk.feature.metrics_feature import GitlabMetricsFeature
from gitlab_sdk.feature.paging_feature import GitlabPagingFeature
from gitlab_sdk.feature.ratelimit_feature import GitlabRatelimitFeature
from gitlab_sdk.feature.retry_feature import GitlabRetryFeature
from gitlab_sdk.feature.test_feature import GitlabTestFeature
from gitlab_sdk.feature.timeout_feature import GitlabTimeoutFeature


_FEATURES = {
    "base": lambda: GitlabBaseFeature(),
    "debug": lambda: GitlabDebugFeature(),
    "idempotency": lambda: GitlabIdempotencyFeature(),
    "metrics": lambda: GitlabMetricsFeature(),
    "paging": lambda: GitlabPagingFeature(),
    "ratelimit": lambda: GitlabRatelimitFeature(),
    "retry": lambda: GitlabRetryFeature(),
    "test": lambda: GitlabTestFeature(),
    "timeout": lambda: GitlabTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
