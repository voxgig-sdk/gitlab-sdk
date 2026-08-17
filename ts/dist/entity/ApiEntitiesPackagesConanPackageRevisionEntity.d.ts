import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesPackagesConanPackageRevision, ApiEntitiesPackagesConanPackageRevisionListMatch } from '../GitlabTypes';
declare class ApiEntitiesPackagesConanPackageRevisionEntity extends GitlabEntityBase<ApiEntitiesPackagesConanPackageRevision> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesPackagesConanPackageRevisionEntity): ApiEntitiesPackagesConanPackageRevisionEntity;
    list(this: any, reqmatch?: ApiEntitiesPackagesConanPackageRevisionListMatch, ctrl?: Control): Promise<ApiEntitiesPackagesConanPackageRevisionEntity[]>;
}
export { ApiEntitiesPackagesConanPackageRevisionEntity };
