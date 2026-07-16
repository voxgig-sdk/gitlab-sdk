<?php
declare(strict_types=1);

// Page entity test

require_once __DIR__ . '/../gitlab_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class PageEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = GitlabSDK::test(null, null);
        $ent = $testsdk->Page(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = page_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["update", "load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "page." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set GITLAB_TEST_PAGE_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $page_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.page")));
        $page_ref01_data = null;
        if (count($page_ref01_data_raw) > 0) {
            $page_ref01_data = Helpers::to_map($page_ref01_data_raw[0][1]);
        }

        // UPDATE
        $page_ref01_ent = $client->Page(null);
        $page_ref01_data_up0_up = [
        ];

        $page_ref01_resdata_up0_result = $page_ref01_ent->update($page_ref01_data_up0_up, null);
        $page_ref01_resdata_up0 = Helpers::to_map($page_ref01_resdata_up0_result);
        $this->assertNotNull($page_ref01_resdata_up0);

        // LOAD
        $page_ref01_match_dt0 = [];
        $page_ref01_data_dt0_loaded = $page_ref01_ent->load($page_ref01_match_dt0, null);
        $this->assertNotNull($page_ref01_data_dt0_loaded);

    }
}

function page_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/page/PageTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = GitlabSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["page01", "page02", "page03", "project01", "project02", "project03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("GITLAB_TEST_PAGE_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "GITLAB_TEST_PAGE_ENTID" => $idmap,
        "GITLAB_TEST_LIVE" => "FALSE",
        "GITLAB_TEST_EXPLAIN" => "FALSE",
        "GITLAB_APIKEY" => "NONE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["GITLAB_TEST_PAGE_ENTID"]);
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
