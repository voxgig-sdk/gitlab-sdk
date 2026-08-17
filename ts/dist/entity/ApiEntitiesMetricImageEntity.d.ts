import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesMetricImage, ApiEntitiesMetricImageListMatch, ApiEntitiesMetricImageCreateData, ApiEntitiesMetricImageUpdateData } from '../GitlabTypes';
declare class ApiEntitiesMetricImageEntity extends GitlabEntityBase<ApiEntitiesMetricImage> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesMetricImageEntity): ApiEntitiesMetricImageEntity;
    list(this: any, reqmatch?: ApiEntitiesMetricImageListMatch, ctrl?: Control): Promise<ApiEntitiesMetricImageEntity[]>;
    create(this: any, reqdata?: ApiEntitiesMetricImageCreateData, ctrl?: Control): Promise<ApiEntitiesMetricImageEntity>;
    update(this: any, reqdata?: ApiEntitiesMetricImageUpdateData, ctrl?: Control): Promise<ApiEntitiesMetricImageEntity>;
}
export { ApiEntitiesMetricImageEntity };
