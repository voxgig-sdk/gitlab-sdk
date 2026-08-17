import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesProtectedBranch, ApiEntitiesProtectedBranchLoadMatch, ApiEntitiesProtectedBranchListMatch, ApiEntitiesProtectedBranchCreateData, ApiEntitiesProtectedBranchUpdateData } from '../GitlabTypes';
declare class ApiEntitiesProtectedBranchEntity extends GitlabEntityBase<ApiEntitiesProtectedBranch> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesProtectedBranchEntity): ApiEntitiesProtectedBranchEntity;
    load(this: any, reqmatch?: ApiEntitiesProtectedBranchLoadMatch, ctrl?: Control): Promise<ApiEntitiesProtectedBranchEntity>;
    list(this: any, reqmatch?: ApiEntitiesProtectedBranchListMatch, ctrl?: Control): Promise<ApiEntitiesProtectedBranchEntity[]>;
    create(this: any, reqdata?: ApiEntitiesProtectedBranchCreateData, ctrl?: Control): Promise<ApiEntitiesProtectedBranchEntity>;
    update(this: any, reqdata?: ApiEntitiesProtectedBranchUpdateData, ctrl?: Control): Promise<ApiEntitiesProtectedBranchEntity>;
}
export { ApiEntitiesProtectedBranchEntity };
