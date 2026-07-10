<?php
declare(strict_types=1);

// ApiEntitiesNamespacesStorageLimitExclusion entity test

require_once __DIR__ . '/../gitlab_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class ApiEntitiesNamespacesStorageLimitExclusionEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = GitlabSDK::test(null, null);
        $ent = $testsdk->ApiEntitiesNamespacesStorageLimitExclusion(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = api_entities_namespaces_storage_limit_exclusion_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "api_entities_namespaces_storage_limit_exclusion." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set GITLAB_TEST_API_ENTITIES_NAMESPACES_STORAGE_LIMIT_EXCLUSION_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $api_entities_namespaces_storage_limit_exclusion_ref01_ent = $client->ApiEntitiesNamespacesStorageLimitExclusion(null);
        $api_entities_namespaces_storage_limit_exclusion_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.api_entities_namespaces_storage_limit_exclusion"), "api_entities_namespaces_storage_limit_exclusion_ref01"));
        $api_entities_namespaces_storage_limit_exclusion_ref01_data["namespace_id"] = $setup["idmap"]["namespace01"];

        $api_entities_namespaces_storage_limit_exclusion_ref01_data_result = $api_entities_namespaces_storage_limit_exclusion_ref01_ent->create($api_entities_namespaces_storage_limit_exclusion_ref01_data, null);
        $api_entities_namespaces_storage_limit_exclusion_ref01_data = Helpers::to_map($api_entities_namespaces_storage_limit_exclusion_ref01_data_result);
        $this->assertNotNull($api_entities_namespaces_storage_limit_exclusion_ref01_data);
        $this->assertNotNull($api_entities_namespaces_storage_limit_exclusion_ref01_data["id"]);

        // LOAD
        $api_entities_namespaces_storage_limit_exclusion_ref01_match_dt0 = [
            "id" => $api_entities_namespaces_storage_limit_exclusion_ref01_data["id"],
        ];
        $api_entities_namespaces_storage_limit_exclusion_ref01_data_dt0_loaded = $api_entities_namespaces_storage_limit_exclusion_ref01_ent->load($api_entities_namespaces_storage_limit_exclusion_ref01_match_dt0, null);
        $api_entities_namespaces_storage_limit_exclusion_ref01_data_dt0_load_result = Helpers::to_map($api_entities_namespaces_storage_limit_exclusion_ref01_data_dt0_loaded);
        $this->assertNotNull($api_entities_namespaces_storage_limit_exclusion_ref01_data_dt0_load_result);
        $this->assertEquals($api_entities_namespaces_storage_limit_exclusion_ref01_data_dt0_load_result["id"], $api_entities_namespaces_storage_limit_exclusion_ref01_data["id"]);

    }
}

function api_entities_namespaces_storage_limit_exclusion_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/api_entities_namespaces_storage_limit_exclusion/ApiEntitiesNamespacesStorageLimitExclusionTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = GitlabSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["api_entities_namespaces_storage_limit_exclusion01", "api_entities_namespaces_storage_limit_exclusion02", "api_entities_namespaces_storage_limit_exclusion03", "namespace01", "namespace02", "namespace03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("GITLAB_TEST_API_ENTITIES_NAMESPACES_STORAGE_LIMIT_EXCLUSION_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "GITLAB_TEST_API_ENTITIES_NAMESPACES_STORAGE_LIMIT_EXCLUSION_ENTID" => $idmap,
        "GITLAB_TEST_LIVE" => "FALSE",
        "GITLAB_TEST_EXPLAIN" => "FALSE",
        "GITLAB_APIKEY" => "NONE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["GITLAB_TEST_API_ENTITIES_NAMESPACES_STORAGE_LIMIT_EXCLUSION_ENTID"]);
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
