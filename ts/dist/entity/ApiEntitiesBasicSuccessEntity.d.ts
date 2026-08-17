import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesBasicSuccess, ApiEntitiesBasicSuccessCreateData } from '../GitlabTypes';
declare class ApiEntitiesBasicSuccessEntity extends GitlabEntityBase<ApiEntitiesBasicSuccess> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesBasicSuccessEntity): ApiEntitiesBasicSuccessEntity;
    create(this: any, reqdata?: ApiEntitiesBasicSuccessCreateData, ctrl?: Control): Promise<ApiEntitiesBasicSuccessEntity>;
}
export { ApiEntitiesBasicSuccessEntity };
