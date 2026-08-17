import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesApplicationStatistic, ApiEntitiesApplicationStatisticLoadMatch } from '../GitlabTypes';
declare class ApiEntitiesApplicationStatisticEntity extends GitlabEntityBase<ApiEntitiesApplicationStatistic> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesApplicationStatisticEntity): ApiEntitiesApplicationStatisticEntity;
    load(this: any, reqmatch?: ApiEntitiesApplicationStatisticLoadMatch, ctrl?: Control): Promise<ApiEntitiesApplicationStatisticEntity>;
}
export { ApiEntitiesApplicationStatisticEntity };
