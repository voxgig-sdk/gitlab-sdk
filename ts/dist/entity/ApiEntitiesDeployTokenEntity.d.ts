import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesDeployToken, ApiEntitiesDeployTokenLoadMatch, ApiEntitiesDeployTokenListMatch } from '../GitlabTypes';
declare class ApiEntitiesDeployTokenEntity extends GitlabEntityBase<ApiEntitiesDeployToken> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesDeployTokenEntity): ApiEntitiesDeployTokenEntity;
    load(this: any, reqmatch?: ApiEntitiesDeployTokenLoadMatch, ctrl?: Control): Promise<ApiEntitiesDeployTokenEntity>;
    list(this: any, reqmatch?: ApiEntitiesDeployTokenListMatch, ctrl?: Control): Promise<ApiEntitiesDeployTokenEntity[]>;
}
export { ApiEntitiesDeployTokenEntity };
