import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesPackagesConanRecipeRevision, ApiEntitiesPackagesConanRecipeRevisionListMatch } from '../GitlabTypes';
declare class ApiEntitiesPackagesConanRecipeRevisionEntity extends GitlabEntityBase<ApiEntitiesPackagesConanRecipeRevision> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesPackagesConanRecipeRevisionEntity): ApiEntitiesPackagesConanRecipeRevisionEntity;
    list(this: any, reqmatch?: ApiEntitiesPackagesConanRecipeRevisionListMatch, ctrl?: Control): Promise<ApiEntitiesPackagesConanRecipeRevisionEntity[]>;
}
export { ApiEntitiesPackagesConanRecipeRevisionEntity };
