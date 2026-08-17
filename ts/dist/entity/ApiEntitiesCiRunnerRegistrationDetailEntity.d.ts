import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesCiRunnerRegistrationDetail, ApiEntitiesCiRunnerRegistrationDetailCreateData } from '../GitlabTypes';
declare class ApiEntitiesCiRunnerRegistrationDetailEntity extends GitlabEntityBase<ApiEntitiesCiRunnerRegistrationDetail> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesCiRunnerRegistrationDetailEntity): ApiEntitiesCiRunnerRegistrationDetailEntity;
    create(this: any, reqdata?: ApiEntitiesCiRunnerRegistrationDetailCreateData, ctrl?: Control): Promise<ApiEntitiesCiRunnerRegistrationDetailEntity>;
}
export { ApiEntitiesCiRunnerRegistrationDetailEntity };
