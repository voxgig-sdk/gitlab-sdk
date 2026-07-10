-- Gitlab SDK error

local GitlabError = {}
GitlabError.__index = GitlabError


function GitlabError.new(code, msg, ctx)
  local self = setmetatable({}, GitlabError)
  self.is_sdk_error = true
  self.sdk = "Gitlab"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function GitlabError:error()
  return self.msg
end


function GitlabError:__tostring()
  return self.msg
end


return GitlabError
