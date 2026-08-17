import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesPackage, ApiEntitiesPackageLoadMatch, ApiEntitiesPackageListMatch } from '../GitlabTypes';
declare class ApiEntitiesPackageEntity extends GitlabEntityBase<ApiEntitiesPackage> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesPackageEntity): ApiEntitiesPackageEntity;
    load(this: any, reqmatch?: ApiEntitiesPackageLoadMatch, ctrl?: Control): Promise<ApiEntitiesPackageEntity>;
    list(this: any, reqmatch?: ApiEntitiesPackageListMatch, ctrl?: Control): Promise<ApiEntitiesPackageEntity[]>;
}
export { ApiEntitiesPackageEntity };
