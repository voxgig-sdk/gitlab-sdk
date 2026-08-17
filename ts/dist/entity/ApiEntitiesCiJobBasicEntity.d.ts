import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesCiJobBasic, ApiEntitiesCiJobBasicListMatch, ApiEntitiesCiJobBasicCreateData } from '../GitlabTypes';
declare class ApiEntitiesCiJobBasicEntity extends GitlabEntityBase<ApiEntitiesCiJobBasic> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesCiJobBasicEntity): ApiEntitiesCiJobBasicEntity;
    list(this: any, reqmatch?: ApiEntitiesCiJobBasicListMatch, ctrl?: Control): Promise<ApiEntitiesCiJobBasicEntity[]>;
    create(this: any, reqdata?: ApiEntitiesCiJobBasicCreateData, ctrl?: Control): Promise<ApiEntitiesCiJobBasicEntity>;
}
export { ApiEntitiesCiJobBasicEntity };
