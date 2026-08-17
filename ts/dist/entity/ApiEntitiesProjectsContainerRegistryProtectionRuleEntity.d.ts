import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesProjectsContainerRegistryProtectionRule, ApiEntitiesProjectsContainerRegistryProtectionRuleListMatch, ApiEntitiesProjectsContainerRegistryProtectionRuleCreateData, ApiEntitiesProjectsContainerRegistryProtectionRuleUpdateData } from '../GitlabTypes';
declare class ApiEntitiesProjectsContainerRegistryProtectionRuleEntity extends GitlabEntityBase<ApiEntitiesProjectsContainerRegistryProtectionRule> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesProjectsContainerRegistryProtectionRuleEntity): ApiEntitiesProjectsContainerRegistryProtectionRuleEntity;
    list(this: any, reqmatch?: ApiEntitiesProjectsContainerRegistryProtectionRuleListMatch, ctrl?: Control): Promise<ApiEntitiesProjectsContainerRegistryProtectionRuleEntity[]>;
    create(this: any, reqdata?: ApiEntitiesProjectsContainerRegistryProtectionRuleCreateData, ctrl?: Control): Promise<ApiEntitiesProjectsContainerRegistryProtectionRuleEntity>;
    update(this: any, reqdata?: ApiEntitiesProjectsContainerRegistryProtectionRuleUpdateData, ctrl?: Control): Promise<ApiEntitiesProjectsContainerRegistryProtectionRuleEntity>;
}
export { ApiEntitiesProjectsContainerRegistryProtectionRuleEntity };
