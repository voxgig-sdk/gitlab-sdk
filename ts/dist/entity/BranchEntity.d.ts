import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { Branch, BranchRemoveMatch } from '../GitlabTypes';
declare class BranchEntity extends GitlabEntityBase<Branch> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: BranchEntity): BranchEntity;
    remove(this: any, reqmatch?: BranchRemoveMatch, ctrl?: Control): Promise<BranchEntity>;
}
export { BranchEntity };
