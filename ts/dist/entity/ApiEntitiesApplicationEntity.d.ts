import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesApplication, ApiEntitiesApplicationListMatch } from '../GitlabTypes';
declare class ApiEntitiesApplicationEntity extends GitlabEntityBase<ApiEntitiesApplication> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesApplicationEntity): ApiEntitiesApplicationEntity;
    list(this: any, reqmatch?: ApiEntitiesApplicationListMatch, ctrl?: Control): Promise<ApiEntitiesApplicationEntity[]>;
}
export { ApiEntitiesApplicationEntity };
