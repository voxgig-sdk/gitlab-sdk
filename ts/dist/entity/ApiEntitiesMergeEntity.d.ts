import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesMerge, ApiEntitiesMergeLoadMatch, ApiEntitiesMergeCreateData, ApiEntitiesMergeUpdateData } from '../GitlabTypes';
declare class ApiEntitiesMergeEntity extends GitlabEntityBase<ApiEntitiesMerge> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesMergeEntity): ApiEntitiesMergeEntity;
    load(this: any, reqmatch?: ApiEntitiesMergeLoadMatch, ctrl?: Control): Promise<ApiEntitiesMergeEntity>;
    create(this: any, reqdata?: ApiEntitiesMergeCreateData, ctrl?: Control): Promise<ApiEntitiesMergeEntity>;
    update(this: any, reqdata?: ApiEntitiesMergeUpdateData, ctrl?: Control): Promise<ApiEntitiesMergeEntity>;
}
export { ApiEntitiesMergeEntity };
