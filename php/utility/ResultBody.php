<?php
declare(strict_types=1);

// Gitlab SDK utility: result_body

class GitlabResultBody
{
    public static function call(GitlabContext $ctx): ?GitlabResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
