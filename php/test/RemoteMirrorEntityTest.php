<?php
declare(strict_types=1);

// RemoteMirror entity test

require_once __DIR__ . '/../gitlab_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class RemoteMirrorEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = GitlabSDK::test(null, null);
        $ent = $testsdk->RemoteMirror(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = remote_mirror_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "load", "remove"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "remote_mirror." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set GITLAB_TEST_REMOTE_MIRROR_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $remote_mirror_ref01_ent = $client->RemoteMirror(null);
        $remote_mirror_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.remote_mirror"), "remote_mirror_ref01"));
        $remote_mirror_ref01_data["mirror_id"] = $setup["idmap"]["mirror01"];
        $remote_mirror_ref01_data["project_id"] = $setup["idmap"]["project01"];

        $remote_mirror_ref01_data_result = $remote_mirror_ref01_ent->create($remote_mirror_ref01_data, null);
        $remote_mirror_ref01_data = Helpers::to_map($remote_mirror_ref01_data_result);
        $this->assertNotNull($remote_mirror_ref01_data);

        // LOAD
        $remote_mirror_ref01_match_dt0 = [];
        $remote_mirror_ref01_data_dt0_loaded = $remote_mirror_ref01_ent->load($remote_mirror_ref01_match_dt0, null);
        $this->assertNotNull($remote_mirror_ref01_data_dt0_loaded);

        // REMOVE
        $remote_mirror_ref01_match_rm0 = [
            "id" => $remote_mirror_ref01_data["id"],
        ];
        $remote_mirror_ref01_ent->remove($remote_mirror_ref01_match_rm0, null);

    }
}

function remote_mirror_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/remote_mirror/RemoteMirrorTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = GitlabSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["remote_mirror01", "remote_mirror02", "remote_mirror03", "project01", "project02", "project03", "mirror01"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("GITLAB_TEST_REMOTE_MIRROR_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "GITLAB_TEST_REMOTE_MIRROR_ENTID" => $idmap,
        "GITLAB_TEST_LIVE" => "FALSE",
        "GITLAB_TEST_EXPLAIN" => "FALSE",
        "GITLAB_APIKEY" => "NONE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["GITLAB_TEST_REMOTE_MIRROR_ENTID"]);
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
