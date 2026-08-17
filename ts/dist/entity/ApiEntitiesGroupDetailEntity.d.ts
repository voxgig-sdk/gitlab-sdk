import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesGroupDetail, ApiEntitiesGroupDetailLoadMatch, ApiEntitiesGroupDetailCreateData } from '../GitlabTypes';
declare class ApiEntitiesGroupDetailEntity extends GitlabEntityBase<ApiEntitiesGroupDetail> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesGroupDetailEntity): ApiEntitiesGroupDetailEntity;
    load(this: any, reqmatch?: ApiEntitiesGroupDetailLoadMatch, ctrl?: Control): Promise<ApiEntitiesGroupDetailEntity>;
    create(this: any, reqdata?: ApiEntitiesGroupDetailCreateData, ctrl?: Control): Promise<ApiEntitiesGroupDetailEntity>;
}
export { ApiEntitiesGroupDetailEntity };
