# Project entity test

import json
import os
import time

import pytest

from utility.voxgig_struct import voxgig_struct as vs
from gitlab_sdk import GitlabSDK
from core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestProjectEntity:

    def test_should_create_instance(self):
        testsdk = GitlabSDK.test(None, None)
        ent = testsdk.Project(None)
        assert ent is not None

    def test_should_run_basic_flow(self):
        setup = _project_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "update", "load", "remove"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "project." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set GITLAB_TEST_PROJECT_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        project_ref01_ent = client.Project(None)
        project_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.project"), "project_ref01"))
        project_ref01_data["hook_id"] = setup["idmap"]["hook01"]
        project_ref01_data["merge_request_id"] = setup["idmap"]["merge_request01"]
        project_ref01_data["pipeline_schedule_id"] = setup["idmap"]["pipeline_schedule01"]
        project_ref01_data["secret"] = setup["idmap"]["secret01"]

        project_ref01_data = helpers.to_map(project_ref01_ent.create(project_ref01_data, None))
        assert project_ref01_data is not None
        assert project_ref01_data["id"] is not None

        # UPDATE
        project_ref01_data_up0_up = {
            "id": project_ref01_data["id"],
        }

        project_ref01_markdef_up0_name = "before_sha"
        project_ref01_markdef_up0_value = "Mark01-project_ref01_" + str(setup["now"])
        project_ref01_data_up0_up[project_ref01_markdef_up0_name] = project_ref01_markdef_up0_value

        project_ref01_resdata_up0 = helpers.to_map(project_ref01_ent.update(project_ref01_data_up0_up, None))
        assert project_ref01_resdata_up0 is not None
        assert project_ref01_resdata_up0["id"] == project_ref01_data_up0_up["id"]
        assert project_ref01_resdata_up0[project_ref01_markdef_up0_name] == project_ref01_markdef_up0_value

        # LOAD
        project_ref01_match_dt0 = {
            "id": project_ref01_data["id"],
        }
        project_ref01_data_dt0_loaded = project_ref01_ent.load(project_ref01_match_dt0, None)
        project_ref01_data_dt0_load_result = helpers.to_map(project_ref01_data_dt0_loaded)
        assert project_ref01_data_dt0_load_result is not None
        assert project_ref01_data_dt0_load_result["id"] == project_ref01_data["id"]

        # REMOVE
        project_ref01_match_rm0 = {
            "id": project_ref01_data["id"],
        }
        project_ref01_ent.remove(project_ref01_match_rm0, None)



def _project_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/project/ProjectTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = GitlabSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["project01", "project02", "project03", "custom_attribute01", "custom_attribute02", "custom_attribute03", "hook01", "hook02", "hook03", "import_project_member01", "import_project_member02", "import_project_member03", "issue01", "issue02", "issue03", "artifact01", "artifact02", "artifact03", "job01", "job02", "job03", "merge_request01", "merge_request02", "merge_request03", "domain01", "domain02", "domain03", "pipeline_schedule01", "pipeline_schedule02", "pipeline_schedule03", "pipeline01", "pipeline02", "pipeline03", "protected_branch01", "protected_branch02", "protected_branch03", "rule01", "rule02", "rule03", "blob01", "blob02", "blob03", "file01", "file02", "file03", "share01", "share02", "share03", "trigger01", "trigger02", "trigger03", "upload01", "upload02", "upload03", "custom_header01", "custom_header02", "custom_header03", "event01", "event02", "event03", "test01", "test02", "test03", "url_variable01", "url_variable02", "url_variable03", "draft_note01", "draft_note02", "draft_note03", "variable01", "variable02", "variable03", "secret01"],
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
        "GITLAB_TEST_PROJECT_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "GITLAB_TEST_PROJECT_ENTID": idmap,
        "GITLAB_TEST_LIVE": "FALSE",
        "GITLAB_TEST_EXPLAIN": "FALSE",
        "GITLAB_APIKEY": "NONE",
    })

    idmap_resolved = helpers.to_map(
        env.get("GITLAB_TEST_PROJECT_ENTID"))
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
