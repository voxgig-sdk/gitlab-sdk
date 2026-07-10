<?php
declare(strict_types=1);

// Gitlab SDK base feature

class GitlabBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(GitlabContext $ctx, array $options): void {}
    public function PostConstruct(GitlabContext $ctx): void {}
    public function PostConstructEntity(GitlabContext $ctx): void {}
    public function SetData(GitlabContext $ctx): void {}
    public function GetData(GitlabContext $ctx): void {}
    public function GetMatch(GitlabContext $ctx): void {}
    public function SetMatch(GitlabContext $ctx): void {}
    public function PrePoint(GitlabContext $ctx): void {}
    public function PreSpec(GitlabContext $ctx): void {}
    public function PreRequest(GitlabContext $ctx): void {}
    public function PreResponse(GitlabContext $ctx): void {}
    public function PreResult(GitlabContext $ctx): void {}
    public function PreDone(GitlabContext $ctx): void {}
    public function PreUnexpected(GitlabContext $ctx): void {}
}
