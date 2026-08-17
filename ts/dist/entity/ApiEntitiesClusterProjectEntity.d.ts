import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesClusterProject, ApiEntitiesClusterProjectLoadMatch, ApiEntitiesClusterProjectCreateData, ApiEntitiesClusterProjectUpdateData } from '../GitlabTypes';
declare class ApiEntitiesClusterProjectEntity extends GitlabEntityBase<ApiEntitiesClusterProject> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesClusterProjectEntity): ApiEntitiesClusterProjectEntity;
    load(this: any, reqmatch?: ApiEntitiesClusterProjectLoadMatch, ctrl?: Control): Promise<ApiEntitiesClusterProjectEntity>;
    create(this: any, reqdata?: ApiEntitiesClusterProjectCreateData, ctrl?: Control): Promise<ApiEntitiesClusterProjectEntity>;
    update(this: any, reqdata?: ApiEntitiesClusterProjectUpdateData, ctrl?: Control): Promise<ApiEntitiesClusterProjectEntity>;
}
export { ApiEntitiesClusterProjectEntity };
