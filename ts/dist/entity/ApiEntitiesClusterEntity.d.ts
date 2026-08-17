import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesCluster, ApiEntitiesClusterLoadMatch, ApiEntitiesClusterListMatch, ApiEntitiesClusterCreateData, ApiEntitiesClusterUpdateData } from '../GitlabTypes';
declare class ApiEntitiesClusterEntity extends GitlabEntityBase<ApiEntitiesCluster> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesClusterEntity): ApiEntitiesClusterEntity;
    load(this: any, reqmatch?: ApiEntitiesClusterLoadMatch, ctrl?: Control): Promise<ApiEntitiesClusterEntity>;
    list(this: any, reqmatch?: ApiEntitiesClusterListMatch, ctrl?: Control): Promise<ApiEntitiesClusterEntity[]>;
    create(this: any, reqdata?: ApiEntitiesClusterCreateData, ctrl?: Control): Promise<ApiEntitiesClusterEntity>;
    update(this: any, reqdata?: ApiEntitiesClusterUpdateData, ctrl?: Control): Promise<ApiEntitiesClusterEntity>;
}
export { ApiEntitiesClusterEntity };
