import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesCiResetTokenResult, ApiEntitiesCiResetTokenResultCreateData } from '../GitlabTypes';
declare class ApiEntitiesCiResetTokenResultEntity extends GitlabEntityBase<ApiEntitiesCiResetTokenResult> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesCiResetTokenResultEntity): ApiEntitiesCiResetTokenResultEntity;
    create(this: any, reqdata?: ApiEntitiesCiResetTokenResultCreateData, ctrl?: Control): Promise<ApiEntitiesCiResetTokenResultEntity>;
}
export { ApiEntitiesCiResetTokenResultEntity };
