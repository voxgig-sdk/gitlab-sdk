import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { Release, ReleaseLoadMatch, ReleaseRemoveMatch } from '../GitlabTypes';
declare class ReleaseEntity extends GitlabEntityBase<Release> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ReleaseEntity): ReleaseEntity;
    load(this: any, reqmatch?: ReleaseLoadMatch, ctrl?: Control): Promise<ReleaseEntity>;
    remove(this: any, reqmatch?: ReleaseRemoveMatch, ctrl?: Control): Promise<ReleaseEntity>;
}
export { ReleaseEntity };
