import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesNpmPackageTag, ApiEntitiesNpmPackageTagLoadMatch } from '../GitlabTypes';
declare class ApiEntitiesNpmPackageTagEntity extends GitlabEntityBase<ApiEntitiesNpmPackageTag> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesNpmPackageTagEntity): ApiEntitiesNpmPackageTagEntity;
    load(this: any, reqmatch?: ApiEntitiesNpmPackageTagLoadMatch, ctrl?: Control): Promise<ApiEntitiesNpmPackageTagEntity>;
}
export { ApiEntitiesNpmPackageTagEntity };
