import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesResourceAccessTokenWithToken, ApiEntitiesResourceAccessTokenWithTokenCreateData } from '../GitlabTypes';
declare class ApiEntitiesResourceAccessTokenWithTokenEntity extends GitlabEntityBase<ApiEntitiesResourceAccessTokenWithToken> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesResourceAccessTokenWithTokenEntity): ApiEntitiesResourceAccessTokenWithTokenEntity;
    create(this: any, reqdata?: ApiEntitiesResourceAccessTokenWithTokenCreateData, ctrl?: Control): Promise<ApiEntitiesResourceAccessTokenWithTokenEntity>;
}
export { ApiEntitiesResourceAccessTokenWithTokenEntity };
