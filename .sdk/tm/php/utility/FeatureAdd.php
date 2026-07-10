<?php
declare(strict_types=1);

// Gitlab SDK utility: feature_add

class GitlabFeatureAdd
{
    public static function call(GitlabContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
