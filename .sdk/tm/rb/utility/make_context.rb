# Gitlab SDK utility: make_context
require_relative '../core/context'
module GitlabUtilities
  MakeContext = ->(ctxmap, basectx) {
    GitlabContext.new(ctxmap, basectx)
  }
end
