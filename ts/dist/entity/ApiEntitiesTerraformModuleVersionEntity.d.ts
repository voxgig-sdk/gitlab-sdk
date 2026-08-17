import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesTerraformModuleVersion, ApiEntitiesTerraformModuleVersionLoadMatch, ApiEntitiesTerraformModuleVersionListMatch } from '../GitlabTypes';
declare class ApiEntitiesTerraformModuleVersionEntity extends GitlabEntityBase<ApiEntitiesTerraformModuleVersion> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesTerraformModuleVersionEntity): ApiEntitiesTerraformModuleVersionEntity;
    load(this: any, reqmatch?: ApiEntitiesTerraformModuleVersionLoadMatch, ctrl?: Control): Promise<ApiEntitiesTerraformModuleVersionEntity>;
    list(this: any, reqmatch?: ApiEntitiesTerraformModuleVersionListMatch, ctrl?: Control): Promise<ApiEntitiesTerraformModuleVersionEntity[]>;
}
export { ApiEntitiesTerraformModuleVersionEntity };
