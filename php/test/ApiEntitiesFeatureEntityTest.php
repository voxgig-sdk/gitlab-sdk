<?php
declare(strict_types=1);

// ApiEntitiesFeature entity test

require_once __DIR__ . '/../gitlab_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class ApiEntitiesFeatureEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = GitlabSDK::test(null, null);
        $ent = $testsdk->ApiEntitiesFeature(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = api_entities_feature_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "list"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "api_entities_feature." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set GITLAB_TEST_API_ENTITIES_FEATURE_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $api_entities_feature_ref01_ent = $client->ApiEntitiesFeature(null);
        $api_entities_feature_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.api_entities_feature"), "api_entities_feature_ref01"));
        $api_entities_feature_ref01_data["name"] = $setup["idmap"]["name01"];

        $api_entities_feature_ref01_data_result = $api_entities_feature_ref01_ent->create($api_entities_feature_ref01_data, null);
        $api_entities_feature_ref01_data = Helpers::to_map($api_entities_feature_ref01_data_result);
        $this->assertNotNull($api_entities_feature_ref01_data);

        // LIST
        $api_entities_feature_ref01_match = [];

        $api_entities_feature_ref01_list_result = $api_entities_feature_ref01_ent->list($api_entities_feature_ref01_match, null);
        $this->assertIsArray($api_entities_feature_ref01_list_result);

        $found_item = sdk_select(
            Runner::entity_list_to_data($api_entities_feature_ref01_list_result),
            ["id" => $api_entities_feature_ref01_data["id"]]);
        $this->assertNotEmpty($found_item);

    }
}

function api_entities_feature_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/api_entities_feature/ApiEntitiesFeatureTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = GitlabSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["api_entities_feature01", "api_entities_feature02", "api_entities_feature03", "name01"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("GITLAB_TEST_API_ENTITIES_FEATURE_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "GITLAB_TEST_API_ENTITIES_FEATURE_ENTID" => $idmap,
        "GITLAB_TEST_LIVE" => "FALSE",
        "GITLAB_TEST_EXPLAIN" => "FALSE",
        "GITLAB_APIKEY" => "NONE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["GITLAB_TEST_API_ENTITIES_FEATURE_ENTID"]);
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
