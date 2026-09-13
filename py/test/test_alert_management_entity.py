# AlertManagement entity test

import json
import os
import time

import pytest

from gitlab_sdk.utility.voxgig_struct import voxgig_struct as vs
from gitlab_sdk import GitlabSDK
from gitlab_sdk.core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestAlertManagementEntity:

    def test_should_create_instance(self):
        testsdk = GitlabSDK.test(None, None)
        ent = testsdk.AlertManagement(None)
        assert ent is not None

    def test_should_run_basic_flow(self):
        setup = _alert_management_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "remove"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "alert_management." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set GITLAB_TEST_ALERT_MANAGEMENT_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        alert_management_ref01_ent = client.AlertManagement(None)
        alert_management_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.alert_management"), "alert_management_ref01"))
        alert_management_ref01_data["alert_management_alert_id"] = setup["idmap"]["alert_management_alert01"]
        alert_management_ref01_data["project_id"] = setup["idmap"]["project01"]

        alert_management_ref01_data = helpers.to_map(runner.entity_data(alert_management_ref01_ent.create(alert_management_ref01_data, None)))
        assert alert_management_ref01_data is not None




def _alert_management_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/alert_management/AlertManagementTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = GitlabSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["alert_management01", "alert_management02", "alert_management03", "project01", "project02", "project03", "alert_management_alert01", "alert_management_alert02", "alert_management_alert03", "metric_image01", "metric_image02", "metric_image03"],
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
        "GITLAB_TEST_ALERT_MANAGEMENT_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "GITLAB_TEST_ALERT_MANAGEMENT_ENTID": idmap,
        "GITLAB_TEST_LIVE": "FALSE",
        "GITLAB_TEST_EXPLAIN": "FALSE",
        "GITLAB_APIKEY": "",
    })

    idmap_resolved = helpers.to_map(
        env.get("GITLAB_TEST_ALERT_MANAGEMENT_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)

    if env.get("GITLAB_TEST_LIVE") == "TRUE":
        merged_opts = vs.merge([
            # FIRST, so the generated fields below win: sdk-test-control.json's
            # test.client.options adds to the live client, it does not
            # redirect it.
            runner.live_client_options(),
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
