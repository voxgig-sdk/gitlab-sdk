import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesBadge, ApiEntitiesBadgeLoadMatch, ApiEntitiesBadgeListMatch, ApiEntitiesBadgeCreateData, ApiEntitiesBadgeUpdateData } from '../GitlabTypes';
declare class ApiEntitiesBadgeEntity extends GitlabEntityBase<ApiEntitiesBadge> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesBadgeEntity): ApiEntitiesBadgeEntity;
    load(this: any, reqmatch?: ApiEntitiesBadgeLoadMatch, ctrl?: Control): Promise<ApiEntitiesBadgeEntity>;
    list(this: any, reqmatch?: ApiEntitiesBadgeListMatch, ctrl?: Control): Promise<ApiEntitiesBadgeEntity[]>;
    create(this: any, reqdata?: ApiEntitiesBadgeCreateData, ctrl?: Control): Promise<ApiEntitiesBadgeEntity>;
    update(this: any, reqdata?: ApiEntitiesBadgeUpdateData, ctrl?: Control): Promise<ApiEntitiesBadgeEntity>;
}
export { ApiEntitiesBadgeEntity };
