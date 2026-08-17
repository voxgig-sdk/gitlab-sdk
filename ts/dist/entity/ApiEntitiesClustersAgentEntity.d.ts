import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesClustersAgent, ApiEntitiesClustersAgentLoadMatch, ApiEntitiesClustersAgentCreateData } from '../GitlabTypes';
declare class ApiEntitiesClustersAgentEntity extends GitlabEntityBase<ApiEntitiesClustersAgent> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesClustersAgentEntity): ApiEntitiesClustersAgentEntity;
    load(this: any, reqmatch?: ApiEntitiesClustersAgentLoadMatch, ctrl?: Control): Promise<ApiEntitiesClustersAgentEntity>;
    create(this: any, reqdata?: ApiEntitiesClustersAgentCreateData, ctrl?: Control): Promise<ApiEntitiesClustersAgentEntity>;
}
export { ApiEntitiesClustersAgentEntity };
