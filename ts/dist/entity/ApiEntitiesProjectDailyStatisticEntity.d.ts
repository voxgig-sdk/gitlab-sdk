import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesProjectDailyStatistic, ApiEntitiesProjectDailyStatisticLoadMatch } from '../GitlabTypes';
declare class ApiEntitiesProjectDailyStatisticEntity extends GitlabEntityBase<ApiEntitiesProjectDailyStatistic> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesProjectDailyStatisticEntity): ApiEntitiesProjectDailyStatisticEntity;
    load(this: any, reqmatch?: ApiEntitiesProjectDailyStatisticLoadMatch, ctrl?: Control): Promise<ApiEntitiesProjectDailyStatisticEntity>;
}
export { ApiEntitiesProjectDailyStatisticEntity };
