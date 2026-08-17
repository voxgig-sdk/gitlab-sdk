import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesNamespacesStorageLimitExclusion, ApiEntitiesNamespacesStorageLimitExclusionLoadMatch, ApiEntitiesNamespacesStorageLimitExclusionCreateData } from '../GitlabTypes';
declare class ApiEntitiesNamespacesStorageLimitExclusionEntity extends GitlabEntityBase<ApiEntitiesNamespacesStorageLimitExclusion> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesNamespacesStorageLimitExclusionEntity): ApiEntitiesNamespacesStorageLimitExclusionEntity;
    load(this: any, reqmatch?: ApiEntitiesNamespacesStorageLimitExclusionLoadMatch, ctrl?: Control): Promise<ApiEntitiesNamespacesStorageLimitExclusionEntity>;
    create(this: any, reqdata?: ApiEntitiesNamespacesStorageLimitExclusionCreateData, ctrl?: Control): Promise<ApiEntitiesNamespacesStorageLimitExclusionEntity>;
}
export { ApiEntitiesNamespacesStorageLimitExclusionEntity };
