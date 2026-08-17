import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesFeatureDefinition, ApiEntitiesFeatureDefinitionListMatch } from '../GitlabTypes';
declare class ApiEntitiesFeatureDefinitionEntity extends GitlabEntityBase<ApiEntitiesFeatureDefinition> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesFeatureDefinitionEntity): ApiEntitiesFeatureDefinitionEntity;
    list(this: any, reqmatch?: ApiEntitiesFeatureDefinitionListMatch, ctrl?: Control): Promise<ApiEntitiesFeatureDefinitionEntity[]>;
}
export { ApiEntitiesFeatureDefinitionEntity };
