<?php
declare(strict_types=1);

// ConanPackage entity test

require_once __DIR__ . '/../gitlab_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class ConanPackageEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = GitlabSDK::test(null, null);
        $ent = $testsdk->ConanPackage(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = conan_package_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["update", "load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "conan_package." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set GITLAB_TEST_CONAN_PACKAGE_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $conan_package_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.conan_package")));
        $conan_package_ref01_data = null;
        if (count($conan_package_ref01_data_raw) > 0) {
            $conan_package_ref01_data = Helpers::to_map($conan_package_ref01_data_raw[0][1]);
        }

        // UPDATE
        $conan_package_ref01_ent = $client->ConanPackage(null);
        $conan_package_ref01_data_up0_up = [
            "file_id" => $setup["idmap"]["file_id"],
            "package_channel" => $setup["idmap"]["package_channel"],
            "package_username" => $setup["idmap"]["package_username"],
            "package_version" => $setup["idmap"]["package_version"],
            "recipe_revision" => $setup["idmap"]["recipe_revision"],
        ];

        $conan_package_ref01_resdata_up0_result = $conan_package_ref01_ent->update($conan_package_ref01_data_up0_up, null);
        $conan_package_ref01_resdata_up0 = Helpers::to_map($conan_package_ref01_resdata_up0_result);
        $this->assertNotNull($conan_package_ref01_resdata_up0);

        // LOAD
        $conan_package_ref01_match_dt0 = [];
        $conan_package_ref01_data_dt0_loaded = $conan_package_ref01_ent->load($conan_package_ref01_match_dt0, null);
        $this->assertNotNull($conan_package_ref01_data_dt0_loaded);

    }
}

function conan_package_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/conan_package/ConanPackageTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = GitlabSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["conan_package01", "conan_package02", "conan_package03", "project01", "project02", "project03", "conan01", "conan02", "conan03", "file01", "file02", "file03", "export01", "export02", "export03", "package01", "package02", "package03", "revision01", "revision02", "revision03", "package_channel01", "package_username01", "package_version01", "recipe_revision01"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("GITLAB_TEST_CONAN_PACKAGE_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "GITLAB_TEST_CONAN_PACKAGE_ENTID" => $idmap,
        "GITLAB_TEST_LIVE" => "FALSE",
        "GITLAB_TEST_EXPLAIN" => "FALSE",
        "GITLAB_APIKEY" => "NONE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["GITLAB_TEST_CONAN_PACKAGE_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }
    if (!isset($idmap_resolved["file_id"])) {
        $idmap_resolved["file_id"] = $idmap_resolved["file01"];
    }
    if (!isset($idmap_resolved["package_channel"])) {
        $idmap_resolved["package_channel"] = $idmap_resolved["package_channel01"];
    }
    if (!isset($idmap_resolved["package_username"])) {
        $idmap_resolved["package_username"] = $idmap_resolved["package_username01"];
    }
    if (!isset($idmap_resolved["package_version"])) {
        $idmap_resolved["package_version"] = $idmap_resolved["package_version01"];
    }
    if (!isset($idmap_resolved["recipe_revision"])) {
        $idmap_resolved["recipe_revision"] = $idmap_resolved["recipe_revision01"];
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
