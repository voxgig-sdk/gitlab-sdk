import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesDeploymentExtended, ApiEntitiesDeploymentExtendedLoadMatch, ApiEntitiesDeploymentExtendedCreateData, ApiEntitiesDeploymentExtendedUpdateData } from '../GitlabTypes';
declare class ApiEntitiesDeploymentExtendedEntity extends GitlabEntityBase<ApiEntitiesDeploymentExtended> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesDeploymentExtendedEntity): ApiEntitiesDeploymentExtendedEntity;
    load(this: any, reqmatch?: ApiEntitiesDeploymentExtendedLoadMatch, ctrl?: Control): Promise<ApiEntitiesDeploymentExtendedEntity>;
    create(this: any, reqdata?: ApiEntitiesDeploymentExtendedCreateData, ctrl?: Control): Promise<ApiEntitiesDeploymentExtendedEntity>;
    update(this: any, reqdata?: ApiEntitiesDeploymentExtendedUpdateData, ctrl?: Control): Promise<ApiEntitiesDeploymentExtendedEntity>;
}
export { ApiEntitiesDeploymentExtendedEntity };
