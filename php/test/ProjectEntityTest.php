<?php
declare(strict_types=1);

// Project entity test

require_once __DIR__ . '/../gitlab_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class ProjectEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = GitlabSDK::test(null, null);
        $ent = $testsdk->Project(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = project_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "update", "load", "remove"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "project." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set GITLAB_TEST_PROJECT_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $project_ref01_ent = $client->Project(null);
        $project_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.project"), "project_ref01"));
        $project_ref01_data["hook_id"] = $setup["idmap"]["hook01"];
        $project_ref01_data["merge_request_id"] = $setup["idmap"]["merge_request01"];
        $project_ref01_data["pipeline_schedule_id"] = $setup["idmap"]["pipeline_schedule01"];
        $project_ref01_data["secret"] = $setup["idmap"]["secret01"];

        $project_ref01_data_result = $project_ref01_ent->create($project_ref01_data, null);
        $project_ref01_data = Helpers::to_map($project_ref01_data_result);
        $this->assertNotNull($project_ref01_data);
        $this->assertNotNull($project_ref01_data["id"]);

        // UPDATE
        $project_ref01_data_up0_up = [
            "id" => $project_ref01_data["id"],
        ];

        $project_ref01_markdef_up0_name = "before_sha";
        $project_ref01_markdef_up0_value = "Mark01-project_ref01_" . $setup["now"];
        $project_ref01_data_up0_up[$project_ref01_markdef_up0_name] = $project_ref01_markdef_up0_value;

        $project_ref01_resdata_up0_result = $project_ref01_ent->update($project_ref01_data_up0_up, null);
        $project_ref01_resdata_up0 = Helpers::to_map($project_ref01_resdata_up0_result);
        $this->assertNotNull($project_ref01_resdata_up0);
        $this->assertEquals($project_ref01_resdata_up0["id"], $project_ref01_data_up0_up["id"]);
        $this->assertEquals($project_ref01_resdata_up0[$project_ref01_markdef_up0_name], $project_ref01_markdef_up0_value);

        // LOAD
        $project_ref01_match_dt0 = [
            "id" => $project_ref01_data["id"],
        ];
        $project_ref01_data_dt0_loaded = $project_ref01_ent->load($project_ref01_match_dt0, null);
        $project_ref01_data_dt0_load_result = Helpers::to_map($project_ref01_data_dt0_loaded);
        $this->assertNotNull($project_ref01_data_dt0_load_result);
        $this->assertEquals($project_ref01_data_dt0_load_result["id"], $project_ref01_data["id"]);

        // REMOVE
        $project_ref01_match_rm0 = [
            "id" => $project_ref01_data["id"],
        ];
        $project_ref01_ent->remove($project_ref01_match_rm0, null);

    }
}

function project_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/project/ProjectTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = GitlabSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["project01", "project02", "project03", "custom_attribute01", "custom_attribute02", "custom_attribute03", "hook01", "hook02", "hook03", "import_project_member01", "import_project_member02", "import_project_member03", "issue01", "issue02", "issue03", "artifact01", "artifact02", "artifact03", "job01", "job02", "job03", "merge_request01", "merge_request02", "merge_request03", "domain01", "domain02", "domain03", "pipeline_schedule01", "pipeline_schedule02", "pipeline_schedule03", "pipeline01", "pipeline02", "pipeline03", "protected_branch01", "protected_branch02", "protected_branch03", "rule01", "rule02", "rule03", "blob01", "blob02", "blob03", "file01", "file02", "file03", "share01", "share02", "share03", "trigger01", "trigger02", "trigger03", "upload01", "upload02", "upload03", "custom_header01", "custom_header02", "custom_header03", "event01", "event02", "event03", "test01", "test02", "test03", "url_variable01", "url_variable02", "url_variable03", "draft_note01", "draft_note02", "draft_note03", "variable01", "variable02", "variable03", "secret01"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("GITLAB_TEST_PROJECT_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "GITLAB_TEST_PROJECT_ENTID" => $idmap,
        "GITLAB_TEST_LIVE" => "FALSE",
        "GITLAB_TEST_EXPLAIN" => "FALSE",
        "GITLAB_APIKEY" => "NONE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["GITLAB_TEST_PROJECT_ENTID"]);
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
