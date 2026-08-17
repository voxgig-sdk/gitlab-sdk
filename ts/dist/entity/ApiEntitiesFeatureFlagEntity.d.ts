import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesFeatureFlag, ApiEntitiesFeatureFlagLoadMatch, ApiEntitiesFeatureFlagListMatch, ApiEntitiesFeatureFlagCreateData, ApiEntitiesFeatureFlagUpdateData } from '../GitlabTypes';
declare class ApiEntitiesFeatureFlagEntity extends GitlabEntityBase<ApiEntitiesFeatureFlag> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesFeatureFlagEntity): ApiEntitiesFeatureFlagEntity;
    load(this: any, reqmatch?: ApiEntitiesFeatureFlagLoadMatch, ctrl?: Control): Promise<ApiEntitiesFeatureFlagEntity>;
    list(this: any, reqmatch?: ApiEntitiesFeatureFlagListMatch, ctrl?: Control): Promise<ApiEntitiesFeatureFlagEntity[]>;
    create(this: any, reqdata?: ApiEntitiesFeatureFlagCreateData, ctrl?: Control): Promise<ApiEntitiesFeatureFlagEntity>;
    update(this: any, reqdata?: ApiEntitiesFeatureFlagUpdateData, ctrl?: Control): Promise<ApiEntitiesFeatureFlagEntity>;
}
export { ApiEntitiesFeatureFlagEntity };
