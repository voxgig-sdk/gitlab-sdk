import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesBasicBadgeDetail, ApiEntitiesBasicBadgeDetailLoadMatch } from '../GitlabTypes';
declare class ApiEntitiesBasicBadgeDetailEntity extends GitlabEntityBase<ApiEntitiesBasicBadgeDetail> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesBasicBadgeDetailEntity): ApiEntitiesBasicBadgeDetailEntity;
    load(this: any, reqmatch?: ApiEntitiesBasicBadgeDetailLoadMatch, ctrl?: Control): Promise<ApiEntitiesBasicBadgeDetailEntity>;
}
export { ApiEntitiesBasicBadgeDetailEntity };
