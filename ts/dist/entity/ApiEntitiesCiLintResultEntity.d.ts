import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesCiLintResult, ApiEntitiesCiLintResultListMatch, ApiEntitiesCiLintResultCreateData } from '../GitlabTypes';
declare class ApiEntitiesCiLintResultEntity extends GitlabEntityBase<ApiEntitiesCiLintResult> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesCiLintResultEntity): ApiEntitiesCiLintResultEntity;
    list(this: any, reqmatch?: ApiEntitiesCiLintResultListMatch, ctrl?: Control): Promise<ApiEntitiesCiLintResultEntity[]>;
    create(this: any, reqdata?: ApiEntitiesCiLintResultCreateData, ctrl?: Control): Promise<ApiEntitiesCiLintResultEntity>;
}
export { ApiEntitiesCiLintResultEntity };
