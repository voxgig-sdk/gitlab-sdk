import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesPackagesConanRecipeSnapshot, ApiEntitiesPackagesConanRecipeSnapshotLoadMatch } from '../GitlabTypes';
declare class ApiEntitiesPackagesConanRecipeSnapshotEntity extends GitlabEntityBase<ApiEntitiesPackagesConanRecipeSnapshot> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesPackagesConanRecipeSnapshotEntity): ApiEntitiesPackagesConanRecipeSnapshotEntity;
    load(this: any, reqmatch?: ApiEntitiesPackagesConanRecipeSnapshotLoadMatch, ctrl?: Control): Promise<ApiEntitiesPackagesConanRecipeSnapshotEntity>;
}
export { ApiEntitiesPackagesConanRecipeSnapshotEntity };
