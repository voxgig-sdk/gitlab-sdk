import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ReleaseLink, ReleaseLinkRemoveMatch } from '../GitlabTypes';
declare class ReleaseLinkEntity extends GitlabEntityBase<ReleaseLink> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ReleaseLinkEntity): ReleaseLinkEntity;
    remove(this: any, reqmatch?: ReleaseLinkRemoveMatch, ctrl?: Control): Promise<ReleaseLinkEntity>;
}
export { ReleaseLinkEntity };
