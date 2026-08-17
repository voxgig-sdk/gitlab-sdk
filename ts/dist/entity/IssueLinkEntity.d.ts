import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { IssueLink, IssueLinkRemoveMatch } from '../GitlabTypes';
declare class IssueLinkEntity extends GitlabEntityBase<IssueLink> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: IssueLinkEntity): IssueLinkEntity;
    remove(this: any, reqmatch?: IssueLinkRemoveMatch, ctrl?: Control): Promise<IssueLinkEntity>;
}
export { IssueLinkEntity };
