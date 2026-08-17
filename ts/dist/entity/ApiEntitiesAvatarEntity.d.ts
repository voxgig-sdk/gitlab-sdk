import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesAvatar, ApiEntitiesAvatarLoadMatch } from '../GitlabTypes';
declare class ApiEntitiesAvatarEntity extends GitlabEntityBase<ApiEntitiesAvatar> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesAvatarEntity): ApiEntitiesAvatarEntity;
    load(this: any, reqmatch?: ApiEntitiesAvatarLoadMatch, ctrl?: Control): Promise<ApiEntitiesAvatarEntity>;
}
export { ApiEntitiesAvatarEntity };
