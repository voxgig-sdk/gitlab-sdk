<?php
declare(strict_types=1);

// EeApiEntitiesIssuableMetricImage entity test

require_once __DIR__ . '/../gitlab_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class EeApiEntitiesIssuableMetricImageEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = GitlabSDK::test(null, null);
        $ent = $testsdk->EeApiEntitiesIssuableMetricImage(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = ee_api_entities_issuable_metric_image_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "update", "remove"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "ee_api_entities_issuable_metric_image." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set GITLAB_TEST_EE_API_ENTITIES_ISSUABLE_METRIC_IMAGE_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $ee_api_entities_issuable_metric_image_ref01_ent = $client->EeApiEntitiesIssuableMetricImage(null);
        $ee_api_entities_issuable_metric_image_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.ee_api_entities_issuable_metric_image"), "ee_api_entities_issuable_metric_image_ref01"));
        $ee_api_entities_issuable_metric_image_ref01_data["issue_id"] = $setup["idmap"]["issue01"];
        $ee_api_entities_issuable_metric_image_ref01_data["project_id"] = $setup["idmap"]["project01"];

        $ee_api_entities_issuable_metric_image_ref01_data_result = $ee_api_entities_issuable_metric_image_ref01_ent->create($ee_api_entities_issuable_metric_image_ref01_data, null);
        $ee_api_entities_issuable_metric_image_ref01_data = Helpers::to_map($ee_api_entities_issuable_metric_image_ref01_data_result);
        $this->assertNotNull($ee_api_entities_issuable_metric_image_ref01_data);
        $this->assertNotNull($ee_api_entities_issuable_metric_image_ref01_data["id"]);

        // UPDATE
        $ee_api_entities_issuable_metric_image_ref01_data_up0_up = [
            "id" => $ee_api_entities_issuable_metric_image_ref01_data["id"],
            "issue_id" => $setup["idmap"]["issue_id"],
            "project_id" => $setup["idmap"]["project_id"],
        ];

        $ee_api_entities_issuable_metric_image_ref01_markdef_up0_name = "created_at";
        $ee_api_entities_issuable_metric_image_ref01_markdef_up0_value = "Mark01-ee_api_entities_issuable_metric_image_ref01_" . $setup["now"];
        $ee_api_entities_issuable_metric_image_ref01_data_up0_up[$ee_api_entities_issuable_metric_image_ref01_markdef_up0_name] = $ee_api_entities_issuable_metric_image_ref01_markdef_up0_value;

        $ee_api_entities_issuable_metric_image_ref01_resdata_up0_result = $ee_api_entities_issuable_metric_image_ref01_ent->update($ee_api_entities_issuable_metric_image_ref01_data_up0_up, null);
        $ee_api_entities_issuable_metric_image_ref01_resdata_up0 = Helpers::to_map($ee_api_entities_issuable_metric_image_ref01_resdata_up0_result);
        $this->assertNotNull($ee_api_entities_issuable_metric_image_ref01_resdata_up0);
        $this->assertEquals($ee_api_entities_issuable_metric_image_ref01_resdata_up0["id"], $ee_api_entities_issuable_metric_image_ref01_data_up0_up["id"]);
        $this->assertEquals($ee_api_entities_issuable_metric_image_ref01_resdata_up0[$ee_api_entities_issuable_metric_image_ref01_markdef_up0_name], $ee_api_entities_issuable_metric_image_ref01_markdef_up0_value);

        // REMOVE
        $ee_api_entities_issuable_metric_image_ref01_match_rm0 = [
            "id" => $ee_api_entities_issuable_metric_image_ref01_data["id"],
        ];
        $ee_api_entities_issuable_metric_image_ref01_ent->remove($ee_api_entities_issuable_metric_image_ref01_match_rm0, null);

    }
}

function ee_api_entities_issuable_metric_image_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/ee_api_entities_issuable_metric_image/EeApiEntitiesIssuableMetricImageTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = GitlabSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["ee_api_entities_issuable_metric_image01", "ee_api_entities_issuable_metric_image02", "ee_api_entities_issuable_metric_image03", "project01", "project02", "project03", "issue01", "issue02", "issue03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("GITLAB_TEST_EE_API_ENTITIES_ISSUABLE_METRIC_IMAGE_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "GITLAB_TEST_EE_API_ENTITIES_ISSUABLE_METRIC_IMAGE_ENTID" => $idmap,
        "GITLAB_TEST_LIVE" => "FALSE",
        "GITLAB_TEST_EXPLAIN" => "FALSE",
        "GITLAB_APIKEY" => "NONE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["GITLAB_TEST_EE_API_ENTITIES_ISSUABLE_METRIC_IMAGE_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }
    if (!isset($idmap_resolved["issue_id"])) {
        $idmap_resolved["issue_id"] = $idmap_resolved["issue01"];
    }
    if (!isset($idmap_resolved["project_id"])) {
        $idmap_resolved["project_id"] = $idmap_resolved["project01"];
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
