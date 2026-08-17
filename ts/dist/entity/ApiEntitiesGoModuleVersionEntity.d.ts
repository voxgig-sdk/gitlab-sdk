import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesGoModuleVersion, ApiEntitiesGoModuleVersionLoadMatch } from '../GitlabTypes';
declare class ApiEntitiesGoModuleVersionEntity extends GitlabEntityBase<ApiEntitiesGoModuleVersion> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesGoModuleVersionEntity): ApiEntitiesGoModuleVersionEntity;
    load(this: any, reqmatch?: ApiEntitiesGoModuleVersionLoadMatch, ctrl?: Control): Promise<ApiEntitiesGoModuleVersionEntity>;
}
export { ApiEntitiesGoModuleVersionEntity };
