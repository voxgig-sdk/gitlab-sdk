# Gitlab SDK

from gitlab_sdk.utility.voxgig_struct import voxgig_struct as vs
from gitlab_sdk.core.utility_type import GitlabUtility
from gitlab_sdk.core.spec import GitlabSpec
from gitlab_sdk.core import helpers

# Load utility registration (populates Utility._registrar)
from gitlab_sdk.utility import register

# Load features
from gitlab_sdk.feature.base_feature import GitlabBaseFeature
from gitlab_sdk.features import _make_feature


class GitlabSDK:

    def __init__(self, options=None):
        self.mode = "live"
        self.features = []
        self.options = None

        utility = GitlabUtility()
        self._utility = utility

        from gitlab_sdk.config import shared_config
        config = shared_config()

        self._rootctx = utility.make_context({
            "client": self,
            "utility": utility,
            "config": config,
            "options": options if options is not None else {},
            "shared": {},
        }, None)

        self.options = utility.make_options(self._rootctx)

        if vs.getpath(self.options, "feature.test.active") is True:
            self.mode = "test"

        self._rootctx.options = self.options

        # Add features in the resolved order (make_options puts an explicit
        # list order first, else defaults to test-first). Ordering matters: the
        # `test` feature installs the base mock transport and the transport
        # features (retry/cache/netsim/proxy/ratelimit) wrap whatever is
        # current, so `test` must be added before them to sit at the base.
        feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
        if feature_opts is not None:
            featureorder = vs.getpath(self.options, "__derived__.featureorder")
            if isinstance(featureorder, list):
                for fname in featureorder:
                    fopts = helpers.to_map(feature_opts.get(fname))
                    if fopts is not None and fopts.get("active") is True:
                        utility.feature_add(self._rootctx, _make_feature(fname))

        # Add extension features.
        extend = vs.getprop(self.options, "extend")
        if isinstance(extend, list):
            for f in extend:
                if isinstance(f, dict) or (hasattr(f, "get_name") and callable(f.get_name)):
                    utility.feature_add(self._rootctx, f)

        # Initialize features.
        for f in self.features:
            utility.feature_init(self._rootctx, f)

        utility.feature_hook(self._rootctx, "PostConstruct")

        # #BuildFeatures

    def options_map(self):
        out = vs.clone(self.options)
        if isinstance(out, dict):
            return out
        return {}

    def get_utility(self):
        return GitlabUtility.copy(self._utility)

    def get_root_ctx(self):
        return self._rootctx

    def prepare(self, fetchargs=None):
        utility = self._utility

        if fetchargs is None:
            fetchargs = {}

        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "prepare",
            "ctrl": ctrl,
        }, self._rootctx)

        options = self.options

        path = vs.getprop(fetchargs, "path") or ""
        if not isinstance(path, str):
            path = ""

        method = vs.getprop(fetchargs, "method") or "GET"
        if not isinstance(method, str):
            method = "GET"

        params = helpers.to_map(vs.getprop(fetchargs, "params"))
        if params is None:
            params = {}
        query = helpers.to_map(vs.getprop(fetchargs, "query"))
        if query is None:
            query = {}

        headers = utility.prepare_headers(ctx)

        base = vs.getprop(options, "base") or ""
        if not isinstance(base, str):
            base = ""
        prefix = vs.getprop(options, "prefix") or ""
        if not isinstance(prefix, str):
            prefix = ""
        suffix = vs.getprop(options, "suffix") or ""
        if not isinstance(suffix, str):
            suffix = ""

        ctx.spec = GitlabSpec({
            "base": base,
            "prefix": prefix,
            "suffix": suffix,
            "path": path,
            "method": method,
            "params": params,
            "query": query,
            "headers": headers,
            "body": vs.getprop(fetchargs, "body"),
            "step": "start",
        })

        # Merge user-provided headers.
        uh = vs.getprop(fetchargs, "headers")
        if isinstance(uh, dict):
            for k, v in uh.items():
                ctx.spec.headers[k] = v

        _, err = utility.prepare_auth(ctx)
        if err is not None:
            raise err

        fetchdef, err = utility.make_fetch_def(ctx)
        if err is not None:
            raise err

        return fetchdef

    # Raw endpoint access is operator-controllable, like every entity op.
    # Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
    # either one reaches the same endpoint.
    def direct(self, fetchargs=None):
        if not self._op_allowed("direct"):
            return self._op_denied("direct")

        return self._raw_request(fetchargs)

    # Is this raw-access op permitted by the SDK's allow.op option?
    def _op_allowed(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return isinstance(allow_op, str) and op in allow_op

    def _op_denied(self, op):
        allow_op = vs.getpath(self.options, "allow.op")
        return {
            "ok": False,
            "err": Exception(
                "GitlabSDK: " + op + ": operation not allowed by"
                ' SDK option allow.op value: "' + str(allow_op) + '"'),
        }

    # Ungated request path shared by direct and graphql, each of which checks
    # its own allow.op token first. Private, rather than a flag on fetchargs:
    # a caller-supplied marker would let anyone opt straight back out of the
    # gate by passing it.
    def _raw_request(self, fetchargs=None):
        utility = self._utility

        try:
            fetchdef = self.prepare(fetchargs)
        except Exception as err:
            # direct() is the raw-HTTP escape hatch: it never raises, it
            # returns a result object callers branch on via result["ok"].
            return {"ok": False, "err": err}

        if fetchargs is None:
            fetchargs = {}
        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "direct",
            "ctrl": ctrl,
        }, self._rootctx)

        url = fetchdef.get("url", "")
        fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

        if fetch_err is not None:
            return {"ok": False, "err": fetch_err}

        if fetched is None:
            return {
                "ok": False,
                "err": ctx.make_error("direct_no_response", "response: undefined"),
            }

        if isinstance(fetched, dict):
            status = helpers.to_int(vs.getprop(fetched, "status"))
            headers = vs.getprop(fetched, "headers") or {}

            # No-body responses (204, 304) and explicit zero content-length
            # must skip JSON parsing — calling json() on an empty body raises.
            content_length = None
            if isinstance(headers, dict):
                content_length = headers.get("content-length")
            no_body = status in (204, 304) or str(content_length) == "0"

            json_data = None
            if not no_body:
                jf = vs.getprop(fetched, "json")
                if callable(jf):
                    try:
                        json_data = jf()
                    except Exception:
                        # Non-JSON body (e.g. text/plain, text/html). Surface
                        # status + headers but leave data as None.
                        json_data = None

            return {
                "ok": status >= 200 and status < 300,
                "status": status,
                "headers": headers,
                "data": json_data,
            }

        return {
            "ok": False,
            "err": ctx.make_error("direct_invalid", "invalid response type"),
        }

    # Raw GraphQL access: the pressure valve that makes the generated
    # surface's deliberate omissions (per-call selection sets, typed filter
    # builders, batching, subscriptions) livable — the whole schema stays
    # reachable.
    #
    # Thin wrapper over the same prepare/fetch path direct uses, with the one
    # thing raw direct cannot do for GraphQL: a GraphQL failure rides HTTP 200
    # as a top-level `errors` array, so status alone would report a failed
    # query as ok.
    #
    # NOTE: like direct, this bypasses the feature pipeline — no retry,
    # ratelimit or paging features apply.
    def graphql(self, query, variables=None, ctrl=None):
        if not self._op_allowed("graphql"):
            return self._op_denied("graphql")

        res = self._raw_request({
            "method": "POST",
            "headers": {"content-type": "application/json"},
            "body": {"query": query, "variables": variables or {}},
            "ctrl": ctrl or {},
        })

        # Errors are read BEFORE any status check: a GraphQL parse or
        # validation failure comes back as HTTP 400 carrying the standard
        # { errors: [...] } body, and the raw path represents a non-2xx as
        # ok:False with no err — so returning early on status would discard
        # the server's own diagnostics, which are the only useful part of
        # that response.
        errors = vs.getpath(res, "data.errors")

        if isinstance(errors, list) and 0 < len(errors):
            first = errors[0] if isinstance(errors[0], dict) else {}
            msg = first.get("message") or "graphql error"
            res["ok"] = False
            res["err"] = Exception("GitlabSDK: graphql: " + str(msg))
            res["graphql"] = errors

        return res


    def AccessRequest(self, data=None) -> "AccessRequestEntity":
        """Entity factory: client.AccessRequest().list() / client.AccessRequest().load({"id": ...})."""
        from gitlab_sdk.entity.access_request_entity import AccessRequestEntity
        return AccessRequestEntity(self, data)


    def AlertManagement(self, data=None) -> "AlertManagementEntity":
        """Entity factory: client.AlertManagement().list() / client.AlertManagement().load({"id": ...})."""
        from gitlab_sdk.entity.alert_management_entity import AlertManagementEntity
        return AlertManagementEntity(self, data)


    def ApiEntitiesAccessRequester(self, data=None) -> "ApiEntitiesAccessRequesterEntity":
        """Entity factory: client.ApiEntitiesAccessRequester().list() / client.ApiEntitiesAccessRequester().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_access_requester_entity import ApiEntitiesAccessRequesterEntity
        return ApiEntitiesAccessRequesterEntity(self, data)


    def ApiEntitiesAppearance(self, data=None) -> "ApiEntitiesAppearanceEntity":
        """Entity factory: client.ApiEntitiesAppearance().list() / client.ApiEntitiesAppearance().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_appearance_entity import ApiEntitiesAppearanceEntity
        return ApiEntitiesAppearanceEntity(self, data)


    def ApiEntitiesApplication(self, data=None) -> "ApiEntitiesApplicationEntity":
        """Entity factory: client.ApiEntitiesApplication().list() / client.ApiEntitiesApplication().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_application_entity import ApiEntitiesApplicationEntity
        return ApiEntitiesApplicationEntity(self, data)


    def ApiEntitiesApplicationStatistic(self, data=None) -> "ApiEntitiesApplicationStatisticEntity":
        """Entity factory: client.ApiEntitiesApplicationStatistic().list() / client.ApiEntitiesApplicationStatistic().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_application_statistic_entity import ApiEntitiesApplicationStatisticEntity
        return ApiEntitiesApplicationStatisticEntity(self, data)


    def ApiEntitiesApplicationWithSecret(self, data=None) -> "ApiEntitiesApplicationWithSecretEntity":
        """Entity factory: client.ApiEntitiesApplicationWithSecret().list() / client.ApiEntitiesApplicationWithSecret().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_application_with_secret_entity import ApiEntitiesApplicationWithSecretEntity
        return ApiEntitiesApplicationWithSecretEntity(self, data)


    def ApiEntitiesAvatar(self, data=None) -> "ApiEntitiesAvatarEntity":
        """Entity factory: client.ApiEntitiesAvatar().list() / client.ApiEntitiesAvatar().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_avatar_entity import ApiEntitiesAvatarEntity
        return ApiEntitiesAvatarEntity(self, data)


    def ApiEntitiesAwardEmoji(self, data=None) -> "ApiEntitiesAwardEmojiEntity":
        """Entity factory: client.ApiEntitiesAwardEmoji().list() / client.ApiEntitiesAwardEmoji().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_award_emoji_entity import ApiEntitiesAwardEmojiEntity
        return ApiEntitiesAwardEmojiEntity(self, data)


    def ApiEntitiesBadge(self, data=None) -> "ApiEntitiesBadgeEntity":
        """Entity factory: client.ApiEntitiesBadge().list() / client.ApiEntitiesBadge().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_badge_entity import ApiEntitiesBadgeEntity
        return ApiEntitiesBadgeEntity(self, data)


    def ApiEntitiesBasicBadgeDetail(self, data=None) -> "ApiEntitiesBasicBadgeDetailEntity":
        """Entity factory: client.ApiEntitiesBasicBadgeDetail().list() / client.ApiEntitiesBasicBadgeDetail().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_basic_badge_detail_entity import ApiEntitiesBasicBadgeDetailEntity
        return ApiEntitiesBasicBadgeDetailEntity(self, data)


    def ApiEntitiesBasicGroupDetail(self, data=None) -> "ApiEntitiesBasicGroupDetailEntity":
        """Entity factory: client.ApiEntitiesBasicGroupDetail().list() / client.ApiEntitiesBasicGroupDetail().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_basic_group_detail_entity import ApiEntitiesBasicGroupDetailEntity
        return ApiEntitiesBasicGroupDetailEntity(self, data)


    def ApiEntitiesBasicProjectDetail(self, data=None) -> "ApiEntitiesBasicProjectDetailEntity":
        """Entity factory: client.ApiEntitiesBasicProjectDetail().list() / client.ApiEntitiesBasicProjectDetail().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_basic_project_detail_entity import ApiEntitiesBasicProjectDetailEntity
        return ApiEntitiesBasicProjectDetailEntity(self, data)


    def ApiEntitiesBasicRef(self, data=None) -> "ApiEntitiesBasicRefEntity":
        """Entity factory: client.ApiEntitiesBasicRef().list() / client.ApiEntitiesBasicRef().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_basic_ref_entity import ApiEntitiesBasicRefEntity
        return ApiEntitiesBasicRefEntity(self, data)


    def ApiEntitiesBasicSuccess(self, data=None) -> "ApiEntitiesBasicSuccessEntity":
        """Entity factory: client.ApiEntitiesBasicSuccess().list() / client.ApiEntitiesBasicSuccess().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_basic_success_entity import ApiEntitiesBasicSuccessEntity
        return ApiEntitiesBasicSuccessEntity(self, data)


    def ApiEntitiesBatchedBackgroundMigration(self, data=None) -> "ApiEntitiesBatchedBackgroundMigrationEntity":
        """Entity factory: client.ApiEntitiesBatchedBackgroundMigration().list() / client.ApiEntitiesBatchedBackgroundMigration().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_batched_background_migration_entity import ApiEntitiesBatchedBackgroundMigrationEntity
        return ApiEntitiesBatchedBackgroundMigrationEntity(self, data)


    def ApiEntitiesBranch(self, data=None) -> "ApiEntitiesBranchEntity":
        """Entity factory: client.ApiEntitiesBranch().list() / client.ApiEntitiesBranch().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_branch_entity import ApiEntitiesBranchEntity
        return ApiEntitiesBranchEntity(self, data)


    def ApiEntitiesBulkImport(self, data=None) -> "ApiEntitiesBulkImportEntity":
        """Entity factory: client.ApiEntitiesBulkImport().list() / client.ApiEntitiesBulkImport().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_bulk_import_entity import ApiEntitiesBulkImportEntity
        return ApiEntitiesBulkImportEntity(self, data)


    def ApiEntitiesBulkImportsEntityFailure(self, data=None) -> "ApiEntitiesBulkImportsEntityFailureEntity":
        """Entity factory: client.ApiEntitiesBulkImportsEntityFailure().list() / client.ApiEntitiesBulkImportsEntityFailure().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_bulk_imports_entity_failure_entity import ApiEntitiesBulkImportsEntityFailureEntity
        return ApiEntitiesBulkImportsEntityFailureEntity(self, data)


    def ApiEntitiesBulkImportsExportStatus(self, data=None) -> "ApiEntitiesBulkImportsExportStatusEntity":
        """Entity factory: client.ApiEntitiesBulkImportsExportStatus().list() / client.ApiEntitiesBulkImportsExportStatus().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_bulk_imports_export_status_entity import ApiEntitiesBulkImportsExportStatusEntity
        return ApiEntitiesBulkImportsExportStatusEntity(self, data)


    def ApiEntitiesChangelog(self, data=None) -> "ApiEntitiesChangelogEntity":
        """Entity factory: client.ApiEntitiesChangelog().list() / client.ApiEntitiesChangelog().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_changelog_entity import ApiEntitiesChangelogEntity
        return ApiEntitiesChangelogEntity(self, data)


    def ApiEntitiesCiBridge(self, data=None) -> "ApiEntitiesCiBridgeEntity":
        """Entity factory: client.ApiEntitiesCiBridge().list() / client.ApiEntitiesCiBridge().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_ci_bridge_entity import ApiEntitiesCiBridgeEntity
        return ApiEntitiesCiBridgeEntity(self, data)


    def ApiEntitiesCiCatalogResourcesVersion(self, data=None) -> "ApiEntitiesCiCatalogResourcesVersionEntity":
        """Entity factory: client.ApiEntitiesCiCatalogResourcesVersion().list() / client.ApiEntitiesCiCatalogResourcesVersion().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_ci_catalog_resources_version_entity import ApiEntitiesCiCatalogResourcesVersionEntity
        return ApiEntitiesCiCatalogResourcesVersionEntity(self, data)


    def ApiEntitiesCiJob(self, data=None) -> "ApiEntitiesCiJobEntity":
        """Entity factory: client.ApiEntitiesCiJob().list() / client.ApiEntitiesCiJob().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_ci_job_entity import ApiEntitiesCiJobEntity
        return ApiEntitiesCiJobEntity(self, data)


    def ApiEntitiesCiJobBasic(self, data=None) -> "ApiEntitiesCiJobBasicEntity":
        """Entity factory: client.ApiEntitiesCiJobBasic().list() / client.ApiEntitiesCiJobBasic().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_ci_job_basic_entity import ApiEntitiesCiJobBasicEntity
        return ApiEntitiesCiJobBasicEntity(self, data)


    def ApiEntitiesCiJobBasicWithProject(self, data=None) -> "ApiEntitiesCiJobBasicWithProjectEntity":
        """Entity factory: client.ApiEntitiesCiJobBasicWithProject().list() / client.ApiEntitiesCiJobBasicWithProject().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_ci_job_basic_with_project_entity import ApiEntitiesCiJobBasicWithProjectEntity
        return ApiEntitiesCiJobBasicWithProjectEntity(self, data)


    def ApiEntitiesCiLintResult(self, data=None) -> "ApiEntitiesCiLintResultEntity":
        """Entity factory: client.ApiEntitiesCiLintResult().list() / client.ApiEntitiesCiLintResult().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_ci_lint_result_entity import ApiEntitiesCiLintResultEntity
        return ApiEntitiesCiLintResultEntity(self, data)


    def ApiEntitiesCiPipeline(self, data=None) -> "ApiEntitiesCiPipelineEntity":
        """Entity factory: client.ApiEntitiesCiPipeline().list() / client.ApiEntitiesCiPipeline().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_ci_pipeline_entity import ApiEntitiesCiPipelineEntity
        return ApiEntitiesCiPipelineEntity(self, data)


    def ApiEntitiesCiPipelineBasic(self, data=None) -> "ApiEntitiesCiPipelineBasicEntity":
        """Entity factory: client.ApiEntitiesCiPipelineBasic().list() / client.ApiEntitiesCiPipelineBasic().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_ci_pipeline_basic_entity import ApiEntitiesCiPipelineBasicEntity
        return ApiEntitiesCiPipelineBasicEntity(self, data)


    def ApiEntitiesCiPipelineSchedule(self, data=None) -> "ApiEntitiesCiPipelineScheduleEntity":
        """Entity factory: client.ApiEntitiesCiPipelineSchedule().list() / client.ApiEntitiesCiPipelineSchedule().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_ci_pipeline_schedule_entity import ApiEntitiesCiPipelineScheduleEntity
        return ApiEntitiesCiPipelineScheduleEntity(self, data)


    def ApiEntitiesCiPipelineScheduleDetail(self, data=None) -> "ApiEntitiesCiPipelineScheduleDetailEntity":
        """Entity factory: client.ApiEntitiesCiPipelineScheduleDetail().list() / client.ApiEntitiesCiPipelineScheduleDetail().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_ci_pipeline_schedule_detail_entity import ApiEntitiesCiPipelineScheduleDetailEntity
        return ApiEntitiesCiPipelineScheduleDetailEntity(self, data)


    def ApiEntitiesCiResetTokenResult(self, data=None) -> "ApiEntitiesCiResetTokenResultEntity":
        """Entity factory: client.ApiEntitiesCiResetTokenResult().list() / client.ApiEntitiesCiResetTokenResult().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_ci_reset_token_result_entity import ApiEntitiesCiResetTokenResultEntity
        return ApiEntitiesCiResetTokenResultEntity(self, data)


    def ApiEntitiesCiResourceGroup(self, data=None) -> "ApiEntitiesCiResourceGroupEntity":
        """Entity factory: client.ApiEntitiesCiResourceGroup().list() / client.ApiEntitiesCiResourceGroup().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_ci_resource_group_entity import ApiEntitiesCiResourceGroupEntity
        return ApiEntitiesCiResourceGroupEntity(self, data)


    def ApiEntitiesCiRunner(self, data=None) -> "ApiEntitiesCiRunnerEntity":
        """Entity factory: client.ApiEntitiesCiRunner().list() / client.ApiEntitiesCiRunner().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_ci_runner_entity import ApiEntitiesCiRunnerEntity
        return ApiEntitiesCiRunnerEntity(self, data)


    def ApiEntitiesCiRunnerDetail(self, data=None) -> "ApiEntitiesCiRunnerDetailEntity":
        """Entity factory: client.ApiEntitiesCiRunnerDetail().list() / client.ApiEntitiesCiRunnerDetail().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_ci_runner_detail_entity import ApiEntitiesCiRunnerDetailEntity
        return ApiEntitiesCiRunnerDetailEntity(self, data)


    def ApiEntitiesCiRunnerManager(self, data=None) -> "ApiEntitiesCiRunnerManagerEntity":
        """Entity factory: client.ApiEntitiesCiRunnerManager().list() / client.ApiEntitiesCiRunnerManager().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_ci_runner_manager_entity import ApiEntitiesCiRunnerManagerEntity
        return ApiEntitiesCiRunnerManagerEntity(self, data)


    def ApiEntitiesCiRunnerRegistrationDetail(self, data=None) -> "ApiEntitiesCiRunnerRegistrationDetailEntity":
        """Entity factory: client.ApiEntitiesCiRunnerRegistrationDetail().list() / client.ApiEntitiesCiRunnerRegistrationDetail().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_ci_runner_registration_detail_entity import ApiEntitiesCiRunnerRegistrationDetailEntity
        return ApiEntitiesCiRunnerRegistrationDetailEntity(self, data)


    def ApiEntitiesCiSecureFile(self, data=None) -> "ApiEntitiesCiSecureFileEntity":
        """Entity factory: client.ApiEntitiesCiSecureFile().list() / client.ApiEntitiesCiSecureFile().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_ci_secure_file_entity import ApiEntitiesCiSecureFileEntity
        return ApiEntitiesCiSecureFileEntity(self, data)


    def ApiEntitiesCiVariable(self, data=None) -> "ApiEntitiesCiVariableEntity":
        """Entity factory: client.ApiEntitiesCiVariable().list() / client.ApiEntitiesCiVariable().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_ci_variable_entity import ApiEntitiesCiVariableEntity
        return ApiEntitiesCiVariableEntity(self, data)


    def ApiEntitiesCluster(self, data=None) -> "ApiEntitiesClusterEntity":
        """Entity factory: client.ApiEntitiesCluster().list() / client.ApiEntitiesCluster().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_cluster_entity import ApiEntitiesClusterEntity
        return ApiEntitiesClusterEntity(self, data)


    def ApiEntitiesClusterGroup(self, data=None) -> "ApiEntitiesClusterGroupEntity":
        """Entity factory: client.ApiEntitiesClusterGroup().list() / client.ApiEntitiesClusterGroup().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_cluster_group_entity import ApiEntitiesClusterGroupEntity
        return ApiEntitiesClusterGroupEntity(self, data)


    def ApiEntitiesClusterProject(self, data=None) -> "ApiEntitiesClusterProjectEntity":
        """Entity factory: client.ApiEntitiesClusterProject().list() / client.ApiEntitiesClusterProject().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_cluster_project_entity import ApiEntitiesClusterProjectEntity
        return ApiEntitiesClusterProjectEntity(self, data)


    def ApiEntitiesClustersAgent(self, data=None) -> "ApiEntitiesClustersAgentEntity":
        """Entity factory: client.ApiEntitiesClustersAgent().list() / client.ApiEntitiesClustersAgent().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_clusters_agent_entity import ApiEntitiesClustersAgentEntity
        return ApiEntitiesClustersAgentEntity(self, data)


    def ApiEntitiesClustersAgentToken(self, data=None) -> "ApiEntitiesClustersAgentTokenEntity":
        """Entity factory: client.ApiEntitiesClustersAgentToken().list() / client.ApiEntitiesClustersAgentToken().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_clusters_agent_token_entity import ApiEntitiesClustersAgentTokenEntity
        return ApiEntitiesClustersAgentTokenEntity(self, data)


    def ApiEntitiesClustersAgentTokenBasic(self, data=None) -> "ApiEntitiesClustersAgentTokenBasicEntity":
        """Entity factory: client.ApiEntitiesClustersAgentTokenBasic().list() / client.ApiEntitiesClustersAgentTokenBasic().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_clusters_agent_token_basic_entity import ApiEntitiesClustersAgentTokenBasicEntity
        return ApiEntitiesClustersAgentTokenBasicEntity(self, data)


    def ApiEntitiesClustersAgentTokenWithToken(self, data=None) -> "ApiEntitiesClustersAgentTokenWithTokenEntity":
        """Entity factory: client.ApiEntitiesClustersAgentTokenWithToken().list() / client.ApiEntitiesClustersAgentTokenWithToken().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_clusters_agent_token_with_token_entity import ApiEntitiesClustersAgentTokenWithTokenEntity
        return ApiEntitiesClustersAgentTokenWithTokenEntity(self, data)


    def ApiEntitiesCommit(self, data=None) -> "ApiEntitiesCommitEntity":
        """Entity factory: client.ApiEntitiesCommit().list() / client.ApiEntitiesCommit().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_commit_entity import ApiEntitiesCommitEntity
        return ApiEntitiesCommitEntity(self, data)


    def ApiEntitiesCommitDetail(self, data=None) -> "ApiEntitiesCommitDetailEntity":
        """Entity factory: client.ApiEntitiesCommitDetail().list() / client.ApiEntitiesCommitDetail().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_commit_detail_entity import ApiEntitiesCommitDetailEntity
        return ApiEntitiesCommitDetailEntity(self, data)


    def ApiEntitiesCommitNote(self, data=None) -> "ApiEntitiesCommitNoteEntity":
        """Entity factory: client.ApiEntitiesCommitNote().list() / client.ApiEntitiesCommitNote().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_commit_note_entity import ApiEntitiesCommitNoteEntity
        return ApiEntitiesCommitNoteEntity(self, data)


    def ApiEntitiesCommitSequence(self, data=None) -> "ApiEntitiesCommitSequenceEntity":
        """Entity factory: client.ApiEntitiesCommitSequence().list() / client.ApiEntitiesCommitSequence().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_commit_sequence_entity import ApiEntitiesCommitSequenceEntity
        return ApiEntitiesCommitSequenceEntity(self, data)


    def ApiEntitiesCommitSignature(self, data=None) -> "ApiEntitiesCommitSignatureEntity":
        """Entity factory: client.ApiEntitiesCommitSignature().list() / client.ApiEntitiesCommitSignature().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_commit_signature_entity import ApiEntitiesCommitSignatureEntity
        return ApiEntitiesCommitSignatureEntity(self, data)


    def ApiEntitiesCommitStatus(self, data=None) -> "ApiEntitiesCommitStatusEntity":
        """Entity factory: client.ApiEntitiesCommitStatus().list() / client.ApiEntitiesCommitStatus().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_commit_status_entity import ApiEntitiesCommitStatusEntity
        return ApiEntitiesCommitStatusEntity(self, data)


    def ApiEntitiesCompare(self, data=None) -> "ApiEntitiesCompareEntity":
        """Entity factory: client.ApiEntitiesCompare().list() / client.ApiEntitiesCompare().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_compare_entity import ApiEntitiesCompareEntity
        return ApiEntitiesCompareEntity(self, data)


    def ApiEntitiesContainerRegistryRepository(self, data=None) -> "ApiEntitiesContainerRegistryRepositoryEntity":
        """Entity factory: client.ApiEntitiesContainerRegistryRepository().list() / client.ApiEntitiesContainerRegistryRepository().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_container_registry_repository_entity import ApiEntitiesContainerRegistryRepositoryEntity
        return ApiEntitiesContainerRegistryRepositoryEntity(self, data)


    def ApiEntitiesContainerRegistryTag(self, data=None) -> "ApiEntitiesContainerRegistryTagEntity":
        """Entity factory: client.ApiEntitiesContainerRegistryTag().list() / client.ApiEntitiesContainerRegistryTag().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_container_registry_tag_entity import ApiEntitiesContainerRegistryTagEntity
        return ApiEntitiesContainerRegistryTagEntity(self, data)


    def ApiEntitiesContainerRegistryTagDetail(self, data=None) -> "ApiEntitiesContainerRegistryTagDetailEntity":
        """Entity factory: client.ApiEntitiesContainerRegistryTagDetail().list() / client.ApiEntitiesContainerRegistryTagDetail().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_container_registry_tag_detail_entity import ApiEntitiesContainerRegistryTagDetailEntity
        return ApiEntitiesContainerRegistryTagDetailEntity(self, data)


    def ApiEntitiesContributor(self, data=None) -> "ApiEntitiesContributorEntity":
        """Entity factory: client.ApiEntitiesContributor().list() / client.ApiEntitiesContributor().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_contributor_entity import ApiEntitiesContributorEntity
        return ApiEntitiesContributorEntity(self, data)


    def ApiEntitiesDeployKey(self, data=None) -> "ApiEntitiesDeployKeyEntity":
        """Entity factory: client.ApiEntitiesDeployKey().list() / client.ApiEntitiesDeployKey().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_deploy_key_entity import ApiEntitiesDeployKeyEntity
        return ApiEntitiesDeployKeyEntity(self, data)


    def ApiEntitiesDeployKeysProject(self, data=None) -> "ApiEntitiesDeployKeysProjectEntity":
        """Entity factory: client.ApiEntitiesDeployKeysProject().list() / client.ApiEntitiesDeployKeysProject().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_deploy_keys_project_entity import ApiEntitiesDeployKeysProjectEntity
        return ApiEntitiesDeployKeysProjectEntity(self, data)


    def ApiEntitiesDeployToken(self, data=None) -> "ApiEntitiesDeployTokenEntity":
        """Entity factory: client.ApiEntitiesDeployToken().list() / client.ApiEntitiesDeployToken().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_deploy_token_entity import ApiEntitiesDeployTokenEntity
        return ApiEntitiesDeployTokenEntity(self, data)


    def ApiEntitiesDeployTokenWithToken(self, data=None) -> "ApiEntitiesDeployTokenWithTokenEntity":
        """Entity factory: client.ApiEntitiesDeployTokenWithToken().list() / client.ApiEntitiesDeployTokenWithToken().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_deploy_token_with_token_entity import ApiEntitiesDeployTokenWithTokenEntity
        return ApiEntitiesDeployTokenWithTokenEntity(self, data)


    def ApiEntitiesDeployment(self, data=None) -> "ApiEntitiesDeploymentEntity":
        """Entity factory: client.ApiEntitiesDeployment().list() / client.ApiEntitiesDeployment().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_deployment_entity import ApiEntitiesDeploymentEntity
        return ApiEntitiesDeploymentEntity(self, data)


    def ApiEntitiesDeploymentExtended(self, data=None) -> "ApiEntitiesDeploymentExtendedEntity":
        """Entity factory: client.ApiEntitiesDeploymentExtended().list() / client.ApiEntitiesDeploymentExtended().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_deployment_extended_entity import ApiEntitiesDeploymentExtendedEntity
        return ApiEntitiesDeploymentExtendedEntity(self, data)


    def ApiEntitiesDeploymentsApproval(self, data=None) -> "ApiEntitiesDeploymentsApprovalEntity":
        """Entity factory: client.ApiEntitiesDeploymentsApproval().list() / client.ApiEntitiesDeploymentsApproval().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_deployments_approval_entity import ApiEntitiesDeploymentsApprovalEntity
        return ApiEntitiesDeploymentsApprovalEntity(self, data)


    def ApiEntitiesDictionaryTable(self, data=None) -> "ApiEntitiesDictionaryTableEntity":
        """Entity factory: client.ApiEntitiesDictionaryTable().list() / client.ApiEntitiesDictionaryTable().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_dictionary_table_entity import ApiEntitiesDictionaryTableEntity
        return ApiEntitiesDictionaryTableEntity(self, data)


    def ApiEntitiesDiff(self, data=None) -> "ApiEntitiesDiffEntity":
        """Entity factory: client.ApiEntitiesDiff().list() / client.ApiEntitiesDiff().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_diff_entity import ApiEntitiesDiffEntity
        return ApiEntitiesDiffEntity(self, data)


    def ApiEntitiesDiscoveredCluster(self, data=None) -> "ApiEntitiesDiscoveredClusterEntity":
        """Entity factory: client.ApiEntitiesDiscoveredCluster().list() / client.ApiEntitiesDiscoveredCluster().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_discovered_cluster_entity import ApiEntitiesDiscoveredClusterEntity
        return ApiEntitiesDiscoveredClusterEntity(self, data)


    def ApiEntitiesDraftNote(self, data=None) -> "ApiEntitiesDraftNoteEntity":
        """Entity factory: client.ApiEntitiesDraftNote().list() / client.ApiEntitiesDraftNote().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_draft_note_entity import ApiEntitiesDraftNoteEntity
        return ApiEntitiesDraftNoteEntity(self, data)


    def ApiEntitiesEnvironment(self, data=None) -> "ApiEntitiesEnvironmentEntity":
        """Entity factory: client.ApiEntitiesEnvironment().list() / client.ApiEntitiesEnvironment().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_environment_entity import ApiEntitiesEnvironmentEntity
        return ApiEntitiesEnvironmentEntity(self, data)


    def ApiEntitiesErrorTrackingClientKey(self, data=None) -> "ApiEntitiesErrorTrackingClientKeyEntity":
        """Entity factory: client.ApiEntitiesErrorTrackingClientKey().list() / client.ApiEntitiesErrorTrackingClientKey().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_error_tracking_client_key_entity import ApiEntitiesErrorTrackingClientKeyEntity
        return ApiEntitiesErrorTrackingClientKeyEntity(self, data)


    def ApiEntitiesErrorTrackingProjectSetting(self, data=None) -> "ApiEntitiesErrorTrackingProjectSettingEntity":
        """Entity factory: client.ApiEntitiesErrorTrackingProjectSetting().list() / client.ApiEntitiesErrorTrackingProjectSetting().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_error_tracking_project_setting_entity import ApiEntitiesErrorTrackingProjectSettingEntity
        return ApiEntitiesErrorTrackingProjectSettingEntity(self, data)


    def ApiEntitiesEvent(self, data=None) -> "ApiEntitiesEventEntity":
        """Entity factory: client.ApiEntitiesEvent().list() / client.ApiEntitiesEvent().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_event_entity import ApiEntitiesEventEntity
        return ApiEntitiesEventEntity(self, data)


    def ApiEntitiesFeature(self, data=None) -> "ApiEntitiesFeatureEntity":
        """Entity factory: client.ApiEntitiesFeature().list() / client.ApiEntitiesFeature().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_feature_entity import ApiEntitiesFeatureEntity
        return ApiEntitiesFeatureEntity(self, data)


    def ApiEntitiesFeatureDefinition(self, data=None) -> "ApiEntitiesFeatureDefinitionEntity":
        """Entity factory: client.ApiEntitiesFeatureDefinition().list() / client.ApiEntitiesFeatureDefinition().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_feature_definition_entity import ApiEntitiesFeatureDefinitionEntity
        return ApiEntitiesFeatureDefinitionEntity(self, data)


    def ApiEntitiesFeatureFlag(self, data=None) -> "ApiEntitiesFeatureFlagEntity":
        """Entity factory: client.ApiEntitiesFeatureFlag().list() / client.ApiEntitiesFeatureFlag().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_feature_flag_entity import ApiEntitiesFeatureFlagEntity
        return ApiEntitiesFeatureFlagEntity(self, data)


    def ApiEntitiesFeatureFlagUserList(self, data=None) -> "ApiEntitiesFeatureFlagUserListEntity":
        """Entity factory: client.ApiEntitiesFeatureFlagUserList().list() / client.ApiEntitiesFeatureFlagUserList().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_feature_flag_user_list_entity import ApiEntitiesFeatureFlagUserListEntity
        return ApiEntitiesFeatureFlagUserListEntity(self, data)


    def ApiEntitiesFreezePeriod(self, data=None) -> "ApiEntitiesFreezePeriodEntity":
        """Entity factory: client.ApiEntitiesFreezePeriod().list() / client.ApiEntitiesFreezePeriod().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_freeze_period_entity import ApiEntitiesFreezePeriodEntity
        return ApiEntitiesFreezePeriodEntity(self, data)


    def ApiEntitiesGitlabSubscription(self, data=None) -> "ApiEntitiesGitlabSubscriptionEntity":
        """Entity factory: client.ApiEntitiesGitlabSubscription().list() / client.ApiEntitiesGitlabSubscription().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_gitlab_subscription_entity import ApiEntitiesGitlabSubscriptionEntity
        return ApiEntitiesGitlabSubscriptionEntity(self, data)


    def ApiEntitiesGoModuleVersion(self, data=None) -> "ApiEntitiesGoModuleVersionEntity":
        """Entity factory: client.ApiEntitiesGoModuleVersion().list() / client.ApiEntitiesGoModuleVersion().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_go_module_version_entity import ApiEntitiesGoModuleVersionEntity
        return ApiEntitiesGoModuleVersionEntity(self, data)


    def ApiEntitiesGroup(self, data=None) -> "ApiEntitiesGroupEntity":
        """Entity factory: client.ApiEntitiesGroup().list() / client.ApiEntitiesGroup().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_group_entity import ApiEntitiesGroupEntity
        return ApiEntitiesGroupEntity(self, data)


    def ApiEntitiesGroupDetail(self, data=None) -> "ApiEntitiesGroupDetailEntity":
        """Entity factory: client.ApiEntitiesGroupDetail().list() / client.ApiEntitiesGroupDetail().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_group_detail_entity import ApiEntitiesGroupDetailEntity
        return ApiEntitiesGroupDetailEntity(self, data)


    def ApiEntitiesHook(self, data=None) -> "ApiEntitiesHookEntity":
        """Entity factory: client.ApiEntitiesHook().list() / client.ApiEntitiesHook().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_hook_entity import ApiEntitiesHookEntity
        return ApiEntitiesHookEntity(self, data)


    def ApiEntitiesIntegration(self, data=None) -> "ApiEntitiesIntegrationEntity":
        """Entity factory: client.ApiEntitiesIntegration().list() / client.ApiEntitiesIntegration().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_integration_entity import ApiEntitiesIntegrationEntity
        return ApiEntitiesIntegrationEntity(self, data)


    def ApiEntitiesIntegrationBasic(self, data=None) -> "ApiEntitiesIntegrationBasicEntity":
        """Entity factory: client.ApiEntitiesIntegrationBasic().list() / client.ApiEntitiesIntegrationBasic().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_integration_basic_entity import ApiEntitiesIntegrationBasicEntity
        return ApiEntitiesIntegrationBasicEntity(self, data)


    def ApiEntitiesInvitation(self, data=None) -> "ApiEntitiesInvitationEntity":
        """Entity factory: client.ApiEntitiesInvitation().list() / client.ApiEntitiesInvitation().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_invitation_entity import ApiEntitiesInvitationEntity
        return ApiEntitiesInvitationEntity(self, data)


    def ApiEntitiesIssuableTimeStat(self, data=None) -> "ApiEntitiesIssuableTimeStatEntity":
        """Entity factory: client.ApiEntitiesIssuableTimeStat().list() / client.ApiEntitiesIssuableTimeStat().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_issuable_time_stat_entity import ApiEntitiesIssuableTimeStatEntity
        return ApiEntitiesIssuableTimeStatEntity(self, data)


    def ApiEntitiesIssue(self, data=None) -> "ApiEntitiesIssueEntity":
        """Entity factory: client.ApiEntitiesIssue().list() / client.ApiEntitiesIssue().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_issue_entity import ApiEntitiesIssueEntity
        return ApiEntitiesIssueEntity(self, data)


    def ApiEntitiesIssueLink(self, data=None) -> "ApiEntitiesIssueLinkEntity":
        """Entity factory: client.ApiEntitiesIssueLink().list() / client.ApiEntitiesIssueLink().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_issue_link_entity import ApiEntitiesIssueLinkEntity
        return ApiEntitiesIssueLinkEntity(self, data)


    def ApiEntitiesLicense(self, data=None) -> "ApiEntitiesLicenseEntity":
        """Entity factory: client.ApiEntitiesLicense().list() / client.ApiEntitiesLicense().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_license_entity import ApiEntitiesLicenseEntity
        return ApiEntitiesLicenseEntity(self, data)


    def ApiEntitiesMarkdown(self, data=None) -> "ApiEntitiesMarkdownEntity":
        """Entity factory: client.ApiEntitiesMarkdown().list() / client.ApiEntitiesMarkdown().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_markdown_entity import ApiEntitiesMarkdownEntity
        return ApiEntitiesMarkdownEntity(self, data)


    def ApiEntitiesMarkdownUploadAdmin(self, data=None) -> "ApiEntitiesMarkdownUploadAdminEntity":
        """Entity factory: client.ApiEntitiesMarkdownUploadAdmin().list() / client.ApiEntitiesMarkdownUploadAdmin().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_markdown_upload_admin_entity import ApiEntitiesMarkdownUploadAdminEntity
        return ApiEntitiesMarkdownUploadAdminEntity(self, data)


    def ApiEntitiesMember(self, data=None) -> "ApiEntitiesMemberEntity":
        """Entity factory: client.ApiEntitiesMember().list() / client.ApiEntitiesMember().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_member_entity import ApiEntitiesMemberEntity
        return ApiEntitiesMemberEntity(self, data)


    def ApiEntitiesMerge(self, data=None) -> "ApiEntitiesMergeEntity":
        """Entity factory: client.ApiEntitiesMerge().list() / client.ApiEntitiesMerge().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_merge_entity import ApiEntitiesMergeEntity
        return ApiEntitiesMergeEntity(self, data)


    def ApiEntitiesMergeRequestApproval(self, data=None) -> "ApiEntitiesMergeRequestApprovalEntity":
        """Entity factory: client.ApiEntitiesMergeRequestApproval().list() / client.ApiEntitiesMergeRequestApproval().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_merge_request_approval_entity import ApiEntitiesMergeRequestApprovalEntity
        return ApiEntitiesMergeRequestApprovalEntity(self, data)


    def ApiEntitiesMergeRequestBasic(self, data=None) -> "ApiEntitiesMergeRequestBasicEntity":
        """Entity factory: client.ApiEntitiesMergeRequestBasic().list() / client.ApiEntitiesMergeRequestBasic().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_merge_request_basic_entity import ApiEntitiesMergeRequestBasicEntity
        return ApiEntitiesMergeRequestBasicEntity(self, data)


    def ApiEntitiesMergeRequestChange(self, data=None) -> "ApiEntitiesMergeRequestChangeEntity":
        """Entity factory: client.ApiEntitiesMergeRequestChange().list() / client.ApiEntitiesMergeRequestChange().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_merge_request_change_entity import ApiEntitiesMergeRequestChangeEntity
        return ApiEntitiesMergeRequestChangeEntity(self, data)


    def ApiEntitiesMergeRequestDiff(self, data=None) -> "ApiEntitiesMergeRequestDiffEntity":
        """Entity factory: client.ApiEntitiesMergeRequestDiff().list() / client.ApiEntitiesMergeRequestDiff().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_merge_request_diff_entity import ApiEntitiesMergeRequestDiffEntity
        return ApiEntitiesMergeRequestDiffEntity(self, data)


    def ApiEntitiesMergeRequestDiffFull(self, data=None) -> "ApiEntitiesMergeRequestDiffFullEntity":
        """Entity factory: client.ApiEntitiesMergeRequestDiffFull().list() / client.ApiEntitiesMergeRequestDiffFull().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_merge_request_diff_full_entity import ApiEntitiesMergeRequestDiffFullEntity
        return ApiEntitiesMergeRequestDiffFullEntity(self, data)


    def ApiEntitiesMergeRequestReviewer(self, data=None) -> "ApiEntitiesMergeRequestReviewerEntity":
        """Entity factory: client.ApiEntitiesMergeRequestReviewer().list() / client.ApiEntitiesMergeRequestReviewer().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_merge_request_reviewer_entity import ApiEntitiesMergeRequestReviewerEntity
        return ApiEntitiesMergeRequestReviewerEntity(self, data)


    def ApiEntitiesMetricImage(self, data=None) -> "ApiEntitiesMetricImageEntity":
        """Entity factory: client.ApiEntitiesMetricImage().list() / client.ApiEntitiesMetricImage().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_metric_image_entity import ApiEntitiesMetricImageEntity
        return ApiEntitiesMetricImageEntity(self, data)


    def ApiEntitiesMrNote(self, data=None) -> "ApiEntitiesMrNoteEntity":
        """Entity factory: client.ApiEntitiesMrNote().list() / client.ApiEntitiesMrNote().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_mr_note_entity import ApiEntitiesMrNoteEntity
        return ApiEntitiesMrNoteEntity(self, data)


    def ApiEntitiesNamespace(self, data=None) -> "ApiEntitiesNamespaceEntity":
        """Entity factory: client.ApiEntitiesNamespace().list() / client.ApiEntitiesNamespace().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_namespace_entity import ApiEntitiesNamespaceEntity
        return ApiEntitiesNamespaceEntity(self, data)


    def ApiEntitiesNamespaceExistence(self, data=None) -> "ApiEntitiesNamespaceExistenceEntity":
        """Entity factory: client.ApiEntitiesNamespaceExistence().list() / client.ApiEntitiesNamespaceExistence().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_namespace_existence_entity import ApiEntitiesNamespaceExistenceEntity
        return ApiEntitiesNamespaceExistenceEntity(self, data)


    def ApiEntitiesNamespacesStorageLimitExclusion(self, data=None) -> "ApiEntitiesNamespacesStorageLimitExclusionEntity":
        """Entity factory: client.ApiEntitiesNamespacesStorageLimitExclusion().list() / client.ApiEntitiesNamespacesStorageLimitExclusion().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_namespaces_storage_limit_exclusion_entity import ApiEntitiesNamespacesStorageLimitExclusionEntity
        return ApiEntitiesNamespacesStorageLimitExclusionEntity(self, data)


    def ApiEntitiesNpmPackage(self, data=None) -> "ApiEntitiesNpmPackageEntity":
        """Entity factory: client.ApiEntitiesNpmPackage().list() / client.ApiEntitiesNpmPackage().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_npm_package_entity import ApiEntitiesNpmPackageEntity
        return ApiEntitiesNpmPackageEntity(self, data)


    def ApiEntitiesNpmPackageTag(self, data=None) -> "ApiEntitiesNpmPackageTagEntity":
        """Entity factory: client.ApiEntitiesNpmPackageTag().list() / client.ApiEntitiesNpmPackageTag().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_npm_package_tag_entity import ApiEntitiesNpmPackageTagEntity
        return ApiEntitiesNpmPackageTagEntity(self, data)


    def ApiEntitiesNugetPackagesVersion(self, data=None) -> "ApiEntitiesNugetPackagesVersionEntity":
        """Entity factory: client.ApiEntitiesNugetPackagesVersion().list() / client.ApiEntitiesNugetPackagesVersion().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_nuget_packages_version_entity import ApiEntitiesNugetPackagesVersionEntity
        return ApiEntitiesNugetPackagesVersionEntity(self, data)


    def ApiEntitiesNugetSearchResult(self, data=None) -> "ApiEntitiesNugetSearchResultEntity":
        """Entity factory: client.ApiEntitiesNugetSearchResult().list() / client.ApiEntitiesNugetSearchResult().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_nuget_search_result_entity import ApiEntitiesNugetSearchResultEntity
        return ApiEntitiesNugetSearchResultEntity(self, data)


    def ApiEntitiesNugetServiceIndex(self, data=None) -> "ApiEntitiesNugetServiceIndexEntity":
        """Entity factory: client.ApiEntitiesNugetServiceIndex().list() / client.ApiEntitiesNugetServiceIndex().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_nuget_service_index_entity import ApiEntitiesNugetServiceIndexEntity
        return ApiEntitiesNugetServiceIndexEntity(self, data)


    def ApiEntitiesOrganizationsOrganization(self, data=None) -> "ApiEntitiesOrganizationsOrganizationEntity":
        """Entity factory: client.ApiEntitiesOrganizationsOrganization().list() / client.ApiEntitiesOrganizationsOrganization().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_organizations_organization_entity import ApiEntitiesOrganizationsOrganizationEntity
        return ApiEntitiesOrganizationsOrganizationEntity(self, data)


    def ApiEntitiesPackage(self, data=None) -> "ApiEntitiesPackageEntity":
        """Entity factory: client.ApiEntitiesPackage().list() / client.ApiEntitiesPackage().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_package_entity import ApiEntitiesPackageEntity
        return ApiEntitiesPackageEntity(self, data)


    def ApiEntitiesPackageFile(self, data=None) -> "ApiEntitiesPackageFileEntity":
        """Entity factory: client.ApiEntitiesPackageFile().list() / client.ApiEntitiesPackageFile().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_package_file_entity import ApiEntitiesPackageFileEntity
        return ApiEntitiesPackageFileEntity(self, data)


    def ApiEntitiesPackagePipeline(self, data=None) -> "ApiEntitiesPackagePipelineEntity":
        """Entity factory: client.ApiEntitiesPackagePipeline().list() / client.ApiEntitiesPackagePipeline().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_package_pipeline_entity import ApiEntitiesPackagePipelineEntity
        return ApiEntitiesPackagePipelineEntity(self, data)


    def ApiEntitiesPackagesConanFilesList(self, data=None) -> "ApiEntitiesPackagesConanFilesListEntity":
        """Entity factory: client.ApiEntitiesPackagesConanFilesList().list() / client.ApiEntitiesPackagesConanFilesList().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_packages_conan_files_list_entity import ApiEntitiesPackagesConanFilesListEntity
        return ApiEntitiesPackagesConanFilesListEntity(self, data)


    def ApiEntitiesPackagesConanPackageManifest(self, data=None) -> "ApiEntitiesPackagesConanPackageManifestEntity":
        """Entity factory: client.ApiEntitiesPackagesConanPackageManifest().list() / client.ApiEntitiesPackagesConanPackageManifest().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_packages_conan_package_manifest_entity import ApiEntitiesPackagesConanPackageManifestEntity
        return ApiEntitiesPackagesConanPackageManifestEntity(self, data)


    def ApiEntitiesPackagesConanPackageRevision(self, data=None) -> "ApiEntitiesPackagesConanPackageRevisionEntity":
        """Entity factory: client.ApiEntitiesPackagesConanPackageRevision().list() / client.ApiEntitiesPackagesConanPackageRevision().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_packages_conan_package_revision_entity import ApiEntitiesPackagesConanPackageRevisionEntity
        return ApiEntitiesPackagesConanPackageRevisionEntity(self, data)


    def ApiEntitiesPackagesConanPackageSnapshot(self, data=None) -> "ApiEntitiesPackagesConanPackageSnapshotEntity":
        """Entity factory: client.ApiEntitiesPackagesConanPackageSnapshot().list() / client.ApiEntitiesPackagesConanPackageSnapshot().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_packages_conan_package_snapshot_entity import ApiEntitiesPackagesConanPackageSnapshotEntity
        return ApiEntitiesPackagesConanPackageSnapshotEntity(self, data)


    def ApiEntitiesPackagesConanRecipeManifest(self, data=None) -> "ApiEntitiesPackagesConanRecipeManifestEntity":
        """Entity factory: client.ApiEntitiesPackagesConanRecipeManifest().list() / client.ApiEntitiesPackagesConanRecipeManifest().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_packages_conan_recipe_manifest_entity import ApiEntitiesPackagesConanRecipeManifestEntity
        return ApiEntitiesPackagesConanRecipeManifestEntity(self, data)


    def ApiEntitiesPackagesConanRecipeRevision(self, data=None) -> "ApiEntitiesPackagesConanRecipeRevisionEntity":
        """Entity factory: client.ApiEntitiesPackagesConanRecipeRevision().list() / client.ApiEntitiesPackagesConanRecipeRevision().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_packages_conan_recipe_revision_entity import ApiEntitiesPackagesConanRecipeRevisionEntity
        return ApiEntitiesPackagesConanRecipeRevisionEntity(self, data)


    def ApiEntitiesPackagesConanRecipeSnapshot(self, data=None) -> "ApiEntitiesPackagesConanRecipeSnapshotEntity":
        """Entity factory: client.ApiEntitiesPackagesConanRecipeSnapshot().list() / client.ApiEntitiesPackagesConanRecipeSnapshot().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_packages_conan_recipe_snapshot_entity import ApiEntitiesPackagesConanRecipeSnapshotEntity
        return ApiEntitiesPackagesConanRecipeSnapshotEntity(self, data)


    def ApiEntitiesPackagesConanRevision(self, data=None) -> "ApiEntitiesPackagesConanRevisionEntity":
        """Entity factory: client.ApiEntitiesPackagesConanRevision().list() / client.ApiEntitiesPackagesConanRevision().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_packages_conan_revision_entity import ApiEntitiesPackagesConanRevisionEntity
        return ApiEntitiesPackagesConanRevisionEntity(self, data)


    def ApiEntitiesPackagesConanUploadUrl(self, data=None) -> "ApiEntitiesPackagesConanUploadUrlEntity":
        """Entity factory: client.ApiEntitiesPackagesConanUploadUrl().list() / client.ApiEntitiesPackagesConanUploadUrl().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_packages_conan_upload_url_entity import ApiEntitiesPackagesConanUploadUrlEntity
        return ApiEntitiesPackagesConanUploadUrlEntity(self, data)


    def ApiEntitiesPackagesDebianDistribution(self, data=None) -> "ApiEntitiesPackagesDebianDistributionEntity":
        """Entity factory: client.ApiEntitiesPackagesDebianDistribution().list() / client.ApiEntitiesPackagesDebianDistribution().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_packages_debian_distribution_entity import ApiEntitiesPackagesDebianDistributionEntity
        return ApiEntitiesPackagesDebianDistributionEntity(self, data)


    def ApiEntitiesPagesDomain(self, data=None) -> "ApiEntitiesPagesDomainEntity":
        """Entity factory: client.ApiEntitiesPagesDomain().list() / client.ApiEntitiesPagesDomain().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_pages_domain_entity import ApiEntitiesPagesDomainEntity
        return ApiEntitiesPagesDomainEntity(self, data)


    def ApiEntitiesPagesDomainBasic(self, data=None) -> "ApiEntitiesPagesDomainBasicEntity":
        """Entity factory: client.ApiEntitiesPagesDomainBasic().list() / client.ApiEntitiesPagesDomainBasic().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_pages_domain_basic_entity import ApiEntitiesPagesDomainBasicEntity
        return ApiEntitiesPagesDomainBasicEntity(self, data)


    def ApiEntitiesPersonalAccessToken(self, data=None) -> "ApiEntitiesPersonalAccessTokenEntity":
        """Entity factory: client.ApiEntitiesPersonalAccessToken().list() / client.ApiEntitiesPersonalAccessToken().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_personal_access_token_entity import ApiEntitiesPersonalAccessTokenEntity
        return ApiEntitiesPersonalAccessTokenEntity(self, data)


    def ApiEntitiesPersonalAccessTokenWithLastUsedIp(self, data=None) -> "ApiEntitiesPersonalAccessTokenWithLastUsedIpEntity":
        """Entity factory: client.ApiEntitiesPersonalAccessTokenWithLastUsedIp().list() / client.ApiEntitiesPersonalAccessTokenWithLastUsedIp().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_personal_access_token_with_last_used_ip_entity import ApiEntitiesPersonalAccessTokenWithLastUsedIpEntity
        return ApiEntitiesPersonalAccessTokenWithLastUsedIpEntity(self, data)


    def ApiEntitiesPersonalAccessTokenWithToken(self, data=None) -> "ApiEntitiesPersonalAccessTokenWithTokenEntity":
        """Entity factory: client.ApiEntitiesPersonalAccessTokenWithToken().list() / client.ApiEntitiesPersonalAccessTokenWithToken().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_personal_access_token_with_token_entity import ApiEntitiesPersonalAccessTokenWithTokenEntity
        return ApiEntitiesPersonalAccessTokenWithTokenEntity(self, data)


    def ApiEntitiesPersonalSnippet(self, data=None) -> "ApiEntitiesPersonalSnippetEntity":
        """Entity factory: client.ApiEntitiesPersonalSnippet().list() / client.ApiEntitiesPersonalSnippet().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_personal_snippet_entity import ApiEntitiesPersonalSnippetEntity
        return ApiEntitiesPersonalSnippetEntity(self, data)


    def ApiEntitiesPlanLimit(self, data=None) -> "ApiEntitiesPlanLimitEntity":
        """Entity factory: client.ApiEntitiesPlanLimit().list() / client.ApiEntitiesPlanLimit().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_plan_limit_entity import ApiEntitiesPlanLimitEntity
        return ApiEntitiesPlanLimitEntity(self, data)


    def ApiEntitiesProject(self, data=None) -> "ApiEntitiesProjectEntity":
        """Entity factory: client.ApiEntitiesProject().list() / client.ApiEntitiesProject().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_project_entity import ApiEntitiesProjectEntity
        return ApiEntitiesProjectEntity(self, data)


    def ApiEntitiesProjectDailyStatistic(self, data=None) -> "ApiEntitiesProjectDailyStatisticEntity":
        """Entity factory: client.ApiEntitiesProjectDailyStatistic().list() / client.ApiEntitiesProjectDailyStatistic().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_project_daily_statistic_entity import ApiEntitiesProjectDailyStatisticEntity
        return ApiEntitiesProjectDailyStatisticEntity(self, data)


    def ApiEntitiesProjectExportStatus(self, data=None) -> "ApiEntitiesProjectExportStatusEntity":
        """Entity factory: client.ApiEntitiesProjectExportStatus().list() / client.ApiEntitiesProjectExportStatus().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_project_export_status_entity import ApiEntitiesProjectExportStatusEntity
        return ApiEntitiesProjectExportStatusEntity(self, data)


    def ApiEntitiesProjectGroupLink(self, data=None) -> "ApiEntitiesProjectGroupLinkEntity":
        """Entity factory: client.ApiEntitiesProjectGroupLink().list() / client.ApiEntitiesProjectGroupLink().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_project_group_link_entity import ApiEntitiesProjectGroupLinkEntity
        return ApiEntitiesProjectGroupLinkEntity(self, data)


    def ApiEntitiesProjectHook(self, data=None) -> "ApiEntitiesProjectHookEntity":
        """Entity factory: client.ApiEntitiesProjectHook().list() / client.ApiEntitiesProjectHook().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_project_hook_entity import ApiEntitiesProjectHookEntity
        return ApiEntitiesProjectHookEntity(self, data)


    def ApiEntitiesProjectImportStatus(self, data=None) -> "ApiEntitiesProjectImportStatusEntity":
        """Entity factory: client.ApiEntitiesProjectImportStatus().list() / client.ApiEntitiesProjectImportStatus().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_project_import_status_entity import ApiEntitiesProjectImportStatusEntity
        return ApiEntitiesProjectImportStatusEntity(self, data)


    def ApiEntitiesProjectJobTokenScope(self, data=None) -> "ApiEntitiesProjectJobTokenScopeEntity":
        """Entity factory: client.ApiEntitiesProjectJobTokenScope().list() / client.ApiEntitiesProjectJobTokenScope().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_project_job_token_scope_entity import ApiEntitiesProjectJobTokenScopeEntity
        return ApiEntitiesProjectJobTokenScopeEntity(self, data)


    def ApiEntitiesProjectRepositoryStorage(self, data=None) -> "ApiEntitiesProjectRepositoryStorageEntity":
        """Entity factory: client.ApiEntitiesProjectRepositoryStorage().list() / client.ApiEntitiesProjectRepositoryStorage().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_project_repository_storage_entity import ApiEntitiesProjectRepositoryStorageEntity
        return ApiEntitiesProjectRepositoryStorageEntity(self, data)


    def ApiEntitiesProjectSnippet(self, data=None) -> "ApiEntitiesProjectSnippetEntity":
        """Entity factory: client.ApiEntitiesProjectSnippet().list() / client.ApiEntitiesProjectSnippet().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_project_snippet_entity import ApiEntitiesProjectSnippetEntity
        return ApiEntitiesProjectSnippetEntity(self, data)


    def ApiEntitiesProjectUpload(self, data=None) -> "ApiEntitiesProjectUploadEntity":
        """Entity factory: client.ApiEntitiesProjectUpload().list() / client.ApiEntitiesProjectUpload().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_project_upload_entity import ApiEntitiesProjectUploadEntity
        return ApiEntitiesProjectUploadEntity(self, data)


    def ApiEntitiesProjectWithAccess(self, data=None) -> "ApiEntitiesProjectWithAccessEntity":
        """Entity factory: client.ApiEntitiesProjectWithAccess().list() / client.ApiEntitiesProjectWithAccess().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_project_with_access_entity import ApiEntitiesProjectWithAccessEntity
        return ApiEntitiesProjectWithAccessEntity(self, data)


    def ApiEntitiesProjectsContainerRegistryProtectionRule(self, data=None) -> "ApiEntitiesProjectsContainerRegistryProtectionRuleEntity":
        """Entity factory: client.ApiEntitiesProjectsContainerRegistryProtectionRule().list() / client.ApiEntitiesProjectsContainerRegistryProtectionRule().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_projects_container_registry_protection_rule_entity import ApiEntitiesProjectsContainerRegistryProtectionRuleEntity
        return ApiEntitiesProjectsContainerRegistryProtectionRuleEntity(self, data)


    def ApiEntitiesProjectsPackagesProtectionRule(self, data=None) -> "ApiEntitiesProjectsPackagesProtectionRuleEntity":
        """Entity factory: client.ApiEntitiesProjectsPackagesProtectionRule().list() / client.ApiEntitiesProjectsPackagesProtectionRule().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_projects_packages_protection_rule_entity import ApiEntitiesProjectsPackagesProtectionRuleEntity
        return ApiEntitiesProjectsPackagesProtectionRuleEntity(self, data)


    def ApiEntitiesProjectsTopic(self, data=None) -> "ApiEntitiesProjectsTopicEntity":
        """Entity factory: client.ApiEntitiesProjectsTopic().list() / client.ApiEntitiesProjectsTopic().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_projects_topic_entity import ApiEntitiesProjectsTopicEntity
        return ApiEntitiesProjectsTopicEntity(self, data)


    def ApiEntitiesProtectedBranch(self, data=None) -> "ApiEntitiesProtectedBranchEntity":
        """Entity factory: client.ApiEntitiesProtectedBranch().list() / client.ApiEntitiesProtectedBranch().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_protected_branch_entity import ApiEntitiesProtectedBranchEntity
        return ApiEntitiesProtectedBranchEntity(self, data)


    def ApiEntitiesProtectedTag(self, data=None) -> "ApiEntitiesProtectedTagEntity":
        """Entity factory: client.ApiEntitiesProtectedTag().list() / client.ApiEntitiesProtectedTag().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_protected_tag_entity import ApiEntitiesProtectedTagEntity
        return ApiEntitiesProtectedTagEntity(self, data)


    def ApiEntitiesPublicGroupDetail(self, data=None) -> "ApiEntitiesPublicGroupDetailEntity":
        """Entity factory: client.ApiEntitiesPublicGroupDetail().list() / client.ApiEntitiesPublicGroupDetail().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_public_group_detail_entity import ApiEntitiesPublicGroupDetailEntity
        return ApiEntitiesPublicGroupDetailEntity(self, data)


    def ApiEntitiesRelatedIssue(self, data=None) -> "ApiEntitiesRelatedIssueEntity":
        """Entity factory: client.ApiEntitiesRelatedIssue().list() / client.ApiEntitiesRelatedIssue().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_related_issue_entity import ApiEntitiesRelatedIssueEntity
        return ApiEntitiesRelatedIssueEntity(self, data)


    def ApiEntitiesRelationImportTracker(self, data=None) -> "ApiEntitiesRelationImportTrackerEntity":
        """Entity factory: client.ApiEntitiesRelationImportTracker().list() / client.ApiEntitiesRelationImportTracker().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_relation_import_tracker_entity import ApiEntitiesRelationImportTrackerEntity
        return ApiEntitiesRelationImportTrackerEntity(self, data)


    def ApiEntitiesRelease(self, data=None) -> "ApiEntitiesReleaseEntity":
        """Entity factory: client.ApiEntitiesRelease().list() / client.ApiEntitiesRelease().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_release_entity import ApiEntitiesReleaseEntity
        return ApiEntitiesReleaseEntity(self, data)


    def ApiEntitiesReleasesLink(self, data=None) -> "ApiEntitiesReleasesLinkEntity":
        """Entity factory: client.ApiEntitiesReleasesLink().list() / client.ApiEntitiesReleasesLink().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_releases_link_entity import ApiEntitiesReleasesLinkEntity
        return ApiEntitiesReleasesLinkEntity(self, data)


    def ApiEntitiesRemoteMirror(self, data=None) -> "ApiEntitiesRemoteMirrorEntity":
        """Entity factory: client.ApiEntitiesRemoteMirror().list() / client.ApiEntitiesRemoteMirror().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_remote_mirror_entity import ApiEntitiesRemoteMirrorEntity
        return ApiEntitiesRemoteMirrorEntity(self, data)


    def ApiEntitiesRepositoryHealth(self, data=None) -> "ApiEntitiesRepositoryHealthEntity":
        """Entity factory: client.ApiEntitiesRepositoryHealth().list() / client.ApiEntitiesRepositoryHealth().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_repository_health_entity import ApiEntitiesRepositoryHealthEntity
        return ApiEntitiesRepositoryHealthEntity(self, data)


    def ApiEntitiesResourceAccessTokenWithToken(self, data=None) -> "ApiEntitiesResourceAccessTokenWithTokenEntity":
        """Entity factory: client.ApiEntitiesResourceAccessTokenWithToken().list() / client.ApiEntitiesResourceAccessTokenWithToken().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_resource_access_token_with_token_entity import ApiEntitiesResourceAccessTokenWithTokenEntity
        return ApiEntitiesResourceAccessTokenWithTokenEntity(self, data)


    def ApiEntitiesResourceMilestoneEvent(self, data=None) -> "ApiEntitiesResourceMilestoneEventEntity":
        """Entity factory: client.ApiEntitiesResourceMilestoneEvent().list() / client.ApiEntitiesResourceMilestoneEvent().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_resource_milestone_event_entity import ApiEntitiesResourceMilestoneEventEntity
        return ApiEntitiesResourceMilestoneEventEntity(self, data)


    def ApiEntitiesSnippet(self, data=None) -> "ApiEntitiesSnippetEntity":
        """Entity factory: client.ApiEntitiesSnippet().list() / client.ApiEntitiesSnippet().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_snippet_entity import ApiEntitiesSnippetEntity
        return ApiEntitiesSnippetEntity(self, data)


    def ApiEntitiesSshKeyWithUser(self, data=None) -> "ApiEntitiesSshKeyWithUserEntity":
        """Entity factory: client.ApiEntitiesSshKeyWithUser().list() / client.ApiEntitiesSshKeyWithUser().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_ssh_key_with_user_entity import ApiEntitiesSshKeyWithUserEntity
        return ApiEntitiesSshKeyWithUserEntity(self, data)


    def ApiEntitiesSuggestion(self, data=None) -> "ApiEntitiesSuggestionEntity":
        """Entity factory: client.ApiEntitiesSuggestion().list() / client.ApiEntitiesSuggestion().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_suggestion_entity import ApiEntitiesSuggestionEntity
        return ApiEntitiesSuggestionEntity(self, data)


    def ApiEntitiesSystemBroadcastMessage(self, data=None) -> "ApiEntitiesSystemBroadcastMessageEntity":
        """Entity factory: client.ApiEntitiesSystemBroadcastMessage().list() / client.ApiEntitiesSystemBroadcastMessage().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_system_broadcast_message_entity import ApiEntitiesSystemBroadcastMessageEntity
        return ApiEntitiesSystemBroadcastMessageEntity(self, data)


    def ApiEntitiesTag(self, data=None) -> "ApiEntitiesTagEntity":
        """Entity factory: client.ApiEntitiesTag().list() / client.ApiEntitiesTag().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_tag_entity import ApiEntitiesTagEntity
        return ApiEntitiesTagEntity(self, data)


    def ApiEntitiesTagSignature(self, data=None) -> "ApiEntitiesTagSignatureEntity":
        """Entity factory: client.ApiEntitiesTagSignature().list() / client.ApiEntitiesTagSignature().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_tag_signature_entity import ApiEntitiesTagSignatureEntity
        return ApiEntitiesTagSignatureEntity(self, data)


    def ApiEntitiesTemplatesList(self, data=None) -> "ApiEntitiesTemplatesListEntity":
        """Entity factory: client.ApiEntitiesTemplatesList().list() / client.ApiEntitiesTemplatesList().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_templates_list_entity import ApiEntitiesTemplatesListEntity
        return ApiEntitiesTemplatesListEntity(self, data)


    def ApiEntitiesTerraformModuleVersion(self, data=None) -> "ApiEntitiesTerraformModuleVersionEntity":
        """Entity factory: client.ApiEntitiesTerraformModuleVersion().list() / client.ApiEntitiesTerraformModuleVersion().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_terraform_module_version_entity import ApiEntitiesTerraformModuleVersionEntity
        return ApiEntitiesTerraformModuleVersionEntity(self, data)


    def ApiEntitiesTreeObject(self, data=None) -> "ApiEntitiesTreeObjectEntity":
        """Entity factory: client.ApiEntitiesTreeObject().list() / client.ApiEntitiesTreeObject().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_tree_object_entity import ApiEntitiesTreeObjectEntity
        return ApiEntitiesTreeObjectEntity(self, data)


    def ApiEntitiesTrigger(self, data=None) -> "ApiEntitiesTriggerEntity":
        """Entity factory: client.ApiEntitiesTrigger().list() / client.ApiEntitiesTrigger().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_trigger_entity import ApiEntitiesTriggerEntity
        return ApiEntitiesTriggerEntity(self, data)


    def ApiEntitiesUserAgentDetail(self, data=None) -> "ApiEntitiesUserAgentDetailEntity":
        """Entity factory: client.ApiEntitiesUserAgentDetail().list() / client.ApiEntitiesUserAgentDetail().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_user_agent_detail_entity import ApiEntitiesUserAgentDetailEntity
        return ApiEntitiesUserAgentDetailEntity(self, data)


    def ApiEntitiesUserCount(self, data=None) -> "ApiEntitiesUserCountEntity":
        """Entity factory: client.ApiEntitiesUserCount().list() / client.ApiEntitiesUserCount().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_user_count_entity import ApiEntitiesUserCountEntity
        return ApiEntitiesUserCountEntity(self, data)


    def ApiEntitiesUserPublic(self, data=None) -> "ApiEntitiesUserPublicEntity":
        """Entity factory: client.ApiEntitiesUserPublic().list() / client.ApiEntitiesUserPublic().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_user_public_entity import ApiEntitiesUserPublicEntity
        return ApiEntitiesUserPublicEntity(self, data)


    def ApiEntitiesUserWithAdmin(self, data=None) -> "ApiEntitiesUserWithAdminEntity":
        """Entity factory: client.ApiEntitiesUserWithAdmin().list() / client.ApiEntitiesUserWithAdmin().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_user_with_admin_entity import ApiEntitiesUserWithAdminEntity
        return ApiEntitiesUserWithAdminEntity(self, data)


    def ApiEntitiesWikiAttachment(self, data=None) -> "ApiEntitiesWikiAttachmentEntity":
        """Entity factory: client.ApiEntitiesWikiAttachment().list() / client.ApiEntitiesWikiAttachment().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_wiki_attachment_entity import ApiEntitiesWikiAttachmentEntity
        return ApiEntitiesWikiAttachmentEntity(self, data)


    def ApiEntitiesWikiPage(self, data=None) -> "ApiEntitiesWikiPageEntity":
        """Entity factory: client.ApiEntitiesWikiPage().list() / client.ApiEntitiesWikiPage().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_wiki_page_entity import ApiEntitiesWikiPageEntity
        return ApiEntitiesWikiPageEntity(self, data)


    def ApiEntitiesWikiPageBasic(self, data=None) -> "ApiEntitiesWikiPageBasicEntity":
        """Entity factory: client.ApiEntitiesWikiPageBasic().list() / client.ApiEntitiesWikiPageBasic().load({"id": ...})."""
        from gitlab_sdk.entity.api_entities_wiki_page_basic_entity import ApiEntitiesWikiPageBasicEntity
        return ApiEntitiesWikiPageBasicEntity(self, data)


    def Application(self, data=None) -> "ApplicationEntity":
        """Entity factory: client.Application().list() / client.Application().load({"id": ...})."""
        from gitlab_sdk.entity.application_entity import ApplicationEntity
        return ApplicationEntity(self, data)


    def AwardEmoji(self, data=None) -> "AwardEmojiEntity":
        """Entity factory: client.AwardEmoji().list() / client.AwardEmoji().load({"id": ...})."""
        from gitlab_sdk.entity.award_emoji_entity import AwardEmojiEntity
        return AwardEmojiEntity(self, data)


    def Badge(self, data=None) -> "BadgeEntity":
        """Entity factory: client.Badge().list() / client.Badge().load({"id": ...})."""
        from gitlab_sdk.entity.badge_entity import BadgeEntity
        return BadgeEntity(self, data)


    def Branch(self, data=None) -> "BranchEntity":
        """Entity factory: client.Branch().list() / client.Branch().load({"id": ...})."""
        from gitlab_sdk.entity.branch_entity import BranchEntity
        return BranchEntity(self, data)


    def CargoPackage(self, data=None) -> "CargoPackageEntity":
        """Entity factory: client.CargoPackage().list() / client.CargoPackage().load({"id": ...})."""
        from gitlab_sdk.entity.cargo_package_entity import CargoPackageEntity
        return CargoPackageEntity(self, data)


    def CiVariable(self, data=None) -> "CiVariableEntity":
        """Entity factory: client.CiVariable().list() / client.CiVariable().load({"id": ...})."""
        from gitlab_sdk.entity.ci_variable_entity import CiVariableEntity
        return CiVariableEntity(self, data)


    def Cluster(self, data=None) -> "ClusterEntity":
        """Entity factory: client.Cluster().list() / client.Cluster().load({"id": ...})."""
        from gitlab_sdk.entity.cluster_entity import ClusterEntity
        return ClusterEntity(self, data)


    def ClusterAgent(self, data=None) -> "ClusterAgentEntity":
        """Entity factory: client.ClusterAgent().list() / client.ClusterAgent().load({"id": ...})."""
        from gitlab_sdk.entity.cluster_agent_entity import ClusterAgentEntity
        return ClusterAgentEntity(self, data)


    def Composer(self, data=None) -> "ComposerEntity":
        """Entity factory: client.Composer().list() / client.Composer().load({"id": ...})."""
        from gitlab_sdk.entity.composer_entity import ComposerEntity
        return ComposerEntity(self, data)


    def ComposerPackage(self, data=None) -> "ComposerPackageEntity":
        """Entity factory: client.ComposerPackage().list() / client.ComposerPackage().load({"id": ...})."""
        from gitlab_sdk.entity.composer_package_entity import ComposerPackageEntity
        return ComposerPackageEntity(self, data)


    def Conan(self, data=None) -> "ConanEntity":
        """Entity factory: client.Conan().list() / client.Conan().load({"id": ...})."""
        from gitlab_sdk.entity.conan_entity import ConanEntity
        return ConanEntity(self, data)


    def ConanPackage(self, data=None) -> "ConanPackageEntity":
        """Entity factory: client.ConanPackage().list() / client.ConanPackage().load({"id": ...})."""
        from gitlab_sdk.entity.conan_package_entity import ConanPackageEntity
        return ConanPackageEntity(self, data)


    def ContainerRegistry(self, data=None) -> "ContainerRegistryEntity":
        """Entity factory: client.ContainerRegistry().list() / client.ContainerRegistry().load({"id": ...})."""
        from gitlab_sdk.entity.container_registry_entity import ContainerRegistryEntity
        return ContainerRegistryEntity(self, data)


    def ContainerRegistryEvent(self, data=None) -> "ContainerRegistryEventEntity":
        """Entity factory: client.ContainerRegistryEvent().list() / client.ContainerRegistryEvent().load({"id": ...})."""
        from gitlab_sdk.entity.container_registry_event_entity import ContainerRegistryEventEntity
        return ContainerRegistryEventEntity(self, data)


    def CustomAttribute(self, data=None) -> "CustomAttributeEntity":
        """Entity factory: client.CustomAttribute().list() / client.CustomAttribute().load({"id": ...})."""
        from gitlab_sdk.entity.custom_attribute_entity import CustomAttributeEntity
        return CustomAttributeEntity(self, data)


    def Debian(self, data=None) -> "DebianEntity":
        """Entity factory: client.Debian().list() / client.Debian().load({"id": ...})."""
        from gitlab_sdk.entity.debian_entity import DebianEntity
        return DebianEntity(self, data)


    def DebianDistribution(self, data=None) -> "DebianDistributionEntity":
        """Entity factory: client.DebianDistribution().list() / client.DebianDistribution().load({"id": ...})."""
        from gitlab_sdk.entity.debian_distribution_entity import DebianDistributionEntity
        return DebianDistributionEntity(self, data)


    def DebianPackage(self, data=None) -> "DebianPackageEntity":
        """Entity factory: client.DebianPackage().list() / client.DebianPackage().load({"id": ...})."""
        from gitlab_sdk.entity.debian_package_entity import DebianPackageEntity
        return DebianPackageEntity(self, data)


    def DependencyProxy(self, data=None) -> "DependencyProxyEntity":
        """Entity factory: client.DependencyProxy().list() / client.DependencyProxy().load({"id": ...})."""
        from gitlab_sdk.entity.dependency_proxy_entity import DependencyProxyEntity
        return DependencyProxyEntity(self, data)


    def DeployKey(self, data=None) -> "DeployKeyEntity":
        """Entity factory: client.DeployKey().list() / client.DeployKey().load({"id": ...})."""
        from gitlab_sdk.entity.deploy_key_entity import DeployKeyEntity
        return DeployKeyEntity(self, data)


    def DeployToken(self, data=None) -> "DeployTokenEntity":
        """Entity factory: client.DeployToken().list() / client.DeployToken().load({"id": ...})."""
        from gitlab_sdk.entity.deploy_token_entity import DeployTokenEntity
        return DeployTokenEntity(self, data)


    def Deployment(self, data=None) -> "DeploymentEntity":
        """Entity factory: client.Deployment().list() / client.Deployment().load({"id": ...})."""
        from gitlab_sdk.entity.deployment_entity import DeploymentEntity
        return DeploymentEntity(self, data)


    def EeApiEntitiesApprovalState(self, data=None) -> "EeApiEntitiesApprovalStateEntity":
        """Entity factory: client.EeApiEntitiesApprovalState().list() / client.EeApiEntitiesApprovalState().load({"id": ...})."""
        from gitlab_sdk.entity.ee_api_entities_approval_state_entity import EeApiEntitiesApprovalStateEntity
        return EeApiEntitiesApprovalStateEntity(self, data)


    def EeApiEntitiesAuditEvent(self, data=None) -> "EeApiEntitiesAuditEventEntity":
        """Entity factory: client.EeApiEntitiesAuditEvent().list() / client.EeApiEntitiesAuditEvent().load({"id": ...})."""
        from gitlab_sdk.entity.ee_api_entities_audit_event_entity import EeApiEntitiesAuditEventEntity
        return EeApiEntitiesAuditEventEntity(self, data)


    def EeApiEntitiesBillableMembership(self, data=None) -> "EeApiEntitiesBillableMembershipEntity":
        """Entity factory: client.EeApiEntitiesBillableMembership().list() / client.EeApiEntitiesBillableMembership().load({"id": ...})."""
        from gitlab_sdk.entity.ee_api_entities_billable_membership_entity import EeApiEntitiesBillableMembershipEntity
        return EeApiEntitiesBillableMembershipEntity(self, data)


    def EeApiEntitiesGeoNodeStatus(self, data=None) -> "EeApiEntitiesGeoNodeStatusEntity":
        """Entity factory: client.EeApiEntitiesGeoNodeStatus().list() / client.EeApiEntitiesGeoNodeStatus().load({"id": ...})."""
        from gitlab_sdk.entity.ee_api_entities_geo_node_status_entity import EeApiEntitiesGeoNodeStatusEntity
        return EeApiEntitiesGeoNodeStatusEntity(self, data)


    def EeApiEntitiesGeoPipelineRef(self, data=None) -> "EeApiEntitiesGeoPipelineRefEntity":
        """Entity factory: client.EeApiEntitiesGeoPipelineRef().list() / client.EeApiEntitiesGeoPipelineRef().load({"id": ...})."""
        from gitlab_sdk.entity.ee_api_entities_geo_pipeline_ref_entity import EeApiEntitiesGeoPipelineRefEntity
        return EeApiEntitiesGeoPipelineRefEntity(self, data)


    def EeApiEntitiesIssuableMetricImage(self, data=None) -> "EeApiEntitiesIssuableMetricImageEntity":
        """Entity factory: client.EeApiEntitiesIssuableMetricImage().list() / client.EeApiEntitiesIssuableMetricImage().load({"id": ...})."""
        from gitlab_sdk.entity.ee_api_entities_issuable_metric_image_entity import EeApiEntitiesIssuableMetricImageEntity
        return EeApiEntitiesIssuableMetricImageEntity(self, data)


    def EeApiEntitiesMergeRequestApprovalState(self, data=None) -> "EeApiEntitiesMergeRequestApprovalStateEntity":
        """Entity factory: client.EeApiEntitiesMergeRequestApprovalState().list() / client.EeApiEntitiesMergeRequestApprovalState().load({"id": ...})."""
        from gitlab_sdk.entity.ee_api_entities_merge_request_approval_state_entity import EeApiEntitiesMergeRequestApprovalStateEntity
        return EeApiEntitiesMergeRequestApprovalStateEntity(self, data)


    def EeApiEntitiesSshCertificate(self, data=None) -> "EeApiEntitiesSshCertificateEntity":
        """Entity factory: client.EeApiEntitiesSshCertificate().list() / client.EeApiEntitiesSshCertificate().load({"id": ...})."""
        from gitlab_sdk.entity.ee_api_entities_ssh_certificate_entity import EeApiEntitiesSshCertificateEntity
        return EeApiEntitiesSshCertificateEntity(self, data)


    def Environment(self, data=None) -> "EnvironmentEntity":
        """Entity factory: client.Environment().list() / client.Environment().load({"id": ...})."""
        from gitlab_sdk.entity.environment_entity import EnvironmentEntity
        return EnvironmentEntity(self, data)


    def ErrorTrackingClientKey(self, data=None) -> "ErrorTrackingClientKeyEntity":
        """Entity factory: client.ErrorTrackingClientKey().list() / client.ErrorTrackingClientKey().load({"id": ...})."""
        from gitlab_sdk.entity.error_tracking_client_key_entity import ErrorTrackingClientKeyEntity
        return ErrorTrackingClientKeyEntity(self, data)


    def Feature(self, data=None) -> "FeatureEntity":
        """Entity factory: client.Feature().list() / client.Feature().load({"id": ...})."""
        from gitlab_sdk.entity.feature_entity import FeatureEntity
        return FeatureEntity(self, data)


    def FeatureFlag(self, data=None) -> "FeatureFlagEntity":
        """Entity factory: client.FeatureFlag().list() / client.FeatureFlag().load({"id": ...})."""
        from gitlab_sdk.entity.feature_flag_entity import FeatureFlagEntity
        return FeatureFlagEntity(self, data)


    def FeatureFlagsUserList(self, data=None) -> "FeatureFlagsUserListEntity":
        """Entity factory: client.FeatureFlagsUserList().list() / client.FeatureFlagsUserList().load({"id": ...})."""
        from gitlab_sdk.entity.feature_flags_user_list_entity import FeatureFlagsUserListEntity
        return FeatureFlagsUserListEntity(self, data)


    def FreezePeriod(self, data=None) -> "FreezePeriodEntity":
        """Entity factory: client.FreezePeriod().list() / client.FreezePeriod().load({"id": ...})."""
        from gitlab_sdk.entity.freeze_period_entity import FreezePeriodEntity
        return FreezePeriodEntity(self, data)


    def GenericPackage(self, data=None) -> "GenericPackageEntity":
        """Entity factory: client.GenericPackage().list() / client.GenericPackage().load({"id": ...})."""
        from gitlab_sdk.entity.generic_package_entity import GenericPackageEntity
        return GenericPackageEntity(self, data)


    def Geo(self, data=None) -> "GeoEntity":
        """Entity factory: client.Geo().list() / client.Geo().load({"id": ...})."""
        from gitlab_sdk.entity.geo_entity import GeoEntity
        return GeoEntity(self, data)


    def GoProxy(self, data=None) -> "GoProxyEntity":
        """Entity factory: client.GoProxy().list() / client.GoProxy().load({"id": ...})."""
        from gitlab_sdk.entity.go_proxy_entity import GoProxyEntity
        return GoProxyEntity(self, data)


    def Group(self, data=None) -> "GroupEntity":
        """Entity factory: client.Group().list() / client.Group().load({"id": ...})."""
        from gitlab_sdk.entity.group_entity import GroupEntity
        return GroupEntity(self, data)


    def GroupAvatar(self, data=None) -> "GroupAvatarEntity":
        """Entity factory: client.GroupAvatar().list() / client.GroupAvatar().load({"id": ...})."""
        from gitlab_sdk.entity.group_avatar_entity import GroupAvatarEntity
        return GroupAvatarEntity(self, data)


    def GroupExport(self, data=None) -> "GroupExportEntity":
        """Entity factory: client.GroupExport().list() / client.GroupExport().load({"id": ...})."""
        from gitlab_sdk.entity.group_export_entity import GroupExportEntity
        return GroupExportEntity(self, data)


    def GroupImport(self, data=None) -> "GroupImportEntity":
        """Entity factory: client.GroupImport().list() / client.GroupImport().load({"id": ...})."""
        from gitlab_sdk.entity.group_import_entity import GroupImportEntity
        return GroupImportEntity(self, data)


    def HelmPackage(self, data=None) -> "HelmPackageEntity":
        """Entity factory: client.HelmPackage().list() / client.HelmPackage().load({"id": ...})."""
        from gitlab_sdk.entity.helm_package_entity import HelmPackageEntity
        return HelmPackageEntity(self, data)


    def Hook(self, data=None) -> "HookEntity":
        """Entity factory: client.Hook().list() / client.Hook().load({"id": ...})."""
        from gitlab_sdk.entity.hook_entity import HookEntity
        return HookEntity(self, data)


    def Import(self, data=None) -> "ImportEntity":
        """Entity factory: client.Import().list() / client.Import().load({"id": ...})."""
        from gitlab_sdk.entity.import_entity import ImportEntity
        return ImportEntity(self, data)


    def Integration(self, data=None) -> "IntegrationEntity":
        """Entity factory: client.Integration().list() / client.Integration().load({"id": ...})."""
        from gitlab_sdk.entity.integration_entity import IntegrationEntity
        return IntegrationEntity(self, data)


    def Invitation(self, data=None) -> "InvitationEntity":
        """Entity factory: client.Invitation().list() / client.Invitation().load({"id": ...})."""
        from gitlab_sdk.entity.invitation_entity import InvitationEntity
        return InvitationEntity(self, data)


    def IssueLink(self, data=None) -> "IssueLinkEntity":
        """Entity factory: client.IssueLink().list() / client.IssueLink().load({"id": ...})."""
        from gitlab_sdk.entity.issue_link_entity import IssueLinkEntity
        return IssueLinkEntity(self, data)


    def IssuesStatistic(self, data=None) -> "IssuesStatisticEntity":
        """Entity factory: client.IssuesStatistic().list() / client.IssuesStatistic().load({"id": ...})."""
        from gitlab_sdk.entity.issues_statistic_entity import IssuesStatisticEntity
        return IssuesStatisticEntity(self, data)


    def Job(self, data=None) -> "JobEntity":
        """Entity factory: client.Job().list() / client.Job().load({"id": ...})."""
        from gitlab_sdk.entity.job_entity import JobEntity
        return JobEntity(self, data)


    def MavenPackage(self, data=None) -> "MavenPackageEntity":
        """Entity factory: client.MavenPackage().list() / client.MavenPackage().load({"id": ...})."""
        from gitlab_sdk.entity.maven_package_entity import MavenPackageEntity
        return MavenPackageEntity(self, data)


    def Member(self, data=None) -> "MemberEntity":
        """Entity factory: client.Member().list() / client.Member().load({"id": ...})."""
        from gitlab_sdk.entity.member_entity import MemberEntity
        return MemberEntity(self, data)


    def MergeRequest(self, data=None) -> "MergeRequestEntity":
        """Entity factory: client.MergeRequest().list() / client.MergeRequest().load({"id": ...})."""
        from gitlab_sdk.entity.merge_request_entity import MergeRequestEntity
        return MergeRequestEntity(self, data)


    def Metadata(self, data=None) -> "MetadataEntity":
        """Entity factory: client.Metadata().list() / client.Metadata().load({"id": ...})."""
        from gitlab_sdk.entity.metadata_entity import MetadataEntity
        return MetadataEntity(self, data)


    def Migration(self, data=None) -> "MigrationEntity":
        """Entity factory: client.Migration().list() / client.Migration().load({"id": ...})."""
        from gitlab_sdk.entity.migration_entity import MigrationEntity
        return MigrationEntity(self, data)


    def MlModelRegistry(self, data=None) -> "MlModelRegistryEntity":
        """Entity factory: client.MlModelRegistry().list() / client.MlModelRegistry().load({"id": ...})."""
        from gitlab_sdk.entity.ml_model_registry_entity import MlModelRegistryEntity
        return MlModelRegistryEntity(self, data)


    def Namespace(self, data=None) -> "NamespaceEntity":
        """Entity factory: client.Namespace().list() / client.Namespace().load({"id": ...})."""
        from gitlab_sdk.entity.namespace_entity import NamespaceEntity
        return NamespaceEntity(self, data)


    def Npm(self, data=None) -> "NpmEntity":
        """Entity factory: client.Npm().list() / client.Npm().load({"id": ...})."""
        from gitlab_sdk.entity.npm_entity import NpmEntity
        return NpmEntity(self, data)


    def NpmPackage(self, data=None) -> "NpmPackageEntity":
        """Entity factory: client.NpmPackage().list() / client.NpmPackage().load({"id": ...})."""
        from gitlab_sdk.entity.npm_package_entity import NpmPackageEntity
        return NpmPackageEntity(self, data)


    def Nuget(self, data=None) -> "NugetEntity":
        """Entity factory: client.Nuget().list() / client.Nuget().load({"id": ...})."""
        from gitlab_sdk.entity.nuget_entity import NugetEntity
        return NugetEntity(self, data)


    def NugetPackage(self, data=None) -> "NugetPackageEntity":
        """Entity factory: client.NugetPackage().list() / client.NugetPackage().load({"id": ...})."""
        from gitlab_sdk.entity.nuget_package_entity import NugetPackageEntity
        return NugetPackageEntity(self, data)


    def PackageFile(self, data=None) -> "PackageFileEntity":
        """Entity factory: client.PackageFile().list() / client.PackageFile().load({"id": ...})."""
        from gitlab_sdk.entity.package_file_entity import PackageFileEntity
        return PackageFileEntity(self, data)


    def Page(self, data=None) -> "PageEntity":
        """Entity factory: client.Page().list() / client.Page().load({"id": ...})."""
        from gitlab_sdk.entity.page_entity import PageEntity
        return PageEntity(self, data)


    def Participant(self, data=None) -> "ParticipantEntity":
        """Entity factory: client.Participant().list() / client.Participant().load({"id": ...})."""
        from gitlab_sdk.entity.participant_entity import ParticipantEntity
        return ParticipantEntity(self, data)


    def PersonalAccessToken(self, data=None) -> "PersonalAccessTokenEntity":
        """Entity factory: client.PersonalAccessToken().list() / client.PersonalAccessToken().load({"id": ...})."""
        from gitlab_sdk.entity.personal_access_token_entity import PersonalAccessTokenEntity
        return PersonalAccessTokenEntity(self, data)


    def Project(self, data=None) -> "ProjectEntityClient":
        """Entity factory: client.Project().list() / client.Project().load({"id": ...})."""
        from gitlab_sdk.entity.project_entity import ProjectEntityClient
        return ProjectEntityClient(self, data)


    def ProjectAvatar(self, data=None) -> "ProjectAvatarEntity":
        """Entity factory: client.ProjectAvatar().list() / client.ProjectAvatar().load({"id": ...})."""
        from gitlab_sdk.entity.project_avatar_entity import ProjectAvatarEntity
        return ProjectAvatarEntity(self, data)


    def ProjectEntity(self, data=None) -> "ProjectEntityEntity":
        """Entity factory: client.ProjectEntity().list() / client.ProjectEntity().load({"id": ...})."""
        from gitlab_sdk.entity.project_entity_entity import ProjectEntityEntity
        return ProjectEntityEntity(self, data)


    def ProjectExport(self, data=None) -> "ProjectExportEntity":
        """Entity factory: client.ProjectExport().list() / client.ProjectExport().load({"id": ...})."""
        from gitlab_sdk.entity.project_export_entity import ProjectExportEntity
        return ProjectExportEntity(self, data)


    def ProjectHook(self, data=None) -> "ProjectHookEntity":
        """Entity factory: client.ProjectHook().list() / client.ProjectHook().load({"id": ...})."""
        from gitlab_sdk.entity.project_hook_entity import ProjectHookEntity
        return ProjectHookEntity(self, data)


    def ProjectImport(self, data=None) -> "ProjectImportEntityClient":
        """Entity factory: client.ProjectImport().list() / client.ProjectImport().load({"id": ...})."""
        from gitlab_sdk.entity.project_import_entity import ProjectImportEntityClient
        return ProjectImportEntityClient(self, data)


    def ProjectImportEntity(self, data=None) -> "ProjectImportEntityEntity":
        """Entity factory: client.ProjectImportEntity().list() / client.ProjectImportEntity().load({"id": ...})."""
        from gitlab_sdk.entity.project_import_entity_entity import ProjectImportEntityEntity
        return ProjectImportEntityEntity(self, data)


    def ProjectPackage(self, data=None) -> "ProjectPackageEntity":
        """Entity factory: client.ProjectPackage().list() / client.ProjectPackage().load({"id": ...})."""
        from gitlab_sdk.entity.project_package_entity import ProjectPackageEntity
        return ProjectPackageEntity(self, data)


    def ProjectSnippet(self, data=None) -> "ProjectSnippetEntity":
        """Entity factory: client.ProjectSnippet().list() / client.ProjectSnippet().load({"id": ...})."""
        from gitlab_sdk.entity.project_snippet_entity import ProjectSnippetEntity
        return ProjectSnippetEntity(self, data)


    def ProjectsJobTokenScope(self, data=None) -> "ProjectsJobTokenScopeEntity":
        """Entity factory: client.ProjectsJobTokenScope().list() / client.ProjectsJobTokenScope().load({"id": ...})."""
        from gitlab_sdk.entity.projects_job_token_scope_entity import ProjectsJobTokenScopeEntity
        return ProjectsJobTokenScopeEntity(self, data)


    def ProtectedTag(self, data=None) -> "ProtectedTagEntity":
        """Entity factory: client.ProtectedTag().list() / client.ProtectedTag().load({"id": ...})."""
        from gitlab_sdk.entity.protected_tag_entity import ProtectedTagEntity
        return ProtectedTagEntity(self, data)


    def Pypi(self, data=None) -> "PypiEntity":
        """Entity factory: client.Pypi().list() / client.Pypi().load({"id": ...})."""
        from gitlab_sdk.entity.pypi_entity import PypiEntity
        return PypiEntity(self, data)


    def PypiPackage(self, data=None) -> "PypiPackageEntity":
        """Entity factory: client.PypiPackage().list() / client.PypiPackage().load({"id": ...})."""
        from gitlab_sdk.entity.pypi_package_entity import PypiPackageEntity
        return PypiPackageEntity(self, data)


    def Release(self, data=None) -> "ReleaseEntity":
        """Entity factory: client.Release().list() / client.Release().load({"id": ...})."""
        from gitlab_sdk.entity.release_entity import ReleaseEntity
        return ReleaseEntity(self, data)


    def ReleaseLink(self, data=None) -> "ReleaseLinkEntity":
        """Entity factory: client.ReleaseLink().list() / client.ReleaseLink().load({"id": ...})."""
        from gitlab_sdk.entity.release_link_entity import ReleaseLinkEntity
        return ReleaseLinkEntity(self, data)


    def RemoteMirror(self, data=None) -> "RemoteMirrorEntity":
        """Entity factory: client.RemoteMirror().list() / client.RemoteMirror().load({"id": ...})."""
        from gitlab_sdk.entity.remote_mirror_entity import RemoteMirrorEntity
        return RemoteMirrorEntity(self, data)


    def Rpm(self, data=None) -> "RpmEntity":
        """Entity factory: client.Rpm().list() / client.Rpm().load({"id": ...})."""
        from gitlab_sdk.entity.rpm_entity import RpmEntity
        return RpmEntity(self, data)


    def RpmPackage(self, data=None) -> "RpmPackageEntity":
        """Entity factory: client.RpmPackage().list() / client.RpmPackage().load({"id": ...})."""
        from gitlab_sdk.entity.rpm_package_entity import RpmPackageEntity
        return RpmPackageEntity(self, data)


    def Rubygem(self, data=None) -> "RubygemEntity":
        """Entity factory: client.Rubygem().list() / client.Rubygem().load({"id": ...})."""
        from gitlab_sdk.entity.rubygem_entity import RubygemEntity
        return RubygemEntity(self, data)


    def RubygemPackage(self, data=None) -> "RubygemPackageEntity":
        """Entity factory: client.RubygemPackage().list() / client.RubygemPackage().load({"id": ...})."""
        from gitlab_sdk.entity.rubygem_package_entity import RubygemPackageEntity
        return RubygemPackageEntity(self, data)


    def Runner(self, data=None) -> "RunnerEntity":
        """Entity factory: client.Runner().list() / client.Runner().load({"id": ...})."""
        from gitlab_sdk.entity.runner_entity import RunnerEntity
        return RunnerEntity(self, data)


    def Search(self, data=None) -> "SearchEntity":
        """Entity factory: client.Search().list() / client.Search().load({"id": ...})."""
        from gitlab_sdk.entity.search_entity import SearchEntity
        return SearchEntity(self, data)


    def SecureFile(self, data=None) -> "SecureFileEntity":
        """Entity factory: client.SecureFile().list() / client.SecureFile().load({"id": ...})."""
        from gitlab_sdk.entity.secure_file_entity import SecureFileEntity
        return SecureFileEntity(self, data)


    def Slack(self, data=None) -> "SlackEntity":
        """Entity factory: client.Slack().list() / client.Slack().load({"id": ...})."""
        from gitlab_sdk.entity.slack_entity import SlackEntity
        return SlackEntity(self, data)


    def Snippet(self, data=None) -> "SnippetEntity":
        """Entity factory: client.Snippet().list() / client.Snippet().load({"id": ...})."""
        from gitlab_sdk.entity.snippet_entity import SnippetEntity
        return SnippetEntity(self, data)


    def Starrer(self, data=None) -> "StarrerEntity":
        """Entity factory: client.Starrer().list() / client.Starrer().load({"id": ...})."""
        from gitlab_sdk.entity.starrer_entity import StarrerEntity
        return StarrerEntity(self, data)


    def SystemHook(self, data=None) -> "SystemHookEntity":
        """Entity factory: client.SystemHook().list() / client.SystemHook().load({"id": ...})."""
        from gitlab_sdk.entity.system_hook_entity import SystemHookEntity
        return SystemHookEntity(self, data)


    def Tag(self, data=None) -> "TagEntity":
        """Entity factory: client.Tag().list() / client.Tag().load({"id": ...})."""
        from gitlab_sdk.entity.tag_entity import TagEntity
        return TagEntity(self, data)


    def TerraformRegistry(self, data=None) -> "TerraformRegistryEntity":
        """Entity factory: client.TerraformRegistry().list() / client.TerraformRegistry().load({"id": ...})."""
        from gitlab_sdk.entity.terraform_registry_entity import TerraformRegistryEntity
        return TerraformRegistryEntity(self, data)


    def TerraformState(self, data=None) -> "TerraformStateEntity":
        """Entity factory: client.TerraformState().list() / client.TerraformState().load({"id": ...})."""
        from gitlab_sdk.entity.terraform_state_entity import TerraformStateEntity
        return TerraformStateEntity(self, data)


    def TestReport(self, data=None) -> "TestReportEntity":
        """Entity factory: client.TestReport().list() / client.TestReport().load({"id": ...})."""
        from gitlab_sdk.entity.test_report_entity import TestReportEntity
        return TestReportEntity(self, data)


    def TestReportSummary(self, data=None) -> "TestReportSummaryEntity":
        """Entity factory: client.TestReportSummary().list() / client.TestReportSummary().load({"id": ...})."""
        from gitlab_sdk.entity.test_report_summary_entity import TestReportSummaryEntity
        return TestReportSummaryEntity(self, data)


    def Topic(self, data=None) -> "TopicEntity":
        """Entity factory: client.Topic().list() / client.Topic().load({"id": ...})."""
        from gitlab_sdk.entity.topic_entity import TopicEntity
        return TopicEntity(self, data)


    def UnleashApi(self, data=None) -> "UnleashApiEntity":
        """Entity factory: client.UnleashApi().list() / client.UnleashApi().load({"id": ...})."""
        from gitlab_sdk.entity.unleash_api_entity import UnleashApiEntity
        return UnleashApiEntity(self, data)


    def UsageData(self, data=None) -> "UsageDataEntity":
        """Entity factory: client.UsageData().list() / client.UsageData().load({"id": ...})."""
        from gitlab_sdk.entity.usage_data_entity import UsageDataEntity
        return UsageDataEntity(self, data)


    def User(self, data=None) -> "UserEntity":
        """Entity factory: client.User().list() / client.User().load({"id": ...})."""
        from gitlab_sdk.entity.user_entity import UserEntity
        return UserEntity(self, data)


    def WebCommit(self, data=None) -> "WebCommitEntity":
        """Entity factory: client.WebCommit().list() / client.WebCommit().load({"id": ...})."""
        from gitlab_sdk.entity.web_commit_entity import WebCommitEntity
        return WebCommitEntity(self, data)


    def Wiki(self, data=None) -> "WikiEntity":
        """Entity factory: client.Wiki().list() / client.Wiki().load({"id": ...})."""
        from gitlab_sdk.entity.wiki_entity import WikiEntity
        return WikiEntity(self, data)



    @classmethod
    def test(cls, testopts=None, sdkopts=None) -> "GitlabSDK":
        if sdkopts is None:
            sdkopts = {}
        sdkopts = vs.clone(sdkopts)
        if not isinstance(sdkopts, dict):
            sdkopts = {}

        if testopts is None:
            testopts = {}
        testopts = vs.clone(testopts)
        if not isinstance(testopts, dict):
            testopts = {}
        testopts["active"] = True

        vs.setpath(sdkopts, "feature.test", testopts)

        sdk = cls(sdkopts)
        sdk.mode = "test"

        return sdk


from typing import TYPE_CHECKING

if TYPE_CHECKING:
    from gitlab_sdk.entity.access_request_entity import AccessRequestEntity
    from gitlab_sdk.entity.alert_management_entity import AlertManagementEntity
    from gitlab_sdk.entity.api_entities_access_requester_entity import ApiEntitiesAccessRequesterEntity
    from gitlab_sdk.entity.api_entities_appearance_entity import ApiEntitiesAppearanceEntity
    from gitlab_sdk.entity.api_entities_application_entity import ApiEntitiesApplicationEntity
    from gitlab_sdk.entity.api_entities_application_statistic_entity import ApiEntitiesApplicationStatisticEntity
    from gitlab_sdk.entity.api_entities_application_with_secret_entity import ApiEntitiesApplicationWithSecretEntity
    from gitlab_sdk.entity.api_entities_avatar_entity import ApiEntitiesAvatarEntity
    from gitlab_sdk.entity.api_entities_award_emoji_entity import ApiEntitiesAwardEmojiEntity
    from gitlab_sdk.entity.api_entities_badge_entity import ApiEntitiesBadgeEntity
    from gitlab_sdk.entity.api_entities_basic_badge_detail_entity import ApiEntitiesBasicBadgeDetailEntity
    from gitlab_sdk.entity.api_entities_basic_group_detail_entity import ApiEntitiesBasicGroupDetailEntity
    from gitlab_sdk.entity.api_entities_basic_project_detail_entity import ApiEntitiesBasicProjectDetailEntity
    from gitlab_sdk.entity.api_entities_basic_ref_entity import ApiEntitiesBasicRefEntity
    from gitlab_sdk.entity.api_entities_basic_success_entity import ApiEntitiesBasicSuccessEntity
    from gitlab_sdk.entity.api_entities_batched_background_migration_entity import ApiEntitiesBatchedBackgroundMigrationEntity
    from gitlab_sdk.entity.api_entities_branch_entity import ApiEntitiesBranchEntity
    from gitlab_sdk.entity.api_entities_bulk_import_entity import ApiEntitiesBulkImportEntity
    from gitlab_sdk.entity.api_entities_bulk_imports_entity_failure_entity import ApiEntitiesBulkImportsEntityFailureEntity
    from gitlab_sdk.entity.api_entities_bulk_imports_export_status_entity import ApiEntitiesBulkImportsExportStatusEntity
    from gitlab_sdk.entity.api_entities_changelog_entity import ApiEntitiesChangelogEntity
    from gitlab_sdk.entity.api_entities_ci_bridge_entity import ApiEntitiesCiBridgeEntity
    from gitlab_sdk.entity.api_entities_ci_catalog_resources_version_entity import ApiEntitiesCiCatalogResourcesVersionEntity
    from gitlab_sdk.entity.api_entities_ci_job_entity import ApiEntitiesCiJobEntity
    from gitlab_sdk.entity.api_entities_ci_job_basic_entity import ApiEntitiesCiJobBasicEntity
    from gitlab_sdk.entity.api_entities_ci_job_basic_with_project_entity import ApiEntitiesCiJobBasicWithProjectEntity
    from gitlab_sdk.entity.api_entities_ci_lint_result_entity import ApiEntitiesCiLintResultEntity
    from gitlab_sdk.entity.api_entities_ci_pipeline_entity import ApiEntitiesCiPipelineEntity
    from gitlab_sdk.entity.api_entities_ci_pipeline_basic_entity import ApiEntitiesCiPipelineBasicEntity
    from gitlab_sdk.entity.api_entities_ci_pipeline_schedule_entity import ApiEntitiesCiPipelineScheduleEntity
    from gitlab_sdk.entity.api_entities_ci_pipeline_schedule_detail_entity import ApiEntitiesCiPipelineScheduleDetailEntity
    from gitlab_sdk.entity.api_entities_ci_reset_token_result_entity import ApiEntitiesCiResetTokenResultEntity
    from gitlab_sdk.entity.api_entities_ci_resource_group_entity import ApiEntitiesCiResourceGroupEntity
    from gitlab_sdk.entity.api_entities_ci_runner_entity import ApiEntitiesCiRunnerEntity
    from gitlab_sdk.entity.api_entities_ci_runner_detail_entity import ApiEntitiesCiRunnerDetailEntity
    from gitlab_sdk.entity.api_entities_ci_runner_manager_entity import ApiEntitiesCiRunnerManagerEntity
    from gitlab_sdk.entity.api_entities_ci_runner_registration_detail_entity import ApiEntitiesCiRunnerRegistrationDetailEntity
    from gitlab_sdk.entity.api_entities_ci_secure_file_entity import ApiEntitiesCiSecureFileEntity
    from gitlab_sdk.entity.api_entities_ci_variable_entity import ApiEntitiesCiVariableEntity
    from gitlab_sdk.entity.api_entities_cluster_entity import ApiEntitiesClusterEntity
    from gitlab_sdk.entity.api_entities_cluster_group_entity import ApiEntitiesClusterGroupEntity
    from gitlab_sdk.entity.api_entities_cluster_project_entity import ApiEntitiesClusterProjectEntity
    from gitlab_sdk.entity.api_entities_clusters_agent_entity import ApiEntitiesClustersAgentEntity
    from gitlab_sdk.entity.api_entities_clusters_agent_token_entity import ApiEntitiesClustersAgentTokenEntity
    from gitlab_sdk.entity.api_entities_clusters_agent_token_basic_entity import ApiEntitiesClustersAgentTokenBasicEntity
    from gitlab_sdk.entity.api_entities_clusters_agent_token_with_token_entity import ApiEntitiesClustersAgentTokenWithTokenEntity
    from gitlab_sdk.entity.api_entities_commit_entity import ApiEntitiesCommitEntity
    from gitlab_sdk.entity.api_entities_commit_detail_entity import ApiEntitiesCommitDetailEntity
    from gitlab_sdk.entity.api_entities_commit_note_entity import ApiEntitiesCommitNoteEntity
    from gitlab_sdk.entity.api_entities_commit_sequence_entity import ApiEntitiesCommitSequenceEntity
    from gitlab_sdk.entity.api_entities_commit_signature_entity import ApiEntitiesCommitSignatureEntity
    from gitlab_sdk.entity.api_entities_commit_status_entity import ApiEntitiesCommitStatusEntity
    from gitlab_sdk.entity.api_entities_compare_entity import ApiEntitiesCompareEntity
    from gitlab_sdk.entity.api_entities_container_registry_repository_entity import ApiEntitiesContainerRegistryRepositoryEntity
    from gitlab_sdk.entity.api_entities_container_registry_tag_entity import ApiEntitiesContainerRegistryTagEntity
    from gitlab_sdk.entity.api_entities_container_registry_tag_detail_entity import ApiEntitiesContainerRegistryTagDetailEntity
    from gitlab_sdk.entity.api_entities_contributor_entity import ApiEntitiesContributorEntity
    from gitlab_sdk.entity.api_entities_deploy_key_entity import ApiEntitiesDeployKeyEntity
    from gitlab_sdk.entity.api_entities_deploy_keys_project_entity import ApiEntitiesDeployKeysProjectEntity
    from gitlab_sdk.entity.api_entities_deploy_token_entity import ApiEntitiesDeployTokenEntity
    from gitlab_sdk.entity.api_entities_deploy_token_with_token_entity import ApiEntitiesDeployTokenWithTokenEntity
    from gitlab_sdk.entity.api_entities_deployment_entity import ApiEntitiesDeploymentEntity
    from gitlab_sdk.entity.api_entities_deployment_extended_entity import ApiEntitiesDeploymentExtendedEntity
    from gitlab_sdk.entity.api_entities_deployments_approval_entity import ApiEntitiesDeploymentsApprovalEntity
    from gitlab_sdk.entity.api_entities_dictionary_table_entity import ApiEntitiesDictionaryTableEntity
    from gitlab_sdk.entity.api_entities_diff_entity import ApiEntitiesDiffEntity
    from gitlab_sdk.entity.api_entities_discovered_cluster_entity import ApiEntitiesDiscoveredClusterEntity
    from gitlab_sdk.entity.api_entities_draft_note_entity import ApiEntitiesDraftNoteEntity
    from gitlab_sdk.entity.api_entities_environment_entity import ApiEntitiesEnvironmentEntity
    from gitlab_sdk.entity.api_entities_error_tracking_client_key_entity import ApiEntitiesErrorTrackingClientKeyEntity
    from gitlab_sdk.entity.api_entities_error_tracking_project_setting_entity import ApiEntitiesErrorTrackingProjectSettingEntity
    from gitlab_sdk.entity.api_entities_event_entity import ApiEntitiesEventEntity
    from gitlab_sdk.entity.api_entities_feature_entity import ApiEntitiesFeatureEntity
    from gitlab_sdk.entity.api_entities_feature_definition_entity import ApiEntitiesFeatureDefinitionEntity
    from gitlab_sdk.entity.api_entities_feature_flag_entity import ApiEntitiesFeatureFlagEntity
    from gitlab_sdk.entity.api_entities_feature_flag_user_list_entity import ApiEntitiesFeatureFlagUserListEntity
    from gitlab_sdk.entity.api_entities_freeze_period_entity import ApiEntitiesFreezePeriodEntity
    from gitlab_sdk.entity.api_entities_gitlab_subscription_entity import ApiEntitiesGitlabSubscriptionEntity
    from gitlab_sdk.entity.api_entities_go_module_version_entity import ApiEntitiesGoModuleVersionEntity
    from gitlab_sdk.entity.api_entities_group_entity import ApiEntitiesGroupEntity
    from gitlab_sdk.entity.api_entities_group_detail_entity import ApiEntitiesGroupDetailEntity
    from gitlab_sdk.entity.api_entities_hook_entity import ApiEntitiesHookEntity
    from gitlab_sdk.entity.api_entities_integration_entity import ApiEntitiesIntegrationEntity
    from gitlab_sdk.entity.api_entities_integration_basic_entity import ApiEntitiesIntegrationBasicEntity
    from gitlab_sdk.entity.api_entities_invitation_entity import ApiEntitiesInvitationEntity
    from gitlab_sdk.entity.api_entities_issuable_time_stat_entity import ApiEntitiesIssuableTimeStatEntity
    from gitlab_sdk.entity.api_entities_issue_entity import ApiEntitiesIssueEntity
    from gitlab_sdk.entity.api_entities_issue_link_entity import ApiEntitiesIssueLinkEntity
    from gitlab_sdk.entity.api_entities_license_entity import ApiEntitiesLicenseEntity
    from gitlab_sdk.entity.api_entities_markdown_entity import ApiEntitiesMarkdownEntity
    from gitlab_sdk.entity.api_entities_markdown_upload_admin_entity import ApiEntitiesMarkdownUploadAdminEntity
    from gitlab_sdk.entity.api_entities_member_entity import ApiEntitiesMemberEntity
    from gitlab_sdk.entity.api_entities_merge_entity import ApiEntitiesMergeEntity
    from gitlab_sdk.entity.api_entities_merge_request_approval_entity import ApiEntitiesMergeRequestApprovalEntity
    from gitlab_sdk.entity.api_entities_merge_request_basic_entity import ApiEntitiesMergeRequestBasicEntity
    from gitlab_sdk.entity.api_entities_merge_request_change_entity import ApiEntitiesMergeRequestChangeEntity
    from gitlab_sdk.entity.api_entities_merge_request_diff_entity import ApiEntitiesMergeRequestDiffEntity
    from gitlab_sdk.entity.api_entities_merge_request_diff_full_entity import ApiEntitiesMergeRequestDiffFullEntity
    from gitlab_sdk.entity.api_entities_merge_request_reviewer_entity import ApiEntitiesMergeRequestReviewerEntity
    from gitlab_sdk.entity.api_entities_metric_image_entity import ApiEntitiesMetricImageEntity
    from gitlab_sdk.entity.api_entities_mr_note_entity import ApiEntitiesMrNoteEntity
    from gitlab_sdk.entity.api_entities_namespace_entity import ApiEntitiesNamespaceEntity
    from gitlab_sdk.entity.api_entities_namespace_existence_entity import ApiEntitiesNamespaceExistenceEntity
    from gitlab_sdk.entity.api_entities_namespaces_storage_limit_exclusion_entity import ApiEntitiesNamespacesStorageLimitExclusionEntity
    from gitlab_sdk.entity.api_entities_npm_package_entity import ApiEntitiesNpmPackageEntity
    from gitlab_sdk.entity.api_entities_npm_package_tag_entity import ApiEntitiesNpmPackageTagEntity
    from gitlab_sdk.entity.api_entities_nuget_packages_version_entity import ApiEntitiesNugetPackagesVersionEntity
    from gitlab_sdk.entity.api_entities_nuget_search_result_entity import ApiEntitiesNugetSearchResultEntity
    from gitlab_sdk.entity.api_entities_nuget_service_index_entity import ApiEntitiesNugetServiceIndexEntity
    from gitlab_sdk.entity.api_entities_organizations_organization_entity import ApiEntitiesOrganizationsOrganizationEntity
    from gitlab_sdk.entity.api_entities_package_entity import ApiEntitiesPackageEntity
    from gitlab_sdk.entity.api_entities_package_file_entity import ApiEntitiesPackageFileEntity
    from gitlab_sdk.entity.api_entities_package_pipeline_entity import ApiEntitiesPackagePipelineEntity
    from gitlab_sdk.entity.api_entities_packages_conan_files_list_entity import ApiEntitiesPackagesConanFilesListEntity
    from gitlab_sdk.entity.api_entities_packages_conan_package_manifest_entity import ApiEntitiesPackagesConanPackageManifestEntity
    from gitlab_sdk.entity.api_entities_packages_conan_package_revision_entity import ApiEntitiesPackagesConanPackageRevisionEntity
    from gitlab_sdk.entity.api_entities_packages_conan_package_snapshot_entity import ApiEntitiesPackagesConanPackageSnapshotEntity
    from gitlab_sdk.entity.api_entities_packages_conan_recipe_manifest_entity import ApiEntitiesPackagesConanRecipeManifestEntity
    from gitlab_sdk.entity.api_entities_packages_conan_recipe_revision_entity import ApiEntitiesPackagesConanRecipeRevisionEntity
    from gitlab_sdk.entity.api_entities_packages_conan_recipe_snapshot_entity import ApiEntitiesPackagesConanRecipeSnapshotEntity
    from gitlab_sdk.entity.api_entities_packages_conan_revision_entity import ApiEntitiesPackagesConanRevisionEntity
    from gitlab_sdk.entity.api_entities_packages_conan_upload_url_entity import ApiEntitiesPackagesConanUploadUrlEntity
    from gitlab_sdk.entity.api_entities_packages_debian_distribution_entity import ApiEntitiesPackagesDebianDistributionEntity
    from gitlab_sdk.entity.api_entities_pages_domain_entity import ApiEntitiesPagesDomainEntity
    from gitlab_sdk.entity.api_entities_pages_domain_basic_entity import ApiEntitiesPagesDomainBasicEntity
    from gitlab_sdk.entity.api_entities_personal_access_token_entity import ApiEntitiesPersonalAccessTokenEntity
    from gitlab_sdk.entity.api_entities_personal_access_token_with_last_used_ip_entity import ApiEntitiesPersonalAccessTokenWithLastUsedIpEntity
    from gitlab_sdk.entity.api_entities_personal_access_token_with_token_entity import ApiEntitiesPersonalAccessTokenWithTokenEntity
    from gitlab_sdk.entity.api_entities_personal_snippet_entity import ApiEntitiesPersonalSnippetEntity
    from gitlab_sdk.entity.api_entities_plan_limit_entity import ApiEntitiesPlanLimitEntity
    from gitlab_sdk.entity.api_entities_project_entity import ApiEntitiesProjectEntity
    from gitlab_sdk.entity.api_entities_project_daily_statistic_entity import ApiEntitiesProjectDailyStatisticEntity
    from gitlab_sdk.entity.api_entities_project_export_status_entity import ApiEntitiesProjectExportStatusEntity
    from gitlab_sdk.entity.api_entities_project_group_link_entity import ApiEntitiesProjectGroupLinkEntity
    from gitlab_sdk.entity.api_entities_project_hook_entity import ApiEntitiesProjectHookEntity
    from gitlab_sdk.entity.api_entities_project_import_status_entity import ApiEntitiesProjectImportStatusEntity
    from gitlab_sdk.entity.api_entities_project_job_token_scope_entity import ApiEntitiesProjectJobTokenScopeEntity
    from gitlab_sdk.entity.api_entities_project_repository_storage_entity import ApiEntitiesProjectRepositoryStorageEntity
    from gitlab_sdk.entity.api_entities_project_snippet_entity import ApiEntitiesProjectSnippetEntity
    from gitlab_sdk.entity.api_entities_project_upload_entity import ApiEntitiesProjectUploadEntity
    from gitlab_sdk.entity.api_entities_project_with_access_entity import ApiEntitiesProjectWithAccessEntity
    from gitlab_sdk.entity.api_entities_projects_container_registry_protection_rule_entity import ApiEntitiesProjectsContainerRegistryProtectionRuleEntity
    from gitlab_sdk.entity.api_entities_projects_packages_protection_rule_entity import ApiEntitiesProjectsPackagesProtectionRuleEntity
    from gitlab_sdk.entity.api_entities_projects_topic_entity import ApiEntitiesProjectsTopicEntity
    from gitlab_sdk.entity.api_entities_protected_branch_entity import ApiEntitiesProtectedBranchEntity
    from gitlab_sdk.entity.api_entities_protected_tag_entity import ApiEntitiesProtectedTagEntity
    from gitlab_sdk.entity.api_entities_public_group_detail_entity import ApiEntitiesPublicGroupDetailEntity
    from gitlab_sdk.entity.api_entities_related_issue_entity import ApiEntitiesRelatedIssueEntity
    from gitlab_sdk.entity.api_entities_relation_import_tracker_entity import ApiEntitiesRelationImportTrackerEntity
    from gitlab_sdk.entity.api_entities_release_entity import ApiEntitiesReleaseEntity
    from gitlab_sdk.entity.api_entities_releases_link_entity import ApiEntitiesReleasesLinkEntity
    from gitlab_sdk.entity.api_entities_remote_mirror_entity import ApiEntitiesRemoteMirrorEntity
    from gitlab_sdk.entity.api_entities_repository_health_entity import ApiEntitiesRepositoryHealthEntity
    from gitlab_sdk.entity.api_entities_resource_access_token_with_token_entity import ApiEntitiesResourceAccessTokenWithTokenEntity
    from gitlab_sdk.entity.api_entities_resource_milestone_event_entity import ApiEntitiesResourceMilestoneEventEntity
    from gitlab_sdk.entity.api_entities_snippet_entity import ApiEntitiesSnippetEntity
    from gitlab_sdk.entity.api_entities_ssh_key_with_user_entity import ApiEntitiesSshKeyWithUserEntity
    from gitlab_sdk.entity.api_entities_suggestion_entity import ApiEntitiesSuggestionEntity
    from gitlab_sdk.entity.api_entities_system_broadcast_message_entity import ApiEntitiesSystemBroadcastMessageEntity
    from gitlab_sdk.entity.api_entities_tag_entity import ApiEntitiesTagEntity
    from gitlab_sdk.entity.api_entities_tag_signature_entity import ApiEntitiesTagSignatureEntity
    from gitlab_sdk.entity.api_entities_templates_list_entity import ApiEntitiesTemplatesListEntity
    from gitlab_sdk.entity.api_entities_terraform_module_version_entity import ApiEntitiesTerraformModuleVersionEntity
    from gitlab_sdk.entity.api_entities_tree_object_entity import ApiEntitiesTreeObjectEntity
    from gitlab_sdk.entity.api_entities_trigger_entity import ApiEntitiesTriggerEntity
    from gitlab_sdk.entity.api_entities_user_agent_detail_entity import ApiEntitiesUserAgentDetailEntity
    from gitlab_sdk.entity.api_entities_user_count_entity import ApiEntitiesUserCountEntity
    from gitlab_sdk.entity.api_entities_user_public_entity import ApiEntitiesUserPublicEntity
    from gitlab_sdk.entity.api_entities_user_with_admin_entity import ApiEntitiesUserWithAdminEntity
    from gitlab_sdk.entity.api_entities_wiki_attachment_entity import ApiEntitiesWikiAttachmentEntity
    from gitlab_sdk.entity.api_entities_wiki_page_entity import ApiEntitiesWikiPageEntity
    from gitlab_sdk.entity.api_entities_wiki_page_basic_entity import ApiEntitiesWikiPageBasicEntity
    from gitlab_sdk.entity.application_entity import ApplicationEntity
    from gitlab_sdk.entity.award_emoji_entity import AwardEmojiEntity
    from gitlab_sdk.entity.badge_entity import BadgeEntity
    from gitlab_sdk.entity.branch_entity import BranchEntity
    from gitlab_sdk.entity.cargo_package_entity import CargoPackageEntity
    from gitlab_sdk.entity.ci_variable_entity import CiVariableEntity
    from gitlab_sdk.entity.cluster_entity import ClusterEntity
    from gitlab_sdk.entity.cluster_agent_entity import ClusterAgentEntity
    from gitlab_sdk.entity.composer_entity import ComposerEntity
    from gitlab_sdk.entity.composer_package_entity import ComposerPackageEntity
    from gitlab_sdk.entity.conan_entity import ConanEntity
    from gitlab_sdk.entity.conan_package_entity import ConanPackageEntity
    from gitlab_sdk.entity.container_registry_entity import ContainerRegistryEntity
    from gitlab_sdk.entity.container_registry_event_entity import ContainerRegistryEventEntity
    from gitlab_sdk.entity.custom_attribute_entity import CustomAttributeEntity
    from gitlab_sdk.entity.debian_entity import DebianEntity
    from gitlab_sdk.entity.debian_distribution_entity import DebianDistributionEntity
    from gitlab_sdk.entity.debian_package_entity import DebianPackageEntity
    from gitlab_sdk.entity.dependency_proxy_entity import DependencyProxyEntity
    from gitlab_sdk.entity.deploy_key_entity import DeployKeyEntity
    from gitlab_sdk.entity.deploy_token_entity import DeployTokenEntity
    from gitlab_sdk.entity.deployment_entity import DeploymentEntity
    from gitlab_sdk.entity.ee_api_entities_approval_state_entity import EeApiEntitiesApprovalStateEntity
    from gitlab_sdk.entity.ee_api_entities_audit_event_entity import EeApiEntitiesAuditEventEntity
    from gitlab_sdk.entity.ee_api_entities_billable_membership_entity import EeApiEntitiesBillableMembershipEntity
    from gitlab_sdk.entity.ee_api_entities_geo_node_status_entity import EeApiEntitiesGeoNodeStatusEntity
    from gitlab_sdk.entity.ee_api_entities_geo_pipeline_ref_entity import EeApiEntitiesGeoPipelineRefEntity
    from gitlab_sdk.entity.ee_api_entities_issuable_metric_image_entity import EeApiEntitiesIssuableMetricImageEntity
    from gitlab_sdk.entity.ee_api_entities_merge_request_approval_state_entity import EeApiEntitiesMergeRequestApprovalStateEntity
    from gitlab_sdk.entity.ee_api_entities_ssh_certificate_entity import EeApiEntitiesSshCertificateEntity
    from gitlab_sdk.entity.environment_entity import EnvironmentEntity
    from gitlab_sdk.entity.error_tracking_client_key_entity import ErrorTrackingClientKeyEntity
    from gitlab_sdk.entity.feature_entity import FeatureEntity
    from gitlab_sdk.entity.feature_flag_entity import FeatureFlagEntity
    from gitlab_sdk.entity.feature_flags_user_list_entity import FeatureFlagsUserListEntity
    from gitlab_sdk.entity.freeze_period_entity import FreezePeriodEntity
    from gitlab_sdk.entity.generic_package_entity import GenericPackageEntity
    from gitlab_sdk.entity.geo_entity import GeoEntity
    from gitlab_sdk.entity.go_proxy_entity import GoProxyEntity
    from gitlab_sdk.entity.group_entity import GroupEntity
    from gitlab_sdk.entity.group_avatar_entity import GroupAvatarEntity
    from gitlab_sdk.entity.group_export_entity import GroupExportEntity
    from gitlab_sdk.entity.group_import_entity import GroupImportEntity
    from gitlab_sdk.entity.helm_package_entity import HelmPackageEntity
    from gitlab_sdk.entity.hook_entity import HookEntity
    from gitlab_sdk.entity.import_entity import ImportEntity
    from gitlab_sdk.entity.integration_entity import IntegrationEntity
    from gitlab_sdk.entity.invitation_entity import InvitationEntity
    from gitlab_sdk.entity.issue_link_entity import IssueLinkEntity
    from gitlab_sdk.entity.issues_statistic_entity import IssuesStatisticEntity
    from gitlab_sdk.entity.job_entity import JobEntity
    from gitlab_sdk.entity.maven_package_entity import MavenPackageEntity
    from gitlab_sdk.entity.member_entity import MemberEntity
    from gitlab_sdk.entity.merge_request_entity import MergeRequestEntity
    from gitlab_sdk.entity.metadata_entity import MetadataEntity
    from gitlab_sdk.entity.migration_entity import MigrationEntity
    from gitlab_sdk.entity.ml_model_registry_entity import MlModelRegistryEntity
    from gitlab_sdk.entity.namespace_entity import NamespaceEntity
    from gitlab_sdk.entity.npm_entity import NpmEntity
    from gitlab_sdk.entity.npm_package_entity import NpmPackageEntity
    from gitlab_sdk.entity.nuget_entity import NugetEntity
    from gitlab_sdk.entity.nuget_package_entity import NugetPackageEntity
    from gitlab_sdk.entity.package_file_entity import PackageFileEntity
    from gitlab_sdk.entity.page_entity import PageEntity
    from gitlab_sdk.entity.participant_entity import ParticipantEntity
    from gitlab_sdk.entity.personal_access_token_entity import PersonalAccessTokenEntity
    from gitlab_sdk.entity.project_entity import ProjectEntityClient
    from gitlab_sdk.entity.project_avatar_entity import ProjectAvatarEntity
    from gitlab_sdk.entity.project_entity_entity import ProjectEntityEntity
    from gitlab_sdk.entity.project_export_entity import ProjectExportEntity
    from gitlab_sdk.entity.project_hook_entity import ProjectHookEntity
    from gitlab_sdk.entity.project_import_entity import ProjectImportEntityClient
    from gitlab_sdk.entity.project_import_entity_entity import ProjectImportEntityEntity
    from gitlab_sdk.entity.project_package_entity import ProjectPackageEntity
    from gitlab_sdk.entity.project_snippet_entity import ProjectSnippetEntity
    from gitlab_sdk.entity.projects_job_token_scope_entity import ProjectsJobTokenScopeEntity
    from gitlab_sdk.entity.protected_tag_entity import ProtectedTagEntity
    from gitlab_sdk.entity.pypi_entity import PypiEntity
    from gitlab_sdk.entity.pypi_package_entity import PypiPackageEntity
    from gitlab_sdk.entity.release_entity import ReleaseEntity
    from gitlab_sdk.entity.release_link_entity import ReleaseLinkEntity
    from gitlab_sdk.entity.remote_mirror_entity import RemoteMirrorEntity
    from gitlab_sdk.entity.rpm_entity import RpmEntity
    from gitlab_sdk.entity.rpm_package_entity import RpmPackageEntity
    from gitlab_sdk.entity.rubygem_entity import RubygemEntity
    from gitlab_sdk.entity.rubygem_package_entity import RubygemPackageEntity
    from gitlab_sdk.entity.runner_entity import RunnerEntity
    from gitlab_sdk.entity.search_entity import SearchEntity
    from gitlab_sdk.entity.secure_file_entity import SecureFileEntity
    from gitlab_sdk.entity.slack_entity import SlackEntity
    from gitlab_sdk.entity.snippet_entity import SnippetEntity
    from gitlab_sdk.entity.starrer_entity import StarrerEntity
    from gitlab_sdk.entity.system_hook_entity import SystemHookEntity
    from gitlab_sdk.entity.tag_entity import TagEntity
    from gitlab_sdk.entity.terraform_registry_entity import TerraformRegistryEntity
    from gitlab_sdk.entity.terraform_state_entity import TerraformStateEntity
    from gitlab_sdk.entity.test_report_entity import TestReportEntity
    from gitlab_sdk.entity.test_report_summary_entity import TestReportSummaryEntity
    from gitlab_sdk.entity.topic_entity import TopicEntity
    from gitlab_sdk.entity.unleash_api_entity import UnleashApiEntity
    from gitlab_sdk.entity.usage_data_entity import UsageDataEntity
    from gitlab_sdk.entity.user_entity import UserEntity
    from gitlab_sdk.entity.web_commit_entity import WebCommitEntity
    from gitlab_sdk.entity.wiki_entity import WikiEntity
