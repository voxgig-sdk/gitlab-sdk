import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesMergeRequestApproval, ApiEntitiesMergeRequestApprovalLoadMatch, ApiEntitiesMergeRequestApprovalCreateData } from '../GitlabTypes';
declare class ApiEntitiesMergeRequestApprovalEntity extends GitlabEntityBase<ApiEntitiesMergeRequestApproval> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesMergeRequestApprovalEntity): ApiEntitiesMergeRequestApprovalEntity;
    load(this: any, reqmatch?: ApiEntitiesMergeRequestApprovalLoadMatch, ctrl?: Control): Promise<ApiEntitiesMergeRequestApprovalEntity>;
    create(this: any, reqdata?: ApiEntitiesMergeRequestApprovalCreateData, ctrl?: Control): Promise<ApiEntitiesMergeRequestApprovalEntity>;
}
export { ApiEntitiesMergeRequestApprovalEntity };
