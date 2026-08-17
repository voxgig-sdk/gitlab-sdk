import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesDeployTokenWithToken, ApiEntitiesDeployTokenWithTokenCreateData } from '../GitlabTypes';
declare class ApiEntitiesDeployTokenWithTokenEntity extends GitlabEntityBase<ApiEntitiesDeployTokenWithToken> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesDeployTokenWithTokenEntity): ApiEntitiesDeployTokenWithTokenEntity;
    create(this: any, reqdata?: ApiEntitiesDeployTokenWithTokenCreateData, ctrl?: Control): Promise<ApiEntitiesDeployTokenWithTokenEntity>;
}
export { ApiEntitiesDeployTokenWithTokenEntity };
