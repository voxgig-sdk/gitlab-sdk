<?php
declare(strict_types=1);

// NugetPackage entity test

require_once __DIR__ . '/../gitlab_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class NugetPackageEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = GitlabSDK::test(null, null);
        $ent = $testsdk->NugetPackage(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = nuget_package_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["list", "update", "load", "remove"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "nuget_package." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set GITLAB_TEST_NUGET_PACKAGE_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $nuget_package_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.nuget_package")));
        $nuget_package_ref01_data = null;
        if (count($nuget_package_ref01_data_raw) > 0) {
            $nuget_package_ref01_data = Helpers::to_map($nuget_package_ref01_data_raw[0][1]);
        }

        // LIST
        $nuget_package_ref01_ent = $client->NugetPackage(null);
        $nuget_package_ref01_match = [
            "project_id" => $setup["idmap"]["project01"],
        ];

        $nuget_package_ref01_list_result = $nuget_package_ref01_ent->list($nuget_package_ref01_match, null);
        $this->assertIsArray($nuget_package_ref01_list_result);

        // UPDATE
        $nuget_package_ref01_data_up0_up = [
            "id" => $nuget_package_ref01_data["id"],
        ];

        $nuget_package_ref01_markdef_up0_name = "lower";
        $nuget_package_ref01_markdef_up0_value = "Mark01-nuget_package_ref01_" . $setup["now"];
        $nuget_package_ref01_data_up0_up[$nuget_package_ref01_markdef_up0_name] = $nuget_package_ref01_markdef_up0_value;

        $nuget_package_ref01_resdata_up0_result = $nuget_package_ref01_ent->update($nuget_package_ref01_data_up0_up, null);
        $nuget_package_ref01_resdata_up0 = Helpers::to_map($nuget_package_ref01_resdata_up0_result);
        $this->assertNotNull($nuget_package_ref01_resdata_up0);
        $this->assertEquals($nuget_package_ref01_resdata_up0["id"], $nuget_package_ref01_data_up0_up["id"]);
        $this->assertEquals($nuget_package_ref01_resdata_up0[$nuget_package_ref01_markdef_up0_name], $nuget_package_ref01_markdef_up0_value);

        // LOAD
        $nuget_package_ref01_match_dt0 = [
            "id" => $nuget_package_ref01_data["id"],
        ];
        $nuget_package_ref01_data_dt0_loaded = $nuget_package_ref01_ent->load($nuget_package_ref01_match_dt0, null);
        $nuget_package_ref01_data_dt0_load_result = Helpers::to_map($nuget_package_ref01_data_dt0_loaded);
        $this->assertNotNull($nuget_package_ref01_data_dt0_load_result);
        $this->assertEquals($nuget_package_ref01_data_dt0_load_result["id"], $nuget_package_ref01_data["id"]);

        // REMOVE
        $nuget_package_ref01_match_rm0 = [
            "id" => $nuget_package_ref01_data["id"],
        ];
        $nuget_package_ref01_ent->remove($nuget_package_ref01_match_rm0, null);

        // LIST
        $nuget_package_ref01_match_rt0 = [
            "project_id" => $setup["idmap"]["project01"],
        ];

        $nuget_package_ref01_list_rt0_result = $nuget_package_ref01_ent->list($nuget_package_ref01_match_rt0, null);
        $this->assertIsArray($nuget_package_ref01_list_rt0_result);

    }
}

function nuget_package_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/nuget_package/NugetPackageTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = GitlabSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["nuget_package01", "nuget_package02", "nuget_package03", "group01", "group02", "group03", "project01", "project02", "project03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("GITLAB_TEST_NUGET_PACKAGE_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "GITLAB_TEST_NUGET_PACKAGE_ENTID" => $idmap,
        "GITLAB_TEST_LIVE" => "FALSE",
        "GITLAB_TEST_EXPLAIN" => "FALSE",
        "GITLAB_APIKEY" => "NONE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["GITLAB_TEST_NUGET_PACKAGE_ENTID"]);
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
