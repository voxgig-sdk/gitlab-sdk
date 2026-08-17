import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesClustersAgentTokenBasic, ApiEntitiesClustersAgentTokenBasicLoadMatch } from '../GitlabTypes';
declare class ApiEntitiesClustersAgentTokenBasicEntity extends GitlabEntityBase<ApiEntitiesClustersAgentTokenBasic> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesClustersAgentTokenBasicEntity): ApiEntitiesClustersAgentTokenBasicEntity;
    load(this: any, reqmatch?: ApiEntitiesClustersAgentTokenBasicLoadMatch, ctrl?: Control): Promise<ApiEntitiesClustersAgentTokenBasicEntity>;
}
export { ApiEntitiesClustersAgentTokenBasicEntity };
