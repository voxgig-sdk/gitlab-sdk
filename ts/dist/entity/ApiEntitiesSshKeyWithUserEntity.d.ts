import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesSshKeyWithUser, ApiEntitiesSshKeyWithUserLoadMatch } from '../GitlabTypes';
declare class ApiEntitiesSshKeyWithUserEntity extends GitlabEntityBase<ApiEntitiesSshKeyWithUser> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesSshKeyWithUserEntity): ApiEntitiesSshKeyWithUserEntity;
    load(this: any, reqmatch?: ApiEntitiesSshKeyWithUserLoadMatch, ctrl?: Control): Promise<ApiEntitiesSshKeyWithUserEntity>;
}
export { ApiEntitiesSshKeyWithUserEntity };
