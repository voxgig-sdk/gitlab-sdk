import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesBasicProjectDetail, ApiEntitiesBasicProjectDetailListMatch, ApiEntitiesBasicProjectDetailCreateData } from '../GitlabTypes';
declare class ApiEntitiesBasicProjectDetailEntity extends GitlabEntityBase<ApiEntitiesBasicProjectDetail> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesBasicProjectDetailEntity): ApiEntitiesBasicProjectDetailEntity;
    list(this: any, reqmatch?: ApiEntitiesBasicProjectDetailListMatch, ctrl?: Control): Promise<ApiEntitiesBasicProjectDetailEntity[]>;
    create(this: any, reqdata?: ApiEntitiesBasicProjectDetailCreateData, ctrl?: Control): Promise<ApiEntitiesBasicProjectDetailEntity>;
}
export { ApiEntitiesBasicProjectDetailEntity };
