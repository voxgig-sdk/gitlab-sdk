import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesProjectsPackagesProtectionRule, ApiEntitiesProjectsPackagesProtectionRuleListMatch, ApiEntitiesProjectsPackagesProtectionRuleCreateData, ApiEntitiesProjectsPackagesProtectionRuleUpdateData } from '../GitlabTypes';
declare class ApiEntitiesProjectsPackagesProtectionRuleEntity extends GitlabEntityBase<ApiEntitiesProjectsPackagesProtectionRule> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesProjectsPackagesProtectionRuleEntity): ApiEntitiesProjectsPackagesProtectionRuleEntity;
    list(this: any, reqmatch?: ApiEntitiesProjectsPackagesProtectionRuleListMatch, ctrl?: Control): Promise<ApiEntitiesProjectsPackagesProtectionRuleEntity[]>;
    create(this: any, reqdata?: ApiEntitiesProjectsPackagesProtectionRuleCreateData, ctrl?: Control): Promise<ApiEntitiesProjectsPackagesProtectionRuleEntity>;
    update(this: any, reqdata?: ApiEntitiesProjectsPackagesProtectionRuleUpdateData, ctrl?: Control): Promise<ApiEntitiesProjectsPackagesProtectionRuleEntity>;
}
export { ApiEntitiesProjectsPackagesProtectionRuleEntity };
