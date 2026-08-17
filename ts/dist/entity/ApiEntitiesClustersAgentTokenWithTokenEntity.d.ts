import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesClustersAgentTokenWithToken, ApiEntitiesClustersAgentTokenWithTokenCreateData } from '../GitlabTypes';
declare class ApiEntitiesClustersAgentTokenWithTokenEntity extends GitlabEntityBase<ApiEntitiesClustersAgentTokenWithToken> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesClustersAgentTokenWithTokenEntity): ApiEntitiesClustersAgentTokenWithTokenEntity;
    create(this: any, reqdata?: ApiEntitiesClustersAgentTokenWithTokenCreateData, ctrl?: Control): Promise<ApiEntitiesClustersAgentTokenWithTokenEntity>;
}
export { ApiEntitiesClustersAgentTokenWithTokenEntity };
