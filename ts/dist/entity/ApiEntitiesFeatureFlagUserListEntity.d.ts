import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesFeatureFlagUserList, ApiEntitiesFeatureFlagUserListLoadMatch, ApiEntitiesFeatureFlagUserListListMatch, ApiEntitiesFeatureFlagUserListCreateData, ApiEntitiesFeatureFlagUserListUpdateData } from '../GitlabTypes';
declare class ApiEntitiesFeatureFlagUserListEntity extends GitlabEntityBase<ApiEntitiesFeatureFlagUserList> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesFeatureFlagUserListEntity): ApiEntitiesFeatureFlagUserListEntity;
    load(this: any, reqmatch?: ApiEntitiesFeatureFlagUserListLoadMatch, ctrl?: Control): Promise<ApiEntitiesFeatureFlagUserListEntity>;
    list(this: any, reqmatch?: ApiEntitiesFeatureFlagUserListListMatch, ctrl?: Control): Promise<ApiEntitiesFeatureFlagUserListEntity[]>;
    create(this: any, reqdata?: ApiEntitiesFeatureFlagUserListCreateData, ctrl?: Control): Promise<ApiEntitiesFeatureFlagUserListEntity>;
    update(this: any, reqdata?: ApiEntitiesFeatureFlagUserListUpdateData, ctrl?: Control): Promise<ApiEntitiesFeatureFlagUserListEntity>;
}
export { ApiEntitiesFeatureFlagUserListEntity };
