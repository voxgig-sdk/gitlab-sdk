import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesBranch, ApiEntitiesBranchLoadMatch, ApiEntitiesBranchListMatch, ApiEntitiesBranchCreateData, ApiEntitiesBranchUpdateData } from '../GitlabTypes';
declare class ApiEntitiesBranchEntity extends GitlabEntityBase<ApiEntitiesBranch> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesBranchEntity): ApiEntitiesBranchEntity;
    load(this: any, reqmatch?: ApiEntitiesBranchLoadMatch, ctrl?: Control): Promise<ApiEntitiesBranchEntity>;
    list(this: any, reqmatch?: ApiEntitiesBranchListMatch, ctrl?: Control): Promise<ApiEntitiesBranchEntity[]>;
    create(this: any, reqdata?: ApiEntitiesBranchCreateData, ctrl?: Control): Promise<ApiEntitiesBranchEntity>;
    update(this: any, reqdata?: ApiEntitiesBranchUpdateData, ctrl?: Control): Promise<ApiEntitiesBranchEntity>;
}
export { ApiEntitiesBranchEntity };
