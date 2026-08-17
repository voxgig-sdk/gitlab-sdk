import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesPackagesConanRecipeManifest, ApiEntitiesPackagesConanRecipeManifestLoadMatch } from '../GitlabTypes';
declare class ApiEntitiesPackagesConanRecipeManifestEntity extends GitlabEntityBase<ApiEntitiesPackagesConanRecipeManifest> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesPackagesConanRecipeManifestEntity): ApiEntitiesPackagesConanRecipeManifestEntity;
    load(this: any, reqmatch?: ApiEntitiesPackagesConanRecipeManifestLoadMatch, ctrl?: Control): Promise<ApiEntitiesPackagesConanRecipeManifestEntity>;
}
export { ApiEntitiesPackagesConanRecipeManifestEntity };
