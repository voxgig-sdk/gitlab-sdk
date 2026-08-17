import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { FeatureFlagsUserList, FeatureFlagsUserListRemoveMatch } from '../GitlabTypes';
declare class FeatureFlagsUserListEntity extends GitlabEntityBase<FeatureFlagsUserList> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: FeatureFlagsUserListEntity): FeatureFlagsUserListEntity;
    remove(this: any, reqmatch?: FeatureFlagsUserListRemoveMatch, ctrl?: Control): Promise<FeatureFlagsUserListEntity>;
}
export { FeatureFlagsUserListEntity };
