# Gitlab SDK exists test

require "minitest/autorun"
require_relative "../Gitlab_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = GitlabSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
