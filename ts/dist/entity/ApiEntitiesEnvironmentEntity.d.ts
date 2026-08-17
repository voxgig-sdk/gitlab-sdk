import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesEnvironment, ApiEntitiesEnvironmentLoadMatch, ApiEntitiesEnvironmentListMatch, ApiEntitiesEnvironmentCreateData, ApiEntitiesEnvironmentUpdateData } from '../GitlabTypes';
declare class ApiEntitiesEnvironmentEntity extends GitlabEntityBase<ApiEntitiesEnvironment> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesEnvironmentEntity): ApiEntitiesEnvironmentEntity;
    load(this: any, reqmatch?: ApiEntitiesEnvironmentLoadMatch, ctrl?: Control): Promise<ApiEntitiesEnvironmentEntity>;
    list(this: any, reqmatch?: ApiEntitiesEnvironmentListMatch, ctrl?: Control): Promise<ApiEntitiesEnvironmentEntity[]>;
    create(this: any, reqdata?: ApiEntitiesEnvironmentCreateData, ctrl?: Control): Promise<ApiEntitiesEnvironmentEntity>;
    update(this: any, reqdata?: ApiEntitiesEnvironmentUpdateData, ctrl?: Control): Promise<ApiEntitiesEnvironmentEntity>;
}
export { ApiEntitiesEnvironmentEntity };
