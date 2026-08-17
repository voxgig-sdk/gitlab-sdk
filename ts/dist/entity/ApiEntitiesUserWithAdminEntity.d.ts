import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesUserWithAdmin, ApiEntitiesUserWithAdminListMatch } from '../GitlabTypes';
declare class ApiEntitiesUserWithAdminEntity extends GitlabEntityBase<ApiEntitiesUserWithAdmin> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesUserWithAdminEntity): ApiEntitiesUserWithAdminEntity;
    list(this: any, reqmatch?: ApiEntitiesUserWithAdminListMatch, ctrl?: Control): Promise<ApiEntitiesUserWithAdminEntity[]>;
}
export { ApiEntitiesUserWithAdminEntity };
