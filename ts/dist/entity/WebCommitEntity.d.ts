import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { WebCommit, WebCommitLoadMatch } from '../GitlabTypes';
declare class WebCommitEntity extends GitlabEntityBase<WebCommit> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: WebCommitEntity): WebCommitEntity;
    load(this: any, reqmatch?: WebCommitLoadMatch, ctrl?: Control): Promise<WebCommitEntity>;
}
export { WebCommitEntity };
