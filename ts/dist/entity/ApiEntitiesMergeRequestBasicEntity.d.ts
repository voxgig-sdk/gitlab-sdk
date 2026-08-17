import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesMergeRequestBasic, ApiEntitiesMergeRequestBasicLoadMatch, ApiEntitiesMergeRequestBasicListMatch } from '../GitlabTypes';
declare class ApiEntitiesMergeRequestBasicEntity extends GitlabEntityBase<ApiEntitiesMergeRequestBasic> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesMergeRequestBasicEntity): ApiEntitiesMergeRequestBasicEntity;
    load(this: any, reqmatch?: ApiEntitiesMergeRequestBasicLoadMatch, ctrl?: Control): Promise<ApiEntitiesMergeRequestBasicEntity>;
    list(this: any, reqmatch?: ApiEntitiesMergeRequestBasicListMatch, ctrl?: Control): Promise<ApiEntitiesMergeRequestBasicEntity[]>;
}
export { ApiEntitiesMergeRequestBasicEntity };
