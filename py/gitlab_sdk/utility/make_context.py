# Gitlab SDK utility: make_context

from gitlab_sdk.core.context import GitlabContext


def make_context_util(ctxmap, basectx):
    return GitlabContext(ctxmap, basectx)
