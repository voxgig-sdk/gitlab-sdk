import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { DebianDistribution, DebianDistributionRemoveMatch } from '../GitlabTypes';
declare class DebianDistributionEntity extends GitlabEntityBase<DebianDistribution> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: DebianDistributionEntity): DebianDistributionEntity;
    remove(this: any, reqmatch?: DebianDistributionRemoveMatch, ctrl?: Control): Promise<DebianDistributionEntity>;
}
export { DebianDistributionEntity };
