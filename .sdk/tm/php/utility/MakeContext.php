<?php
declare(strict_types=1);

// Gitlab SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class GitlabMakeContext
{
    public static function call(array $ctxmap, ?GitlabContext $basectx): GitlabContext
    {
        return new GitlabContext($ctxmap, $basectx);
    }
}
