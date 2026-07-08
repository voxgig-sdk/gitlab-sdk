# ApiEntitiesCommitNote entity test

import json
import os
import time

import pytest

from utility.voxgig_struct import voxgig_struct as vs
from gitlab_sdk import GitlabSDK
from core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestApiEntitiesCommitNoteEntity:

    def test_should_create_instance(self):
        testsdk = GitlabSDK.test(None, None)
        ent = testsdk.ApiEntitiesCommitNote(None)
        assert ent is not None

    def test_should_run_basic_flow(self):
        setup = _api_entities_commit_note_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "list"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "api_entities_commit_note." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set GITLAB_TEST_API_ENTITIES_COMMIT_NOTE_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        api_entities_commit_note_ref01_ent = client.ApiEntitiesCommitNote(None)
        api_entities_commit_note_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.api_entities_commit_note"), "api_entities_commit_note_ref01"))
        api_entities_commit_note_ref01_data["project_id"] = setup["idmap"]["project01"]
        api_entities_commit_note_ref01_data["sha"] = setup["idmap"]["sha01"]

        api_entities_commit_note_ref01_data = helpers.to_map(api_entities_commit_note_ref01_ent.create(api_entities_commit_note_ref01_data, None))
        assert api_entities_commit_note_ref01_data is not None

        # LIST
        api_entities_commit_note_ref01_match = {
            "project_id": setup["idmap"]["project01"],
            "sha": setup["idmap"]["sha01"],
        }

        api_entities_commit_note_ref01_list_result = api_entities_commit_note_ref01_ent.list(api_entities_commit_note_ref01_match, None)
        assert isinstance(api_entities_commit_note_ref01_list_result, list)

        found_item = vs.select(
            runner.entity_list_to_data(api_entities_commit_note_ref01_list_result),
            {"id": api_entities_commit_note_ref01_data["id"]})
        assert not vs.isempty(found_item)



def _api_entities_commit_note_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/api_entities_commit_note/ApiEntitiesCommitNoteTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = GitlabSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["api_entities_commit_note01", "api_entities_commit_note02", "api_entities_commit_note03", "project01", "project02", "project03", "commit01", "commit02", "commit03", "sha01"],
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
        "GITLAB_TEST_API_ENTITIES_COMMIT_NOTE_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "GITLAB_TEST_API_ENTITIES_COMMIT_NOTE_ENTID": idmap,
        "GITLAB_TEST_LIVE": "FALSE",
        "GITLAB_TEST_EXPLAIN": "FALSE",
        "GITLAB_APIKEY": "NONE",
    })

    idmap_resolved = helpers.to_map(
        env.get("GITLAB_TEST_API_ENTITIES_COMMIT_NOTE_ENTID"))
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
