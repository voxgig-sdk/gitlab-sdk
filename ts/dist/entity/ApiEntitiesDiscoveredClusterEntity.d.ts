import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesDiscoveredCluster, ApiEntitiesDiscoveredClusterLoadMatch } from '../GitlabTypes';
declare class ApiEntitiesDiscoveredClusterEntity extends GitlabEntityBase<ApiEntitiesDiscoveredCluster> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesDiscoveredClusterEntity): ApiEntitiesDiscoveredClusterEntity;
    load(this: any, reqmatch?: ApiEntitiesDiscoveredClusterLoadMatch, ctrl?: Control): Promise<ApiEntitiesDiscoveredClusterEntity>;
}
export { ApiEntitiesDiscoveredClusterEntity };
