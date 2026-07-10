<?php
declare(strict_types=1);

// Gitlab SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class GitlabFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new GitlabBaseFeature();
            case "test":
                return new GitlabTestFeature();
            default:
                return new GitlabBaseFeature();
        }
    }
}
