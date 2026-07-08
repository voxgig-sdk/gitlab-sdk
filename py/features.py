# Gitlab SDK feature factory

from feature.base_feature import GitlabBaseFeature
from feature.test_feature import GitlabTestFeature


def _make_feature(name):
    features = {
        "base": lambda: GitlabBaseFeature(),
        "test": lambda: GitlabTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
