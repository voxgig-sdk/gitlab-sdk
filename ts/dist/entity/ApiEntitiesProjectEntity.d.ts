import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesProject, ApiEntitiesProjectListMatch, ApiEntitiesProjectCreateData, ApiEntitiesProjectUpdateData } from '../GitlabTypes';
declare class ApiEntitiesProjectEntity extends GitlabEntityBase<ApiEntitiesProject> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesProjectEntity): ApiEntitiesProjectEntity;
    list(this: any, reqmatch?: ApiEntitiesProjectListMatch, ctrl?: Control): Promise<ApiEntitiesProjectEntity[]>;
    create(this: any, reqdata?: ApiEntitiesProjectCreateData, ctrl?: Control): Promise<ApiEntitiesProjectEntity>;
    update(this: any, reqdata?: ApiEntitiesProjectUpdateData, ctrl?: Control): Promise<ApiEntitiesProjectEntity>;
}
export { ApiEntitiesProjectEntity };
