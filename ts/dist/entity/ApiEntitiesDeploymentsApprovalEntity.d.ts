import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesDeploymentsApproval, ApiEntitiesDeploymentsApprovalCreateData } from '../GitlabTypes';
declare class ApiEntitiesDeploymentsApprovalEntity extends GitlabEntityBase<ApiEntitiesDeploymentsApproval> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesDeploymentsApprovalEntity): ApiEntitiesDeploymentsApprovalEntity;
    create(this: any, reqdata?: ApiEntitiesDeploymentsApprovalCreateData, ctrl?: Control): Promise<ApiEntitiesDeploymentsApprovalEntity>;
}
export { ApiEntitiesDeploymentsApprovalEntity };
