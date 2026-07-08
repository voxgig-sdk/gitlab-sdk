# Group entity test

import json
import os
import time

import pytest

from utility.voxgig_struct import voxgig_struct as vs
from gitlab_sdk import GitlabSDK
from core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestGroupEntity:

    def test_should_create_instance(self):
        testsdk = GitlabSDK.test(None, None)
        ent = testsdk.Group(None)
        assert ent is not None

    def test_should_run_basic_flow(self):
        setup = _group_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "update", "load", "remove"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "group." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set GITLAB_TEST_GROUP_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        group_ref01_ent = client.Group(None)
        group_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.group"), "group_ref01"))
        group_ref01_data["secret"] = setup["idmap"]["secret01"]

        group_ref01_data = helpers.to_map(group_ref01_ent.create(group_ref01_data, None))
        assert group_ref01_data is not None

        # UPDATE
        group_ref01_data_up0_up = {
        }

        group_ref01_resdata_up0 = helpers.to_map(group_ref01_ent.update(group_ref01_data_up0_up, None))
        assert group_ref01_resdata_up0 is not None

        # LOAD
        group_ref01_match_dt0 = {}
        group_ref01_data_dt0_loaded = group_ref01_ent.load(group_ref01_match_dt0, None)
        assert group_ref01_data_dt0_loaded is not None

        # REMOVE
        group_ref01_match_rm0 = {
            "id": group_ref01_data["id"],
        }
        group_ref01_ent.remove(group_ref01_match_rm0, None)



def _group_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/group/GroupTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = GitlabSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["group01", "group02", "group03", "billable_member01", "billable_member02", "billable_member03", "custom_attribute01", "custom_attribute02", "custom_attribute03", "member01", "member02", "member03", "share01", "share02", "share03", "ssh_certificate01", "ssh_certificate02", "ssh_certificate03", "upload01", "upload02", "upload03", "secret01"],
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
        "GITLAB_TEST_GROUP_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "GITLAB_TEST_GROUP_ENTID": idmap,
        "GITLAB_TEST_LIVE": "FALSE",
        "GITLAB_TEST_EXPLAIN": "FALSE",
        "GITLAB_APIKEY": "NONE",
    })

    idmap_resolved = helpers.to_map(
        env.get("GITLAB_TEST_GROUP_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)

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
