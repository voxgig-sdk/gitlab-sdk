<?php
declare(strict_types=1);

// FeatureFlag entity test

require_once __DIR__ . '/../gitlab_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class FeatureFlagEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = GitlabSDK::test(null, null);
        $ent = $testsdk->FeatureFlag(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = feature_flag_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "load", "remove"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "feature_flag." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set GITLAB_TEST_FEATURE_FLAG_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $feature_flag_ref01_ent = $client->FeatureFlag(null);
        $feature_flag_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.feature_flag"), "feature_flag_ref01"));
        $feature_flag_ref01_data["project_id"] = $setup["idmap"]["project01"];
        $feature_flag_ref01_data["unleash_id"] = $setup["idmap"]["unleash01"];

        $feature_flag_ref01_data_result = $feature_flag_ref01_ent->create($feature_flag_ref01_data, null);
        $feature_flag_ref01_data = Helpers::to_map($feature_flag_ref01_data_result);
        $this->assertNotNull($feature_flag_ref01_data);

        // LOAD
        $feature_flag_ref01_match_dt0 = [];
        $feature_flag_ref01_data_dt0_loaded = $feature_flag_ref01_ent->load($feature_flag_ref01_match_dt0, null);
        $this->assertNotNull($feature_flag_ref01_data_dt0_loaded);

        // REMOVE
        $feature_flag_ref01_match_rm0 = [
            "id" => $feature_flag_ref01_data["id"],
        ];
        $feature_flag_ref01_ent->remove($feature_flag_ref01_match_rm0, null);

    }
}

function feature_flag_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/feature_flag/FeatureFlagTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = GitlabSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["feature_flag01", "feature_flag02", "feature_flag03", "unleash01", "unleash02", "unleash03", "project01", "project02", "project03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("GITLAB_TEST_FEATURE_FLAG_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "GITLAB_TEST_FEATURE_FLAG_ENTID" => $idmap,
        "GITLAB_TEST_LIVE" => "FALSE",
        "GITLAB_TEST_EXPLAIN" => "FALSE",
        "GITLAB_APIKEY" => "NONE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["GITLAB_TEST_FEATURE_FLAG_ENTID"]);
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
