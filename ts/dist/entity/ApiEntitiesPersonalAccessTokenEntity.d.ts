import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesPersonalAccessToken, ApiEntitiesPersonalAccessTokenListMatch } from '../GitlabTypes';
declare class ApiEntitiesPersonalAccessTokenEntity extends GitlabEntityBase<ApiEntitiesPersonalAccessToken> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesPersonalAccessTokenEntity): ApiEntitiesPersonalAccessTokenEntity;
    list(this: any, reqmatch?: ApiEntitiesPersonalAccessTokenListMatch, ctrl?: Control): Promise<ApiEntitiesPersonalAccessTokenEntity[]>;
}
export { ApiEntitiesPersonalAccessTokenEntity };
