import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesPackagesConanPackageManifest, ApiEntitiesPackagesConanPackageManifestLoadMatch } from '../GitlabTypes';
declare class ApiEntitiesPackagesConanPackageManifestEntity extends GitlabEntityBase<ApiEntitiesPackagesConanPackageManifest> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesPackagesConanPackageManifestEntity): ApiEntitiesPackagesConanPackageManifestEntity;
    load(this: any, reqmatch?: ApiEntitiesPackagesConanPackageManifestLoadMatch, ctrl?: Control): Promise<ApiEntitiesPackagesConanPackageManifestEntity>;
}
export { ApiEntitiesPackagesConanPackageManifestEntity };
