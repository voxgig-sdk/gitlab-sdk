import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesDeployKeysProject, ApiEntitiesDeployKeysProjectLoadMatch, ApiEntitiesDeployKeysProjectListMatch, ApiEntitiesDeployKeysProjectCreateData } from '../GitlabTypes';
declare class ApiEntitiesDeployKeysProjectEntity extends GitlabEntityBase<ApiEntitiesDeployKeysProject> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesDeployKeysProjectEntity): ApiEntitiesDeployKeysProjectEntity;
    load(this: any, reqmatch?: ApiEntitiesDeployKeysProjectLoadMatch, ctrl?: Control): Promise<ApiEntitiesDeployKeysProjectEntity>;
    list(this: any, reqmatch?: ApiEntitiesDeployKeysProjectListMatch, ctrl?: Control): Promise<ApiEntitiesDeployKeysProjectEntity[]>;
    create(this: any, reqdata?: ApiEntitiesDeployKeysProjectCreateData, ctrl?: Control): Promise<ApiEntitiesDeployKeysProjectEntity>;
}
export { ApiEntitiesDeployKeysProjectEntity };
