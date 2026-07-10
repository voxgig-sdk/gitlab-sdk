<?php
declare(strict_types=1);

// Gitlab SDK exists test

require_once __DIR__ . '/../gitlab_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = GitlabSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
