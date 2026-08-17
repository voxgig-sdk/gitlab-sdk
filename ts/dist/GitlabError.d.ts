import { Context } from './Context';
declare class GitlabError extends Error {
    isGitlabError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { GitlabError };
