import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesAccessRequester, ApiEntitiesAccessRequesterListMatch, ApiEntitiesAccessRequesterCreateData, ApiEntitiesAccessRequesterUpdateData } from '../GitlabTypes';
declare class ApiEntitiesAccessRequesterEntity extends GitlabEntityBase<ApiEntitiesAccessRequester> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesAccessRequesterEntity): ApiEntitiesAccessRequesterEntity;
    list(this: any, reqmatch?: ApiEntitiesAccessRequesterListMatch, ctrl?: Control): Promise<ApiEntitiesAccessRequesterEntity[]>;
    create(this: any, reqdata?: ApiEntitiesAccessRequesterCreateData, ctrl?: Control): Promise<ApiEntitiesAccessRequesterEntity>;
    update(this: any, reqdata?: ApiEntitiesAccessRequesterUpdateData, ctrl?: Control): Promise<ApiEntitiesAccessRequesterEntity>;
}
export { ApiEntitiesAccessRequesterEntity };
