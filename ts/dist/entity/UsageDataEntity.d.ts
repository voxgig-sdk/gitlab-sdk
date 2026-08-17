import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { UsageData, UsageDataLoadMatch, UsageDataCreateData } from '../GitlabTypes';
declare class UsageDataEntity extends GitlabEntityBase<UsageData> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: UsageDataEntity): UsageDataEntity;
    load(this: any, reqmatch?: UsageDataLoadMatch, ctrl?: Control): Promise<UsageDataEntity>;
    create(this: any, reqdata?: UsageDataCreateData, ctrl?: Control): Promise<UsageDataEntity>;
}
export { UsageDataEntity };
