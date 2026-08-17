import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesPackagesConanPackageSnapshot, ApiEntitiesPackagesConanPackageSnapshotLoadMatch } from '../GitlabTypes';
declare class ApiEntitiesPackagesConanPackageSnapshotEntity extends GitlabEntityBase<ApiEntitiesPackagesConanPackageSnapshot> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesPackagesConanPackageSnapshotEntity): ApiEntitiesPackagesConanPackageSnapshotEntity;
    load(this: any, reqmatch?: ApiEntitiesPackagesConanPackageSnapshotLoadMatch, ctrl?: Control): Promise<ApiEntitiesPackagesConanPackageSnapshotEntity>;
}
export { ApiEntitiesPackagesConanPackageSnapshotEntity };
