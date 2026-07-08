# TerraformRegistry entity test

import json
import os
import time

import pytest

from utility.voxgig_struct import voxgig_struct as vs
from gitlab_sdk import GitlabSDK
from core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestTerraformRegistryEntity:

    def test_should_create_instance(self):
        testsdk = GitlabSDK.test(None, None)
        ent = testsdk.TerraformRegistry(None)
        assert ent is not None

    def test_should_run_basic_flow(self):
        setup = _terraform_registry_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["update", "load"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "terraform_registry." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set GITLAB_TEST_TERRAFORM_REGISTRY_ENTID JSON to run live")
        client = setup["client"]

        # Bootstrap entity data from existing test data.
        terraform_registry_ref01_data_raw = vs.items(helpers.to_map(
            vs.getpath(setup["data"], "existing.terraform_registry")))
        terraform_registry_ref01_data = None
        if len(terraform_registry_ref01_data_raw) > 0:
            terraform_registry_ref01_data = helpers.to_map(terraform_registry_ref01_data_raw[0][1])

        # UPDATE
        terraform_registry_ref01_ent = client.TerraformRegistry(None)
        terraform_registry_ref01_data_up0_up = {
            "module_id": setup["idmap"]["module_id"],
            "project_id": setup["idmap"]["project_id"],
        }

        terraform_registry_ref01_resdata_up0 = helpers.to_map(terraform_registry_ref01_ent.update(terraform_registry_ref01_data_up0_up, None))
        assert terraform_registry_ref01_resdata_up0 is not None

        # LOAD
        terraform_registry_ref01_match_dt0 = {}
        terraform_registry_ref01_data_dt0_loaded = terraform_registry_ref01_ent.load(terraform_registry_ref01_match_dt0, None)
        assert terraform_registry_ref01_data_dt0_loaded is not None



def _terraform_registry_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/terraform_registry/TerraformRegistryTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = GitlabSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["terraform_registry01", "terraform_registry02", "terraform_registry03", "v101", "v102", "v103", "project01", "project02", "project03", "module01", "module02", "module03", "module_name01"],
        {
            "`$PACK`": ["", {
                "`$KEY`": "`$COPY`",
                "`$VAL`": ["`$FORMAT`", "upper", "`$COPY`"],
            }],
        }
    )

    # Detect ENTID env override before envOverride consumes it. When live
    # mode is on without a real override, the basic test runs against synthetic
    # IDs from the fixture and 4xx's. We surface this so the test can skip.
    _entid_env_raw = os.environ.get(
        "GITLAB_TEST_TERRAFORM_REGISTRY_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "GITLAB_TEST_TERRAFORM_REGISTRY_ENTID": idmap,
        "GITLAB_TEST_LIVE": "FALSE",
        "GITLAB_TEST_EXPLAIN": "FALSE",
        "GITLAB_APIKEY": "NONE",
    })

    idmap_resolved = helpers.to_map(
        env.get("GITLAB_TEST_TERRAFORM_REGISTRY_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)
    if idmap_resolved.get("module_id") is None:
        idmap_resolved["module_id"] = idmap_resolved.get("module01")
    if idmap_resolved.get("project_id") is None:
        idmap_resolved["project_id"] = idmap_resolved.get("project01")

    if env.get("GITLAB_TEST_LIVE") == "TRUE":
        merged_opts = vs.merge([
            {
                "apikey": env.get("GITLAB_APIKEY"),
            },
            extra or {},
        ])
        client = GitlabSDK(helpers.to_map(merged_opts))

    _live = env.get("GITLAB_TEST_LIVE") == "TRUE"
    return {
        "client": client,
        "data": entity_data,
        "idmap": idmap_resolved,
        "env": env,
        "explain": env.get("GITLAB_TEST_EXPLAIN") == "TRUE",
        "live": _live,
        "synthetic_only": _live and not _idmap_overridden,
        "now": int(time.time() * 1000),
    }
