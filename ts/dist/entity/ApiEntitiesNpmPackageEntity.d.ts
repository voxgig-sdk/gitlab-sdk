import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesNpmPackage, ApiEntitiesNpmPackageLoadMatch } from '../GitlabTypes';
declare class ApiEntitiesNpmPackageEntity extends GitlabEntityBase<ApiEntitiesNpmPackage> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesNpmPackageEntity): ApiEntitiesNpmPackageEntity;
    load(this: any, reqmatch?: ApiEntitiesNpmPackageLoadMatch, ctrl?: Control): Promise<ApiEntitiesNpmPackageEntity>;
}
export { ApiEntitiesNpmPackageEntity };
