<?php
declare(strict_types=1);

// Gitlab SDK utility: prepare_body

class GitlabPrepareBody
{
    public static function call(GitlabContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
