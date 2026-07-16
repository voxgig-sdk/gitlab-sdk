<?php
declare(strict_types=1);

// ProjectsJobTokenScope entity test

require_once __DIR__ . '/../gitlab_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class ProjectsJobTokenScopeEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = GitlabSDK::test(null, null);
        $ent = $testsdk->ProjectsJobTokenScope(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = projects_job_token_scope_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["update"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "projects_job_token_scope." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set GITLAB_TEST_PROJECTS_JOB_TOKEN_SCOPE_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $projects_job_token_scope_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.projects_job_token_scope")));
        $projects_job_token_scope_ref01_data = null;
        if (count($projects_job_token_scope_ref01_data_raw) > 0) {
            $projects_job_token_scope_ref01_data = Helpers::to_map($projects_job_token_scope_ref01_data_raw[0][1]);
        }

        // UPDATE
        $projects_job_token_scope_ref01_ent = $client->ProjectsJobTokenScope(null);
        $projects_job_token_scope_ref01_data_up0_up = [
        ];

        $projects_job_token_scope_ref01_resdata_up0_result = $projects_job_token_scope_ref01_ent->update($projects_job_token_scope_ref01_data_up0_up, null);
        $projects_job_token_scope_ref01_resdata_up0 = Helpers::to_map($projects_job_token_scope_ref01_resdata_up0_result);
        $this->assertNotNull($projects_job_token_scope_ref01_resdata_up0);

    }
}

function projects_job_token_scope_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/projects_job_token_scope/ProjectsJobTokenScopeTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = GitlabSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["projects_job_token_scope01", "projects_job_token_scope02", "projects_job_token_scope03", "project01", "project02", "project03", "allowlist01", "allowlist02", "allowlist03", "groups_allowlist01", "groups_allowlist02", "groups_allowlist03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("GITLAB_TEST_PROJECTS_JOB_TOKEN_SCOPE_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "GITLAB_TEST_PROJECTS_JOB_TOKEN_SCOPE_ENTID" => $idmap,
        "GITLAB_TEST_LIVE" => "FALSE",
        "GITLAB_TEST_EXPLAIN" => "FALSE",
        "GITLAB_APIKEY" => "NONE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["GITLAB_TEST_PROJECTS_JOB_TOKEN_SCOPE_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["GITLAB_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            [
                "apikey" => $env["GITLAB_APIKEY"],
            ],
            $extra ?? [],
        ]);
        $client = new GitlabSDK(Helpers::to_map($merged_opts));
    }

    $live = $env["GITLAB_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["GITLAB_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
