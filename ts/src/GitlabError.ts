
import { Context } from './Context'


class GitlabError extends Error {

  isGitlabError = true

  sdk = 'Gitlab'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  GitlabError
}

