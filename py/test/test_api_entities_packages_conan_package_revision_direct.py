# ApiEntitiesPackagesConanPackageRevision direct test

import json
import pytest

from utility.voxgig_struct import voxgig_struct as vs
from gitlab_sdk import GitlabSDK
from core import helpers
from test import runner


class TestApiEntitiesPackagesConanPackageRevisionDirect:

    def test_should_direct_list_api_entities_packages_conan_package_revision(self):
        setup = _api_entities_packages_conan_package_revision_direct_setup([
            {"id": "direct01"},
            {"id": "direct02"},
        ])
        _skip, _reason = runner.is_control_skipped("direct", "direct-list-api_entities_packages_conan_package_revision", "live" if setup["live"] else "unit")
        if _skip:
            # pytest already imported at module scope
            pytest.skip(_reason or "skipped via sdk-test-control.json")
            return
        if setup["live"]:
            for _live_key in ["conan01", "conan_package_reference01", "package_channel01", "package_username01", "package_version01", "project01", "revision01"]:
                if setup["idmap"].get(_live_key) is None:
                    # pytest already imported at module scope
                    pytest.skip(f"live test needs {_live_key} via *_ENTID env var (synthetic IDs only)")
                    return

        client = setup["client"]

        params = {}
        if setup["live"]:
            params["conan_id"] = setup["idmap"]["conan01"]
        else:
            params["conan_id"] = "direct01"
        if setup["live"]:
            params["conan_package_reference"] = setup["idmap"]["conan_package_reference01"]
        else:
            params["conan_package_reference"] = "direct01"
        if setup["live"]:
            params["package_channel"] = setup["idmap"]["package_channel01"]
        else:
            params["package_channel"] = "direct01"
        if setup["live"]:
            params["package_username"] = setup["idmap"]["package_username01"]
        else:
            params["package_username"] = "direct01"
        if setup["live"]:
            params["package_version"] = setup["idmap"]["package_version01"]
        else:
            params["package_version"] = "direct01"
        if setup["live"]:
            params["project_id"] = setup["idmap"]["project01"]
        else:
            params["project_id"] = "direct01"
        if setup["live"]:
            params["revision_id"] = setup["idmap"]["revision01"]
        else:
            params["revision_id"] = "direct01"

        result = client.direct({
            "path": "api/v4/projects/{project_id}/packages/conan/v2/conans/{conan_id}/{package_version}/{package_username}/{package_channel}/revisions/{revision_id}/packages/{conan_package_reference}/revisions",
            "method": "GET",
            "params": params,
        })
        if setup["live"]:
            # Live mode is lenient: synthetic IDs frequently 4xx and the
            # list-response shape varies wildly across public APIs. Skip
            # rather than fail when the call doesn't return a usable list.
            if result.get("err") is not None:
                pytest.skip(f"list call failed (likely synthetic IDs against live API): {result.get('err')}")
                return
            if not result.get("ok"):
                pytest.skip("list call not ok (likely synthetic IDs against live API)")
                return
            status = helpers.to_int(result["status"])
            if status < 200 or status >= 300:
                pytest.skip(f"expected 2xx status, got {status}")
                return
        else:
            assert result["ok"] is True
            assert helpers.to_int(result["status"]) == 200
            assert isinstance(result["data"], list)
            assert len(result["data"]) == 2
            assert len(setup["calls"]) == 1



def _api_entities_packages_conan_package_revision_direct_setup(mockres):
    runner.load_env_local()

    calls = []

    env = runner.env_override({
        "GITLAB_TEST_API_ENTITIES_PACKAGES_CONAN_PACKAGE_REVISION_ENTID": {},
        "GITLAB_TEST_LIVE": "FALSE",
        "GITLAB_APIKEY": "NONE",
    })

    live = env.get("GITLAB_TEST_LIVE") == "TRUE"

    if live:
        merged_opts = {
            "apikey": env.get("GITLAB_APIKEY"),
        }
        client = GitlabSDK(merged_opts)
        return {
            "client": client,
            "calls": calls,
            "live": True,
            "idmap": {},
        }

    def mock_fetch(url, init):
        calls.append({"url": url, "init": init})
        return {
            "status": 200,
            "statusText": "OK",
            "headers": {},
            "json": lambda: mockres if mockres is not None else {"id": "direct01"},
            "body": "mock",
        }, None

    client = GitlabSDK({
        "base": "http://localhost:8080",
        "system": {
            "fetch": mock_fetch,
        },
    })

    return {
        "client": client,
        "calls": calls,
        "live": False,
        "idmap": {},
    }
