# ProjectName SDK exists test

import pytest
from gitlab_sdk import GitlabSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = GitlabSDK.test(None, None)
        assert testsdk is not None
