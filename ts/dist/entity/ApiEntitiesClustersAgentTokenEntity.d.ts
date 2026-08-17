import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesClustersAgentToken, ApiEntitiesClustersAgentTokenLoadMatch } from '../GitlabTypes';
declare class ApiEntitiesClustersAgentTokenEntity extends GitlabEntityBase<ApiEntitiesClustersAgentToken> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesClustersAgentTokenEntity): ApiEntitiesClustersAgentTokenEntity;
    load(this: any, reqmatch?: ApiEntitiesClustersAgentTokenLoadMatch, ctrl?: Control): Promise<ApiEntitiesClustersAgentTokenEntity>;
}
export { ApiEntitiesClustersAgentTokenEntity };
