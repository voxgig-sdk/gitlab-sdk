import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesFeature, ApiEntitiesFeatureListMatch, ApiEntitiesFeatureCreateData } from '../GitlabTypes';
declare class ApiEntitiesFeatureEntity extends GitlabEntityBase<ApiEntitiesFeature> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesFeatureEntity): ApiEntitiesFeatureEntity;
    list(this: any, reqmatch?: ApiEntitiesFeatureListMatch, ctrl?: Control): Promise<ApiEntitiesFeatureEntity[]>;
    create(this: any, reqdata?: ApiEntitiesFeatureCreateData, ctrl?: Control): Promise<ApiEntitiesFeatureEntity>;
}
export { ApiEntitiesFeatureEntity };
