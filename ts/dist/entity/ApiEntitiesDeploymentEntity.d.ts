import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesDeployment, ApiEntitiesDeploymentListMatch } from '../GitlabTypes';
declare class ApiEntitiesDeploymentEntity extends GitlabEntityBase<ApiEntitiesDeployment> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesDeploymentEntity): ApiEntitiesDeploymentEntity;
    list(this: any, reqmatch?: ApiEntitiesDeploymentListMatch, ctrl?: Control): Promise<ApiEntitiesDeploymentEntity[]>;
}
export { ApiEntitiesDeploymentEntity };
