import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesBasicGroupDetail, ApiEntitiesBasicGroupDetailCreateData } from '../GitlabTypes';
declare class ApiEntitiesBasicGroupDetailEntity extends GitlabEntityBase<ApiEntitiesBasicGroupDetail> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesBasicGroupDetailEntity): ApiEntitiesBasicGroupDetailEntity;
    create(this: any, reqdata?: ApiEntitiesBasicGroupDetailCreateData, ctrl?: Control): Promise<ApiEntitiesBasicGroupDetailEntity>;
}
export { ApiEntitiesBasicGroupDetailEntity };
