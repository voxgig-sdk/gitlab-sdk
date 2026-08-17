import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesCompare, ApiEntitiesCompareListMatch } from '../GitlabTypes';
declare class ApiEntitiesCompareEntity extends GitlabEntityBase<ApiEntitiesCompare> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesCompareEntity): ApiEntitiesCompareEntity;
    list(this: any, reqmatch?: ApiEntitiesCompareListMatch, ctrl?: Control): Promise<ApiEntitiesCompareEntity[]>;
}
export { ApiEntitiesCompareEntity };
