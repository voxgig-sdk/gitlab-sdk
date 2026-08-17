import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesIntegrationBasic, ApiEntitiesIntegrationBasicListMatch, ApiEntitiesIntegrationBasicUpdateData } from '../GitlabTypes';
declare class ApiEntitiesIntegrationBasicEntity extends GitlabEntityBase<ApiEntitiesIntegrationBasic> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesIntegrationBasicEntity): ApiEntitiesIntegrationBasicEntity;
    list(this: any, reqmatch?: ApiEntitiesIntegrationBasicListMatch, ctrl?: Control): Promise<ApiEntitiesIntegrationBasicEntity[]>;
    update(this: any, reqdata?: ApiEntitiesIntegrationBasicUpdateData, ctrl?: Control): Promise<ApiEntitiesIntegrationBasicEntity>;
}
export { ApiEntitiesIntegrationBasicEntity };
