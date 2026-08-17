import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesPersonalAccessTokenWithToken, ApiEntitiesPersonalAccessTokenWithTokenCreateData } from '../GitlabTypes';
declare class ApiEntitiesPersonalAccessTokenWithTokenEntity extends GitlabEntityBase<ApiEntitiesPersonalAccessTokenWithToken> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesPersonalAccessTokenWithTokenEntity): ApiEntitiesPersonalAccessTokenWithTokenEntity;
    create(this: any, reqdata?: ApiEntitiesPersonalAccessTokenWithTokenCreateData, ctrl?: Control): Promise<ApiEntitiesPersonalAccessTokenWithTokenEntity>;
}
export { ApiEntitiesPersonalAccessTokenWithTokenEntity };
