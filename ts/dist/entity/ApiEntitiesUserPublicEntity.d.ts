import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesUserPublic, ApiEntitiesUserPublicListMatch } from '../GitlabTypes';
declare class ApiEntitiesUserPublicEntity extends GitlabEntityBase<ApiEntitiesUserPublic> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesUserPublicEntity): ApiEntitiesUserPublicEntity;
    list(this: any, reqmatch?: ApiEntitiesUserPublicListMatch, ctrl?: Control): Promise<ApiEntitiesUserPublicEntity[]>;
}
export { ApiEntitiesUserPublicEntity };
