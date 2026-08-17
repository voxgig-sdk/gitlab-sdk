import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesClusterGroup, ApiEntitiesClusterGroupLoadMatch, ApiEntitiesClusterGroupCreateData, ApiEntitiesClusterGroupUpdateData } from '../GitlabTypes';
declare class ApiEntitiesClusterGroupEntity extends GitlabEntityBase<ApiEntitiesClusterGroup> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesClusterGroupEntity): ApiEntitiesClusterGroupEntity;
    load(this: any, reqmatch?: ApiEntitiesClusterGroupLoadMatch, ctrl?: Control): Promise<ApiEntitiesClusterGroupEntity>;
    create(this: any, reqdata?: ApiEntitiesClusterGroupCreateData, ctrl?: Control): Promise<ApiEntitiesClusterGroupEntity>;
    update(this: any, reqdata?: ApiEntitiesClusterGroupUpdateData, ctrl?: Control): Promise<ApiEntitiesClusterGroupEntity>;
}
export { ApiEntitiesClusterGroupEntity };
