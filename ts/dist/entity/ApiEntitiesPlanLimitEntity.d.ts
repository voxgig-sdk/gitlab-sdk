import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesPlanLimit, ApiEntitiesPlanLimitLoadMatch, ApiEntitiesPlanLimitUpdateData } from '../GitlabTypes';
declare class ApiEntitiesPlanLimitEntity extends GitlabEntityBase<ApiEntitiesPlanLimit> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesPlanLimitEntity): ApiEntitiesPlanLimitEntity;
    load(this: any, reqmatch?: ApiEntitiesPlanLimitLoadMatch, ctrl?: Control): Promise<ApiEntitiesPlanLimitEntity>;
    update(this: any, reqdata?: ApiEntitiesPlanLimitUpdateData, ctrl?: Control): Promise<ApiEntitiesPlanLimitEntity>;
}
export { ApiEntitiesPlanLimitEntity };
