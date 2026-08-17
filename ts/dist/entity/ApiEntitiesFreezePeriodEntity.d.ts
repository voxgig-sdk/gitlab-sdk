import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesFreezePeriod, ApiEntitiesFreezePeriodLoadMatch, ApiEntitiesFreezePeriodListMatch, ApiEntitiesFreezePeriodCreateData, ApiEntitiesFreezePeriodUpdateData } from '../GitlabTypes';
declare class ApiEntitiesFreezePeriodEntity extends GitlabEntityBase<ApiEntitiesFreezePeriod> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesFreezePeriodEntity): ApiEntitiesFreezePeriodEntity;
    load(this: any, reqmatch?: ApiEntitiesFreezePeriodLoadMatch, ctrl?: Control): Promise<ApiEntitiesFreezePeriodEntity>;
    list(this: any, reqmatch?: ApiEntitiesFreezePeriodListMatch, ctrl?: Control): Promise<ApiEntitiesFreezePeriodEntity[]>;
    create(this: any, reqdata?: ApiEntitiesFreezePeriodCreateData, ctrl?: Control): Promise<ApiEntitiesFreezePeriodEntity>;
    update(this: any, reqdata?: ApiEntitiesFreezePeriodUpdateData, ctrl?: Control): Promise<ApiEntitiesFreezePeriodEntity>;
}
export { ApiEntitiesFreezePeriodEntity };
