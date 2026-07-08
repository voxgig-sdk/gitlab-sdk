# Gitlab SDK utility: make_context

from core.context import GitlabContext


def make_context_util(ctxmap, basectx):
    return GitlabContext(ctxmap, basectx)
